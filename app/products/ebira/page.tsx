import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { UsageSection } from "./_components/UsageSection";
import { Metadata } from "next";

const baseUrl =
  process.env.NEXT_PUBLIC_BASE_URL || process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3030";

export const metadata: Metadata = {
  title: "Ebira",
  description:
    "Ebira is a mobile app that helps you memorize terms or words for your study using the Ebbinghaus Forgetting Curve.",
  openGraph: {
    title: "Ebira",
    description:
      "Ebira is a mobile app that helps you memorize terms or words for your study using the Ebbinghaus Forgetting Curve.",
    images: [
      {
        url: `${baseUrl}/ogp-ebira.png`,
        width: 1200,
        height: 630,
        alt: "Ebira Logo",
      },
    ],
  },
};

export default function Page() {
  return (
    <div className="mx-auto min-h-screen flex flex-col">
      <main className="flex-grow">
        {/* Hero section */}
        <section className="w-full py-12 px-4 md:py-20 bg-ebira-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-40 max-w-7xl">
            <div className="flex flex-col md:flex-row items-center justify-between md:gap-12">
              <div className="flex flex-col items-start gap-4 md:w-2/3">
                <div className="flex flex-row items-center gap-4">
                  <h1 className="text-display-md md:text-display-xl text-ebira-900">Ebira</h1>
                  <Image
                    src="/logo-ebira.svg"
                    alt="Ebira Logo"
                    width={40}
                    height={40}
                    className="md:hidden rounded-lg"
                  />
                </div>
                <p className="text-body-md md:text-body-lg text-black-600">
                  Struggling to remember what you studied? Ebira helps you retain knowledge using spaced repetition
                  based on the forgetting curve. Whether you&apos;re learning new vocabulary, preparing for an exam, or
                  just trying to remember important facts, Ebira gives you the right reminders at the right time.
                </p>
                <Button size="lg" variant="ebira" className="w-full md:w-auto">
                  <Link href="#get-started">Get Started</Link>
                </Button>
              </div>
              <div className="flex flex-col items-center justify-center md:w-1/3">
                <Image
                  src="/logo-ebira.svg"
                  alt="Ebira Logo"
                  width={300}
                  height={300}
                  className="rounded-lg hidden md:block"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="w-full py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-24 max-w-7xl">
            <h1 className="text-display-md md:text-display-lg text-ebira-900 text-center mb-8">Introduction</h1>

            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/2 order-2 md:order-1">
                <Card className="p-8 h-full bg-ebira-10">
                  <Image
                    src="/ebira-ebbinghaus-curve.svg"
                    alt="Ebbinghaus Forgetting Curve"
                    width={600}
                    height={600}
                    className="rounded-lg"
                  />
                </Card>
              </div>

              <div className="w-full md:w-1/2 order-1 md:order-2 flex flex-col gap-4">
                <p className="text-body-md md:text-body-lg text-black-600">
                  Ebira is named after the combination of <strong>Ebbinghaus Forgetting Curve</strong> and{" "}
                  <strong>Memorize</strong>.
                </p>
                <p className="text-body-md md:text-body-lg text-black-600">
                  Nowadays, AI is getting more and more powerful and there will be less and less need to memorize
                  things. However, I believe &quot;thinking&quot; is still important and unique to humans. Memorizing
                  things are seeds of our thoughts.
                </p>
                <p className="text-body-md md:text-body-lg text-black-600">
                  You can save your study terms that you want to memorize and Ebira will notify you at the right time to
                  recall them based on the Ebbinghaus Forgetting Curve.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Usage Section */}
        <section className="w-full py-8 bg-ebira-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-24 max-w-7xl flex flex-col items-center gap-4">
            <h1 className="text-display-md md:text-display-lg text-littera-900 text-center">Main Features</h1>
            <p className="text-body-md md:text-body-lg text-black-600 text-center max-w-3xl mx-auto">
              Ebira provides a function to help you memorize terms or words for your study.
            </p>
            <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
              <UsageSection />
            </div>
          </div>
        </section>

        {/* Get started section */}
        <section id="get-started" className="w-full py-10 md:py-20 bg-gradient-to-b from-white to-ebira-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-40 max-w-5xl">
            <div className="text-center space-y-6">
              <div className="inline-block px-4 py-1.5 bg-ebira-600 text-white rounded-full text-label-md">
                Now Available
              </div>

              <h2 className="text-display-md md:text-display-lg text-ebira-900">Download Ebira Today</h2>

              <p className="px-1 text-body-lg text-ebira-800 max-w-2xl mx-auto">
                Ebira is now available on the Canada App Store. Start your journey to better memory retention today.
              </p>

              <div className="mt-8 flex justify-center">
                <Link href="https://apps.apple.com/ca/app/ebira/id6744083376" target="_blank" rel="noopener noreferrer">
                  <Image src="/app-store-badge.svg" alt="Download on the App Store" width={200} height={60} />
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-3 md:gap-6 mt-12">
                <div className="p-3 md:p-6 bg-white rounded-lg shadow-sm">
                  <div className="text-heading-md md:text-heading-lg text-ebira-600 mb-1 md:mb-2">Learn</div>
                  <p className="text-body-xs md:text-body-md text-ebira-700">Efficiently</p>
                </div>
                <div className="p-3 md:p-6 bg-white rounded-lg shadow-sm">
                  <div className="text-heading-md md:text-heading-lg text-ebira-600 mb-1 md:mb-2">Remember</div>
                  <p className="text-body-xs md:text-body-md text-ebira-700">Long Term</p>
                </div>
                <div className="p-3 md:p-6 bg-white rounded-lg shadow-sm">
                  <div className="text-heading-md md:text-heading-lg text-ebira-600 mb-1 md:mb-2">Achieve</div>
                  <p className="text-body-xs md:text-body-md text-ebira-700">Your Goals</p>
                </div>
              </div>

              <div className="mt-12 space-y-6">
                <div className="text-body-lg text-littera-900 font-medium">Questions or feedback?</div>
                <div className="text-heading-md text-ebira-600">contact@bluedoghub.com</div>
                <div className="mt-4">
                  <Link
                    href="/products/ebira/privacy"
                    className="text-caption-md text-ebira-600 hover:text-ebira-800 hover:underline"
                  >
                    Privacy Policy
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
