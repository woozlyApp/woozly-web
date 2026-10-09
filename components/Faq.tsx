export const FAQ_ITEMS = [
  {
    q: "What is a plant?",
    a: "A plant is a pin you drop at the place you're currently at. You pick a structured intent — Coffee, Chat, Spark (romantic), Collab, Activity, Networking, or Open — to signal why you're here. It's visible to others nearby who have also dropped a plant. Plants expire when you leave or after a time window.",
  },
  {
    q: "What's the difference between a plant and a note?",
    a: "They're two different things. A plant carries a structured intent and is how you get discovered by people nearby (double opt-in — both must have dropped). A note is a free-text or photo sticky note pinned at a place, visible to everyone who joins — it builds the place's memory over time.",
  },
  {
    q: "How does matching work?",
    a: "Discovery is double opt-in: you and the other person must both have dropped a plant nearby. You swipe a deck of nearby people, water (like) someone's plant, and if they water yours back it's a mutual match — the chat unlocks immediately. A one-sided water sends a message request they can accept or reject.",
  },
  {
    q: "How does Woozly AI work?",
    a: "Woozly AI reads every active plant at the place you're at and calculates live compatibility between you and everyone else there — based on your intents, not your photos. Scores update as new plants are dropped. It's also the engine behind Vibe Check (Premium), which gives an AI read of a place's current crowd and energy.",
  },
  {
    q: "What are Ghost mode and Incognito — aren't they the same thing?",
    a: "No, they're two separate Premium features. Incognito lets you join a place anonymously — you see who's there but you don't appear in their roster. Ghost mode lets you stay visible and discoverable after you physically leave a place, so your plant keeps getting seen.",
  },
  {
    q: "How much does Premium cost?",
    a: "Premium (Aura) is $4.99/week or $14.99/month — billed through the App Store, cancel anytime. There is no annual plan. Free users get 2 active plants, 5 km radius, 20 waters/day, and 1 AI conversation opener per chat.",
  },
  {
    q: "Are my chats private?",
    a: "Every message is end-to-end encrypted on your device before it's sent. Nobody outside the conversation can read it, including us. Chats start with a message request — they only begin when the other person accepts.",
  },
  {
    q: "Where is Woozly available?",
    a: "iOS only right now. Download on the App Store.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="border-t border-line">
      <div className="mx-auto max-w-3xl px-5 py-20 sm:py-28">
        <h2 className="font-display text-[clamp(1.9rem,4vw,2.8rem)] font-bold tracking-[-0.025em] text-ink">
          Questions worth asking
        </h2>

        <div className="mt-12 divide-y divide-line border-y border-line">
          {FAQ_ITEMS.map((item) => (
            <details key={item.q} className="faq-item group py-5">
              <summary className="flex items-center justify-between gap-6 text-left font-display text-base font-semibold text-ink sm:text-lg">
                {item.q}
                <span className="faq-chevron shrink-0 text-muted" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M12 5v14M5 12h14"/>
                  </svg>
                </span>
              </summary>
              <p className="mt-4 max-w-[62ch] leading-[1.65] text-body">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
