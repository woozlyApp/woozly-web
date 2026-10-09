import Link from "next/link";
import { LeafMark } from "./LeafMark";

export function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-[#F2EEFB]/90 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5">
        <Link href="/" className="flex items-center gap-2" aria-label="Woozly home">
          <LeafMark size={22} className="text-accent" />
          <span
            className="font-display text-[1.05rem] font-semibold tracking-[-0.025em] text-ink"
          >
            woozly
          </span>
        </Link>

        <div className="hidden items-center gap-7 text-sm text-body sm:flex">
          <Link href="/#intention" className="transition-colors hover:text-ink">
            People
          </Link>
          <Link href="/#place" className="transition-colors hover:text-ink">
            Place
          </Link>
          <Link href="/#how" className="transition-colors hover:text-ink">
            How it works
          </Link>
          <Link href="/#pricing" className="transition-colors hover:text-ink">
            Pricing
          </Link>
        </div>

        <Link
          href="/#waitlist"
          className="rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-accent-deep hover:shadow-[0_2px_8px_oklch(40.8%_0.228_293/0.35)]"
        >
          Join the waitlist
        </Link>
      </nav>
    </header>
  );
}
