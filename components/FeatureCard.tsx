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
  const textColor = variant === "brand" ? "text-brand-900" : "text-littera-900";
  return (
    <Card className={cn("w-full", bgColor, className)}>
      <CardHeader>
        <CardTitle>
          <div className={cn("flex items-center gap-2", textColor)}>
            {icon}
            {title}
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className={cn(textColor)}>{description}</p>
      </CardContent>
    </Card>
  );
}
