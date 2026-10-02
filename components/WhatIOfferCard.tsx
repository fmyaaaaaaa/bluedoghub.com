import type { Lang } from "@/lib/i18n";
import { Cloud, Database, MonitorSmartphone, Server } from "lucide-react";
import { Badge } from "./ui/badge";
import { Card, CardTitle } from "./ui/card";
import { Separator } from "./ui/separator";

const content = {
  en: { offer: "What I Offer", stacks: "Tech Stacks" },
  ja: { offer: "できること", stacks: "技術スタック" },
} satisfies Record<Lang, Record<string, string>>;

// The four kinds of work, each with its label in both languages.
const offers = [
  {
    icon: MonitorSmartphone,
    label: { en: "Web & Mobile App Development", ja: "Web・モバイルアプリの開発" },
  },
  {
    icon: Cloud,
    label: { en: "Cloud Infrastructure Building", ja: "クラウド基盤の構築" },
  },
  {
    icon: Database,
    label: { en: "Database Management", ja: "データベースの設計・運用" },
  },
  {
    icon: Server,
    label: { en: "Backend Development", ja: "バックエンドの開発" },
  },
] as const;

type TechStack = {
  name: string;
  category: "frontend" | "backend" | "mobile" | "cloud" | "other";
};

const techStacks: TechStack[] = [
  {
    name: "React.js",
    category: "frontend",
  },
  {
    name: "Next.js",
    category: "frontend",
  },
  {
    name: "Tailwind CSS",
    category: "frontend",
  },
  {
    name: "Vue.js",
    category: "frontend",
  },
  {
    name: "Node.js",
    category: "backend",
  },
  {
    name: "Express.js",
    category: "backend",
  },
  {
    name: "TypeScript",
    category: "backend",
  },
  {
    name: "JavaScript",
    category: "backend",
  },
  {
    name: "Kotlin",
    category: "mobile",
  },
  {
    name: "Jetpack Compose",
    category: "mobile",
  },
  {
    name: "Kotlin Multiplatform",
    category: "mobile",
  },
  {
    name: "PostgreSQL",
    category: "cloud",
  },
  {
    name: "AWS",
    category: "cloud",
  },
];

export default function WhatIOfferCard({ lang }: { lang: Lang }) {
  const t = content[lang];
  return (
    <Card className="bg-white py-10 px-8 md:py-8 md:px-4">
      <CardTitle className="text-brand-900">{t.offer}</CardTitle>
      <div className="py-3 px-1 md:px-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        {offers.map(({ icon: Icon, label }) => (
          <div key={label.en} className="flex items-center gap-2">
            <Icon className="w-6 h-6 shrink-0 text-brand-500" />
            <span className="text-body-sm md:text-body-sm text-black-900">{label[lang]}</span>
          </div>
        ))}
      </div>

      <Separator className="my-6" />

      <CardTitle className="text-brand-900">{t.stacks}</CardTitle>
      <div className="flex flex-wrap py-3 px-0 md:px-4 gap-2">
        {techStacks.map((tech) => (
          <Badge
            key={tech.name}
            variant="outline"
            className="text-sm px-2 py-1 bg-black-50 text-black-900 hover:bg-black-100"
          >
            {tech.name}
          </Badge>
        ))}
      </div>
    </Card>
  );
}
