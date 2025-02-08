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
        "insights",
        "startups",
        "healthcare",
        "fintech",
        "retail",
        "medien",
        "e-commerce",
        "automotive",
        "transport-logistik",
        "individuelle-softwareentwicklung",
        "webentwicklung",
        "mobile-app-entwicklung",
        "cloud-entwicklung",
        "api-entwicklung",
        "it-strategie-planung",
        "technologiebewertung",
        "infrastrukturberatung",
        "cybersecurity-beratung",
        "digitale-transformationsberatung",
        "compliance-risikomanagement",
        "dedizierte-entwicklungsteams",
        "projektbasiertes-nearshoring",
        "teamerweiterung",
        "qualitaetssicherung-testing",
        "wartung-support",
        "machine-learning-loesungen",
        "natuerliche-sprachverarbeitung-nlp",
        "computer-vision-anwendungen",
        "praediktive-analytik",
        "ki-gestuetzte-chatbots",
        "retrieval-augmented-generation-rag-de",
      ]
    : [
        "software-development",
        "it-consulting",
        "nearshoring",
        "ai-development",
        "careers",
        "contact",
        "about",
        "insights",
        "startups",
        "healthcare",
        "fintech",
        "retail",
        "media",
        "e-commerce",
        "automotive",
        "transportation-logistics",
        "custom-software-development",
        "web-development",
        "mobile-app-development",
        "cloud-development",
        "api-development",
        "it-strategy-planning",
        "technology-assessment",
        "infrastructure-consulting",
        "cybersecurity-consulting",
        "digital-transformation-consulting",
        "compliance-risk-management",
        "dedicated-development-teams",
        "project-based-nearshoring",
        "staff-augmentation",
        "quality-assurance-testing",
        "maintenance-support",
        "machine-learning-solutions",
        "natural-language-processing-nlp",
        "computer-vision-applications",
        "predictive-analytics",
        "ai-powered-chatbots",
        "retrieval-augmented-generation-rag",
      ];

const str = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
<url><loc>${siteUrl}</loc></url>
${paths.map((path) => `<url><loc>${siteUrl}/${path}</loc></url>`).join("")}
</urlset>`;

export const GET: APIRoute = () => {
  return new Response(str);
};
