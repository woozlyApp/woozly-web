import { APP_STORE_URL } from "@/lib/site";
import { DraggableNote } from "./DraggableNote";

function PlaceCard() {
  return (
    <div className="relative">
      {/* Draggable sticky note — peach */}
      <DraggableNote
        rotate={-5}
        className="absolute -left-8 -top-6 z-10 w-40 rounded-xl p-3.5"
        style={{
          background: "var(--note-peach)",
          boxShadow: "0 2px 8px oklch(0% 0 0 / 0.09), 0 8px 20px oklch(0% 0 0 / 0.07)",
        }}
      >
        <p className="text-[11px] font-semibold leading-snug" style={{ color: "var(--note-peach-ink)" }}>
          👋 First time here. Anyone a regular?
        </p>
        <p className="mt-1.5 text-[10px] opacity-70" style={{ color: "var(--note-peach-ink)" }}>
          placed 3 min ago
        </p>
      </DraggableNote>

      {/* Main place card — draggable */}
      <DraggableNote
        rotate={-1.5}
        pin={false}
        className="relative z-20 w-full max-w-[340px] overflow-hidden rounded-2xl bg-surface"
        style={{
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

        {/* Café photo with caption — the "inside the place" view */}
        <div
          className="relative h-44 w-full overflow-hidden"
          style={{ background: "linear-gradient(135deg, oklch(42% 0.06 55), oklch(28% 0.04 50))" }}
        >
          {/* Drop a famous-café photo at public/cafe.jpg — gradient shows until then */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url(/cafe.jpg)" }}
            role="img"
            aria-label="Narrative Coffee interior"
          />
          {/* Caption overlay */}
          <div
            className="absolute inset-x-0 bottom-0 px-4 pb-3 pt-8"
            style={{ background: "linear-gradient(to top, oklch(0% 0 0 / 0.6), transparent)" }}
          >
            <p className="text-[13px] font-semibold text-white">
              The window corner, 8am
            </p>
            <p className="text-[11px] text-white/75">📍 Narrative Coffee · posted by Maya</p>
          </div>

          {/* Sticky note stuck ON the photo — draggable within the card */}
          <DraggableNote
            rotate={5}
            className="absolute right-3 top-3 w-28 rounded-lg p-2.5"
            style={{
              background: "var(--note-lemon)",
              boxShadow: "0 2px 8px oklch(0% 0 0 / 0.2)",
            }}
          >
            <p className="text-[10px] font-semibold leading-snug" style={{ color: "var(--note-lemon-ink)" }}>
              Best oat latte in town ✨
            </p>
          </DraggableNote>
        </div>

        {/* Notes strip — what the place's wall holds */}
        <div className="flex items-center gap-2 border-t border-line px-5 py-3.5">
          <span className="text-sm">💬</span>
          <p className="text-xs text-muted">
            <span className="font-semibold text-ink">5 notes</span> on this place&apos;s wall
          </p>
          <span className="ml-auto flex -space-x-1.5">
            {["var(--note-peach)", "var(--note-lemon)", "var(--sage-light)"].map((c, i) => (
              <span key={i} className="h-5 w-5 rounded-md border border-surface" style={{ background: c }} aria-hidden="true" />
            ))}
          </span>
        </div>
      </DraggableNote>

      {/* Draggable sticky note — lemon */}
      <DraggableNote
        rotate={4}
        className="absolute -right-6 top-8 z-30 w-36 rounded-xl p-3"
        style={{
          background: "var(--note-lemon)",
          boxShadow: "0 2px 8px oklch(0% 0 0 / 0.1), 0 8px 20px oklch(0% 0 0 / 0.07)",
        }}
      >
        <p className="text-[11px] font-semibold leading-snug" style={{ color: "var(--note-lemon-ink)" }}>
          ☀️ Morning thoughts welcome
        </p>
        <p className="mt-1.5 text-[10px] opacity-65" style={{ color: "var(--note-lemon-ink)" }}>
          📍 12 min ago
        </p>
      </DraggableNote>
    </div>
  );
}

export function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        backgroundColor: "#F4F3F7",
        backgroundImage:
          "radial-gradient(circle, rgba(17,12,34,0.07) 1.3px, transparent 1.3px)",
        backgroundSize: "26px 26px",
      }}
    >
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
            Join the place.{" "}
            <span className="text-accent">Find your people.</span>
          </h1>

          <p className="anim-rise-1 mt-5 max-w-[52ch] text-[1.05rem] leading-[1.65] text-body">
            Step into any café, bar, or park near you and see who&apos;s actually
            there. Join <span className="font-semibold text-ink">incognito</span> —
            look before you leap. Woozly AI surfaces who&apos;s on your wavelength;
            drop a plant and match when you&apos;re ready.
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
              { dot: false, text: "Join incognito" },
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
