import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { DevicesGrid } from "@/components/DevicesGrid";
import { VodCarousel } from "@/components/VodCarousel";
import { PricingSection } from "@/components/PricingSection";
import { Testimonials } from "@/components/Testimonials";
import { StatsBand } from "@/components/StatsBand";
import { CtaFaqSection } from "@/components/CtaFaqSection";
import { Footer } from "@/components/Footer";

export function generateMetadata(): Metadata {
  return {
    title: "iboatlaspro - IPTV Premium 4K / FHD Sans Coupure & Haute Qualité",
    description:
      "Abonnement IPTV Premium fiable et rapide. Profitez de milliers de chaînes TV, films et séries en 4K UHD sans buffer sur tous vos appareils. Support 24/7.",
    alternates: {
      canonical: "https://iboatlaspro.com",
    },
  };
}

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#040A17] text-white">
      {/* Sticky Blurred Navbar */}
      <Navbar />

      <main className="flex-1">
        {/* Hero Section with H1, Badges, Features and Cinematic Showcase */}
        <HeroSection />

        {/* Compatible Devices Grid (8 devices) */}
        <DevicesGrid />

        {/* 4K VOD Poster Carousel with Scroll-triggered Swiper */}
        <VodCarousel />

        {/* Pricing Offers (4 tiers with 6M highlighted) */}
        <PricingSection />

        {/* Verified Customer Testimonials */}
        <Testimonials />

        {/* Key Performance Stats Band */}
        <StatsBand />

        {/* CTA, Interactive FAQ Accordion, WhatsApp & Support */}
        <CtaFaqSection />
      </main>

      {/* Footer with links, social icons, and payment badges */}
      <Footer />
    </div>
  );
}
