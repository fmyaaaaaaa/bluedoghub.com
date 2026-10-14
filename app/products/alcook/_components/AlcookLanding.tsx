import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Bell,
  BookmarkPlus,
  CalendarDays,
  Camera,
  Check,
  ChefHat,
  CircleUser,
  Dices,
  History,
  Images,
  LayoutGrid,
  ListChecks,
  ListOrdered,
  Lock,
  LogOut,
  type LucideIcon,
  PenLine,
  Repeat,
  Send,
  Share2,
  ShoppingBasket,
  Smartphone,
  Sparkles,
  Users,
  UtensilsCrossed,
  Watch,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { AlcookDog } from "./AlcookDog";
import { ALCOOK_APP_STORE_URL, ALCOOK_SUPPORT_EMAIL, type AlcookLang, alcookPaths } from "./constants";
import { alcookRounded } from "./fonts";

type Shot = { src: string; alt: string };
type Point = { icon: LucideIcon; title: string; body: string };

// Screenshots are placeholders until the app's are taken: every file is listed in docs/alcook-screenshots.md.
const content = {
  en: {
    name: "Alcook",
    otherLang: { label: "日本語", href: alcookPaths.home.ja },
    tagline: "Your saved recipes, this week's dinners.",
    lead: "Save the recipes you find in screenshots, on the web, on Instagram or in LINE into your own recipe book. Alcook plans this week's dinners from it and gathers the ingredients into one shopping list. Tap “Made it!” when you've cooked, and keep a photo of the dish. Using it on your own is always free.",
    heroShot: {
      src: "/alcook-home-en.webp",
      alt: "Home screen with tonight's dinner, the dog in its apron and the rest of the week",
    },
    cta: "See how it works",
    comingSoon: "Alcook is coming soon to the App Store",
    featuresTitle: "From a screenshot to dinner on the table",
    featuresLead: "Save it, plan it, buy it, cook it.",
    features: [
      {
        icon: BookmarkPlus,
        title: "Save from anywhere",
        body: "Screenshots, web pages, Instagram and LINE posts. A dish's name is enough to save it.",
      },
      {
        icon: CalendarDays,
        title: "This week's dinners, planned",
        body: "Choose how each day is decided and Alcook fills in the dish. “Surprise me” never repeats a dish in the same week.",
      },
      {
        icon: ShoppingBasket,
        title: "One shopping list",
        body: "The ingredients of the week's dinners are gathered in one list, with the same ingredients added up.",
      },
      {
        icon: ChefHat,
        title: "Cooking mode",
        body: "Screenshots, an ingredient checklist and your notes on one screen. The screen stays on while you cook.",
      },
      {
        icon: Camera,
        title: "“Made it!”",
        body: "Tap it after cooking and the dog celebrates. Alcook counts how often you've made each dish, and you can keep a photo of it.",
      },
      {
        icon: Share2,
        title: "Share this week's menu",
        body: "This week's dinners as one picture for a story (9:16) or a post (4:5). Family names are never included.",
      },
      {
        icon: Lock,
        title: "No sign-up, private by design",
        body: "No email or phone number needed. Your own recipe book stays on your iPhone and works fully offline. No ads, no tracking. In English and Japanese.",
      },
    ],
    screenshotsTitle: "A closer look",
    screenshots: [
      {
        src: "/alcook-recipe-en.webp",
        alt: "A recipe with its dish photo, how many times it was made, ingredients and our notes",
      },
      {
        src: "/alcook-made-en.webp",
        alt: "The dog celebrating right after tapping Made it!, with the 12th time recorded",
      },
      { src: "/alcook-share-week-en.webp", alt: "This week's dinners as a story-sized picture to share" },
    ],
    saveTitle: "Save recipes where you find them",
    saveLead: "Screenshots, web pages and posts all go into one recipe book.",
    savePoints: [
      {
        icon: Images,
        title: "Save with screenshots",
        body: "Just the dish's name and its screenshots. Quick to save (its ingredients won't be on the shopping list).",
      },
      {
        icon: ListChecks,
        title: "Save with ingredients",
        body: "Add the ingredients and amounts and they go on the shopping list. Ingredient names you've used before are suggested.",
      },
      {
        icon: Send,
        title: "From Safari, Instagram and LINE",
        body: "Save to “Want to make” from the share menu. A web page's title and link come with it; for Instagram, add a screenshot and a note.",
      },
    ],
    saveShots: [
      { src: "/alcook-book-en.webp", alt: "The recipe book as a two-column grid with All, New dishes and Often made" },
      {
        src: "/alcook-share-extension-en.webp",
        alt: "Saving a recipe from Safari's share menu to Want to make, with the dish name taken from the page's title",
      },
    ],
    weekTitle: "This week's dinners: just choose how",
    weekLead: "Pick how each day is decided, and Alcook puts the dish in.",
    modes: [
      {
        icon: Dices,
        title: "Surprise me",
        body: "At random from the dishes you've made before. No dish twice in the same week.",
      },
      { icon: PenLine, title: "Choose myself", body: "Pick the dish from your recipe book." },
      { icon: Sparkles, title: "New dish", body: "From “Want to make”: a dish you've never made yet." },
      { icon: UtensilsCrossed, title: "Not cooking", body: "Eating out, leftovers, or not decided." },
    ],
    weekPoints: [
      {
        icon: Repeat,
        title: "Every Friday like this",
        body: "Set a day to always be decided the same way, and next week and after follow it.",
      },
      {
        icon: ListOrdered,
        title: "Pick from a list",
        body: "Choose several dishes at once, then place them on the days you like.",
      },
      {
        icon: Bell,
        title: "Next week's suggestions",
        body: "At the weekend, next week's suggestions are ready and a notification lets you know. Change only the days you want, then decide.",
      },
      {
        icon: History,
        title: "Past menus",
        body: "Decided weeks are kept, week by week. Use a good week again next week with one tap.",
      },
    ],
    weekShots: [
      { src: "/alcook-week-en.webp", alt: "This week, Monday to Sunday, with how each day is decided" },
      {
        src: "/alcook-week-sheet-en.webp",
        alt: "Choosing how a day is decided: Surprise me, Choose myself, New dish or Not cooking",
      },
    ],
    groceryTitle: "The shopping list, and cooking mode",
    groceryLead: "What to buy comes from the week's dinners, and cooking is one screen.",
    groceryPoints: [
      {
        icon: ShoppingBasket,
        title: "The week's ingredients in one list",
        body: "Ingredients of the days that are decided, each showing which dish it's for.",
      },
      {
        icon: Check,
        title: "Bought, or have it",
        body: "Check items off as bought or already at home, and they move out of the way.",
      },
      {
        icon: ListChecks,
        title: "Amounts that add up",
        body: "1 + 2 pieces is 3, 200 g + 1 kg is 1.2 kg, and tablespoons and teaspoons come together.",
      },
      {
        icon: ChefHat,
        title: "Cooking mode",
        body: "Screenshots large, ingredients as a checklist, your notes below. The screen stays on.",
      },
    ],
    groceryShots: [
      { src: "/alcook-grocery-en.webp", alt: "This week's groceries with amounts added up and which dish each is for" },
      { src: "/alcook-cooking-en.webp", alt: "Cooking mode with the screenshots, an ingredient checklist and notes" },
    ],
    familyTitle: "A family recipe book",
    familyLead: "One recipe book, one meal plan and one shopping list for the whole family.",
    familySteps: [
      {
        icon: PenLine,
        title: "Create a family recipe book",
        body: "Name it, and choose your name for the family: Mom, Dad, Yui. Bring recipes over from your own book.",
      },
      {
        icon: Send,
        title: "Invite",
        body: "Send the invite code or link. A code works for 48 hours, and joining is free.",
      },
      {
        icon: Users,
        title: "Everyone uses it",
        body: "Recipes, the week's dinners and the shopping list stay in sync on everyone's iPhone.",
      },
    ],
    familyPoints: [
      {
        icon: ShoppingBasket,
        title: "Shop together",
        body: "When someone checks an item as bought, it's bought on everyone's list.",
      },
      {
        icon: ChefHat,
        title: "Who made it",
        body: "Each “Made it!” keeps the name of the family member who cooked.",
      },
      {
        icon: CircleUser,
        title: "No sign-up",
        body: "Just enter your name for the family. No email or phone number.",
      },
      {
        icon: LogOut,
        title: "Leave anytime",
        body: "Leave the family recipe book whenever you like. Its recipes stay for the rest of the family.",
      },
    ],
    familyNote:
      "Creating a family recipe book needs Alcook Plus; invited family members join free. Up to 20 people can share one book.",
    familyShots: [
      {
        src: "/alcook-family-switch-en.webp",
        alt: "Switching between My recipe book and the family's book, Our family recipes",
      },
      { src: "/alcook-family-invite-en.webp", alt: "Inviting family with an invite code and a link" },
    ],
    watchTitle: "On Apple Watch",
    watchLead: "Tonight's dinner, the shopping list and the ingredients, right on your wrist.",
    watchShots: [
      {
        src: "/alcook-watch-complication-en.webp",
        alt: "Watch face with tonight's dinner as a complication",
        label: "Watch face",
      },
      { src: "/alcook-watch-today-en.webp", alt: "Tonight's dinner on Apple Watch", label: "Tonight's dinner" },
      {
        src: "/alcook-watch-grocery-en.webp",
        alt: "The week's shopping list on Apple Watch, with items checked off",
        label: "Shopping list",
      },
      {
        src: "/alcook-watch-cooking-en.webp",
        alt: "Tonight's ingredients as a checklist on Apple Watch",
        label: "Cooking checklist",
      },
    ],
    watchPoints: [
      {
        icon: Watch,
        title: "Tonight's dinner on the watch face",
        body: "Add a complication and see tonight's dish at a glance.",
      },
      {
        icon: ShoppingBasket,
        title: "Check off at the store",
        body: "Tick off the shopping list on your wrist. Your iPhone's list follows.",
      },
      {
        icon: ListChecks,
        title: "Cooking checklist",
        body: "Check tonight's ingredients as you go, without touching your iPhone.",
      },
      {
        icon: Smartphone,
        title: "Works through your iPhone",
        body: "Alcook on your watch works with Alcook on your paired iPhone. No sign-in needed.",
      },
    ],
    watchNote: "Requires watchOS 11 or later and an iPhone with Alcook installed. The Apple Watch app is free.",
    widgetsTitle: "Widgets",
    widgetsLead: "See tonight's dinner and what's left to buy without opening the app.",
    widgetsPoints: [
      {
        icon: LayoutGrid,
        title: "Home Screen",
        body: "Tonight's dinner and how much is left to buy, or today and the days ahead. Reroll a “Surprise me” day right from the widget.",
      },
      {
        icon: Smartphone,
        title: "Lock Screen",
        body: "Tomorrow's dinner and the number of things left to buy, without unlocking your iPhone.",
      },
    ],
    widgetsShot: {
      src: "/alcook-widgets-home-en.webp",
      alt: "Home Screen with Alcook's small and medium widgets",
    },
    lockWidgets: {
      label: "Lock Screen",
      rect: {
        src: "/alcook-widget-lock-rect-en.webp",
        alt: "Lock Screen widget: tomorrow's and the next day's dinner",
      },
      circle: { src: "/alcook-widget-lock-circle-en.webp", alt: "Round Lock Screen widget: 5 things left to buy" },
    },
    pricingTitle: "Pricing",
    pricingLead: "Using it on your own is always free.",
    free: {
      name: "Free",
      price: "¥0",
      period: "forever",
      items: [
        "Your own recipe book with every feature",
        "Weekly dinners, the shopping list and cooking mode",
        "Apple Watch & widgets",
        "Join family recipe books you're invited to",
      ],
    },
    plus: {
      name: "Alcook Plus",
      badge: "1 month free",
      price: "¥100",
      period: "/ month",
      alt: "or ¥1,000 / year",
      items: [
        "Create a family recipe book",
        "Share recipes, the week's dinners and the shopping list with your family",
        "Everything in Free",
      ],
      note: "If the paying member's Plus ends, the family recipe book becomes view-only for everyone. Any member with Plus can take over to keep it going.",
    },
    pricingNote:
      "Alcook Plus is an auto-renewable subscription. Both plans start with a 1-month free trial if you haven't used it before. Payment is charged to your Apple Account when the trial ends (or at confirmation of purchase, without a trial). It renews automatically unless auto-renew is turned off at least 24 hours before the end of the current period. Manage or cancel it anytime in your App Store account settings. Prices shown are for Japan, tax included; prices in other countries or regions may differ and are shown in the app.",
    privacyTitle: "Your own recipe book stays on your iPhone",
    privacyBody:
      "The recipes, screenshots, dish photos, meal plans and shopping list in your own recipe book are stored only on your iPhone and never sent to our server. A family recipe book is stored on our server in Tokyo (AWS) so your family can share it. No ads, no analytics, no tracking, and we never sell your data.",
    privacyLink: "Read the Privacy Policy",
    contactTitle: "Questions or feedback?",
    terms: "Terms of Use",
    privacy: "Privacy Policy",
    storeAlt: "Download on the App Store",
  },
  ja: {
    name: "アルクック",
    otherLang: { label: "English", href: alcookPaths.home.en },
    tagline: "保存したレシピで、今週の晩ご飯。",
    lead: "スクショやウェブ、Instagram、LINE で見つけたレシピを、わが家のレシピ本に。今週の晩ご飯はアプリが組んで、材料はひとつの買い物リストにまとまります。作ったら「作った！」で記録して、料理の写真も残せます。ひとりで使う分は、ずっと無料です。",
    heroShot: { src: "/alcook-home-ja.webp", alt: "今日の晩ご飯とエプロンの犬、今週の残りがあるホーム画面" },
    cta: "くわしく見る",
    comingSoon: "アルクックは App Store で近日公開予定です",
    featuresTitle: "スクショから、今夜の食卓まで",
    featuresLead: "保存して、決めて、買って、作る。",
    features: [
      {
        icon: BookmarkPlus,
        title: "どこからでも保存",
        body: "スクショ、ウェブページ、Instagram や LINE の投稿から。料理名だけでも保存できます。",
      },
      {
        icon: CalendarDays,
        title: "今週の晩ご飯を組む",
        body: "曜日ごとに決め方を選べば、料理はアプリが入れます。おまかせは同じ週でかぶりません。",
      },
      {
        icon: ShoppingBasket,
        title: "買い物リストにまとまる",
        body: "今週の晩ご飯の材料を1つのリストに。同じ材料は分量を足して表示します。",
      },
      {
        icon: ChefHat,
        title: "料理中の画面",
        body: "スクショ、材料のチェックリスト、メモを1画面に。料理のあいだ、画面はついたままです。",
      },
      {
        icon: Camera,
        title: "「作った！」で記録",
        body: "作ったら押すだけで、犬がよろこびます。作った回数を数えて、料理の写真も残せます。",
      },
      {
        icon: Share2,
        title: "献立を共有",
        body: "今週の晩ご飯を1枚の画像に。ストーリー（9:16）か投稿（4:5）で。家族の名前は入りません。",
      },
      {
        icon: Lock,
        title: "ログイン不要、プライバシーを大切に",
        body: "メールアドレスや電話番号の登録はありません。ひとりのレシピ本は iPhone の中だけに保存され、オフラインでも使えます。広告もトラッキングもなし。日本語と英語に対応しています。",
      },
    ],
    screenshotsTitle: "アプリの画面",
    screenshots: [
      { src: "/alcook-recipe-ja.webp", alt: "料理の写真、作った回数、材料、わが家のメモがあるレシピの画面" },
      { src: "/alcook-made-ja.webp", alt: "「作った！」を押した直後、犬がよろこび12回目を記録した画面" },
      { src: "/alcook-share-week-ja.webp", alt: "今週の晩ご飯をストーリーの大きさの画像にして共有する画面" },
    ],
    saveTitle: "レシピは、見つけたところから保存",
    saveLead: "スクショも、ウェブページも、投稿も、1つのレシピ本に。",
    savePoints: [
      {
        icon: Images,
        title: "スクショで保存",
        body: "料理名とスクショだけで、すぐ保存できます（材料は買い物リストに出ません）。",
      },
      {
        icon: ListChecks,
        title: "材料も入力して保存",
        body: "材料と分量を入れておけば、買い物リストにまとまります。使ったことのある材料名は候補に出ます。",
      },
      {
        icon: Send,
        title: "Safari・Instagram・LINE から",
        body: "共有メニューから「作りたい」に保存。ウェブページはタイトルと元のページを取り込みます。Instagram はスクショとメモで。",
      },
    ],
    saveShots: [
      { src: "/alcook-book-ja.webp", alt: "すべて・新しい料理・よく作るで絞り込める2列のレシピ本" },
      {
        src: "/alcook-share-extension-ja.webp",
        alt: "Safari の共有メニューから、ページのタイトルから料理名を入れて「作りたい」に保存する画面",
      },
    ],
    weekTitle: "今週の晩ご飯は、決め方を選ぶだけ",
    weekLead: "曜日ごとに決め方を選べば、料理はアプリが入れます。",
    modes: [
      { icon: Dices, title: "おまかせ", body: "作ったことのあるレシピからランダムに。同じ週でかぶりません。" },
      { icon: PenLine, title: "自分で選ぶ", body: "レシピ本の一覧から1品。" },
      { icon: Sparkles, title: "新しい料理", body: "「作りたい」の、まだ作ったことのない料理から。" },
      { icon: UtensilsCrossed, title: "作らない", body: "外食、残り物、決めない日。" },
    ],
    weekPoints: [
      {
        icon: Repeat,
        title: "毎週の決め方",
        body: "「毎週金曜日はこの決め方」にすると、来週からもその決め方で入ります。",
      },
      {
        icon: ListOrdered,
        title: "リストから選ぶ",
        body: "作りたい料理をまとめて選んで、好きな曜日に並べられます。",
      },
      {
        icon: Bell,
        title: "来週の候補と通知",
        body: "週末に来週の候補ができて、通知でお知らせします。変えたい日だけ直して決めましょう。",
      },
      {
        icon: History,
        title: "これまでの献立",
        body: "決まった献立は週ごとに残ります。よかった週は「来週に使う」で、もう一度。",
      },
    ],
    weekShots: [
      { src: "/alcook-week-ja.webp", alt: "月曜から日曜まで、決め方のバッジつきで並んだ今週の献立" },
      {
        src: "/alcook-week-sheet-ja.webp",
        alt: "おまかせ・自分で選ぶ・新しい料理・作らないから、その日の決め方を選ぶシート",
      },
    ],
    groceryTitle: "買い物リストと、料理中の画面",
    groceryLead: "買うものは今週の献立から。作るときは1画面で。",
    groceryPoints: [
      {
        icon: ShoppingBasket,
        title: "今週の材料が1つのリストに",
        body: "決まった日のレシピの材料をまとめます。どの料理の材料かも小さく表示します。",
      },
      {
        icon: Check,
        title: "買った・家にある",
        body: "チェックすると、リストの下にまとまります。",
      },
      {
        icon: ListChecks,
        title: "分量は足して表示",
        body: "1個＋2個は3個、200g＋1kgは1.2kg。大さじと小さじもまとめます。",
      },
      {
        icon: ChefHat,
        title: "料理中",
        body: "スクショは大きく、材料はチェックリストで、メモはその下に。画面はついたままです。",
      },
    ],
    groceryShots: [
      { src: "/alcook-grocery-ja.webp", alt: "分量を足し、どの料理の材料かを表示した今週の買い物リスト" },
      { src: "/alcook-cooking-ja.webp", alt: "スクショ、材料のチェックリスト、メモが並ぶ料理中の画面" },
    ],
    familyTitle: "家族で使う、わが家のレシピ本",
    familyLead: "家族みんなで、同じレシピ本と献立と買い物リストを。",
    familySteps: [
      {
        icon: PenLine,
        title: "家族のレシピ本をつくる",
        body: "名前と、家族に見せる自分の名前（ママ・パパ・ゆいなど）を決めます。自分のレシピ本から料理を入れられます。",
      },
      {
        icon: Send,
        title: "招待する",
        body: "招待コードかリンクを送ります。コードは48時間有効で、参加は無料です。",
      },
      {
        icon: Users,
        title: "みんなで使う",
        body: "レシピ、今週の献立、買い物リストが、家族の iPhone に自動で反映されます。",
      },
    ],
    familyPoints: [
      {
        icon: ShoppingBasket,
        title: "買い物を分担",
        body: "誰かが「買った」にすると、みんなのリストでも買ったことになります。",
      },
      {
        icon: ChefHat,
        title: "誰が作ったか",
        body: "「作った！」の記録に、作った人の名前が残ります。",
      },
      {
        icon: CircleUser,
        title: "会員登録なし",
        body: "家族に見せる名前を入れるだけ。メールアドレスも電話番号もいりません。",
      },
      {
        icon: LogOut,
        title: "いつでも抜けられる",
        body: "家族のレシピ本からは、いつでも抜けられます。レシピはほかの家族のレシピ本に残ります。",
      },
    ],
    familyNote:
      "家族のレシピ本をつくるにはアルクック Plus が必要です（招待された家族は無料で参加できます）。1つのレシピ本を20人まで使えます。",
    familyShots: [
      {
        src: "/alcook-family-switch-ja.webp",
        alt: "自分のレシピ本と、家族の「わが家のレシピ本」を切り替えるシート",
      },
      { src: "/alcook-family-invite-ja.webp", alt: "招待コードとリンクで家族を招待する画面" },
    ],
    watchTitle: "Apple Watch でも",
    watchLead: "今日の晩ご飯、買い物リスト、材料のチェックを、腕元で。",
    watchShots: [
      {
        src: "/alcook-watch-complication-ja.webp",
        alt: "今日の晩ご飯を表示するコンプリケーションのある文字盤",
        label: "文字盤",
      },
      { src: "/alcook-watch-today-ja.webp", alt: "Apple Watch の今日の晩ご飯", label: "今日の晩ご飯" },
      {
        src: "/alcook-watch-grocery-ja.webp",
        alt: "Apple Watch で今週の買い物リストをチェックする画面",
        label: "買い物リスト",
      },
      {
        src: "/alcook-watch-cooking-ja.webp",
        alt: "Apple Watch で今日の材料をチェックリストにした画面",
        label: "料理中のチェック",
      },
    ],
    watchPoints: [
      {
        icon: Watch,
        title: "文字盤に今日の晩ご飯",
        body: "コンプリケーションを置けば、今日の料理がひと目でわかります。",
      },
      {
        icon: ShoppingBasket,
        title: "お店でチェック",
        body: "買い物リストを腕元でチェック。iPhone のリストにも反映されます。",
      },
      {
        icon: ListChecks,
        title: "料理中のチェックリスト",
        body: "今日の材料を、iPhone に触らずにチェックできます。",
      },
      {
        icon: Smartphone,
        title: "iPhoneと連携して動作",
        body: "ペアリングした iPhone のアルクックと連携して動くので、サインインは不要です。",
      },
    ],
    watchNote:
      "watchOS 11 以降に対応。ペアリングした iPhone にアルクックが必要です。Apple Watch アプリは無料で使えます。",
    widgetsTitle: "ウィジェット",
    widgetsLead: "アプリを開かなくても、今日の晩ご飯と買うものがわかります。",
    widgetsPoints: [
      {
        icon: LayoutGrid,
        title: "ホーム画面",
        body: "今日の料理と買うものの数、または今日とこれからの献立。おまかせの日は、ウィジェットから引き直せます。",
      },
      {
        icon: Smartphone,
        title: "ロック画面",
        body: "明日の晩ご飯や、買うものの数を、ロックを解除せずに確認できます。",
      },
    ],
    widgetsShot: {
      src: "/alcook-widgets-home-ja.webp",
      alt: "アルクックの小・中のウィジェットを置いたホーム画面",
    },
    lockWidgets: {
      label: "ロック画面",
      rect: { src: "/alcook-widget-lock-rect-ja.webp", alt: "ロック画面のウィジェット：明日と次の日の晩ご飯" },
      circle: { src: "/alcook-widget-lock-circle-ja.webp", alt: "ロック画面の円形ウィジェット：買うもの あと5つ" },
    },
    pricingTitle: "料金",
    pricingLead: "ひとりで使う分は、ずっと無料です。",
    free: {
      name: "無料",
      price: "¥0",
      period: "ずっと無料",
      items: [
        "自分のレシピ本のすべての機能",
        "今週の献立・買い物リスト・料理中の画面",
        "Apple Watch・ウィジェット",
        "招待された家族のレシピ本への参加",
      ],
    },
    plus: {
      name: "アルクック Plus",
      badge: "1か月無料",
      price: "¥100",
      period: "/ 月",
      alt: "または ¥1,000 / 年",
      items: ["家族のレシピ本をつくれる", "レシピ・今週の献立・買い物リストを家族で共有", "無料プランのすべての機能"],
      note: "支払う人の Plus が終了すると、その家族のレシピ本は全員が見るだけになります。Plus を持つメンバーが支払いを引き継げば、また使えます。",
    },
    pricingNote:
      "アルクック Plus は自動更新のサブスクリプションです。どちらのプランも、はじめての方は1か月の無料お試しから始まります。お支払いは無料お試しの終了時（お試しがない場合は購入の確認時）に Apple ID に請求され、期間終了の24時間以上前に自動更新をオフにしない限り、自動的に更新されます。管理・解約は App Store のアカウント設定からいつでも行えます。価格は日本での税込価格です。国や地域によって異なる場合があります。",
    privacyTitle: "ひとりのレシピ本は、iPhoneの中だけに",
    privacyBody:
      "自分のレシピ本のレシピ、スクショ、料理の写真、献立、買い物リストは iPhone の中だけに保存され、サーバーには送られません。家族のレシピ本は、家族で共有するために東京リージョン（AWS）のサーバーに保存されます。広告・アナリティクス・トラッキングはなく、データを販売することもありません。",
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
        "overflow-hidden rounded-[2rem] border-[6px] border-white bg-white shadow-[0_18px_40px_-18px_rgba(70,38,20,0.35)]",
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
        "overflow-hidden rounded-[22%/18%] border-[6px] border-[#2B2F36] bg-black p-[5%] shadow-[0_18px_40px_-18px_rgba(70,38,20,0.45)]",
        className
      )}
    >
      <Image src={src} alt={alt} width={416} height={496} className="h-auto w-full" />
    </div>
  );
}

