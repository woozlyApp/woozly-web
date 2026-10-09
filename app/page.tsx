import { Faq, FAQ_ITEMS } from "@/components/Faq";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { LeafIntro } from "@/components/LeafIntro";
import { Nav } from "@/components/Nav";
import { Pricing } from "@/components/Pricing";
import { SITE_URL } from "@/lib/site";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "Woozly",
      operatingSystem: "iOS",
      applicationCategory: "SocialNetworkingApplication",
      url: SITE_URL,
      description:
        "Woozly is a location-based social app: drop a plant with your intention at the place you're at, and let AI find the people there who match your vibe.",
      offers: [
        { "@type": "Offer", price: "0", priceCurrency: "USD", name: "Free" },
        {
          "@type": "Offer",
          price: "4.99",
          priceCurrency: "USD",
          name: "Premium Weekly",
        },
        {
          "@type": "Offer",
          price: "14.99",
          priceCurrency: "USD",
          name: "Premium Monthly",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: FAQ_ITEMS.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <LeafIntro />
      <Nav />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Pricing />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
