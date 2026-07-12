"use client";

import { useEffect, useRef, useState } from "react";

type Phase = "falling" | "logo" | "exit" | "done";

export function LeafIntro() {
  const [phase, setPhase] = useState<Phase>("falling");
  const leafRef = useRef<HTMLDivElement>(null);
  const didMount = useRef(false);

  useEffect(() => {
    if (didMount.current) return;
    didMount.current = true;

    if (sessionStorage.getItem("wz-intro")) {
      setPhase("done");
      return;
    }

    const leaf = leafRef.current;
    if (!leaf) return;

    const onFallEnd = () => {
      setPhase("logo");
      const t1 = setTimeout(() => setPhase("exit"), 950);
      const t2 = setTimeout(() => {
        setPhase("done");
        sessionStorage.setItem("wz-intro", "1");
      }, 1550);
      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
      };
    };

    leaf.addEventListener("animationend", onFallEnd, { once: true });
    return () => leaf.removeEventListener("animationend", onFallEnd);
  }, []);

  if (phase === "done") return null;

  const isLogo = phase === "logo" || phase === "exit";

  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "oklch(97.5% 0.008 290)",
        opacity: phase === "exit" ? 0 : 1,
        transition: phase === "exit" ? "opacity 0.55s ease-out" : undefined,
        pointerEvents: phase === "exit" ? "none" : "auto",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: isLogo ? "6px" : 0,
          transition: "gap 0.3s ease-out",
        }}
      >
        {/* "w" — slides in from left when logo phase */}
        <span
          className={isLogo ? "anim-word-left" : undefined}
          style={{
            fontFamily: "var(--font-poppins), sans-serif",
            fontSize: "clamp(2rem, 5vw, 2.8rem)",
            fontWeight: 700,
            letterSpacing: "-0.025em",
            color: "var(--ink)",
            opacity: isLogo ? undefined : 0,
            lineHeight: 1,
          }}
        >
          w
        </span>

        {/* The leaf — falls, then shrinks to letter size */}
        <div
          ref={leafRef}
          className={!isLogo ? "anim-leaf-fall" : undefined}
          style={{
            width: isLogo ? "clamp(1.6rem, 4vw, 2.2rem)" : "clamp(3rem, 8vw, 4rem)",
            height: isLogo ? "clamp(1.6rem, 4vw, 2.2rem)" : "clamp(3rem, 8vw, 4rem)",
            flexShrink: 0,
            transition: isLogo
              ? "width 0.32s cubic-bezier(0.25, 1, 0.5, 1), height 0.32s cubic-bezier(0.25, 1, 0.5, 1)"
              : undefined,
          }}
        >
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 24 24"
            fill="none"
            stroke="var(--accent)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
            <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
          </svg>
        </div>

        {/* "ozly" — slides in from right when logo phase */}
        <span
          className={isLogo ? "anim-word-right" : undefined}
          style={{
            fontFamily: "var(--font-poppins), sans-serif",
            fontSize: "clamp(2rem, 5vw, 2.8rem)",
            fontWeight: 700,
            letterSpacing: "-0.025em",
            color: "var(--ink)",
            opacity: isLogo ? undefined : 0,
            lineHeight: 1,
          }}
        >
          ozly
        </span>
      </div>
    </div>
  );
}
