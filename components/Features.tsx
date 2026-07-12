import { LeafMark } from "./LeafMark";

/* ── Sticky Notes section visual ── */
function StickyBoard() {
  const notes = [
    {
      cls: "anim-float",
      bg: "var(--note-lemon)",
      ink: "var(--note-lemon-ink)",
      rotate: "-3deg",
      left: "0",
      top: "12px",
      zIndex: 10,
      emoji: "☀️",
      text: "Morning thoughts welcome. Looking for thoughtful conversation.",
      meta: "📍 Narrative Coffee · 8 min ago",
      wide: true,
    },
    {
      cls: "anim-float-b",
      bg: "var(--note-mint)",
      ink: "var(--note-mint-ink)",
      rotate: "2.5deg",
      left: "auto",
      right: "0",
      top: "0",
      zIndex: 20,
      emoji: "📚",
      text: "Deep in a book. Tap me if you're reading too.",
      meta: "📍 Riverside Park · 22 min ago",
    },
    {
      cls: "anim-float-c",
      bg: "var(--note-peach)",
      ink: "var(--note-peach-ink)",
      rotate: "-1.5deg",
      left: "60px",
      top: "auto",
      bottom: "0",
      zIndex: 30,
      emoji: "🎵",
      text: "Composing. Say hi if you make music.",
      meta: "📍 Mono Bar · 5 min ago",
    },
    {
      cls: "anim-float-d",
      bg: "var(--note-lavender)",
      ink: "var(--note-lavender-ink)",
      rotate: "4deg",
      right: "20px",
      top: "50%",
      zIndex: 25,
      emoji: "💡",
      text: "Thinking through a startup idea. Fresh eyes welcome.",
      meta: "📍 The Library · 14 min ago",
    },
  ] as const;

  return (
    <div className="relative h-72 w-full sm:h-80 lg:h-96">
      {notes.map((n, i) => (
        <div
          key={i}
          className={`${n.cls} absolute w-44 rounded-xl p-4`}
          style={{
            "--r": n.rotate,
            background: n.bg,
            transform: `rotate(${n.rotate})`,
            left: "left" in n ? n.left : undefined,
            right: "right" in n ? n.right : undefined,
            top: "top" in n ? n.top : undefined,
            bottom: "bottom" in n ? n.bottom : undefined,
            zIndex: n.zIndex,
            boxShadow: "0 2px 6px oklch(0% 0 0 / 0.09), 0 8px 22px oklch(0% 0 0 / 0.08)",
          } as React.CSSProperties}
        >
          <p className="mb-1 text-base leading-none">{n.emoji}</p>
          <p className="mt-1.5 text-[12px] font-medium leading-snug" style={{ color: n.ink }}>
            {n.text}
          </p>
          <p className="mt-2.5 text-[10px] opacity-65" style={{ color: n.ink }}>
            {n.meta}
          </p>
        </div>
      ))}
    </div>
  );
}

/* ── AI Match visual ── */
function MatchVisual() {
  return (
    <div className="flex flex-col items-center gap-6">
      <div className="flex w-full max-w-sm items-center gap-4">
        {/* Person A */}
        <div className="flex flex-col items-center gap-2">
          <div
            className="flex h-16 w-16 items-center justify-center rounded-full font-display text-xl font-bold"
            style={{
              background: "var(--accent-pale)",
              color: "var(--accent)",
              boxShadow: "0 0 0 4px oklch(40.8% 0.228 293 / 0.12)",
            }}
          >
            M
          </div>
          <p className="text-xs font-medium text-ink">Maya</p>
          <p className="max-w-[80px] text-center text-[10px] leading-tight text-muted">
            here to meet new people
          </p>
        </div>

        {/* Connection line + score */}
        <div className="relative flex-1">
          <div
            className="anim-glow-line h-px w-full"
            style={{
              background: "linear-gradient(90deg, var(--accent), var(--sage))",
            }}
          />
          <div
            className="anim-match-pop absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-surface px-3 py-1.5 text-sm font-bold text-accent"
            style={{
              boxShadow: "0 2px 8px oklch(0% 0 0 / 0.1), 0 0 0 1px oklch(90% 0.008 290)",
            }}
          >
            ✨ 94%
          </div>
        </div>

        {/* Person B */}
        <div className="flex flex-col items-center gap-2">
          <div
            className="flex h-16 w-16 items-center justify-center rounded-full font-display text-xl font-bold"
            style={{
              background: "var(--sage-light)",
              color: "var(--sage)",
              boxShadow: "0 0 0 4px oklch(47% 0.09 155 / 0.12)",
            }}
          >
            J
          </div>
          <p className="text-xs font-medium text-ink">Jonas</p>
          <p className="max-w-[80px] text-center text-[10px] leading-tight text-muted">
            deep work, open to ideas
          </p>
        </div>
      </div>

      <p className="text-center text-xs text-muted">
        Scored live as new plants are dropped at this place
      </p>
    </div>
  );
}

