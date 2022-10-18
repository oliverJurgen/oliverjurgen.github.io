import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://oliverJurgen.github.io",
  base: "/oliver-astro-blog",

  integrations: [mdx(), sitemap(), tailwind()],
  server: {
    port: 3001,
    host: true,
  },
});
