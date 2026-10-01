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
import { alcoinAlternates, alcoinPaths, alcoinUrl } from "../_components/constants";

const title = "Privacy Policy - Alcoin";
const description = "Privacy Policy for the iOS app Alcoin.";

export const metadata: Metadata = {
  title,
  description,
  alternates: alcoinAlternates("privacy", "en"),
  openGraph: {
    title,
    description,
    url: alcoinUrl("privacy", "en"),
  },
};

export default function Page() {
  return (
    <LegalDocument
      lang="en"
      title="Privacy Policy"
      updated="Last updated: October 1, 2026"
      note="This policy applies from the release of Alcoin 2.0.0. This English version is a translation for reference; the Japanese version is the governing text."
      otherLang={{ href: alcoinPaths.privacy.ja, label: "日本語" }}
      intro={
        <>
          <Callout title="Your personal book stays on your iPhone">
            <p>
              Personal book data is stored only on your device and is never sent to our server (when you use a transfer
              code, we briefly hold data encrypted on your device, which we cannot read). Only when you use shared books
              do we handle the information needed to share them on our server. We use no ads, no analytics and no
              tracking, and we never sell your data.
            </p>
          </Callout>
          <p className="text-body-md text-black-600">
            This Privacy Policy explains how Bluedog (&quot;we&quot;, &quot;us&quot;) handles information in the iOS app
            &quot;Alcoin&quot; (formerly &quot;Coinly&quot;) (the &quot;App&quot;) and on the shared book invite page.
          </p>
        </>
      }
    >
      <LegalSection id="personal-book" title="1. Personal book (on your device only)">
        <p>
          Your personal book data, including expenses, budgets, categories, monthly summaries and savings, is stored on
          your device using Apple&apos;s SwiftData. So are solo trips (their period, budget and records) and each
          book&apos;s currency and conversion details (the original amount, currency and the rate you entered). Settings
          such as language and the day your month starts are also stored on your device (UserDefaults). Information
          shown or recorded through widgets and Siri (Shortcuts) is also handled on your device. The Apple Watch app
          receives a summary of your books from your iPhone and sends its records back to your iPhone (device-to-device
          via Apple&apos;s WatchConnectivity, never through our server). The Apple Watch stores a summary of the book
          you are viewing (book and category names, budget, amount spent) and records not yet delivered to your iPhone
          (for up to 45 days). Your iPhone keeps the IDs of records received from the Apple Watch for 60 days so they
          are never saved twice.
        </p>
        <p>
          If you set up &quot;Record a payment from Apple Pay&quot;, the payment amount and merchant name are kept
          temporarily on your iPhone and Apple Watch only, as a suggestion for your next record. They are deleted when
          used, or the next time Alcoin runs after 30 minutes (they are no longer shown after 30 minutes), and are never
          sent anywhere. The card name is received but not stored.
        </p>
        <p>
          This data is never sent to our server (if you use a transfer code, we hold it only in encrypted form for a
          short time, as described in &quot;2. Information we handle when you use shared books or transfer codes&quot;).
          The App does not fetch exchange rates from anywhere. If you only use the personal book and do not use transfer
          codes, the App never contacts our server, and every feature works without an internet connection.
        </p>
        <p>
          Depending on your settings, data on your device may be included in device backups such as iCloud Backup.
          Information Apple handles when you use Siri is subject to Apple&apos;s privacy policy.
        </p>
      </LegalSection>

      <LegalSection id="shared-books" title="2. Information we handle when you use shared books or transfer codes">
        <p>
          The first time you create or join a shared book, or when you issue a transfer code, a random user ID is
          created on your device and stored in the iOS Keychain. There is no sign-in, and you never register a name,
          email address or phone number. Only when you use shared books or transfer codes, the information below that is
          needed is sent to and stored on our server:
        </p>
        <BulletList>
          <li>your user ID and the display names you enter (including your display name in each book);</li>
          <li>an authentication token (our server stores only its hash, never the token itself);</li>
          <li>the App&apos;s language (used to write record notifications in the recipient&apos;s language);</li>
          <li>
            the content of your shared books: book name, icon and currency, a trip&apos;s period and budget,
            members&apos; display names, the creator and the payer, expenses (amount, category, date, the member who
            recorded them and, if converted, the original amount, currency and rate), categories, budgets, copies of the
            details of merged trips (dates, categories, amounts, notes, the display names of those who recorded them,
            etc.) and invite codes;
          </li>
          <li>whether record notifications are on or off for each shared book;</li>
          <li>
            your device&apos;s push notification token (APNs), used for silent notifications (which are not shown on
            screen) that bring other members&apos; changes to your device, and for record notifications;
          </li>
          <li>
            Alcoin Plus purchase information: subscription status, App Store transaction identifiers
            (originalTransactionId), expiry date, whether it renews automatically, product and environment (production
            or test);
          </li>
          <li>
            technical information that comes with each request, such as IP address, time and app version (used in server
            logs and to limit request rates).
          </li>
        </BulletList>
        <LegalSubheading>What members of a shared book can see</LegalSubheading>
        <p>
          The content of a shared book and members&apos; display names are visible to every member of that book. Copies
          of the details of merged trips are visible to members who were not on the trip too. So that members can be
          told before a shared book stops being recordable, whether the payer&apos;s Alcoin Plus has auto-renew turned
          off, and the date until which a shared trip can be recorded, may be shown to its members (the payer&apos;s
          expiry date itself is not shown).
        </p>
        <LegalSubheading>When you use a transfer code</LegalSubheading>
        <p>
          When you issue a transfer code, your personal book data (records, categories, budgets, monthly summaries,
          etc.) and settings are encrypted on your device with a key derived from the code, and the ciphertext and a
          hash derived from the code are sent to our server. The server stores the ciphertext in cloud storage, and a
          hash of that hash in its database. The code and the key are never sent to our server or stored by the App, so
          we cannot read the content.
        </p>
        <LegalSubheading>What we do not collect</LegalSubheading>
        <BulletList>
          <li>your name, email address, phone number or postal address;</li>
          <li>your location, contacts or photos;</li>
          <li>the advertising identifier (IDFA);</li>
          <li>payment details such as card numbers (payments are processed by Apple);</li>
          <li>
            your personal book data (except that, when you use a transfer code, we briefly hold it encrypted in a form
            we cannot read).
          </li>
        </BulletList>
        <p>
          The App may use the camera to scan an invite QR code. The camera image is used on your device only to read the
          code, and is never saved or sent.
        </p>
      </LegalSection>

      <LegalSection id="purposes" title="3. How we use information">
        <p>We use this information only to:</p>
        <BulletList>
          <li>provide shared books (storage, syncing between members and invitations);</li>
          <li>send silent notifications that bring other members&apos; changes to your device;</li>
          <li>send record notifications that tell you another member added a record;</li>
          <li>move your data to a new device with a transfer code;</li>
          <li>
            verify Alcoin Plus purchases, decide whether you can create shared books and whether shared books can be
            recorded in, and process App Store notifications (renewals, cancellations, refunds, etc.);
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
            <strong>Amazon Web Services (AWS)</strong>: the server infrastructure for shared books. Data is processed
            and stored in the Tokyo region (Japan) using API Gateway, AWS Lambda and Amazon DynamoDB, and logs are
            stored in Amazon CloudWatch Logs. Data encrypted for a transfer code is stored temporarily in Amazon S3,
            also in the Tokyo region. The invite page is also served from AWS.
          </li>
          <li>
            <strong>Apple</strong>: the App Store (purchases, payments and subscription management) and the Apple Push
            Notification service (delivery of silent notifications and record notifications). The content of record
            notifications (book name, display name, category and amount) reaches your device through the Apple Push
            Notification service. Apple&apos;s handling of information is subject to Apple&apos;s privacy policy.
          </li>
          <li>
            <strong>Google Fonts</strong>: only the web page shown when you open an invite link
            (https://coinly.bluedoghub.com/join/…) loads fonts from Google Fonts. When it does, your browser sends
            information such as your IP address and user agent to Google. The App itself does not use Google Fonts.
          </li>
        </BulletList>
      </LegalSection>

      <LegalSection id="retention" title="5. Retention">
        <BulletList>
          <li>
            Shared book content (including copies of the details of merged trips): kept while the book has members, and
            deleted from our server when the last member leaves. After a member leaves or is removed, the expenses they
            recorded and their display name remain until the book is deleted.
          </li>
          <li>
            Data encrypted for a transfer code and its hash: deleted when the new device confirms the transfer, or when
            a new code is issued. Otherwise they stop working 24 hours after the code is issued and are then deleted
            automatically.
          </li>
          <li>Invite codes: expire 48 hours after they are issued and are then deleted automatically.</li>
          <li>
            Rate-limit counters (which may include IP addresses): expire after about 2 hours and are deleted
            automatically.
          </li>
          <li>Server logs (which include IP addresses): deleted after 30 days.</li>
          <li>
            User ID, display name, language, token hash, device token and Alcoin Plus purchase information: kept as long
            as needed to provide shared books, and deleted on request.
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
          <li>
            Data held for a transfer code is encrypted on your device, and we have neither the key to decrypt it nor the
            transfer code.
          </li>
          <li>Data stored on our server is encrypted at rest.</li>
          <li>Each part of our server has only the minimum permissions it needs, and access is restricted.</li>
          <li>
            Rate limits and similar measures protect against unauthorized access and guessing of invite codes and
            transfer codes.
          </li>
        </BulletList>
        <p>No method of transmission or storage over the internet is completely secure, however.</p>
      </LegalSection>

      <LegalSection id="your-rights" title="7. Your choices and rights">
        <BulletList>
          <li>If you don&apos;t use shared books or transfer codes, no information is sent to our server.</li>
          <li>You can leave a shared book at any time in the App.</li>
          <li>
            You can turn record notifications off for each shared book in the App, or turn off the App&apos;s
            notifications in iOS Settings.
          </li>
          <li>
            Issue a transfer code only when you use it, and do not show it to anyone: anyone who has the code can take
            over your data. After a transfer, you can delete the personal book data left on the old device in the App on
            that device.
          </li>
          <li>You can cancel Alcoin Plus in iOS Settings. Your purchase history is managed by Apple.</li>
          <li>
            To request access to, correction of, suspension of use of, or deletion of your information that we hold,
            contact us below. Because there are no accounts, we may ask for details such as the names of your shared
            books and your display name to identify you and your data.
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
          The App is not directed to children under the age of 13. Children under 13 should use shared books only under
          a parent&apos;s or guardian&apos;s supervision. If we learn that we handle information of a child under 13
          without parental consent, we will delete it promptly.
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
        <ContactBox emailLabel="Email" appLabel="App" appName="Alcoin - Smart Budget Tracker" />
        <p>
          See also:{" "}
          <Link href={alcoinPaths.terms.en} className="text-blue-600 hover:underline">
            Terms of Use
          </Link>
        </p>
      </LegalSection>
    </LegalDocument>
  );
}
