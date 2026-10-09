import { LeafMark } from "./LeafMark";
import { DraggableNote } from "./DraggableNote";
import { SwipeCardDeck } from "./SwipeCardDeck";
import { PlaceJoinDemo } from "./PlaceJoinDemo";
import { INTENTS, PLACE_TYPES } from "@/lib/woozly-features";

/* ── Intent chips ── */
function IntentChips() {
  return (
    <div className="flex flex-wrap gap-2">
      {INTENTS.map((i) => (
        <span
          key={i.key}
          className="flex items-center gap-1.5 rounded-full border border-line bg-surface px-3 py-1.5 text-sm font-medium text-body"
        >
          {i.emoji} {i.label}
        </span>
      ))}
    </div>
  );
}


/* ── Sticky notes board ── */
function StickyBoard() {
  const notes = [
    { cls: "anim-float",   bg: "var(--note-lemon)",   ink: "var(--note-lemon-ink)",   rotate: "-3deg",  left: "0",    top: "12px", zIndex: 10, emoji: "☀️", text: "Best espresso is the window seat — trust me.", meta: "📍 Narrative Coffee · 8 min ago" },
    { cls: "anim-float-b", bg: "var(--note-mint)",    ink: "var(--note-mint-ink)",    rotate: "2.5deg", right: "0",   top: "0",    zIndex: 20, emoji: "📚", text: "Quiet side is behind the plants. Regulars know.", meta: "📍 Riverside Park · 22 min ago" },
    { cls: "anim-float-c", bg: "var(--note-peach)",   ink: "var(--note-peach-ink)",   rotate: "-1.5deg",left: "60px", bottom: "0", zIndex: 30, emoji: "🎵", text: "Tuesday evenings get a live set. Worth coming back.", meta: "📍 Mono Bar · 5 min ago" },
    { cls: "anim-float-d", bg: "var(--note-lavender)",ink: "var(--note-lavender-ink)",rotate: "4deg",   right: "20px",top: "50%",  zIndex: 25, emoji: "💡", text: "Ask for the off-menu matcha. Life-changing.", meta: "📍 The Library · 14 min ago" },
  ] as const;

  return (
    <div className="relative h-72 w-full sm:h-80 lg:h-96">
      {notes.map((n, i) => (
        <DraggableNote
          key={i}
          rotate={parseFloat(n.rotate)}
          className="absolute w-44 rounded-xl p-4"
          style={{
            background: n.bg,
            left: "left" in n ? n.left : undefined,
            right: "right" in n ? n.right : undefined,
            top: "top" in n ? n.top : undefined,
            bottom: "bottom" in n ? n.bottom : undefined,
            zIndex: n.zIndex,
            boxShadow: "0 2px 6px oklch(0% 0 0 / 0.09), 0 8px 22px oklch(0% 0 0 / 0.08)",
          }}
        >
          <p className="mb-1 text-base leading-none">{n.emoji}</p>
          <p className="mt-1.5 text-[12px] font-medium leading-snug" style={{ color: n.ink }}>{n.text}</p>
          <p className="mt-2.5 text-[10px] opacity-65" style={{ color: n.ink }}>{n.meta}</p>
        </DraggableNote>
      ))}
    </div>
  );
}

/* ── Instagram share card ── */
function InstagramCard() {
  return (
    <div className="relative h-64 w-40 overflow-hidden rounded-2xl" style={{ background: "linear-gradient(135deg, oklch(40.8% 0.228 293), oklch(47% 0.09 155))", boxShadow: "0 4px 16px oklch(0% 0 0 / 0.15)" }}>
      <div className="absolute inset-0 flex flex-col justify-between p-4 text-white">
        <div>
          <div className="mb-2 flex items-center gap-1.5">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/>
              <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
            </svg>
            <span className="text-[11px] font-semibold opacity-90">woozly</span>
          </div>
          <p className="text-sm font-bold leading-tight">Narrative Coffee</p>
          <p className="mt-0.5 text-[10px] opacity-75">7 here · 3 plants active</p>
        </div>
        <div>
          <div className="mb-3 rounded-lg bg-white/15 p-2.5 backdrop-blur-sm">
            <p className="text-[10px] font-medium leading-tight">Plants active: ☕ ×2 · 💬 ×1. Join and drop yours.</p>
          </div>
          <p className="text-[9px] font-semibold uppercase tracking-wider opacity-70">Drop your plant on Woozly</p>
        </div>
      </div>
    </div>
  );
}

