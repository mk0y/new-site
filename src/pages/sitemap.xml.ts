import type { APIRoute } from "astro";

const str = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
<sitemap>
<loc>https://astro.build/sitemap-0.xml</loc>
</sitemap>
</sitemapindex>`;

export const GET: APIRoute = () => {
  // const sitemapURL = new URL(`${import.meta.env.SITE}/sitemap.xml`);
  return new Response(str);
};
