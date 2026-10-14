import { M_PLUS_Rounded_1c } from "next/font/google";

// Alcook's app font (the same as Alcoin's). Japanese glyphs are split by unicode-range, so nothing is preloaded.
export const alcookRounded = M_PLUS_Rounded_1c({
  weight: ["400", "700", "800"],
  display: "swap",
  preload: false,
  variable: "--font-alcook",
});
