import type { APIRoute } from "astro";

const getRobotsTxt = () => `
User-agent: *
Allow: /

Sitemap: ${import.meta.env.SITE}/sitemap.xml
`;

export const GET: APIRoute = ({ site }) => {
  console.log({ site });
  // const sitemapURL = new URL(`sitemap.xml`, site);
  return new Response(getRobotsTxt());
};
