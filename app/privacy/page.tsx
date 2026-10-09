import type { Metadata } from "next";
import { LegalLayout, Sec, Ul, A } from "@/components/LegalLayout";
import { APP_LAUNCHED, CONTACT_EMAIL } from "@/lib/site";
import { FullPrivacyPolicy } from "./FullPrivacyPolicy";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Woozly handles your data. Right now we only collect waitlist emails.",
};

const LAST_UPDATED = "9 October 2026";

const TOC = [
  { id: "summary",       label: "The short version" },
  { id: "what",          label: "What we collect" },
  { id: "why",           label: "Why" },
  { id: "who-handles",   label: "Who handles it" },
  { id: "your-choices",  label: "Your choices" },
  { id: "age",           label: "Age" },
  { id: "contact",       label: "Contact & changes" },
];

function WaitlistPrivacy() {
  return (
    <LegalLayout
      title="Privacy Policy"
      description="Woozly isn't open to the public yet. This page covers the only thing we collect right now — your waitlist email. A full policy will replace this when the app launches."
      lastUpdated={LAST_UPDATED}
      toc={TOC}
    >
      <Sec id="summary" title="The short version">
        <p>
          If you join the waitlist, we store your email address so we can tell you when Woozly
          opens. That&apos;s it. No account, no location, no tracking, no selling your data.
        </p>
      </Sec>

      <Sec id="what" title="What we collect">
        <Ul items={[
          "Your email address — only if you submit it through the waitlist form.",
          "Nothing else. There is no app account yet, so we don't collect your name, location, photos, messages, or any device data from this website.",
          "The waitlist form includes a hidden anti-spam field; it does not collect any additional personal information.",
        ]} />
      </Sec>

      <Sec id="why" title="Why we collect it">
        <Ul items={[
          "To email you once when Woozly launches.",
          "Occasionally, to share a major pre-launch update.",
        ]} />
        <p>
          We will not send you marketing spam, and we will never sell or rent your email to
          anyone.
        </p>
      </Sec>

      <Sec id="who-handles" title="Who handles your email">
        <p>
          Waitlist submissions are processed and stored by{" "}
          <A href="https://formspree.io/legal/privacy-policy">Formspree</A>, our form provider,
          on our behalf. The website itself is served as static files by our hosting provider.
          No one else receives your email.
        </p>
      </Sec>

      <Sec id="your-choices" title="Your choices">
        <Ul items={[
          "Ask us to delete your email from the waitlist at any time — just contact us (below) and we'll remove it.",
          "Request a copy of what we hold (it's only your email and the date you joined).",
        ]} />
      </Sec>

      <Sec id="age" title="Age">
        <p>
          Woozly is for adults aged 18 and over. Please don&apos;t join the waitlist if you are
          under 18.
        </p>
      </Sec>

      <Sec id="contact" title="Contact & changes">
        <p>
          Questions or deletion requests:{" "}
          <A href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</A>.
        </p>
        <p>
          When the Woozly app launches, this page will be replaced by a full privacy policy
          covering the app&apos;s features (profiles, location, messaging, and more). If you&apos;re
          on the waitlist at that time, we&apos;ll let you know.
        </p>
      </Sec>
    </LegalLayout>
  );
}

export default function PrivacyPage() {
  return APP_LAUNCHED ? <FullPrivacyPolicy /> : <WaitlistPrivacy />;
}
