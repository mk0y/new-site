// @ts-check
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import { loadEnv } from "vite";
import { imageService } from "@unpic/astro/service";
import { defineConfig, envField } from "astro/config";
// import { getSecret } from "astro:env";
import netlify from "@astrojs/netlify";

import alpinejs from "@astrojs/alpinejs";

// @ts-ignore
const { PUBLIC_CURRENT_LANG } = loadEnv(process.env.PUBLIC_CURRENT_LANG, process.cwd(), "");

// @ts-ignore
const { PUBLIC_SITE_URL_DE } = loadEnv(process.env.PUBLIC_SITE_URL_DE, process.cwd(), "");

// @ts-ignore
const { PUBLIC_SITE_URL_EN } = loadEnv(process.env.PUBLIC_SITE_URL_EN, process.cwd(), "");

// https://astro.build/config
export default defineConfig({
  site: PUBLIC_CURRENT_LANG === "de" ? PUBLIC_SITE_URL_DE : PUBLIC_SITE_URL_EN,
  vite: {
    server: {
      allowedHosts: [
        "nearup-local.io",
        "nearup-local.de",
        "nearup.io",
        "nearup-it.de",
        "nearup-en.netlify.app",
        "nearup-de.netlify.app",
      ],
    },
    plugins: [tailwindcss()],
  },
  image: {
    service: imageService({
      placeholder: "blurhash",
    }),
  },
  integrations: [react(), alpinejs()],
  // output: "server",
  adapter: netlify(),
  // i18n: {
  //   locales: ["en", "de"],
  //   defaultLocale: "de",
  //   routing: {
  //     prefixDefaultLocale: false,
  //   },
  //   domains: {
  //     de: PUBLIC_SITE_URL_DE,
  //     en: PUBLIC_SITE_URL_EN,
  //   },
  // },
});