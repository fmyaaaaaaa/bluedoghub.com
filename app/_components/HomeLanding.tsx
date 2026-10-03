import ProfileCard from "@/components/ProfileCard";
import WhatIOfferCard from "@/components/WhatIOfferCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Lang } from "@/lib/i18n";
import { PRODUCTS } from "@/lib/site";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const content = {
  en: {
    headline: "Small things, carried all the way.",
    lead: "A household budget, a flower shop's day. I build apps that take one small chore off someone's hands, and see each one through to the people who use it.",
    heroCta: "See what I'm building",
    productsTitle: "What I'm Building",
    productsLead: "Each one starts from someone I can picture using it, and the chore they would rather not do.",
    more: "Learn more",
    moreEnglishOnly: "Learn more",
    developerTitle: "About the Developer",
    developerLead:
      "Now in my tenth year of building apps, I specialize in full-stack app development and cloud infrastructure architecture.",
  },
  ja: {
    headline: "小さく作って、ちゃんと届ける。",
    lead: "家計簿をつける人、花屋さん。身近な誰かの毎日の小さな手間を、アプリでひとつずつ軽くしています。",
    heroCta: "作っているものを見る",
    productsTitle: "作っているもの",
    productsLead: "どれも、使う人の顔と、その人が減らしたい手間から作り始めています。",
    more: "詳しく見る",
    moreEnglishOnly: "詳しく見る（English）",
    developerTitle: "開発者について",
    developerLead: "アプリ開発は 10 年目。画面からサーバーまで通しで作ることと、クラウド基盤の設計を得意としています。",
  },
} satisfies Record<Lang, Record<string, string>>;

export function HomeLanding({ lang }: { lang: Lang }) {
  const t = content[lang];

  return (
    // `auto-phrase` keeps Japanese lines from breaking in the middle of a word.
    <div lang={lang} className={cn("min-h-screen flex flex-col", lang === "ja" && "[word-break:auto-phrase]")}>
      <main className="flex-grow">
        {/* Top Section */}
        <section className="w-full py-12 px-4 md:py-20 bg-brand">
          <div className="container mx-auto px-4 sm:px-6 lg:px-32 max-w-7xl">
            <div className="flex flex-col md:flex-row items-center justify-between md:gap-12">
              {/* Description */}
              <div className="md:w-3/4 text-center md:text-left">
                <h1 className="text-display-md md:text-display-xl text-white">{t.headline}</h1>
                <p className="text-body-lg text-white/90 mt-6">{t.lead}</p>
                <div className="flex mt-8 mx-auto justify-center md:justify-start">
                  <Button asChild size="lg" variant="secondary">
                    <Link href="#products">{t.heroCta}</Link>
                  </Button>
                </div>
              </div>

              {/* Illustration */}
              <div className="md:w-1/2">
                <div className="hidden md:flex justify-end">
                  <Image src="/logo-bluedog.svg" alt="BlueDog Tech Illustration" width={400} height={400} priority />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section id="products" className="w-full py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-24 max-w-7xl flex flex-col items-center gap-4">
            <h2 className="text-display-sm md:text-display-md text-center text-black-700">{t.productsTitle}</h2>
            <p className="text-body-md md:text-body-lg text-black-700 text-center mb-12 max-w-3xl mx-auto">
              {t.productsLead}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
              {PRODUCTS.map((product) => (
                <Card key={product.key} className="bg-brand-10 flex flex-col">
                  <CardHeader className="gap-3">
                    <Badge variant="outline" className="self-start border-brand-200 bg-white text-brand-700">
                      {product.status[lang]}
                    </Badge>
                    <CardTitle className="text-heading-lg text-brand-900">{product.name[lang]}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col gap-6 flex-grow justify-between">
                    <p className="text-body-sm text-black-700">{product.summary[lang]}</p>
                    <Button asChild variant="default" className="self-start">
                      {/* A product with no Japanese page says so on its Japanese label rather than surprising the reader. */}
                      <Link
                        href={product.href[lang]}
                        hrefLang={product.englishOnly ? "en" : undefined}
                        className="inline-flex items-center gap-1.5"
                      >
                        {product.englishOnly ? t.moreEnglishOnly : t.more}
                        <ArrowRight className="h-4 w-4" aria-hidden />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* About Me Section */}
        <section id="about-developer" className="w-full py-16 bg-brand-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-24 max-w-7xl">
            <div className="flex flex-col items-center justify-between gap-4">
              <div className="md:max-w-7xl gap-4">
                <h2 className="text-display-sm md:text-display-md text-center text-black-700">{t.developerTitle}</h2>
                <p className="text-body-sm md:text-body-md text-black-700 text-center max-w-3xl mx-auto">
                  {t.developerLead}
                </p>
              </div>
              <div className="md:max-w-4xl py-6">
                <div className="flex flex-col md:grid md:grid-cols-3 gap-10 md:px-30">
                  <div className="flex justify-center md:block md:px-0">
                    <ProfileCard lang={lang} />
                  </div>
                  <div className="md:col-span-2">
                    <WhatIOfferCard lang={lang} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
