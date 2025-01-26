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

export const kebabCase = (str: string) => {
  // Transportation & Logistics -> transportation-logistics
  return str
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/&/g, "")
    .replace(/ /g, "-")
    .replace(/--/g, "-");
};
