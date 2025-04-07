import { Card } from "@/components/ui/card";
import { UsageCard } from "@/components/UsageCard";

const usages = [
  {
    head: "View Your Dashboard",
    description: "Notify you when you have items ready to recall.",
    imagePath: "/ebira-usage-home.webp",
  },
  {
    head: "Study Categories",
    description: "Mark your ongoing study as favorite to make it easier to find.",
    imagePath: "/ebira-usage-items.webp",
  },
  {
    head: "Recall Study",
    description:
      "Provides study materials for you to recall study item contents so you can fill in and record your answers.",
    imagePath: "/ebira-usage-recall-answer.webp",
  },
  {
    head: "Recall Study History",
    description:
      "Records your past answers so you can see your historical answers and check your progress of memorizing.",
    imagePath: "/ebira-usage-recall-confirm.webp",
  },
];

export function UsageSection() {
  return (
    <div className="space-y-4">
      <Card className="py-6 px-4 border-none max-w-3xl mx-auto">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center">
            {usages.map((card) => (
              <UsageCard key={card.head} {...card} variant="ebira" />
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
}
