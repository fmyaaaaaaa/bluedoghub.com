import { Card, CardContent, CardHeader } from "./ui/card";
import Image from "next/image";

export type UsageCardProps = {
  head: string;
  title: string;
  description: string;
  imagePath: string;
};

export function UsageCard({ head, title, description, imagePath }: UsageCardProps) {
  return (
    <Card className="w-full md:w-[20rem] bg-littera-10">
      <CardHeader>
        <p className="text-heading-md text-littera-800">
          <strong>{head}</strong>
        </p>
      </CardHeader>
      <CardContent>
        <div className="flex flex-row gap-2">
          <Image src={imagePath} alt="Littera" width={100} height={100} />
          <div className="px-2 space-y-2">
            <p className="text-heading-xs text-littera-800">{title}</p>
            <p className="text-body-sm text-littera-800">{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
