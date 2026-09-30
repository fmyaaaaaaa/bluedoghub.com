import { M_PLUS_Rounded_1c } from "next/font/google";

// Alcoin's app font. Japanese glyphs are split by unicode-range, so nothing is preloaded.
export const alcoinRounded = M_PLUS_Rounded_1c({
  weight: ["400", "700", "800"],
  display: "swap",
  preload: false,
  variable: "--font-alcoin",
});
