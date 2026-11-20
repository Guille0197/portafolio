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


def load_cached_badges() -> list[dict]:
    if not OUTPUT.exists():
        return []

    try:
        snapshot = json.loads(OUTPUT.read_text(encoding="utf-8"))
    except (OSError, json.JSONDecodeError) as error:
        raise RuntimeError(f"Could not read the existing Credly cache: {error}") from error

    cached = snapshot.get("badges")
    if not isinstance(cached, list):
        raise RuntimeError("The existing Credly cache is invalid; refusing to overwrite it.")

    return cached


def main() -> None:
    items: list[dict] = []
    for page in range(1, MAX_PAGES + 1):
        page_items = get_page(page)
        items.extend(page_items)
        if len(page_items) < PAGE_SIZE:
            break
    else:
        raise RuntimeError(f"Credly pagination exceeded the safety limit of {MAX_PAGES} pages.")

    fetched_badges = [badge for item in items if (badge := normalize_badge(item))]
    if not fetched_badges:
        raise RuntimeError(
            "Credly returned zero usable public badges. The existing cache was preserved."
        )

    cached_badges = load_cached_badges()
    badges_by_id = {
        str(badge["id"]): badge
        for badge in cached_badges
        if isinstance(badge, dict) and badge.get("id")
    }

    new_badges = [
        badge for badge in fetched_badges
        if badge["id"] not in badges_by_id
    ]

    if not new_badges:
        print(
            f"No new Credly badges found. Preserved all {len(badges_by_id)} "
            "cached badge(s); no portfolio deployment is needed."
        )
        return

    # Append new credentials without deleting previously cached badges.
    for badge in new_badges:
        badges_by_id[badge["id"]] = badge

    badges = list(badges_by_id.values())
    badges.sort(key=lambda badge: badge.get("issuedAt") or "", reverse=True)

    snapshot = {
        "profileUrl": PROFILE_URL,
        "syncedAt": datetime.now(timezone.utc).isoformat(timespec="seconds").replace("+00:00", "Z"),
        "badges": badges,
    }
    OUTPUT.write_text(json.dumps(snapshot, ensure_ascii=False, indent=2) + "\\n", encoding="utf-8")
    print(
        f"Added {len(new_badges)} new Credly badge(s). "
        f"Cache now contains {len(badges)} badge(s): {OUTPUT}"
    )

if __name__ == "__main__":
    try:
        main()
    except Exception as error:
        print(f"Credly badge sync failed: {error}", file=sys.stderr)
        sys.exit(1)