/* ── Incognito card ── */
function IncognitoCard() {
  return (
    <div className="w-full max-w-xs rounded-2xl bg-surface p-5" style={{ boxShadow: "0 2px 8px oklch(0% 0 0 / 0.06), 0 12px 32px oklch(0% 0 0 / 0.07)" }}>
      {/* Incognito presence — you're here but hidden */}
      <div className="flex items-center gap-3">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ink text-base">🕶️</span>
        <div className="min-w-0">
          <p className="font-display text-sm font-semibold text-ink">You · Incognito</p>
          <p className="text-xs text-muted">Not shown on the wall</p>
        </div>
        <span className="ml-auto shrink-0 rounded-full bg-accent-pale px-2.5 py-1 text-[11px] font-semibold text-accent">Hidden</span>
      </div>

      {/* Anonymous message — reach out before revealing who you are */}
      <div className="mt-4 rounded-xl bg-surface-2 p-3.5">
        <p className="text-xs leading-relaxed text-body">
          &ldquo;Saw you&apos;re here for deep work too — mind if I take the quiet corner?&rdquo;
        </p>
        <p className="mt-2 flex items-center gap-1.5 text-[10px] text-muted">
          <span aria-hidden="true">🕶️</span> Sent anonymously · reveal when it clicks
        </p>
      </div>
    </div>
  );
}

