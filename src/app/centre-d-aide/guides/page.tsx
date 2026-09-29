import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SiloHeader } from "@/components/SiloHeader";
import { StickyCTA } from "@/components/StickyCTA";
import { HelpCircle, ArrowRight, ShieldCheck } from "lucide-react";

export function generateMetadata(): Metadata {
  return {
    title: "Guides & Comparatifs IPTV 2025 : Légalité, Boîtiers et Conseils",
    description:
      "Articles de fond et analyses d'experts sur l'IPTV en France : législation, choix du matériel (Apple TV, Fire Stick, Shield TV), et astuces pour un débit 4K optimal.",
    alternates: {
      canonical: "https://iboatlaspro.com/centre-d-aide/guides/",
    },
  };
}

export default function GuidesHubPage() {
  const breadcrumbItems = [
    { label: "Centre d'aide", href: "/centre-d-aide/" },
    { label: "Guides & Comparatifs", href: "/centre-d-aide/guides/" },
  ];

  const articles = [
    {
      title: "L'Abonnement IPTV est-il Légal ou Illégal en France ?",
      desc: "Analyse juridique complète de la technologie IPTV, des lecteurs multimédias et des responsabilités des utilisateurs.",
      href: "/centre-d-aide/guides/iptv-legal-ou-illegal/",
      badge: "LÉGISLATION & DROIT",
    },
    {
      title: "Comparatif des Meilleures Box TV pour l'IPTV en 2025",
      desc: "Nvidia Shield Pro vs Apple TV 4K vs Amazon Fire TV Stick 4K Max vs Xiaomi Box S : laquelle choisir ?",
      href: "/centre-d-aide/guides/comparatif-box-streaming/",
      badge: "COMPARATIF MATÉRIEL",
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
          badge="ANALYSES & DOSSIERS"
          titlePrefix="Guides &"
          titleGradient="Comparatifs IPTV"
          description="Des dossiers clairs et impartiaux pour vous aider à comprendre la technologie IPTV et faire les meilleurs choix d'équipements."
          primaryCtaText="Découvrir nos abonnements"
          primaryCtaHref="/abonnement-atlas-pro/12-mois/"
        />

        <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {articles.map((art) => (
              <Link
                key={art.title}
                href={art.href}
                className="p-8 rounded-2xl bg-[#0A1428] border border-[#1A2A4A] hover:border-[#1E7BFF] transition-all group flex flex-col justify-between space-y-4"
              >
                <div>
                  <span className="text-[10px] font-bold text-[#1E7BFF] bg-[#1E7BFF]/10 px-2.5 py-1 rounded-full border border-[#1E7BFF]/30">
                    {art.badge}
                  </span>
                  <h2 className="text-xl font-bold text-white mt-4 group-hover:text-[#1E7BFF] transition-colors">
                    {art.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-[#9FB0CC] mt-2 leading-relaxed">
                    {art.desc}
                  </p>
                </div>

                <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#1E7BFF] pt-2">
                  <span>Lire le dossier</span>
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
