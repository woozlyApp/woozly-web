const STEPS = [
  {
    n: "1",
    title: "Build a quick profile",
    body: "Photos, name, age, gender, lifestyle and interests, favorite places, what you're looking for. A short but real profile — not an endless questionnaire.",
  },
  {
    n: "2",
    title: "Drop a plant with your intent",
    body: "At the place you're at, drop a plant and pick your intent: Coffee, Chat, Spark, Collab, Activity, Networking, or Open. It signals why you're here to people who've also dropped nearby.",
  },
  {
    n: "3",
    title: "Swipe the deck. Water to like.",
    body: "People mode surfaces nearby plants as a swipe deck. Water (like) someone's plant to show interest. 20 waters/day free. A mutual water = a match — chat unlocks immediately.",
  },
  {
    n: "4",
    title: "Message request → E2EE chat",
    body: "A one-sided water sends a request the other person can accept or reject. Accepted → end-to-end encrypted chat with an AI conversation opener to break the ice.",
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="border-t border-line">
      <div className="mx-auto max-w-5xl px-5 py-20 sm:py-28">
        <h2 className="max-w-[28ch] font-display text-[clamp(1.9rem,4vw,2.8rem)] font-bold leading-[1.1] tracking-[-0.025em] text-ink">
          A quick profile. Then go meet people.
        </h2>

        <ol className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s) => (
            <li key={s.n}>
              <span className="flex h-10 w-10 items-center justify-center rounded-full font-display font-bold text-accent" style={{ background: "var(--accent-pale)" }}>
                {s.n}
              </span>
              <h3 className="mt-5 font-display text-xl font-semibold leading-snug tracking-[-0.02em] text-ink">
                {s.title}
              </h3>
              <p className="mt-2.5 leading-[1.65] text-body">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
