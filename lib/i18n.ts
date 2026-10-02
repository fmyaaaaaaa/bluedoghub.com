/**
 * The site's two languages.
 *
 * There is no `[lang]` route segment. Every page keeps its English path and the Japanese version
 * lives at the same path with `/ja` appended (`/products/alcoin` -> `/products/alcoin/ja`), which is
 * how Alcoin was already built. The current language is therefore read back out of the pathname,
 * and the pages that exist in both languages are listed in `lib/site.ts`.
 */
export type Lang = "en" | "ja";

/** English is what an unknown path is served as, and what search engines get as `x-default`. */
export const DEFAULT_LANG: Lang = "en";

/** The site is served from www (the apex redirects there). */
export const SITE_URL = "https://www.bluedoghub.com";

/** A page that exists in both languages: the path it lives at in each. */
export type LocalizedPath = Readonly<Record<Lang, string>>;

export function otherLang(lang: Lang): Lang {
  return lang === "en" ? "ja" : "en";
}

/** How a language names itself — so the switch reads in the language it leads to. */
export const LANG_LABEL: Record<Lang, string> = {
  en: "English",
  ja: "日本語",
};

export function siteUrl(path: string): string {
  return `${SITE_URL}${path}`;
}

/** canonical plus the en/ja hreflang pair (English is the x-default). */
export function alternates(paths: LocalizedPath, lang: Lang) {
  return {
    canonical: siteUrl(paths[lang]),
    languages: {
      en: siteUrl(paths.en),
      ja: siteUrl(paths.ja),
      "x-default": siteUrl(paths.en),
    },
  };
}
