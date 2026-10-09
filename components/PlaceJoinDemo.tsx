"use client";

import { useEffect, useState } from "react";
import { DraggableNote } from "./DraggableNote";

type Step = "join" | "inside";

interface Member {
  name: string;
  photo?: string;
  initial?: string;
  tint?: string;
  intent: string;
}

const ROSTER: Member[] = [
  { name: "Maya", photo: "/people/1.jpg", intent: "☕ Coffee" },
  { name: "Aliya", photo: "/people/2.jpg", intent: "💬 Chat" },
  { name: "Sophie", photo: "/people/3.jpg", intent: "🔥 Spark" },
  { name: "Jonas", initial: "J", tint: "var(--sage-light)", intent: "💡 Collab" },
  { name: "Priya", initial: "P", tint: "var(--note-peach)", intent: "🏃 Activity" },
  { name: "Leo", initial: "L", tint: "var(--note-lemon)", intent: "🤝 Network" },
  { name: "Nora", initial: "N", tint: "var(--accent-pale)", intent: "✨ Open" },
];

const WALL_NOTES = [
  { text: "Best oat latte in town ✨", bg: "var(--note-lemon)", ink: "var(--note-lemon-ink)", rot: -4 },
  { text: "Window corner is free + quiet 🪟", bg: "var(--note-peach)", ink: "var(--note-peach-ink)", rot: 3 },
  { text: "👋 First time here — anyone a regular?", bg: "var(--sage-light)", ink: "var(--sage)", rot: -2 },
];

/* icons */
const DoorIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 4h3a2 2 0 0 1 2 2v14M2 20h3M13 20h9M10 12v.01M13 2H7a2 2 0 0 0-2 2v16" /></svg>
);
const GhostIcon = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 10h.01M15 10h.01M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8Z" /></svg>
);
const SparkIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.9 5.8L4 10.7l5.3 3.8L7.4 20 12 16.4 16.6 20l-1.9-5.5L20 10.7l-6.1-1.9L12 3Z" /></svg>
);
const CloseIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12" /></svg>
);

function Avatar({ m, size = 40, ghost = false }: { m: Member; size?: number; ghost?: boolean }) {
  if (ghost) {
    return (
      <span
        className="flex items-center justify-center rounded-full border-2 border-dashed text-muted"
        style={{ width: size, height: size, borderColor: "var(--accent)", color: "var(--accent)", background: "var(--accent-pale)" }}
      >
        <GhostIcon size={size * 0.42} />
      </span>
    );
  }
  if (m.photo) {
    return (
      <span
        className="block rounded-full bg-cover bg-center ring-2 ring-white"
        style={{ width: size, height: size, backgroundImage: `url(${m.photo})` }}
        aria-label={m.name}
      />
    );
  }
  return (
    <span
      className="flex items-center justify-center rounded-full font-display font-bold text-ink ring-2 ring-white"
      style={{ width: size, height: size, background: m.tint, fontSize: size * 0.4 }}
    >
      {m.initial}
    </span>
  );
}

