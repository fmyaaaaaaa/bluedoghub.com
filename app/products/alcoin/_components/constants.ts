// The App Store page (no storefront in the path: Apple opens the visitor's own). While null, the App Store badge is hidden.
export const ALCOIN_APP_STORE_URL: string | null = "https://apps.apple.com/app/id6755078551";

export const ALCOIN_SUPPORT_EMAIL = "support@bluedoghub.com";

export type AlcoinLang = "en" | "ja";

export const alcoinPaths = {
  home: { en: "/products/alcoin", ja: "/products/alcoin/ja" },
  terms: { en: "/products/alcoin/terms", ja: "/products/alcoin/terms/ja" },
  privacy: { en: "/products/alcoin/privacy", ja: "/products/alcoin/privacy/ja" },
} as const;

// Absolute URLs for canonical / hreflang / og:url. The site is served from www (the apex redirects there).
export const ALCOIN_SITE_URL = "https://www.bluedoghub.com";

type AlcoinPage = keyof typeof alcoinPaths;

export function alcoinUrl(page: AlcoinPage, lang: AlcoinLang): string {
  return `${ALCOIN_SITE_URL}${alcoinPaths[page][lang]}`;
}

// canonical plus the en/ja hreflang pair (English is the x-default).
export function alcoinAlternates(page: AlcoinPage, lang: AlcoinLang) {
  return {
    canonical: alcoinUrl(page, lang),
    languages: {
      en: alcoinUrl(page, "en"),
      ja: alcoinUrl(page, "ja"),
      "x-default": alcoinUrl(page, "en"),
    },
  };
}
