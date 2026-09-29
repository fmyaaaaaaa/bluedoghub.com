import type { Metadata } from "next";
import { CoinlyLanding } from "./_components/CoinlyLanding";

const baseUrl =
  process.env.NEXT_PUBLIC_BASE_URL || process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3030";

const description =
  "Coinly is a simple household budget app for iPhone. Record in one tap, keep your personal book on your iPhone, and share a book with family, your club or travel buddies. Works on Apple Watch, too.";

export const metadata: Metadata = {
  title: "Coinly - A companion that quietly cheers you on",
  description,
  openGraph: {
    title: "Coinly",
    description,
    images: [{ url: `${baseUrl}/ogp-coinly.png`, width: 1200, height: 630, alt: "Coinly" }],
  },
};

export default function Page() {
  return <CoinlyLanding lang="en" />;
}
