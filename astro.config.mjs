// @ts-check
import { defineConfig, envField } from "astro/config";

import tailwind from "@astrojs/tailwind";

import netlify from "@astrojs/netlify";

import react from "@astrojs/react";

import { imageService } from "@unpic/astro/service";

// https://astro.build/config
export default defineConfig({
  site:
    process.env.PUBLIC_CURRENT_LANG === "de"
      ? process.env.PUBLIC_SITE_URL_DE
      : process.env.PUBLIC_SITE_URL_EN,
  vite: {
    server: {
      allowedHosts: [
        "nearup-local.io",
        "nearup-local.de",
        "nearup.io",
        "nearup-it.de",
      ],
    },
  },
  env: {
    schema: {
      PUBLIC_SITE_URL_EN: envField.string({
        context: "client",
        access: "public",
        optional: false,
      }),
      PUBLIC_SITE_URL_DE: envField.string({
        context: "client",
        access: "public",
        optional: false,
      }),
    },
  },
  image: {
    service: imageService({
      // fallbackService: "netlify",
      placeholder: "blurhash",
    }),
  },
  integrations: [tailwind(), react()],
  adapter: netlify(),
});
