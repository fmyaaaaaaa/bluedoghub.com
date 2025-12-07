import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <div className="mx-auto min-h-screen flex flex-col">
      <main className="flex-grow">
        {/* Header section */}
        <section className="w-full py-12 px-4 md:py-20 bg-blue-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-24 max-w-4xl">
            <div className="flex flex-col items-center gap-4 text-center">
              <h1 className="text-display-md md:text-display-lg text-blue-900">Privacy Policy</h1>
              <p className="text-body-md md:text-body-lg text-black-600">Effective Date: December 7, 2025</p>
              <div className="mt-4">
                <Link href="/products/coinly/privacy/ja" className="text-blue-600 hover:text-blue-700 underline">
                  日本語
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Privacy Policy Content */}
        <section className="w-full py-12 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-24 max-w-4xl">
            <div className="space-y-10">
              {/* Introduction */}
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <p className="text-body-lg text-blue-900 font-semibold mb-2">
                  Your Privacy Matters
                </p>
                <p className="text-body-md text-black-600">
                  Coinly does not collect, store, or transmit any of your personal data to external servers.
                  All your financial information stays on your device.
                </p>
              </div>

              {/* 1. Information Collection */}
              <div>
                <h2 className="text-heading-lg text-blue-800 mb-4">1. Information Collection and Use</h2>
                <div className="space-y-3 text-body-md text-black-600">
                  <p>
                    Coinly is designed with your privacy in mind. We do not collect, store, or transmit any personal
                    information to external servers.
                  </p>
                </div>
              </div>

              {/* 2. Data Storage */}
              <div>
                <h2 className="text-heading-lg text-blue-800 mb-4">2. Data Storage</h2>
                <div className="space-y-3 text-body-md text-black-600">
                  <p>All your financial data, including:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Expense records</li>
                    <li>Budget settings</li>
                    <li>Categories</li>
                    <li>Monthly summaries</li>
                  </ul>
                  <p className="mt-3">
                    ...are stored locally on your device using Apple&apos;s SwiftData framework. This data never leaves
                    your device.
                  </p>
                </div>
              </div>

              {/* 3. Settings and Preferences */}
              <div>
                <h2 className="text-heading-lg text-blue-800 mb-4">3. Settings and Preferences</h2>
                <div className="space-y-3 text-body-md text-black-600">
                  <p>
                    User preferences such as language selection, currency preference, and fiscal month start day are
                    stored locally using UserDefaults. This information is never transmitted to external servers.
                  </p>
                </div>
              </div>

              {/* 4. No Tracking or Analytics */}
              <div>
                <h2 className="text-heading-lg text-blue-800 mb-4">4. No Tracking or Analytics</h2>
                <div className="space-y-3 text-body-md text-black-600">
                  <p>We do not use any:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Analytics services</li>
                    <li>Tracking technologies</li>
                    <li>Advertising networks</li>
                    <li>Third-party services that collect data</li>
                  </ul>
                </div>
              </div>

              {/* 5. No Internet Connection Required */}
              <div>
                <h2 className="text-heading-lg text-blue-800 mb-4">5. No Internet Connection Required</h2>
                <div className="space-y-3 text-body-md text-black-600">
                  <p>
                    Coinly works completely offline. We do not require an internet connection, and your data is never
                    synced to cloud services.
                  </p>
                </div>
              </div>

              {/* 6. Your Control */}
              <div>
                <h2 className="text-heading-lg text-blue-800 mb-4">6. Your Control</h2>
                <div className="space-y-3 text-body-md text-black-600">
                  <p>You have complete control over your data:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>All data stays on your device</li>
                    <li>No account registration required</li>
                    <li>No login credentials stored</li>
                    <li>Uninstalling the app removes all data</li>
                  </ul>
                </div>
              </div>

              {/* 7. Children's Privacy */}
              <div>
                <h2 className="text-heading-lg text-blue-800 mb-4">7. Children&apos;s Privacy</h2>
                <div className="space-y-3 text-body-md text-black-600">
                  <p>
                    Coinly does not collect any data from anyone, including children under the age of 13.
                  </p>
                </div>
              </div>

              {/* 8. Changes to This Policy */}
              <div>
                <h2 className="text-heading-lg text-blue-800 mb-4">8. Changes to This Policy</h2>
                <div className="space-y-3 text-body-md text-black-600">
                  <p>
                    We may update this Privacy Policy from time to time. We will notify you of any changes by posting
                    the new Privacy Policy on this page and updating the &quot;Effective Date&quot; at the top.
                  </p>
                </div>
              </div>

              {/* 9. Contact Us */}
              <div>
                <h2 className="text-heading-lg text-blue-800 mb-4">9. Contact Us</h2>
                <div className="space-y-3 text-body-md text-black-600">
                  <p>If you have any questions about this Privacy Policy, please contact us:</p>
                  <div className="bg-gray-50 p-4 rounded-lg mt-3">
                    <p className="font-medium text-black-700">Email</p>
                    <p className="text-blue-600 font-medium">support@bluedoghub.com</p>
                    <p className="font-medium text-black-700 mt-3">App</p>
                    <p className="text-black-600">Coinly - Smart Budget Tracker</p>
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
