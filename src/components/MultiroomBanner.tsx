import Link from "next/link";
import { Users, Tv, Sparkles, ArrowRight, ShieldCheck } from "lucide-react";

export function MultiroomBanner() {
  return (
    <section
      className="py-12 bg-[#040A17] relative"
      aria-label="Offre Multi-Écrans pour familles et résidences"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl border border-[#1E7BFF]/30 bg-gradient-to-r from-[#07132B] via-[#0A1836] to-[#07132B] p-8 md:p-12 overflow-hidden shadow-2xl">
          {/* Subtle Accent Glow */}
          <div
            className="absolute -right-20 -top-20 w-80 h-80 bg-[#1E7BFF]/10 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold text-[#1E7BFF] bg-[#1E7BFF]/10 border border-[#1E7BFF]/20">
                <Users className="w-3.5 h-3.5" />
                <span>OFFRE SPÉCIALE FOYER & FAMILLES</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Regardez Vos Programmes sur Plusieurs Téléviseurs en Même Temps
              </h2>

              <p className="text-sm sm:text-base text-[#9FB0CC] leading-relaxed max-w-2xl">
                Finies les disputes de télécommande dans le salon. Avec l&apos;option{" "}
                <strong className="text-white font-semibold">
                  Atlas Pro Multi-Écrans
                </strong>
                , équipez 2, 3 ou 4 pièces simultanément avec des flux 4K indépendants et une bande passante dédiée sans aucun ralentissement.
              </p>

              {/* Feature Badges */}
              <div className="flex flex-wrap gap-4 pt-2">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-[#D8E2F0]">
                  <Tv className="w-4 h-4 text-[#1E7BFF]" />
                  <span>2 à 4 flux 4K simultanés</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-[#D8E2F0]">
                  <Sparkles className="w-4 h-4 text-[#1E7BFF]" />
                  <span>Dès 4,99 €/mois par écran</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-[#D8E2F0]">
                  <ShieldCheck className="w-4 h-4 text-[#1E7BFF]" />
                  <span>Zéro coupure garantie</span>
                </div>
              </div>
            </div>

            {/* Right Action Box */}
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-start lg:items-end justify-center gap-4">
              <div className="text-left lg:text-right">
                <span className="text-xs uppercase text-[#9FB0CC] tracking-wider font-semibold block">
                  Packs Annuels Multiroom
                </span>
                <span className="text-2xl sm:text-3xl font-extrabold text-white">
                  Dès 59,99 €
                  <span className="text-sm font-normal text-[#9FB0CC]"> / an</span>
                </span>
              </div>

              <Link
                href="/abonnement-atlas-pro-multi-ecrans/"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full text-sm font-bold text-white bg-[#1E7BFF] hover:bg-[#2D9CFF] glow-primary transition-all duration-200 shadow-lg shadow-[#1E7BFF]/25 w-full sm:w-auto"
              >
                <span>Découvrir les offres Multi-Écrans</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
