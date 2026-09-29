import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { StickyCTA } from "@/components/StickyCTA";
import { Tv, Check, ArrowRight, ShieldCheck, Zap } from "lucide-react";

export function generateMetadata(): Metadata {
  return {
    title: "Abonnement IPTV Français : Chaînes TNT & Premium en 4K Sans Coupure",
    description:
      "Toutes les chaînes TV françaises en direct : bouquet TNT complet, cinéma, jeunesse, séries et documentaires en qualité 4K Ultra HD. EPG et Replay inclus.",
    alternates: {
      canonical: "https://iboatlaspro.com/chaines/francaises/",
    },
  };
}

export default function ChainesFrancaisesPage() {
  const breadcrumbItems = [
    { label: "Chaînes", href: "/chaines/" },
    { label: "Chaînes Françaises", href: "/chaines/francaises/" },
  ];

  const packages = [
    {
      title: "Bouquet Généraliste & TNT",
      desc: "Toutes les grandes chaînes nationales et régionales d'information, divertissement et talk-shows en 4K & FHD avec EPG.",
    },
    {
      title: "Bouquet Cinéma & Séries",
      desc: "Canaux thématiques cinéma, sorties récentes, séries exclusives, fictions et classiques restaurés en ultra haute définition.",
    },
    {
      title: "Documentaires & Découverte",
      desc: "Canaux sciences, nature, histoire, aventures du monde, reportages et faune sauvage en 4K native.",
    },
    {
      title: "Jeunesse & Famille",
      desc: "Dessins animés pour enfants de tous âges, programmes ludo-éducatifs, fictions familiales et dessins animés cultes.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#040A17] text-white">
      <Navbar />

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbItems} />
        </div>

        <section className="py-12 md:py-20 glow-stadium">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="px-3.5 py-1.5 rounded-full text-xs font-bold text-white bg-[#0A1428] border border-[#1E7BFF]">
                BOUQUET FRANCE 4K
              </span>
              <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                Abonnement IPTV{" "}
                <span className="gradient-text-blue">Chaînes Françaises</span>
              </h1>
              <p className="mt-4 text-base text-[#9FB0CC] leading-relaxed">
                Le bouquet télévisé français le plus complet du marché avec une
                stabilité éprouvée depuis plus de 5 ans et un Replay 7 jours.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {packages.map((pkg) => (
                <div
                  key={pkg.title}
                  className="p-6 rounded-2xl bg-[#0A1428] border border-[#1A2A4A] space-y-3"
                >
                  <div className="flex items-center gap-2">
                    <Tv className="w-5 h-5 text-[#1E7BFF]" />
                    <h2 className="text-lg font-bold text-white">
                      {pkg.title}
                    </h2>
                  </div>
                  <p className="text-xs sm:text-sm text-[#9FB0CC] leading-relaxed">
                    {pkg.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 p-8 rounded-2xl bg-[#060E1F] border border-[#1E7BFF]/40 text-center space-y-4">
              <h3 className="text-xl font-bold text-white">
                Regardez toutes vos émissions et matchs en direct
              </h3>
              <p className="text-xs sm:text-sm text-[#9FB0CC] max-w-xl mx-auto">
                Activation immédiate en moins de 15 minutes, compatible avec vos
                Smart TV, boîtiers et smartphones.
              </p>
              <Link
                href="/abonnement-atlas-pro/12-mois/"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-bold text-white bg-[#1E7BFF] hover:bg-[#2D9CFF] glow-primary transition-all"
              >
                <span>Commander la formule 12 mois (39,99 €)</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <StickyCTA
        title="Abonnement IPTV Français 4K"
        buttonText="Commander (3,33 €/mois)"
        href="/abonnement-atlas-pro/12-mois/"
      />
      <Footer />
    </div>
  );
}
