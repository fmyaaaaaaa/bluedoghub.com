import { DEFAULT_LANG, type Lang, type LocalizedPath } from "./i18n";

/**
 * Every page that exists in both languages.
 *
 * This is the one place the pairs are written down: the header reads it to know which language the
 * visitor is on and where the switch should go, and each page's metadata reads it for its canonical
 * and hreflang tags. A page added in both languages belongs here; a page that only exists in
 * English (Littera) does not, and is simply absent.
 */
export const sitePaths = {
  home: { en: "/", ja: "/ja" },
  bloomone: { en: "/products/bloomone", ja: "/products/bloomone/ja" },
  alcoin: { en: "/products/alcoin", ja: "/products/alcoin/ja" },
  alcoinTerms: { en: "/products/alcoin/terms", ja: "/products/alcoin/terms/ja" },
  alcoinPrivacy: { en: "/products/alcoin/privacy", ja: "/products/alcoin/privacy/ja" },
} as const satisfies Record<string, LocalizedPath>;

const PAIRS: readonly LocalizedPath[] = Object.values(sitePaths);

/** `/ja/` and `/ja` are the same page; the registry spells them without the trailing slash. */
function normalize(pathname: string): string {
  return pathname.length > 1 && pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
}

/**
 * Which language a path is written in.
 *
 * Only the registered Japanese paths count as Japanese. An English-only page, and anything not in
 * the registry at all, is English — the same way it is served.
 */
export function langFromPathname(pathname: string): Lang {
  const path = normalize(pathname);
  return PAIRS.some((pair) => pair.ja === path) ? "ja" : DEFAULT_LANG;
}

/**
 * The same page in the other language.
 *
 * A page with no counterpart (Littera, which is English only) sends the visitor to the home page in
 * the language they asked for, rather than to a page they cannot read.
 */
export function counterpart(pathname: string, target: Lang): string {
  const path = normalize(pathname);
  const pair = PAIRS.find((candidate) => candidate.en === path || candidate.ja === path);
  return pair ? pair[target] : sitePaths.home[target];
}

/** Products in the order the home page and the header list them: the one I'm working on first. */
export type Product = {
  key: string;
  name: Record<Lang, string>;
  /** One line: what it is and who it's for. */
  summary: Record<Lang, string>;
  /** Where it has got to, said plainly. */
  status: Record<Lang, string>;
  /** The product page, per language. English-only products repeat their English path. */
  href: Record<Lang, string>;
  /** True when the Japanese card links to an English page, so the label can say so. */
  englishOnly?: true;
};

// Littera is left out while it is on hold; its page still answers at /products/littera.
export const PRODUCTS: readonly Product[] = [
  {
    key: "bloomone",
    name: { en: "BloomOne", ja: "BloomOne" },
    summary: {
      en: "A business app for the flower shop on your street. Orders, customers, stock and shifts in one record, kept in the order the shop already works.",
      ja: "街の花屋さんのための業務アプリ。注文・顧客・在庫・シフトを、お店がいつもやっている順番のまま、ひとつの記録に。",
    },
    status: { en: "Looking for monitor shops", ja: "モニター店舗を募集中" },
    href: sitePaths.bloomone,
  },
  {
    key: "alcoin",
    name: { en: "Alcoin", ja: "アルコイン" },
    summary: {
      en: "The fastest household budget app for iPhone: type an amount, tap a category, done. Share a book with family, and keep period books for trips.",
      ja: "金額を打ってカテゴリを押すだけの、最速の家計簿アプリ。家族との共有家計簿も、旅行やイベントの期間の家計簿も。",
    },
    status: { en: "On the App Store", ja: "App Store で配信中" },
    href: sitePaths.alcoin,
  },
];

/** Chrome that every page wears: the header, the footer, the language switch. */
export const CHROME = {
  products: { en: "Products", ja: "プロダクト" },
  aboutMe: { en: "About Me", ja: "開発者について" },
  menu: { en: "Menu", ja: "メニュー" },
  rights: { en: "All rights reserved.", ja: "All rights reserved." },
} as const satisfies Record<string, Record<Lang, string>>;
