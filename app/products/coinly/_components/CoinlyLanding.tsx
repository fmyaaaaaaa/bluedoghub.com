import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Calculator,
  CalendarDays,
  Check,
  CircleDashed,
  CreditCard,
  Link2,
  Lock,
  Mic,
  PenLine,
  PiggyBank,
  QrCode,
  Smartphone,
  Users,
  Watch,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { CoinlyDog } from "./CoinlyDog";
import { COINLY_APP_STORE_URL, COINLY_SUPPORT_EMAIL, type CoinlyLang, coinlyPaths } from "./constants";
import { coinlyRounded } from "./fonts";

const content = {
  en: {
    name: "Alcoin",
    otherLang: { label: "日本語", href: coinlyPaths.home.ja },
    tagline: "A companion that quietly cheers you on.",
    lead: "Just tap in what you spent. Alcoin keeps your personal budget on your iPhone, and lets you share a book with family, your club or travel buddies when you want to.",
    cta: "See how it works",
    comingSoon: "Alcoin 2.0 is coming soon to the App Store",
    featuresTitle: "Everything you need, nothing you don't",
    featuresLead: "Built for recording in seconds, every day.",
    features: [
      {
        icon: Calculator,
        title: "One-tap recording",
        body: "Pick a category, type the amount on the big keypad, done. No forms, no fuss.",
      },
      {
        icon: CircleDashed,
        title: "Budget ring",
        body: "Set a monthly budget and see what's left at a glance on the home screen.",
      },
      {
        icon: PiggyBank,
        title: "Dashboard & savings",
        body: "Spending by category, month by month. Whatever you don't spend becomes savings.",
      },
      {
        icon: CalendarDays,
        title: "History as a list or calendar",
        body: "Look back day by day, filter by category, and edit any record.",
      },
      {
        icon: Mic,
        title: "Widgets & Siri",
        body: "Check your remaining budget from the home screen and record with your voice.",
      },
      {
        icon: Users,
        title: "Shared books",
        body: "Keep one book together with family, a club's budget or a trip's expenses.",
      },
      {
        icon: Lock,
        title: "Private by design",
        body: "Your personal book stays on your iPhone and works fully offline. No ads, no tracking.",
      },
    ],
    screenshotsTitle: "A closer look",
    screenshots: [
      { src: "/coinly-home.webp", alt: "Home screen with the budget ring and the keypad" },
      { src: "/coinly-dashboard.webp", alt: "Dashboard with savings and monthly spending by category" },
      { src: "/coinly-history.webp", alt: "History shown as a calendar" },
    ],
    sharedTitle: "Shared books, in three steps",
    sharedLead: "For households, club funds, trips, anything you pay for together.",
    steps: [
      {
        icon: PenLine,
        title: "Create a book",
        body: "Give it a name and an icon: “Family”, “Tennis club”, “Okinawa trip”.",
      },
      {
        icon: QrCode,
        title: "Invite",
        body: "Share a QR code, a short code or a link. Invites expire after 48 hours.",
      },
      {
        icon: Users,
        title: "Everyone records",
        body: "Every member can add and edit expenses. Changes sync to everyone's iPhone automatically.",
      },
    ],
    sharedNote: "No sign-up needed. You just choose a display name the first time you create or join a shared book.",
    sharedShots: [
      { src: "/coinly-shared-home.webp", alt: "Home screen of a shared family book" },
      { src: "/coinly-shared-history.webp", alt: "Shared book history with the member who recorded each expense" },
    ],
    watchTitle: "On Apple Watch",
    watchLead: "Check what's left and record on the spot, right from your wrist.",
    watchShots: [
      { src: "/coinly-watch-face.webp", alt: "Watch face with the remaining budget complication", label: "Watch face" },
      { src: "/coinly-watch-amount.webp", alt: "Entering an amount on the watch keypad", label: "1. Amount → Next" },
      { src: "/coinly-watch-category.webp", alt: "Choosing a category on the watch", label: "2. Category" },
      { src: "/coinly-watch-done.webp", alt: "The dog celebrating a recorded expense", label: "3. Recorded!" },
    ],
    watchStack: { src: "/coinly-watch-smart-stack-en.webp", alt: "Remaining budget in the Smart Stack" },
    watchPoints: [
      {
        icon: Watch,
        title: "Your budget on the watch face",
        body: "Add a complication to see this month's remaining budget at a glance. It shows up in the Smart Stack, too.",
      },
      {
        icon: Calculator,
        title: "Record in a few taps",
        body: "Enter the amount, tap Next and pick a category. Your companion celebrates every record.",
      },
      {
        icon: CreditCard,
        title: "Record right after paying with Apple Pay",
        body: "Set up an automation once in the Shortcuts app, and the amount you just paid comes to your watch, ready to record. Availability depends on your card and payment method.",
      },
      {
        icon: Mic,
        title: "Record with Siri",
        body: "Just ask Siri on your watch to record an expense in Alcoin.",
      },
      {
        icon: Smartphone,
        title: "Works through your iPhone",
        body: "Alcoin on your watch works with Alcoin on your paired iPhone. No sign-in needed.",
      },
    ],
    watchNote: "Requires watchOS 11 or later and an iPhone with Alcoin installed.",
    pricingTitle: "Pricing",
    free: {
      name: "Free",
      price: "¥0",
      period: "forever",
      items: ["Personal book with every feature", "Widgets & Siri", "Join shared books you're invited to"],
    },
    plus: {
      name: "Alcoin Plus",
      price: "¥100",
      period: "/ month",
      alt: "or ¥1,000 / year",
      items: ["Create your own shared books", "Invite members by QR code, code or link", "Everything in Free"],
    },
    pricingNote:
      "Alcoin Plus is an auto-renewable subscription billed to your Apple ID. It renews unless cancelled at least 24 hours before the end of the current period. Manage or cancel it anytime in iOS Settings. If Plus ends, the shared books you created keep working.",
    privacyTitle: "Your personal book never leaves your iPhone",
    privacyBody:
      "If you only use the personal book, Alcoin never talks to a server. Shared books are stored on our server in Tokyo (AWS) so members can sync. No ads, no analytics, no selling data.",
    privacyLink: "Read the Privacy Policy",
    contactTitle: "Questions or feedback?",
    terms: "Terms of Use",
    privacy: "Privacy Policy",
    storeAlt: "Download on the App Store",
  },
  ja: {
    name: "アルコイン",
    otherLang: { label: "English", href: coinlyPaths.home.en },
    tagline: "記録するたび、相棒がそっと応援。",
    lead: "使った金額をタップするだけで記録できる家計簿です。個人の家計簿はiPhoneの中だけに。家族や部活、旅行の仲間と一緒につける「共有家計簿」にも対応しました。",
    cta: "くわしく見る",
    comingSoon: "アルコイン 2.0 は App Store で近日公開予定です",
    featuresTitle: "毎日続けられる、ちょうどいい機能",
    featuresLead: "数秒で記録できることを、いちばん大切にしています。",
    features: [
      {
        icon: Calculator,
        title: "テンキーでワンタップ記録",
        body: "カテゴリを選んで金額を入力するだけ。大きなキーで、迷わず記録できます。",
      },
      {
        icon: CircleDashed,
        title: "予算リング",
        body: "月の予算を決めれば、残りがホーム画面のリングでひと目でわかります。",
      },
      {
        icon: PiggyBank,
        title: "ダッシュボードと貯金",
        body: "カテゴリ別・月ごとの支出を確認。予算より少なく使えた分は貯金として貯まります。",
      },
      {
        icon: CalendarDays,
        title: "履歴はリストとカレンダーで",
        body: "日ごとにふり返り、カテゴリで絞り込み。記録はあとから編集できます。",
      },
      {
        icon: Mic,
        title: "ウィジェットとSiri",
        body: "ホーム画面で残りの予算を確認。Siriに話しかけて記録することもできます。",
      },
      {
        icon: Users,
        title: "共有家計簿",
        body: "家族の家計、部費、旅行の割り勘など、みんなでひとつの家計簿をつけられます。",
      },
      {
        icon: Lock,
        title: "プライバシーを大切に",
        body: "個人の家計簿はiPhoneの中だけに保存。オフラインでも使えます。広告もトラッキングもありません。",
      },
    ],
    screenshotsTitle: "アプリの画面",
    screenshots: [
      { src: "/coinly-home.webp", alt: "予算リングとテンキーのあるホーム画面" },
      { src: "/coinly-dashboard.webp", alt: "貯金とカテゴリ別の支出を表示するダッシュボード" },
      { src: "/coinly-history.webp", alt: "カレンダー表示の履歴画面" },
    ],
    sharedTitle: "共有家計簿は3ステップ",
    sharedLead: "家族の家計、部費、旅行など、みんなでお金を使う場面に。",
    steps: [
      {
        icon: PenLine,
        title: "家計簿をつくる",
        body: "「家族」「テニス部」「沖縄旅行」など、名前とアイコンを決めます。",
      },
      {
        icon: QrCode,
        title: "招待する",
        body: "QRコード・招待コード・リンクで招待。招待は48時間で期限切れになります。",
      },
      {
        icon: Users,
        title: "みんなで記録",
        body: "メンバー全員が記録・編集できます。変更はみんなのiPhoneに自動で反映されます。",
      },
    ],
    sharedNote: "会員登録は不要です。はじめて共有家計簿をつくる・参加するときに、表示名を決めるだけ。",
    sharedShots: [
      { src: "/coinly-shared-home.webp", alt: "家族の共有家計簿のホーム画面" },
      { src: "/coinly-shared-history.webp", alt: "記録したメンバーが表示される共有家計簿の履歴" },
    ],
    watchTitle: "Apple Watch でも",
    watchLead: "iPhoneを出さなくても、腕元で残りを確認して、その場で記録できます。",
    watchShots: [
      { src: "/coinly-watch-face.webp", alt: "残りの予算を表示するコンプリケーションのある文字盤", label: "文字盤" },
      { src: "/coinly-watch-amount.webp", alt: "Apple Watchのテンキーで金額を入力する画面", label: "1. 金額 → 次へ" },
      { src: "/coinly-watch-category.webp", alt: "Apple Watchでカテゴリを選ぶ画面", label: "2. カテゴリ" },
      { src: "/coinly-watch-done.webp", alt: "記録が完了して犬がよろこぶ画面", label: "3. 記録完了" },
    ],
    watchStack: { src: "/coinly-watch-smart-stack-ja.webp", alt: "スマートスタックに表示された残りの予算" },
    watchPoints: [
      {
        icon: Watch,
        title: "文字盤で残りの予算を確認",
        body: "コンプリケーションを文字盤に置けば、今月の残りがいつでもひと目でわかります。スマートスタックにも表示できます。",
      },
      {
        icon: Calculator,
        title: "数タップで記録",
        body: "金額を入力して「次へ」、カテゴリを選べば完了。記録するたびに相棒がよろこんでくれます。",
      },
      {
        icon: CreditCard,
        title: "Apple Pay で払ったら、すぐ記録",
        body: "ショートカットAppで一度オートメーションを設定しておくと、支払った金額がApple Watchに届き、そのまま記録できます。カードや支払い方法によっては使えない場合があります。",
      },
      {
        icon: Mic,
        title: "Siriで記録",
        body: "Apple WatchのSiriに話しかけて、支出を記録することもできます。",
      },
      {
        icon: Smartphone,
        title: "iPhoneと連携して動作",
        body: "ペアリングしたiPhoneのアルコインと連携して動くので、サインインは不要です。",
      },
    ],
    watchNote: "watchOS 11 以降に対応。ペアリングしたiPhoneにアルコインが必要です。",
    pricingTitle: "料金",
    free: {
      name: "無料",
      price: "¥0",
      period: "ずっと無料",
      items: ["個人の家計簿のすべての機能", "ウィジェットとSiri", "招待された共有家計簿への参加"],
    },
    plus: {
      name: "アルコイン Plus",
      price: "¥100",
      period: "/ 月",
      alt: "または ¥1,000 / 年",
      items: ["共有家計簿をつくれる", "QR・コード・リンクでメンバーを招待", "無料プランのすべての機能"],
    },
    pricingNote:
      "アルコイン Plus は自動更新のサブスクリプションで、Apple ID に請求されます。現在の期間が終わる24時間前までに解約しない限り自動で更新されます。管理・解約は iOS の「設定」からいつでも行えます。Plus が終了しても、作成済みの共有家計簿はそのまま使えます。",
    privacyTitle: "個人の家計簿は、iPhoneの外に出ません",
    privacyBody:
      "個人の家計簿だけを使う場合、アルコインがサーバーと通信することはありません。共有家計簿は、メンバー間で同期するために東京リージョン（AWS）のサーバーに保存されます。広告・アナリティクス・データの販売は一切ありません。",
    privacyLink: "プライバシーポリシーを読む",
    contactTitle: "ご質問・ご意見はこちら",
    terms: "利用規約",
    privacy: "プライバシーポリシー",
    storeAlt: "App Store からダウンロード",
  },
} as const;

