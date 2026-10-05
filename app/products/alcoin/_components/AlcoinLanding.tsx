import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  ArrowRightLeft,
  Bell,
  Calculator,
  CalendarDays,
  CalendarRange,
  Check,
  CircleDashed,
  Coins,
  Contact,
  Dog,
  KeyRound,
  LayoutGrid,
  Link2,
  Lock,
  type LucideIcon,
  Merge,
  Mic,
  PenLine,
  PiggyBank,
  QrCode,
  Smartphone,
  UserMinus,
  Users,
  Watch,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { AlcoinDog } from "./AlcoinDog";
import { ALCOIN_APP_STORE_URL, ALCOIN_SUPPORT_EMAIL, type AlcoinLang, alcoinPaths } from "./constants";
import { alcoinRounded } from "./fonts";

type Shot = { src: string; alt: string };
type Point = { icon: LucideIcon; title: string; body: string };

const content = {
  en: {
    name: "Alcoin",
    otherLang: { label: "日本語", href: alcoinPaths.home.ja },
    tagline: "One tap. That's your budget.",
    lead: "Type an amount, tap a category, done. The fastest way to track your spending, with a little dog that wags its tail every time you record. Share a book with family, keep period books for trips and events, record in 17 currencies, and use Apple Watch, Siri and widgets. Your personal book is free forever.",
    heroShot: { src: "/alcoin-home-en.webp", alt: "Home screen with the budget ring, the dog and the keypad" },
    cta: "See how it works",
    comingSoon: "Alcoin 2.0 is coming soon to the App Store",
    featuresTitle: "Everything you need, nothing you don't",
    featuresLead: "Built for recording in seconds, every day.",
    features: [
      {
        icon: Calculator,
        title: "The fastest input",
        body: "Alcoin opens straight to the keypad. Type the amount, tap a category, and it's saved in two taps.",
      },
      {
        icon: Dog,
        title: "A buddy that cheers you on",
        body: "A coin flies over and your little dog wags its tail every time you record.",
      },
      {
        icon: CircleDashed,
        title: "Budget ring",
        body: "See what's left this month at a glance. Start your month on payday if you like.",
      },
      {
        icon: PiggyBank,
        title: "Dashboard & savings",
        body: "This month by category as a chart, any period at a glance (last 3 months, this year, the past 12 months), your total savings and progress toward a savings goal.",
      },
      {
        icon: CalendarDays,
        title: "History as a list or calendar",
        body: "Look back day by day, filter by category and edit any record. Record for past dates, too.",
      },
      {
        icon: KeyRound,
        title: "Transfer code for a new iPhone",
        body: "Issue a code on your old iPhone and enter it on the new one. Your books, settings and Plus come with you.",
      },
      {
        icon: Lock,
        title: "No sign-up, private by design",
        body: "No email or phone number needed. Your personal book stays on your iPhone and works fully offline. No ads, no tracking. In English and Japanese.",
      },
    ],
    screenshotsTitle: "A closer look",
    screenshots: [
      { src: "/alcoin-celebration-en.webp", alt: "A coin flying to the dog right after recording an expense" },
      {
        src: "/alcoin-dashboard-en.webp",
        alt: "Dashboard with total savings, a savings goal, this month's budget and a chart of spending by category",
      },
      { src: "/alcoin-history-calendar-en.webp", alt: "History shown as a calendar with daily totals" },
    ],
    sharedTitle: "Shared books with family and friends",
    sharedLead: "For couples, families, clubs and shared houses: one book, kept together.",
    steps: [
      {
        icon: PenLine,
        title: "Create a book",
        body: "Give it a name and an icon: “Family”, “Tennis club”, “Shared house”.",
      },
      {
        icon: QrCode,
        title: "Invite",
        body: "Share a code, a QR code or a link. Invites expire after 48 hours. Joining is free.",
      },
      {
        icon: Users,
        title: "Everyone records",
        body: "Every member can add and edit expenses. Changes sync to everyone's iPhone automatically.",
      },
    ],
    sharedPoints: [
      {
        icon: Bell,
        title: "Record notifications",
        body: "Get notified when someone else records. Turn it on or off for each book.",
      },
      {
        icon: Users,
        title: "See who recorded what",
        body: "Every record in the history shows the member who added it.",
      },
      {
        icon: Contact,
        title: "A name for each book",
        body: "Choose a display name for each shared book and change it anytime. No sign-up needed.",
      },
      {
        icon: UserMinus,
        title: "Manage members",
        body: "The creator can remove members, and anyone can leave a book at any time.",
      },
    ],
    sharedNote:
      "Creating a shared book needs Alcoin Plus; joining one is free. Make as many books as you like and switch between them from Home.",
    sharedShots: [
      { src: "/alcoin-shared-history-en.webp", alt: "Family book history showing which member recorded each expense" },
      {
        src: "/alcoin-shared-members-en.webp",
        alt: "Family book settings with record notifications, three members and an Invite members button",
      },
    ],
    periodTitle: "Period books for trips and events",
    periodLead: "Set the dates and a budget, and keep a book just for that time.",
    periodPoints: [
      {
        icon: CalendarRange,
        title: "What's left, and days to go",
        body: "During a trip, Home shows what's left for the period and how many days remain.",
      },
      {
        icon: Merge,
        title: "Merge it as one entry",
        body: "When it ends, add it to your usual book as a single entry. The details stay in the period book.",
      },
      {
        icon: Users,
        title: "Solo or together",
        body: "One solo period book at a time is free. Make it a shared book to record with your travel buddies.",
      },
    ],
    periodShots: [
      { src: "/alcoin-period-book-en.webp", alt: "Hawaii Trip period book with what's left and 3 days to go" },
      {
        src: "/alcoin-period-merge-en.webp",
        alt: "After the Hawaii Trip ends, a prompt to add its $1,846.50 total to the personal book",
      },
    ],
    currencyTitle: "17 currencies",
    currencyLead: "Record abroad in the local currency, and convert when you're home.",
    currencyPoints: [
      {
        icon: Coins,
        title: "A currency for each book",
        body: "Yen, dollars, euros, pounds, won, baht and more. Choose from 17 currencies per book.",
      },
      {
        icon: ArrowRightLeft,
        title: "Convert later, at your rate",
        body: "Convert records in another currency at the rate you enter, say from your card statement. The original amount and rate are kept.",
      },
    ],
    currencyShots: [
      { src: "/alcoin-currency-book-en.webp", alt: "Paris Trip period book recorded in euros" },
      {
        src: "/alcoin-currency-convert-en.webp",
        alt: "Converting the Paris Trip's €1,126.40 into dollars at a rate you enter before adding it to the personal book",
      },
    ],
    watchTitle: "On Apple Watch",
    watchLead: "Check what's left and record on the spot, right from your wrist.",
    watchShots: [
      {
        src: "/alcoin-watch-complication-en.webp",
        alt: "Watch face with the remaining budget complication",
        label: "Watch face",
      },
      { src: "/alcoin-watch-keypad-en.webp", alt: "Entering $12.80 on the watch keypad", label: "1. Amount → Next" },
      { src: "/alcoin-watch-category-en.webp", alt: "Choosing a category on the watch", label: "2. Category" },
      { src: "/alcoin-watch-done-en.webp", alt: "The dog celebrating a recorded expense", label: "3. Recorded!" },
      {
        src: "/alcoin-watch-smart-stack-en.webp",
        alt: "What's left in the personal and family books in the Smart Stack",
        label: "Smart Stack",
      },
    ],
    watchPoints: [
      {
        icon: Watch,
        title: "Your budget on the watch face",
        body: "Add a complication to see this month's remaining budget at a glance. It shows up in the Smart Stack, too.",
      },
      {
        icon: Calculator,
        title: "Record in a few taps",
        body: "Enter the amount, tap Next and pick a category. Your buddy celebrates every record.",
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
    watchNote: "Requires watchOS 11 or later and an iPhone with Alcoin installed. The Apple Watch app is free.",
    widgetsTitle: "Widgets & Siri",
    widgetsLead: "Check what's left and start recording without opening the app.",
    widgetsPoints: [
      {
        icon: LayoutGrid,
        title: "Home Screen",
        body: "Small, medium and large widgets: what's left in each book, recent records and the last 7 days.",
      },
      {
        icon: Smartphone,
        title: "Lock Screen & StandBy",
        body: "See this month's remaining budget without unlocking your iPhone.",
      },
      {
        icon: Mic,
        title: "Siri & Shortcuts",
        body: "Say “Record an expense in Alcoin” or “How much is left in Alcoin”.",
      },
    ],
    widgetsShot: {
      src: "/alcoin-widgets-home-en.webp",
      alt: "Home Screen with Alcoin's large, small and medium widgets",
    },
    lockWidgets: {
      label: "Lock Screen",
      rect: { src: "/alcoin-widget-lock-rect-en.webp", alt: "Lock Screen widget: $1,104.81 left" },
      circle: { src: "/alcoin-widget-lock-circle-en.webp", alt: "Round Lock Screen widget: $1.1K left" },
    },
    pricingTitle: "Pricing",
    pricingLead: "Your personal book is free forever.",
    free: {
      name: "Free",
      price: "¥0",
      period: "forever",
      items: [
        "Personal book with every feature",
        "Apple Watch, widgets & Siri",
        "One solo period book at a time",
        "Join shared books you're invited to",
      ],
    },
    plus: {
      name: "Alcoin Plus",
      price: "¥100",
      period: "/ month",
      alt: "or ¥1,000 / year",
      items: [
        "Create shared books, as many as you like",
        "Use two or more solo period books at the same time",
        "Everything in Free",
      ],
      note: "If the paying member's Plus ends, the shared book becomes view-only for everyone. Any member with Plus can take over as the payer to keep recording.",
    },
    pricingNote:
      "Alcoin Plus is an auto-renewable subscription. Payment is charged to your Apple Account at confirmation of purchase. It renews automatically unless auto-renew is turned off at least 24 hours before the end of the current period. Manage or cancel it anytime in your App Store account settings. Prices shown are for Japan, tax included; prices in other countries or regions may differ and are shown in the app.",
    privacyTitle: "Your personal book stays on your iPhone",
    privacyBody:
      "Your personal book and solo period books are stored only on your iPhone and never sent to our server (when you use a transfer code, we briefly hold the data encrypted, in a form we can't read). Shared books are stored on our server in Tokyo (AWS) so members can sync. No ads, no analytics, no tracking, and we never sell your data.",
    privacyLink: "Read the Privacy Policy",
    contactTitle: "Questions or feedback?",
    terms: "Terms of Use",
    privacy: "Privacy Policy",
    storeAlt: "Download on the App Store",
  },
  ja: {
    name: "アルコイン",
    otherLang: { label: "English", href: alcoinPaths.home.en },
    tagline: "ポチッと、家計簿。",
    lead: "金額を打って、カテゴリを押すだけ。最速で記録できる家計簿です。記録するたびに、相棒の犬がしっぽをふって応援してくれます。家族との共有家計簿、旅行やイベントの「期間の家計簿」、17の通貨、Apple Watch・Siri・ウィジェットにも対応。個人の家計簿はずっと無料です。",
    heroShot: { src: "/alcoin-home-ja.webp", alt: "予算リングと犬、テンキーのあるホーム画面" },
    cta: "くわしく見る",
    comingSoon: "アルコイン 2.0 は App Store で近日公開予定です",
    featuresTitle: "毎日続けられる、ちょうどいい機能",
    featuresLead: "数秒で記録できることを、いちばん大切にしています。",
    features: [
      {
        icon: Calculator,
        title: "最速の入力",
        body: "開いたらすぐテンキー。金額を打ってカテゴリを押せば、2タップで記録完了です。",
      },
      {
        icon: Dog,
        title: "相棒の犬が応援",
        body: "記録するとコインが飛んで、相棒の犬がしっぽをふって応援してくれます。",
      },
      {
        icon: CircleDashed,
        title: "予算リング",
        body: "今月の「残り」がひと目でわかります。給料日に合わせて月の始まりも設定できます。",
      },
      {
        icon: PiggyBank,
        title: "ダッシュボードと貯金",
        body: "今月のカテゴリ別を円グラフで。過去3か月・今年・過去1年など、好きな期間の支出もまとめて見られます。これまでの貯金と貯金目標までの道のりも。",
      },
      {
        icon: CalendarDays,
        title: "履歴はリストとカレンダーで",
        body: "日ごとにふり返り、カテゴリで絞り込み。日付をさかのぼっての記録や編集もできます。",
      },
      {
        icon: KeyRound,
        title: "機種変更は引き継ぎコードで",
        body: "古いiPhoneでコードを発行して、新しいiPhoneで入力するだけ。家計簿も設定もPlusも引き継げます。",
      },
      {
        icon: Lock,
        title: "ログイン不要、プライバシーを大切に",
        body: "メールアドレスや電話番号の登録はありません。個人の家計簿はiPhoneの中だけに保存され、オフラインでも使えます。広告もトラッキングもなし。日本語と英語に対応しています。",
      },
    ],
    screenshotsTitle: "アプリの画面",
    screenshots: [
      { src: "/alcoin-celebration-ja.webp", alt: "記録した直後、コインが犬のところへ飛んでいく画面" },
      { src: "/alcoin-dashboard-ja.webp", alt: "これまでの貯金、貯金目標、今月の予算、カテゴリ別の円グラフを表示するダッシュボード" },
      { src: "/alcoin-history-calendar-ja.webp", alt: "日ごとの合計を表示するカレンダー表示の履歴" },
    ],
    sharedTitle: "家族や仲間と、共有家計簿",
    sharedLead: "夫婦・家族・サークル・シェアハウスなど、みんなで1つの家計簿を。",
    steps: [
      {
        icon: PenLine,
        title: "家計簿をつくる",
        body: "「家族」「テニス部」「シェアハウス」など、名前とアイコンを決めます。",
      },
      {
        icon: QrCode,
        title: "招待する",
        body: "コード・QRコード・リンクで招待。招待は48時間で期限切れになります。参加は無料です。",
      },
      {
        icon: Users,
        title: "みんなで記録",
        body: "メンバー全員が記録・編集できます。変更はみんなのiPhoneに自動で反映されます。",
      },
    ],
    sharedPoints: [
      {
        icon: Bell,
        title: "記録の通知",
        body: "ほかのメンバーが記録すると通知でお知らせ。家計簿ごとにオン・オフできます。",
      },
      {
        icon: Users,
        title: "だれが記録したかひと目で",
        body: "履歴には、記録したメンバーが表示されます。",
      },
      {
        icon: Contact,
        title: "家計簿ごとの表示名",
        body: "表示名は家計簿ごとに決められて、いつでも変更できます。会員登録は不要です。",
      },
      {
        icon: UserMinus,
        title: "メンバーの管理",
        body: "作成した人はメンバーを外せます。自分から抜けることもいつでもできます。",
      },
    ],
    sharedNote:
      "共有家計簿をつくるにはアルコイン Plus が必要です（参加は無料）。家計簿はいくつでも作れて、ホームの家計簿名からすぐ切り替えられます。",
    sharedShots: [
      { src: "/alcoin-shared-history-ja.webp", alt: "記録したメンバーが表示される家族の家計簿の履歴" },
      {
        src: "/alcoin-shared-members-ja.webp",
        alt: "記録の通知、3人のメンバー、メンバーを招待ボタンがある家族の家計簿の設定",
      },
    ],
    periodTitle: "旅行やイベントは「期間の家計簿」",
    periodLead: "日付と予算を決めて、その期間だけの家計簿に。",
    periodPoints: [
      {
        icon: CalendarRange,
        title: "期間の残りと「あと◯日」",
        body: "旅行中は、ホームに期間の残りと終わるまでの日数を表示します。",
      },
      {
        icon: Merge,
        title: "終わったら1件にまとめる",
        body: "ふだんの家計簿に1件でまとめて入れられます。明細は期間の家計簿に残ります。",
      },
      {
        icon: Users,
        title: "1人でも、みんなでも",
        body: "1人で使う期間の家計簿は、同時に1つまで無料。共有家計簿にすれば、旅の仲間と一緒に記録できます。",
      },
    ],
    periodShots: [
      { src: "/alcoin-period-book-ja.webp", alt: "期間の残りと「あと3日」を表示する沖縄旅行の家計簿" },
      {
        src: "/alcoin-period-merge-ja.webp",
        alt: "沖縄旅行が終わり、合計¥52,400を個人の家計簿に入れるか確認する画面",
      },
    ],
    currencyTitle: "17の通貨に対応",
    currencyLead: "海外旅行では現地の通貨のまま記録して、あとでまとめて換算。",
    currencyPoints: [
      {
        icon: Coins,
        title: "家計簿ごとに通貨を選べる",
        body: "円・ドル・ユーロ・ウォン・台湾ドル・バーツなど、17の通貨から選べます。",
      },
      {
        icon: ArrowRightLeft,
        title: "あとから自分のレートで換算",
        body: "別の通貨で記録した分は、カードの明細などを見て入れたレートでまとめて換算。元の金額とレートも残ります。",
      },
    ],
    currencyShots: [
      { src: "/alcoin-currency-book-ja.webp", alt: "ドルで記録しているハワイ旅行の期間の家計簿" },
      {
        src: "/alcoin-currency-convert-ja.webp",
        alt: "ハワイ旅行の$1,284.50を、入力したレートで円に換算して個人の家計簿に入れる画面",
      },
    ],
    watchTitle: "Apple Watch でも",
    watchLead: "iPhoneを出さなくても、腕元で残りを確認して、その場で記録できます。",
    watchShots: [
      {
        src: "/alcoin-watch-complication-ja.webp",
        alt: "残りの予算を表示するコンプリケーションのある文字盤",
        label: "文字盤",
      },
      {
        src: "/alcoin-watch-keypad-ja.webp",
        alt: "Apple Watchのテンキーで¥1,280を入力する画面",
        label: "1. 金額 → 次へ",
      },
      { src: "/alcoin-watch-category-ja.webp", alt: "Apple Watchでカテゴリを選ぶ画面", label: "2. カテゴリ" },
      { src: "/alcoin-watch-done-ja.webp", alt: "記録が完了して犬がよろこぶ画面", label: "3. 記録完了" },
      {
        src: "/alcoin-watch-smart-stack-ja.webp",
        alt: "スマートスタックに表示された個人と家族の家計簿の残り",
        label: "スマートスタック",
      },
    ],
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
    watchNote:
      "watchOS 11 以降に対応。ペアリングしたiPhoneにアルコインが必要です。Apple Watch アプリは無料で使えます。",
    widgetsTitle: "ウィジェットとSiri",
    widgetsLead: "アプリを開かなくても、残りの確認と記録ができます。",
    widgetsPoints: [
      {
        icon: LayoutGrid,
        title: "ホーム画面",
        body: "小・中・大のウィジェット。家計簿ごとの残りや、最近の記録・この7日間の支出も。",
      },
      {
        icon: Smartphone,
        title: "ロック画面とスタンバイ",
        body: "iPhoneのロックを解除しなくても、今月の残りをひと目で確認できます。",
      },
      {
        icon: Mic,
        title: "Siriとショートカット",
        body: "「アルコインで支出を記録」「アルコインの残りはいくら」と話しかけるだけ。",
      },
    ],
    widgetsShot: {
      src: "/alcoin-widgets-home-ja.webp",
      alt: "アルコインの大・小・中のウィジェットを置いたホーム画面",
    },
    lockWidgets: {
      label: "ロック画面",
      rect: { src: "/alcoin-widget-lock-rect-ja.webp", alt: "ロック画面のウィジェット：残り¥51,530" },
      circle: { src: "/alcoin-widget-lock-circle-ja.webp", alt: "ロック画面の円形ウィジェット：残り5.1万" },
    },
    pricingTitle: "料金",
    pricingLead: "個人の家計簿は、ずっと無料です。",
    free: {
      name: "無料",
      price: "¥0",
      period: "ずっと無料",
      items: [
        "個人の家計簿のすべての機能",
        "Apple Watch・ウィジェット・Siri",
        "1人で使う期間の家計簿（同時に1つまで）",
        "招待された共有家計簿への参加",
      ],
    },
    plus: {
      name: "アルコイン Plus",
      price: "¥100",
      period: "/ 月",
      alt: "または ¥1,000 / 年",
      items: ["共有家計簿をつくれる（いくつでも）", "1人で使う期間の家計簿を同時に2つ以上", "無料プランのすべての機能"],
      note: "支払う人の Plus が終了すると、その共有家計簿は全員が閲覧のみになります。Plus を持つメンバーが支払いを引き継げば、また記録できます。",
    },
    pricingNote:
      "アルコイン Plus は自動更新のサブスクリプションです。お支払いは購入の確認時に Apple ID に請求され、期間終了の24時間以上前に自動更新をオフにしない限り、自動的に更新されます。管理・解約は App Store のアカウント設定からいつでも行えます。価格は日本での税込価格です。国や地域によって異なる場合があります。",
    privacyTitle: "個人の家計簿は、iPhoneの中だけに",
    privacyBody:
      "個人の家計簿と1人で使う期間の家計簿は、iPhoneの中だけに保存され、サーバーには送られません（引き継ぎコードを使うときだけ、暗号化したデータを短い間お預かりします。中身を読むことはできません）。共有家計簿は、メンバー間で同期するために東京リージョン（AWS）のサーバーに保存されます。広告・アナリティクス・トラッキングはなく、データを販売することもありません。",
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
  if (!ALCOIN_APP_STORE_URL) return null;
  return (
    <Link href={ALCOIN_APP_STORE_URL} target="_blank" rel="noopener noreferrer" className="inline-block">
      <Image src="/app-store-badge.svg" alt={alt} width={180} height={54} />
    </Link>
  );
}

function SectionHeading({ title, lead }: { title: string; lead?: string }) {
  return (
    <>
      <h2 className="text-balance text-center text-display-xs font-extrabold text-alcoin-ink md:text-display-sm">
        {title}
      </h2>
      {lead && <p className="mx-auto mt-3 max-w-2xl text-center text-body-md text-alcoin-muted">{lead}</p>}
    </>
  );
}

function PointList({ points, className }: { points: readonly Point[]; className?: string }) {
  return (
    <ul className={cn("flex flex-col gap-4", className)}>
      {points.map(({ icon: Icon, title, body }) => (
        <li key={title} className="flex gap-4 rounded-3xl border border-alcoin-line bg-white p-5">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-alcoin-50 text-alcoin-500">
            <Icon className="h-6 w-6" aria-hidden />
          </div>
          <div>
            <h3 className="text-heading-md font-bold text-alcoin-ink">{title}</h3>
            <p className="mt-1 text-body-sm text-alcoin-muted">{body}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

// Two phone shots beside a list of points; `reverse` puts the shots first on wide screens.
function SplitSection({
  id,
  title,
  lead,
  points,
  shots,
  reverse,
  className,
}: {
  id: string;
  title: string;
  lead: string;
  points: readonly Point[];
  shots: readonly Shot[];
  reverse?: boolean;
  className?: string;
}) {
  return (
    <section id={id} className={cn("w-full py-16", className)}>
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-12">
        <SectionHeading title={title} lead={lead} />
        <div
          className={cn(
            "mt-10 flex flex-col items-center gap-10 md:flex-row md:items-center",
            reverse && "md:flex-row-reverse"
          )}
        >
          <PointList points={points} className="w-full md:w-1/2" />
          <div className="grid w-full max-w-md grid-cols-2 gap-4 md:w-1/2">
            {shots.map((s) => (
              <PhoneShot key={s.src} src={s.src} alt={s.alt} className="rounded-2xl border-4 sm:rounded-[2rem]" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function AlcoinLanding({ lang }: { lang: AlcoinLang }) {
  const t = content[lang];
  return (
    <div
      lang={lang}
      className={cn(
        alcoinRounded.variable,
        "mx-auto min-h-screen flex flex-col bg-alcoin-bg text-alcoin-text",
        lang === "ja" && "[word-break:auto-phrase]"
      )}
      style={{ fontFamily: "var(--font-alcoin), ui-rounded, 'Hiragino Maru Gothic ProN', system-ui, sans-serif" }}
    >
      <main className="flex-grow">
        {/* Hero */}
        <section className="w-full bg-alcoin-biscuit">
          <div className="container mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-20 lg:px-12">
            <div className="flex justify-end">
              <Link
                href={t.otherLang.href}
                hrefLang={lang === "en" ? "ja" : "en"}
                lang={lang === "en" ? "ja" : "en"}
                className="text-label-md text-alcoin-600 underline underline-offset-4 hover:text-alcoin-700"
              >
                {t.otherLang.label}
              </Link>
            </div>
            <div className="mt-4 flex flex-col items-center gap-10 md:flex-row md:justify-between">
              <div className="flex flex-col items-center gap-5 text-center md:w-3/5 md:items-start md:text-left">
                <div className="flex items-center gap-3">
                  <AlcoinDog className="w-[3.75rem] md:w-[4.5rem]" />
                  <p className="text-[2.5rem] font-extrabold leading-none tracking-wide text-alcoin-ink md:text-6xl">
                    {t.name}
                  </p>
                </div>
                <h1 className="text-balance text-display-xs font-extrabold text-alcoin-ink md:text-display-md">
                  {t.tagline}
                </h1>
                <p className="max-w-xl text-body-md text-alcoin-muted md:text-body-lg">{t.lead}</p>
                <div className="flex flex-col items-center gap-4 sm:flex-row">
                  <AppStoreBadge alt={t.storeAlt} />
                  <Button asChild size="lg" variant="alcoin" className="rounded-full">
                    <Link href="#features">{t.cta}</Link>
                  </Button>
                </div>
                {!ALCOIN_APP_STORE_URL && (
                  <p className="rounded-full bg-white px-4 py-1.5 text-label-md text-alcoin-600 shadow-sm">
                    {t.comingSoon}
                  </p>
                )}
              </div>
              <div className="relative w-56 md:w-2/5 md:max-w-[18rem]">
                <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-alcoin-coin/30" aria-hidden />
                <PhoneShot src={t.heroShot.src} alt={t.heroShot.alt} className="relative" />
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="w-full scroll-mt-4 bg-alcoin-bg py-16">
          <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-12">
            <SectionHeading title={t.featuresTitle} lead={t.featuresLead} />
            <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {t.features.map(({ icon: Icon, title, body }, i) => (
                <li
                  key={title}
                  className={cn(
                    "rounded-3xl border border-alcoin-line bg-white p-6",
                    i === t.features.length - 1 && "border-alcoin-biscuit bg-alcoin-biscuit sm:col-span-2 lg:col-span-3"
                  )}
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-alcoin-50 text-alcoin-500">
                    <Icon className="h-6 w-6" aria-hidden />
                  </div>
                  <h3 className="mt-4 text-heading-md font-bold text-alcoin-ink">{title}</h3>
                  <p className="mt-1 text-body-sm text-alcoin-muted">{body}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Screenshots */}
        <section className="w-full bg-white py-16">
          <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-12">
            <SectionHeading title={t.screenshotsTitle} />
            <div className="mt-10 grid grid-cols-3 gap-3 sm:gap-8 md:px-16">
              {t.screenshots.map((s) => (
                <PhoneShot key={s.src} src={s.src} alt={s.alt} className="rounded-2xl border-4 sm:rounded-[2rem]" />
              ))}
            </div>
          </div>
        </section>

        {/* Shared books */}
        <section id="shared-books" className="w-full bg-alcoin-50 py-16">
          <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-12">
            <SectionHeading title={t.sharedTitle} lead={t.sharedLead} />
            <div className="mt-10 flex flex-col items-center gap-10 md:flex-row md:items-center">
              <ol className="flex w-full flex-col gap-4 md:w-1/2">
                {t.steps.map(({ icon: Icon, title, body }, i) => (
                  <li key={title} className="flex gap-4 rounded-3xl bg-white p-5">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-alcoin-500 text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </div>
                    <div>
                      <h3 className="text-heading-md font-bold text-alcoin-ink">
                        <span className="mr-2 text-alcoin-500">{i + 1}.</span>
                        {title}
                      </h3>
                      <p className="mt-1 text-body-sm text-alcoin-muted">{body}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <div className="grid w-full max-w-md grid-cols-2 gap-4 md:w-1/2">
                {t.sharedShots.map((s) => (
                  <PhoneShot key={s.src} src={s.src} alt={s.alt} className="rounded-2xl border-4 sm:rounded-[2rem]" />
                ))}
              </div>
            </div>
            <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {t.sharedPoints.map(({ icon: Icon, title, body }) => (
                <li key={title} className="rounded-3xl bg-white p-5">
                  <div className="flex items-center gap-3">
                    <Icon className="h-5 w-5 shrink-0 text-alcoin-500" aria-hidden />
                    <h3 className="text-heading-sm font-bold text-alcoin-ink">{title}</h3>
                  </div>
                  <p className="mt-2 text-body-sm text-alcoin-muted">{body}</p>
                </li>
              ))}
            </ul>
            <p className="mx-auto mt-6 flex max-w-3xl items-start gap-3 px-2 text-body-sm text-alcoin-muted">
              <Link2 className="mt-0.5 h-4 w-4 shrink-0 text-alcoin-500" aria-hidden />
              <span>{t.sharedNote}</span>
            </p>
          </div>
        </section>

        {/* Period books */}
        <SplitSection
          id="period-books"
          title={t.periodTitle}
          lead={t.periodLead}
          points={t.periodPoints}
          shots={t.periodShots}
          reverse
          className="bg-alcoin-bg"
        />

        {/* Currencies */}
        <SplitSection
          id="currencies"
          title={t.currencyTitle}
          lead={t.currencyLead}
          points={t.currencyPoints}
          shots={t.currencyShots}
          className="bg-white"
        />

        {/* Apple Watch */}
        <section id="apple-watch" className="w-full bg-alcoin-bg py-16">
          <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-12">
            <SectionHeading title={t.watchTitle} lead={t.watchLead} />
            <ul className="mx-auto mt-10 flex max-w-5xl flex-wrap justify-center gap-x-4 gap-y-6 sm:gap-6">
              {t.watchShots.map((s) => (
                <li
                  key={s.src}
                  className="flex w-[calc(50%-0.5rem)] flex-col items-center gap-3 sm:w-[calc(33.333%-1rem)] lg:w-[calc(20%-1.2rem)]"
                >
                  <WatchShot src={s.src} alt={s.alt} className="w-full max-w-[11rem]" />
                  <span className="text-label-md font-bold text-alcoin-600">{s.label}</span>
                </li>
              ))}
            </ul>
            <PointList points={t.watchPoints} className="mx-auto mt-12 grid max-w-5xl md:grid-cols-2" />
            <p className="mx-auto mt-6 flex max-w-5xl items-start gap-3 px-2 text-body-sm text-alcoin-muted">
              <Watch className="mt-0.5 h-4 w-4 shrink-0 text-alcoin-500" aria-hidden />
              <span>{t.watchNote}</span>
            </p>
          </div>
        </section>

        {/* Widgets & Siri */}
        <section id="widgets" className="w-full bg-white py-16">
          <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-12">
            <SectionHeading title={t.widgetsTitle} lead={t.widgetsLead} />
            <div className="mt-10 flex flex-col items-center gap-10 md:flex-row md:items-center md:justify-center">
              <div className="relative w-56 shrink-0 md:w-64">
                <div className="absolute -left-4 -top-4 h-20 w-20 rounded-full bg-alcoin-coin/30" aria-hidden />
                <PhoneShot src={t.widgetsShot.src} alt={t.widgetsShot.alt} className="relative" />
              </div>
              <div className="flex w-full flex-col gap-4 md:max-w-lg">
                <PointList points={t.widgetsPoints} />
                <figure className="flex items-center justify-center gap-5 rounded-3xl bg-gradient-to-br from-[#2B4C8C] to-[#14284F] px-6 py-5">
                  <Image
                    src={t.lockWidgets.rect.src}
                    alt={t.lockWidgets.rect.alt}
                    width={516}
                    height={228}
                    className="h-auto w-44"
                  />
                  <Image
                    src={t.lockWidgets.circle.src}
                    alt={t.lockWidgets.circle.alt}
                    width={228}
                    height={228}
                    className="h-auto w-20"
                  />
                  <figcaption className="sr-only">{t.lockWidgets.label}</figcaption>
                </figure>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="w-full bg-alcoin-bg py-16">
          <div className="container mx-auto max-w-4xl px-4 sm:px-6">
            <SectionHeading title={t.pricingTitle} lead={t.pricingLead} />
            <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
              {[t.free, t.plus].map((plan, i) => (
                <div
                  key={plan.name}
                  className={cn(
                    "rounded-3xl bg-white p-7",
                    i === 1 ? "border-2 border-alcoin-500" : "border border-alcoin-line"
                  )}
                >
                  <h3 className="text-heading-lg font-bold text-alcoin-ink">{plan.name}</h3>
                  <p className="mt-3 flex items-baseline gap-2">
                    <span className="text-display-sm font-extrabold text-alcoin-ink">{plan.price}</span>
                    <span className="text-body-md text-alcoin-muted">{plan.period}</span>
                  </p>
                  {"alt" in plan && <p className="text-body-sm text-alcoin-muted">{plan.alt}</p>}
                  <ul className="mt-5 space-y-2">
                    {plan.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-body-md text-alcoin-text">
                        <Check className="mt-1 h-4 w-4 shrink-0 text-alcoin-500" aria-hidden />
                        {item}
                      </li>
                    ))}
                  </ul>
                  {"note" in plan && (
                    <p className="mt-5 rounded-2xl bg-alcoin-50 p-4 text-body-sm text-alcoin-muted">{plan.note}</p>
                  )}
                </div>
              ))}
            </div>
            <p className="mx-auto mt-6 max-w-3xl text-caption-lg text-alcoin-muted">
              {t.pricingNote}{" "}
              <Link href={alcoinPaths.terms[lang]} className="text-alcoin-600 underline underline-offset-4">
                {t.terms}
              </Link>
              {" / "}
              <Link href={alcoinPaths.privacy[lang]} className="text-alcoin-600 underline underline-offset-4">
                {t.privacy}
              </Link>
            </p>
          </div>
        </section>

        {/* Privacy */}
        <section className="w-full bg-white py-16">
          <div className="container mx-auto max-w-4xl px-4 sm:px-6">
            <div className="flex flex-col items-center gap-6 rounded-3xl bg-alcoin-biscuit p-8 text-center md:flex-row md:text-left">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-white text-alcoin-500">
                <Lock className="h-8 w-8" aria-hidden />
              </div>
              <div>
                <h2 className="text-heading-xl font-extrabold text-alcoin-ink">{t.privacyTitle}</h2>
                <p className="mt-2 text-body-md text-alcoin-muted">{t.privacyBody}</p>
                <Link
                  href={alcoinPaths.privacy[lang]}
                  className="mt-3 inline-block text-label-lg text-alcoin-600 underline underline-offset-4 hover:text-alcoin-700"
                >
                  {t.privacyLink}
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Contact & legal */}
        <section className="w-full bg-alcoin-bg py-14">
          <div className="container mx-auto flex max-w-4xl flex-col items-center gap-4 px-4 text-center sm:px-6">
            <AlcoinDog className="w-12" />
            <AppStoreBadge alt={t.storeAlt} />
            <h2 className="text-heading-md font-bold text-alcoin-ink">{t.contactTitle}</h2>
            <a href={`mailto:${ALCOIN_SUPPORT_EMAIL}`} className="text-heading-md text-alcoin-600 hover:underline">
              {ALCOIN_SUPPORT_EMAIL}
            </a>
            <nav aria-label={t.name} className="mt-2 flex flex-wrap justify-center gap-x-6 gap-y-2 text-caption-lg">
              <Link href={alcoinPaths.terms[lang]} className="text-alcoin-600 hover:underline">
                {t.terms}
              </Link>
              <Link href={alcoinPaths.privacy[lang]} className="text-alcoin-600 hover:underline">
                {t.privacy}
              </Link>
              <Link
                href={t.otherLang.href}
                hrefLang={lang === "en" ? "ja" : "en"}
                lang={lang === "en" ? "ja" : "en"}
                className="text-alcoin-600 hover:underline"
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
