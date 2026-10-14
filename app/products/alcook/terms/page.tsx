import type { Metadata } from "next";
import Link from "next/link";
import { BulletList, ContactBox, LegalDocument, LegalSection, NumberedList } from "../_components/LegalDocument";
import { alcookAlternates, alcookPaths, alcookUrl } from "../_components/constants";

const title = "Terms of Use - Alcook";
const description = "Terms of Use for the iOS app Alcook.";

export const metadata: Metadata = {
  title,
  description,
  alternates: alcookAlternates("terms", "en"),
  openGraph: {
    title,
    description,
    url: alcookUrl("terms", "en"),
  },
};

export default function Page() {
  return (
    <LegalDocument
      lang="en"
      title="Terms of Use"
      updated="Last updated: October 14, 2026"
      note="These Terms apply from the release of Alcook. This English version is a translation for reference; the Japanese version is the governing text."
      otherLang={{ href: alcookPaths.terms.ja, label: "日本語" }}
      intro={
        <p className="text-body-md text-black-600">
          These Terms of Use (the &quot;Terms&quot;) set out the conditions for using the iOS app &quot;Alcook&quot;
          (the &quot;App&quot;) and the services that come with it, including family recipe books, the invite page and
          Alcook Plus (together, the &quot;Service&quot;), provided by Bluedog (&quot;we&quot;, &quot;us&quot;). By
          downloading or using the App, you agree to these Terms.
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
            <Link href={alcookPaths.privacy.en} className="text-alcook-600 hover:underline">
              Privacy Policy
            </Link>
            .
          </li>
        </NumberedList>
      </LegalSection>

      <LegalSection title="2. Definitions">
        <BulletList>
          <li>&quot;Your own recipe book&quot; means a recipe book stored only on your device.</li>
          <li>
            &quot;Family recipe book&quot; means a recipe book that several users view and edit together through our
            server.
          </li>
          <li>&quot;Member&quot; means a user who has joined a family recipe book.</li>
          <li>
            &quot;Creator&quot; means the member who created a family recipe book (or, after the creator leaves, the
            member who took over the role under Section 5).
          </li>
          <li>
            &quot;Payer&quot; means the member, set for each family recipe book, whose Alcook Plus keeps that book
            usable. When a family recipe book is created, its creator is the payer.
          </li>
          <li>
            &quot;Content&quot; means recipes (dish name, notes, where they came from and that page&apos;s address),
            ingredients and amounts, screenshots, dish photos, cooking records (&quot;Made it!&quot;: the date and the
            member who cooked), meal plans (how each day is decided and its dish, weekly rules, past menus), the check
            state of the shopping list, the recipe book&apos;s name and any other information you enter into the
            Service.
          </li>
          <li>
            &quot;Alcook Plus&quot; means the auto-renewable subscription required to create family recipe books and to
            keep family recipe books usable as their payer.
          </li>
        </BulletList>
      </LegalSection>

      <LegalSection title="3. The Service">
        <NumberedList>
          <li>Your own recipe book is free. Its data is stored only on your device and is never sent to our server.</li>
          <li>
            Creating a family recipe book requires Alcook Plus. Joining a family recipe book you are invited to is free.
          </li>
          <li>
            Family recipe books need an internet connection. There is no sign-up or sign-in: the first time you create
            or join a family recipe book, a random user ID is created on your device and used together with the name you
            enter.
          </li>
          <li>
            Dishes chosen by &quot;Surprise me&quot; and &quot;New dish&quot;, and next week&apos;s suggestions, are
            picked automatically by the App from your recipe book. They are not recommendations from us.
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
            because your device is lost, broken or reset, you may lose access to the family recipe books you were in.
            You can join again with a new invite, but we do not guarantee that a lost user ID can be recovered.
          </li>
          <li>
            We keep no copy of your own recipe book. Whether its data is included in device backups (such as iCloud
            Backup) depends on your device&apos;s settings.
          </li>
        </NumberedList>
      </LegalSection>

      <LegalSection title="5. Family recipe books">
        <NumberedList>
          <li>
            Members can view a family recipe book&apos;s Content, and add, change and delete recipes, ingredients,
            screenshots, dish photos, cooking records, meal plans and the shopping list, and otherwise change the book.
            This includes what other members added. While a family recipe book is view-only, nothing can be changed, as
            described in Section 6.
          </li>
          <li>
            A family recipe book&apos;s Content and the names members enter are visible to every member of that book.
            You are responsible for what you add, and must not add anything that infringes others&apos; rights or
            personal information that does not need to be shared.
          </li>
          <li>
            Recipes you add to a family recipe book from your own recipe book (including how many times you made them)
            become Content of the family recipe book: they are stored on our server and visible to every member.
          </li>
          <li>
            You can leave a family recipe book at any time. Its content is then removed from your device, but the
            Content you added and your name remain visible to the other members until the book is deleted.
          </li>
          <li>
            The creator can remove other members from a family recipe book. A removed member can no longer view the
            book, but the Content they added and their name stay in the book, and the remaining members can change or
            delete them. Removing a member invalidates the book&apos;s current invite code. If the creator leaves, the
            remaining member who joined first becomes the creator.
          </li>
          <li>
            When the last member leaves, the family recipe book and its Content (including screenshots and dish photos)
            are deleted from our server and cannot be restored.
          </li>
          <li>
            Images of screenshots and dish photos that a family recipe book no longer uses (deleted, replaced or
            removed) are deleted from our server once they have been unused for 7 days.
          </li>
          <li>
            Invite codes and invite links expire 48 hours after they are issued. Anyone who has a valid code or link can
            join, so be careful whom you share it with and how. A family recipe book can have up to 20 members.
          </li>
          <li>
            Disputes between members about Content are for the members to resolve. We have no obligation to intervene.
          </li>
        </NumberedList>
      </LegalSection>

      <LegalSection title="6. Alcook Plus">
        <NumberedList>
          <li>
            Alcook Plus is an auto-renewable subscription offered through Apple&apos;s App Store for ¥100 per month or
            ¥1,000 per year (tax included). The price shown in the App Store at the time of purchase applies.
          </li>
          <li>
            Both plans come with a 1-month free trial (only where Apple&apos;s conditions are met; an Apple ID that has
            used the free trial cannot use it again). Unless auto-renew is turned off at least 24 hours before the trial
            ends, the trial converts automatically into a paid subscription when it ends, and you are charged.
          </li>
          <li>
            Payment is charged to your Apple ID when you confirm the purchase (or, with a free trial, when the trial
            ends).
          </li>
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
          <li>Alcook Plus applies to the one user (user ID) who made the purchase.</li>
          <li>
            If Alcook Plus ends (cancellation, expiry, refund, etc.), you can no longer create new family recipe books.
          </li>
          <li>
            If the payer&apos;s Alcook Plus ends, the family recipe book becomes view-only for every member: Content can
            no longer be added, changed or deleted, and the book can no longer be renamed. Viewing, the member list and
            invites, joining, leaving and removing members remain possible. While a renewal payment has a problem and
            Apple is retrying it (the billing grace period), Alcook Plus is treated as continuing.
          </li>
          <li>
            A member with Alcook Plus can take over as a family recipe book&apos;s payer at any time, which makes the
            book usable again. If the payer leaves or is removed, the member with Alcook Plus who joined first (or, if
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
          <li>
            copy or publish works of others, such as screenshots of recipe sites or social media posts, beyond what
            copyright and other laws allow;
          </li>
          <li>harass other members or impersonate anyone;</li>
          <li>
            place an excessive load on our servers or network, access them without authorization, try to guess invite
            codes, or otherwise interfere with the operation of the Service;
          </li>
          <li>modify, reverse engineer, decompile or disassemble the App, except to the extent permitted by law;</li>
          <li>use, or let others use, Alcook Plus by illegitimate means; or</li>
          <li>do anything else we reasonably consider inappropriate as equivalent to the above.</li>
        </BulletList>
      </LegalSection>

      <LegalSection title="8. Restriction and suspension">
        <NumberedList>
          <li>
            If you violate these Terms, or we reasonably believe you may, we may without prior notice restrict or
            suspend your use of family recipe books, delete the Content concerned, or take other necessary measures.
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
            We may end all or part of the Service, including family recipe books. If we do, we will try to announce it
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
            Content belongs to the user who entered it or to its rightful owner. We handle Content only as needed to
            provide the Service (storage, syncing between members and display).
          </li>
        </NumberedList>
      </LegalSection>

      <LegalSection title="10. Disclaimer and limitation of liability">
        <NumberedList>
          <li>
            The Service is provided as is. We do not guarantee that it fits your particular purpose, is free of defects
            or is always available.
          </li>
          <li>
            The App helps you plan meals and shop. We do not check or guarantee the accuracy or safety of the recipes
            you save (ingredients, amounts, steps, allergens, nutrition, hygiene, etc.). Cooking and eating are at your
            own judgment and responsibility.
          </li>
          <li>
            Amounts on the shopping list are added up mechanically from the amounts as entered. We do not guarantee that
            the totals are correct.
          </li>
          <li>
            Your own recipe book is stored only on your device. We cannot restore data lost because a device is broken
            or lost, the App is deleted, or similar.
          </li>
          <li>
            In family recipe books, syncing may be delayed by network conditions, and simultaneous edits by several
            members may give unexpected results. The notification for next week&apos;s suggestions may arrive late or
            not at all, depending on your device&apos;s settings and state.
          </li>
          <li>If you suffer damage caused by our intent or gross negligence, we will compensate you for it.</li>
          <li>
            If you suffer damage caused by our slight negligence, we will compensate you only for direct damage that
            would ordinarily arise, up to the total you paid for Alcook Plus in the 12 months before the damage occurred
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
        <ContactBox emailLabel="Email" appLabel="App" appName="Alcook" />
      </LegalSection>
    </LegalDocument>
  );
}
