import Link from "next/link";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { LeafMark } from "./LeafMark";
import { APP_LAUNCHED } from "@/lib/site";

export interface TocItem { id: string; label: string; }

interface Props {
  title: string;
  description?: string;
  lastUpdated: string;
  notice?: boolean;
  toc: TocItem[];
  children: React.ReactNode;
}

const LEGAL_LINKS = APP_LAUNCHED
  ? [
      { href: "/terms",     label: "Terms of Service" },
      { href: "/privacy",   label: "Privacy Policy"   },
      { href: "/community", label: "Community Guidelines" },
    ]
  : [{ href: "/privacy", label: "Privacy Policy" }];

export function PH({ children }: { children: string }) {
  return (
    <mark style={{
      background: "#FEF3C7",
      color: "#92400E",
      padding: "1px 5px",
      borderRadius: "4px",
      fontFamily: "ui-monospace, monospace",
      fontSize: "0.88em",
    }}>
      {children}
    </mark>
  );
}

export function A({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} className="text-accent underline underline-offset-4 transition-colors hover:text-accent-deep">
      {children}
    </a>
  );
}

export function Sec({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24 space-y-4">
      <h2 className="font-display text-xl font-semibold tracking-[-0.02em] text-ink">{title}</h2>
      <div className="space-y-4 leading-[1.75] text-body">{children}</div>
    </section>
  );
}

export function Sub({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="space-y-2">
      <h3 className="font-display text-base font-semibold text-ink">{title}</h3>
      <div className="space-y-2 leading-[1.75] text-body">{children}</div>
    </div>
  );
}

export function Ul({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="space-y-2 pl-5" style={{ listStyleType: "disc" }}>
      {items.map((item, i) => <li key={i}>{item}</li>)}
    </ul>
  );
}

export function LegalLayout({ title, description, lastUpdated, notice, toc, children }: Props) {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-[720px] px-5 py-20">
        {/* Header */}
        <div className="mb-2 flex items-center gap-2">
          <LeafMark size={18} className="text-accent" />
          <span className="text-sm font-medium text-muted">Woozly</span>
        </div>
        <h1 className="font-display text-[clamp(2rem,5vw,2.8rem)] font-bold tracking-[-0.03em] text-ink">
          {title}
        </h1>
        {description && (
          <p className="mt-3 max-w-[56ch] leading-[1.65] text-body">{description}</p>
        )}
        <p className="mt-2 text-sm text-muted">
          Last updated: <strong className="font-semibold text-ink">{lastUpdated}</strong>
        </p>

        {/* Attorney notice */}
        {notice && (
          <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm leading-[1.65] text-amber-900">
            <strong className="font-semibold">⚠️ Notice:</strong>{" "}
            This document is a template, not legal advice. Woozly collects sensitive-category
            personal data (including sexual orientation and relationship goals), precise background
            location, and facilitates in-person meetings between users — all of which carry
            significant legal exposure. Have this document reviewed by a qualified attorney before
            relying on it or publishing it to users.
          </div>
        )}

        {/* ToC */}
        <nav aria-label="Table of contents" className="mt-8 rounded-xl border border-line bg-surface p-5">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.07em] text-muted">
            Contents
          </p>
          <ol className="space-y-1.5 text-sm">
            {toc.map((item, i) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="flex items-start gap-2.5 text-body transition-colors hover:text-accent"
                >
                  <span className="mt-0.5 shrink-0 font-mono text-[11px] text-muted">{String(i + 1).padStart(2, "0")}</span>
                  {item.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* Content */}
        <div className="mt-12 space-y-14 border-t border-line pt-12">
          {children}
        </div>

        {/* Legal cross-links */}
        <div className="mt-16 border-t border-line pt-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.07em] text-muted">Legal</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
            {LEGAL_LINKS.map((l) => (
              <Link key={l.href} href={l.href} className="text-body transition-colors hover:text-accent">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
