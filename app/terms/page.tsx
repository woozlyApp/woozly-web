import type { Metadata } from "next";
import { LegalLayout, Sec, Sub, Ul, PH, A } from "@/components/LegalLayout";
import { CONTACT_EMAIL, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of use for the Woozly app — EULA and service agreement.",
};

const LAST_UPDATED = "[LAST_UPDATED — fill before publishing]";

const TOC = [
  { id: "agreement",       label: "Agreement to terms" },
  { id: "eligibility",     label: "Eligibility (18+)" },
  { id: "account",         label: "Your account" },
  { id: "license",         label: "License to use" },
  { id: "ugc",             label: "User-generated content" },
  { id: "prohibited",      label: "Prohibited conduct" },
  { id: "apple-ugc",       label: "Apple UGC requirements" },
  { id: "subscriptions",   label: "Subscriptions & billing" },
  { id: "safety",          label: "Real-world safety" },
  { id: "moderation",      label: "Moderation & enforcement" },
  { id: "disclaimers",     label: "Disclaimers" },
  { id: "liability",       label: "Limitation of liability" },
  { id: "indemnification", label: "Indemnification" },
  { id: "disputes",        label: "Disputes & governing law" },
  { id: "changes",         label: "Changes to these terms" },
  { id: "contact",         label: "Contact" },
];

