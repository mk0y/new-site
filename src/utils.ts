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
        (match) => umlautMap[match as keyof typeof umlautMap] || match
      )
      .replace(/-/g, " ")
  );
};
