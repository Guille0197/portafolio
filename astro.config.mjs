import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import astroMetaTags from "astro-meta-tags";

import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), robotsTxt(), astroMetaTags()],
  site: "https://porfolio.dev/", //TODO: corregir esto
});
