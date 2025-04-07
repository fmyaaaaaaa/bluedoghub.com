import Image from "next/image";
import { Card, CardContent, CardHeader } from "./ui/card";
import { cn } from "@/lib/utils";

export type UsageCardProps = {
  head: string;
  title?: string;
  description: string;
  imagePath: string;
  variant: "littera" | "ebira";
};

export function UsageCard({ head, title, description, imagePath, variant }: UsageCardProps) {
  return (
    <Card
      className={cn(
        "w-full md:w-[20rem]",
        variant === "littera" && "bg-littera-10",
        variant === "ebira" && "bg-ebira-10"
      )}
    >
      <CardHeader>
        <p
          className={cn(
            "text-heading-md",
            variant === "littera" && "text-littera-800",
            variant === "ebira" && "text-ebira-800"
          )}
        >
          <strong>{head}</strong>
        </p>
      </CardHeader>
      <CardContent>
        <div className="flex flex-row gap-2">
          <Image src={imagePath} alt={variant} width={100} height={100} />
          <div className="px-2 space-y-2">
            {title && (
              <p
                className={cn(
                  "text-heading-xs",
                  variant === "littera" && "text-littera-800",
                  variant === "ebira" && "text-ebira-800"
                )}
              >
                {title}
              </p>
            )}
            <p
              className={cn(
                "text-body-sm",
                variant === "littera" && "text-littera-800",
                variant === "ebira" && "text-ebira-800"
              )}
            >
              {description}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
