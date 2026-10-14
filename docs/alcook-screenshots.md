# Alcook: screenshots and OGP images to make

The Alcook pages (`/products/alcook`, `/products/alcook/ja`) are built with placeholder images: tomato-tinted
cards that say which picture belongs there, made by `scripts/generate-placeholders-alcook.sh`. Replace each file in
`public/` with the real picture **under the same name and at the same size**; no code changes are needed. Every image
exists in English (`-en`) and Japanese (`-ja`): take each from the app in that language, with sample data in that
language (the Japanese copy uses 肉じゃが, 鶏の甘酢, ¥; the English copy English dish names). Don't run the
placeholder script again once real pictures are in.

Formats follow Alcoin's images: WebP for screenshots (quality around 80), PNG for OGP.

## iPhone screenshots — 600 × 1304 px, WebP

Light mode, iPhone status bar clean (full battery, 9:41), cropped to the screen (the page draws the white frame).

| File (`public/…-en.webp` / `-ja.webp`) | Section on the page | What it should show |
|---|---|---|
| `alcook-home` | Hero | ホーム「今日の晩ご飯」: today's card with a dish photo, the dog in its apron on the photo's corner, made count, the mode badge, 「料理をはじめる」「作った！」; 「今週の残り」 below |
| `alcook-recipe` | A closer look (1/3) | A recipe with a dish photo header, name, made count (e.g. 13回), ingredients card 「材料（2〜3人分）」, 「わが家のメモ」, the fixed bar 「料理をはじめる」「作った！」 |
| `alcook-made` | A closer look (2/3) | The 作った！ celebration: the dog (150pt) catching the stamp, 「13回目」 yolk badge, 「〇〇 記録しました」, 「写真を残す」「とじる」 |
| `alcook-share-week` | A closer look (3/3) | 献立を共有: the story (9:16) preview of the week with dish photos on, the format switch and 「共有」 |
| `alcook-book` | Save recipes | レシピ本: the 2-column grid with dish photos (and a few striped no-photo tiles), search, chips 「すべて／新しい料理／よく作る」 with counts |
| `alcook-share-extension` | Save recipes | The share menu over Safari: 「「作りたい」に保存」, the source, the dish name taken from the page title, a screenshot tile, a note |
| `alcook-week` | This week | 今週: Monday–Sunday rows with photos, mode badges (おまかせ・自分で選ぶ・新しい料理・作らない), a 「毎週」 mark, ↻ on random/new days; 「リストから選ぶ」「おまかせで入れる」 on top |
| `alcook-week-sheet` | This week | The day sheet: the four modes as cards, 「毎週〇曜日はこの決め方」 switch, 「この日に入れる」 |
| `alcook-grocery` | Shopping list & cooking | 材料: the list with added-up amounts (e.g. 玉ねぎ 3と1/2個), the dish each is for, 「買った・家にある n」 folded below |
| `alcook-cooking` | Shopping list & cooking | 料理中: screenshot pager (「1 / 3」), the ingredient checklist with some ticked (「3 / 5」), notes, the 「画面はついたまま」 badge, 「作った！」 |
| `alcook-family-switch` | Family recipe book | The book switch sheet: 自分のレシピ本 (ひとりで使う・無料) and わが家のレシピ本 (n人で共有), rows 「家族を招待する」「家族のレシピ本をつくる」「招待コードで参加する」 |
| `alcook-family-invite` | Family recipe book | The invite sheet: the invite code (shown like K9-4F2P), 「招待リンクを共有」, valid-until date |
| `alcook-widgets-home` | Widgets | A Home Screen with the small (今日の晩ご飯) and medium (今週の献立, with 引き直す) widgets |

## Lock Screen widgets — WebP, transparent or on a dark background

The page shows them on a dark tomato-to-soy gradient, so render them as they appear on the Lock Screen (white).

| File | Size | What it should show |
|---|---|---|
| `alcook-widget-lock-rect-en/ja.webp` | 516 × 228 | The rectangular widget 「明日の晩ご飯」: tomorrow's and the next day's dish |
| `alcook-widget-lock-circle-en/ja.webp` | 228 × 228 | The circular widget 「買うもの」: the number left to buy (the page's alt text says 5) |

## Apple Watch — 416 × 496 px, WebP

The screen only (the page draws the watch case). Same size as Alcoin's watch images.

| File | Label on the page | What it should show |
|---|---|---|
| `alcook-watch-complication` | 文字盤 / Watch face | A watch face with the Alcook complication showing tonight's dish |
| `alcook-watch-today` | 今日の晩ご飯 / Tonight's dinner | The watch app's first screen: tonight's dinner |
| `alcook-watch-grocery` | 買い物リスト / Shopping list | The shopping list with a couple of items checked |
| `alcook-watch-cooking` | 料理中のチェック / Cooking checklist | Tonight's ingredients as a checklist, some ticked |

## OGP images — 1200 × 630 px, PNG

| File | Used by | What it should show |
|---|---|---|
| `public/ogp-alcook-en.png` | `/products/alcook` | Like `ogp-alcoin-en.png` (`scripts/generate-ogp-alcoin.mjs`): biscuit background, the dog in its apron, the wordmark "Alcook", the tagline "Your saved recipes, this week's dinners." in tomato, a gray subline (e.g. "Recipes · Weekly dinners · Shopping list") |
| `public/ogp-alcook-ja.png` | `/products/alcook/ja` | The same in Japanese: 「アルクック」, 「保存したレシピで、今週の晩ご飯。」, subline (例: 「レシピ本 ・ 今週の献立 ・ 買い物リスト」) |

A copy of the Alcoin OGP script with Alcook's colors (`#FBF6EE` background, `#D9482B` tagline) and a composite of
the dog with its apron (the apron as drawn in `app/products/alcook/_components/AlcookDog.tsx`) is the quickest way
to the real ones.

## Not images, but still to fill in at release

- `ALCOOK_APP_STORE_URL` in `app/products/alcook/_components/constants.ts`: set it to
  `https://apps.apple.com/app/id…` and the App Store badge replaces the "coming soon" note.
- The App Store name of the app, if it isn't just "Alcook" / 「アルクック」: the legal pages' contact box shows it.
