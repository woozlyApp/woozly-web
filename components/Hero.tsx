import { APP_STORE_URL } from "@/lib/site";

function PlaceCard() {
  return (
    <div className="relative">
      {/* Floating sticky note — peach, behind the main card */}
      <div
        className="anim-float-b absolute -left-8 -top-6 z-10 w-40 rounded-xl p-3.5"
        style={{
          "--r": "-5deg",
          background: "var(--note-peach)",
          transform: "rotate(-5deg)",
          boxShadow: "0 2px 8px oklch(0% 0 0 / 0.09), 0 8px 20px oklch(0% 0 0 / 0.07)",
        } as React.CSSProperties}
      >
        <p className="text-[11px] font-semibold leading-snug" style={{ color: "var(--note-peach-ink)" }}>
          👋 First time here. Anyone a regular?
        </p>
        <p className="mt-1.5 text-[10px] opacity-70" style={{ color: "var(--note-peach-ink)" }}>
          placed 3 min ago
        </p>
      </div>

      {/* Main place card */}
      <div
        className="relative z-20 w-full max-w-[340px] overflow-hidden rounded-2xl bg-surface"
        style={{
          transform: "rotate(-1.5deg)",
          boxShadow: "0 4px 12px oklch(0% 0 0 / 0.07), 0 20px 48px oklch(0% 0 0 / 0.08)",
        }}
      >
        {/* Place header */}
        <div className="flex items-center gap-3 border-b border-line px-5 py-4">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sage-light text-lg">
            ☕
          </span>
          <div className="min-w-0">
            <p className="truncate font-display text-sm font-semibold text-ink">
              Narrative Coffee
            </p>
            <p className="text-xs text-muted">7 people here · 3 plants active</p>
          </div>
          <span className="ml-auto shrink-0 rounded-full bg-sage-light px-2.5 py-1 text-[11px] font-semibold text-sage">
            Joined
          </span>
        </div>

        {/* Active plant */}
        <div className="border-b border-line px-5 py-3.5">
          <div className="flex items-start gap-2">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mt-0.5 shrink-0 text-sage"
              aria-hidden="true"
            >
              <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
              <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
            </svg>
            <p className="text-xs leading-relaxed text-body">
              <span className="font-semibold text-ink">Your plant:</span>{" "}
              &ldquo;here to think out loud and meet curious people&rdquo;
            </p>
          </div>
        </div>

        {/* AI matches */}
        <div className="px-5 py-4">
          <p className="mb-3 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wide text-muted">
            <span aria-hidden="true">✨</span> Woozly AI matches
          </p>

          <div className="space-y-2">
            {[
              { initial: "M", name: "Maya", intent: "here to meet new people", pct: 94, bg: "var(--accent-pale)", fg: "var(--accent)" },
              { initial: "J", name: "Jonas", intent: "deep work, open to ideas", pct: 81, bg: "var(--sage-light)", fg: "var(--sage)" },
              { initial: "A", name: "Aliya", intent: "reading & slow conversation", pct: 77, bg: "oklch(93% 0.04 50)", fg: "oklch(38% 0.1 50)" },
            ].map((p) => (
              <div
                key={p.name}
                className="flex items-center gap-2.5 rounded-xl px-3 py-2.5 transition-colors hover:bg-surface-2"
              >
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full font-display text-xs font-semibold"
                  style={{ background: p.bg, color: p.fg }}
                >
                  {p.initial}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-ink">{p.name}</p>
                  <p className="truncate text-[11px] text-muted">{p.intent}</p>
                </div>
                <span
                  className="shrink-0 rounded-full px-2 py-0.5 text-[11px] font-bold"
                  style={{ background: p.bg, color: p.fg }}
                >
                  {p.pct}%
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lemon sticky note — top right */}
      <div
        className="anim-float absolute -right-6 top-8 z-30 w-36 rounded-xl p-3"
        style={{
          "--r": "4deg",
          background: "var(--note-lemon)",
          transform: "rotate(4deg)",
          boxShadow: "0 2px 8px oklch(0% 0 0 / 0.1), 0 8px 20px oklch(0% 0 0 / 0.07)",
        } as React.CSSProperties}
      >
        <p className="text-[11px] font-semibold leading-snug" style={{ color: "var(--note-lemon-ink)" }}>
          ☀️ Morning thoughts welcome
        </p>
        <p className="mt-1.5 text-[10px] opacity-65" style={{ color: "var(--note-lemon-ink)" }}>
          📍 12 min ago
        </p>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Ambient glow — top center */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 -translate-y-1/3 rounded-full blur-[140px]"
        style={{ background: "oklch(57.8% 0.19 293 / 0.08)" }}
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-5xl grid-cols-1 items-center gap-12 px-5 pb-20 pt-24 sm:pb-28 sm:pt-32 lg:grid-cols-[1fr_auto] lg:gap-16">
        {/* Copy */}
        <div className="max-w-[540px]">
          <h1 className="anim-rise font-display text-[clamp(2.4rem,5.5vw,4rem)] font-bold leading-[1.06] tracking-[-0.028em] text-ink">
            Drop a plant.{" "}
            <span className="text-accent">Find your people.</span>
          </h1>

          <p className="anim-rise-1 mt-5 max-w-[52ch] text-[1.05rem] leading-[1.65] text-body">
            Write your intention for being here — curious conversation, deep work, a
            book rec. Woozly AI reads who else is at this cafe, bar, or park and
            tells you who you&apos;d actually click with.
          </p>

          <div className="anim-rise-2 mt-8 flex flex-wrap items-center gap-3">
            <a
              href={APP_STORE_URL}
              className="rounded-full bg-accent px-7 py-3.5 font-semibold text-white transition-all hover:bg-accent-deep hover:shadow-[0_4px_16px_oklch(40.8%_0.228_293/0.3)]"
            >
              Download on iOS
            </a>
            <a
              href="#intention"
              className="rounded-full px-5 py-3.5 font-medium text-body transition-colors hover:text-ink"
            >
              See how it works
            </a>
          </div>

          {/* Social proof chips */}
          <div className="anim-rise-3 mt-10 flex flex-wrap gap-2.5">
            {[
              { dot: true, text: "7 people at Narrative Coffee" },
              { dot: true, text: "3 plants active" },
              { dot: false, text: "AI matching live" },
            ].map(({ dot, text }) => (
              <span
                key={text}
                className="flex items-center gap-2 rounded-full border border-line bg-surface px-3.5 py-1.5 text-sm text-body"
              >
                {dot && (
                  <span
                    className="anim-pulse-dot h-2 w-2 shrink-0 rounded-full bg-sage"
                    aria-hidden="true"
                  />
                )}
                {!dot && (
                  <span className="text-[11px]" aria-hidden="true">✨</span>
                )}
                {text}
              </span>
            ))}
          </div>
        </div>

        {/* Product mockup */}
        <div className="anim-rise-2 relative flex justify-center lg:justify-end">
          <PlaceCard />
        </div>
      </div>
    </section>
  );
}
