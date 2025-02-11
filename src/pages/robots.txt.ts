import type { APIRoute } from "astro";

const getRobotsTxt = () => `
User-agent: *
Allow: /

Sitemap: ${import.meta.env.SITE}/sitemap.xml
`;

export const GET: APIRoute = () => {
  return new Response(getRobotsTxt());
};
