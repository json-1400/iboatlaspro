import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Check, ArrowRight, ShieldCheck, Zap, Star } from "lucide-react";

export function generateMetadata(): Metadata {
  return {
    title: "Abonnement IBO Player 1 An : Licence Officielle au Meilleur Prix",
    description:
      "Achetez votre licence IBO Player Pro 1 an pour seulement 7,99 €. Débloquez l'application sur Smart TV Samsung, LG, Android TV et profitez d'une fluidité 4K sans interruption.",
    alternates: {
      canonical: "https://iboatlaspro.com/abonnement-ibo-player/1-an/",
    },
  };
}

export default function IboPlayer1AnPage() {
  const breadcrumbItems = [
    { label: "Abonnement IBO Player", href: "/abonnement-ibo-player/" },
    { label: "Licence 1 An", href: "/abonnement-ibo-player/1-an/" },
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
            <span className="px-3.5 py-1.5 rounded-full text-xs font-bold text-white bg-[#0A1428] border border-[#1E7BFF]">
              LICENCE 12 MOIS
            </span>
            <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Abonnement <span className="gradient-text-blue">IBO Player 1 An</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[#9FB0CC] max-w-xl mx-auto leading-relaxed">
              Débloquez définitivement votre application IBO Player Pro pour 365
              jours sans interruption, directement liée à votre adresse MAC.
            </p>

            <div className="mt-10 p-8 rounded-2xl bg-[#0A1428] border-2 border-[#1E7BFF] glow-card-active max-w-lg mx-auto text-left space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-[#1A2A4A]">
                <div>
                  <div className="text-3xl font-extrabold text-white">€ 7,99</div>
                  <div className="text-xs text-[#9FB0CC] mt-0.5">
                    Paiement unique pour 1 an
                  </div>
                </div>
                <div className="flex items-center gap-1 text-[#FFB800]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>

              <ul className="space-y-3" aria-label="Avantages de la licence 1 an">
                <li className="flex items-center gap-2.5 text-xs sm:text-sm text-white/90">
                  <Check className="w-4 h-4 text-[#1E7BFF] stroke-[3]" />
                  Activation instantanée officielle
                </li>
                <li className="flex items-center gap-2.5 text-xs sm:text-sm text-white/90">
                  <Check className="w-4 h-4 text-[#1E7BFF] stroke-[3]" />
                  Zéro publicité et zapping ultra-rapide
                </li>
                <li className="flex items-center gap-2.5 text-xs sm:text-sm text-white/90">
                  <Check className="w-4 h-4 text-[#1E7BFF] stroke-[3]" />
                  Gestion de plusieurs playlists M3U & Xtream
                </li>
                <li className="flex items-center gap-2.5 text-xs sm:text-sm text-white/90">
                  <Check className="w-4 h-4 text-[#1E7BFF] stroke-[3]" />
                  Compatible Samsung Tizen, LG webOS, Android, Apple
                </li>
              </ul>

              <div className="pt-2">
                <Link
                  href="/abonnement-ibo-player/activation/"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full text-sm font-bold text-white bg-[#1E7BFF] hover:bg-[#2D9CFF] glow-primary transition-all duration-200"
                >
                  <span>Activer ma licence maintenant</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="flex items-center justify-between text-xs text-[#9FB0CC] pt-2">
                <span className="flex items-center gap-1">
                  <Zap className="w-3.5 h-3.5 text-[#1E7BFF]" />
                  Validation automatique
                </span>
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#22C55E]" />
                  Licence 100% officielle
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
