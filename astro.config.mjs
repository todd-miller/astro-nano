import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import starlight from "@astrojs/starlight";
import expressiveCode from "astro-expressive-code";

export default defineConfig({
  site: "https://astro-nano-demo.vercel.app",
  integrations: [
    starlight({
      title: "Todd's Portfolio",
      customCss: [
        './src/styles/global.css'
      ]
    }),
    // expressiveCode(),
    mdx(),
    sitemap(),
    tailwind(),
    react(),
  ],
});
