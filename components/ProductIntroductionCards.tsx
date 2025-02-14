import { SquareActivity } from "lucide-react";
import { ClipboardPlus } from "lucide-react";
import { MapPin } from "lucide-react";
import { FeatureCard, FeatureCardProps } from "./FeatureCard";
import Image from "next/image";
import { cn } from "@/lib/utils";

const features: FeatureCardProps[] = [
  {
    title: "Litter Location",
    description:
      "Discover nearby litter locations through our interactive map interface. Our location-based system helps you identify areas that need attention, making cleanup efforts more efficient and targeted.",
    icon: <MapPin className="w-6 h-6" />,
  },
  {
    title: "Report Litters",
    description:
      "Easily document litter by taking photos and categorizing them with just a few taps. Each report is automatically geo-tagged, contributing to our community-driven map of areas needing cleanup.",
    icon: <ClipboardPlus className="w-6 h-6" />,
  },
  {
    title: "Activity Dashboard",
    description:
      "Track the impact of your contributions through our comprehensive dashboard. Monitor community progress, view cleanup statistics, and see the real difference you're making in your local environment.",
    icon: <SquareActivity className="w-6 h-6" />,
  },
];

type ProductIntroductionCardsProps = {
  variant: "brand" | "littera";
  className?: string;
};

export function ProductIntroductionCards({ variant, className }: ProductIntroductionCardsProps) {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8", className)}>
      <div className="flex items-center justify-center">
        <Image
          src="/product-demo.webp"
          alt="Littera"
          width={700}
          height={700}
          className="w-full h-auto max-w-[700px]"
        />
      </div>
      <div className="flex flex-col mx-auto gap-8">
        {features.map((feature) => (
          <FeatureCard
            key={feature.title}
            className="w-full md:w-[20rem] lg:w-[24rem]"
            variant={variant}
            {...feature}
          />
        ))}
      </div>
    </div>
  );
}
