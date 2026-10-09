"use client";

import { useState } from "react";
import { WAITLIST_ENDPOINT } from "@/lib/site";

type State = "idle" | "loading" | "done" | "error";

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<State>("idle");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const value = email.trim();
    if (!value) return;
    setState("loading");
    try {
      const res = await fetch(WAITLIST_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ email: value }),
      });
      if (!res.ok) throw new Error("bad response");
      setState("done");
    } catch {
      setState("error");
    }
  };

  if (state === "done") {
    return (
      <div className="flex items-center gap-2.5 rounded-full border border-sage/30 bg-sage-light px-5 py-3.5">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-sage" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg>
        <p className="text-sm font-semibold text-sage">You&apos;re on the list — we&apos;ll email you when Woozly opens.</p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="flex w-full max-w-md flex-col gap-2.5 sm:flex-row">
      {/* Honeypot — bots fill this, humans don't */}
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />

      <input
        type="email"
        required
        value={email}
        onChange={(e) => { setEmail(e.target.value); if (state === "error") setState("idle"); }}
        placeholder="you@email.com"
        aria-label="Email address"
        className="flex-1 rounded-full border border-line bg-surface px-5 py-3.5 text-sm text-ink outline-none transition-colors placeholder:text-muted focus:border-accent"
      />
      <button
        type="submit"
        disabled={state === "loading"}
        className="rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-accent-deep hover:shadow-[0_4px_16px_oklch(40.8%_0.228_293/0.3)] disabled:opacity-60"
      >
        {state === "loading" ? "Joining…" : "Join the waitlist"}
      </button>

      {state === "error" && (
        <p className="w-full text-xs text-red-500 sm:absolute sm:mt-14">Something went wrong. Please try again.</p>
      )}
    </form>
  );
}
