import { siteUrl } from "@/lib/i18n";
import type { Metadata } from "next";
import { AlcookLanding } from "../_components/AlcookLanding";
import { alcookAlternates, alcookUrl } from "../_components/constants";

const description =
  "アルクックは、スクショやウェブ、Instagram、LINE で見つけたレシピを保存して、今週の晩ご飯を組み、材料を買い物リストにまとめる献立アプリ。家族で使えるレシピ本、Apple Watch・ウィジェットにも対応。ひとりで使う分はずっと無料。";

export const metadata: Metadata = {
  title: "アルクック - 保存したレシピで、今週の晩ご飯。",
  description,
  alternates: alcookAlternates("home", "ja"),
  openGraph: {
    title: "アルクック - 保存したレシピで、今週の晩ご飯。",
    description,
    url: alcookUrl("home", "ja"),
    locale: "ja_JP",
    images: [{ url: siteUrl("/ogp-alcook-ja.png"), width: 1200, height: 630, alt: "アルクック" }],
  },
};

export default function Page() {
  return <AlcookLanding lang="ja" />;
}