export function PlaceJoinDemo() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<Step>("join");
  const [startIncognito, setStartIncognito] = useState(false);
  const [mounted, setMounted] = useState(false); // sheet slide-in
  const [joined, setJoined] = useState(false); // roster pop-in trigger

  useEffect(() => {
    if (!open) return undefined;
    document.body.style.overflow = "hidden";
    const t = requestAnimationFrame(() => setMounted(true));
    return () => {
      cancelAnimationFrame(t);
      document.body.style.overflow = "";
      setMounted(false);
    };
  }, [open]);

  const openDemo = () => {
    setStep("join");
    setJoined(false);
    setOpen(true);
  };
  const close = () => setOpen(false);

  const enter = (incog: boolean) => {
    setStartIncognito(incog);
    setStep("inside");
    requestAnimationFrame(() => setJoined(true));
  };

  return (
    <>
      {/* Trigger */}
      <button
        type="button"
        onClick={openDemo}
        className="group inline-flex items-center gap-3 rounded-2xl border border-accent/25 bg-white px-5 py-3.5 text-left shadow-[0_2px_10px_oklch(0%_0_0/0.05)] transition-all hover:-translate-y-0.5 hover:shadow-[0_6px_20px_oklch(40.8%_0.228_293/0.18)]"
      >
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-pale text-accent">
          <DoorIcon />
        </span>
        <span>
          <span className="block text-sm font-semibold text-ink">See the join flow</span>
          <span className="block text-xs text-muted">Tap to join Narrative Coffee — just like the app</span>
        </span>
        <span className="ml-1 text-accent transition-transform group-hover:translate-x-0.5" aria-hidden="true">→</span>
      </button>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          style={{ background: "oklch(14% 0.02 290 / 0.55)", backdropFilter: "blur(6px)" }}
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label="Join a place demo"
        >
          {/* Phone frame */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative overflow-hidden rounded-[44px] border-[7px] border-[#0f0d18] bg-black"
            style={{
              width: 320,
              height: 660,
              boxShadow: "0 24px 60px oklch(0% 0 0 / 0.45), 0 0 0 1px oklch(0% 0 0 / 0.3)",
              transform: mounted ? "scale(1)" : "scale(0.92)",
              opacity: mounted ? 1 : 0,
              transition: "transform 0.35s cubic-bezier(.2,.8,.2,1), opacity 0.3s ease",
            }}
          >
            {/* Notch */}
            <div className="absolute left-1/2 top-0 z-30 h-6 w-32 -translate-x-1/2 rounded-b-2xl bg-[#0f0d18]" aria-hidden="true" />

            {/* Close */}
            <button
              type="button"
              onClick={close}
              aria-label="Close demo"
              className="absolute right-3 top-3 z-40 flex h-8 w-8 items-center justify-center rounded-full bg-black/35 text-white backdrop-blur transition-colors hover:bg-black/55"
            >
              <CloseIcon />
            </button>

            {/* Screen */}
            <div className="relative h-full w-full overflow-hidden bg-[#F8F7F4]">
              {step === "join" ? (
                <JoinScreen mounted={mounted} onJoin={() => enter(false)} onIncognito={() => enter(true)} />
              ) : (
                <InsideScreen initialIncognito={startIncognito} joined={joined} />
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

/* ── Join sheet (mirrors app PlaceActionModal) ── */
function JoinScreen({ mounted, onJoin, onIncognito }: { mounted: boolean; onJoin: () => void; onIncognito: () => void }) {
  return (
    <>
      {/* Map-ish backdrop = café photo */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url(/cafe.jpg)", filter: "saturate(1.05)" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, oklch(0% 0 0/0.15), oklch(0% 0 0/0.05) 40%, transparent)" }} />
        {/* floating place pin */}
        <div className="absolute left-1/2 top-[24%] -translate-x-1/2">
          <span className="relative flex h-12 w-12 items-center justify-center rounded-full bg-white text-xl shadow-lg">
            ☕
            <span className="absolute -bottom-1 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 bg-white" aria-hidden="true" />
          </span>
        </div>
      </div>

      {/* Bottom sheet */}
      <div
        className="absolute inset-x-0 bottom-0 rounded-t-[26px] bg-white px-5 pb-6 pt-2.5"
        style={{
          boxShadow: "0 -8px 30px oklch(0% 0 0 / 0.18)",
          transform: mounted ? "translateY(0)" : "translateY(100%)",
          transition: "transform 0.45s cubic-bezier(.2,.9,.2,1) 0.1s",
        }}
      >
        <div className="mx-auto mb-3 h-1 w-9 rounded-full bg-[#E5E2DC]" />

        <h3 className="font-display text-[19px] font-bold tracking-[-0.02em] text-ink">Narrative Coffee</h3>

        <div className="mt-2.5 flex flex-wrap items-center gap-2">
          <span className="flex items-center gap-1.5 rounded-full bg-accent-pale px-2.5 py-1 text-[11px] font-semibold text-accent">☕ Cafe</span>
          <span className="flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-semibold" style={{ background: "var(--note-lemon)", color: "var(--note-lemon-ink)" }}>★ 4.7</span>
        </div>

        {/* Presence block */}
        <div className="mt-3.5 flex items-center gap-3 rounded-2xl bg-[#F8F7F4] p-3.5">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent-pale text-accent">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" /></svg>
          </span>
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-1.5">
              <span className="anim-pulse-dot h-[7px] w-[7px] rounded-full bg-sage" />
              <span className="text-xs font-semibold text-ink">7 here now</span>
            </div>
            <p className="mt-0.5 text-[11px] leading-snug text-muted">Join and they&apos;ll see you walk in</p>
          </div>
          {/* stacked avatars */}
          <span className="flex -space-x-2">
            {ROSTER.slice(0, 3).map((m) => (
              <span key={m.name} className="inline-block"><Avatar m={m} size={24} /></span>
            ))}
          </span>
        </div>

        {/* Vibe check block */}
        <div className="mt-2.5 flex gap-3 rounded-2xl bg-[#F8F7F4] p-3.5">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent-pale" style={{ color: "var(--accent-soft, #8B5CF6)" }}>
            <SparkIcon />
          </span>
          <div className="min-w-0 flex-1">
            <div className="flex items-center justify-between gap-2">
              <span className="text-xs font-semibold text-accent">Vibe check</span>
              <span className="rounded-full bg-accent-pale px-2 py-0.5 text-[10px] font-semibold text-accent">Premium</span>
            </div>
            <p className="mt-1 text-[11px] leading-[1.5] text-muted">
              Low-key and focused this morning — laptops and readers. Best window for a real chat: after 10am.
            </p>
          </div>
        </div>

        {/* CTAs */}
        <button
          type="button"
          onClick={onJoin}
          className="mt-4 flex h-[52px] w-full items-center justify-center gap-2 rounded-full bg-accent font-semibold text-white shadow-[0_4px_14px_oklch(40.8%_0.228_293/0.35)] transition-transform active:scale-[0.97]"
        >
          <DoorIcon /> Join now
        </button>
        <button
          type="button"
          onClick={onIncognito}
          className="mt-2.5 flex h-[46px] w-full items-center justify-center gap-1.5 rounded-full bg-[#F8F7F4] text-xs font-semibold text-muted transition-colors hover:text-ink"
        >
          <GhostIcon /> Join incognito
        </button>
      </div>
    </>
  );
}

/* ── Person card (mirrors app ActiveUserCard) ── */
function PersonCard({
  photo, name, meta, badge, locked, matchPct, delay, shown,
  selecting, selected, onToggle,
}: {
  photo: string; name: string; meta: string;
  badge?: boolean; locked?: boolean; matchPct?: number;
  delay: number; shown: boolean;
  selecting?: boolean; selected?: boolean; onToggle?: () => void;
}) {
  const metaText = selecting ? (selected ? "Can see you" : "Cannot see you") : meta;
  const metaColor = selecting ? (selected ? "var(--accent)" : "var(--muted, #9B9490)") : undefined;

  return (
    <div
      onClick={selecting ? onToggle : undefined}
      className="relative overflow-hidden rounded-2xl bg-white"
      style={{
        boxShadow: "0 3px 10px oklch(0% 0 0 / 0.07)",
        transition: "opacity 0.4s ease, transform 0.4s ease, border-color 0.2s ease",
        transitionDelay: `${delay}ms`,
        opacity: shown ? (selecting && !selected ? 0.6 : 1) : 0,
        transform: shown ? "translateY(0)" : "translateY(8px)",
        border: selecting && selected ? "2px solid #6D28D9" : "2px solid transparent",
        cursor: selecting ? "pointer" : "default",
      }}
    >
      {badge && !selecting && (
        <span className="absolute left-2 top-2 z-10 rounded-full bg-sage px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide text-white">New</span>
      )}
      <div className="relative w-full" style={{ aspectRatio: "3 / 4" }}>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${photo})`, filter: locked ? "blur(9px)" : undefined, transform: locked ? "scale(1.12)" : undefined }}
        />
        {locked && !selecting && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-1.5" style={{ background: "oklch(0% 0 0 / 0.3)" }}>
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/25 text-white backdrop-blur">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="11" width="14" height="10" rx="2" /><path d="M8 11V7a4 4 0 0 1 8 0v4" /></svg>
            </span>
            <span className="rounded-full bg-white px-2 py-0.5 text-[10px] font-bold text-accent">{matchPct}% match</span>
            <span className="text-[9px] font-medium text-white/90">Tap to unlock</span>
          </div>
        )}
        {/* Reveal selector radio */}
        {selecting && (
          <span
            className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full border-2"
            style={
              selected
                ? { background: "#6D28D9", borderColor: "#6D28D9", color: "#fff" }
                : { background: "oklch(0% 0 0 / 0.3)", borderColor: "#fff", color: "transparent" }
            }
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
          </span>
        )}
      </div>
      <div className="px-2.5 py-2">
        <p className="truncate text-xs font-semibold text-ink">{locked && !selecting ? "••••••" : name}</p>
        <p className="truncate text-[10px]" style={metaColor ? { color: metaColor } : undefined}>
          <span className={metaColor ? "font-semibold" : "text-muted"}>{metaText}</span>
        </p>
      </div>
    </div>
  );
}

type InsideTab = "active" | "recent" | "notes";

function SegTabs({ tab, setTab }: { tab: InsideTab; setTab: (t: InsideTab) => void }) {
  const items: { id: InsideTab; label: string }[] = [
    { id: "active", label: "Active" },
    { id: "recent", label: "Recent" },
    { id: "notes", label: "Notes" },
  ];
  return (
    <div className="flex gap-1 rounded-full bg-[#ECE8E2] p-1">
      {items.map((t) => (
        <button
          key={t.id}
          type="button"
          onClick={() => setTab(t.id)}
          className={`flex-1 rounded-full py-1.5 text-[11px] font-semibold transition-colors ${
            tab === t.id ? "bg-white text-ink shadow-[0_1px_3px_oklch(0%_0_0/0.1)]" : "text-muted"
          }`}
        >
          {t.label}
        </button>
      ))}
    </div>
  );
}

const NOTE_COLORS = [
  { bg: "var(--note-lemon)", ink: "var(--note-lemon-ink)" },
  { bg: "var(--note-peach)", ink: "var(--note-peach-ink)" },
  { bg: "var(--sage-light)", ink: "var(--sage)" },
];
const WALL_STORAGE_KEY = "woozly-demo-wall-notes";

interface WallNote {
  text: string;
  bg: string;
  ink: string;
  rot: number;
}

function MiniWall({ shown }: { shown: boolean }) {
  const [userNotes, setUserNotes] = useState<WallNote[]>([]);
  const [composing, setComposing] = useState(false);
  const [text, setText] = useState("");
  const [colorIdx, setColorIdx] = useState(0);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(WALL_STORAGE_KEY);
      // eslint-disable-next-line react-hooks/set-state-in-effect -- hydrate persisted notes after mount
      if (raw) setUserNotes(JSON.parse(raw) as WallNote[]);
    } catch {
      /* ignore */
    }
  }, []);

  const persist = (notes: WallNote[]) => {
    setUserNotes(notes);
    try {
      localStorage.setItem(WALL_STORAGE_KEY, JSON.stringify(notes));
    } catch {
      /* ignore */
    }
  };

  const post = () => {
    const trimmed = text.trim();
    if (!trimmed) return;
    const c = NOTE_COLORS[colorIdx];
    const rot = (userNotes.length % 2 === 0 ? -1 : 1) * (2 + (userNotes.length % 3));
    persist([...userNotes, { text: trimmed, bg: c.bg, ink: c.ink, rot }]);
    setText("");
    setComposing(false);
    setColorIdx((i) => (i + 1) % NOTE_COLORS.length);
  };

  const notes = [...WALL_NOTES, ...userNotes];

  return (
    <div
      className="rounded-2xl p-3"
      style={{
        backgroundColor: "#F4F3F7",
        backgroundImage: "radial-gradient(circle, rgba(17,12,34,0.08) 1.1px, transparent 1.1px)",
        backgroundSize: "16px 16px",
      }}
    >
      <div className="flex flex-wrap gap-2.5">
        {notes.map((n, i) => (
          <DraggableNote
            key={`${n.text}-${i}`}
            rotate={n.rot}
            className="relative w-[46%] rounded-lg px-2.5 pb-2.5 pt-3"
            style={{
              background: n.bg,
              boxShadow: "0 2px 6px oklch(0% 0 0 / 0.12)",
              opacity: shown ? 1 : 0,
            }}
          >
            <p className="text-[10px] font-semibold leading-snug" style={{ color: n.ink }}>{n.text}</p>
          </DraggableNote>
        ))}

        {/* Add-note tile */}
        {!composing && (
          <button
            type="button"
            onClick={() => setComposing(true)}
            className="flex w-[46%] flex-col items-center justify-center gap-1 rounded-lg border border-dashed py-4 text-[10px] font-semibold text-accent transition-colors hover:bg-accent-pale/40"
            style={{ borderColor: "var(--accent)", minHeight: 70 }}
          >
            <span className="text-base leading-none">＋</span>
            Add a note
          </button>
        )}
      </div>

      {/* Composer */}
      {composing && (
        <div className="mt-2.5 rounded-xl bg-white p-2.5" style={{ boxShadow: "0 2px 8px oklch(0% 0 0 / 0.08)" }}>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            maxLength={80}
            autoFocus
            placeholder="Leave a note for the next visitor…"
            className="h-14 w-full resize-none rounded-lg p-2 text-[11px] text-ink outline-none"
            style={{ background: NOTE_COLORS[colorIdx].bg, color: NOTE_COLORS[colorIdx].ink }}
          />
          <div className="mt-2 flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              {NOTE_COLORS.map((c, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setColorIdx(i)}
                  aria-label={`Note color ${i + 1}`}
                  className="h-5 w-5 rounded-full border"
                  style={{ background: c.bg, borderColor: colorIdx === i ? "var(--accent)" : "transparent", borderWidth: colorIdx === i ? 2 : 1 }}
                />
              ))}
            </div>
            <div className="flex items-center gap-2">
              <button type="button" onClick={() => { setComposing(false); setText(""); }} className="text-[11px] font-semibold text-muted">Cancel</button>
              <button
                type="button"
                onClick={post}
                disabled={!text.trim()}
                className="rounded-full bg-accent px-3 py-1 text-[11px] font-semibold text-white disabled:opacity-40"
              >
                Post
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const ACTIVE_PEOPLE = [
  { photo: "/people/1.jpg", name: "Maya", meta: "26 yrs" },
  { photo: "/people/2.jpg", name: "Aliya", meta: "Just joined", badge: true },
  { photo: "/people/3.jpg", name: "Sophie", meta: "28 yrs" },
  { photo: "/people/1.jpg", name: "Locked", meta: "24 yrs · Premium", locked: true, matchPct: 94 },
];

/* ── Inside the place (post-join) — mirrors app PlaceDetailsModal ── */
function InsideScreen({ initialIncognito, joined }: { initialIncognito: boolean; joined: boolean }) {
  const [tab, setTab] = useState<InsideTab>("active");
  const [incognito, setIncognito] = useState(initialIncognito);
  const [selecting, setSelecting] = useState(false);
  const [visibleTo, setVisibleTo] = useState<Set<number>>(new Set());

  const visibleCount = visibleTo.size;
  const total = ACTIVE_PEOPLE.length;
  const allSelected = visibleCount === total;

  const toggleIncognito = () => {
    const next = !incognito;
    setIncognito(next);
    setSelecting(false);
    if (!next) setVisibleTo(new Set()); // back to visible-to-all
  };

  const togglePerson = (i: number) => {
    setVisibleTo((prev) => {
      const n = new Set(prev);
      if (n.has(i)) n.delete(i); else n.add(i);
      return n;
    });
  };

  const selectAll = () => setVisibleTo(allSelected ? new Set() : new Set(ACTIVE_PEOPLE.map((_, i) => i)));

  return (
    <div className="flex h-full flex-col bg-[#F8F7F4]">
      <div className="h-7 shrink-0" />

      <div className="flex-1 overflow-y-auto px-4 pb-4">
        {/* Header card */}
        <div className="rounded-2xl bg-white p-4" style={{ boxShadow: "0 3px 10px oklch(0% 0 0 / 0.07)" }}>
          <div className="flex items-center justify-between gap-2">
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="flex items-center gap-1.5 rounded-full bg-accent-pale px-2.5 py-1">
                <span className="anim-pulse-dot h-[7px] w-[7px] rounded-full bg-sage" />
                <span className="text-[11px] font-semibold text-accent">7 here now</span>
              </span>
              {incognito && (
                <button
                  type="button"
                  onClick={() => setSelecting(true)}
                  className="flex items-center gap-1 rounded-full px-2 py-1 text-[10px] font-semibold text-white transition-colors"
                  style={{ background: selecting ? "#6D28D9" : "#1A1614" }}
                >
                  <GhostIcon size={10} /> {visibleCount === 0 ? "Incognito · 0 visible" : `Visible to ${visibleCount}`}
                </button>
              )}
            </div>
            <div className="flex items-center gap-2">
              <span className="flex items-center gap-1 rounded-full px-2 py-1 text-[11px] font-semibold" style={{ background: "var(--note-lemon)", color: "var(--note-lemon-ink)" }}>★ 4.7</span>
              <button
                type="button"
                onClick={toggleIncognito}
                aria-label={incognito ? "Turn off incognito" : "Go incognito"}
                className={`flex h-8 w-8 items-center justify-center rounded-full transition-colors ${incognito ? "bg-[#1A1614] text-white" : "bg-[#F8F7F4] text-muted hover:text-ink"}`}
              >
                <GhostIcon size={15} />
              </button>
            </div>
          </div>

          <h3 className="mt-2.5 font-display text-xl font-bold tracking-[-0.02em] text-ink">Narrative Coffee</h3>

          <span className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-sage-light px-2.5 py-1 text-[11px] font-semibold text-sage">☕ Cafe</span>

          <div className="my-3 h-px bg-line" />

          <div className="flex items-center justify-between">
            <span className="flex items-center gap-1.5 text-[11px] font-semibold text-body"><GhostIcon size={13} /> Ghost mode</span>
            <span className="flex items-center gap-1.5 text-[11px] font-semibold" style={{ color: "#EF4444" }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9" /></svg>
              Check out
            </span>
          </div>
        </div>

        {/* Selector bar (choosing who can see you) OR status banner */}
        {selecting ? (
          <div className="mt-3 flex items-center justify-between gap-2 rounded-2xl px-3 py-2.5" style={{ background: "#6D28D9" }}>
            <div className="flex items-center gap-1.5 text-white">
              <GhostIcon size={12} />
              <span className="text-[11px] font-semibold">Who can see you?</span>
              <span className="rounded-full bg-white/20 px-1.5 py-0.5 text-[10px] font-bold">{visibleCount} of {total}</span>
            </div>
            <div className="flex items-center gap-2.5">
              <button type="button" onClick={selectAll} className="text-[10px] font-semibold text-white/85">
                {allSelected ? "Deselect all" : "Select all"}
              </button>
              <button
                type="button"
                onClick={() => setSelecting(false)}
                className="rounded-full px-3 py-1 text-[10px] font-bold"
                style={visibleCount > 0 ? { background: "#fff", color: "#6D28D9" } : { background: "rgba(255,255,255,0.2)", color: "#fff" }}
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <div
            className="mt-3 flex items-center gap-2.5 rounded-2xl p-3 text-[11px] font-medium leading-snug"
            style={incognito ? { background: "var(--accent-pale)", color: "var(--accent-deep)" } : { background: "var(--sage-light)", color: "var(--sage)" }}
          >
            <span className="text-sm">{incognito ? "👻" : "🎉"}</span>
            <span>
              {incognito
                ? visibleCount === 0
                  ? "You're invisible. You see everyone — they can't see you. Tap the Incognito pill to pick who can."
                  : `You're invisible to the room, but ${visibleCount} ${visibleCount === 1 ? "person" : "people"} can see you.`
                : "You joined Narrative Coffee. The room can see you now."}
            </span>
          </div>
        )}

        {/* Tabs */}
        <div className="mt-3"><SegTabs tab={tab} setTab={setTab} /></div>

        {/* Tab content */}
        <div className="mt-3">
          {tab === "active" && (
            <div className="grid grid-cols-2 gap-2.5">
              {ACTIVE_PEOPLE.map((c, i) => (
                <PersonCard
                  key={i}
                  {...c}
                  delay={i * 60}
                  shown={joined}
                  selecting={selecting}
                  selected={visibleTo.has(i)}
                  onToggle={() => togglePerson(i)}
                />
              ))}
            </div>
          )}
          {tab === "recent" && (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <span className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-sage-light text-xl">🌿</span>
              <p className="text-sm font-semibold text-ink">No recent visitors</p>
              <p className="mt-1 text-xs text-muted">People who stopped by will appear here.</p>
            </div>
          )}
          {tab === "notes" && <MiniWall shown={joined} />}
        </div>
      </div>

      {/* Bottom action — incognito control (no plant drop in place mode) */}
      <div className="shrink-0 border-t border-line bg-white px-4 pb-6 pt-3">
        {!incognito ? (
          <button
            type="button"
            onClick={toggleIncognito}
            className="flex h-[50px] w-full items-center justify-center gap-2 rounded-full bg-[#1A1614] text-sm font-semibold text-white transition-transform active:scale-[0.97]"
          >
            <GhostIcon /> Go incognito
          </button>
        ) : selecting ? (
          <button
            type="button"
            onClick={() => setSelecting(false)}
            className="flex h-[50px] w-full items-center justify-center rounded-full bg-accent text-sm font-semibold text-white shadow-[0_4px_14px_oklch(40.8%_0.228_293/0.3)] transition-transform active:scale-[0.97]"
          >
            Done — {visibleCount} can see you
          </button>
        ) : (
          <button
            type="button"
            onClick={() => setSelecting(true)}
            className="flex h-[50px] w-full items-center justify-center gap-2 rounded-full bg-accent text-sm font-semibold text-white shadow-[0_4px_14px_oklch(40.8%_0.228_293/0.3)] transition-transform active:scale-[0.97]"
          >
            Choose who can see you
          </button>
        )}
      </div>
    </div>
  );
}
