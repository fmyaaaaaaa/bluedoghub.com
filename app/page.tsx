import { alternates, siteUrl } from "@/lib/i18n";
import { sitePaths } from "@/lib/site";
import type { Metadata } from "next";
import { HomeLanding } from "./_components/HomeLanding";

const description =
  "Bluedog is dedicated to developing solutions that make a meaningful impact for the planet and society using cutting-edge IT technology.";

export const metadata: Metadata = {
  title: "Bluedog",
  description,
  alternates: alternates(sitePaths.home, "en"),
  openGraph: {
    title: "Bluedog",
    description,
    url: siteUrl(sitePaths.home.en),
    images: [{ url: siteUrl("/ogp-bluedog.png"), width: 1200, height: 630, alt: "Bluedog Logo" }],
  },
};

export default function Page() {
  return <HomeLanding lang="en" />;
}
