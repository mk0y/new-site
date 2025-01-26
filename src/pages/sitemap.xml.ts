import type { APIRoute } from "astro";

const lang = import.meta.env.PUBLIC_CURRENT_LANG;

const siteUrl =
  lang === "de"
    ? import.meta.env.PUBLIC_SITE_URL_DE
    : import.meta.env.PUBLIC_SITE_URL_EN;

const paths =
  lang === "de"
    ? [
        "software-entwicklung",
        "it-beratung",
        "nearshoring",
        "ki-entwicklung",
        "karriere",
        "kontakt",
        "ueber-uns",
      ]
    : [
        "software-development",
        "it-consulting",
        "nearshoring",
        "ai-development",
        "careers",
        "contact",
        "about",
      ];

const str = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
<url><loc>${siteUrl}</loc></url>
${paths.map((path) => `<url><loc>${siteUrl}/${path}</loc></url>`).join("")}
</urlset>`;

export const GET: APIRoute = () => {
  return new Response(str);
};
