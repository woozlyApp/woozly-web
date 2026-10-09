import type { Metadata } from "next";
import { LegalLayout, Sec, Sub, Ul, PH, A } from "@/components/LegalLayout";
import { CONTACT_EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Community Guidelines",
  description: "How to be a good neighbour on Woozly — the rules, the spirit, and what happens when things go wrong.",
};

const LAST_UPDATED = "[LAST_UPDATED — fill before publishing]";

const TOC = [
  { id: "spirit",     label: "The spirit of Woozly" },
  { id: "be-real",    label: "Be real" },
  { id: "be-kind",    label: "Be kind & respectful" },
  { id: "be-safe",    label: "Keep it safe — real-world" },
  { id: "content",    label: "Content rules" },
  { id: "places",     label: "Respect places & presence" },
  { id: "zero",       label: "Zero tolerance" },
  { id: "reporting",  label: "Reporting & blocking" },
  { id: "enforcement",label: "Enforcement" },
  { id: "appeals",    label: "Appeals & contact" },
];

export default function CommunityPage() {
  return (
    <LegalLayout
      title="Community Guidelines"
      description="Woozly runs on trust. These guidelines exist so every plant you drop, every note you leave, and every match you make feels safe and worthwhile."
      lastUpdated={LAST_UPDATED}
      toc={TOC}
    >
      {/* 1 */}
      <Sec id="spirit" title="1. The spirit of Woozly">
        <p>
          Woozly is built on a simple idea: you're already at interesting places, around
          interesting people. You just haven't met them yet.
        </p>
        <p>
          A plant isn't a profile — it's an invitation. You pick an intent (Coffee, Chat, Spark,
          Collab, Activity, Networking, Open) and drop it where you are. A note isn't a post —
          it's a trace left at a place for whoever passes through. Matching is double opt-in:
          both people have to show up and say yes.
        </p>
        <p>
          The experience we're trying to create is <strong>serendipity, not pressure</strong>.
          Come as you are, be clear about what you're here for, treat people like neighbours —
          not like leads or targets — and respect the places you're both in.
        </p>
        <p>
          These guidelines aren't legalese. They're what it looks like to be a good Woozly
          neighbour.
        </p>
      </Sec>

      {/* 2 */}
      <Sec id="be-real" title="2. Be real">
        <Ul items={[
          <><strong>Use photos of yourself.</strong> Profile photos must be accurate and recent. No avatars, illustrations, photos of other people, or heavily filtered images that misrepresent your appearance. Catfishing and misleading photos are a ban.</>,
          <><strong>One account per person.</strong> Don't create extra accounts for any reason, including to try different personas or to get around a ban.</>,
          <><strong>Don't impersonate anyone.</strong> Not a public figure, not another user, not a business.</>,
          <><strong>You must be 18 or older.</strong> If you're under 18, you cannot use Woozly. If we find out, your account is gone immediately.</>,
          <><strong>Show up where you actually are.</strong> Plants are pinned to real places. Only drop a plant at a place you're physically at right now.</>,
        ]} />
      </Sec>

      {/* 3 */}
      <Sec id="be-kind" title="3. Be kind & respectful">
        <Ul items={[
          <><strong>No harassment.</strong> Sending repeated unwanted messages, pressuring someone after they've declined or unmatched, or trying to contact someone who has blocked you is harassment. Stop.</>,
          <><strong>No hate.</strong> Content that attacks, demeans, or dehumanises people based on race, ethnicity, national origin, religion, gender, gender identity, sexual orientation, disability, or any other protected characteristic is not allowed.</>,
          <><strong>No threats.</strong> Threats of violence, intimidation, or harm — even framed as a "joke" — are not allowed and may be reported to authorities.</>,
          <><strong>Respect a "no."</strong> If someone doesn't water your plant, declines your match, or unmatches you — that's their answer. Don't push further. Move on.</>,
          <><strong>No discrimination.</strong> Don't use Woozly to exclude, demean, or harass people based on who they are.</>,
        ]} />
      </Sec>

      {/* 4 */}
      <Sec id="be-safe" title="4. Keep it safe — real-world">
        <p>
          Woozly is a way to meet real people in real places. That's exciting. It also comes with
          responsibility — yours and ours.
        </p>
        <Sub title="When meeting up">
          <Ul items={[
            "Meet for the first time somewhere busy and public.",
            "Tell a friend or family member where you're going and who you're meeting.",
            "Trust your instincts. If something feels off, leave. You don't owe anyone a second meeting.",
            "Don't share your home address, financial information, or other sensitive personal details with someone you've just met.",
          ]} />
        </Sub>
        <Sub title="What we don't do (and what that means for you)">
          <p>
            <strong>Woozly does not run background checks, identity verification, or criminal
            record checks on any user.</strong> The fact that someone is on Woozly does not mean
            they are safe. You are responsible for your own safety when meeting someone offline.
          </p>
        </Sub>
        <Sub title="If something feels wrong">
          <p>
            Use the in-app report and block tools immediately. If you feel in immediate danger,
            contact local emergency services first. Then report to us at{" "}
            <PH>[SAFETY_EMAIL — e.g. safety@woozly.app]</PH>.
          </p>
        </Sub>
      </Sec>

      {/* 5 */}
      <Sec id="content" title="5. Content rules">
        <p>
          This applies to everything you create on Woozly: plants, notes, messages, photos, and
          your profile.
        </p>
        <Sub title="Not allowed">
          <Ul items={[
            "Nudity and sexually explicit content — no explicit sexual images, videos, or graphic sexual descriptions in notes or messages.",
            "Graphic violence or gore.",
            "Illegal content of any kind.",
            "Spam, scams, or commercial solicitation — no unsolicited promotions, advertising, MLM pitches, or financial solicitation in plants, notes, or messages.",
            "Doxxing — sharing someone else's private personal information (address, phone number, workplace, etc.) without their consent.",
            "Misinformation designed to mislead or harm.",
          ]} />
        </Sub>
        <Sub title="Plants and notes are semi-public">
          <p>
            Plants are visible to everyone nearby who has also dropped a plant. Notes are visible
            to anyone who joins the place. <strong>Don't post anything in a plant or note that you
            wouldn't want a room full of strangers to see.</strong>
          </p>
        </Sub>
        <Sub title="Respect the venue">
          <p>
            Woozly is built around real places — cafés, parks, bars, libraries. When you use
            Woozly at someone's business or space, be a good guest. Don't use plants or notes
            to say anything negative about the venue or its staff.
          </p>
        </Sub>
      </Sec>

      {/* 6 */}
      <Sec id="places" title="6. Respect places & presence">
        <Ul items={[
          <><strong>Don't pollute a place's note wall.</strong> Notes are a shared space. Don't flood it with irrelevant content, spam, or notes designed to crowd out others.</>,
          <><strong>Don't use presence or location to stalk or surveil.</strong> Knowing that someone is at a particular place is not an invitation to follow them there, track their movements, or show up uninvited at places they frequent.</>,
          <><strong>Incognito is for comfort, not evasion.</strong> Incognito mode lets you browse without appearing in a place's roster — useful if you want a quiet visit. It is not a tool to observe people anonymously while evading accountability for your own behaviour.</>,
          <><strong>Ghost mode is for continuity, not deception.</strong> Ghost mode keeps your plant visible after you leave, so people can still discover you. Don't use it to mislead people about whether you're actually present.</>,
        ]} />
      </Sec>

      {/* 7 */}
      <Sec id="zero" title="7. Zero tolerance">
        <p>
          The following result in <strong>immediate permanent account termination</strong> without
          warning. Where required by law, we report to authorities.
        </p>
        <Ul items={[
          <><strong>CSAM (Child Sexual Abuse Material).</strong> Any content sexualising minors is reported to the National Centre for Missing & Exploited Children (NCMEC) and relevant authorities immediately.</>,
          <><strong>Soliciting, grooming, or endangering minors</strong> in any way.</>,
          <><strong>Non-consensual intimate imagery (NCII).</strong> Sharing or threatening to share private sexual images of another person without their consent.</>,
          <><strong>Sexual harassment</strong> — persistent, unwanted sexual advances, requests, or messages.</>,
          <><strong>Violent threats</strong> — credible threats of physical harm against any individual or group.</>,
          <><strong>Promoting or facilitating self-harm or suicide.</strong></>,
          <><strong>Human trafficking, exploitation, or coercion.</strong></>,
          <><strong>Terrorism, violent extremism, or content that promotes or recruits for violent acts or organisations.</strong></>,
          <><strong>Any other activity that is illegal under applicable law</strong> and brought to our attention.</>,
        ]} />
        <p>
          These are not moderation decisions. There is no appeal for zero-tolerance violations.
        </p>
      </Sec>

      {/* 8 */}
      <Sec id="reporting" title="8. Reporting & blocking">
        <Sub title="How to report">
          <p>You can report any user, plant, note, or message directly in the app:</p>
          <Ul items={[
            "User profile: tap the three-dot (⋯) menu → Report.",
            "Plant or note: tap the flag icon on the content → Report.",
            "Message: long-press the message → Report.",
          ]} />
          <p>
            Tell us what's happening — the more context you give, the faster we can act.
            Reports are reviewed by our moderation team. Confirmed violations of objectionable
            content or abusive users are acted on <strong>within 24 hours</strong> of receipt.
          </p>
        </Sub>
        <Sub title="How to block">
          <p>
            Tap the three-dot (⋯) menu on any profile → Block. Blocking:
          </p>
          <Ul items={[
            "Prevents the person from seeing your profile, plants, or notes.",
            "Removes them from your discovery deck.",
            "Prevents all future contact.",
            "Is immediate and does not notify them.",
          ]} />
          <p>
            You can also report and block at the same time — we recommend doing both if someone
            has behaved badly.
          </p>
        </Sub>
        <Sub title="Anonymous reporting">
          <p>
            Reports are anonymous by default — the person you report is not told who reported
            them.
          </p>
        </Sub>
      </Sec>

      {/* 9 */}
      <Sec id="enforcement" title="9. Enforcement">
        <p>
          We use a graduated approach. The severity of the action depends on the severity and
          history of the violation:
        </p>
        <Ul items={[
          <><strong>Warning:</strong> for first or minor violations. We tell you what happened and what not to do again.</>,
          <><strong>Content removal:</strong> the offending plant, note, photo, or message is removed.</>,
          <><strong>Temporary suspension:</strong> access to the app is restricted for a set period.</>,
          <><strong>Permanent ban:</strong> your account is terminated, all data deleted, and you are prohibited from creating new accounts.</>,
        ]} />
        <p>
          <strong>Serious violations skip the ladder</strong> — you will not receive a warning
          before a ban for severe or clear-cut violations. Zero-tolerance violations (Section 7)
          always result in an immediate permanent ban.
        </p>
        <p>
          <strong>Ban evasion is prohibited.</strong> Creating a new account after being banned
          — on the same device, phone number, or otherwise — will result in the new account being
          permanently banned as well.
        </p>
        <p>
          Enforcement decisions are at Woozly's sole discretion. We are not obligated to share
          the specific content of a report with any party.
        </p>
      </Sec>

      {/* 10 */}
      <Sec id="appeals" title="10. Appeals & contact">
        <p>
          If you believe your account was actioned in error, you can appeal by contacting us at{" "}
          <PH>[SAFETY_EMAIL]</PH> or <A href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</A>{" "}
          within 14 days of the action. Include your username/UID and the reason you believe
          the decision was wrong.
        </p>
        <p>
          We review appeals seriously and aim to respond within 5 business days.
          We are not able to restore accounts banned under the zero-tolerance policy (Section 7),
          or accounts that have been used for repeated severe violations.
        </p>
        <p>
          For safety emergencies, contact your local emergency services first. For non-emergency
          safety concerns, reach us at <PH>[SAFETY_EMAIL]</PH>.
        </p>

        <div className="mt-6 rounded-xl bg-accent-pale px-6 py-5">
          <p className="text-sm leading-[1.75] text-body">
            Woozly is a better place when everyone in it is looking out for each other. Thanks for
            being part of it.
          </p>
        </div>
      </Sec>
    </LegalLayout>
  );
}
