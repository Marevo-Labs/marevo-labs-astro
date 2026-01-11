// @ts-check
import { defineConfig } from "astro/config"

import react from "@astrojs/react"
import netlify from "@astrojs/netlify"
import partytown from "@astrojs/partytown"
import sitemap from "@astrojs/sitemap"
import tailwindcss from "@tailwindcss/vite"
import icon from "astro-icon"

// https://astro.build/config
export default defineConfig({
  site: "https://marevo-labs.dev",
  integrations: [
    react(),
    sitemap(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
    icon(),
  ],
  adapter: netlify(),
  vite: {
    plugins: [tailwindcss()],
  },
})
