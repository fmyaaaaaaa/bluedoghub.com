// Generates the Alcook / アルクック OGP images (1200x630) into public/.
// Usage: node scripts/generate-ogp-alcook.mjs
// Fonts (M PLUS Rounded 1c, the app font) are fetched from Google Fonts, subset to the text used.
import { readFile, writeFile } from "node:fs/promises";
import { ImageResponse } from "next/og.js";
import { createElement as h } from "react";

const COLORS = {
  background: "#FBF6EE",
  ink: "#1B1612",
  sun: "#FFF3D1",
  tomato: "#D9482B",
  gray: "#6F6457",
};

const VARIANTS = [
  {
    file: "public/ogp-alcook-en.png",
    wordmark: "Alcook",
    wordmarkSize: 120,
    wordmarkTop: 180,
    letterSpacing: 3,
    tagline: "Your saved recipes, this week's dinners.",
    taglineSize: 33,
    subline: "Recipes · Weekly dinners · Shopping list",
  },
  {
    file: "public/ogp-alcook-ja.png",
    wordmark: "アルクック",
    wordmarkSize: 96,
    wordmarkTop: 196,
    letterSpacing: 4,
    tagline: "保存したレシピで、今週の晩ご飯。",
    taglineSize: 40,
    subline: "レシピ本 ・ 今週の献立 ・ 買い物リスト",
  },
];

// The dog in its apron, drawn by the app itself (Alcook's DEBUG widget gallery, `make marketing-widgets`, writes
// it as dog.png) and kept as a PNG (240x280) next to this script, since satori can't read WebP.
const DOG_SRC = `data:image/png;base64,${(
  await readFile(new URL("./assets/alcook-dog-ogp.png", import.meta.url))
).toString("base64")}`;
const DOG = { left: 149, top: 212, width: 206, height: 240 };

async function loadFont(weight, text) {
  const cssUrl = `https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@${weight}&text=${encodeURIComponent(
    text
  )}`;
  // An old user agent makes Google Fonts serve TrueType, which satori can read.
  const css = await (await fetch(cssUrl, { headers: { "User-Agent": "Mozilla/4.0" } })).text();
  const url = css.match(/src: url\((.+?)\)/)?.[1];
  if (!url) throw new Error(`No font URL for weight ${weight}`);
  return (await fetch(url)).arrayBuffer();
}

function text(content, style) {
  return h(
    "div",
    { style: { position: "absolute", left: 460, display: "flex", whiteSpace: "nowrap", ...style } },
    content
  );
}

async function render({ file, wordmark, wordmarkSize, wordmarkTop, letterSpacing, tagline, taglineSize, subline }) {
  const fonts = [
    { name: "Rounded", weight: 800, style: "normal", data: await loadFont(800, wordmark) },
    { name: "Rounded", weight: 700, style: "normal", data: await loadFont(700, tagline) },
    { name: "Rounded", weight: 400, style: "normal", data: await loadFont(400, subline) },
  ];
  const tree = h(
    "div",
    {
      style: {
        position: "relative",
        display: "flex",
        width: 1200,
        height: 630,
        background: COLORS.background,
        fontFamily: "Rounded",
      },
    },
    h("div", {
      style: {
        position: "absolute",
        left: 970,
        top: 70,
        width: 140,
        height: 140,
        borderRadius: 70,
        background: COLORS.sun,
      },
    }),
    h("img", {
      src: DOG_SRC,
      width: DOG.width,
      height: DOG.height,
      style: { position: "absolute", left: DOG.left, top: DOG.top },
    }),
    text(wordmark, {
      left: 457,
      top: wordmarkTop,
      fontSize: wordmarkSize,
      fontWeight: 800,
      color: COLORS.ink,
      letterSpacing,
      lineHeight: 1.2,
    }),
    text(tagline, {
      left: 457,
      top: 356,
      fontSize: taglineSize,
      fontWeight: 700,
      color: COLORS.tomato,
      lineHeight: 1.2,
    }),
    text(subline, { left: 458, top: 432, fontSize: 26, fontWeight: 400, color: COLORS.gray, lineHeight: 1.2 })
  );
  const image = new ImageResponse(tree, { width: 1200, height: 630, fonts });
  await writeFile(new URL(`../${file}`, import.meta.url), Buffer.from(await image.arrayBuffer()));
  console.log(`wrote ${file}`);
}

for (const variant of VARIANTS) await render(variant);
