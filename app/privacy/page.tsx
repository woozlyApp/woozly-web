import type { Metadata } from "next";
import { LegalLayout, Sec, Sub, Ul, PH, A } from "@/components/LegalLayout";
import { CONTACT_EMAIL, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Woozly collects, uses, and protects your location, profile, and message data.",
};

const LAST_UPDATED = "[LAST_UPDATED — fill before publishing]";

const TOC = [
  { id: "who-we-are",      label: "Who we are" },
  { id: "data-collected",  label: "Data we collect" },
  { id: "how-we-use",      label: "How we use your data" },
  { id: "legal-bases",     label: "Legal bases (GDPR)" },
  { id: "sensitive-data",  label: "Special-category data" },
  { id: "location",        label: "Location data" },
  { id: "messages",        label: "End-to-end encrypted messages" },
  { id: "ai-processing",   label: "AI processing" },
  { id: "processors",      label: "Third-party processors" },
  { id: "retention",       label: "Data retention & deletion" },
  { id: "your-rights",     label: "Your rights" },
  { id: "ccpa",            label: "California residents (CCPA/CPRA)" },
  { id: "transfers",       label: "International transfers" },
  { id: "children",        label: "Children (under 18)" },
  { id: "security",        label: "Security" },
  { id: "changes",         label: "Changes to this policy" },
  { id: "contact",         label: "Contact & DPO" },
];

