import { UsageCard } from "@/components/UsageCard";
import { Card } from "@/components/ui/card";

const howToReportCard = [
  {
    head: "Step 1",
    title: "Tap a report button",
    description:
      "When you find litter on the streets, tap the report button to report it from the right bottom of the screen.",
    imagePath: "/littera-how-to-report-step1.webp",
  },
  {
    head: "Step 2",
    title: "Take a photo",
    description: "Nothing special. Just find litter on the streets and take a photo of it.",
    imagePath: "/littera-how-to-report-step2.webp",
  },
  {
    head: "Step 3",
    title: "Categorize and Slide",
    description: "Categorize the litter just by a few taps and slide the button to report the litter. It's that easy.",
    imagePath: "/littera-how-to-report-step3.webp",
  },
];

const howToCollectCard = [
  {
    head: "Step 1",
    title: "Check a map",
    description:
      "Check a map to see the litter on the streets around you. Time range and Distance range are adjustable from the top.",
    imagePath: "/littera-how-to-collect-step1.webp",
  },
  {
    head: "Step 2",
    title: "Tap the marker",
    description:
      "Tap the marker to see the detail of the litter and the collect button is available if you are within 500m of the report.",
    imagePath: "/littera-how-to-collect-step2.webp",
  },
  {
    head: "Step 3",
    title: "Gonna be gray",
    description: "After you collect the litter, the marker gonna be gray and you will be a colector of the report.",
    imagePath: "/littera-how-to-collect-step3.webp",
  },
];

const otherFeaturesCard = [
  {
    head: "Your Activity",
    title: "Check your activity",
    description:
      "You are able to check your activity history and the number of reports you have reported and collected.",
    imagePath: "/littera-dashboard-1.webp",
  },
  {
    head: "Litter Report Statistics",
    title: "Statistics of litter categories",
    description:
      "Litter categories are categorised into 4 categories and provide a pie chart of the number of reports for each category.",
    imagePath: "/littera-dashboard-2.webp",
  },
  {
    head: "Activity Ranking",
    title: "See the ranking of your activity",
    description:
      "Littera provides a ranking of user's activity. Check and see how others are doing and motivated each other.",
    imagePath: "/littera-dashboard-3.webp",
  },
];

export function UsageSection() {
  return (
    <div className="flex flex-col gap-8">
      <div className="space-y-4">
        <h2 className="text-display-sm md:text-display-sm text-littera-900 text-center">Report Litter</h2>
        <Card className="bg-littera-50 py-6 px-4 border-none max-w-5xl mx-auto">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
              {howToReportCard.map((card) => (
                <UsageCard key={card.head} {...card} variant="littera" />
              ))}
            </div>
          </div>
        </Card>
      </div>

      <div className="space-y-4">
        <h2 className="text-display-sm md:text-display-sm text-littera-900 text-center">Collect Litter</h2>
        <Card className="bg-littera-50 py-6 px-4 border-none max-w-5xl mx-auto">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
              {howToCollectCard.map((card) => (
                <UsageCard key={card.head} {...card} variant="littera" />
              ))}
            </div>
          </div>
        </Card>
      </div>

      <div className="space-y-4">
        <h2 className="text-display-sm md:text-display-sm text-littera-900 text-center">Dashboard</h2>
        <Card className="bg-littera-50 py-6 px-4 border-none max-w-5xl mx-auto">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
              {otherFeaturesCard.map((card) => (
                <UsageCard key={card.head} {...card} variant="littera" />
              ))}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
