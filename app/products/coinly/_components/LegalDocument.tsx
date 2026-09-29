import Link from "next/link";
import type { ReactNode } from "react";
import { COINLY_SUPPORT_EMAIL, type CoinlyLang } from "./constants";

type LegalDocumentProps = {
  lang: CoinlyLang;
  title: string;
  updated: string;
  note?: ReactNode;
  otherLang: { href: string; label: string };
  intro?: ReactNode;
  children: ReactNode;
};

// Shared frame of the Coinly legal pages (Terms of Use, Privacy Policy).
export function LegalDocument({ lang, title, updated, note, otherLang, intro, children }: LegalDocumentProps) {
  return (
    <div lang={lang} className="mx-auto min-h-screen flex flex-col">
      <main className="flex-grow">
        {/* Header section */}
        <section className="w-full py-12 px-4 md:py-20 bg-blue-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-24 max-w-4xl">
            <div className="flex flex-col items-center gap-4 text-center">
              <h1 className="text-display-md md:text-display-lg text-blue-900">{title}</h1>
              <p className="text-body-md md:text-body-lg text-black-600">{updated}</p>
              {note && <p className="text-body-sm text-black-600 max-w-2xl">{note}</p>}
              <div className="mt-4 flex flex-wrap justify-center gap-x-6 gap-y-2">
                <Link
                  href={otherLang.href}
                  hrefLang={lang === "en" ? "ja" : "en"}
                  lang={lang === "en" ? "ja" : "en"}
                  className="text-blue-600 hover:text-blue-700 underline"
                >
                  {otherLang.label}
                </Link>
                <Link
                  href={lang === "en" ? "/products/coinly" : "/products/coinly/ja"}
                  className="text-blue-600 hover:text-blue-700 underline"
                >
                  Coinly
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="w-full py-12 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-24 max-w-4xl">
            <div className="space-y-10">
              {intro}
              {children}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export function Callout({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
      <p className="text-body-lg text-blue-900 font-semibold mb-2">{title}</p>
      <div className="space-y-2 text-body-md text-black-600">{children}</div>
    </div>
  );
}

export function LegalSection({ id, title, children }: { id?: string; title: string; children: ReactNode }) {
  return (
    <section id={id} aria-labelledby={id ? `${id}-title` : undefined} className="scroll-mt-6">
      <h2 id={id ? `${id}-title` : undefined} className="text-heading-lg text-blue-800 mb-4">
        {title}
      </h2>
      <div className="space-y-3 text-body-md text-black-600">{children}</div>
    </section>
  );
}

export function LegalSubheading({ children }: { children: ReactNode }) {
  return <h3 className="text-heading-sm text-blue-900 pt-2">{children}</h3>;
}

export function BulletList({ children }: { children: ReactNode }) {
  return <ul className="list-disc pl-6 space-y-2">{children}</ul>;
}

export function NumberedList({ children }: { children: ReactNode }) {
  return <ol className="list-decimal pl-6 space-y-2">{children}</ol>;
}

export function ContactBox({
  emailLabel,
  appLabel,
  appName,
}: { emailLabel: string; appLabel: string; appName: string }) {
  return (
    <div className="bg-gray-50 p-4 rounded-lg mt-3">
      <p className="font-medium text-black-700">{emailLabel}</p>
      <a href={`mailto:${COINLY_SUPPORT_EMAIL}`} className="text-blue-600 font-medium hover:underline">
        {COINLY_SUPPORT_EMAIL}
      </a>
      <p className="font-medium text-black-700 mt-3">{appLabel}</p>
      <p className="text-black-600">{appName}</p>
    </div>
  );
}
