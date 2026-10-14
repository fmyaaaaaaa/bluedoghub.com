import { siteUrl } from "@/lib/i18n";
import type { Metadata } from "next";
import { AlcookLanding } from "./_components/AlcookLanding";
import { alcookAlternates, alcookUrl } from "./_components/constants";

const description =
  "Alcook saves the recipes you find in screenshots, on the web, on Instagram or in LINE, plans this week's dinners from them and gathers the ingredients into one shopping list. Share a family recipe book, and use Apple Watch and widgets. Using it on your own is free.";

export const metadata: Metadata = {
  title: "Alcook - Your saved recipes, this week's dinners.",
  description,
  alternates: alcookAlternates("home", "en"),
  openGraph: {
    title: "Alcook",
    description,
    url: alcookUrl("home", "en"),
    images: [{ url: siteUrl("/ogp-alcook-en.png"), width: 1200, height: 630, alt: "Alcook" }],
  },
};

export default function Page() {
  return <AlcookLanding lang="en" />;
}
