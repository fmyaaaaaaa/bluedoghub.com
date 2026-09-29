import { cn } from "@/lib/utils";

type CoinlyDogProps = {
  className?: string;
  title?: string;
};

// The Coinly Maltese (DogArt in the app: fur #FAF7F1, ink #1C2330, stroke 2.4, viewBox 0 0 100 110).
export function CoinlyDog({ className, title }: CoinlyDogProps) {
  return (
    <svg
      viewBox="-10 -10 120 130"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("overflow-visible", className)}
      role={title ? "img" : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
    >
      <g fill="#FAF7F1" stroke="#1C2330" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        <g className="motion-safe:animate-coinly-wag" style={{ transformOrigin: "34px 90px" }}>
          <path
            transform="translate(36 86) scale(.86) translate(-36 -86)"
            d="M37 90 Q17 89 13 72 Q11 58 19 53 Q26 51 26 58 Q22 64 24 71 Q27 80 37 82 Z"
          />
        </g>
        <path d="M31 104 Q27 76 38 62 L62 62 Q73 76 69 104 Z" />
        <path d="M50 88 L50 101" fill="none" strokeWidth="2" />
        <path d="M31 103 Q30 106 34 106 L66 106 Q70 106 69 103 Z" stroke="none" />
        <path
          d="M31 103 Q30 106 34 106 Q38 107 41 105 Q45.5 108 50 104.5 Q54.5 108 59 105 Q62 107 66 106 Q70 106 69 103"
          fill="none"
        />
        <path d="M28 39 C27.5 47 30.5 54 35.5 58.5 C39.5 62 44.5 63.5 50 63.5 C55.5 63.5 60.5 62 64.5 58.5 C69.5 54 72.5 47 72 39 C71 29 62 23 50 23 C38 23 29 29 28 39 Z" />
        <path
          transform="translate(0 3.5) translate(35 22) scale(.82) translate(-35 -22)"
          d="M37 22 Q24 19.5 16 28 Q10 35 9.5 42.5 Q9.5 48 15 49.5 Q20 52 25 53 Q30 53.5 31 48 Q31 40 32.5 31 Q33.5 25 37 22 Z"
        />
        <path
          transform="translate(0 3.5) translate(65 22) scale(.82) translate(-65 -22)"
          d="M63 22 Q76 19.5 84 28 Q90 35 90.5 42.5 Q90.5 48 85 49.5 Q80 52 75 53 Q70 53.5 69 48 Q69 40 67.5 31 Q66.5 25 63 22 Z"
        />
      </g>
      <g fill="#1C2330">
        <circle cx="39.5" cy="44" r="3" />
        <circle cx="60.5" cy="44" r="3" />
        <ellipse cx="50" cy="50" rx="3.8" ry="2.8" />
      </g>
      <path
        d="M45 55 Q47.5 58 50 55 Q52.5 58 55 55"
        fill="none"
        stroke="#1C2330"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
