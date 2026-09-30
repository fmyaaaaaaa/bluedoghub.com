import type { Metadata } from "next";
import { AlcoinLanding } from "./_components/AlcoinLanding";
import { alcoinAlternates, alcoinUrl } from "./_components/constants";

const baseUrl =
  process.env.NEXT_PUBLIC_BASE_URL || process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3030";

const description =
  "Alcoin is a simple household budget app for iPhone. Record in one tap, keep your personal book on your iPhone, and share a book with family, your club or travel buddies. Works on Apple Watch, too.";

export const metadata: Metadata = {
  title: "Alcoin - A companion that quietly cheers you on",
  description,
  alternates: alcoinAlternates("home", "en"),
  openGraph: {
    title: "Alcoin",
    description,
    url: alcoinUrl("home", "en"),
    images: [{ url: `${baseUrl}/ogp-alcoin-en.png`, width: 1200, height: 630, alt: "Alcoin" }],
  },
};

export default function Page() {
  return <AlcoinLanding lang="en" />;
}
