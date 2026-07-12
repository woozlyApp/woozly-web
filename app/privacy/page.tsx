import type { Metadata } from "next";
import { CONTACT_EMAIL } from "@/lib/site";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy",
  description: "How Woozly handles your location, messages, and account data.",
};

export default function PrivacyPage() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-3xl px-5 py-20">
        <h1 className="font-display text-4xl font-bold tracking-tight">
          Privacy
        </h1>
        <div className="mt-8 space-y-6 leading-relaxed text-body">
          <p>
            The short version: your location is used to show you nearby places
            while the app is open, your messages are end-to-end encrypted so we
            cannot read them, and we do not sell your data.
          </p>
          <p>
            A full privacy policy is being finalised for launch. Until then,
            questions are welcome at{" "}
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