export function Features() {
  return (
    <>
      {/* ── PEOPLE MODE ── */}
      <section id="intention" className="border-t border-line">
        <div className="mx-auto max-w-5xl px-5 py-20 sm:py-28">

          {/* Mode label */}
          <div className="mb-12 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent-pale px-4 py-1.5">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="text-accent" aria-hidden="true"><circle cx="12" cy="8" r="4"/><path d="M20 21a8 8 0 1 0-16 0"/></svg>
            <span className="text-xs font-semibold text-accent">People mode</span>
          </div>

          {/* 1. Drop a plant with an intent */}
          <div className="grid items-start gap-12 lg:grid-cols-[1fr_1fr]">
            <div>
              <LeafMark size={28} className="text-sage" />
              <h2 className="mt-5 font-display text-[clamp(1.9rem,4vw,2.8rem)] font-bold leading-[1.1] tracking-[-0.025em] text-ink">
                Drop a plant.<br />Pick your intent.
              </h2>
              <p className="mt-4 max-w-[50ch] leading-[1.65] text-body">
                A plant is a pin you drop at the place you&apos;re at. Pick one of seven
                intents to signal why you&apos;re here. Others nearby with their own plant
                can see yours — and Woozly AI scores how well you match.
              </p>
              <p className="mt-3 max-w-[50ch] text-sm leading-[1.65] text-muted">
                Discovery is double opt-in: both people must have dropped a plant
                nearby. You don&apos;t appear to people who haven&apos;t dropped one.
              </p>
              <div className="mt-6">
                <IntentChips />
              </div>
            </div>

            {/* Swipe deck visual */}
            <div className="flex justify-center lg:justify-end">
              <SwipeCardDeck />
            </div>
          </div>

          {/* Water → Match → Chat */}
          <div className="mt-20">
            <h2 className="font-display text-2xl font-bold tracking-[-0.025em] text-ink sm:text-3xl">
              Water. Match. Chat.
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              {[
                {
                  step: "Water",
                  icon: "💧",
                  body: "Swipe the deck of nearby people. Water (like) someone's plant to say you're interested. 20 waters/day on Free, 50 on Premium. Super likes go straight to their notifications.",
                },
                {
                  step: "Mutual match",
                  icon: "🌱",
                  body: "When both of you water each other's plant, it's a match. The chat unlocks immediately — no waiting, no cold open. Both sides already said yes.",
                },
                {
                  step: "Message request",
                  icon: "💬",
                  body: "One-sided water sends a message request the other person can accept or reject. End-to-end encrypted. Free users get 1 AI conversation opener per chat; Premium gets unlimited.",
                },
              ].map((s) => (
                <div key={s.step} className="rounded-2xl border border-line bg-surface p-6" style={{ boxShadow: "0 2px 8px oklch(0% 0 0 / 0.04)" }}>
                  <p className="text-2xl">{s.icon}</p>
                  <h3 className="mt-3 font-display text-lg font-semibold tracking-[-0.02em] text-ink">{s.step}</h3>
                  <p className="mt-2 text-sm leading-[1.65] text-body">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PLACE MODE ── */}
      <section
        id="place"
        className="border-t border-line"
        style={{
          backgroundColor: "var(--sage-light)",
          backgroundImage: "radial-gradient(circle, rgba(17,12,34,0.06) 1.3px, transparent 1.3px)",
          backgroundSize: "26px 26px",
        }}
      >
        <div className="mx-auto max-w-5xl px-5 py-20 sm:py-28">

          {/* Mode label */}
          <div className="mb-12 inline-flex items-center gap-2 rounded-full border border-sage/30 bg-white px-4 py-1.5">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="text-sage" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
            <span className="text-xs font-semibold text-sage">Place mode</span>
          </div>

          {/* Supported place types */}
          <div className="mb-14">
            <h2 className="font-display text-[clamp(1.9rem,4vw,2.8rem)] font-bold leading-[1.1] tracking-[-0.025em] text-ink">
              Join any kind of place near you.
            </h2>
            <p className="mt-4 max-w-[52ch] leading-[1.65] text-body">
              Woozly works wherever people gather. Step into any of these, see who&apos;s there, and join the room.
            </p>
            <div className="mt-6 flex flex-wrap gap-2.5">
              {PLACE_TYPES.map((p) => (
                <span
                  key={p.label}
                  className="flex items-center gap-2 rounded-full border border-sage/25 bg-white px-3.5 py-2 text-sm font-medium text-ink"
                >
                  <span aria-hidden="true">{p.emoji}</span>
                  {p.label}
                </span>
              ))}
            </div>
          </div>

          {/* Interactive join demo */}
          <div className="mb-14">
            <PlaceJoinDemo />
          </div>

          {/* Notes */}
          <div className="grid items-start gap-12 lg:grid-cols-[1fr_1fr]">
            <div>
              <h2 className="font-display text-[clamp(1.9rem,4vw,2.8rem)] font-bold leading-[1.1] tracking-[-0.025em] text-ink">
                Leave a note.<br />Build the place&apos;s memory.
              </h2>
              <p className="mt-4 max-w-[50ch] leading-[1.65] text-body">
                Notes are free-text (or photo) sticky notes pinned at a place — separate from plants. Write a tip, a feeling, an observation. Others who visit that spot find it, react to it, and add their own. The place builds a living memory.
              </p>
              <ul className="mt-6 space-y-2.5 text-sm text-body">
                {[
                  "Pinned at place level — visible to everyone who joins",
                  "Others can react and layer their own notes on top",
                  "3 notes/day free · 6/day on Premium",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0 text-sage" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <StickyBoard />
          </div>

          {/* Events + Instagram */}
          <div className="mt-20 grid items-center gap-12 lg:grid-cols-[1fr_auto_1fr]">
            <div>
              <span className="mb-3 inline-block rounded-full bg-accent-pale px-3 py-1 text-xs font-semibold text-accent">Premium</span>
              <h2 className="font-display text-[clamp(1.7rem,3.5vw,2.5rem)] font-bold leading-[1.1] tracking-[-0.025em] text-ink">
                Be there, invisibly.
              </h2>
              <p className="mt-4 leading-[1.65] text-body">
                Join any place <span className="font-semibold text-ink">incognito</span> — see who&apos;s there and read the room without ever appearing on the wall. And when you&apos;re ready to reach out, <span className="font-semibold text-ink">message anonymously</span>: start the conversation first, reveal who you are when it clicks.
              </p>
              <div className="mt-8"><IncognitoCard /></div>
            </div>
            <div className="hidden h-32 w-px bg-line lg:block" aria-hidden="true" />
            <div>
              <h2 className="font-display text-[clamp(1.7rem,3.5vw,2.5rem)] font-bold leading-[1.1] tracking-[-0.025em] text-ink">
                Share your place to Instagram.
              </h2>
              <p className="mt-4 leading-[1.65] text-body">
                One tap generates a place card showing active plants, the vibe, and a join link. Share to stories and friends land straight in the room. Premium feature.
              </p>
              <div className="mt-8 flex"><InstagramCard /></div>
            </div>
          </div>

          {/* Vibe Check */}
          <div className="mt-14 rounded-2xl border border-sage/20 bg-white p-8 sm:p-10" style={{ boxShadow: "0 2px 8px oklch(0% 0 0 / 0.04)" }}>
            <div className="flex flex-wrap items-start gap-8">
              <div className="flex-1 min-w-[200px]">
                <span className="mb-3 inline-block rounded-full bg-sage-light px-3 py-1 text-xs font-semibold text-sage">Premium · AI</span>
                <h3 className="font-display text-xl font-bold tracking-[-0.02em] text-ink">Vibe Check</h3>
                <p className="mt-2 leading-[1.65] text-body">
                  An AI read of a place&apos;s current crowd and energy — who&apos;s here, what they&apos;re here for, and whether it matches your mood. Updates live as plants are dropped and people come and go.
                </p>
              </div>
              <div className="flex flex-col gap-2.5 text-sm">
                {[
                  "Live crowd snapshot from active plants",
                  "Intent breakdown (Coffee × 3, Chat × 2…)",
                  "Energy level — focused, social, mixed",
                ].map((b) => (
                  <div key={b} className="flex items-center gap-2">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sage-light text-[10px]">✓</span>
                    <span className="text-body">{b}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Ghost mode */}
          <div className="mt-6 rounded-2xl border border-accent/15 bg-white p-8 sm:p-10" style={{ boxShadow: "0 2px 8px oklch(0% 0 0 / 0.04)" }}>
            <div className="flex flex-wrap items-start gap-8">
              <div className="flex-1 min-w-[200px]">
                <span className="mb-3 inline-block rounded-full bg-accent-pale px-3 py-1 text-xs font-semibold text-accent">Premium</span>
                <h3 className="flex items-center gap-2 font-display text-xl font-bold tracking-[-0.02em] text-ink">
                  <span aria-hidden="true">👻</span> Ghost mode
                </h3>
                <p className="mt-2 leading-[1.65] text-body">
                  Leave the place, but stay on its wall. Your plant keeps being discovered after you walk out — people who arrive later still find you and can reach out. A quick visit keeps working for you long after you&apos;re gone.
                </p>
              </div>
              <div className="flex flex-col gap-2.5 text-sm">
                {[
                  "Your plant stays live after you leave",
                  "Late arrivals can still match you",
                  "Pairs with Incognito — hide while there, linger after",
                ].map((b) => (
                  <div key={b} className="flex items-center gap-2">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-pale text-[10px]">✓</span>
                    <span className="text-body">{b}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
