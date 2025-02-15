import { Cloud, Database, MonitorSmartphone, Server } from "lucide-react";
import { Badge } from "./ui/badge";
import { Card, CardTitle } from "./ui/card";
import { Separator } from "./ui/separator";

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

export default function WhatIOfferCard() {
  return (
    <Card className="bg-white py-10 px-8 md:py-8 md:px-4">
      <CardTitle>What I Offer</CardTitle>
      <div className="py-3 px-1 md:px-4 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center gap-2">
            <MonitorSmartphone className="w-6 h-6 text-brand-500" />
            <span className="text-body-sm md:text-body-sm text-black-900">Web & Mobile App Development</span>
          </div>
          <div className="flex items-center gap-2">
            <Cloud className="w-6 h-6 text-brand-500" />
            <span className="text-body-sm md:text-body-sm text-black-900">Cloud Infrastructure Building</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center gap-2">
            <Database className="w-6 h-6 text-brand-500" />
            <span className="text-body-sm md:text-body-sm text-black-900">Database Management</span>
          </div>
          <div className="flex items-center gap-2">
            <Server className="w-6 h-6 text-brand-500" />
            <span className="text-body-sm md:text-body-sm text-black-900">Backend Development</span>
          </div>
        </div>
      </div>

      <Separator className="my-6" />

      <CardTitle>Tech Stacks</CardTitle>
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
