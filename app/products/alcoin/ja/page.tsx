import type { Metadata } from "next";
import { AlcoinLanding } from "../_components/AlcoinLanding";
import { alcoinAlternates, alcoinUrl } from "../_components/constants";

const baseUrl =
  process.env.NEXT_PUBLIC_BASE_URL || process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3030";

const description =
  "アルコインは、タップするだけで記録できるiPhoneの家計簿アプリ。個人の家計簿はiPhoneの中だけに。家族・部費・旅行の共有家計簿やApple Watchにも対応。";

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
