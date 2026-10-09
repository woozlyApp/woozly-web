"use client";

import { useState } from "react";
import Link from "next/link";
import { PEOPLE_MATRIX, PLACE_MATRIX } from "@/lib/woozly-features";

type Mode = "people" | "place";

interface PlanCard {
  id: string;
  name: string;
  badge?: string;
  price: string;
  per?: string;
  note: string;
  highlight: boolean;
  best?: boolean;
}

const PLAN_CARDS: PlanCard[] = [
  { id: "free",    name: "Free",    price: "$0",     note: "For showing up with intention", highlight: false },
  { id: "weekly",  name: "Premium", badge: "Aura", price: "$4.99",  per: "/week",  note: "Billed weekly · cancel anytime",  highlight: true },
  { id: "monthly", name: "Premium", badge: "Aura", price: "$14.99", per: "/month", note: "Billed monthly · cancel anytime", highlight: true, best: true },
];

function Cell({ val }: { val: string | boolean }) {
  if (val === true)  return <span className="text-accent font-semibold">✓</span>;
  if (val === false) return <span className="text-muted">—</span>;
  return <>{val}</>;
}

function MatrixTable({ rows }: { rows: readonly { feature: string; free: string | boolean; premium: string | boolean }[] }) {
  return (
    <table className="w-full text-sm">
      <thead>
        <tr className="border-b border-line">
          <th className="py-2.5 text-left font-medium text-muted" style={{ width: "52%" }}>Feature</th>
          <th className="py-2.5 text-center font-medium text-muted" style={{ width: "24%" }}>Free</th>
          <th className="py-2.5 text-center font-semibold text-accent" style={{ width: "24%" }}>Premium</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((r) => (
          <tr key={r.feature} className="border-b border-line last:border-0">
            <td className="py-2.5 text-body">{r.feature}</td>
            <td className="py-2.5 text-center text-body"><Cell val={r.free} /></td>
            <td className="py-2.5 text-center text-body"><Cell val={r.premium} /></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export function Pricing() {
  const [mode, setMode] = useState<Mode>("people");

  return (
    <section id="pricing" className="border-t border-line">
      <div className="mx-auto max-w-5xl px-5 py-20 sm:py-28">
        <h2 className="font-display text-[clamp(1.9rem,4vw,2.8rem)] font-bold tracking-[-0.025em] text-ink">
          Free to meet people. Premium to reach further.
        </h2>
        <p className="mt-4 max-w-[52ch] leading-[1.65] text-body">
          Joining, dropping plants, swiping, and chatting cost nothing. Premium
          widens your radius and unlocks the full feature set — go weekly or monthly.
        </p>

        {/* Plan cards */}
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {PLAN_CARDS.map((p) => (
            <div
              key={p.id}
              className="flex flex-col rounded-2xl bg-surface p-7"
              style={
                p.highlight
                  ? { boxShadow: "0 2px 6px oklch(0% 0 0 / 0.05), 0 10px 28px oklch(40.8% 0.228 293 / 0.1)", outline: "1.5px solid oklch(40.8% 0.228 293 / 0.3)" }
                  : { boxShadow: "0 2px 6px oklch(0% 0 0 / 0.05), 0 10px 28px oklch(0% 0 0 / 0.06)" }
              }
            >
              <div className="flex items-center justify-between">
                <h3 className="font-display text-lg font-semibold text-ink">{p.name}</h3>
                {p.badge && (
                  <span className="rounded-full px-2.5 py-1 text-[11px] font-semibold text-accent" style={{ background: "var(--accent-pale)" }}>
                    {p.badge}
                  </span>
                )}
                {p.best && (
                  <span className="rounded-full bg-sage-light px-2.5 py-1 text-[11px] font-semibold text-sage">Best value</span>
                )}
              </div>

              <p className="mt-5 font-display text-4xl font-bold tracking-[-0.03em] text-ink">
                {p.price}
                {p.per && <span className="ml-1 text-base font-medium text-muted">{p.per}</span>}
              </p>
              <p className="mt-1.5 text-xs text-muted">{p.note}</p>

              <Link
                href="/#waitlist"
                className={
                  p.highlight
                    ? "mt-7 block rounded-xl bg-accent py-3 text-center text-sm font-semibold text-white transition-all hover:bg-accent-deep hover:shadow-[0_4px_14px_oklch(40.8%_0.228_293/0.3)]"
                    : "mt-7 block rounded-xl border border-line-strong py-3 text-center text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
                }
              >
                Join the waitlist
              </Link>
            </div>
          ))}
        </div>

        {/* Mode toggle (people / place) */}
        <div className="mt-14 flex gap-2">
          {(["people", "place"] as Mode[]).map((m) => (
            <button
              key={m}
              onClick={() => setMode(m)}
              className="flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium capitalize transition-all"
              style={mode === m
                ? { background: "var(--ink)", color: "white", borderColor: "var(--ink)" }
                : { borderColor: "var(--line)", color: "var(--body)" }
              }
            >
              {m === "people" ? "🧑‍🤝‍🧑" : "📍"} {m === "people" ? "People mode" : "Place mode"}
            </button>
          ))}
        </div>

        {/* Feature matrix */}
        <div className="mt-6 rounded-2xl bg-surface p-6 sm:p-8" style={{ boxShadow: "0 2px 6px oklch(0% 0 0 / 0.05)" }}>
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.07em] text-muted">
            What&apos;s included — {mode === "people" ? "People mode" : "Place mode"}
          </p>
          <MatrixTable rows={mode === "people" ? PEOPLE_MATRIX : PLACE_MATRIX} />
        </div>
      </div>
    </section>
  );
}
