import { APP_STORE_URL } from "@/lib/site";

const FREE = [
  "Join any place, drop a plant, see who's there",
  "Woozly AI match — live compatibility scores",
  "2 plants active at a time",
  "End-to-end encrypted messages",
  "Discover places within 5 km",
  "Mute a place for 1 day",
];

const PREMIUM = [
  "Everything in Free",
  "Up to 10 plants active at a time",
  "50 km radar for places and plants",
  "See who admired your plants",
  "Ghost mode: browse without appearing",
  "Priority placement in busy rooms",
  "Rich messages with photos",
  "Instagram share cards",
  "Mute a place for 3 days",
];

function Check({ accent }: { accent?: boolean }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={accent ? "text-accent" : "text-muted"}
      aria-hidden="true"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export function Pricing() {
  return (
    <section id="pricing" className="border-t border-line">
      <div className="mx-auto max-w-5xl px-5 py-20 sm:py-28">
        <h2 className="font-display text-[clamp(1.9rem,4vw,2.8rem)] font-bold tracking-[-0.025em] text-ink">
          Free to meet people. Premium to reach further.
        </h2>
        <p className="mt-4 max-w-[52ch] leading-[1.65] text-body">
          Joining a place, dropping a plant, and chatting cost nothing. Premium
          widens your range and gives your plants more room to grow.
        </p>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {/* Free */}
          <div
            className="rounded-2xl bg-surface p-8"
            style={{
              boxShadow: "0 2px 6px oklch(0% 0 0 / 0.05), 0 10px 28px oklch(0% 0 0 / 0.06)",
            }}
          >
            <h3 className="font-display text-xl font-semibold text-ink">Free</h3>
            <p className="mt-1 text-sm text-muted">For showing up with intention</p>
            <p className="mt-6 font-display text-4xl font-bold tracking-[-0.03em] text-ink">
              $0
            </p>
            <ul className="mt-8 space-y-3">
              {FREE.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-body">
                  <span className="mt-0.5 shrink-0">
                    <Check />
                  </span>
                  {f}
                </li>
              ))}
            </ul>
            <a
              href={APP_STORE_URL}
              className="mt-10 block rounded-xl border border-line-strong py-3.5 text-center text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
            >
              Download free
            </a>
          </div>

          {/* Premium */}
          <div
            className="rounded-2xl bg-surface p-8"
            style={{
              boxShadow: "0 2px 6px oklch(0% 0 0 / 0.05), 0 10px 28px oklch(40.8% 0.228 293 / 0.1)",
              outline: "1.5px solid oklch(40.8% 0.228 293 / 0.3)",
            }}
          >
            <div className="flex items-center justify-between">
              <h3 className="font-display text-xl font-semibold text-ink">Premium</h3>
              <span
                className="rounded-full px-3 py-1 text-xs font-semibold text-accent"
                style={{ background: "var(--accent-pale)" }}
              >
                Aura
              </span>
            </div>
            <p className="mt-1 text-sm text-muted">For being easy to find</p>
            <p className="mt-6 font-display text-4xl font-bold tracking-[-0.03em] text-ink">
              $7.99
              <span className="ml-1.5 text-base font-medium text-muted">/ month</span>
            </p>
            <p className="mt-1 text-xs text-muted">or $47.99 a year, about $4 a month</p>
            <ul className="mt-8 space-y-3">
              {PREMIUM.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-body">
                  <span className="mt-0.5 shrink-0">
                    <Check accent />
                  </span>
                  {f}
                </li>
              ))}
            </ul>
            <a
              href={APP_STORE_URL}
              className="mt-10 block rounded-xl bg-accent py-3.5 text-center text-sm font-semibold text-white transition-all hover:bg-accent-deep hover:shadow-[0_4px_14px_oklch(40.8%_0.228_293/0.3)]"
            >
              Start Premium
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
