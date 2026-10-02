import { alternates, siteUrl } from "@/lib/i18n";
import { sitePaths } from "@/lib/site";
import type { Metadata } from "next";
import { BloomOneLanding } from "./_components/BloomOneLanding";

const description =
  "BloomOne is a business app for the flower shop on your street: orders, customers, stock and shifts in one record, kept in the order the shop already works. Monitor shops are being recruited now.";

export const metadata: Metadata = {
  title: "BloomOne - The closest support a flower shop can have.",
  description,
  alternates: alternates(sitePaths.bloomone, "en"),
  openGraph: {
    title: "BloomOne",
    description,
    url: siteUrl(sitePaths.bloomone.en),
    images: [{ url: siteUrl("/bloomone-order.webp"), alt: "The BloomOne order list" }],
  },
};

export default function Page() {
  return <BloomOneLanding lang="en" />;
}