export default function TermsPage() {
  return (
    <LegalLayout
      title="Terms of Service"
      description="These terms govern your use of the Woozly app and constitute the End-User License Agreement (EULA) between you and Woozly."
      lastUpdated={LAST_UPDATED}
      notice
      toc={TOC}
    >
      {/* 1 */}
      <Sec id="agreement" title="1. Agreement to terms">
        <p>
          By downloading, installing, or using Woozly ("the app", "the service", "Woozly"), you
          agree to be bound by these Terms of Service ("Terms"). If you do not agree, do not
          download or use the app.
        </p>
        <p>
          Woozly is operated by <PH>[COMPANY_LEGAL_NAME]</PH>, a company registered at{" "}
          <PH>[REGISTERED_ADDRESS]</PH> ("we", "us", "our"). Our website is{" "}
          <A href={SITE_URL}>{SITE_URL}</A>. These Terms form a binding legal agreement between you
          and <PH>[COMPANY_LEGAL_NAME]</PH>.
        </p>
        <p>
          These Terms also serve as the End-User License Agreement (EULA) for the Woozly iOS
          application distributed through the Apple App Store. Apple is not a party to these
          Terms and is not responsible for the app or its content.
        </p>
      </Sec>

      {/* 2 */}
      <Sec id="eligibility" title="2. Eligibility">
        <p>
          <strong>You must be at least 18 years old to use Woozly.</strong> By creating an account
          you confirm that you are 18 or older. If we discover that an account belongs to someone
          under 18, we will permanently terminate it without notice and delete associated data.
        </p>
        <p>
          Woozly is currently available on iOS only. You must have a compatible device and a valid
          Apple ID to access the app.
        </p>
        <p>
          By using Woozly you also represent that (a) you are not prohibited from using the service
          under the laws of your jurisdiction, and (b) you have not previously been banned from the
          service.
        </p>
      </Sec>

      {/* 3 */}
      <Sec id="account" title="3. Your account">
        <Ul items={[
          "You are responsible for keeping your login credentials secure and for all activity that occurs under your account.",
          "You may only maintain one account. Creating multiple accounts to evade a ban is prohibited.",
          "You must provide accurate, current information and keep your profile truthful.",
          "You must not create an account on behalf of another person or use another person's identity.",
          "You must notify us immediately at " + CONTACT_EMAIL + " if you believe your account has been compromised.",
        ]} />
      </Sec>

      {/* 4 */}
      <Sec id="license" title="4. License to use">
        <p>
          Subject to your compliance with these Terms, we grant you a limited, non-exclusive,
          non-transferable, revocable licence to download and use Woozly on a device you own or
          control, solely for your personal, non-commercial use.
        </p>
        <p>
          This licence does not include the right to (a) sublicense, sell, resell, or commercially
          exploit the app; (b) reverse-engineer, decompile, or disassemble the app; (c) create
          derivative works based on the app; or (d) use the app in a way that violates these Terms.
        </p>
        <p>
          All intellectual property rights in Woozly (software, design, brand, AI models) remain
          with <PH>[COMPANY_LEGAL_NAME]</PH>.
        </p>
      </Sec>

      {/* 5 */}
      <Sec id="ugc" title="5. User-generated content">
        <Sub title="You own your content">
          <p>
            You retain ownership of the plants, notes, photos, and messages you create. By posting
            content on Woozly, you grant us a non-exclusive, royalty-free, worldwide licence to
            store, reproduce, transmit, display, and distribute that content solely as necessary to
            operate and provide the service.
          </p>
          <p>
            This licence ends when you delete the content or your account, subject to caching,
            backup retention, and legal-hold periods.
          </p>
        </Sub>
        <Sub title="Your responsibilities">
          <p>You confirm that any content you post:</p>
          <Ul items={[
            "Is yours to share (you own it or have permission to use it).",
            "Does not infringe any intellectual property, privacy, or other third-party rights.",
            "Complies with these Terms and our Community Guidelines.",
            "Does not contain malware, scripts, or code intended to harm the service or other users.",
          ]} />
        </Sub>
        <Sub title="Plants and notes">
          <p>
            Plants (intent pins) and notes (sticky notes at places) are visible to other users who
            are present at the same place. Do not post anything in a plant or note that you would
            not want nearby strangers to see.
          </p>
        </Sub>
      </Sec>

      {/* 6 */}
      <Sec id="prohibited" title="6. Prohibited conduct">
        <p>You agree not to use Woozly to:</p>
        <Ul items={[
          "Harass, threaten, stalk, bully, intimidate, or abuse any other user.",
          "Send unsolicited or repetitive messages (spam).",
          "Impersonate any person or entity, or misrepresent your affiliation.",
          "Post or transmit sexually explicit, graphic, violent, hateful, or obscene content.",
          "Solicit, recruit, or attempt to contact minors in any inappropriate way.",
          "Doxx or share another person's private information without their express consent.",
          "Join a place you are not physically present at.",
          "Use automated tools (bots, scripts, crawlers) to interact with the service.",
          "Scrape, harvest, or collect user data without authorisation.",
          "Interfere with, disrupt, or attempt to gain unauthorised access to Woozly or its infrastructure.",
          "Use the service for any unlawful purpose or in violation of any applicable laws.",
          "Solicit or attempt to engage in commercial transactions with other users (escorting, solicitation, sales of goods/services) without our authorisation.",
          "Discriminate against or promote hatred of any person or group based on a protected characteristic.",
        ]} />
      </Sec>

      {/* 7 */}
      <Sec id="apple-ugc" title="7. Apple UGC requirements">
        <p>
          Woozly allows users to generate and share content within the app. In compliance with
          Apple App Store guidelines, the following requirements apply:
        </p>
        <Sub title="(a) Zero tolerance for objectionable content and abusive users">
          <p>
            Woozly has zero tolerance for objectionable content (content that is abusive,
            exploitative, hateful, sexually explicit, harmful to minors, or otherwise violating
            these Terms or our Community Guidelines) and for abusive users.
          </p>
        </Sub>
        <Sub title="(b) Reporting mechanism">
          <p>
            Users can report any other user, plant, note, or message directly within the app at
            any time. To report: tap the three-dot menu on the relevant content or profile →
            "Report." Reports are reviewed by our moderation team.
          </p>
        </Sub>
        <Sub title="(c) Blocking mechanism">
          <p>
            Users can block any other user at any time. To block: tap the three-dot menu on a
            profile or message → "Block." Blocking prevents all future contact and removes the
            blocked user from your discovery feed.
          </p>
        </Sub>
        <Sub title="(d) Content filtering and 24-hour removal">
          <p>
            We use a combination of automated filtering and human moderation. Reports of
            objectionable content or abusive users are acted on within 24 hours of receipt.
            Confirmed violations result in content removal and, where appropriate, account
            suspension or permanent termination.
          </p>
        </Sub>
      </Sec>

      {/* 8 */}
      <Sec id="subscriptions" title="8. Subscriptions & billing">
        <Sub title="Free tier">
          <p>
            Woozly is free to download and use. The free tier includes joining places, dropping
            plants (2 active, 3 per week), swiping the discovery deck (20 waters/day, 1 super
            like/day), mutual matching, end-to-end encrypted text chat, and basic place features.
          </p>
        </Sub>
        <Sub title="Premium (Aura)">
          <p>
            Woozly Premium ("Aura") is an optional subscription that unlocks additional features.
            Current display pricing (actual prices vary by region and are set by the App Store):
          </p>
          <Ul items={[
            "Weekly: $4.99 per week (auto-renews weekly)",
            "Monthly: $14.99 per month (auto-renews monthly)",
          ]} />
          <p>
            <strong>There is no annual plan.</strong> Prices shown are USD display prices; the
            price charged to you is the App Store price in your local currency.
          </p>
        </Sub>
        <Sub title="Billing and cancellation">
          <Ul items={[
            "All purchases are processed through Apple In-App Purchase. We do not hold your payment card details.",
            "Subscriptions automatically renew unless cancelled at least 24 hours before the end of the current billing period.",
            "Manage or cancel your subscription: App Store → your Apple ID → Subscriptions → Woozly.",
            "Cancellation takes effect at the end of the current paid period. You will not receive a refund for the unused portion.",
            "Refunds are handled by Apple in accordance with Apple's refund policy.",
            "We may change subscription prices with reasonable notice. Price changes take effect at your next renewal.",
          ]} />
        </Sub>
      </Sec>

      {/* 9 */}
      <Sec id="safety" title="9. Real-world safety">
        <p>
          <strong>
            Woozly facilitates introductions between strangers who may choose to meet in person.
            We do not conduct background checks, identity verification, or criminal record
            screening on any users. Meeting someone in person carries inherent risk.
          </strong>
        </p>
        <p>We strongly recommend:</p>
        <Ul items={[
          "Meeting for the first time in a busy public place.",
          "Telling a trusted person where you are going and who you are meeting.",
          "Trusting your instincts — if something feels wrong, leave.",
          "Not sharing financial information, home address, or other sensitive personal details.",
          "Blocking and reporting users who make you feel unsafe.",
        ]} />
        <p>
          Woozly is not liable for the conduct of users on or off the platform. By using the
          service you accept responsibility for your own safety when meeting other users.
        </p>
      </Sec>

      {/* 10 */}
      <Sec id="moderation" title="10. Moderation & enforcement">
        <p>
          We reserve the right to remove any content and to suspend or permanently terminate any
          account that, in our sole discretion, violates these Terms or our Community Guidelines.
          We may act without prior notice.
        </p>
        <p>
          Reports of objectionable content or abusive users submitted through the in-app reporting
          tool are acted on within 24 hours of receipt. We may also proactively moderate content.
        </p>
        <p>
          Enforcement actions may include: content removal, temporary suspension, or permanent
          termination. Serious violations — including any item in the zero-tolerance list in our
          Community Guidelines — result in immediate permanent termination and, where required
          by law, reporting to authorities.
        </p>
        <p>
          If you believe your account was actioned in error, contact us at{" "}
          <A href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</A>. We review appeals on a
          case-by-case basis but are not obligated to restore access.
        </p>
      </Sec>

      {/* 11 */}
      <Sec id="disclaimers" title="11. Disclaimers">
        <p>
          Woozly is provided <strong>"as is"</strong> and <strong>"as available"</strong> without
          warranties of any kind, express or implied, including but not limited to warranties of
          merchantability, fitness for a particular purpose, title, or non-infringement.
        </p>
        <p>
          We do not warrant that the service will be uninterrupted, error-free, secure, or free
          from viruses or harmful components. We do not guarantee that any particular result will
          be achieved through use of the service — including that you will make connections or
          meet people.
        </p>
        <p>
          We may discontinue, modify, or restrict the service at any time without liability.
        </p>
      </Sec>

      {/* 12 */}
      <Sec id="liability" title="12. Limitation of liability">
        <p>
          To the fullest extent permitted by applicable law, <PH>[COMPANY_LEGAL_NAME]</PH>, its
          officers, directors, employees, and agents shall not be liable to you for any indirect,
          incidental, special, consequential, exemplary, or punitive damages — including loss of
          profits, goodwill, data, or other intangible losses — arising out of or in connection
          with your use of or inability to use the service.
        </p>
        <p>
          Our total aggregate liability to you for any claim arising under or in connection with
          these Terms or your use of the service shall not exceed the greater of (a) the total
          amount you paid to us in the 12 months preceding the event giving rise to the claim, or
          (b) £50 / $50 (whichever currency applies).
        </p>
        <p>
          Some jurisdictions do not allow the exclusion or limitation of certain types of liability.
          In such jurisdictions, our liability is limited to the maximum extent permitted by law.
        </p>
      </Sec>

      {/* 13 */}
      <Sec id="indemnification" title="13. Indemnification">
        <p>
          You agree to defend, indemnify, and hold harmless <PH>[COMPANY_LEGAL_NAME]</PH> and its
          officers, directors, employees, and agents from and against any claims, damages,
          obligations, losses, liabilities, costs, and expenses (including reasonable legal fees)
          arising from: (a) your use of the service; (b) your violation of these Terms; (c) your
          violation of any third-party rights, including intellectual property or privacy rights;
          or (d) any content you post on or through the service.
        </p>
      </Sec>

      {/* 14 */}
      <Sec id="disputes" title="14. Disputes & governing law">
        <p>
          These Terms and any dispute or claim arising out of or in connection with them shall be
          governed by and construed in accordance with the laws of{" "}
          <PH>[GOVERNING_LAW — e.g. "England and Wales" or "the State of Delaware, USA"]</PH>,
          without regard to conflict of law provisions.
        </p>
        <p>
          <PH>
            [OPTIONAL — ARBITRATION / CLASS-ACTION WAIVER: Insert arbitration clause and/or class-action waiver here if applicable to your jurisdiction and business model. Requires legal review.]
          </PH>
        </p>
        <p>
          If you are a consumer in the EU or UK, you may also have the right to bring a claim in
          the courts of your country of residence.
        </p>
        <p>
          Before filing a formal dispute, please contact us at{" "}
          <A href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</A> — most issues can be resolved
          quickly through direct communication.
        </p>
      </Sec>

      {/* 15 */}
      <Sec id="changes" title="15. Changes to these terms">
        <p>
          We may update these Terms from time to time as the product evolves or as required by
          law. If we make material changes, we will notify you via the app or by email at least
          14 days before the changes take effect.
        </p>
        <p>
          Continued use of the service after the effective date of revised Terms constitutes your
          acceptance of those changes. If you do not agree to the revised Terms, you must stop
          using the service.
        </p>
      </Sec>

      {/* 16 */}
      <Sec id="contact" title="16. Contact">
        <p>Questions about these Terms? We're at:</p>
        <p>
          <PH>[COMPANY_LEGAL_NAME]</PH>
          <br />
          <PH>[REGISTERED_ADDRESS]</PH>
          <br />
          Email: <A href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</A>
        </p>
      </Sec>
    </LegalLayout>
  );
}
