// Generates the Alcoin / アルコイン OGP images (1200x630) into public/.
// Usage: node scripts/generate-ogp-alcoin.mjs
// Fonts (M PLUS Rounded 1c, the app font) are fetched from Google Fonts, subset to the text used.
import { writeFile } from "node:fs/promises";
import { ImageResponse } from "next/og.js";
import { createElement as h } from "react";

const COLORS = {
  background: "#FBF6EE",
  ink: "#1C2330",
  fur: "#FAF7F1",
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

// Same drawing as app/products/coinly/_components/CoinlyDog.tsx (viewBox -10 -10 120 130).
const DOG_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 -10 120 130">
<g fill="${COLORS.fur}" stroke="${COLORS.ink}" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
<path transform="translate(36 86) scale(.86) translate(-36 -86)" d="M37 90 Q17 89 13 72 Q11 58 19 53 Q26 51 26 58 Q22 64 24 71 Q27 80 37 82 Z"/>
<path d="M31 104 Q27 76 38 62 L62 62 Q73 76 69 104 Z"/>
<path d="M50 88 L50 101" fill="none" stroke-width="2"/>
<path d="M31 103 Q30 106 34 106 L66 106 Q70 106 69 103 Z" stroke="none"/>
<path d="M31 103 Q30 106 34 106 Q38 107 41 105 Q45.5 108 50 104.5 Q54.5 108 59 105 Q62 107 66 106 Q70 106 69 103" fill="none"/>
<path d="M28 39 C27.5 47 30.5 54 35.5 58.5 C39.5 62 44.5 63.5 50 63.5 C55.5 63.5 60.5 62 64.5 58.5 C69.5 54 72.5 47 72 39 C71 29 62 23 50 23 C38 23 29 29 28 39 Z"/>
<path transform="translate(0 3.5) translate(35 22) scale(.82) translate(-35 -22)" d="M37 22 Q24 19.5 16 28 Q10 35 9.5 42.5 Q9.5 48 15 49.5 Q20 52 25 53 Q30 53.5 31 48 Q31 40 32.5 31 Q33.5 25 37 22 Z"/>
<path transform="translate(0 3.5) translate(65 22) scale(.82) translate(-65 -22)" d="M63 22 Q76 19.5 84 28 Q90 35 90.5 42.5 Q90.5 48 85 49.5 Q80 52 75 53 Q70 53.5 69 48 Q69 40 67.5 31 Q66.5 25 63 22 Z"/>
</g>
<g fill="${COLORS.ink}"><circle cx="39.5" cy="44" r="3"/><circle cx="60.5" cy="44" r="3"/><ellipse cx="50" cy="50" rx="3.8" ry="2.8"/></g>
<path d="M45 55 Q47.5 58 50 55 Q52.5 58 55 55" fill="none" stroke="${COLORS.ink}" stroke-width="2" stroke-linecap="round"/>
</svg>`;
const DOG_SRC = `data:image/svg+xml;base64,${Buffer.from(DOG_SVG).toString("base64")}`;
const DOG_SCALE = 2.47; // px per viewBox unit

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
      width: 120 * DOG_SCALE,
      height: 130 * DOG_SCALE,
      style: { position: "absolute", left: 103.5, top: 154.5 },
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
