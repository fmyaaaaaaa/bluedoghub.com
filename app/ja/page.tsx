import { alternates, siteUrl } from "@/lib/i18n";
import { sitePaths } from "@/lib/site";
import type { Metadata } from "next";
import { HomeLanding } from "../_components/HomeLanding";

const description =
  "Bluedog は、小さなアプリをひとつずつ作って、使う人のところまで届けています。iPhone の家計簿アプリと、街の花屋さんのための業務アプリ。";

export const metadata: Metadata = {
  title: "Bluedog - 小さく作って、ちゃんと届ける。",
  description,
  alternates: alternates(sitePaths.home, "ja"),
  openGraph: {
    title: "Bluedog - 小さく作って、ちゃんと届ける。",
    description,
    url: siteUrl(sitePaths.home.ja),
    locale: "ja_JP",
    images: [{ url: siteUrl("/ogp-bluedog.png"), width: 1200, height: 630, alt: "Bluedog Logo" }],
  },
};

export default function Page() {
  return <HomeLanding lang="ja" />;
}
