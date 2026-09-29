import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SiloHeader } from "@/components/SiloHeader";
import { PricingSection } from "@/components/PricingSection";
import { StickyCTA } from "@/components/StickyCTA";
import { Check, Tv, Zap, ArrowRight, ShieldCheck, Monitor } from "lucide-react";

export function generateMetadata(): Metadata {
  return {
    title: "Abonnement IPTV Smarters Pro : Formule 12 Mois 4K Sans Coupure",
    description:
      "Abonnement officiel pour IPTV Smarters Pro. Profitez de +10 000 chaînes directes et VOD 4K/FHD avec identifiants Xtream Codes. Compatible Android, Fire TV, iOS, PC.",
    alternates: {
      canonical: "https://iboatlaspro.com/abonnement-iptv-smarters-pro/",
    },
  };
}

export default function IptvSmartersProHubPage() {
  const breadcrumbItems = [
    {
      label: "Abonnement IPTV Smarters Pro",
      href: "/abonnement-iptv-smarters-pro/",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#040A17] text-white">
      <Navbar />

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbItems} />
        </div>

        {/* Silo Header */}
        <SiloHeader
          badge="IPTV SMARTERS PRO OFFICIEL"
          titlePrefix="Abonnement"
          titleGradient="IPTV Smarters Pro"
          titleSuffix="4K / FHD"
          description="Profitez de l'application IPTV la plus populaire au monde avec des identifiants Xtream Codes optimisés sur nos serveurs haute performance sans coupure."
          primaryCtaText="Voir nos formules Smarters"
          primaryCtaHref="#pricing"
          secondaryCtaText="Formule 12 mois (49,99 €)"
          secondaryCtaHref="/abonnement-iptv-smarters-pro/1-an/"
        />

        {/* Sub-silo Quick Navigation */}
        <section className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link
              href="/abonnement-iptv-smarters-pro/1-an/"
              className="p-6 rounded-2xl bg-[#0A1428] border border-[#1A2A4A] hover:border-[#1E7BFF] transition-all group flex items-center justify-between"
            >
              <div>
                <span className="text-xs text-[#1E7BFF] font-bold uppercase tracking-wider">
                  FORMULE LA PLUS POPULAIRE
                </span>
                <h2 className="text-lg font-bold text-white mt-1 group-hover:text-[#1E7BFF] transition-colors">
                  Abonnement IPTV Smarters Pro 1 An
                </h2>
                <p className="text-xs text-[#9FB0CC] mt-1">
                  12 mois d&apos;accès complet à 49,99 € (soit 4,16 € / mois).
                </p>
              </div>
              <ArrowRight className="w-5 h-5 text-[#9FB0CC] group-hover:text-[#1E7BFF] group-hover:translate-x-1 transition-all flex-shrink-0" />
            </Link>

            <Link
              href="/abonnement-iptv-smarters-pro/prix/"
              className="p-6 rounded-2xl bg-[#0A1428] border border-[#1A2A4A] hover:border-[#1E7BFF] transition-all group flex items-center justify-between"
            >
              <div>
                <span className="text-xs text-[#22C55E] font-bold uppercase tracking-wider">
                  GRILLE TARIFAIRE
                </span>
                <h2 className="text-lg font-bold text-white mt-1 group-hover:text-[#1E7BFF] transition-colors">
                  Comparatif des Prix IPTV Smarters
                </h2>
                <p className="text-xs text-[#9FB0CC] mt-1">
                  Détail de toutes nos formules (1, 3, 6 et 12 mois).
                </p>
              </div>
              <ArrowRight className="w-5 h-5 text-[#9FB0CC] group-hover:text-[#1E7BFF] group-hover:translate-x-1 transition-all flex-shrink-0" />
            </Link>
          </div>
        </section>

        {/* Pricing Section */}
        <PricingSection />

        {/* Features & Compatibility */}
        <section className="py-16 bg-[#060E1F]/60 border-t border-[#1A2A4A]/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <span className="text-xs sm:text-sm font-bold text-[#1E7BFF] uppercase tracking-wider">
                FONCTIONNALITÉS AVANCÉES
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-white">
                Pourquoi utiliser IPTV Smarters Pro avec nos flux ?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-[#0A1428] border border-[#1A2A4A]">
                <Monitor className="w-8 h-8 text-[#1E7BFF] mb-3" />
                <h3 className="text-base font-bold text-white">
                  Multi-Écrans & Multi-Profils
                </h3>
                <p className="text-xs sm:text-sm text-[#9FB0CC] mt-2 leading-relaxed">
                  Visionnez jusqu&apos;à 4 flux simultanément en mode mosaïque
                  pour ne rien manquer de vos événements sportifs favoris.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#0A1428] border border-[#1A2A4A]">
                <Tv className="w-8 h-8 text-[#1E7BFF] mb-3" />
                <h3 className="text-base font-bold text-white">
                  EPG & Replay Intégrés
                </h3>
                <p className="text-xs sm:text-sm text-[#9FB0CC] mt-2 leading-relaxed">
                  Guide électronique des programmes avec affichage des résumés,
                  horaires et fonction de rattrapage sur 7 jours.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#0A1428] border border-[#1A2A4A]">
                <Zap className="w-8 h-8 text-[#1E7BFF] mb-3" />
                <h3 className="text-base font-bold text-white">
                  Connexion API Xtream Codes
                </h3>
                <p className="text-xs sm:text-sm text-[#9FB0CC] mt-2 leading-relaxed">
                  Simple identifiant et mot de passe à saisir, avec mise à jour
                  automatique des nouvelles chaînes et films VOD.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <StickyCTA
        title="Abonnement IPTV Smarters Pro 12 mois"
        buttonText="Commander (49,99 €)"
        href="/abonnement-iptv-smarters-pro/1-an/"
      />
      <Footer />
    </div>
  );
}
