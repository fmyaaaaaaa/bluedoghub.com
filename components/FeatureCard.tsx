import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export type FeatureCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
  variant?: "brand" | "littera";
};

export function FeatureCard({ title, description, icon, className, variant = "brand" }: FeatureCardProps) {
  const bgColor = variant === "brand" ? "bg-brand-10" : "bg-littera-10";
  return (
    <Card className={cn("w-full", bgColor, className)}>
      <CardHeader>
        <CardTitle>
          <div className="flex items-center gap-2">
            {icon}
            {title}
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p>{description}</p>
      </CardContent>
    </Card>
  );
}
