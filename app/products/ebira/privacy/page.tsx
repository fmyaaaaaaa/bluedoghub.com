import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <div className="mx-auto min-h-screen flex flex-col">
      <main className="flex-grow">
        {/* Header section */}
        <section className="w-full py-12 px-4 md:py-20 bg-ebira-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-24 max-w-4xl">
            <div className="flex flex-col items-center gap-4 text-center">
              <h1 className="text-display-md md:text-display-lg text-ebira-900">Privacy Policy</h1>
              <p className="text-body-md md:text-body-lg text-black-600">Effective Date: April 1, 2025</p>
            </div>
          </div>
        </section>

        {/* Privacy Policy Content */}
        <section className="w-full py-12 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-24 max-w-4xl">
            <div className="space-y-10">
              <div>
                <p className="text-body-md md:text-body-lg text-black-600 mb-8">
                  Ebira ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how
                  we collect, use, and protect your information when you use our mobile application.
                </p>
              </div>

              <div>
                <h2 className="text-heading-lg text-ebira-800 mb-4">1. Information We Collect</h2>
                <div className="space-y-3 text-body-md text-black-600">
                  <p>
                    Ebira does not collect or store any personal information on our servers. All data you input or
                    generate through the App, such as your study items and progress, is stored locally on your device.
                  </p>
                  <p>We do not require you to sign in, and we do not access your contacts, location, or photos.</p>
                </div>
              </div>

              <div>
                <h2 className="text-heading-lg text-ebira-800 mb-4">2. Optional Analytics</h2>
                <div className="space-y-3 text-body-md text-black-600">
                  <p>
                    We may use privacy-friendly analytics tools (e.g., Firebase Analytics) to understand general usage
                    trends. This data is anonymous and non-personal, and it helps us improve the app experience. You can
                    opt out at any time via your device settings.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-heading-lg text-ebira-800 mb-4">3. Data Sharing</h2>
                <div className="space-y-3 text-body-md text-black-600">
                  <p>
                    We do not share your personal data with any third party. Since we do not collect personal data,
                    there is nothing to sell, share, or misuse.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-heading-lg text-ebira-800 mb-4">4. Data Retention</h2>
                <div className="space-y-3 text-body-md text-black-600">
                  <p>
                    All your data remains on your device and is retained until you delete the app or clear the app's
                    storage. We do not store any of it externally.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-heading-lg text-ebira-800 mb-4">5. Children's Privacy</h2>
                <div className="space-y-3 text-body-md text-black-600">
                  <p>
                    Ebira is not intended for use by children under the age of 13. We do not knowingly collect personal
                    information from children.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-heading-lg text-ebira-800 mb-4">6. Changes to this Privacy Policy</h2>
                <div className="space-y-3 text-body-md text-black-600">
                  <p>
                    We may update this Privacy Policy occasionally. Any changes will be reflected here with a revised
                    effective date.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-heading-lg text-ebira-800 mb-4">7. Contact Us</h2>
                <div className="space-y-3 text-body-md text-black-600">
                  <p>If you have any questions about this Privacy Policy, please contact us at:</p>
                  <p className="text-ebira-600 font-medium">contact@bluedoghub.com</p>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Button variant="ebira" asChild>
                <Link href="/products/ebira">Back to Ebira</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
