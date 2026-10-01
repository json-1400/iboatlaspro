import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AppsShowcaseSection } from "@/components/AppsShowcaseSection";
import { DevicesGrid } from "@/components/DevicesGrid";
import { VodCarousel } from "@/components/VodCarousel";
import { PricingSection } from "@/components/PricingSection";
import { MultiroomBanner } from "@/components/MultiroomBanner";
import { InfrastructureSection } from "@/components/InfrastructureSection";
import { HowToStepsSection } from "@/components/HowToStepsSection";
import { StatsBand } from "@/components/StatsBand";
import { CtaFaqSection } from "@/components/CtaFaqSection";
import { Footer } from "@/components/Footer";

export function generateMetadata(): Metadata {
  return {
    title: "Atlas Pro France — Site Officiel & Serveurs IPTV 4K Sans Coupure",
    description:
      "Abonnement Atlas Pro officiel en France : +10 000 chaînes directes 4K UHD, VOD illimitée, technologie Anti-Freeze 2.0 et serveurs CDN stables. Activation immédiate en 15 min.",
    keywords: [
      "atlas pro",
      "atlas pro france",
      "atlas pro officiel",
      "serveur atlas pro",
      "abonnement atlas pro",
      "atlas pro iptv",
      "atlas pro max",
      "atlas pro ontv",
      "code downloader atlas pro",
      "iptv 4k france",
    ],
    alternates: {
      canonical: "https://iboatlaspro.com/",
    },
    openGraph: {
      title: "Atlas Pro France — Site Officiel & Serveurs IPTV 4K Sans Coupure",
      description:
        "Accédez à plus de 10 000 chaînes 4K et 50 000 films/séries avec l'abonnement officiel Atlas Pro. Serveurs haute disponibilité sans coupure.",
      url: "https://iboatlaspro.com",
      siteName: "Atlas Pro Officiel",
      locale: "fr_FR",
      type: "website",
      images: [
        {
          url: "https://iboatlaspro.com/images/hero-devices.jpg",
          width: 1200,
          height: 630,
          alt: "Atlas Pro France — Plateforme IPTV 4K officielle",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Atlas Pro France — Site Officiel & Serveurs IPTV 4K",
      description:
        "Abonnement officiel Atlas Pro IPTV en France. +10 000 chaînes 4K UHD sans coupure.",
    },
  };
}

const homepageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://iboatlaspro.com/#website",
      "url": "https://iboatlaspro.com",
      "name": "Atlas Pro Officiel France",
      "description": "Portail officiel d'abonnement Atlas Pro IPTV en France",
      "inLanguage": "fr-FR",
    },
    {
      "@type": "Organization",
      "@id": "https://iboatlaspro.com/#organization",
      "name": "Atlas Pro France",
      "url": "https://iboatlaspro.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://iboatlaspro.com/icon.svg",
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+212715214002",
        "contactType": "customer service",
        "availableLanguage": ["French", "English", "Arabic"],
      },
    },
    {
      "@type": "Product",
      "@id": "https://iboatlaspro.com/#product",
      "name": "Abonnement Atlas Pro IPTV 4K",
      "description":
        "Abonnement officiel Atlas Pro IPTV : +10 000 chaînes directes 4K UHD, VOD illimitée, technologie Anti-Freeze 2.0.",
      "brand": {
        "@type": "Brand",
        "name": "Atlas Pro",
      },
      "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "EUR",
        "lowPrice": "19.99",
        "highPrice": "79.99",
        "offerCount": "7",
      },
    },
  ],
};

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#040A17] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageSchema) }}
      />
      {/* Sticky Blurred Navbar */}
      <Navbar />

      <main className="flex-1">
        {/* Hero Section with H1, Badges, Features and Cinematic Showcase */}
        <HeroSection />

        {/* Official Applications Showcase (ONTV, Max, IBO) */}
        <AppsShowcaseSection />

        {/* Compatible Devices Grid (8 devices) */}
        <DevicesGrid />

        {/* 4K VOD Poster Carousel with Scroll-triggered Swiper */}
        <VodCarousel />

        {/* Pricing Offers (3 tiers with 12M highlighted, link to #abonnement) */}
        <PricingSection />

        {/* Dedicated Multiroom & Family Banner */}
        <MultiroomBanner />

        {/* Technical Infrastructure & E-E-A-T (CDN, 8 Datacenters, Anti-Freeze 2.0) */}
        <InfrastructureSection />

        {/* 3-Step Activation Guide */}
        <HowToStepsSection />

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
