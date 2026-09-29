import type { Metadata } from "next";
import { CoinlyLanding } from "../_components/CoinlyLanding";

const baseUrl =
  process.env.NEXT_PUBLIC_BASE_URL || process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3030";

const description =
  "Coinlyは、タップするだけで記録できるiPhoneの家計簿アプリ。個人の家計簿はiPhoneの中だけに。家族・部費・旅行の共有家計簿やApple Watchにも対応。";

export const metadata: Metadata = {
  title: "Coinly - かんたん家計簿",
  description,
  openGraph: {
    title: "Coinly - かんたん家計簿",
    description,
    locale: "ja_JP",
    images: [{ url: `${baseUrl}/ogp-coinly.png`, width: 1200, height: 630, alt: "Coinly" }],
  },
};

export default function Page() {
  return <CoinlyLanding lang="ja" />;
}
