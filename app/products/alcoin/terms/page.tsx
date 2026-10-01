import type { Metadata } from "next";
import Link from "next/link";
import { BulletList, ContactBox, LegalDocument, LegalSection, NumberedList } from "../_components/LegalDocument";
import { alcoinAlternates, alcoinPaths, alcoinUrl } from "../_components/constants";

const title = "Terms of Use - Alcoin";
const description = "Terms of Use for the iOS app Alcoin.";

export const metadata: Metadata = {
  title,
  description,
  alternates: alcoinAlternates("terms", "en"),
  openGraph: {
    title,
    description,
    url: alcoinUrl("terms", "en"),
  },
};

export default function Page() {
  return (
    <LegalDocument
      lang="en"
      title="Terms of Use"
      updated="Last updated: October 1, 2026"
      note="These Terms apply from the release of Alcoin 2.0.0. This English version is a translation for reference; the Japanese version is the governing text."
      otherLang={{ href: alcoinPaths.terms.ja, label: "日本語" }}
      intro={
        <p className="text-body-md text-black-600">
          These Terms of Use (the &quot;Terms&quot;) set out the conditions for using the iOS app &quot;Alcoin&quot;
          (formerly &quot;Coinly&quot;) (the &quot;App&quot;) and the services that come with it, including shared
          books, the invite page and Alcoin Plus (together, the &quot;Service&quot;), provided by Bluedog
          (&quot;we&quot;, &quot;us&quot;). By downloading or using the App, you agree to these Terms.
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
            <Link href={alcoinPaths.privacy.en} className="text-blue-600 hover:underline">
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
            &quot;Creator&quot; means the member who created a shared book (or, after the creator leaves, the member who
            took over the role under Section 5).
          </li>
          <li>
            &quot;Payer&quot; means the member, set for each shared book, whose Alcoin Plus keeps that book recordable.
            When a shared book is created, its creator is the payer.
          </li>
          <li>
            &quot;Period book&quot; means a book for a set period, such as a trip, with one budget for the whole period.
            A period book used alone (a &quot;solo period book&quot;) is stored only on your device, like the personal
            book; a period book used with members (a &quot;shared period book&quot;) is treated as a shared book.
          </li>
          <li>
            &quot;Merging&quot; means adding a period book&apos;s total spending to another book as a single entry.
          </li>
          <li>
            &quot;Transfer code&quot; means the 12-character code the App issues to move your personal book and solo
            period book data and your use of shared books to a new device when you change devices.
          </li>
          <li>
            &quot;Records&quot; means a book&apos;s name, icon, currency and period, expenses (amount, category, date,
            the member who recorded them and conversion details), categories, budgets, copies of the details of merged
            period books and any other information you enter into the Service.
          </li>
          <li>
            &quot;Alcoin Plus&quot; means the auto-renewable subscription required to create shared books, to keep
            shared books recordable as their payer, and to use a second or further solo period book at the same time.
          </li>
        </BulletList>
      </LegalSection>

      <LegalSection title="3. The Service">
        <NumberedList>
          <li>
            The personal book is free. Its data is stored only on your device and is never sent to our server (except
            that, when you use a transfer code under Section 4, we briefly hold it encrypted in a form we cannot read).
          </li>
          <li>
            Creating a shared book (including a shared period book) requires Alcoin Plus. Joining a shared book you are
            invited to is free.
          </li>
          <li>
            You can use one solo period book at a time (one that has been neither merged nor put away) for free. Using a
            second or further solo period book at the same time (creating a new one, or restoring one you put away)
            requires Alcoin Plus.
          </li>
          <li>
            Each book has its own currency. Conversions from other currencies use rates you enter. The App never fetches
            or provides exchange rates, and changing a book&apos;s currency does not convert amounts already recorded.
          </li>
          <li>
            Shared books need an internet connection. There is no sign-up or sign-in: the first time you create or join
            a shared book, or when you issue a transfer code, a random user ID is created on your device and used
            together with the display name you enter.
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
          <li>
            When you change devices, you can issue a transfer code on your old device and enter it on the new one to
            move your personal book and solo period book data (records, categories, budgets, periods, etc.) and
            settings, your user ID, your shared book memberships and your Alcoin Plus status to the new device. A
            transfer code is valid for 24 hours, and stops working once the transfer is completed or you issue a new
            code.
          </li>
          <li>
            Anyone who has your transfer code can take over that data. Do not show it to anyone, and keep it safe at
            your own responsibility. We do not store transfer codes, so a code cannot be shown again.
          </li>
          <li>
            Once a transfer is completed, the old device can no longer use shared books. The personal book and solo
            period book data on the old device stays there until you delete it. Anything recorded on the old device
            after the code was issued is not transferred, and any personal book data already on the new device is
            replaced by the transferred data.
          </li>
        </NumberedList>
      </LegalSection>

      <LegalSection title="5. Shared books">
        <NumberedList>
          <li>
            Members can view a shared book&apos;s records, and add, edit and delete expenses and otherwise change the
            book. This includes expenses recorded by other members (except merged entries, which only the member who
            merged them can change or delete). While a shared book is view-only, recording and editing are not possible,
            as described in Section 6.
          </li>
          <li>
            A shared book&apos;s records and members&apos; display names are visible to every member. You are
            responsible for what you record, and must not record anything that infringes others&apos; rights or personal
            information that does not need to be shared.
          </li>
          <li>
            Display names are set for each shared book and can be changed at any time. The new display name is shown to
            every member of that book.
          </li>
          <li>
            You can leave a shared book at any time. After you leave, the expenses you recorded and your display name
            remain visible to the other members until the book is deleted.
          </li>
          <li>
            The creator can remove other members from a shared book. A removed member can no longer view the book, but
            the expenses they recorded and their display name stay in the book, and the remaining members can edit or
            delete them. Removing a member invalidates the book&apos;s current invite code. If the creator leaves, the
            remaining member who joined first becomes the creator.
          </li>
          <li>
            When a member adds a record to a shared book, the other members who allow notifications receive a
            notification with the book&apos;s name, the recorder&apos;s display name, the category and the amount (for a
            merged period book, its name and total). Each member can turn these notifications on or off for each shared
            book. Notifications may appear on your device&apos;s lock screen.
          </li>
          <li>
            When a period book is merged into a shared book, a copy of its details (dates, categories, amounts, notes,
            the display names of those who recorded them, etc.) is stored in that shared book together with the merged
            entry, and is visible to every member, including members who were not in that period book. Later changes to
            the period book do not update the copy automatically.
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

      <LegalSection title="6. Alcoin Plus">
        <NumberedList>
          <li>
            Alcoin Plus is an auto-renewable subscription offered through Apple&apos;s App Store for ¥100 per month or
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
          <li>Alcoin Plus applies to the one user (user ID) who made the purchase.</li>
          <li>
            If Alcoin Plus ends (cancellation, expiry, refund, etc.), you can no longer create new shared books, or
            create a second or further solo period book or restore one you put away. A solo period book you are already
            using stays usable.
          </li>
          <li>
            If the payer&apos;s Alcoin Plus ends, the shared book becomes view-only for every member: expenses can no
            longer be recorded, edited or deleted, and budgets, categories and book settings can no longer be changed.
            Viewing, the member list and invites, joining, changing your display name, leaving and removing members
            remain possible.
          </li>
          <li>
            Notwithstanding the preceding paragraph, every member can keep recording in a shared period book until the
            earlier of 30 days after the payer&apos;s Alcoin Plus ended and the end of the period&apos;s last day. After
            that it becomes view-only, but it can still be merged into another book.
          </li>
          <li>
            A member with Alcoin Plus can take over as a shared book&apos;s payer at any time, which makes the book
            recordable again. If the payer leaves or is removed, the member with Alcoin Plus who joined first (or, if
            there is none, the creator) becomes the payer.
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
            codes or transfer codes, or otherwise interfere with the operation of the Service;
          </li>
          <li>use another person&apos;s transfer code without their consent;</li>
          <li>modify, reverse engineer, decompile or disassemble the App, except to the extent permitted by law;</li>
          <li>use, or let others use, Alcoin Plus by illegitimate means; or</li>
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
            The rights to the App&apos;s software, design, characters, logo and other content belong to us or their
            rightful owners.
          </li>
          <li>
            Your records belong to the user who recorded them. We handle records only as needed to provide the Service
            (storage, syncing between members, display and record notifications).
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
            Currency conversions are based on rates you enter. We do not guarantee that a conversion matches actual
            exchange rates or amounts charged.
          </li>
          <li>
            Personal book data is stored only on your device. We cannot restore data lost because a device is broken or
            lost, the App is deleted, or similar.
          </li>
          <li>
            In shared books, syncing may be delayed by network conditions, and simultaneous edits by several members may
            give unexpected results. Record notifications may arrive late or not at all.
          </li>
          <li>
            Except where caused by our intent or negligence, we are not responsible for the consequences of a transfer
            code expiring or becoming known to others.
          </li>
          <li>If you suffer damage caused by our intent or gross negligence, we will compensate you for it.</li>
          <li>
            If you suffer damage caused by our slight negligence, we will compensate you only for direct damage that
            would ordinarily arise, up to the total you paid for Alcoin Plus in the 12 months before the damage occurred
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
        <ContactBox emailLabel="Email" appLabel="App" appName="Alcoin - Smart Budget Tracker" />
      </LegalSection>
    </LegalDocument>
  );
}
