import { type Lang, alternates, siteUrl } from "@/lib/i18n";
import { sitePaths } from "@/lib/site";

// The App Store page (no storefront in the path: Apple opens the visitor's own). While null, the App Store badge is
// hidden and the hero says the app is coming soon.
export const ALCOOK_APP_STORE_URL: string | null = null;

// The same support address as Alcoin.
export const ALCOOK_SUPPORT_EMAIL = "support@bluedoghub.com";

export type AlcookLang = Lang;

// Alcook's three pages, read back out of the site-wide registry so each en/ja pair is written once.
// The app links to the terms and the privacy policy from its paywall (/products/alcook/terms, …/terms/ja, …).
export const alcookPaths = {
  home: sitePaths.alcook,
  terms: sitePaths.alcookTerms,
  privacy: sitePaths.alcookPrivacy,
} as const;

type AlcookPage = keyof typeof alcookPaths;

export function alcookUrl(page: AlcookPage, lang: AlcookLang): string {
  return siteUrl(alcookPaths[page][lang]);
}

// canonical plus the en/ja hreflang pair (English is the x-default).
export function alcookAlternates(page: AlcookPage, lang: AlcookLang) {
  return alternates(alcookPaths[page], lang);
}
