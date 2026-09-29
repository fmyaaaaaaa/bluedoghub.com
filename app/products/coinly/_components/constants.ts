// TODO: set the App Store URL once Coinly 2.0.0 is live again (e.g. "https://apps.apple.com/jp/app/coinly/id..."). While null, the App Store badge is hidden.
export const COINLY_APP_STORE_URL: string | null = null;

export const COINLY_SUPPORT_EMAIL = "support@bluedoghub.com";

export type CoinlyLang = "en" | "ja";

export const coinlyPaths = {
  home: { en: "/products/coinly", ja: "/products/coinly/ja" },
  terms: { en: "/products/coinly/terms", ja: "/products/coinly/terms/ja" },
  privacy: { en: "/products/coinly/privacy", ja: "/products/coinly/privacy/ja" },
} as const;
