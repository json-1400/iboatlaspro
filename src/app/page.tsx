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
    title: "Atlas Pro France — Abonnement IPTV 4K Sans Coupure | iboatlaspro",
    description:
      "Abonnement Atlas Pro officiel en France : +10 000 chaînes en direct, VOD 4K/FHD, serveurs stables 99.9 %. Atlas Pro ONTV, Atlas Pro IBO, IPTV Smarters. Activation en 15 min.",
    keywords:
      "atlas pro france, atlas pro, atlas pro iptv, abonnement iptv, atlas pro 2026, atlaspro, iptv atlas pro, atlas pro ontv",
    alternates: {
      canonical: "https://iboatlaspro.com",
    },
  };
}

const homepageFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Qu'est-ce qu'Atlas Pro IPTV en France ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Atlas Pro est une application IPTV permettant d'accéder à plus de 10 000 chaînes TV en direct et à une VOD illimitée en qualité 4K/FHD. En France, l'abonnement Atlas Pro est distribué par iboatlaspro.com avec une activation en moins de 15 minutes.",
      },
    },
    {
      "@type": "Question",
      name: "Quel est le prix de l'abonnement Atlas Pro 12 mois en France ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "L'abonnement Atlas Pro 12 mois est disponible à 39,99 € soit 3,33 € par mois. C'est le meilleur rapport qualité-prix du marché IPTV en France.",
      },
    },
    {
      "@type": "Question",
      name: "Atlas Pro est-il compatible avec ma Smart TV Samsung ou LG ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui. Atlas Pro ONTV et Atlas Pro IBO sont compatibles avec les Smart TV Samsung (Tizen), LG (webOS), Android TV, Fire TV Stick, iPhone, iPad, PC Windows et Mac.",
      },
    },
    {
      "@type": "Question",
      name: "Pourquoi Atlas Pro ne peut pas se connecter au serveur ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "L'erreur de connexion sur Atlas Pro est généralement causée par un blocage DNS de votre fournisseur d'accès. Solution : changez vos DNS vers 8.8.8.8 (Google) ou 1.1.1.1 (Cloudflare) dans les paramètres réseau de votre appareil.",
      },
    },
  ],
};

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#040A17] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageFaqSchema) }}
      />
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
