import { type Lang, alternates, siteUrl } from "@/lib/i18n";
import { sitePaths } from "@/lib/site";

// The App Store page (no storefront in the path: Apple opens the visitor's own). While null, the App Store badge is hidden.
export const ALCOIN_APP_STORE_URL: string | null = "https://apps.apple.com/app/id6755078551";

export const ALCOIN_SUPPORT_EMAIL = "support@bluedoghub.com";

export type AlcoinLang = Lang;

// Alcoin's three pages, read back out of the site-wide registry so each en/ja pair is written once.
export const alcoinPaths = {
  home: sitePaths.alcoin,
  terms: sitePaths.alcoinTerms,
  privacy: sitePaths.alcoinPrivacy,
} as const;

// Absolute URLs for canonical / hreflang / og:url. The site is served from www (the apex redirects there).
export { SITE_URL as ALCOIN_SITE_URL } from "@/lib/i18n";

type AlcoinPage = keyof typeof alcoinPaths;

export function alcoinUrl(page: AlcoinPage, lang: AlcoinLang): string {
  return siteUrl(alcoinPaths[page][lang]);
}

// canonical plus the en/ja hreflang pair (English is the x-default).
export function alcoinAlternates(page: AlcoinPage, lang: AlcoinLang) {
  return alternates(alcoinPaths[page], lang);
}
