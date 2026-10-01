import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { StickyCTA } from "@/components/StickyCTA";
import {
  Globe,
  Tv,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap,
  Sparkles,
  Layers,
} from "lucide-react";

export function generateMetadata(): Metadata {
  return {
    title: "Chaînes IPTV Internationales : Plus de 10 000 Canaux Monde en 4K & FHD",
    description:
      "Accédez aux meilleures chaînes IPTV internationales en direct : Belgique, Suisse, Espagne, Italie, Portugal, Royaume-Uni, USA, Monde Arabe, Turquie et Amérique Latine.",
    alternates: {
      canonical: "https://iboatlaspro.com/chaines/internationales/",
    },
  };
}

export default function ChainesInternationalesPage() {
  const breadcrumbItems = [
    { label: "Chaînes", href: "/chaines/" },
    { label: "Chaînes Internationales", href: "/chaines/internationales/" },
  ];

  const internationalRegions = [
    {
      region: "Europe Francophone",
      flag: "🇧🇪 🇨🇭 🇨🇦",
      channelsCount: "+ 850 chaînes",
      highlights: "Grands canaux généralistes nationaux, divertissement, actualités et chaînes régionales belges, suisses et québécoises",
      features: "Qualité FHD & 4K native, guide EPG complet 7 jours et Replay disponible.",
    },
    {
      region: "Monde Arabe & Maghreb",
      flag: "🇲🇦 🇩🇿 🇹🇳 🇪🇬 🇸🇦",
      channelsCount: "+ 2 400 chaînes",
      highlights: "Grands bouquets arabophones premium, cinéma du Moyen-Orient, chaînes nationales du Maghreb et actualités en continu",
      features: "Stabilité renforcée pour le Ramadan et les grands événements, zapping ultra-rapide.",
    },
    {
      region: "Europe du Sud (Espagne, Italie, Portugal)",
      flag: "🇪🇸 🇮🇹 🇵🇹",
      channelsCount: "+ 1 800 chaînes",
      highlights: "Canaux nationaux, séries et flux sportifs d'Espagne, d'Italie et du Portugal",
      features: "Flux sportifs à 50 FPS pour une fluidité sans compromis.",
    },
    {
      region: "Royaume-Uni & Amérique du Nord",
      flag: "🇬🇧 🇺🇸 🇨🇦",
      channelsCount: "+ 2 100 chaînes",
      highlights: "Réseaux d'actualité majeurs, talk-shows, divertissement et fictions en version originale anglaise (VO)",
      features: "Pistes audio en anglais d'origine (VO), serveurs dédiés à ultra faible latence.",
    },
    {
      region: "Turquie & Balkans",
      flag: "🇹🇷 🇷🇴 🇷🇸",
      channelsCount: "+ 1 100 chaînes",
      highlights: "Large sélection de feuilletons, séries dramatiques, divertissement et compétitions régionales",
      features: "Large sélection de feuilletons, séries et compétitions football nationales.",
    },
    {
      region: "Afrique Subsaharienne & Océanie",
      flag: "🇨🇲 🇨🇮 🇸🇳 🇦🇺",
      channelsCount: "+ 900 chaînes",
      highlights: "Grandes chaînes panafricaines et nationales retransmises en direct sans décalage",
      features: "Canaux retransmis en direct sans décalage horaire excessif.",
    },
  ];

  const streamingFeatures = [
    {
      icon: Zap,
      title: "Zapping Rapide < 0.5s",
      desc: "Changez de chaîne instantanément sans écran de chargement ni latence désagréable.",
    },
    {
      icon: Layers,
      title: "Audio & Sous-titres Multi-langues",
      desc: "Basculez facilement entre la version française (VF), la version originale (VO) et les sous-titres.",
    },
    {
      icon: Tv,
      title: "Guide des Programmes (EPG)",
      desc: "Grille électronique des programmes intégrée pour ne rater aucune émission ni diffusion sportive.",
    },
    {
      icon: ShieldCheck,
      title: "Anti-Freeze & Haute Disponibilité",
      desc: "Équilibrage dynamique de charge (Load Balancing) assurant 99,9% de disponibilité continue.",
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
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="px-3.5 py-1.5 rounded-full text-xs font-bold text-white bg-[#0A1428] border border-[#1E7BFF]">
                BOUQUETS DU MONDE ENTIER
              </span>
              <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                Chaînes IPTV <span className="gradient-text-blue">Internationales</span> en 4K & FHD
              </h1>
              <p className="mt-4 text-base text-[#9FB0CC] leading-relaxed">
                Profitez du bouquet de <strong>chaînes IPTV internationales</strong> le plus vaste du web avec plus de 10 000 chaînes en direct issues de plus de 50 pays. Que vous souhaitiez suivre l&apos;actualité de votre pays d&apos;origine, les ligues de football étrangères ou des chaînes thématiques premium, nos flux garantissent une stabilité irréprochable sans coupure.
              </p>
            </div>

            {/* Region Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              {internationalRegions.map((region) => (
                <div
                  key={region.region}
                  className="p-6 sm:p-7 rounded-2xl bg-[#0A1428] border border-[#1A2A4A] hover:border-[#1E7BFF]/50 transition-all flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <span className="text-xl" role="img" aria-label={region.region}>
                          {region.flag}
                        </span>
                        <h2 className="text-lg font-bold text-white">
                          {region.region}
                        </h2>
                      </div>
                      <span className="text-xs font-bold text-[#22C55E] bg-[#22C55E]/10 px-2.5 py-0.5 rounded-full border border-[#22C55E]/20">
                        {region.channelsCount}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-white/90">
                      <strong className="text-[#1E7BFF]">Chaînes clés :</strong> {region.highlights}
                    </p>

                    <p className="text-xs text-[#9FB0CC] leading-relaxed">
                      {region.features}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#1A2A4A]/60 flex items-center justify-between">
                    <span className="text-[11px] text-[#9FB0CC]">
                      Disponible sur Smart TV, Fire Stick, Box Android
                    </span>
                    <span className="text-xs font-semibold text-[#1E7BFF] flex items-center gap-1">
                      <span>4K / FHD</span>
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Streaming Features */}
            <div className="mb-16">
              <div className="text-center max-w-2xl mx-auto mb-8">
                <h2 className="text-2xl font-bold text-white">
                  Une technologie pensée pour les flux internationaux
                </h2>
                <p className="text-xs sm:text-sm text-[#9FB0CC] mt-2">
                  Des serveurs implantés au plus près des diffuseurs mondiaux pour minimiser le ping et le temps de réponse.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {streamingFeatures.map((feat) => {
                  const Icon = feat.icon;
                  return (
                    <div
                      key={feat.title}
                      className="p-5 rounded-xl bg-[#0A1428]/70 border border-[#1A2A4A] space-y-2 text-center"
                    >
                      <div className="w-10 h-10 rounded-lg bg-[#1E7BFF]/10 border border-[#1E7BFF]/20 flex items-center justify-center text-[#1E7BFF] mx-auto mb-2">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-sm font-bold text-white">{feat.title}</h3>
                      <p className="text-xs text-[#9FB0CC] leading-relaxed">{feat.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Contextual Sibling Cross-Linking */}
            <div className="p-6 rounded-2xl bg-[#0A1428] border border-[#1A2A4A] mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-1 text-center md:text-left">
                <h3 className="text-base font-bold text-white">
                  Vous recherchez d&apos;autres bouquets spécifiques ?
                </h3>
                <p className="text-xs text-[#9FB0CC]">
                  Consultez également nos sélections spécialisées sport et chaînes francophones.
                </p>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <Link
                  href="/chaines/sports/"
                  className="px-4 py-2 rounded-lg bg-[#060E1F] border border-[#1A2A4A] text-xs font-semibold text-white hover:border-[#1E7BFF] hover:text-[#1E7BFF] transition-colors"
                >
                  Chaînes Sport 4K 50FPS →
                </Link>
                <Link
                  href="/chaines/francaises/"
                  className="px-4 py-2 rounded-lg bg-[#060E1F] border border-[#1A2A4A] text-xs font-semibold text-white hover:border-[#1E7BFF] hover:text-[#1E7BFF] transition-colors"
                >
                  Chaînes Françaises & TNT →
                </Link>
              </div>
            </div>

            {/* High-Converting Commercial Bridge */}
            <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-[#0A1428] via-[#0E1C38] to-[#0A1428] border-2 border-[#1E7BFF] text-center space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1E7BFF]/10 border border-[#1E7BFF]/30 text-xs font-semibold text-[#1E7BFF] mx-auto">
                <Sparkles className="w-3.5 h-3.5" />
                <span>OFFRE RECOMMANDÉE</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Accédez à toutes les chaînes internationales dès maintenant
              </h3>
              <p className="text-xs sm:text-sm text-[#9FB0CC] max-w-xl mx-auto leading-relaxed">
                Optez pour notre formule Atlas Pro 12 mois : l&apos;intégralité des 10 000 chaînes mondiales, les bouquets sportifs 4K et 50 000 films et séries VOD inclus pour 39,99 € l&apos;année.
              </p>
              <div className="pt-2">
                <Link
                  href="/abonnement-atlas-pro-12-mois/"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm sm:text-base font-bold text-white bg-[#1E7BFF] hover:bg-[#2D9CFF] glow-primary transition-all"
                >
                  <span>Commander l&apos;abonnement 12 mois complet (39,99 €)</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <StickyCTA
        title="10 000 chaînes internationales en 4K sans coupure"
        buttonText="Commander (39,99 €)"
        href="/abonnement-atlas-pro-12-mois/"
      />
      <Footer />
    </div>
  );
}
