import type { Metadata } from "next";
import Link from "next/link";
import { BulletList, ContactBox, LegalDocument, LegalSection, NumberedList } from "../_components/LegalDocument";
import { coinlyPaths } from "../_components/constants";

export const metadata: Metadata = {
  title: "Terms of Use - Coinly",
  description: "Terms of Use for the iOS app Coinly.",
};

export default function Page() {
  return (
    <LegalDocument
      lang="en"
      title="Terms of Use"
      updated="Last updated: September 29, 2026"
      note="These Terms apply from the release of Coinly 2.0.0. This English version is a translation for reference; the Japanese version is the governing text."
      otherLang={{ href: coinlyPaths.terms.ja, label: "日本語" }}
      intro={
        <p className="text-body-md text-black-600">
          These Terms of Use (the &quot;Terms&quot;) set out the conditions for using the iOS app &quot;Coinly&quot;
          (the &quot;App&quot;) and the services that come with it, including shared books, the invite page and Coinly
          Plus (together, the &quot;Service&quot;), provided by Bluedog (&quot;we&quot;, &quot;us&quot;). By downloading
          or using the App, you agree to these Terms.
        </p>
      }
    >
      <LegalSection title="1. Scope">
        <NumberedList>
          <li>These Terms apply to every relationship between you and us regarding the use of the Service.</li>
          <li>
            Anything not covered by these Terms is governed by Apple&apos;s Licensed Application End User License
            Agreement (the &quot;Standard EULA&quot;). Where these Terms and the Standard EULA differ, these Terms
            prevail to the extent permitted by law.
          </li>
          <li>
            How we handle your information is described in our separate{" "}
            <Link href={coinlyPaths.privacy.en} className="text-blue-600 hover:underline">
              Privacy Policy
            </Link>
            .
          </li>
        </NumberedList>
      </LegalSection>

      <LegalSection title="2. Definitions">
        <BulletList>
          <li>&quot;Personal book&quot; means a book stored only on your device.</li>
          <li>
            &quot;Shared book&quot; means a book that several users record, view and edit together through our server.
          </li>
          <li>&quot;Member&quot; means a user who has joined a shared book.</li>
          <li>
            &quot;Records&quot; means a book&apos;s name and icon, expenses (amount, category, date and the member who
            recorded them), categories, monthly budgets and any other information you enter into the Service.
          </li>
          <li>&quot;Coinly Plus&quot; means the auto-renewable subscription required to create shared books.</li>
        </BulletList>
      </LegalSection>

      <LegalSection title="3. The Service">
        <NumberedList>
          <li>The personal book is free. Its data is stored only on your device and is never sent to our server.</li>
          <li>Creating a shared book requires Coinly Plus. Joining a shared book you are invited to is free.</li>
          <li>
            Shared books need an internet connection. There is no sign-up or sign-in: the first time you create or join
            a shared book, a random user ID is created on your device and used together with the display name you enter.
          </li>
          <li>
            We may change or add features. If a change would significantly disadvantage you, we will try to announce it
            in advance in the App or on our website.
          </li>
        </NumberedList>
      </LegalSection>

      <LegalSection title="4. Your device and user ID">
        <NumberedList>
          <li>You are responsible for your device.</li>
          <li>
            Your user ID and credentials are stored on your device (in the iOS Keychain). If they are lost, for example
            because your device is lost, broken or reset, you may lose access to the shared books you were in. We do not
            guarantee that a lost user ID can be recovered.
          </li>
        </NumberedList>
      </LegalSection>

      <LegalSection title="5. Shared books">
        <NumberedList>
          <li>
            Members can view a shared book&apos;s records, and add, edit and delete expenses and otherwise change the
            book. This includes expenses recorded by other members.
          </li>
          <li>
            A shared book&apos;s records and members&apos; display names are visible to every member. You are
            responsible for what you record, and must not record anything that infringes others&apos; rights or personal
            information that does not need to be shared.
          </li>
          <li>
            You can leave a shared book at any time. After you leave, the expenses you recorded and your display name
            remain visible to the other members until the book is deleted.
          </li>
          <li>
            When the last member leaves, the shared book and its records are deleted from our server and cannot be
            restored.
          </li>
          <li>
            Invite codes and invite links expire 48 hours after they are issued. Anyone who has a valid code or link can
            join, so be careful whom you share it with and how.
          </li>
          <li>
            Disputes between members about records are for the members to resolve. We have no obligation to intervene.
          </li>
        </NumberedList>
      </LegalSection>

      <LegalSection title="6. Coinly Plus">
        <NumberedList>
          <li>
            Coinly Plus is an auto-renewable subscription offered through Apple&apos;s App Store for ¥100 per month or
            ¥1,000 per year (tax included). The price shown in the App Store at the time of purchase applies.
          </li>
          <li>Payment is charged to your Apple ID when you confirm the purchase.</li>
          <li>
            The subscription renews automatically for the same period and price unless auto-renew is turned off at least
            24 hours before the end of the current period. Your account is charged for renewal within the 24 hours
            before the end of the current period.
          </li>
          <li>
            You can manage or cancel the subscription at any time in iOS Settings → [your name] → Subscriptions.
            Deleting the App does not cancel the subscription.
          </li>
          <li>Refunds are handled by Apple under Apple&apos;s policies. We cannot issue refunds directly.</li>
          <li>Coinly Plus applies to the one user (user ID) who made the purchase.</li>
          <li>
            If Coinly Plus ends (cancellation, expiry, refund, etc.), you can no longer create new shared books, but the
            shared books you already created keep working, and members can still view, record and join them.
          </li>
          <li>If the price changes, you will be notified in advance through Apple&apos;s process.</li>
        </NumberedList>
      </LegalSection>

      <LegalSection title="7. Prohibited acts">
        <p>When using the Service, you must not:</p>
        <BulletList>
          <li>violate laws or public order and morals;</li>
          <li>engage in acts connected with criminal activity;</li>
          <li>infringe the intellectual property, privacy, reputation or other rights or interests of others;</li>
          <li>harass other members or impersonate anyone;</li>
          <li>
            place an excessive load on our servers or network, access them without authorization, try to guess invite
            codes, or otherwise interfere with the operation of the Service;
          </li>
          <li>modify, reverse engineer, decompile or disassemble the App, except to the extent permitted by law;</li>
          <li>use, or let others use, Coinly Plus by illegitimate means; or</li>
          <li>do anything else we reasonably consider inappropriate as equivalent to the above.</li>
        </BulletList>
      </LegalSection>

      <LegalSection title="8. Restriction and suspension">
        <NumberedList>
          <li>
            If you violate these Terms, or we reasonably believe you may, we may without prior notice restrict or
            suspend your use of shared books, delete the records concerned, or take other necessary measures.
          </li>
          <li>
            We may temporarily suspend all or part of the Service:
            <BulletList>
              <li>for system maintenance, inspection or updates; or</li>
              <li>
                because of natural disasters, power or network outages, outages of external services (such as Apple or
                Amazon Web Services), or other unavoidable reasons.
              </li>
            </BulletList>
          </li>
          <li>
            We may end all or part of the Service, including shared books. If we do, we will try to announce it
            reasonably in advance in the App or on our website.
          </li>
        </NumberedList>
      </LegalSection>

      <LegalSection title="9. Ownership">
        <NumberedList>
          <li>
            The rights to the App&apos;s software, design, character (the Maltese), logo and other content belong to us
            or their rightful owners.
          </li>
          <li>
            Your records belong to the user who recorded them. We handle records only as needed to provide the Service
            (storage, syncing between members and display).
          </li>
        </NumberedList>
      </LegalSection>

      <LegalSection title="10. Disclaimer and limitation of liability">
        <NumberedList>
          <li>
            The Service is provided as is. We do not guarantee that it fits your particular purpose, is free of defects
            or is always available.
          </li>
          <li>The App helps you keep track of spending. It does not give financial, tax or investment advice.</li>
          <li>
            Personal book data is stored only on your device. We cannot restore data lost because a device is broken or
            lost, the App is deleted, or similar.
          </li>
          <li>
            In shared books, syncing may be delayed by network conditions, and simultaneous edits by several members may
            give unexpected results.
          </li>
          <li>If you suffer damage caused by our intent or gross negligence, we will compensate you for it.</li>
          <li>
            If you suffer damage caused by our slight negligence, we will compensate you only for direct damage that
            would ordinarily arise, up to the total you paid for Coinly Plus in the 12 months before the damage occurred
            (or ¥1,000 if you paid nothing).
          </li>
        </NumberedList>
      </LegalSection>

      <LegalSection title="11. Changes to these Terms">
        <NumberedList>
          <li>
            We may change these Terms in accordance with Article 548-4 of the Civil Code of Japan. We will announce the
            changed Terms and their effective date on this page or in the App before they take effect.
          </li>
          <li>
            For significant changes that disadvantage you, we will allow a reasonable period before they take effect.
          </li>
        </NumberedList>
      </LegalSection>

      <LegalSection title="12. Severability">
        <p>
          If any provision of these Terms, or part of one, is held invalid or unenforceable under the Consumer Contract
          Act or other laws, the rest of these Terms remains in effect.
        </p>
      </LegalSection>

      <LegalSection title="13. Governing law and jurisdiction">
        <NumberedList>
          <li>These Terms are governed by and interpreted under the laws of Japan.</li>
          <li>
            Any dispute between you and us regarding the Service shall be subject to the exclusive jurisdiction of the
            Tokyo District Court as the court of first instance.
          </li>
        </NumberedList>
      </LegalSection>

      <LegalSection title="14. Governing language">
        <p>
          The Japanese version of these Terms is the governing text. This English version is a translation for
          reference; if they differ, the Japanese version prevails.
        </p>
      </LegalSection>

      <LegalSection title="15. Contact">
        <p>If you have any questions about these Terms, please contact us:</p>
        <ContactBox emailLabel="Email" appLabel="App" appName="Coinly - Smart Budget Tracker" />
      </LegalSection>
    </LegalDocument>
  );
}
