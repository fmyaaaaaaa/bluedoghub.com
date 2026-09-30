// Generates the Alcoin / アルコイン OGP images (1200x630) into public/.
// Usage: node scripts/generate-ogp-alcoin.mjs
// Fonts (M PLUS Rounded 1c, the app font) are fetched from Google Fonts, subset to the text used.
import { readFile, writeFile } from "node:fs/promises";
import { ImageResponse } from "next/og.js";
import { createElement as h } from "react";

const COLORS = {
  background: "#FBF6EE",
  ink: "#1C2330",
  sun: "#FCE2AE",
  blue: "#1F6FEB",
  gray: "#5B6677",
};

const TAGLINE = "記録するたび、相棒がそっと応援。";
const SUBLINE = "かんたん家計簿 ・ 共有家計簿 ・ Apple Watch";

const VARIANTS = [
  { file: "public/ogp-alcoin-en.png", wordmark: "Alcoin", wordmarkSize: 120, wordmarkTop: 180, letterSpacing: 3 },
  { file: "public/ogp-alcoin-ja.png", wordmark: "アルコイン", wordmarkSize: 96, wordmarkTop: 196, letterSpacing: 4 },
];

// The dog from app/products/alcoin/_components/AlcoinDog.tsx at rest: its tail layer (public/alcoin-dog-tail.webp)
// composited under its body (public/alcoin-dog-body.webp) on the same 6:7 canvas. Satori can't read WebP,
// so the composite is kept as a PNG (240x280) next to this script.
const DOG_SRC = `data:image/png;base64,${(
  await readFile(new URL("./assets/alcoin-dog-ogp.png", import.meta.url))
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

async function render({ file, wordmark, wordmarkSize, wordmarkTop, letterSpacing }) {
  const fonts = [
    { name: "Rounded", weight: 800, style: "normal", data: await loadFont(800, wordmark) },
    { name: "Rounded", weight: 700, style: "normal", data: await loadFont(700, TAGLINE) },
    { name: "Rounded", weight: 400, style: "normal", data: await loadFont(400, SUBLINE) },
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
    text(TAGLINE, { left: 457, top: 356, fontSize: 40, fontWeight: 700, color: COLORS.blue, lineHeight: 1.2 }),
    text(SUBLINE, { left: 458, top: 432, fontSize: 26, fontWeight: 400, color: COLORS.gray, lineHeight: 1.2 })
  );
  const image = new ImageResponse(tree, { width: 1200, height: 630, fonts });
  await writeFile(new URL(`../${file}`, import.meta.url), Buffer.from(await image.arrayBuffer()));
  console.log(`wrote ${file}`);
}

for (const variant of VARIANTS) await render(variant);
