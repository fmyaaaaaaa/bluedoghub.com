import type { Metadata } from "next";
import { AlcoinLanding } from "../_components/AlcoinLanding";
import { alcoinAlternates, alcoinUrl } from "../_components/constants";

const baseUrl =
  process.env.NEXT_PUBLIC_BASE_URL || process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3030";

const description =
  "アルコインは、金額を打ってカテゴリを押すだけの最速の家計簿アプリ。家族との共有家計簿、旅行やイベントの期間の家計簿、17の通貨、Apple Watch・Siri・ウィジェットに対応。個人の家計簿はずっと無料。";

export const metadata: Metadata = {
  title: "アルコイン - かんたん家計簿",
  description,
  alternates: alcoinAlternates("home", "ja"),
  openGraph: {
    title: "アルコイン - かんたん家計簿",
    description,
    url: alcoinUrl("home", "ja"),
    locale: "ja_JP",
    images: [{ url: `${baseUrl}/ogp-alcoin-ja.png`, width: 1200, height: 630, alt: "アルコイン" }],
  },
};

export default function Page() {
  return <AlcoinLanding lang="ja" />;
}
