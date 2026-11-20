#!/usr/bin/env python3
"""Fetch Guillermo Navarro's public Credly badges into the Astro data snapshot.

Credly's public badges.json endpoint is undocumented and may change. The
snapshot lets the static portfolio keep rendering the last successful sync.
"""
from __future__ import annotations

import json
import sys
from datetime import datetime, timezone
from pathlib import Path
from urllib.error import HTTPError, URLError
from urllib.request import Request, urlopen

CREDLY_USER = "guillermo-navarro.e5ab8764"
PROFILE_URL = f"https://www.credly.com/users/{CREDLY_USER}"
ENDPOINT = f"{PROFILE_URL}/badges.json"
PAGE_SIZE = 48
MAX_PAGES = 100
OUTPUT = Path(__file__).resolve().parents[1] / "src" / "data" / "credly-badges.json"


def get_page(page: int) -> list[dict]:
    url = f"{ENDPOINT}?page={page}&page_size={PAGE_SIZE}"
    request = Request(
        url,
        headers={
            "Accept": "application/json",
            "User-Agent": "gnavarro.dev Credly badge sync (+https://gnavarro.dev)",
        },
    )
    try:
        with urlopen(request, timeout=25) as response:
            payload = json.loads(response.read().decode("utf-8"))
    except HTTPError as error:
        raise RuntimeError(f"Credly returned HTTP {error.code} for page {page}") from error
    except (URLError, TimeoutError, json.JSONDecodeError) as error:
        raise RuntimeError(f"Could not retrieve Credly page {page}: {error}") from error

    items = payload.get("data")
    if not isinstance(items, list):
        raise RuntimeError("Credly response did not contain the expected 'data' array.")
    return items


def normalize_badge(item: dict) -> dict | None:
    state = item.get("state")
    if state and state.lower() != "accepted":
        return None
    if item.get("public") is False:
        return None

    template = item.get("badge_template") or {}
    badge_id = item.get("id")
    name = template.get("name") or item.get("name")
    image_url = item.get("image_url") or template.get("image_url")
    if not badge_id or not name or not image_url:
        return None

    if image_url.startswith("https://images.credly.com/images/"):
        image_url = image_url.replace(
            "https://images.credly.com/images/",
            "https://images.credly.com/size/220x220/images/",
            1,
        )

    entities = (item.get("issuer") or {}).get("entities") or []
    issuer_names = [
        entity.get("entity", {}).get("name")
        for entity in entities
        if entity.get("entity", {}).get("name")
    ]
    skills = [
        skill.get("name")
        for skill in (template.get("skills") or [])
        if skill.get("name")
    ]

    return {
        "id": str(badge_id),
        "name": str(name),
        "issuer": " · ".join(issuer_names) or "Credly",
        "issuedAt": item.get("issued_at_date") or item.get("issued_at") or "",
        "imageUrl": image_url,
        "credentialUrl": item.get("public_url") or f"https://www.credly.com/badges/{badge_id}/public_url",
        "description": template.get("description") or "",
        "skills": skills,
    }


def main() -> None:
    items: list[dict] = []
    for page in range(1, MAX_PAGES + 1):
        page_items = get_page(page)
        items.extend(page_items)
        if len(page_items) < PAGE_SIZE:
            break
    else:
        raise RuntimeError(f"Credly pagination exceeded the safety limit of {MAX_PAGES} pages.")

    badges = [badge for item in items if (badge := normalize_badge(item))]
    badges.sort(key=lambda badge: badge["issuedAt"], reverse=True)

    snapshot = {
        "profileUrl": PROFILE_URL,
        "syncedAt": datetime.now(timezone.utc).isoformat(timespec="seconds").replace("+00:00", "Z"),
        "badges": badges,
    }
    OUTPUT.write_text(json.dumps(snapshot, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"Synced {len(badges)} public Credly badge(s) to {OUTPUT}")


if __name__ == "__main__":
    try:
        main()
    except Exception as error:
        print(f"Credly badge sync failed: {error}", file=sys.stderr)
        sys.exit(1)
