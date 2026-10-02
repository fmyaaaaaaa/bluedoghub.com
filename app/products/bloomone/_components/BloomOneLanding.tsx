import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { Lang } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { ArrowDown, ExternalLink, Flower2, ReceiptText, Smartphone, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { BLOOMONE_LP_URL } from "./constants";

type Feature = {
  id: string;
  icon: typeof ReceiptText;
  label: Record<Lang, string>;
  heading: Record<Lang, string>;
  body: Record<Lang, string>;
  image: { src: string; alt: Record<Lang, string>; width: number; height: number };
};

// The four things the app does, in the same order and the same words the product's own page uses.
const features: readonly Feature[] = [
  {
    id: "order",
    icon: ReceiptText,
    label: { en: "Orders", ja: "注文" },
    heading: { en: "In the order the slip is written", ja: "伝票に書く順番のまま" },
    body: {
      en: "When, what the occasion is, roughly how much, where it goes. The fields sit in the order the shop already writes them, and an order carries straight through making, delivery and payment — so nothing has to be copied into a ledger a second time.",
      ja: "いつ・何のお祝いで・いくらくらい・どこへ。いつも伝票に書いている順番で欄が並んでいます。入れた注文は製作・お届け・支払いまでそのままつながるので、台帳に写し直す手間がなくなります。",
    },
    image: {
      src: "/bloomone-order.webp",
      alt: {
        en: "The order list: delivery date, customer, occasion, amount and status in one row each",
        ja: "注文の一覧画面。お届け日・お客様・用途・金額・状態が並んでいる",
      },
      width: 1280,
      height: 800,
    },
  },
  {
    id: "inventory",
    icon: Flower2,
    label: { en: "Stock and freshness", ja: "在庫と鮮度" },
    heading: { en: "The morning's delivery, sorted by what will go first", ja: "ノートの入荷が、鮮度の順に並ぶ" },
    body: {
      en: "Enter what arrived in the morning and the stems closest to the edge come to the top. Record what went in the bin at closing, and how much is being thrown away stops being a feeling and becomes a number.",
      ja: "朝の入荷を入れておくと、そろそろ危ない花が先に並びます。夕方に捨てた分を記録すれば、どれだけ捨てているかが数字で見えてきます。",
    },
    image: {
      src: "/bloomone-inventory.webp",
      alt: {
        en: "The stock screen: arrived lots ordered by how soon they expire",
        ja: "在庫の画面。入荷したロットが期限の近い順に並んでいる",
      },
      width: 1280,
      height: 800,
    },
  },
  {
    id: "customer",
    icon: Users,
    label: { en: "Customers and anniversaries", ja: "顧客と記念日" },
    heading: { en: "The owner's memory becomes the shop's record", ja: "店主の記憶を、店の記録に" },
    body: {
      en: "Last year's wedding anniversary, a mother's birthday, the usual delivery address. What only the owner knew is written down, so whoever picks up the phone knows it too.",
      ja: "去年の結婚記念日、お母様のお誕生日、いつものお届け先。店主しか覚えていなかったことが残るので、スタッフが電話に出ても分かります。",
    },
    image: {
      src: "/bloomone-customer.webp",
      alt: {
        en: "A customer's page: anniversaries, delivery addresses and past orders",
        ja: "お客様の詳細画面。記念日とお届け先、これまでのご注文が並んでいる",
      },
      width: 1280,
      height: 800,
    },
  },
  {
    id: "mobile",
    icon: Smartphone,
    label: { en: "On a phone", ja: "スマホ" },
    heading: { en: "It runs without a computer", ja: "パソコンが無くても回る" },
    body: {
      en: "Open today's deliveries, make the call, pull up the map, mark it handed over. The whole day fits on the phone already in the apron, with buttons big enough to hit with wet hands.",
      ja: "今日のお届けを開いて、電話をかけて、地図を出して、渡したら「お渡し済み」。配達先でも、手持ちのスマホひとつで一日が回ります。濡れた手でも押しやすい大きさにしてあります。",
    },
    image: {
      src: "/bloomone-mobile-order.webp",
      alt: {
        en: "The order screen on a phone: today's deliveries as large buttons",
        ja: "スマホで開いた注文の画面。今日のお届けが大きなボタンで並んでいる",
      },
      width: 390,
      height: 844,
    },
  },
];

const content = {
  en: {
    eyebrow: "Looking for monitor shops",
    tagline: "The closest support a flower shop can have.",
    lead: "An order goes on a paper slip, then gets copied into a ledger. The morning's delivery lives in a notebook. The customer whose wedding anniversary falls in March lives in the owner's head. BloomOne takes that day as it already runs and keeps it in one record — in the order the shop already works.",
    ctaPrimary: "Go to the monitor page",
    ctaPrimaryNote: "The page and the app are in Japanese.",
    ctaSecondary: "See what it does",
    whyTitle: "Why I'm building it",
    whyBody:
      "The flower shop a few streets over is not short of software. It is short of software shaped like the way it already works. Most of what exists asks the shop to change its day to fit the screen; the rest is a spreadsheet. So I started from the slip, the notebook and the owner's memory, and asked what it would take to keep all three and remove only the copying.",
    featuresTitle: "What it does",
    featuresNote: "Screens are from the app in development, and its interface is Japanese.",
    monitorTitle: "The monitor round",
    monitorBody:
      "Five shops, first come. A shop that sees the round through pays no monthly fee for BloomOne, ever. I also build it a home page — opening hours, a map, a phone number, photos of the shop — and keep that running free too, because most shops on these streets don't have one. The first setup is mine to do: shop details, hours, the flowers you carry, the staff.",
    monitorCta: "Read the terms and apply",
    builtTitle: "How it's built",
    builtBody:
      "A modular monolith on Java 21 and Spring Boot 4, with PostgreSQL split into a schema per module and every change made through Flyway. The screens are React 19 and TypeScript. Authentication and file storage go through Supabase; the page you'd apply from sits on Cloudflare. Every write two people could race goes through optimistic locking, each domain has exactly one entry point rather than several, and the whole thing is held by more than 2,000 automated tests — with mutation testing where the logic is worth the paranoia.",
    nextTitle: "What's next",
    nextBody:
      "BloomGo: a marketplace for the flowers that would otherwise be thrown out at closing. BloomOne's stock side already records what gets rescued; the marketplace itself isn't built yet.",
  },
  ja: {
    eyebrow: "モニター店舗を募集中",
    tagline: "花屋さんのお仕事を、いちばん近くで支えます。",
    lead: "伝票に書いて、あとで台帳に写す。朝の入荷はノートに、記念日のお客様は店主の頭の中に。BloomOne は、その一日をいつもの順番のまま、ひとつの記録にします。",
    ctaPrimary: "モニター募集のページへ",
    ctaPrimaryNote: "申し込みと条件は、募集ページに書いてあります。",
    ctaSecondary: "できることを見る",
    whyTitle: "なぜ作っているか",
    whyBody:
      "街の花屋さんに足りないのは、ソフトウェアそのものではありません。お店のやり方に合うソフトウェアです。多くは、画面に合わせてお店の一日を変えることを求めます。そうでなければ、結局は表計算です。だから伝票とノートと店主の記憶から始めて、その三つを残したまま、写し直す手間だけを無くせないかを考えました。",
    featuresTitle: "できること",
    featuresNote: "画面は開発中のものです。モニターの期間中にも、いただいた声で変わります。",
    monitorTitle: "モニター募集のこと",
    monitorBody:
      "先着 5 店舗。最後までご協力いただいた店舗は、BloomOne の月額利用料が永年無料です。あわせて、営業時間・地図・お電話・お店の写真をまとめたお店のホームページもお作りし、続けるのも無料にします。はじめの設定——店の情報、営業時間、扱う花、スタッフの登録——は、こちらで一緒に進めます。",
    monitorCta: "条件を見て申し込む",
    builtTitle: "どう作っているか",
    builtBody:
      "Java 21 と Spring Boot 4 のモジュラモノリスです。PostgreSQL はモジュールごとにスキーマを分け、変更はすべて Flyway を通します。画面は React 19 と TypeScript。認証とファイル保管は Supabase、申し込みページは Cloudflare に置いています。同時に触られうる更新はすべて楽観ロックを通し、ドメインごとに入口はひとつだけ。全体は 2,000 を超える自動テストで押さえていて、大事なところには変異テストもかけています。",
    nextTitle: "このあと",
    nextBody:
      "BloomGo。閉店のときに捨てられてしまう花を、必要な人に届けるマーケットプレイスです。BloomOne の在庫側は救われた本数を記録できるようになっていますが、マーケットプレイスそのものはまだ作っていません。",
  },
} satisfies Record<Lang, Record<string, string>>;

export function BloomOneLanding({ lang }: { lang: Lang }) {
  const t = content[lang];

  return (
    // `auto-phrase` keeps Japanese lines from breaking in the middle of a word.
    <div
      lang={lang}
      className={cn(
        "min-h-screen flex flex-col bg-bloomone-10 text-bloomone-ink",
        lang === "ja" && "[word-break:auto-phrase]"
      )}
    >
      <main className="flex-grow">
        {/* Hero */}
        <section className="w-full py-12 px-4 md:py-20 bg-bloomone-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-24 max-w-7xl">
            <div className="flex flex-col items-center gap-6 text-center md:items-start md:text-left md:max-w-3xl">
              <Badge variant="outline" className="border-bloomone-300 bg-white text-bloomone-700">
                {t.eyebrow}
              </Badge>
              <h1 className="text-display-md md:text-display-xl text-bloomone-800">BloomOne</h1>
              <p className="text-heading-md md:text-heading-lg text-bloomone-700">{t.tagline}</p>
              <p className="text-body-md md:text-body-lg text-bloomone-ink/80">{t.lead}</p>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <Button asChild size="lg" variant="bloomone">
                  <Link href={BLOOMONE_LP_URL} target="_blank" rel="noopener noreferrer" hrefLang="ja">
                    {t.ctaPrimary}
                    <ExternalLink className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="#what-it-does">
                    {t.ctaSecondary}
                    <ArrowDown className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
              </div>
              <p className="text-caption-md text-bloomone-ink/60">{t.ctaPrimaryNote}</p>
            </div>
          </div>
        </section>

        {/* Why */}
        <section className="w-full py-14 px-4 bg-bloomone-paper">
          <div className="container mx-auto px-4 sm:px-6 lg:px-24 max-w-3xl flex flex-col gap-4">
            <h2 className="text-display-sm md:text-display-md text-bloomone-800">{t.whyTitle}</h2>
            <p className="text-body-md md:text-body-lg text-bloomone-ink/80">{t.whyBody}</p>
          </div>
        </section>

        {/* What it does */}
        <section id="what-it-does" className="w-full py-14 px-4 bg-bloomone-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-24 max-w-6xl flex flex-col gap-12">
            <h2 className="text-display-sm md:text-display-md text-bloomone-800 text-center">{t.featuresTitle}</h2>

            {features.map((feature, index) => {
              const Icon = feature.icon;
              const phone = feature.id === "mobile";
              return (
                <div
                  key={feature.id}
                  className={cn(
                    "flex flex-col items-center gap-8 md:flex-row md:gap-12",
                    // Alternate the sides so the page doesn't read as one long column.
                    index % 2 === 1 && "md:flex-row-reverse"
                  )}
                >
                  <div className={cn("flex justify-center", phone ? "md:w-1/3" : "md:w-1/2")}>
                    <Image
                      src={feature.image.src}
                      alt={feature.image.alt[lang]}
                      width={feature.image.width}
                      height={feature.image.height}
                      className={cn(
                        "h-auto w-full rounded-lg border border-bloomone-100 shadow-sm",
                        phone && "max-w-[15rem]"
                      )}
                    />
                  </div>
                  <div className={cn("flex flex-col gap-3", phone ? "md:w-2/3" : "md:w-1/2")}>
                    <div className="flex items-center gap-2 text-bloomone-600">
                      <Icon className="h-5 w-5" aria-hidden />
                      <span className="text-label-md">{feature.label[lang]}</span>
                    </div>
                    <h3 className="text-heading-lg text-bloomone-800">{feature.heading[lang]}</h3>
                    <p className="text-body-sm md:text-body-md text-bloomone-ink/80">{feature.body[lang]}</p>
                  </div>
                </div>
              );
            })}

            <p className="text-caption-md text-bloomone-ink/60 text-center">{t.featuresNote}</p>
          </div>
        </section>

        {/* The monitor round */}
        <section className="w-full py-14 px-4 bg-bloomone-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-24 max-w-3xl">
            <Card className="bg-white border-bloomone-100">
              <CardContent className="flex flex-col gap-5 p-8">
                <h2 className="text-display-sm text-bloomone-800">{t.monitorTitle}</h2>
                <p className="text-body-md text-bloomone-ink/80">{t.monitorBody}</p>
                <Button asChild variant="bloomone" className="self-start">
                  <Link href={BLOOMONE_LP_URL} target="_blank" rel="noopener noreferrer" hrefLang="ja">
                    {t.monitorCta}
                    <ExternalLink className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* How it's built, and what's next */}
        <section className="w-full py-14 px-4 bg-bloomone-paper">
          <div className="container mx-auto px-4 sm:px-6 lg:px-24 max-w-3xl flex flex-col gap-10">
            <div className="flex flex-col gap-4">
              <h2 className="text-display-sm md:text-display-md text-bloomone-800">{t.builtTitle}</h2>
              <p className="text-body-md text-bloomone-ink/80">{t.builtBody}</p>
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="text-display-sm md:text-display-md text-bloomone-800">{t.nextTitle}</h2>
              <p className="text-body-md text-bloomone-ink/80">{t.nextBody}</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
