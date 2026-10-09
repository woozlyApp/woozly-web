"use client";

import { useRef, useState } from "react";

interface Profile {
  name: string;
  age: number;
  intent: string;
  pct: number;
  photo: string;
  blurb: string;
}

const PROFILES: Profile[] = [
  { name: "Maya", age: 26, intent: "☕ Coffee", pct: 94, photo: "/people/1.jpg", blurb: "here to meet new people" },
  { name: "Aliya", age: 24, intent: "💬 Chat", pct: 77, photo: "/people/2.jpg", blurb: "reading & slow conversation" },
  { name: "Sophie", age: 28, intent: "🔥 Spark", pct: 88, photo: "/people/3.jpg", blurb: "open to something real" },
];

const THRESHOLD = 90;

export function SwipeCardDeck() {
  const [index, setIndex] = useState(0);
  const [drag, setDrag] = useState(0);
  const [leaving, setLeaving] = useState<null | "left" | "right">(null);
  const dragging = useRef(false);
  const startX = useRef(0);

  const visible = [0, 1, 2].map((o) => PROFILES[(index + o) % PROFILES.length]);

  const swipe = (dir: "left" | "right") => {
    if (leaving) return;
    setLeaving(dir);
    window.setTimeout(() => {
      setLeaving(null);
      setDrag(0);
      setIndex((i) => (i + 1) % PROFILES.length);
    }, 300);
  };

  const onPointerDown = (e: React.PointerEvent) => {
    if (leaving) return;
    dragging.current = true;
    startX.current = e.clientX;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging.current) return;
    setDrag(e.clientX - startX.current);
  };
  const onPointerUp = () => {
    if (!dragging.current) return;
    dragging.current = false;
    if (drag > THRESHOLD) swipe("right");
    else if (drag < -THRESHOLD) swipe("left");
    else setDrag(0);
  };

  return (
    <div className="mx-auto w-72 select-none">
      <div className="relative h-96">
        {visible.map((p, i) => {
          const isTop = i === 0;
          let tx = 0;
          let rot = 0;
          let opacity = 1;
          let transition = "transform 0.3s ease, opacity 0.3s ease";
          if (isTop) {
            if (leaving) {
              tx = leaving === "right" ? 520 : -520;
              rot = leaving === "right" ? 22 : -22;
              opacity = 0;
            } else {
              tx = drag;
              rot = drag / 22;
              transition = dragging.current ? "none" : "transform 0.25s ease";
            }
          }
          const y = i * 10;
          const scale = 1 - i * 0.045;
          return (
            <div
              key={`${p.name}-${i}`}
              className="absolute inset-0 overflow-hidden rounded-2xl bg-ink"
              style={{
                zIndex: 30 - i,
                transform: `translateX(${isTop ? tx : 0}px) translateY(${isTop ? 0 : y}px) rotate(${isTop ? rot : 0}deg) scale(${isTop ? 1 : scale})`,
                opacity,
                transition,
                boxShadow: "0 6px 20px oklch(0% 0 0 / 0.14), 0 16px 40px oklch(0% 0 0 / 0.1)",
                cursor: isTop ? (dragging.current ? "grabbing" : "grab") : "default",
                touchAction: "none",
              }}
              onPointerDown={isTop ? onPointerDown : undefined}
              onPointerMove={isTop ? onPointerMove : undefined}
              onPointerUp={isTop ? onPointerUp : undefined}
            >
              {/* Photo */}
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${p.photo})` }} />

              {/* Match % */}
              <span className="absolute right-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-xs font-bold text-accent backdrop-blur">
                ✨ {p.pct}%
              </span>

              {/* Swipe-intent stamps */}
              {isTop && drag > 30 && (
                <span className="absolute left-4 top-4 rotate-[-12deg] rounded-lg border-[2.5px] border-sage px-3 py-1 text-base font-extrabold uppercase tracking-wide text-sage">
                  Water
                </span>
              )}
              {isTop && drag < -30 && (
                <span className="absolute right-4 top-4 rotate-[12deg] rounded-lg border-[2.5px] border-red-500 px-3 py-1 text-base font-extrabold uppercase tracking-wide text-red-500">
                  Pass
                </span>
              )}

              {/* Info */}
              <div
                className="absolute inset-x-0 bottom-0 px-4 pb-4 pt-12"
                style={{ background: "linear-gradient(to top, oklch(0% 0 0 / 0.72), transparent)" }}
              >
                <p className="font-display text-lg font-bold text-white">
                  {p.name}, {p.age}
                </p>
                <div className="mt-1.5 flex items-center gap-2">
                  <span className="rounded-full bg-white/20 px-2.5 py-0.5 text-xs font-semibold text-white backdrop-blur">
                    {p.intent}
                  </span>
                </div>
                <p className="mt-1.5 text-xs text-white/70">{p.blurb}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Action buttons */}
      <div className="mt-6 flex items-center justify-center gap-6">
        <button
          type="button"
          onClick={() => swipe("left")}
          aria-label="Pass"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-surface text-muted shadow transition-colors hover:border-red-300 hover:text-red-500"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12" /></svg>
        </button>
        <button
          type="button"
          onClick={() => swipe("right")}
          aria-label="Water"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-accent text-white shadow-lg transition-transform hover:scale-105"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" /><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" /></svg>
        </button>
        <button
          type="button"
          onClick={() => swipe("right")}
          aria-label="Super like"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-surface shadow transition-colors hover:border-accent"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6D28D9" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z" /></svg>
        </button>
      </div>
    </div>
  );
}
