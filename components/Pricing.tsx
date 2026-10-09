"use client";

import { useState } from "react";
import { APP_STORE_URL } from "@/lib/site";
import { PEOPLE_MATRIX, PLACE_MATRIX } from "@/lib/woozly-features";

type Mode = "people" | "place";
type Plan = "weekly" | "monthly";

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
  const [plan, setPlan] = useState<Plan>("monthly");

  const price = plan === "weekly" ? "$4.99" : "$14.99";
  const per   = plan === "weekly" ? "per week" : "per month";

  return (
    <section id="pricing" className="border-t border-line">
      <div className="mx-auto max-w-5xl px-5 py-20 sm:py-28">
        <h2 className="font-display text-[clamp(1.9rem,4vw,2.8rem)] font-bold tracking-[-0.025em] text-ink">
          Free to meet people. Premium to reach further.
        </h2>
        <p className="mt-4 max-w-[52ch] leading-[1.65] text-body">
          Joining, dropping plants, swiping, and chatting cost nothing. Premium
          widens your radius and unlocks the full feature set.
        </p>

        {/* Plan toggle (weekly / monthly) */}
        <div className="mt-10 flex items-center gap-3">
          <span className="text-sm text-muted">Premium billing:</span>
          <div className="flex rounded-full border border-line bg-surface p-0.5">
            {(["weekly", "monthly"] as Plan[]).map((p) => (
              <button
                key={p}
                onClick={() => setPlan(p)}
                className="rounded-full px-4 py-1.5 text-sm font-medium capitalize transition-all"
                style={plan === p ? { background: "var(--accent)", color: "white" } : { color: "var(--body)" }}
              >
                {p === "weekly" ? "Weekly · $4.99" : "Monthly · $14.99"}
              </button>
            ))}
          </div>
          {plan === "monthly" && (
            <span className="rounded-full bg-sage-light px-2.5 py-1 text-[11px] font-semibold text-sage">Best value</span>
          )}
        </div>

        {/* Mode toggle (people / place) */}
        <div className="mt-8 flex gap-2">
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

        {/* Price cards */}
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {/* Free */}
          <div className="rounded-2xl bg-surface p-8" style={{ boxShadow: "0 2px 6px oklch(0% 0 0 / 0.05), 0 10px 28px oklch(0% 0 0 / 0.06)" }}>
            <h3 className="font-display text-xl font-semibold text-ink">Free</h3>
            <p className="mt-1 text-sm text-muted">For showing up with intention</p>
            <p className="mt-6 font-display text-4xl font-bold tracking-[-0.03em] text-ink">$0</p>
            <div className="mt-8">
              <MatrixTable rows={mode === "people" ? PEOPLE_MATRIX : PLACE_MATRIX} />
            </div>
            <a href={APP_STORE_URL} className="mt-8 block rounded-xl border border-line-strong py-3.5 text-center text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent">
              Download free
            </a>
          </div>

          {/* Premium */}
          <div className="rounded-2xl bg-surface p-8" style={{ boxShadow: "0 2px 6px oklch(0% 0 0 / 0.05), 0 10px 28px oklch(40.8% 0.228 293 / 0.1)", outline: "1.5px solid oklch(40.8% 0.228 293 / 0.3)" }}>
            <div className="flex items-center justify-between">
              <h3 className="font-display text-xl font-semibold text-ink">Premium</h3>
              <span className="rounded-full px-3 py-1 text-xs font-semibold text-accent" style={{ background: "var(--accent-pale)" }}>Aura</span>
            </div>
            <p className="mt-1 text-sm text-muted">For being easy to find</p>
            <p className="mt-6 font-display text-4xl font-bold tracking-[-0.03em] text-ink">
              {price}
              <span className="ml-1.5 text-base font-medium text-muted">{per}</span>
            </p>
            <p className="mt-1 text-xs text-muted">
              {plan === "weekly" ? "Billed weekly · cancel anytime" : "Billed monthly · cancel anytime"}
            </p>
            <div className="mt-8">
              <MatrixTable rows={mode === "people" ? PEOPLE_MATRIX : PLACE_MATRIX} />
            </div>
            <a href={APP_STORE_URL} className="mt-8 block rounded-xl bg-accent py-3.5 text-center text-sm font-semibold text-white transition-all hover:bg-accent-deep hover:shadow-[0_4px_14px_oklch(40.8%_0.228_293/0.3)]">
              Start Premium
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