export default function PrivacyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      description="We built Woozly with privacy in mind. Where we can protect your data — like end-to-end encrypting every message — we do. This policy tells you exactly what we collect, why, and how to control it."
      lastUpdated={LAST_UPDATED}
      notice
      toc={TOC}
    >
      {/* 1 */}
      <Sec id="who-we-are" title="1. Who we are">
        <p>
          Woozly is a location-based social app that lets adults discover people and places around
          them by dropping intent-based "plants" and leaving "notes." Woozly is operated by{" "}
          <PH>[COMPANY_LEGAL_NAME]</PH>, registered at <PH>[REGISTERED_ADDRESS]</PH>.
        </p>
        <p>
          This policy applies to the Woozly iOS app and the website at{" "}
          <A href={SITE_URL}>{SITE_URL}</A>.
        </p>
        <p>
          Data controller: <PH>[COMPANY_LEGAL_NAME]</PH>. Privacy contact:{" "}
          <PH>[PRIVACY_DPO_EMAIL — e.g. privacy@woozly.app]</PH>.
        </p>
      </Sec>

      {/* 2 */}
      <Sec id="data-collected" title="2. Data we collect">
        <Sub title="Authentication">
          <Ul items={[
            "Phone number — used for one-time-passcode verification via Firebase Authentication.",
            "Email address — if you sign in with Google or Apple, we receive your email from their OAuth flow.",
            "Firebase UID — a unique identifier assigned to your account by Firebase.",
          ]} />
        </Sub>

        <Sub title="Profile">
          <Ul items={[
            "Name and nickname.",
            "Date of birth (to verify age-gate) and age displayed on profile.",
            "Gender identity.",
            "Sexual orientation (optional — see Section 5).",
            "Relationship status and relationship goals / intent (optional — see Section 5).",
            "Star sign (optional).",
            "Lifestyle interests and hobbies.",
            "Favourite places.",
            "Profile photos — stored on Cloudflare R2.",
          ]} />
        </Sub>

        <Sub title="Location">
          <p>
            Location is core to Woozly's features. We collect it in two modes — see Section 6 for
            full details and your controls.
          </p>
          <Ul items={[
            "Foreground (precise GPS): while the app is open, to show nearby places and people, and to pin your plants.",
            "Background (Always): only to geofence auto-leave — detecting when you walk away from a place so you are removed automatically without needing to tap.",
          ]} />
        </Sub>

        <Sub title="Content you create">
          <Ul items={[
            "Plants: your chosen intent type (Coffee, Chat, Spark, Collab, Activity, Networking, Open) and the coordinates where you dropped it.",
            "Notes: free-text or photo sticky notes pinned at places.",
            "Messages: end-to-end encrypted ciphertext only — see Section 7.",
            "Reactions and replies to other users' notes.",
          ]} />
        </Sub>

        <Sub title="Social graph">
          <Ul items={[
            "Likes (waters) given and received, matches, super likes.",
            "Blocked users list and reports filed.",
          ]} />
        </Sub>

        <Sub title="Presence">
          <p>
            When you join a place, your presence is stored ephemerally in Redis with a
            short TTL (time-to-live). Presence data is not persisted to our main database and
            is cleared automatically when you leave or when the TTL expires.
          </p>
        </Sub>

        <Sub title="Device & diagnostics">
          <Ul items={[
            "Device model and OS version.",
            "Push notification token (Firebase Cloud Messaging) — to deliver notifications.",
            "Crash reports and error logs via Sentry.",
          ]} />
        </Sub>

        <Sub title="Payments">
          <p>
            Subscriptions are processed through Apple In-App Purchase, managed by RevenueCat.
            We receive only entitlement status (which plan you are on) — we never see or store
            your payment card details.
          </p>
        </Sub>

        <Sub title="Usage data">
          <p>
            Anonymised analytics on feature usage to understand how to improve the product.
            We do not use third-party ad-tech analytics platforms. We do not collect advertising
            identifiers (IDFA/GAID).
          </p>
        </Sub>
      </Sec>

      {/* 3 */}
      <Sec id="how-we-use" title="3. How we use your data">
        <Ul items={[
          "Account creation, authentication, and maintenance.",
          "Showing your plant to nearby users who have also dropped a plant (double opt-in discovery).",
          "Surfacing nearby plants and places to you.",
          "Delivering messages, push notifications, and in-app alerts.",
          "Computing AI compatibility scores between users at the same place (see Section 8).",
          "Generating Vibe Check summaries of a place's crowd (Premium, see Section 8).",
          "Generating AI conversation openers (see Section 8).",
          "Safety and moderation — reviewing reports, enforcing our Community Guidelines.",
          "Diagnosing and fixing bugs using crash reports and error logs.",
          "Legal compliance and fraud prevention.",
          "Processing and validating Premium subscription status.",
        ]} />
        <p>
          <strong>We do not sell your personal data. We do not use your data for advertising.</strong>
        </p>
      </Sec>

      {/* 4 */}
      <Sec id="legal-bases" title="4. Legal bases (GDPR)">
        <p>
          If you are in the European Economic Area (EEA) or the United Kingdom, we rely on the
          following legal bases under GDPR and UK GDPR:
        </p>
        <Ul items={[
          <><strong>Contract (Art. 6(1)(b)):</strong> processing necessary to provide the app — account management, core matching, messaging, place features.</>,
          <><strong>Consent (Art. 6(1)(a) / Art. 9(2)(a)):</strong> background location; special-category data (sexual orientation, relationship goals); optional marketing communications. You can withdraw consent at any time (see Section 11).</>,
          <><strong>Legitimate interests (Art. 6(1)(f)):</strong> safety and fraud prevention, diagnosing crashes, improving the service — where our interests are not overridden by your rights.</>,
          <><strong>Legal obligation (Art. 6(1)(c)):</strong> retaining records where required by law, responding to lawful requests from authorities.</>,
        ]} />
      </Sec>

      {/* 5 */}
      <Sec id="sensitive-data" title="5. Special-category data">
        <p>
          <strong>
            The following fields are special-category personal data under GDPR Article 9 and
            sensitive personal information under CCPA/CPRA:
          </strong>
        </p>
        <Ul items={[
          "Sexual orientation (optional profile field).",
          "Relationship status and relationship goals (optional profile fields).",
        ]} />
        <p>
          <strong>Legal basis:</strong> explicit consent (GDPR Art. 9(2)(a)). We ask for your
          explicit consent when you provide these fields.
        </p>
        <p>
          <strong>Purpose:</strong> improving compatibility matching and personalisation. We do
          not share these fields with other users unless you choose to display them on your profile.
          We do not use them for advertising.
        </p>
        <p>
          <strong>You can update or delete these fields at any time</strong> via Profile → Edit
          Profile. Deleting your account removes them entirely (see Section 10).
        </p>
        <p>
          <strong>⚠️ Note to attorney:</strong> additional protections or consent mechanisms may
          be required depending on jurisdiction. GDPR, CCPA/CPRA, and other laws impose
          heightened requirements on this category of data. Please review.
        </p>
      </Sec>

      {/* 6 */}
      <Sec id="location" title="6. Location data">
        <Sub title="How we use location">
          <Ul items={[
            "Foreground: GPS coordinates to pin your plant at your current position, find nearby places, surface nearby people's plants, and show presence at a place.",
            "Background (geofencing only): we monitor your position against the place you have joined. When you physically leave the geofence boundary, Woozly automatically removes you from the place. This is the only reason we use background location.",
          ]} />
        </Sub>
        <Sub title="What we do NOT do with location">
          <Ul items={[
            "We do not store a continuous history of your GPS positions.",
            "We do not track your movement between places.",
            "We do not share your precise coordinates with other users — they see only that you are at the same named place.",
          ]} />
        </Sub>
        <Sub title="Your controls">
          <p>
            You can change Woozly's location permission at any time: <strong>Settings →
            Privacy & Security → Location Services → Woozly</strong>. Options:
          </p>
          <Ul items={[
            "\"Always\": enables all location features including auto-leave.",
            "\"While using\": enables foreground features; you must manually leave a place.",
            "\"Never\": disables all proximity features. You will not be able to drop plants or join places.",
          ]} />
        </Sub>
        <p>
          Location is treated as sensitive personal information under CCPA/CPRA. See Section 12.
        </p>
      </Sec>

      {/* 7 */}
      <Sec id="messages" title="7. End-to-end encrypted messages">
        <p>
          <strong>
            Every message sent on Woozly is end-to-end encrypted using X25519 key exchange.
          </strong>
          Our servers store only ciphertext — we are technically unable to read your message
          contents. Decryption happens on your device.
        </p>
        <p>
          Key exchange occurs when a match is established. If a match is deleted, the associated
          encryption keys are discarded and the conversation cannot be decrypted.
        </p>
        <p>
          <strong>What this means for moderation:</strong> because messages are end-to-end
          encrypted, we cannot review message content proactively. If you receive an abusive or
          threatening message, use the in-app report tool — your report is processed by our
          moderation team who may take action on the account based on the pattern of behaviour,
          even without reading the ciphertext.
        </p>
      </Sec>

      {/* 8 */}
      <Sec id="ai-processing" title="8. AI processing">
        <p>
          Woozly uses AI to power three features. <strong>User content is sent to third-party
          AI providers to generate these outputs.</strong>
        </p>
        <Ul items={[
          <><strong>Compatibility scores:</strong> plant intent types and profile attributes (interests, goals) are sent to Groq and/or OpenAI to calculate live match scores between users at the same place.</>,
          <><strong>Vibe Check (Premium):</strong> aggregated intent data from active plants at a place is sent to generate an AI summary of the place's crowd and energy.</>,
          <><strong>AI conversation openers:</strong> when a match is made, profile intent data is used to generate a suggested icebreaker. Free users receive 1 opener per conversation; Premium users receive unlimited.</>,
        ]} />
        <p>
          <strong>Data minimisation:</strong> before sending data to AI providers, we strip direct
          identifiers (name, phone number, UID) where technically feasible. Providers receive
          only the structured content needed to generate the output.
        </p>
        <p>
          <strong>Training:</strong> we do not grant AI providers the right to train their models
          on your content beyond what is permitted by their data processing agreements.
        </p>
        <p>
          Providers: Groq (<A href="https://groq.com/privacy-policy">privacy policy</A>) and
          OpenAI (<A href="https://openai.com/policies/privacy-policy">privacy policy</A>).
        </p>
      </Sec>

      {/* 9 */}
      <Sec id="processors" title="9. Third-party processors">
        <p>
          We share data only with processors necessary to operate Woozly. Each processor receives
          only the data they need for their stated purpose and is contractually bound to protect it.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-line">
                <th className="py-2.5 pr-4 text-left font-semibold text-ink">Processor</th>
                <th className="py-2.5 pr-4 text-left font-semibold text-ink">Purpose</th>
                <th className="py-2.5 text-left font-semibold text-ink">Location</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {[
                ["Firebase / Google",   "Phone auth, push notifications (FCM), crash analytics",            "USA"],
                ["Supabase",            "Primary database (Postgres), real-time subscriptions",              "USA / EU"],
                ["Cloudflare R2",       "Media storage (profile photos, note images)",                       "USA / EU"],
                ["Redis",               "Ephemeral place presence (TTL-based)",                              "USA"],
                ["Groq",                "AI inference — compatibility scores, openers",                      "USA"],
                ["OpenAI",              "AI inference — compatibility scores, vibe summaries",               "USA"],
                ["RevenueCat",          "Subscription entitlement management",                               "USA"],
                ["Apple",               "In-app purchase, Sign in with Apple, push delivery",               "USA"],
                ["Sentry",              "Crash reporting, error monitoring",                                  "USA"],
                ["Google Places API",   "Place search and metadata",                                         "USA"],
              ].map(([p, u, l]) => (
                <tr key={p}>
                  <td className="py-2.5 pr-4 font-medium text-ink">{p}</td>
                  <td className="py-2.5 pr-4 text-body">{u}</td>
                  <td className="py-2.5 text-muted">{l}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          We do not sell data to any of these processors for their own commercial use.
        </p>
      </Sec>

      {/* 10 */}
      <Sec id="retention" title="10. Data retention & deletion">
        <Sub title="While your account is active">
          <p>
            We retain your profile, plants, notes, matches, and usage data while your account
            is active and as needed to provide the service.
          </p>
        </Sub>
        <Sub title="Account deletion — your right to erasure">
          <p>
            You can delete your account at any time: <strong>Settings → Delete Account</strong>.
            When you delete your account:
          </p>
          <Ul items={[
            "Your profile, plants, notes, messages, and matches are deleted from our Supabase database within 30 days.",
            "Profile photos and note images are purged from Cloudflare R2 within 30 days.",
            "Your place presence data is cleared from Redis immediately.",
            "Your Firebase user record is deleted, invalidating all sessions.",
            "RevenueCat entitlement records are deleted. Your App Store subscription must be cancelled separately through Apple.",
          ]} />
        </Sub>
        <Sub title="What we may retain after deletion">
          <Ul items={[
            "Anonymised, non-identifiable churn or product feedback data — this cannot be re-linked to you.",
            "Legal and fraud records where required by applicable law (e.g., records of a ban resulting from a law-enforcement request).",
            "Sentry crash reports that do not contain personal identifiers (anonymised stack traces).",
          ]} />
        </Sub>
        <Sub title="Inactive accounts">
          <p>
            <PH>[DEFINE_INACTIVE_ACCOUNT_PERIOD — e.g. "Accounts inactive for 24 months may be deleted after notice"]</PH>
          </p>
        </Sub>
      </Sec>

      {/* 11 */}
      <Sec id="your-rights" title="11. Your rights">
        <p>
          Depending on where you live, you have rights over your personal data. We honour
          these rights regardless of your location.
        </p>
        <Ul items={[
          <><strong>Access:</strong> request a copy of the personal data we hold about you.</>,
          <><strong>Rectification:</strong> correct inaccurate or incomplete data.</>,
          <><strong>Erasure:</strong> delete your account and associated data (see Section 10).</>,
          <><strong>Data portability:</strong> receive your data in a machine-readable format.</>,
          <><strong>Restriction:</strong> ask us to limit how we process your data in certain circumstances.</>,
          <><strong>Objection:</strong> object to processing based on our legitimate interests.</>,
          <><strong>Withdraw consent:</strong> if we process data based on your consent, you can withdraw it at any time without affecting the lawfulness of prior processing. To withdraw location consent: change permission in device Settings. To withdraw consent for sensitive data: delete the fields from your profile.</>,
          <><strong>Lodge a complaint:</strong> if you are in the EEA or UK, you have the right to lodge a complaint with your local data protection supervisory authority.</>,
        ]} />
        <p>
          To exercise any right, contact <PH>[PRIVACY_DPO_EMAIL]</PH> or{" "}
          <A href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</A>. We respond within 30 days
          (or as required by applicable law). We may need to verify your identity before
          fulfilling a request.
        </p>
      </Sec>

      {/* 12 */}
      <Sec id="ccpa" title="12. California residents (CCPA / CPRA)">
        <p>
          If you are a California resident, the California Consumer Privacy Act (CCPA) as amended
          by the California Privacy Rights Act (CPRA) grants you additional rights.
        </p>
        <Sub title="We do not sell or share your personal information">
          <p>
            We do not sell personal information to third parties for money. We do not share
            personal information for cross-context behavioural advertising purposes.
          </p>
        </Sub>
        <Sub title="Sensitive personal information we collect">
          <p>Under CPRA, the following we collect are sensitive personal information:</p>
          <Ul items={[
            "Precise geolocation.",
            "Sexual orientation.",
            "Racial or ethnic origin (if inferred from profile data — we do not ask for this directly).",
          ]} />
          <p>
            We use sensitive personal information only for the purposes disclosed in this policy.
            We do not use it for inferences about you for advertising or sell it to third parties.
          </p>
        </Sub>
        <Sub title="Your CCPA/CPRA rights">
          <Ul items={[
            "Right to know: what personal information we collect, use, disclose, and sell.",
            "Right to delete: request deletion of your personal information.",
            "Right to correct: correct inaccurate personal information.",
            "Right to opt-out of sale/sharing: not applicable — we do not sell or share.",
            "Right to limit use of sensitive personal information: contact us to restrict use.",
            "Right to non-discrimination: we will not discriminate against you for exercising your rights.",
          ]} />
          <p>
            Submit requests to <PH>[PRIVACY_DPO_EMAIL]</PH> or{" "}
            <A href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</A>.
          </p>
        </Sub>
      </Sec>

      {/* 13 */}
      <Sec id="transfers" title="13. International data transfers">
        <p>
          Most of our processors are based in the United States. If you are in the EEA or the
          United Kingdom, your data may be transferred to and processed in countries that may not
          provide the same level of data protection as your home country.
        </p>
        <p>
          Where we transfer data outside the EEA/UK, we rely on:
        </p>
        <Ul items={[
          "Standard Contractual Clauses (SCCs) approved by the European Commission (for EEA transfers).",
          "The UK International Data Transfer Agreement (IDTA) or UK Addendum (for UK transfers).",
          "An adequacy decision by the European Commission or UK ICO, where applicable.",
        ]} />
        <p>
          <PH>[ATTORNEY REVIEW REQUIRED: Confirm transfer mechanisms with each processor listed in Section 9. SCCs and adequacy decisions must be kept current.]</PH>
        </p>
      </Sec>

      {/* 14 */}
      <Sec id="children" title="14. Children (under 18)">
        <p>
          <strong>Woozly is strictly for adults aged 18 and over.</strong> We do not knowingly
          collect personal data from anyone under 18.
        </p>
        <p>
          If you are a parent or guardian and believe your child has created an account, please
          contact us at <PH>[SAFETY_EMAIL — e.g. safety@woozly.app]</PH>. We will delete the
          account and all associated data promptly.
        </p>
        <p>
          We use date of birth to enforce the age gate at sign-up. If we discover that a user
          is under 18, we terminate the account without notice.
        </p>
      </Sec>

      {/* 15 */}
      <Sec id="security" title="15. Security">
        <Ul items={[
          "Messages are end-to-end encrypted (X25519) — we cannot read them (see Section 7).",
          "All data in transit is encrypted using TLS/HTTPS.",
          "Data at rest is encrypted on our infrastructure.",
          "Access to production systems is restricted to authorised personnel.",
          "We undergo periodic security reviews.",
        ]} />
        <p>
          No system is 100% secure. If you discover a security vulnerability, please report it
          responsibly to <PH>[PRIVACY_DPO_EMAIL]</PH>. We investigate all reports.
        </p>
      </Sec>

      {/* 16 */}
      <Sec id="changes" title="16. Changes to this policy">
        <p>
          We may update this policy as the product evolves or as required by law. If we make
          material changes, we will notify you via the app or by email at least 14 days before
          the changes take effect.
        </p>
        <p>
          The date at the top of this page shows when it was last updated. We keep a changelog of
          material changes. <PH>[ADD_CHANGELOG_LINK_OR_REMOVE]</PH>
        </p>
      </Sec>

      {/* 17 */}
      <Sec id="contact" title="17. Contact & DPO">
        <p>Questions, data requests, or concerns about this policy:</p>
        <p>
          <PH>[COMPANY_LEGAL_NAME]</PH>
          <br />
          <PH>[REGISTERED_ADDRESS]</PH>
          <br />
          Privacy / DPO contact: <PH>[PRIVACY_DPO_EMAIL]</PH>
          <br />
          General: <A href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</A>
        </p>
        <p>
          If you are in the EEA and are not satisfied with our response, you have the right to
          lodge a complaint with the supervisory authority in your member state.
          <br />
          If you are in the UK: Information Commissioner's Office (ICO) at{" "}
          <A href="https://ico.org.uk">ico.org.uk</A>.
        </p>
      </Sec>
    </LegalLayout>
  );
}