/* ── Instagram share card preview ── */
function InstagramCard() {
  return (
    <div
      className="relative h-64 w-40 overflow-hidden rounded-2xl"
      style={{
        background: "linear-gradient(135deg, oklch(40.8% 0.228 293), oklch(47% 0.09 155))",
        boxShadow: "0 4px 16px oklch(0% 0 0 / 0.15)",
      }}
    >
      <div className="absolute inset-0 flex flex-col justify-between p-4 text-white">
        <div>
          <div className="mb-2 flex items-center gap-1.5">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
              <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
            </svg>
            <span className="text-[11px] font-semibold opacity-90">woozly</span>
          </div>
          <p className="text-sm font-bold leading-tight">Narrative Coffee</p>
          <p className="mt-0.5 text-[10px] opacity-75">7 people · 3 plants</p>
        </div>
        <div>
          <div className="mb-3 rounded-lg bg-white/15 p-2.5 backdrop-blur-sm">
            <p className="text-[10px] font-medium leading-tight">
              ☀️ &quot;Morning thoughts welcome. Looking for thoughtful conversation.&quot;
            </p>
          </div>
          <p className="text-[9px] font-semibold uppercase tracking-wider opacity-70">
            Drop your plant on Woozly
          </p>
        </div>
      </div>
    </div>
  );
}

/* ── Event card ── */
function EventCard() {
  return (
    <div
      className="w-full max-w-xs rounded-2xl bg-surface p-5"
      style={{
        boxShadow: "0 2px 8px oklch(0% 0 0 / 0.06), 0 12px 32px oklch(0% 0 0 / 0.07)",
      }}
    >
      <div className="flex items-center justify-between">
        <p className="font-display text-sm font-semibold text-ink">Saturday Morning Run</p>
        <span className="rounded-full bg-sage-light px-2.5 py-1 text-[11px] font-semibold text-sage">
          6 going
        </span>
      </div>
      <p className="mt-1 text-xs text-muted">Hosted at Riverside Park · Sat 7:30 AM</p>

      <div className="mt-4 flex -space-x-2">
        {["M", "J", "A", "R"].map((l, i) => (
          <div
            key={i}
            className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-surface font-display text-[11px] font-semibold"
            style={{
              background: i % 2 === 0 ? "var(--accent-pale)" : "var(--sage-light)",
              color: i % 2 === 0 ? "var(--accent)" : "var(--sage)",
            }}
          >
            {l}
          </div>
        ))}
        <div className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-surface bg-surface-2 text-[10px] font-semibold text-muted">
          +2
        </div>
      </div>

      <button
        className="mt-4 w-full rounded-xl bg-sage-light py-2.5 text-sm font-semibold text-sage transition-colors hover:bg-sage hover:text-white"
        type="button"
        aria-label="RSVP to event"
      >
        RSVP
      </button>
    </div>
  );
}

