import { APP_STORE_URL } from "@/lib/site";
import { LeafMark } from "./LeafMark";

export function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-surface/85 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5">
        <a href="#" className="flex items-center gap-2" aria-label="Woozly home">
          <LeafMark size={22} className="text-accent" />
          <span
            className="font-display text-[1.05rem] font-semibold tracking-[-0.025em] text-ink"
          >
            woozly
          </span>
        </a>

        <div className="hidden items-center gap-7 text-sm text-body sm:flex">
          <a href="#intention" className="transition-colors hover:text-ink">
            Plants
          </a>
          <a href="#match" className="transition-colors hover:text-ink">
            AI Match
          </a>
          <a href="#how" className="transition-colors hover:text-ink">
            How it works
          </a>
          <a href="#pricing" className="transition-colors hover:text-ink">
            Pricing
          </a>
        </div>

        <a
          href={APP_STORE_URL}
          className="rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-accent-deep hover:shadow-[0_2px_8px_oklch(40.8%_0.228_293/0.35)]"
        >
          Get the app
        </a>
      </nav>
    </header>
  );
}
