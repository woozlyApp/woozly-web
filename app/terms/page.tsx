import type { Metadata } from "next";
import { CONTACT_EMAIL } from "@/lib/site";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms of use for the Woozly app and website.",
};

export default function TermsPage() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-3xl px-5 py-20">
        <h1 className="font-display text-4xl font-bold tracking-tight">
          Terms
        </h1>
        <div className="mt-8 space-y-6 leading-relaxed text-body">
          <p>
            Woozly is in beta. Be decent to the people you meet, only join
            places you are actually at, and report anything that feels off from
            inside the app.
          </p>
          <p>
            Full terms of service are being finalised for launch. Questions are
            welcome at{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-accent-soft underline underline-offset-4"
            >
              {CONTACT_EMAIL}
            </a>
            .
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
