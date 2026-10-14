import { cn } from "@/lib/utils";

type AlcookDogProps = {
  className?: string;
  title?: string;
};

// The apron, on the dog's 600x700 canvas. The shares come from the app's `DogApron` (handoff §7):
// strap 38.5% / 48.5% / 23% x 7.5%, bib 34% / 54.5% / 32% x 28.5%, pocket 26% / 46% / 48% x 26% of the bib,
// outline 1.1% of the dog's width. Its colors are the art's own (tomato 500/600, ink, cream pocket).
const APRON = {
  ink: "#22232B",
  tomato: "#D9482B",
  strap: "#BA3A1F",
  pocket: "#FFF6EF",
  line: 6.6,
} as const;

// A rectangle whose top corners round by (tx, ty) and bottom corners by (bx, by), like CSS
// `border-radius: tx tx bx bx / ty ty by by`.
function roundedPath(x: number, y: number, w: number, h: number, tx: number, ty: number, bx: number, by: number) {
  return [
    `M${x + tx},${y}`,
    `H${x + w - tx}`,
    `A${tx},${ty} 0 0 1 ${x + w},${y + ty}`,
    `V${y + h - by}`,
    `A${bx},${by} 0 0 1 ${x + w - bx},${y + h}`,
    `H${x + bx}`,
    `A${bx},${by} 0 0 1 ${x},${y + h - by}`,
    `V${y + ty}`,
    `A${tx},${ty} 0 0 1 ${x + tx},${y}`,
    "Z",
  ].join(" ");
}

const BIB = { x: 204, y: 381.5, w: 192, h: 199.5 };
const POCKET = {
  x: BIB.x + 0.26 * BIB.w,
  y: BIB.y + 0.46 * BIB.h,
  w: 0.48 * BIB.w,
  h: 0.26 * BIB.h,
};
const STRAP = { x: 231, y: 339.5, w: 138, h: 52.5, stroke: APRON.line * 1.3 };

const bibPath = roundedPath(
  BIB.x + APRON.line / 2,
  BIB.y + APRON.line / 2,
  BIB.w - APRON.line,
  BIB.h - APRON.line,
  0.22 * BIB.w,
  0.16 * BIB.h,
  0.34 * BIB.w,
  0.26 * BIB.h
);
const pocketPath = roundedPath(
  POCKET.x,
  POCKET.y,
  POCKET.w,
  POCKET.h,
  0.14 * POCKET.w,
  0.2 * POCKET.h,
  0.4 * POCKET.w,
  0.5 * POCKET.h
);
// The neck loop: down both sides and round the bottom, open at the top.
const strapInset = STRAP.stroke / 2;
const strapPath = (() => {
  const left = STRAP.x + strapInset;
  const right = STRAP.x + STRAP.w - strapInset;
  const top = STRAP.y + strapInset;
  const rx = (right - left) / 2;
  const ry = (STRAP.h - STRAP.stroke) / 2;
  return `M${left},${top} V${top + ry} A${rx},${ry} 0 0 0 ${right},${top + ry} V${top}`;
})();

// The Alcook dog: the same Maltese as Alcoin's (the same body and tail pictures, so the files are shared) wearing
// the app's provisional apron. The tail wags around its root (83% 77.857% of the canvas).
// Size it with a width; the box keeps a 6:7 aspect ratio.
export function AlcookDog({ className, title }: AlcookDogProps) {
  return (
    <span
      className={cn("relative inline-block aspect-[6/7] shrink-0", className)}
      role={title ? "img" : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
    >
      <img
        src="/alcoin-dog-tail.webp"
        alt=""
        width={240}
        height={280}
        decoding="async"
        draggable={false}
        className="absolute inset-0 h-full w-full select-none motion-safe:animate-alcoin-wag"
        style={{ transformOrigin: "83% 77.857%" }}
      />
      <img
        src="/alcoin-dog-body.webp"
        alt=""
        width={240}
        height={280}
        decoding="async"
        draggable={false}
        className="absolute inset-0 h-full w-full select-none"
      />
      <svg viewBox="0 0 600 700" className="absolute inset-0 h-full w-full" aria-hidden="true" focusable="false">
        <path d={strapPath} fill="none" stroke={APRON.strap} strokeWidth={STRAP.stroke} strokeLinecap="round" />
        <path d={bibPath} fill={APRON.tomato} stroke={APRON.ink} strokeWidth={APRON.line} />
        <path d={pocketPath} fill={APRON.pocket} stroke={APRON.ink} strokeWidth={APRON.line * 0.8} />
      </svg>
    </span>
  );
}
