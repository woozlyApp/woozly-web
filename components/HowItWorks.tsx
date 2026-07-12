const STEPS = [
  {
    n: "1",
    title: "Join the place you're at",
    body: "Nearby cafes, bars, parks, and campuses appear with a live count of who's checked in. One tap and you're in the room. Walk out and Woozly quietly removes you. Your presence never outlives your visit.",
  },
  {
    n: "2",
    title: "Drop a plant with intention",
    body: "Write what you're here for today: open to conversation, deep work, looking for book recs, first time here. Your plant is pinned to the exact spot you're sitting. People who pass by find it and can reply.",
  },
  {
    n: "3",
    title: "Woozly AI finds your match",
    body: "The AI reads every plant at this place and scores compatibility between you and everyone else in real time. Not who's closest — who's actually on your wavelength. First messages arrive as requests, so a conversation only starts when both of you want it.",
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="border-t border-line">
      <div className="mx-auto max-w-5xl px-5 py-20 sm:py-28">
        <h2 className="max-w-[22ch] font-display text-[clamp(1.9rem,4vw,2.8rem)] font-bold leading-[1.1] tracking-[-0.025em] text-ink">
          Three steps. No profile quiz.
        </h2>

        <ol className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-3">
          {STEPS.map((s) => (
            <li key={s.n}>
              <span
                className="flex h-10 w-10 items-center justify-center rounded-full font-display font-bold text-accent"
                style={{
                  background: "var(--accent-pale)",
                }}
              >
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
