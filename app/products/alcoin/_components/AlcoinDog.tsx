import { cn } from "@/lib/utils";

type AlcoinDogProps = {
  className?: string;
  title?: string;
};

// The Alcoin Maltese (design W8): a raster body with the tail as a separate layer behind it,
// both on the same 6:7 canvas. The tail wags around its root (83% 77.857% of the canvas).
// Size it with a width (and optionally a matching height); the box keeps a 6:7 aspect ratio.
export function AlcoinDog({ className, title }: AlcoinDogProps) {
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
    </span>
  );
}
