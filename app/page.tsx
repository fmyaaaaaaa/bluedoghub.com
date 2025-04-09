import { ProductIntroductionCards } from "@/app/products/littera/_components/ProductIntroductionCards";
import ProfileCard from "@/components/ProfileCard";
import WhatIOfferCard from "@/components/WhatIOfferCard";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const baseUrl =
  process.env.NEXT_PUBLIC_BASE_URL || process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3030";

export const metadata: Metadata = {
  title: "Bluedog",
  description:
    "Bluedog is dedicated to developing solutions that make a meaningful impact for the planet and society using cutting-edge IT technology.",
  openGraph: {
    title: "Bluedog",
    description:
      "Bluedog is dedicated to developing solutions that make a meaningful impact for the planet and society using cutting-edge IT technology.",
    images: [
      {
        url: `${baseUrl}/ogp-bluedog.png`,
        width: 1200,
        height: 630,
        alt: "Bluedog Logo",
      },
    ],
  },
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        {/* Top Section */}
        <section className="w-full py-12 px-4 md:py-20 bg-brand">
          <div className="container mx-auto px-4 sm:px-6 lg:px-32 max-w-7xl">
            <div className="flex flex-col md:flex-row items-center justify-between md:gap-12">
              {/* Description */}
              <div className="md:w-3/4 text-center md:text-left">
                <h1 className="text-display-md md:text-display-xl text-white">Technology for a Better Tomorrow</h1>
                <p className="text-body-lg text-white/90 mt-6">
                  At Bluedog, I see the planet and society as my customers. Using cutting-edge IT technology, I am
                  dedicated to developing solutions that make a meaningful impact.
                </p>
                <div className="flex mt-8 mx-auto justify-center md:justify-start">
                  <Button asChild size="lg" variant="secondary">
                    <Link href="#about-developer">Get To Know Me</Link>
                  </Button>
                </div>
              </div>

              {/* Illustration */}
              <div className="md:w-1/2">
                <div className="hidden md:flex justify-end">
                  <Image src="/logo-bluedog.svg" alt="BlueDog Tech Illustration" width={400} height={400} priority />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="w-full py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-24 max-w-7xl flex flex-col items-center gap-4">
            <h2 className="text-display-sm md:text-display-md text-center text-black-700">Introduction of Littera</h2>
            <p className="text-body-md md:text-body-lg text-black-700 text-center mb-12 max-w-3xl mx-auto">
              Littera is Bluedog&apos;s first step forward. I tackle the global litter problem with the vision of a
              future where the next generation lives in a world free of trash on the streets
            </p>

            <ProductIntroductionCards variant="brand" />

            <div className="mt-10">
              <h3 className="text-body-lg text-black-900 text-center max-w-3xl mx-auto">
                Littera is currently in beta! If you&apos;re interested in helping me test it, please reach out to{" "}
                <strong>contact@bluedoghub.com</strong>. I will continue to improve Littera with regular updates,
                expanding features, enhancing the UI/UX, and broadening my impact.
              </h3>
              <div className="flex flex-col md:flex-row px-4 md:px-0 mt-8 mx-auto justify-center gap-4">
                <Button asChild size="lg" variant="default">
                  <Link href="/products/littera">Get To Know Littera More...</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* About Me Section */}
        <section id="about-developer" className="w-full py-16 bg-brand-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-24 max-w-7xl">
            <div className="flex flex-col items-center justify-between gap-4">
              <div className="md:max-w-7xl gap-4">
                <h2 className="text-display-sm md:text-display-md text-center text-black-700">About the Developer</h2>
                <p className="text-body-sm md:text-body-md text-black-700 text-center max-w-3xl mx-auto">
                  With 7 years of software development experience, I specialize in full-stack app development and cloud
                  infrastructure architecture.
                </p>
              </div>
              <div className="md:max-w-4xl py-6">
                <div className="flex flex-col md:grid md:grid-cols-3 gap-10 md:px-30">
                  <div className="flex justify-center md:block md:px-0">
                    <ProfileCard />
                  </div>
                  <div className="md:col-span-2">
                    <WhatIOfferCard />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
