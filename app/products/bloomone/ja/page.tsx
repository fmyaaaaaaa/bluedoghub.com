import { alternates, siteUrl } from "@/lib/i18n";
import { sitePaths } from "@/lib/site";
import type { Metadata } from "next";
import { BloomOneLanding } from "../_components/BloomOneLanding";

const description =
  "BloomOne は、街の花屋さんのための業務アプリです。注文・顧客・在庫・シフトを、お店がいつもやっている順番のまま、ひとつの記録に。いまモニター店舗を募集しています。";

export const metadata: Metadata = {
  title: "BloomOne - 花屋さんのお仕事を、いちばん近くで支えます。",
  description,
  alternates: alternates(sitePaths.bloomone, "ja"),
  openGraph: {
    title: "BloomOne",
    description,
    url: siteUrl(sitePaths.bloomone.ja),
    locale: "ja_JP",
    images: [{ url: siteUrl("/bloomone-order.webp"), alt: "BloomOne の注文一覧" }],
  },
};

export default function Page() {
  return <BloomOneLanding lang="ja" />;
}