function AppStoreBadge({ alt }: { alt: string }) {
  if (!ALCOOK_APP_STORE_URL) return null;
  return (
    <Link href={ALCOOK_APP_STORE_URL} target="_blank" rel="noopener noreferrer" className="inline-block">
      <Image src="/app-store-badge.svg" alt={alt} width={180} height={54} />
    </Link>
  );
}

function SectionHeading({ title, lead }: { title: string; lead?: string }) {
  return (
    <>
      <h2 className="text-balance text-center text-display-xs font-extrabold text-alcook-ink md:text-display-sm">
        {title}
      </h2>
      {lead && <p className="mx-auto mt-3 max-w-2xl text-center text-body-md text-alcook-muted">{lead}</p>}
    </>
  );
}

function PointList({ points, className }: { points: readonly Point[]; className?: string }) {
  return (
    <ul className={cn("flex flex-col gap-4", className)}>
      {points.map(({ icon: Icon, title, body }) => (
        <li key={title} className="flex gap-4 rounded-3xl border border-alcook-line bg-white p-5">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-alcook-50 text-alcook-500">
            <Icon className="h-6 w-6" aria-hidden />
          </div>
          <div>
            <h3 className="text-heading-md font-bold text-alcook-ink">{title}</h3>
            <p className="mt-1 text-body-sm text-alcook-muted">{body}</p>
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

export function AlcookLanding({ lang }: { lang: AlcookLang }) {
  const t = content[lang];
  return (
    <div
      lang={lang}
      className={cn(
        alcookRounded.variable,
        "mx-auto min-h-screen flex flex-col bg-alcook-bg text-alcook-text",
        lang === "ja" && "[word-break:auto-phrase]"
      )}
      style={{ fontFamily: "var(--font-alcook), ui-rounded, 'Hiragino Maru Gothic ProN', system-ui, sans-serif" }}
    >
      <main className="flex-grow">
        {/* Hero */}
        <section className="w-full bg-alcook-biscuit">
          <div className="container mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-20 lg:px-12">
            <div className="flex justify-end">
              <Link
                href={t.otherLang.href}
                hrefLang={lang === "en" ? "ja" : "en"}
                lang={lang === "en" ? "ja" : "en"}
                className="text-label-md text-alcook-600 underline underline-offset-4 hover:text-alcook-700"
              >
                {t.otherLang.label}
              </Link>
            </div>
            <div className="mt-4 flex flex-col items-center gap-10 md:flex-row md:justify-between">
              <div className="flex flex-col items-center gap-5 text-center md:w-3/5 md:items-start md:text-left">
                <div className="flex items-center gap-3">
                  <AlcookDog className="w-[3.75rem] md:w-[4.5rem]" />
                  <p className="text-[2.5rem] font-extrabold leading-none tracking-wide text-alcook-ink md:text-6xl">
                    {t.name}
                  </p>
                </div>
                <h1 className="text-balance text-display-xs font-extrabold text-alcook-ink md:text-display-md">
                  {t.tagline}
                </h1>
                <p className="max-w-xl text-body-md text-alcook-muted md:text-body-lg">{t.lead}</p>
                <div className="flex flex-col items-center gap-4 sm:flex-row">
                  <AppStoreBadge alt={t.storeAlt} />
                  <Button asChild size="lg" variant="alcook" className="rounded-full">
                    <Link href="#features">{t.cta}</Link>
                  </Button>
                </div>
                {!ALCOOK_APP_STORE_URL && (
                  <p className="rounded-full bg-white px-4 py-1.5 text-label-md text-alcook-600 shadow-sm">
                    {t.comingSoon}
                  </p>
                )}
              </div>
              <div className="relative w-56 md:w-2/5 md:max-w-[18rem]">
                <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-alcook-yolk/30" aria-hidden />
                <PhoneShot src={t.heroShot.src} alt={t.heroShot.alt} className="relative" />
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="w-full scroll-mt-4 bg-alcook-bg py-16">
          <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-12">
            <SectionHeading title={t.featuresTitle} lead={t.featuresLead} />
            <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {t.features.map(({ icon: Icon, title, body }, i) => (
                <li
                  key={title}
                  className={cn(
                    "rounded-3xl border border-alcook-line bg-white p-6",
                    i === t.features.length - 1 && "border-alcook-biscuit bg-alcook-biscuit sm:col-span-2 lg:col-span-3"
                  )}
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-alcook-50 text-alcook-500">
                    <Icon className="h-6 w-6" aria-hidden />
                  </div>
                  <h3 className="mt-4 text-heading-md font-bold text-alcook-ink">{title}</h3>
                  <p className="mt-1 text-body-sm text-alcook-muted">{body}</p>
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

        {/* Saving recipes */}
        <SplitSection
          id="save"
          title={t.saveTitle}
          lead={t.saveLead}
          points={t.savePoints}
          shots={t.saveShots}
          className="bg-alcook-bg"
        />

        {/* This week */}
        <section id="this-week" className="w-full bg-alcook-50 py-16">
          <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-12">
            <SectionHeading title={t.weekTitle} lead={t.weekLead} />
            <div className="mt-10 flex flex-col items-center gap-10 md:flex-row md:items-center">
              <ul className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 md:w-1/2">
                {t.modes.map(({ icon: Icon, title, body }) => (
                  <li key={title} className="flex flex-col gap-3 rounded-3xl bg-white p-5">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-alcook-500 text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </div>
                    <div>
                      <h3 className="text-heading-md font-bold text-alcook-ink">{title}</h3>
                      <p className="mt-1 text-body-sm text-alcook-muted">{body}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="grid w-full max-w-md grid-cols-2 gap-4 md:w-1/2">
                {t.weekShots.map((s) => (
                  <PhoneShot key={s.src} src={s.src} alt={s.alt} className="rounded-2xl border-4 sm:rounded-[2rem]" />
                ))}
              </div>
            </div>
            <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {t.weekPoints.map(({ icon: Icon, title, body }) => (
                <li key={title} className="rounded-3xl bg-white p-5">
                  <div className="flex items-center gap-3">
                    <Icon className="h-5 w-5 shrink-0 text-alcook-500" aria-hidden />
                    <h3 className="text-heading-sm font-bold text-alcook-ink">{title}</h3>
                  </div>
                  <p className="mt-2 text-body-sm text-alcook-muted">{body}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Shopping list and cooking mode */}
        <SplitSection
          id="groceries"
          title={t.groceryTitle}
          lead={t.groceryLead}
          points={t.groceryPoints}
          shots={t.groceryShots}
          reverse
          className="bg-white"
        />

        {/* Family recipe book */}
        <section id="family" className="w-full bg-alcook-50 py-16">
          <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-12">
            <SectionHeading title={t.familyTitle} lead={t.familyLead} />
            <div className="mt-10 flex flex-col items-center gap-10 md:flex-row md:items-center">
              <ol className="flex w-full flex-col gap-4 md:w-1/2">
                {t.familySteps.map(({ icon: Icon, title, body }, i) => (
                  <li key={title} className="flex gap-4 rounded-3xl bg-white p-5">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-alcook-500 text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </div>
                    <div>
                      <h3 className="text-heading-md font-bold text-alcook-ink">
                        <span className="mr-2 text-alcook-500">{i + 1}.</span>
                        {title}
                      </h3>
                      <p className="mt-1 text-body-sm text-alcook-muted">{body}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <div className="grid w-full max-w-md grid-cols-2 gap-4 md:w-1/2">
                {t.familyShots.map((s) => (
                  <PhoneShot key={s.src} src={s.src} alt={s.alt} className="rounded-2xl border-4 sm:rounded-[2rem]" />
                ))}
              </div>
            </div>
            <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {t.familyPoints.map(({ icon: Icon, title, body }) => (
                <li key={title} className="rounded-3xl bg-white p-5">
                  <div className="flex items-center gap-3">
                    <Icon className="h-5 w-5 shrink-0 text-alcook-500" aria-hidden />
                    <h3 className="text-heading-sm font-bold text-alcook-ink">{title}</h3>
                  </div>
                  <p className="mt-2 text-body-sm text-alcook-muted">{body}</p>
                </li>
              ))}
            </ul>
            <p className="mx-auto mt-6 flex max-w-3xl items-start gap-3 px-2 text-body-sm text-alcook-muted">
              <Users className="mt-0.5 h-4 w-4 shrink-0 text-alcook-500" aria-hidden />
              <span>{t.familyNote}</span>
            </p>
          </div>
        </section>

        {/* Apple Watch */}
        <section id="apple-watch" className="w-full bg-alcook-bg py-16">
          <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-12">
            <SectionHeading title={t.watchTitle} lead={t.watchLead} />
            <ul className="mx-auto mt-10 flex max-w-4xl flex-wrap justify-center gap-x-4 gap-y-6 sm:gap-6">
              {t.watchShots.map((s) => (
                <li
                  key={s.src}
                  className="flex w-[calc(50%-0.5rem)] flex-col items-center gap-3 lg:w-[calc(25%-1.125rem)]"
                >
                  <WatchShot src={s.src} alt={s.alt} className="w-full max-w-[11rem]" />
                  <span className="text-label-md font-bold text-alcook-600">{s.label}</span>
                </li>
              ))}
            </ul>
            <PointList points={t.watchPoints} className="mx-auto mt-12 grid max-w-5xl md:grid-cols-2" />
            <p className="mx-auto mt-6 flex max-w-5xl items-start gap-3 px-2 text-body-sm text-alcook-muted">
              <Watch className="mt-0.5 h-4 w-4 shrink-0 text-alcook-500" aria-hidden />
              <span>{t.watchNote}</span>
            </p>
          </div>
        </section>

        {/* Widgets */}
        <section id="widgets" className="w-full bg-white py-16">
          <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-12">
            <SectionHeading title={t.widgetsTitle} lead={t.widgetsLead} />
            <div className="mt-10 flex flex-col items-center gap-10 md:flex-row md:items-center md:justify-center">
              <div className="relative w-56 shrink-0 md:w-64">
                <div className="absolute -left-4 -top-4 h-20 w-20 rounded-full bg-alcook-yolk/30" aria-hidden />
                <PhoneShot src={t.widgetsShot.src} alt={t.widgetsShot.alt} className="relative" />
              </div>
              <div className="flex w-full flex-col gap-4 md:max-w-lg">
                <PointList points={t.widgetsPoints} />
                <figure className="flex items-center justify-center gap-5 rounded-3xl bg-gradient-to-br from-[#742414] to-[#27211B] px-6 py-5">
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
        <section id="pricing" className="w-full bg-alcook-bg py-16">
          <div className="container mx-auto max-w-4xl px-4 sm:px-6">
            <SectionHeading title={t.pricingTitle} lead={t.pricingLead} />
            <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
              {[t.free, t.plus].map((plan, i) => (
                <div
                  key={plan.name}
                  className={cn(
                    "rounded-3xl bg-white p-7",
                    i === 1 ? "border-2 border-alcook-500" : "border border-alcook-line"
                  )}
                >
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-heading-lg font-bold text-alcook-ink">{plan.name}</h3>
                    {"badge" in plan && (
                      <span className="rounded-full bg-alcook-yolk-100 px-3 py-0.5 text-label-sm font-bold text-alcook-800">
                        {plan.badge}
                      </span>
                    )}
                  </div>
                  <p className="mt-3 flex items-baseline gap-2">
                    <span className="text-display-sm font-extrabold text-alcook-ink">{plan.price}</span>
                    <span className="text-body-md text-alcook-muted">{plan.period}</span>
                  </p>
                  {"alt" in plan && <p className="text-body-sm text-alcook-muted">{plan.alt}</p>}
                  <ul className="mt-5 space-y-2">
                    {plan.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-body-md text-alcook-text">
                        <Check className="mt-1 h-4 w-4 shrink-0 text-alcook-500" aria-hidden />
                        {item}
                      </li>
                    ))}
                  </ul>
                  {"note" in plan && (
                    <p className="mt-5 rounded-2xl bg-alcook-50 p-4 text-body-sm text-alcook-muted">{plan.note}</p>
                  )}
                </div>
              ))}
            </div>
            <p className="mx-auto mt-6 max-w-3xl text-caption-lg text-alcook-muted">
              {t.pricingNote}{" "}
              <Link href={alcookPaths.terms[lang]} className="text-alcook-600 underline underline-offset-4">
                {t.terms}
              </Link>
              {" / "}
              <Link href={alcookPaths.privacy[lang]} className="text-alcook-600 underline underline-offset-4">
                {t.privacy}
              </Link>
            </p>
          </div>
        </section>

        {/* Privacy */}
        <section className="w-full bg-white py-16">
          <div className="container mx-auto max-w-4xl px-4 sm:px-6">
            <div className="flex flex-col items-center gap-6 rounded-3xl bg-alcook-biscuit p-8 text-center md:flex-row md:text-left">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-white text-alcook-500">
                <Lock className="h-8 w-8" aria-hidden />
              </div>
              <div>
                <h2 className="text-heading-xl font-extrabold text-alcook-ink">{t.privacyTitle}</h2>
                <p className="mt-2 text-body-md text-alcook-muted">{t.privacyBody}</p>
                <Link
                  href={alcookPaths.privacy[lang]}
                  className="mt-3 inline-block text-label-lg text-alcook-600 underline underline-offset-4 hover:text-alcook-700"
                >
                  {t.privacyLink}
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Contact & legal */}
        <section className="w-full bg-alcook-bg py-14">
          <div className="container mx-auto flex max-w-4xl flex-col items-center gap-4 px-4 text-center sm:px-6">
            <AlcookDog className="w-12" />
            <AppStoreBadge alt={t.storeAlt} />
            <h2 className="text-heading-md font-bold text-alcook-ink">{t.contactTitle}</h2>
            <a href={`mailto:${ALCOOK_SUPPORT_EMAIL}`} className="text-heading-md text-alcook-600 hover:underline">
              {ALCOOK_SUPPORT_EMAIL}
            </a>
            <nav aria-label={t.name} className="mt-2 flex flex-wrap justify-center gap-x-6 gap-y-2 text-caption-lg">
              <Link href={alcookPaths.terms[lang]} className="text-alcook-600 hover:underline">
                {t.terms}
              </Link>
              <Link href={alcookPaths.privacy[lang]} className="text-alcook-600 hover:underline">
                {t.privacy}
              </Link>
              <Link
                href={t.otherLang.href}
                hrefLang={lang === "en" ? "ja" : "en"}
                lang={lang === "en" ? "ja" : "en"}
                className="text-alcook-600 hover:underline"
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
