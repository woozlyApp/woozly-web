import Link from "next/link";
import { APP_LAUNCHED, CONTACT_EMAIL } from "@/lib/site";
import { LeafMark } from "./LeafMark";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-5xl px-5 py-20 text-center sm:py-24">
        <LeafMark size={28} className="mx-auto text-sage" />
        <h2 className="mx-auto mt-5 max-w-[22ch] font-display text-[clamp(1.9rem,4vw,2.8rem)] font-bold leading-[1.1] tracking-[-0.025em] text-ink">
          Your people are already at your place.
        </h2>
        <p className="mx-auto mt-4 max-w-[44ch] leading-[1.65] text-body">
          Drop a plant. Let Woozly do the math. Walk out with someone worth knowing.
        </p>
        <Link
          href="/#waitlist"
          className="mt-8 inline-block rounded-full bg-accent px-8 py-3.5 font-semibold text-white transition-all hover:bg-accent-deep hover:shadow-[0_4px_16px_oklch(40.8%_0.228_293/0.3)]"
        >
          Join the waitlist
        </Link>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-5 py-8 text-sm text-muted sm:flex-row">
          <p>© {new Date().getFullYear()} Woozly</p>
          <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-6">
            {APP_LAUNCHED && (
              <a href={`mailto:${CONTACT_EMAIL}`} className="transition-colors hover:text-body">
                {CONTACT_EMAIL}
              </a>
            )}
            <Link href="/privacy" className="transition-colors hover:text-body">
              Privacy
            </Link>
            {APP_LAUNCHED && (
              <>
                <Link href="/terms" className="transition-colors hover:text-body">
                  Terms
                </Link>
                <Link href="/community" className="transition-colors hover:text-body">
                  Community
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
