import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SiloHeader } from "@/components/SiloHeader";
import { PricingSection } from "@/components/PricingSection";
import { DevicesGrid } from "@/components/DevicesGrid";
import { VodCarousel } from "@/components/VodCarousel";
import { StickyCTA } from "@/components/StickyCTA";
import Link from "next/link";
import { Shield, Zap, Tv, Headphones, Award, ArrowRight } from "lucide-react";

export function generateMetadata(): Metadata {
  return {
    title: "Abonnement Atlas Pro : Prix, Formules & Offres Officielles 2026",
    description:
      "Découvrez toutes les formules abonnement Atlas Pro : 1 mois, 12 mois, multi-écrans. Serveurs stables 99.9 %, +10 000 chaînes 4K/FHD, activation en 15 min. Comparez les prix Atlas Pro.",
    keywords:
      "abonnement atlas pro, atlas pro prix, atlas pro abonnement, atlas pro iptv abonnement, abonnement atlas pro ontv",
    alternates: {
      canonical: "https://iboatlaspro.com/abonnement-atlas-pro/",
    },
  };
}

const hubFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Quel est le prix de l'abonnement Atlas Pro ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "L'abonnement Atlas Pro est disponible à partir de 39,99 € pour 12 mois (soit 3,33 €/mois). Des formules 1 mois et multi-écrans sont également disponibles sur iboatlaspro.com.",
      },
    },
    {
      "@type": "Question",
      name: "Comment commander un abonnement Atlas Pro officiel ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Commandez directement sur iboatlaspro.com : choisissez votre formule, payez en ligne et recevez votre code d'activation par e-mail et WhatsApp en moins de 15 minutes.",
      },
    },
    {
      "@type": "Question",
      name: "Atlas Pro est-il compatible avec tous les appareils ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui. Atlas Pro est compatible avec Smart TV Samsung et LG, Android TV, Amazon Fire Stick, iPhone, iPad, PC Windows, Mac, boîtiers MAG et Chromecast.",
      },
    },
    {
      "@type": "Question",
      name: "Quelle est la différence entre Atlas Pro ONTV et Atlas Pro IBO ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Atlas Pro ONTV est l'application principale recommandée pour Android TV et Fire Stick. Atlas Pro IBO est optimisée pour les Smart TV Samsung et LG. Les deux fonctionnent avec le même code d'abonnement Atlas Pro.",
      },
    },
  ],
};

export default function AtlasProHubPage() {
  const breadcrumbItems = [
    { label: "Abonnement Atlas Pro", href: "/abonnement-atlas-pro/" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#040A17] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(hubFaqSchema) }}
      />
      <Navbar />

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbItems} />
        </div>

        {/* Hero Header */}
        <SiloHeader
          badge="ATLAS PRO OFFICIEL"
          titlePrefix="Abonnement"
          titleGradient="Atlas Pro"
          titleSuffix="Haute Définition"
          description="Profitez de la référence du streaming IPTV en France et en Europe. Plus de 10 000 chaînes en direct et films VOD en qualité 4K Ultra HD avec technologie anti-buffering."
          primaryCtaText="Voir nos formules"
          primaryCtaHref="#pricing"
          secondaryCtaText="Demander un test 24h"
          secondaryCtaHref="/abonnement-atlas-pro/essai-gratuit/"
        />

        {/* Pricing Offers */}
        <PricingSection />

        {/* Multi-Screens Contextual Bridge */}
        <section className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 sm:p-8 rounded-2xl bg-[#0A1428] border border-[#1A2A4A] hover:border-[#1E7BFF]/50 transition-all flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center sm:text-left">
              <span className="text-xs font-bold text-[#22C55E] uppercase tracking-wider">
                NOUVEAUTÉ : PACK MULTI-CONNEXIONS
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-white">
                Besoin d&apos;utiliser votre abonnement sur 2, 3 ou 4 téléviseurs en même temps ?
              </h3>
              <p className="text-xs sm:text-sm text-[#9FB0CC]">
                Découvrez nos formules multi-écrans sans coupure ni blocage d&apos;adresse IP.
              </p>
            </div>
            <Link
              href="/abonnement-atlas-pro/multi-ecrans/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-bold text-white bg-[#1E7BFF] hover:bg-[#2D9CFF] glow-primary transition-all flex-shrink-0"
            >
              <span>Découvrir les offres Multi-Écrans</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* Content & Entity Topical Depth */}
        <section className="py-16 bg-[#060E1F]/60 border-t border-b border-[#1A2A4A]/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <span className="text-xs sm:text-sm font-bold text-[#1E7BFF] uppercase tracking-wider">
                POURQUOI ATLAS PRO ?
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-white">
                La référence de l&apos;IPTV stable et haute performance
              </h2>
              <p className="mt-3 text-[#9FB0CC] text-sm sm:text-base leading-relaxed">
                Atlas Pro s&apos;impose comme le serveur IPTV le plus fiable du
                marché grâce à une infrastructure réseau redondée à 10 Gbps et
                une compatibilité universelle sur toutes vos applications.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-[#0A1428] border border-[#1A2A4A] flex flex-col gap-3">
                <div className="w-10 h-10 rounded-full bg-[#1E7BFF]/20 flex items-center justify-center text-[#1E7BFF]">
                  <Shield className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">
                  Serveurs Anti-Freeze 10 Gbps
                </h3>
                <p className="text-xs sm:text-sm text-[#9FB0CC] leading-relaxed">
                  Zéro coupure lors des grands événements sportifs grâce à notre
                  technologie propriétaire d&apos;équilibrage de charge
                  dynamique.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#0A1428] border border-[#1A2A4A] flex flex-col gap-3">
                <div className="w-10 h-10 rounded-full bg-[#1E7BFF]/20 flex items-center justify-center text-[#1E7BFF]">
                  <Tv className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">
                  Qualité Réelle 4K / FHD & 50 FPS
                </h3>
                <p className="text-xs sm:text-sm text-[#9FB0CC] leading-relaxed">
                  Bénéficiez d&apos;un débit binaire non compressé pour une
                  netteté absolue sur vos téléviseurs OLED et 4K de salon.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#0A1428] border border-[#1A2A4A] flex flex-col gap-3">
                <div className="w-10 h-10 rounded-full bg-[#1E7BFF]/20 flex items-center justify-center text-[#1E7BFF]">
                  <Headphones className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">
                  Support Client 24/7 WhatsApp
                </h3>
                <p className="text-xs sm:text-sm text-[#9FB0CC] leading-relaxed">
                  Une équipe technique réactive pour vous assister
                  instantanément dans l&apos;installation et la configuration de
                  vos codes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* VOD & Device Sections */}
        <VodCarousel />
        <DevicesGrid />
      </main>

      <StickyCTA
        title="Commandez votre code Atlas Pro officiel"
        buttonText="Choisir une formule"
        href="#pricing"
      />
      <Footer />
    </div>
  );
}
