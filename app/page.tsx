import { alternates, siteUrl } from "@/lib/i18n";
import { sitePaths } from "@/lib/site";
import type { Metadata } from "next";
import { HomeLanding } from "./_components/HomeLanding";

const description =
  "Bluedog builds small apps and carries each one all the way to the people who use it: a household budget for iPhone, and a business app for the flower shop on your street.";

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
