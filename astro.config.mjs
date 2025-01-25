// @ts-check
import netlify from "@astrojs/netlify";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import { imageService } from "@unpic/astro/service";
import { defineConfig, envField } from "astro/config";

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
    plugins: [tailwindcss()],
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
  integrations: [react()],
  adapter: netlify(),
});