function PhoneShot({ src, alt, className }: { src: string; alt: string; className?: string }) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-[2rem] border-[6px] border-white bg-white shadow-[0_18px_40px_-18px_rgba(15,42,87,0.35)]",
        className
      )}
    >
      <Image src={src} alt={alt} width={600} height={1304} className="h-auto w-full" />
    </div>
  );
}

function WatchShot({ src, alt, className }: { src: string; alt: string; className?: string }) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-[22%/18%] border-[6px] border-[#2B2F36] bg-black p-[5%] shadow-[0_18px_40px_-18px_rgba(15,42,87,0.45)]",
        className
      )}
    >
      <Image src={src} alt={alt} width={416} height={496} className="h-auto w-full" />
    </div>
  );
}

function AppStoreBadge({ alt }: { alt: string }) {
  if (!COINLY_APP_STORE_URL) return null;
  return (
    <Link href={COINLY_APP_STORE_URL} target="_blank" rel="noopener noreferrer" className="inline-block">
      <Image src="/app-store-badge.svg" alt={alt} width={180} height={54} />
    </Link>
  );
}

export function CoinlyLanding({ lang }: { lang: CoinlyLang }) {
  const t = content[lang];
  return (
    <div
      lang={lang}
      className={cn(
        coinlyRounded.variable,
        "mx-auto min-h-screen flex flex-col bg-coinly-bg text-coinly-text",
        lang === "ja" && "[word-break:auto-phrase]"
      )}
      style={{ fontFamily: "var(--font-coinly), ui-rounded, 'Hiragino Maru Gothic ProN', system-ui, sans-serif" }}
    >
      <main className="flex-grow">
        {/* Hero */}
        <section className="w-full bg-coinly-biscuit">
          <div className="container mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-20 lg:px-12">
            <div className="flex justify-end">
              <Link
                href={t.otherLang.href}
                hrefLang={lang === "en" ? "ja" : "en"}
                lang={lang === "en" ? "ja" : "en"}
                className="text-label-md text-coinly-600 underline underline-offset-4 hover:text-coinly-700"
              >
                {t.otherLang.label}
              </Link>
            </div>
            <div className="mt-4 flex flex-col items-center gap-10 md:flex-row md:justify-between">
              <div className="flex flex-col items-center gap-5 text-center md:w-3/5 md:items-start md:text-left">
                <div className="flex items-center gap-3">
                  <CoinlyDog className="h-20 w-20 md:h-24 md:w-24" />
                  <p className="text-[2.5rem] font-extrabold leading-none tracking-wide text-coinly-ink md:text-6xl">
                    {t.name}
                  </p>
                </div>
                <h1 className="text-balance text-display-xs font-extrabold text-coinly-ink md:text-display-md">
                  {t.tagline}
                </h1>
                <p className="max-w-xl text-body-md text-coinly-muted md:text-body-lg">{t.lead}</p>
                <div className="flex flex-col items-center gap-4 sm:flex-row">
                  <AppStoreBadge alt={t.storeAlt} />
                  <Button asChild size="lg" variant="coinly" className="rounded-full">
                    <Link href="#features">{t.cta}</Link>
                  </Button>
                </div>
                {!COINLY_APP_STORE_URL && (
                  <p className="rounded-full bg-white px-4 py-1.5 text-label-md text-coinly-600 shadow-sm">
                    {t.comingSoon}
                  </p>
                )}
              </div>
              <div className="relative w-56 md:w-2/5 md:max-w-[18rem]">
                <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-coinly-coin/30" aria-hidden />
                <PhoneShot src={t.screenshots[0].src} alt={t.screenshots[0].alt} className="relative" />
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="w-full scroll-mt-4 bg-coinly-bg py-16">
          <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-12">
            <h2 className="text-balance text-center text-display-xs font-extrabold text-coinly-ink md:text-display-sm">
              {t.featuresTitle}
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-center text-body-md text-coinly-muted">{t.featuresLead}</p>
            <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {t.features.map(({ icon: Icon, title, body }, i) => (
                <li
                  key={title}
                  className={cn(
                    "rounded-3xl border border-coinly-line bg-white p-6",
                    i === t.features.length - 1 && "border-coinly-biscuit bg-coinly-biscuit sm:col-span-2 lg:col-span-3"
                  )}
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-coinly-50 text-coinly-500">
                    <Icon className="h-6 w-6" aria-hidden />
                  </div>
                  <h3 className="mt-4 text-heading-md font-bold text-coinly-ink">{title}</h3>
                  <p className="mt-1 text-body-sm text-coinly-muted">{body}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Screenshots */}
        <section className="w-full bg-white py-16">
          <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-12">
            <h2 className="text-balance text-center text-display-xs font-extrabold text-coinly-ink md:text-display-sm">
              {t.screenshotsTitle}
            </h2>
            <div className="mt-10 grid grid-cols-3 gap-3 sm:gap-8 md:px-16">
              {t.screenshots.map((s) => (
                <PhoneShot key={s.src} src={s.src} alt={s.alt} className="rounded-2xl border-4 sm:rounded-[2rem]" />
              ))}
            </div>
          </div>
        </section>

        {/* Shared books */}
        <section id="shared-books" className="w-full bg-coinly-50 py-16">
          <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-12">
            <h2 className="text-balance text-center text-display-xs font-extrabold text-coinly-ink md:text-display-sm">
              {t.sharedTitle}
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-center text-body-md text-coinly-muted">{t.sharedLead}</p>
            <div className="mt-10 flex flex-col items-center gap-10 md:flex-row md:items-start">
              <ol className="flex w-full flex-col gap-4 md:w-1/2">
                {t.steps.map(({ icon: Icon, title, body }, i) => (
                  <li key={title} className="flex gap-4 rounded-3xl bg-white p-5">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-coinly-500 text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </div>
                    <div>
                      <h3 className="text-heading-md font-bold text-coinly-ink">
                        <span className="mr-2 text-coinly-500">{i + 1}.</span>
                        {title}
                      </h3>
                      <p className="mt-1 text-body-sm text-coinly-muted">{body}</p>
                    </div>
                  </li>
                ))}
                <li className="flex items-start gap-3 px-2 text-body-sm text-coinly-muted">
                  <Link2 className="mt-0.5 h-4 w-4 shrink-0 text-coinly-500" aria-hidden />
                  <span>{t.sharedNote}</span>
                </li>
              </ol>
              <div className="grid w-full max-w-md grid-cols-2 gap-4 md:w-1/2">
                {t.sharedShots.map((s) => (
                  <PhoneShot key={s.src} src={s.src} alt={s.alt} className="rounded-2xl border-4 sm:rounded-[2rem]" />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Apple Watch */}
        <section id="apple-watch" className="w-full bg-white py-16">
          <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-12">
            <h2 className="text-balance text-center text-display-xs font-extrabold text-coinly-ink md:text-display-sm">
              {t.watchTitle}
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-center text-body-md text-coinly-muted">{t.watchLead}</p>
            <ul className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-4 sm:gap-6">
              {t.watchShots.map((s) => (
                <li key={s.src} className="flex flex-col items-center gap-3">
                  <WatchShot src={s.src} alt={s.alt} className="w-full max-w-[11rem]" />
                  <span className="text-label-md font-bold text-coinly-600">{s.label}</span>
                </li>
              ))}
            </ul>
            <div className="mt-12 flex flex-col items-center gap-10 md:flex-row md:items-start">
              <div className="w-full max-w-sm md:sticky md:top-8 md:w-2/5 md:max-w-none">
                <div className="relative w-full">
                  <div className="absolute -left-4 -top-4 h-20 w-20 rounded-full bg-coinly-coin/30" aria-hidden />
                  <div className="relative overflow-hidden rounded-[2rem] shadow-[0_18px_40px_-18px_rgba(15,42,87,0.45)]">
                    <Image
                      src={t.watchStack.src}
                      alt={t.watchStack.alt}
                      width={558}
                      height={276}
                      className="h-auto w-full"
                    />
                  </div>
                </div>
              </div>
              <ul className="flex w-full flex-col gap-4 md:w-3/5">
                {t.watchPoints.map(({ icon: Icon, title, body }) => (
                  <li key={title} className="flex gap-4 rounded-3xl border border-coinly-line bg-white p-5">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-coinly-50 text-coinly-500">
                      <Icon className="h-6 w-6" aria-hidden />
                    </div>
                    <div>
                      <h3 className="text-heading-md font-bold text-coinly-ink">{title}</h3>
                      <p className="mt-1 text-body-sm text-coinly-muted">{body}</p>
                    </div>
                  </li>
                ))}
                <li className="flex items-start gap-3 px-2 text-body-sm text-coinly-muted">
                  <Watch className="mt-0.5 h-4 w-4 shrink-0 text-coinly-500" aria-hidden />
                  <span>{t.watchNote}</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="w-full bg-coinly-bg py-16">
          <div className="container mx-auto max-w-4xl px-4 sm:px-6">
            <h2 className="text-balance text-center text-display-xs font-extrabold text-coinly-ink md:text-display-sm">
              {t.pricingTitle}
            </h2>
            <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
              {[t.free, t.plus].map((plan, i) => (
                <div
                  key={plan.name}
                  className={cn(
                    "rounded-3xl bg-white p-7",
                    i === 1 ? "border-2 border-coinly-500" : "border border-coinly-line"
                  )}
                >
                  <h3 className="text-heading-lg font-bold text-coinly-ink">{plan.name}</h3>
                  <p className="mt-3 flex items-baseline gap-2">
                    <span className="text-display-sm font-extrabold text-coinly-ink">{plan.price}</span>
                    <span className="text-body-md text-coinly-muted">{plan.period}</span>
                  </p>
                  {"alt" in plan && <p className="text-body-sm text-coinly-muted">{plan.alt}</p>}
                  <ul className="mt-5 space-y-2">
                    {plan.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-body-md text-coinly-text">
                        <Check className="mt-1 h-4 w-4 shrink-0 text-coinly-500" aria-hidden />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="mx-auto mt-6 max-w-3xl text-caption-lg text-coinly-muted">
              {t.pricingNote}{" "}
              <Link href={coinlyPaths.terms[lang]} className="text-coinly-600 underline underline-offset-4">
                {t.terms}
              </Link>
            </p>
          </div>
        </section>

        {/* Privacy */}
        <section className="w-full bg-white py-16">
          <div className="container mx-auto max-w-4xl px-4 sm:px-6">
            <div className="flex flex-col items-center gap-6 rounded-3xl bg-coinly-biscuit p-8 text-center md:flex-row md:text-left">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-white text-coinly-500">
                <Lock className="h-8 w-8" aria-hidden />
              </div>
              <div>
                <h2 className="text-heading-xl font-extrabold text-coinly-ink">{t.privacyTitle}</h2>
                <p className="mt-2 text-body-md text-coinly-muted">{t.privacyBody}</p>
                <Link
                  href={coinlyPaths.privacy[lang]}
                  className="mt-3 inline-block text-label-lg text-coinly-600 underline underline-offset-4 hover:text-coinly-700"
                >
                  {t.privacyLink}
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Contact & legal */}
        <section className="w-full bg-coinly-bg py-14">
          <div className="container mx-auto flex max-w-4xl flex-col items-center gap-4 px-4 text-center sm:px-6">
            <CoinlyDog className="h-16 w-16" />
            <AppStoreBadge alt={t.storeAlt} />
            <h2 className="text-heading-md font-bold text-coinly-ink">{t.contactTitle}</h2>
            <a href={`mailto:${COINLY_SUPPORT_EMAIL}`} className="text-heading-md text-coinly-600 hover:underline">
              {COINLY_SUPPORT_EMAIL}
            </a>
            <nav aria-label={t.name} className="mt-2 flex flex-wrap justify-center gap-x-6 gap-y-2 text-caption-lg">
              <Link href={coinlyPaths.terms[lang]} className="text-coinly-600 hover:underline">
                {t.terms}
              </Link>
              <Link href={coinlyPaths.privacy[lang]} className="text-coinly-600 hover:underline">
                {t.privacy}
              </Link>
              <Link
                href={t.otherLang.href}
                hrefLang={lang === "en" ? "ja" : "en"}
                lang={lang === "en" ? "ja" : "en"}
                className="text-coinly-600 hover:underline"
              >
                {t.otherLang.label}
              </Link>
            </nav>
          </div>
        </section>
      </main>
    </div>
  );
}
