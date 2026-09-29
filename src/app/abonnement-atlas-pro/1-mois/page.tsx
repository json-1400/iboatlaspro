import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Check, ArrowRight, Zap, ShieldCheck } from "lucide-react";

export function generateMetadata(): Metadata {
  return {
    title: "Abonnement IPTV 1 Mois : Test & Formule Sans Engagement Atlas Pro",
    description:
      "Abonnement IPTV 1 mois sans engagement à 9,99 €. Testez toutes les chaînes et films 4K en toute liberté avec support technique et activation rapide.",
    alternates: {
      canonical: "https://iboatlaspro.com/abonnement-atlas-pro/1-mois/",
    },
  };
}

export default function AtlasPro1MoisPage() {
  const breadcrumbItems = [
    { label: "Abonnement Atlas Pro", href: "/abonnement-atlas-pro/" },
    { label: "Formule 1 Mois", href: "/abonnement-atlas-pro/1-mois/" },
  ];

  const features = [
    "Accès immédiat à l'ensemble du bouquet (+10 000 chaînes)",
    "Chaînes sportives et cinéma en 4K UHD et FHD",
    "Catalogue VOD complet mis à jour quotidiennement",
    "Sans aucun engagement ni renouvellement automatique",
    "Compatible Smart TV, Box Android, Fire Stick, Smartphones",
    "Assistance technique 24/7 par WhatsApp",
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#040A17] text-white">
      <Navbar />

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbItems} />
        </div>

        <section className="py-12 md:py-20 glow-stadium">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="px-3.5 py-1.5 rounded-full text-xs font-bold text-white bg-[#0A1428] border border-[#1A2A4A]">
              SANS ENGAGEMENT
            </span>
            <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Abonnement IPTV 1 Mois :{" "}
              <span className="gradient-text-blue">Liberté Totale</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[#9FB0CC] max-w-xl mx-auto leading-relaxed">
              La solution idéale pour découvrir l&apos;expérience Atlas Pro ou
              suivre une compétition sportive spécifique sans contrainte.
            </p>

            <div className="mt-10 p-8 rounded-2xl bg-[#0A1428] border border-[#1A2A4A] max-w-lg mx-auto text-left space-y-6">
              <div className="text-center pb-4 border-b border-[#1A2A4A]">
                <div className="text-4xl font-extrabold text-white">€ 9,99</div>
                <div className="text-xs text-[#9FB0CC] mt-1 font-medium">
                  Paiement unique pour 30 jours d&apos;accès
                </div>
              </div>

              <ul className="space-y-3" aria-label="Inclus dans l'offre 1 mois">
                {features.map((feat) => (
                  <li key={feat} className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#1E7BFF] stroke-[3] flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-white/90">
                      {feat}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="pt-4">
                <Link
                  href="/commander/?plan=1-mois"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-bold text-white bg-[#1E7BFF] hover:bg-[#2D9CFF] glow-primary transition-all duration-200"
                >
                  <span>Commander la formule 1 mois</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="flex items-center justify-between text-xs text-[#9FB0CC] pt-2">
                <span className="flex items-center gap-1">
                  <Zap className="w-3.5 h-3.5 text-[#1E7BFF]" />
                  Activation rapide
                </span>
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#22C55E]" />
                  Paiement 100% sécurisé
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
