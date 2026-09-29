import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SiloHeader } from "@/components/SiloHeader";
import { StickyCTA } from "@/components/StickyCTA";
import { Trophy, Film, Globe, ArrowRight, Tv, Radio } from "lucide-react";

export function generateMetadata(): Metadata {
  return {
    title: "Liste des Chaînes IPTV 2025 : +10 000 Chaînes Directes & VOD 4K",
    description:
      "Explorez le catalogue complet des chaînes IPTV iboatlaspro : sport, cinéma, TNT française, chaînes belges, suisses et internationales en qualité 4K / Full HD.",
    alternates: {
      canonical: "https://iboatlaspro.com/chaines/",
    },
  };
}

export default function ChainesHubPage() {
  const breadcrumbItems = [
    { label: "Catalogue Chaînes & VOD", href: "/chaines/" },
  ];

  const categories = [
    {
      title: "Chaînes Sport Direct",
      desc: "Tous les championnats européens, sports mécaniques, combats et grands événements mondiaux en 4K.",
      count: "+ 500 chaînes sportives",
      href: "/chaines/sports/",
      icon: Trophy,
    },
    {
      title: "Chaînes TV Françaises",
      desc: "Toutes les chaînes TNT, bouquets premium cinéma, jeunesse, documentaires en qualité 4K / FHD.",
      count: "+ 1 200 chaînes FR",
      href: "/chaines/francaises/",
      icon: Tv,
    },
    {
      title: "VOD Films & Séries",
      desc: "Plus de 50 000 films et séries récents avec pistes audio multilingues et sous-titres FR.",
      count: "+ 50 000 titres",
      href: "/#vod",
      icon: Film,
    },
    {
      title: "Bouquets Internationaux",
      desc: "Chaînes de plus de 50 pays : Belgique, Suisse, Espagne, Italie, Portugal, UK, USA, Maghreb, etc.",
      count: "+ 10 000 chaînes mondiales",
      href: "/chaines/internationales/",
      icon: Globe,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#040A17] text-white">
      <Navbar />

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbItems} />
        </div>

        <SiloHeader
          badge="BOUQUET COMPLET 4K / FHD"
          titlePrefix="Plus de"
          titleGradient="10 000 Chaînes"
          titleSuffix="en Direct"
          description="Accédez au catalogue le plus vaste et complet du web. Toutes vos chaînes préférées de sport, de cinéma et d'actualités avec un flux sans coupure 24/7."
          primaryCtaText="Tester nos chaînes"
          primaryCtaHref="/abonnement-atlas-pro/essai-gratuit/"
          secondaryCtaText="Voir les offres"
          secondaryCtaHref="/abonnement-atlas-pro/12-mois/"
        />

        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((cat) => {
              const IconComp = cat.icon;
              return (
                <Link
                  key={cat.title}
                  href={cat.href}
                  className="p-8 rounded-2xl bg-[#0A1428] border border-[#1A2A4A] hover:border-[#1E7BFF] transition-all group flex flex-col justify-between space-y-4"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-[#1E7BFF]/20 text-[#1E7BFF] flex items-center justify-center group-hover:scale-105 transition-transform">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-bold text-[#22C55E] bg-[#22C55E]/10 px-3 py-1 rounded-full border border-[#22C55E]/20">
                        {cat.count}
                      </span>
                    </div>

                    <h2 className="text-xl font-bold text-white group-hover:text-[#1E7BFF] transition-colors">
                      {cat.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-[#9FB0CC] mt-2 leading-relaxed">
                      {cat.desc}
                    </p>
                  </div>

                  <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#1E7BFF] pt-2">
                    <span>Explorer cette catégorie</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      </main>

      <StickyCTA
        title="Profitez de toutes ces chaînes en 4K"
        buttonText="Abonnement 12 mois (3,33 €/mois)"
        href="/abonnement-atlas-pro/12-mois/"
      />
      <Footer />
    </div>
  );
}
