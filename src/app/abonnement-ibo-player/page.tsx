import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SiloHeader } from "@/components/SiloHeader";
import { StickyCTA } from "@/components/StickyCTA";
import {
  Check,
  Tv,
  Zap,
  ArrowRight,
  ShieldCheck,
  Smartphone,
  Sparkles,
} from "lucide-react";

export function generateMetadata(): Metadata {
  return {
    title: "Abonnement IBO Player Pro : Activation Immédiate & Licence Officielle",
    description:
      "Activez votre application IBO Player Pro pour Smart TV Samsung, LG, Android TV et Fire Stick. Licence 1 an et formule tout-en-un avec playlist 4K.",
    alternates: {
      canonical: "https://iboatlaspro.com/abonnement-ibo-player/",
    },
  };
}

export default function IboPlayerHubPage() {
  const breadcrumbItems = [
    { label: "Abonnement IBO Player", href: "/abonnement-ibo-player/" },
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
          badge="IBO PLAYER PRO OFFICIEL"
          titlePrefix="Abonnement & Activation"
          titleGradient="IBO Player"
          titleSuffix="Smart TV"
          description="Le lecteur multimédia le plus rapide et fluide pour vos téléviseurs connectés. Activez votre licence officielle ou profitez de notre formule complète avec chaînes 4K."
          primaryCtaText="Activer mon application"
          primaryCtaHref="/abonnement-ibo-player/activation/"
          secondaryCtaText="Licence 1 an (7,99 €)"
          secondaryCtaHref="/abonnement-ibo-player/1-an/"
        />

        {/* Sub-silo Quick Navigation Cards */}
        <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link
              href="/abonnement-ibo-player/activation/"
              className="p-6 rounded-2xl bg-[#0A1428] border border-[#1A2A4A] hover:border-[#1E7BFF] transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-[#1E7BFF]/20 flex items-center justify-center text-[#1E7BFF] mb-3 group-hover:scale-105 transition-transform">
                <Zap className="w-5 h-5" />
              </div>
              <h2 className="text-base font-bold text-white group-hover:text-[#1E7BFF] transition-colors">
                Portail d&apos;Activation
              </h2>
              <p className="text-xs text-[#9FB0CC] mt-1">
                Entrez votre adresse MAC et Device Key pour une activation en 5 minutes.
              </p>
            </Link>

            <Link
              href="/abonnement-ibo-player/samsung-lg/"
              className="p-6 rounded-2xl bg-[#0A1428] border border-[#1A2A4A] hover:border-[#1E7BFF] transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-[#1E7BFF]/20 flex items-center justify-center text-[#1E7BFF] mb-3 group-hover:scale-105 transition-transform">
                <Tv className="w-5 h-5" />
              </div>
              <h2 className="text-base font-bold text-white group-hover:text-[#1E7BFF] transition-colors">
                Smart TV Samsung & LG
              </h2>
              <p className="text-xs text-[#9FB0CC] mt-1">
                Guide d&apos;installation directe depuis les stores Tizen et webOS.
              </p>
            </Link>

            <Link
              href="/abonnement-ibo-player/playlist/"
              className="p-6 rounded-2xl bg-[#0A1428] border border-[#1A2A4A] hover:border-[#1E7BFF] transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-[#1E7BFF]/20 flex items-center justify-center text-[#1E7BFF] mb-3 group-hover:scale-105 transition-transform">
                <Sparkles className="w-5 h-5" />
              </div>
              <h2 className="text-base font-bold text-white group-hover:text-[#1E7BFF] transition-colors">
                Configuration Playlist M3U
              </h2>
              <p className="text-xs text-[#9FB0CC] mt-1">
                Comment injecter votre flux Atlas Pro ou Xtream Codes dans IBO.
              </p>
            </Link>

            <Link
              href="/abonnement-ibo-player/gratuit/"
              className="p-6 rounded-2xl bg-[#0A1428] border border-[#1A2A4A] hover:border-[#1E7BFF] transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-[#1E7BFF]/20 flex items-center justify-center text-[#1E7BFF] mb-3 group-hover:scale-105 transition-transform">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h2 className="text-base font-bold text-white group-hover:text-[#1E7BFF] transition-colors">
                Essai Gratuit 7 Jours
              </h2>
              <p className="text-xs text-[#9FB0CC] mt-1">
                Tout savoir sur la période de test initiale offerte par l&apos;application.
              </p>
            </Link>
          </div>
        </section>

        {/* Pricing Options */}
        <section className="py-16 bg-[#060E1F]/50 border-t border-b border-[#1A2A4A]/50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Nos formules IBO Player Pro
              </h2>
              <p className="mt-2 text-sm text-[#9FB0CC]">
                Choisissez entre l&apos;activation de licence seule ou le pack
                complet avec abonnement IPTV.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Option 1: License Only */}
              <div className="p-8 rounded-2xl bg-[#0A1428] border border-[#1A2A4A] space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-white">
                    Licence IBO Player Seule
                  </h3>
                  <p className="text-xs text-[#9FB0CC] mt-1">
                    Pour les utilisateurs disposant déjà de leur playlist
                  </p>
                  <div className="mt-4 text-3xl font-extrabold text-white">
                    € 7,99{" "}
                    <span className="text-xs font-normal text-[#9FB0CC]">
                      / 1 an
                    </span>
                  </div>
                </div>

                <ul className="space-y-3 text-xs sm:text-sm text-white/90">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#1E7BFF] flex-shrink-0" />
                    Déblocage officiel de l&apos;application
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#1E7BFF] flex-shrink-0" />
                    Activation immédiate via MAC + Key
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#1E7BFF] flex-shrink-0" />
                    Compatible tous modèles de Smart TV
                  </li>
                </ul>

                <Link
                  href="/abonnement-ibo-player/activation/"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-white border border-[#1A2A4A] hover:border-[#1E7BFF] bg-transparent hover:bg-[#1E7BFF]/10 transition-colors"
                >
                  <span>Activer ma licence</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Option 2: Full Pack (Highlighted) */}
              <div className="p-8 rounded-2xl bg-[#0A1428] border-2 border-[#1E7BFF] glow-card-active shadow-[0_0_35px_rgba(30,123,255,0.25)] space-y-6 relative">
                <div className="absolute -top-3.5 right-6">
                  <span className="px-3.5 py-1 rounded-full text-xs font-bold text-white bg-[#1E7BFF]">
                    PACK RECOMMANDÉ
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white">
                    Pack IBO Player + Atlas Pro 12 Mois
                  </h3>
                  <p className="text-xs text-[#9FB0CC] mt-1">
                    Application activée + Accès à toutes les chaînes 4K
                  </p>
                  <div className="mt-4 text-3xl font-extrabold text-white">
                    € 54,99{" "}
                    <span className="text-xs font-normal text-[#9FB0CC]">
                      / an tout inclus
                    </span>
                  </div>
                </div>

                <ul className="space-y-3 text-xs sm:text-sm text-white/90">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#1E7BFF] flex-shrink-0" />
                    Licence IBO Player 1 an offerte & activée
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#1E7BFF] flex-shrink-0" />
                    Abonnement Atlas Pro 12 mois (+10 000 chaînes & VOD 4K)
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#1E7BFF] flex-shrink-0" />
                    Configuration à distance de votre playlist
                  </li>
                </ul>

                <Link
                  href="/commander/?plan=ibo-pack-12m"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-bold text-white bg-[#1E7BFF] hover:bg-[#2D9CFF] glow-primary transition-all"
                >
                  <span>Commander le Pack Tout Inclus</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <StickyCTA
        title="Activez votre IBO Player en quelques clics"
        buttonText="Portail d'activation"
        href="/abonnement-ibo-player/activation/"
      />
      <Footer />
    </div>
  );
}
