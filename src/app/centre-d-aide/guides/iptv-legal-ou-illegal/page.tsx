import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ShieldCheck, ArrowRight, CheckCircle2 } from "lucide-react";

export function generateMetadata(): Metadata {
  return {
    title: "Abonnement IPTV Légal ou Illégal en France ? Le Point Juridique 2025",
    description:
      "L'IPTV est-elle légale en France ? Décryptage complet du cadre légal, de la technologie IPTV, des applications autorisées et des précautions à prendre.",
    alternates: {
      canonical: "https://iboatlaspro.com/centre-d-aide/guides/iptv-legal-ou-illegal/",
    },
  };
}

import { RelatedGuides } from "@/components/RelatedGuides";

const relatedGeneralGuides = [
  {
    title: "Comparatif des Meilleures Box TV",
    href: "/centre-d-aide/guides/comparatif-box-streaming/",
    description: "Nvidia Shield, Fire TV Stick 4K ou Apple TV : quelle est la meilleure box pour un streaming sans saccade ?",
    badge: "Matériel",
  },
  {
    title: "Comment Installer sur Smart TV",
    href: "/centre-d-aide/installation/smart-tv/",
    description: "Guide complet d'installation sans boîtier sur téléviseurs Samsung et LG.",
    badge: "Installation",
  },
];

export default function IptvLegalPage() {
  const breadcrumbItems = [
    { label: "Centre d'aide", href: "/centre-d-aide/" },
    { label: "Guides", href: "/centre-d-aide/guides/" },
    { label: "IPTV Légal ou Illégal", href: "/centre-d-aide/guides/iptv-legal-ou-illegal/" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#040A17] text-white">
      <Navbar />

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbItems} />
        </div>

        <article className="py-12 md:py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="text-center mb-12">
            <span className="px-3.5 py-1.5 rounded-full text-xs font-bold text-white bg-[#0A1428] border border-[#1E7BFF]">
              DOSSIER JURIDIQUE
            </span>
            <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Abonnement IPTV : Est-ce{" "}
              <span className="gradient-text-blue">Légal ou Illégal</span> en France ?
            </h1>
            <p className="mt-4 text-base text-[#9FB0CC] leading-relaxed">
              La technologie de diffusion télévisuelle sur IP suscite de
              nombreuses interrogations. Faisons le point clair et factuel sur
              la législation en vigueur.
            </p>
          </header>

          <div className="space-y-6 text-sm sm:text-base text-white/90 leading-relaxed">
            <div className="p-6 rounded-2xl bg-[#0A1428] border border-[#1A2A4A] space-y-3">
              <h2 className="text-lg font-bold text-white">
                1. La technologie IPTV est 100% légale
              </h2>
              <p className="text-[#9FB0CC] text-xs sm:text-sm">
                L&apos;IPTV (Internet Protocol Television) est un protocole de transmission numérique standardisé utilisé mondialement par les plus grands opérateurs télécoms (Orange, Free, SFR, Bouygues Telecom) pour diffuser leurs box TV. La technologie elle-même est parfaitement légale.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0A1428] border border-[#1A2A4A] space-y-3">
              <h2 className="text-lg font-bold text-white">
                2. Les applications de lecture (IBO Player, Smarters Pro)
              </h2>
              <p className="text-[#9FB0CC] text-xs sm:text-sm">
                Les applications comme IBO Player, IPTV Smarters Pro, Smart IPTV ou TiviMate sont de simples lecteurs multimédias vides de tout contenu lors de leur téléchargement. Elles sont validées et distribuées légalement sur Google Play, Apple App Store, Samsung Apps et LG Content Store.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0A1428] border border-[#1A2A4A] space-y-3">
              <h2 className="text-lg font-bold text-white">
                3. Pourquoi choisir une infrastructure professionnelle ?
              </h2>
              <p className="text-[#9FB0CC] text-xs sm:text-sm">
                Choisir un service avec serveurs sécurisés, protection de vos données personnelles et chiffrement de flux est indispensable pour assurer votre tranquillité d&apos;esprit au quotidien.
              </p>
            </div>

            <div className="my-8 p-8 rounded-2xl bg-[#0A1428] border border-[#1E7BFF] text-center space-y-4">
              <h3 className="text-xl font-bold text-white">
                Profitez d&apos;une expérience IPTV sereine et haute définition
              </h3>
              <Link
                href="/abonnement-atlas-pro/12-mois/"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-bold text-white bg-[#1E7BFF] hover:bg-[#2D9CFF] glow-primary transition-all"
              >
                <span>Découvrir l&apos;offre Atlas Pro 12 Mois</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <RelatedGuides
            title="Guides & Dossiers Recommandés"
            subtitle="Approfondissez vos connaissances sur les équipements et le fonctionnement de l'IPTV."
            guides={relatedGeneralGuides}
          />
        </article>
      </main>

      <Footer />
    </div>
  );
}
