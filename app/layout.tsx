import type { Metadata } from "next";
import { Figtree, Poppins } from "next/font/google";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Woozly · Drop a plant. Meet the room.",
    template: "%s · Woozly",
  },
  description:
    "Woozly is a location-based social app: drop a plant with your intention at the cafe, bar, or park you're at, and let AI find the people there who actually match your vibe.",
  keywords: [
    "meet people nearby",
    "location-based social app",
    "drop a plant",
    "social map app",
    "meet people at cafes and bars",
    "intention-based social",
    "Woozly",
  ],
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Woozly",
    title: "Woozly · Drop a plant. Meet the room.",
    description:
      "Drop your intention, find the people at this place who get it. Woozly AI does the matching.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Woozly" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Woozly · Drop a plant. Meet the room.",
    description:
      "Drop your intention, find the people at this place who get it. Woozly AI does the matching.",
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: SITE_URL },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${figtree.variable} ${poppins.variable}`}>
      <body>{children}</body>
    </html>
  );
}
