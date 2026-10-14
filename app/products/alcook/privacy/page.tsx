import type { Metadata } from "next";
import Link from "next/link";
import {
  BulletList,
  Callout,
  ContactBox,
  LegalDocument,
  LegalSection,
  LegalSubheading,
} from "../_components/LegalDocument";
import { alcookAlternates, alcookPaths, alcookUrl } from "../_components/constants";

const title = "Privacy Policy - Alcook";
const description = "Privacy Policy for the iOS app Alcook.";

export const metadata: Metadata = {
  title,
  description,
  alternates: alcookAlternates("privacy", "en"),
  openGraph: {
    title,
    description,
    url: alcookUrl("privacy", "en"),
  },
};

export default function Page() {
  return (
    <LegalDocument
      lang="en"
      title="Privacy Policy"
      updated="Last updated: October 14, 2026"
      note="This policy applies from the release of Alcook. This English version is a translation for reference; the Japanese version is the governing text."
      otherLang={{ href: alcookPaths.privacy.ja, label: "日本語" }}
      intro={
        <>
          <Callout title="Your own recipe book stays on your iPhone">
            <p>
              The data of your own recipe book (recipes, screenshots, dish photos, meal plans, the shopping list and so
              on) is stored only on your device and is never sent to our server. Only when you create or join a family
              recipe book do we handle the information needed to share it with your family on our server. We use no ads,
              no analytics and no tracking, and we never sell your data.
            </p>
          </Callout>
          <p className="text-body-md text-black-600">
            This Privacy Policy explains how Bluedog (&quot;we&quot;, &quot;us&quot;) handles information in the iOS app
            &quot;Alcook&quot; (the &quot;App&quot;) and on the family recipe book invite page.
          </p>
        </>
      }
    >
      <LegalSection id="personal-book" title="1. Your own recipe book (on your device only)">
        <p>
          The data of your own recipe book, including recipes (dish name, notes, where they came from and that
          page&apos;s address), ingredients and amounts, screenshots, dish photos, cooking records, meal plans (how each
          day is decided, weekly rules, past menus) and the check state of the shopping list, is stored on your device
          using Apple&apos;s SwiftData (in the App Group area shared by the App, its widgets and its share menu).
          Settings such as the language and the day and time of the next week&apos;s dinners notification are also
          stored on your device (UserDefaults). When the App saves an image, it redraws it as a JPEG of at most 2048
          pixels on the long side, so metadata of the original photo, such as its location, is not kept.
        </p>
        <p>
          Widgets read only a summary the App writes to the App Group (the decided dinners from today to next week, this
          week&apos;s ingredients and small dish photos). The Apple Watch app receives the same summary (without photos)
          from your iPhone and sends shopping list checks back to it (device-to-device via Apple&apos;s
          WatchConnectivity, never through our server). Cooking checklist ticks are stored only on the Apple Watch.
        </p>
        <p>
          The share menu (saving from Safari, Instagram, LINE and so on) receives the title and address of a shared
          page, and the images and text you share, and stores them on your device. The share menu never connects to the
          internet. It does not read the content of Instagram posts.
        </p>
        <p>
          The App may use the camera to take a photo of a dish you made. When you choose a photo from your library, the
          App uses the iOS photo picker and receives only the photos you choose. The next week&apos;s dinners
          notification is a local notification scheduled on your device. The picture made when you share the menu is
          created on your device and handed only to the destination you choose in the share sheet (family names are
          never included).
        </p>
        <p>
          This data is never sent to our server. If you only use your own recipe book, the App never contacts our
          server, and every feature works without an internet connection (apart from talking to the App Store, for
          example to buy Alcook Plus).
        </p>
        <p>Depending on your settings, data on your device may be included in device backups such as iCloud Backup.</p>
      </LegalSection>

      <LegalSection id="family-books" title="2. Information we handle when you use a family recipe book">
        <p>
          The first time you create or join a family recipe book, a random user ID is created on your device and stored
          in the iOS Keychain. There is no sign-in, and you never register a real name, email address or phone number.
          Only when you use a family recipe book, the information below is sent to and stored on our server:
        </p>
        <BulletList>
          <li>your user ID and the name you enter (your name for the family);</li>
          <li>an authentication token (our server stores only its hash, never the token itself);</li>
          <li>
            the content of your family recipe books: the book&apos;s name, members&apos; names, the creator and the
            payer, recipes (dish name, notes, where they came from and that page&apos;s address), ingredients and
            amounts, the images of screenshots and dish photos, cooking records (date, the member who cooked and the
            photo), meal plans (how each day is decided and its dish, weekly rules, the dish names of past menus), the
            check state of the shopping list (the week and the ingredient&apos;s name) and invite codes;
          </li>
          <li>
            your device&apos;s push notification token (APNs), used only for silent notifications (which are not shown
            on screen) that bring other members&apos; changes to your device;
          </li>
          <li>
            Alcook Plus purchase information: subscription status, App Store transaction identifiers
            (originalTransactionId), expiry date, whether it renews automatically, the end of a billing grace period,
            product and environment (production or test);
          </li>
          <li>
            technical information that comes with each request, such as IP address, time and the App&apos;s build number
            (used in server logs and to limit request rates).
          </li>
        </BulletList>
        <p>
          Recipes you add to a family recipe book from your own recipe book are sent and stored as content of the family
          recipe book. The App also sends its display language when it creates your user ID; our server does not store
          it.
        </p>
        <LegalSubheading>What members of a family recipe book can see</LegalSubheading>
        <p>
          The content of a family recipe book and members&apos; names are visible to every member of that book. So that
          members can be told before a family recipe book stops being usable, whether the payer&apos;s Alcook Plus has
          auto-renew turned off, and the date until which the book stays usable during a billing grace period, may be
          shown to its members (the payer&apos;s expiry date itself is not shown).
        </p>
        <LegalSubheading>What we do not collect</LegalSubheading>
        <BulletList>
          <li>your real name, email address, phone number or postal address;</li>
          <li>your location or contacts;</li>
          <li>your photo library (apart from the photos you choose);</li>
          <li>the advertising identifier (IDFA);</li>
          <li>payment details such as card numbers (payments are processed by Apple);</li>
          <li>the data of your own recipe book.</li>
        </BulletList>
      </LegalSection>

      <LegalSection id="purposes" title="3. How we use information">
        <p>We use this information only to:</p>
        <BulletList>
          <li>
            provide family recipe books (storage, syncing between members, storing and delivering images, invitations);
          </li>
          <li>send silent notifications that bring other members&apos; changes to your device;</li>
          <li>
            verify Alcook Plus purchases, decide whether you can create family recipe books and whether family recipe
            books can be used, and process App Store notifications (renewals, cancellations, refunds, etc.);
          </li>
          <li>prevent abuse and excessive requests, handle incidents and keep the Service secure; and</li>
          <li>respond to your inquiries.</li>
        </BulletList>
        <p>We do not use it for advertising, behavioral analysis or profiling.</p>
      </LegalSection>

      <LegalSection id="third-parties" title="4. Sharing and service providers">
        <p>
          We do not share your information with third parties without your consent, except where required by law, and we
          never sell it. We use the following services to run the Service:
        </p>
        <BulletList>
          <li>
            <strong>Amazon Web Services (AWS)</strong>: the server infrastructure for family recipe books. Data is
            processed and stored in the Tokyo region (Japan) using API Gateway, AWS Lambda and Amazon DynamoDB, and logs
            are stored in Amazon CloudWatch Logs. The images of screenshots and dish photos are stored in Amazon S3,
            also in the Tokyo region. The invite page is also served from AWS.
          </li>
          <li>
            <strong>Apple</strong>: the App Store (purchases, payments and subscription management) and the Apple Push
            Notification service (delivery of silent notifications). A silent notification carries only the identifier
            of the family recipe book that changed, never its recipes or other content. Apple&apos;s handling of
            information is subject to Apple&apos;s privacy policy.
          </li>
          <li>
            <strong>Google Fonts</strong>: only the web pages at alcook.bluedoghub.com, such as the page shown when you
            open an invite link (https://alcook.bluedoghub.com/join/…), load fonts from Google Fonts. When they do, your
            browser sends information such as your IP address and user agent to Google. The App itself does not use
            Google Fonts.
          </li>
        </BulletList>
      </LegalSection>

      <LegalSection id="retention" title="5. Retention">
        <BulletList>
          <li>
            Family recipe book content (including images): kept while the book has members, and deleted from our server
            when the last member leaves. After a member leaves or is removed, the content they added and their name
            remain until the book is deleted.
          </li>
          <li>
            Images a family recipe book no longer uses (deleted screenshots, replaced or removed dish photos, etc.):
            deleted automatically once they have been unused for 7 days.
          </li>
          <li>Invite codes: expire 48 hours after they are issued and are then deleted automatically.</li>
          <li>
            Rate-limit counters (which may include IP addresses): expire after about 2 hours and are deleted
            automatically.
          </li>
          <li>Server logs (which include IP addresses): deleted after 30 days.</li>
          <li>
            User ID, name, token hash, device token and Alcook Plus purchase information: kept as long as needed to
            provide family recipe books, and deleted on request.
          </li>
          <li>
            For recovery from failures, we keep database backups for up to 35 days. Deleted data may remain in these
            backups during that period.
          </li>
        </BulletList>
      </LegalSection>

      <LegalSection id="security" title="6. Security">
        <BulletList>
          <li>Communication between the App and our server is encrypted with TLS.</li>
          <li>Authentication tokens are stored only as hashes.</li>
          <li>Data and images stored on our server are encrypted at rest.</li>
          <li>
            Images are stored in a private location, and only members of the family recipe book upload and download
            them, through signed addresses that expire shortly.
          </li>
          <li>Each part of our server has only the minimum permissions it needs, and access is restricted.</li>
          <li>Rate limits and similar measures protect against unauthorized access and guessing of invite codes.</li>
        </BulletList>
        <p>No method of transmission or storage over the internet is completely secure, however.</p>
      </LegalSection>

      <LegalSection id="your-rights" title="7. Your choices and rights">
        <BulletList>
          <li>If you neither create nor join a family recipe book, no information is sent to our server.</li>
          <li>You can leave a family recipe book at any time in the App.</li>
          <li>
            You can delete recipes and photos in a family recipe book in the App. The images of what you delete are
            deleted from our server as described in Section 5.
          </li>
          <li>
            You can turn off the next week&apos;s dinners notification in the App, or turn off the App&apos;s
            notifications in iOS Settings.
          </li>
          <li>You can cancel Alcook Plus in iOS Settings. Your purchase history is managed by Apple.</li>
          <li>
            To request access to, correction of, suspension of use of, or deletion of your information that we hold,
            contact us below. Because there are no accounts, we may ask for details such as the names of your family
            recipe books and your name for the family to identify you and your data.
          </li>
        </BulletList>
      </LegalSection>

      <LegalSection id="no-tracking" title="8. No tracking or advertising">
        <p>The App does not use any:</p>
        <BulletList>
          <li>analytics services;</li>
          <li>tracking technologies;</li>
          <li>advertising networks.</li>
        </BulletList>
      </LegalSection>

      <LegalSection id="children" title="9. Children's privacy">
        <p>
          The App is not directed to children under the age of 13. Children under 13 should use family recipe books only
          under a parent&apos;s or guardian&apos;s supervision. If we learn that we handle information of a child under
          13 without parental consent, we will delete it promptly.
        </p>
      </LegalSection>

      <LegalSection id="changes" title="10. Changes to this policy">
        <p>
          We may update this Privacy Policy as needed. We will post the new policy on this page and update the
          &quot;Last updated&quot; date at the top. We will also announce significant changes in the App or on this
          website.
        </p>
      </LegalSection>

      <LegalSection id="contact" title="11. Contact us">
        <p>If you have any questions or requests about this Privacy Policy, please contact us:</p>
        <ContactBox emailLabel="Email" appLabel="App" appName="Alcook" />
        <p>
          See also:{" "}
          <Link href={alcookPaths.terms.en} className="text-alcook-600 hover:underline">
            Terms of Use
          </Link>
        </p>
      </LegalSection>
    </LegalDocument>
  );
}
