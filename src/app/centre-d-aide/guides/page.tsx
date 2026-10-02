import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SiloHeader } from "@/components/SiloHeader";
import { GUIDES_ARTICLES } from "@/data/guides-articles";
import { BookOpen, ArrowRight, Tv, Wrench, FileText } from "lucide-react";

export function generateMetadata(): Metadata {
  return {
    title: "Guides d'Installation, Tutoriels & Comparatifs IPTV 2026",
    description:
      "Tous les tutoriels de configuration pas à pas : Smart TV Samsung/LG, Fire TV Stick, Box Android, Apple TV, PC Windows, IBO Player Pro, Smarters et comparatifs boîtiers 4K.",
    keywords:
      "guide installation iptv, tutoriel ibo player, configuration smarters pro, installation atlas pro fire stick, comparatif box iptv 2026",
    alternates: {
      canonical: "https://iboatlaspro.com/centre-d-aide/guides/",
    },
  };
}

export default function GuidesHubPage() {
  const breadcrumbItems = [
    { label: "Centre d'aide", href: "/centre-d-aide/" },
    { label: "Guides & Tutoriels", href: "/centre-d-aide/guides/" },
  ];

  const installations = GUIDES_ARTICLES.filter((g) => g.category === "installation");
  const tutorials = GUIDES_ARTICLES.filter((g) => g.category === "tutoriel");
  const dossiers = GUIDES_ARTICLES.filter((g) => g.category === "dossier");

  return (
    <div className="min-h-screen flex flex-col bg-[#040A17] text-white">
      <Navbar />

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbItems} />
        </div>

        <SiloHeader
          badge="TUTORIELS & CONFIGURATION"
          titlePrefix="Guides d'Installation &"
          titleGradient="Tutoriels Applications"
          description="Retrouvez toutes les instructions pas à pas pour configurer votre matériel (Smart TV, Fire Stick, Android) et maîtriser vos lecteurs IPTV en qualité 4K."
          primaryCtaText="Découvrir nos offres"
          primaryCtaHref="/abonnement-atlas-pro-12-mois/"
          secondaryCtaText="Centre d'aide"
          secondaryCtaHref="/centre-d-aide/"
        />

        {/* Section 1: Guides d'Installation par Appareil */}
        <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-[#1E7BFF]/20 text-[#1E7BFF] flex items-center justify-center">
              <Tv className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">
                Guides d&apos;Installation Officiels
              </h2>
              <p className="text-xs sm:text-sm text-[#9FB0CC]">
                Tutoriels vérifiés pour Amazon Fire TV Stick et Box Android TV.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {installations.map((item) => (
              <Link
                key={item.slug}
                href={`/centre-d-aide/guides/${item.slug}/`}
                className="p-6 rounded-2xl bg-[#0A1428] border border-[#1A2A4A] hover:border-[#1E7BFF] transition-all group flex flex-col justify-between space-y-4"
              >
                <div>
                  <span className="text-[10px] font-bold text-[#1E7BFF] bg-[#1E7BFF]/10 px-2.5 py-1 rounded-full border border-[#1E7BFF]/30">
                    {item.badge}
                  </span>
                  <h3 className="text-lg font-bold text-white mt-3 group-hover:text-[#1E7BFF] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#9FB0CC] mt-2 line-clamp-3 leading-relaxed">
                    {item.intro}
                  </p>
                </div>

                <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1E7BFF] pt-2">
                  <span>Voir le guide</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Section 2: Tutoriels Applications */}
        <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-[#1A2A4A]/50">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-[#22C55E]/20 text-[#22C55E] flex items-center justify-center">
              <Wrench className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">
                Tutoriels de Configuration d&apos;Applications
              </h2>
              <p className="text-xs sm:text-sm text-[#9FB0CC]">
                Paramétrage pas à pas d&apos;IBO Player Pro, IPTV Smarters et injection d&apos;identifiants Xtream Codes.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tutorials.map((item) => (
              <Link
                key={item.slug}
                href={`/centre-d-aide/guides/${item.slug}/`}
                className="p-8 rounded-2xl bg-[#0A1428] border border-[#1A2A4A] hover:border-[#22C55E] transition-all group flex flex-col justify-between space-y-4"
              >
                <div>
                  <span className="text-[10px] font-bold text-[#22C55E] bg-[#22C55E]/10 px-2.5 py-1 rounded-full border border-[#22C55E]/30">
                    {item.badge}
                  </span>
                  <h3 className="text-xl font-bold text-white mt-3 group-hover:text-[#22C55E] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#9FB0CC] mt-2 leading-relaxed">
                    {item.intro}
                  </p>
                </div>

                <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#22C55E] pt-2">
                  <span>Consulter le tutoriel pas à pas</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Section 3: Dossiers & Comparatifs */}
        <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-[#1A2A4A]/50">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-[#8B5CF6]/20 text-[#8B5CF6] flex items-center justify-center">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">
                Dossiers d&apos;Experts & Comparatifs Matériel
              </h2>
              <p className="text-xs sm:text-sm text-[#9FB0CC]">
                Analyses complètes sur la légalité, les technologies de transmission et les meilleures box TV du marché.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {dossiers.map((item) => (
              <Link
                key={item.slug}
                href={`/centre-d-aide/guides/${item.slug}/`}
                className="p-8 rounded-2xl bg-[#0A1428] border border-[#1A2A4A] hover:border-[#8B5CF6] transition-all group flex flex-col justify-between space-y-4"
              >
                <div>
                  <span className="text-[10px] font-bold text-[#8B5CF6] bg-[#8B5CF6]/10 px-2.5 py-1 rounded-full border border-[#8B5CF6]/30">
                    {item.badge}
                  </span>
                  <h3 className="text-xl font-bold text-white mt-3 group-hover:text-[#8B5CF6] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#9FB0CC] mt-2 leading-relaxed">
                    {item.intro}
                  </p>
                </div>

                <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#8B5CF6] pt-2">
                  <span>Lire l&apos;analyse complète</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
