import type { Lang } from "@/lib/i18n";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "./ui/card";

const content = {
  en: { greeting: "Hello, I'm Fumiya", role: "Software Engineer" },
  ja: { greeting: "はじめまして、Fumiya です", role: "ソフトウェアエンジニア" },
} satisfies Record<Lang, Record<string, string>>;

export default function ProfileCard({ lang }: { lang: Lang }) {
  const t = content[lang];
  return (
    <Card className="w-full max-w-lg bg-white py-4">
      <CardContent className="flex flex-col items-center gap-2 pb-2">
        <Image
          src="/logo-profile.svg"
          alt="BlueDog Tech Illustration"
          width={250}
          height={250}
          className="rounded-full bg-white shadow-[0_4px_20px_rgba(0,0,0,0.1)] p-4"
        />
        <h3 className="text-heading-lg text-black-900">{t.greeting}</h3>
        <p className="text-body-sm text-black-600">{t.role}</p>
        <div className="w-full flex justify-center items-center gap-4">
          <Link href="https://www.linkedin.com/in/fumiya-finn/" target="_blank" rel="noopener noreferrer">
            <Image
              src="/logo-linkedin.png"
              alt="LinkedIn"
              width={25}
              height={25}
              className="hover:opacity-80 transition-opacity"
            />
          </Link>
          <Link href="https://github.com/fmyaaaaaaa" target="_blank" rel="noopener noreferrer">
            <Image
              src="/logo-github.svg"
              alt="GitHub"
              width={25}
              height={25}
              className="hover:opacity-80 transition-opacity"
            />
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
