export const getCurrentLang = (host: string) => {
  const tld = host.split(":")[0].split(".")[1];
  return tld === "io" || host.includes("-en") ? "en" : "de";
};

export const getCurrentTranslations = async (lang: string) => {
  let i18nData;
  if (lang === "en") {
    i18nData = await import("./i18n.en.json");
  } else {
    i18nData = await import("./i18n.de.json");
  }
  return i18nData;
};

export const trimSlashEnd = (str: string) => {
  return str.replace(/\/$/, "");
};

export const kebabCase = (str: string) => {
  // Transportation & Logistics -> transportation-logistics
  return str
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/&/g, "")
    .replace(/ /g, "-")
    .replace(/--/g, "-");
};

function capitalizeFirstLetter(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export const toBreadcrumbText = (str: string) => {
  const umlautMap = {
    ue: "ü",
    Ue: "Ü",
    ae: "ä",
    Ae: "Ä",
    oe: "ö",
    Oe: "Ö",
    ss: "ß",
  };

  // capitalize first letter
  return capitalizeFirstLetter(
    str
      .replace(
        /ue|Ue|ae|Ae|oe|Oe|ss/g,
        (match) => umlautMap[match as keyof typeof umlautMap] || match,
      )
      .replace(/-/g, " "),
  );
};

export const pathMapperEn: Record<string, string> = {
  "/about": "/ueber-uns",
  "/careers": "/karriere",
  "/contact": "/kontakt",
  "/software-development": "/softwareentwicklung",
  "/it-consulting": "/it-beratung",
  "/nearshoring": "/nearshoring-de",
  "/ai-development": "/ki-entwicklung",
  "/startups": "/startups",
  "/healthcare": "/healtcare",
  "/fintech": "/fintech",
  "/retail": "/retail",
  "/media": "/medien",
  "/e-commerce": "/e-commerce",
  "/automotive": "/automotive",
  "/transportation-logistics": "/transport-logistik",
  "/it-strategy-planning": "/it-strategie-planung",
  "/custom-software-development": "/individuelle-softwareentwicklung",
  "/web-development": "/webentwicklung",
  "/mobile-app-development": "/mobile-app-entwicklung",
  "/cloud-development": "/cloud-entwicklung",
  "/api-development": "/api-entwicklung",
  "/technology-assessment": "/technologiebewertung",
  "/infrastructure-consulting": "/infrastrukturberatung",
  "/cybersecurity-consulting": "/cybersecurity-beratung",
  "/digital-transformation-consulting": "/digitale-transformationsberatung",
  "/compliance-risk-management": "/compliance-risikomanagement",
  "/dedicated-development-teams": "/dedizierte-entwicklungsteams",
  "/project-based-nearshoring": "/projektbasiertes-nearshoring",
  "/staff-augmentation": "/teamerweiterung",
  "/quality-assurance-testing": "/qualitaetssicherung-testing",
  "/maintenance-support": "/wartung-support",
  "/machine-learning-solutions": "/machine-learning-loesungen",
  "/natural-language-processing-nlp": "/natuerliche-sprachverarbeitung-nlp",
  "/computer-vision-applications": "/computer-vision-anwendungen",
  "/predictive-analytics": "/praediktive-analytik",
  "/retrieval-augmented-generation-rag":
    "/retrieval-augmented-generation-rag-de",
  "/ai-powered-chatbots": "/ki-gestuetzte-chatbots",
  "/insights/api-gateway-for-postgres-for-crud-and-vector-search":
    "/insights/api-gateway-fuer-postgres-fuer-crud-und-vektorsuche",
  "/insights/how-to-sign-a-contract-with-an-it-outsourcing-agency":
    "/insights/so-schliessen-sie-einen-vertrag-mit-einer-it-outsourcing-agentur-ab",
  "/insights/big-companies-that-were-built-using-outsources-developers":
    "/insights/grosse-unternehmen-die-mithilfe-ausgelagerter-entwickler-aufgebaut-wurden",
  "/insights/team-as-a-service-outsourcing-model":
    "/insights/team-as-a-service-outsourcing-modell",
};

export const pathMapperDe: Record<string, string> = {
  "/ueber-uns": "/about",
  "/karriere": "/careers",
  "/kontakt": "/contact",
  "/softwareentwicklung": "/software-development",
  "/it-beratung": "/it-consulting",
  "/nearshoring-de": "/nearshoring",
  "/ki-entwicklung": "/ai-development",
  "/startups": "/startups",
  "/healtcare": "/healthcare",
  "/fintech": "/fintech",
  "/retail": "/retail",
  "/medien": "/media",
  "/e-commerce": "/e-commerce",
  "/automotive": "/automotive",
  "/transport-logistik": "/transportation-logistics",
  "/it-strategie-planung": "/it-strategy-planning",
  "/individuelle-softwareentwicklung": "/custom-software-development",
  "/webentwicklung": "/web-development",
  "/mobile-app-entwicklung": "/mobile-app-development",
  "/cloud-entwicklung": "/cloud-development",
  "/api-entwicklung": "/api-development",
  "/technologiebewertung": "/technology-assessment",
  "/infrastrukturberatung": "/infrastructure-consulting",
  "/cybersecurity-beratung": "/cybersecurity-consulting",
  "/digitale-transformationsberatung": "/digital-transformation-consulting",
  "/compliance-risikomanagement": "/compliance-risk-management",
  "/dedizierte-entwicklungsteams": "/dedicated-development-teams",
  "/projektbasiertes-nearshoring": "/project-based-nearshoring",
  "/teamerweiterung": "/staff-augmentation",
  "/qualitaetssicherung-testing": "/quality-assurance-testing",
  "/wartung-support": "/maintenance-support",
  "/machine-learning-loesungen": "/machine-learning-solutions",
  "/natuerliche-sprachverarbeitung-nlp": "/natural-language-processing-nlp",
  "/computer-vision-anwendungen": "/computer-vision-applications",
  "/praediktive-analytik": "/predictive-analytics",
  "/ki-gestuetzte-chatbots": "/ai-powered-chatbots",
  "/retrieval-augmented-generation-rag-de":
    "/retrieval-augmented-generation-rag",
  "/ai-powered-chatbots": "/ai-powered-chatbots",
  "/insights/api-gateway-fuer-postgres-fuer-crud-und-vektorsuche":
    "/insights/api-gateway-for-postgres-for-crud-and-vector-search",
  "/insights/so-schliessen-sie-einen-vertrag-mit-einer-it-outsourcing-agentur-ab":
    "/insights/how-to-sign-a-contract-with-an-it-outsourcing-agency",
  "/insights/grosse-unternehmen-die-mithilfe-ausgelagerter-entwickler-aufgebaut-wurden":
    "/insights/big-companies-that-were-built-using-outsources-developers",
  "/insights/team-as-a-service-outsourcing-modell":
    "/insights/team-as-a-service-outsourcing-model",
};
