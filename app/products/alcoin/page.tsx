import type { Metadata } from "next";
import { AlcoinLanding } from "./_components/AlcoinLanding";
import { alcoinAlternates, alcoinUrl } from "./_components/constants";

const baseUrl =
  process.env.NEXT_PUBLIC_BASE_URL || process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3030";

const description =
  "Alcoin is the fastest budget app for iPhone: type an amount, tap a category, done. Share a book with family, keep period books for trips in 17 currencies, and record from Apple Watch, Siri or widgets. Your personal book is free forever.";

export const metadata: Metadata = {
  title: "Alcoin - One tap. That's your budget.",
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
