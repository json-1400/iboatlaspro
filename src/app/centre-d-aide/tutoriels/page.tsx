import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SiloHeader } from "@/components/SiloHeader";
import { StickyCTA } from "@/components/StickyCTA";
import { BookOpen, ArrowRight, Play, Settings } from "lucide-react";

export function generateMetadata(): Metadata {
  return {
    title: "Tutoriels Applications IPTV : Configuration IBO Player, Smarters Pro, M3U",
    description:
      "Tous les tutoriels pas à pas pour configurer vos applications de streaming : IBO Player Pro, IPTV Smarters, ajout de playlist M3U et connexion Xtream Codes.",
    alternates: {
      canonical: "https://iboatlaspro.com/centre-d-aide/tutoriels/",
    },
  };
}

export default function TutorielsHubPage() {
  const breadcrumbItems = [
    { label: "Centre d'aide", href: "/centre-d-aide/" },
    { label: "Tutoriels Applications", href: "/centre-d-aide/tutoriels/" },
  ];

  const tutorials = [
    {
      title: "Comment Configurer IBO Player Pro de A à Z",
      desc: "Guide complet : ajout de liste M3U, identifiants Xtream Codes, gestion des favoris et sous-titres.",
      href: "/centre-d-aide/tutoriels/configurer-ibo-player/",
      time: "5 min de lecture",
    },
    {
      title: "Comment Configurer IPTV Smarters Pro",
      desc: "Paramétrage pas à pas : connexion API Xtream Codes, activation du mode multi-écrans et EPG.",
      href: "/centre-d-aide/tutoriels/configurer-iptv-smarters/",
      time: "4 min de lecture",
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
          badge="GUIDES PRATIQUES"
          titlePrefix="Tutoriels de"
          titleGradient="Configuration d'Applications"
          description="Apprenez à maîtriser vos applications IPTV favorites et à tirer le meilleur parti de votre abonnement 4K."
          primaryCtaText="Découvrir nos offres"
          primaryCtaHref="/abonnement-atlas-pro/12-mois/"
        />

        <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tutorials.map((tuto) => (
              <Link
                key={tuto.title}
                href={tuto.href}
                className="p-8 rounded-2xl bg-[#0A1428] border border-[#1A2A4A] hover:border-[#1E7BFF] transition-all group flex flex-col justify-between space-y-4"
              >
                <div>
                  <span className="text-[10px] font-bold text-[#9FB0CC] bg-[#060E1F] px-2.5 py-1 rounded-full border border-[#1A2A4A]">
                    {tuto.time}
                  </span>
                  <h2 className="text-xl font-bold text-white mt-3 group-hover:text-[#1E7BFF] transition-colors">
                    {tuto.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-[#9FB0CC] mt-2 leading-relaxed">
                    {tuto.desc}
                  </p>
                </div>

                <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#1E7BFF] pt-2">
                  <span>Lire le tutoriel</span>
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
