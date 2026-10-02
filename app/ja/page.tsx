import { alternates, siteUrl } from "@/lib/i18n";
import { sitePaths } from "@/lib/site";
import type { Metadata } from "next";
import { HomeLanding } from "../_components/HomeLanding";

const description =
  "Bluedog は、地球と社会をお客さまだと考えています。いまの技術を使って、ほんとうに意味のある変化を起こせるものを作っています。";

export const metadata: Metadata = {
  title: "Bluedog - 技術で、すこし良い明日を。",
  description,
  alternates: alternates(sitePaths.home, "ja"),
  openGraph: {
    title: "Bluedog - 技術で、すこし良い明日を。",
    description,
    url: siteUrl(sitePaths.home.ja),
    locale: "ja_JP",
    images: [{ url: siteUrl("/ogp-bluedog.png"), width: 1200, height: 630, alt: "Bluedog Logo" }],
  },
};

export default function Page() {
  return <HomeLanding lang="ja" />;
}