export function Features() {
  return (
    <>
      {/* ── Section 1: Drop a plant with intention ── */}
      <section
        id="intention"
        className="border-t border-line"
        style={{ background: "var(--sage-light)" }}
      >
        <div className="mx-auto max-w-5xl px-5 py-20 sm:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_1fr]">
            <div>
              <LeafMark size={32} className="text-sage" />
              <h2 className="mt-6 font-display text-[clamp(1.9rem,4vw,2.8rem)] font-bold leading-[1.1] tracking-[-0.025em] text-ink">
                Drop a plant.<br />Show what you&apos;re here for.
              </h2>
              <p className="mt-4 max-w-[50ch] leading-[1.65] text-body">
                A plant is a sticky note pinned to where you&apos;re standing right now.
                Write your intention — deep work, book recs, curious conversation,
                first time here. People who pass by find it and message you.
                It&apos;s a way to be found without standing around waiting.
              </p>
              <ul className="mt-6 space-y-2.5 text-sm text-body">
                {[
                  "Pinned to the exact bench, shelf, or table you're at",
                  "Anyone at this place can discover and reply",
                  "Disappears when you leave",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mt-0.5 shrink-0 text-sage"
                      aria-hidden="true"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <StickyBoard />
          </div>
        </div>
      </section>

      {/* ── Section 2: Woozly AI Match ── */}
      <section id="match" className="border-t border-line">
        <div className="mx-auto max-w-5xl px-5 py-20 sm:py-28">
          <div className="grid items-center gap-14 lg:grid-cols-[1fr_1fr]">
            <div className="order-2 flex justify-center lg:order-1">
              <MatchVisual />
            </div>

            <div className="order-1 lg:order-2">
              <p className="mb-4 text-sm font-semibold text-accent">Woozly AI</p>
              <h2 className="font-display text-[clamp(1.9rem,4vw,2.8rem)] font-bold leading-[1.1] tracking-[-0.025em] text-ink">
                Reads the room.<br />Finds your match.
              </h2>
              <p className="mt-4 max-w-[50ch] leading-[1.65] text-body">
                Woozly reads every plant at this place and calculates live
                compatibility scores between you and everyone here. Not who&apos;s
                nearby. Who&apos;s actually on your wavelength right now, based on what
                you&apos;re both here for.
              </p>
              <p className="mt-3 max-w-[50ch] leading-[1.65] text-body">
                The score updates as new plants are dropped. Walk in curious,
                leave with someone worth knowing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 3: Sticky notes on places + Place connection ── */}
      <section className="border-t border-line bg-surface-2">
        <div className="mx-auto max-w-5xl px-5 py-20 sm:py-28">
          <div className="grid gap-10 sm:grid-cols-2">
            <div>
              <h2 className="font-display text-2xl font-bold tracking-[-0.025em] text-ink sm:text-3xl">
                Your notes live at the place.
              </h2>
              <p className="mt-3 leading-[1.65] text-body">
                Sticky notes stay attached to the physical spot where you dropped
                them. A favorite table, a quiet bench, the shelf in the back.
                People who visit that exact spot find your note and can add their
                own. The place builds a memory.
              </p>
              <p className="mt-3 leading-[1.65] text-body">
                Share a place card to Instagram stories — your notes, the vibe,
                who&apos;s there right now — and invite friends to join you.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold tracking-[-0.025em] text-ink sm:text-3xl">
                Become a regular. Make it yours.
              </h2>
              <p className="mt-3 leading-[1.65] text-body">
                Every time you check in, you build loyalty at that place.
                Regulars earn visible presence — your plant gets seen first when
                you&apos;re there. The cafe, bar, or park starts to feel like yours.
              </p>
              <p className="mt-3 leading-[1.65] text-body">
                Mute any place when you need quiet. It stays on the map; it just
                stops notifying you until you&apos;re ready.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 4: Events + Instagram share ── */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-5xl px-5 py-20 sm:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_auto_1fr]">
            {/* Events */}
            <div>
              <h2 className="font-display text-[clamp(1.7rem,3.5vw,2.5rem)] font-bold leading-[1.1] tracking-[-0.025em] text-ink">
                Host an event at your place.
              </h2>
              <p className="mt-4 leading-[1.65] text-body">
                Invite people from the place&apos;s room to a real gathering — a morning
                run, trivia night, a study session. Woozly handles invites, RSVPs,
                and the reminder. The place is already the venue.
              </p>
              <div className="mt-8">
                <EventCard />
              </div>
            </div>

            <div className="hidden h-32 w-px bg-line lg:block" aria-hidden="true" />

            {/* Instagram share */}
            <div>
              <h2 className="font-display text-[clamp(1.7rem,3.5vw,2.5rem)] font-bold leading-[1.1] tracking-[-0.025em] text-ink">
                Share your place to Instagram.
              </h2>
              <p className="mt-4 leading-[1.65] text-body">
                One tap generates a shareable card with your plant, the vibe at
                this place, and a link so friends can join the room from your story.
                Turn a quiet afternoon into a gathering.
              </p>
              <div className="mt-8 flex justify-start">
                <InstagramCard />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
