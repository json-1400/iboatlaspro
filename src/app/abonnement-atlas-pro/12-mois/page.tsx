import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { StickyCTA } from "@/components/StickyCTA";
import { Check, ShieldCheck, Zap, Star, ArrowRight } from "lucide-react";

export function generateMetadata(): Metadata {
  return {
    title: "Abonnement IPTV 12 Mois Pas Cher : Atlas Pro 4K Sans Coupure",
    description:
      "Abonnement IPTV 12 mois au meilleur prix : seulement 49,99 € (soit 4,16 €/mois). Accès à toutes les chaînes et VOD 4K/FHD avec serveurs stables. Activation sous 15 min.",
    alternates: {
      canonical: "https://iboatlaspro.com/abonnement-atlas-pro/12-mois/",
    },
  };
}

export default function AtlasPro12MoisPage() {
  const breadcrumbItems = [
    { label: "Abonnement Atlas Pro", href: "/abonnement-atlas-pro/" },
    { label: "Formule 12 Mois", href: "/abonnement-atlas-pro/12-mois/" },
  ];

  const features = [
    "Plus de 10 000 chaînes directes (France, Belgique, Suisse, International)",
    "Bouquet sport complet 4K 50 FPS (championnats européens, sports mécaniques, combats)",
    "VOD illimitée avec +50 000 films & séries en 4K Ultra HD",
    "Qualité 4K, Full HD & HD adaptative sans aucun buffering",
    "Compatible Smart TV, Android Box, Fire Stick, iOS, PC, MAG",
    "Technologie Anti-Freeze de dernière génération",
    "EPG (Guide TV électronique) & Replay 7 jours inclus",
    "Assistance technique prioritaire 24h/24 et 7j/7 via WhatsApp",
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#040A17] text-white">
      <Navbar />

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbItems} />
        </div>

        <section className="py-12 md:py-20 glow-stadium">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold text-white bg-[#0A1428] border border-[#1E7BFF] shadow-[0_0_15px_rgba(30,123,255,0.35)]">
                MEILLEUR RAPPORT QUALITÉ-PRIX
              </span>
              <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                Abonnement IPTV 12 Mois{" "}
                <span className="gradient-text-blue">Atlas Pro Officiel</span>
              </h1>
              <p className="mt-4 text-base sm:text-lg text-[#9FB0CC] leading-relaxed">
                Optez pour la tranquillité d&apos;esprit pendant un an entier.
                Bénéficiez du tarif le plus économique à seulement{" "}
                <strong className="text-white font-bold">4,16 € / mois</strong>{" "}
                avec une garantie de stabilité 99.9%.
              </p>
            </div>

            {/* Offer Card */}
            <div className="mt-12 p-8 sm:p-10 rounded-2xl bg-[#0A1428] border-2 border-[#1E7BFF] glow-card-active shadow-[0_0_40px_rgba(30,123,255,0.3)]">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-7 space-y-6">
                  <div className="flex items-center gap-3">
                    <span className="text-4xl sm:text-5xl font-extrabold text-white">
                      € 49,99
                    </span>
                    <span className="text-sm text-[#9FB0CC] font-medium">
                      pour 12 mois complets <br />
                      <span className="text-[#22C55E] font-bold">
                        (Soit 4,16 € / mois)
                      </span>
                    </span>
                  </div>

                  <ul className="space-y-3 pt-2" aria-label="Points forts de l'abonnement 12 mois">
                    {features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-[#1E7BFF] stroke-[3] mt-0.5 flex-shrink-0" />
                        <span className="text-xs sm:text-sm text-white/90">
                          {feat}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="md:col-span-5 flex flex-col items-center justify-center p-6 rounded-xl bg-[#060E1F]/80 border border-[#1A2A4A] text-center space-y-5">
                  <div className="flex items-center gap-1 text-[#FFB800]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <div className="text-sm font-bold text-white">
                    4.9/5 satisfaction client
                  </div>
                  <p className="text-xs text-[#9FB0CC] leading-relaxed">
                    Code d&apos;activation personnel envoyé par e-mail et
                    WhatsApp immédiatement après validation.
                  </p>

                  <Link
                    href="/commander/?plan=12-mois"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full text-base font-bold text-white bg-[#1E7BFF] hover:bg-[#2D9CFF] glow-primary transition-all duration-200"
                  >
                    <span>Commander l&apos;offre 12 mois</span>
                    <ArrowRight className="w-5 h-5" />
                  </Link>

                  <div className="flex items-center justify-center gap-4 text-[11px] text-[#9FB0CC]">
                    <span className="flex items-center gap-1">
                      <Zap className="w-3 h-3 text-[#1E7BFF]" />
                      Actif en 15 min
                    </span>
                    <span className="flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3 text-[#22C55E]" />
                      Paiement sécurisé
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <StickyCTA
        title="Offre 12 mois Atlas Pro à 49,99 €"
        buttonText="Commander maintenant"
        href="/commander/?plan=12-mois"
      />
      <Footer />
    </div>
  );
}
