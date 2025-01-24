// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import netlify from "@astrojs/netlify";

import react from "@astrojs/react";

import { imageService } from "@unpic/astro/service";

// https://astro.build/config
export default defineConfig({
  image: {
    service: imageService({
      // fallbackService: "netlify",
      placeholder: "blurhash",
    }),
  },
  integrations: [tailwind(), react()],
  adapter: netlify(),
});
