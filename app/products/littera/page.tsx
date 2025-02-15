import { ProductIntroductionCards } from "@/components/ProductIntroductionCards";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { UsageSection } from "./_components/UsageSection";

const baseUrl =
  process.env.NEXT_PUBLIC_BASE_URL || process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3030";

export const metadata: Metadata = {
  title: "Littera",
  description:
    "Littera is a mobile app that helps you clean up litter in your area and stay motivated to keep the streets clean.",
  openGraph: {
    title: "Littera",
    description:
      "Littera is a mobile app that helps you clean up litter in your area and stay motivated to keep the streets clean.",
    images: [
      {
        url: `${baseUrl}/ogp-littera.png`,
        width: 1200,
        height: 630,
        alt: "Littera Logo",
      },
    ],
  },
};

export default function Page() {
  return (
    <div className="mx-auto min-h-screen flex flex-col">
      <main className="flex-grow">
        {/* Hero section */}
        <section className="w-full py-12 px-4 md:py-20 bg-littera-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-40 max-w-7xl">
            <div className="flex flex-col md:flex-row items-center justify-between md:gap-12">
              <div className="flex flex-col items-start gap-4 md:w-2/3">
                <div className="flex flex-row items-center gap-4">
                  <h1 className="text-display-md md:text-display-xl text-littera-900">Littera</h1>
                  <Image
                    src="/logo-littera.svg"
                    alt="Littera Logo"
                    width={40}
                    height={40}
                    className="md:hidden rounded-lg"
                  />
                </div>
                <p className="text-body-md md:text-body-lg text-black-600">
                  Littera is Bluedog&apos;s first step towards a cleaner world. Let&apos;s tackle the global litter
                  problem together, envisioning a future where our next generation lives in a world free of trash on the
                  streets.
                </p>
                <p className="text-body-md md:text-body-lg text-black-600">
                  Ready to start your journey to a cleaner world?
                </p>
                <Button size="lg" variant="littera" className="w-full md:w-auto">
                  <Link href="#get-started">Get Started</Link>
                </Button>
              </div>
              <div className="flex flex-col items-center justify-center md:w-1/3">
                <Image
                  src="/logo-littera.svg"
                  alt="Littera Logo"
                  width={300}
                  height={300}
                  className="rounded-lg hidden md:block"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-24 max-w-7xl flex flex-col items-center gap-4">
            <h1 className="text-display-md md:text-display-lg text-littera-900 text-center">Main Features</h1>
            <p className="text-body-md md:text-body-lg text-black-600 text-center max-w-3xl mx-auto">
              Littera provides a range of functions to help you effectively clean up litter in your area and stay
              motivated to keep the streets clean.
            </p>
            <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
              <ProductIntroductionCards variant="littera" />
            </div>
          </div>
        </section>

        {/* Image Section */}
        <section className="w-full py-16 bg-littera-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-32 max-w-7xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* 左側 */}
              <div className="space-y-4 px-4 md:px-0">
                <h1 className="text-display-md md:text-display-lg text-littera-900">Why Littera?</h1>
                <div className="space-y-2">
                  <p className="text-body-md text-littera-800">
                    Littera is named after the combination of <strong>litter</strong> and <strong>era</strong>,
                    representing the era of litter we currently face
                  </p>
                  <p className="text-body-md text-littera-800">
                    As human society has evolved, we&apos;ve generated vast amounts of products, but many of these end
                    up as waste after use.
                  </p>
                  <p className="text-body-md text-littera-800">
                    Litter discarded on our streets poses serious threats to both our planet and its wildlife.
                  </p>
                  <div className="pt-4 md:pt-6">
                    <p className="text-heading-sm text-littera-800">
                      Together, we can make a difference. Let&apos;s visualize our environmental impact and take action
                      with Littera – for a cleaner, sustainable future.
                    </p>
                  </div>
                </div>
              </div>

              {/* 右側 */}
              <div className="relative max-w-[600px] mx-auto px-4 md:px-0">
                {/* 上部のグラデーション */}
                <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-littera-10/90 to-transparent z-10" />

                {/* 左側のグラデーション */}
                <div className="absolute top-0 left-0 w-16 h-full bg-gradient-to-r from-littera-10/90 to-transparent z-10" />

                <Image
                  src="/littera-litter-photos-square.webp"
                  alt="Litter Image"
                  width={600}
                  height={600}
                  className="relative w-full rounded-xl"
                />

                {/* 右側のグラデーション */}
                <div className="absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-littera-10/90 to-transparent z-10" />

                {/* 下部のグラデーション */}
                <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-littera-10/90 to-transparent z-10" />
              </div>
            </div>
          </div>
        </section>

        {/* How to use Littera */}
        <section className="w-full py-16 bg-littera-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-24 max-w-7xl">
            <h1 className="text-display-md md:text-display-lg text-littera-900 text-center">How to use Littera</h1>
            <p className="text-body-md md:text-body-lg text-black-600 text-center max-w-3xl mx-auto">
              Littera is easy to use. Just follow the steps below to get started.
            </p>
          </div>
          <div className="container mx-auto px-4 sm:px-6 max-w-7xl mt-6">
            <UsageSection />
          </div>
        </section>

        {/* Get started section */}
        <section id="get-started" className="w-full py-10 md:py-20 bg-gradient-to-b from-white to-littera-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-40 max-w-5xl">
            <div className="text-center space-y-6">
              <div className="inline-block px-4 py-1.5 bg-littera-600 text-white rounded-full text-label-md">
                Beta Version
              </div>

              <h2 className="text-display-md md:text-display-lg text-littera-900">Help Shape the Future of Littera</h2>

              <p className="px-1 text-body-lg text-littera-800 max-w-2xl mx-auto">
                Littera is currently in beta, and I&apos;m looking for passionate individuals to help me make Littera
                better. Join me in my mission to create a cleaner world.
              </p>

              <div className="grid grid-cols-3 gap-3 md:gap-6 mt-12">
                <div className="p-3 md:p-6 bg-white rounded-lg shadow-sm">
                  <div className="text-heading-md md:text-heading-lg text-littera-600 mb-1 md:mb-2">Join</div>
                  <p className="text-body-xs md:text-body-md text-littera-700">Early Access</p>
                </div>
                <div className="p-3 md:p-6 bg-white rounded-lg shadow-sm">
                  <div className="text-heading-md md:text-heading-lg text-littera-600 mb-1 md:mb-2">Test</div>
                  <p className="text-body-xs md:text-body-md text-littera-700">New Features</p>
                </div>
                <div className="p-3 md:p-6 bg-white rounded-lg shadow-sm">
                  <div className="text-heading-md md:text-heading-lg text-littera-600 mb-1 md:mb-2">Shape</div>
                  <p className="text-body-xs md:text-body-md text-littera-700">The Future</p>
                </div>
              </div>

              <div className="mt-12 space-y-6">
                <div className="text-body-lg text-littera-900 font-medium">Interested in testing or contributing?</div>
                <div className="text-heading-md text-littera-600">contact@bluedoghub.com</div>
                <p className="text-body-xs md:text-body-sm text-littera-600">
                  Free to join • No special equipment needed • Start today
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
