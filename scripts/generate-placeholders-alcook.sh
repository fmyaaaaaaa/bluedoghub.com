#!/usr/bin/env bash
# Generates the placeholder images of the Alcook pages into public/: tomato-tinted cards that say which picture
# belongs there, so the pages build and lay out before the app's screenshots exist. Replace each file with the
# real picture of the same name and size (the list is docs/alcook-screenshots.md); don't run this again after that.
# Usage: scripts/generate-placeholders-alcook.sh   (needs ImageMagick 7 with WebP; macOS fonts by default)
set -euo pipefail

cd "$(dirname "$0")/.."
FONT="${FONT:-/System/Library/Fonts/ヒラギノ角ゴシック W6.ttc}"
OUT=public

TOMATO="#D9482B"
TOMATO_50="#FFF1EC"
TOMATO_700="#982E18"

# card <file> <width> <height> <label>: a tinted rectangle with a border and the label in the middle.
card() {
  local file=$1 width=$2 height=$3 label=$4
  local border=$((width / 60 + 2))
  local point=$((width / 18))
  magick -size "${width}x${height}" "xc:${TOMATO_50}" \
    -fill none -stroke "$TOMATO" -strokewidth "$border" \
    -draw "rectangle $((border / 2)),$((border / 2)) $((width - border / 2 - 1)),$((height - border / 2 - 1))" \
    -stroke none -fill "$TOMATO_700" -font "$FONT" -pointsize "$point" -gravity center \
    -annotate +0+0 "$label" \
    -quality 80 "$OUT/$file"
  echo "wrote $OUT/$file"
}

# phone <name> <en label> <ja label>: a 600x1304 iPhone screenshot, in both languages.
phone() {
  card "alcook-$1-en.webp" 600 1304 "PLACEHOLDER\n\n$2\n\nen · 600×1304"
  card "alcook-$1-ja.webp" 600 1304 "PLACEHOLDER\n\n$3\n\nja · 600×1304"
}

# watch <name> <en label> <ja label>: a 416x496 Apple Watch screenshot, in both languages.
watch() {
  card "alcook-$1-en.webp" 416 496 "PLACEHOLDER\n\n$2\n\nen · 416×496"
  card "alcook-$1-ja.webp" 416 496 "PLACEHOLDER\n\n$3\n\nja · 416×496"
}

phone home "Home\nTonight's dinner" "ホーム\n今日の晩ご飯"
phone book "Recipe book" "レシピ本"
phone recipe "Recipe\nwith dish photo" "レシピの詳細\n料理の写真つき"
phone made "Made it!\ncelebration" "作った！\nのお祝い"
phone share-week "Share the menu\nStory 9:16" "献立を共有\nストーリー 9:16"
phone share-extension "Share menu\nfrom Safari" "共有メニュー\nSafari から"
phone week "This week" "今週の献立"
phone week-sheet "How the day\nis decided" "その日の\n決め方"
phone grocery "Groceries" "材料\n買い物リスト"
phone cooking "Cooking mode" "料理中"
phone family-switch "Switch\nrecipe book" "レシピ本の\n切り替え"
phone family-invite "Invite family" "家族を招待"
phone widgets-home "Home Screen\nwidgets" "ホーム画面の\nウィジェット"

watch watch-complication "Watch face" "文字盤"
watch watch-today "Tonight's\ndinner" "今日の\n晩ご飯"
watch watch-grocery "Shopping\nlist" "買い物\nリスト"
watch watch-cooking "Cooking\nchecklist" "料理中の\nチェック"

card alcook-widget-lock-rect-en.webp 516 228 "PLACEHOLDER\nLock Screen: tomorrow"
card alcook-widget-lock-rect-ja.webp 516 228 "PLACEHOLDER\nロック画面：明日の晩ご飯"
card alcook-widget-lock-circle-en.webp 228 228 "PLACEHOLDER\nto buy"
card alcook-widget-lock-circle-ja.webp 228 228 "PLACEHOLDER\n買うもの"

# ogp <file> <wordmark> <tagline>: the 1200x630 OGP image, tomato with the name in white.
ogp() {
  magick -size 1200x630 "xc:${TOMATO}" \
    -fill white -font "$FONT" -gravity center \
    -pointsize 120 -annotate +0-70 "$2" \
    -pointsize 40 -annotate +0+70 "$3" \
    -fill "$TOMATO_50" -pointsize 24 -gravity south -annotate +0+40 "PLACEHOLDER OGP" \
    -depth 8 "$OUT/$1"
  echo "wrote $OUT/$1"
}

ogp ogp-alcook-en.png "Alcook" "Your saved recipes, this week's dinners."
ogp ogp-alcook-ja.png "アルクック" "保存したレシピで、今週の晩ご飯。"
