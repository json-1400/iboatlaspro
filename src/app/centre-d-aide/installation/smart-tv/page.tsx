import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { StickyCTA } from "@/components/StickyCTA";
import { Tv, CheckCircle2, ArrowRight } from "lucide-react";

export function generateMetadata(): Metadata {
  return {
    title: "Comment Installer l'IPTV sur Smart TV Samsung & LG : Guide Complet 2025",
    description:
      "Tutoriel détaillé pour installer votre abonnement IPTV sur Smart TV Samsung et LG. Téléchargez IBO Player ou Smarters et profitez du flux 4K sans coupure.",
    alternates: {
      canonical: "https://iboatlaspro.com/centre-d-aide/installation/smart-tv/",
    },
  };
}

import { RelatedGuides } from "@/components/RelatedGuides";

const relatedInstallationGuides = [
  {
    title: "Amazon Fire TV Stick 4K",
    href: "/centre-d-aide/installation/fire-tv-stick/",
    description: "Guide étape par étape pour installer Atlas Pro ONTV et Downloader sur Fire TV Stick.",
    badge: "Populaire",
  },
  {
    title: "Box Android TV & Shield",
    href: "/centre-d-aide/installation/android-tv/",
    description: "Installation rapide sur Nvidia Shield, Xiaomi Mi Box et smart TV Android.",
    badge: "Android",
  },
  {
    title: "Boîtiers MAG 254 / 256 / 322",
    href: "/centre-d-aide/installation/mag-box/",
    description: "Configuration du portail serveur et adresse MAC sur décodeurs Infomir MAG.",
    badge: "Stalker",
  },
];

export default function SmartTvInstallationGuide() {
  const breadcrumbItems = [
    { label: "Centre d'aide", href: "/centre-d-aide/" },
    { label: "Installation", href: "/centre-d-aide/installation/" },
    { label: "Smart TV Samsung & LG", href: "/centre-d-aide/installation/smart-tv/" },
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
              GUIDE OFFICIEL
            </span>
            <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Comment installer votre{" "}
              <span className="gradient-text-blue">Abonnement IPTV sur Smart TV</span> ?
            </h1>
            <p className="mt-4 text-base text-[#9FB0CC] leading-relaxed">
              Profitez de vos chaînes en direct et films 4K sans aucun décodeur
              externe grâce aux meilleures applications pour téléviseurs connectés.
            </p>
          </header>

          <div className="space-y-8 text-white/90 text-sm sm:text-base leading-relaxed">
            <div className="p-6 rounded-2xl bg-[#0A1428] border border-[#1A2A4A] space-y-4">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <Tv className="w-5 h-5 text-[#1E7BFF]" />
                1. Choisir la meilleure application pour votre téléviseur
              </h2>
              <p className="text-[#9FB0CC]">
                Pour les Smart TV Samsung (système Tizen) et LG (webOS), nous
                recommandons en priorité l&apos;application <strong>IBO Player Pro</strong> pour
                sa rapidité, ou <strong>IPTV Smarters Pro</strong> pour son affichage multi-écrans.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0A1428] border border-[#1A2A4A] space-y-4">
              <h2 className="text-xl font-bold text-white">
                2. Installer IBO Player depuis l&apos;App Store de votre téléviseur
              </h2>
              <ul className="space-y-2 text-[#9FB0CC] list-disc list-inside">
                <li>Appuyez sur la touche &laquo; Home &raquo; de votre télécommande.</li>
                <li>Accédez au store d&apos;applications (&laquo; Apps &raquo; sur Samsung ou &laquo; Content Store &raquo; sur LG).</li>
                <li>Recherchez &laquo; IBO Player &raquo; et cliquez sur &laquo; Installer &raquo;.</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-[#0A1428] border border-[#1A2A4A] space-y-4">
              <h2 className="text-xl font-bold text-white">
                3. Configurer vos codes Atlas Pro
              </h2>
              <p className="text-[#9FB0CC]">
                Une fois l&apos;application ouverte, notez votre <strong>Adresse MAC</strong> et
                votre <strong>Device Key</strong>. Transmettez-les à notre support WhatsApp ou injectez
                vos identifiants Xtream Codes fournis lors de votre commande.
              </p>
            </div>

            {/* In-content Monetization Bridge */}
            <div className="my-8 p-8 rounded-2xl bg-gradient-to-r from-[#0A1428] to-[#0E1C38] border border-[#1E7BFF] text-center space-y-4">
              <h3 className="text-xl font-bold text-white">
                Vous cherchez le meilleur abonnement IPTV 12 mois pour votre Smart TV ?
              </h3>
              <p className="text-xs sm:text-sm text-[#9FB0CC] max-w-xl mx-auto">
                Notre formule Atlas Pro 12 mois est optimisée pour les écrans 4K
                Samsung et LG : zap instantané, 50 FPS et zéro coupure.
              </p>
              <Link
                href="/abonnement-atlas-pro/12-mois/"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-bold text-white bg-[#1E7BFF] hover:bg-[#2D9CFF] glow-primary transition-all"
              >
                <span>Commander l&apos;abonnement 12 mois Smart TV (49,99 €)</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <RelatedGuides
            title="Autres Tutoriels d'Installation"
            subtitle="Vous utilisez un autre appareil ? Retrouvez nos tutoriels d'installation étape par étape."
            guides={relatedInstallationGuides}
          />
        </article>
      </main>

      <StickyCTA
        title="Abonnement IPTV 12 mois pour Smart TV"
        buttonText="Commander l'accès"
        href="/abonnement-atlas-pro/12-mois/"
      />
      <Footer />
    </div>
  );
}
