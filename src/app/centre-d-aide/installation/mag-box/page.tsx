import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { StickyCTA } from "@/components/StickyCTA";
import { Box, ArrowRight } from "lucide-react";

export function generateMetadata(): Metadata {
  return {
    title: "Configurer l'IPTV sur Boîtier MAG (254, 322, 520) : Portail STB",
    description:
      "Tutoriel de configuration de l'URL de portail IPTV pour décodeurs Infomir MAG 250, 254, 322, 420, 520. Activation via adresse MAC sous 15 minutes.",
    alternates: {
      canonical: "https://iboatlaspro.com/centre-d-aide/installation/mag-box/",
    },
  };
}

import { RelatedGuides } from "@/components/RelatedGuides";

const relatedInstallationGuides = [
  {
    title: "Smart TV Samsung & LG",
    href: "/centre-d-aide/installation/smart-tv/",
    description: "Guide complet pour installer IBO Player Pro ou IPTV Smarters sur TV connectée.",
    badge: "Smart TV",
  },
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
];

export default function MagBoxInstallationGuide() {
  const breadcrumbItems = [
    { label: "Centre d'aide", href: "/centre-d-aide/" },
    { label: "Installation", href: "/centre-d-aide/installation/" },
    { label: "Boîtiers MAG", href: "/centre-d-aide/installation/mag-box/" },
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
              GUIDE MAG BOX
            </span>
            <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Configurer l&apos;IPTV sur{" "}
              <span className="gradient-text-blue">Boîtier MAG Infomir</span>
            </h1>
            <p className="mt-4 text-base text-[#9FB0CC] leading-relaxed">
              Pour MAG 250, 254, 256, 322, 420 et 520. L&apos;activation se fait
              directement via l&apos;adresse MAC de votre appareil.
            </p>
          </header>

          <div className="space-y-6 text-sm sm:text-base text-white/90 leading-relaxed">
            <div className="p-6 rounded-2xl bg-[#0A1428] border border-[#1A2A4A] space-y-3">
              <h2 className="text-lg font-bold text-white">
                1. Trouver votre adresse MAC
              </h2>
              <p className="text-[#9FB0CC] text-xs sm:text-sm">
                L&apos;adresse MAC de votre boîtier MAG commence par <strong>00:1A:79:...</strong> et se trouve sous votre boîtier ou dans <em>Settings &gt; System info</em>.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0A1428] border border-[#1A2A4A] space-y-3">
              <h2 className="text-lg font-bold text-white">
                2. Configurer le portail Atlas Pro
              </h2>
              <ol className="list-decimal list-inside space-y-1 text-xs sm:text-sm text-[#9FB0CC]">
                <li>Allez dans <em>Settings &gt; System settings &gt; Servers &gt; Portals</em>.</li>
                <li>Renseignez le nom du portail : &laquo; Atlas Pro &raquo;.</li>
                <li>Saisissez l&apos;URL du portail transmise lors de votre commande.</li>
                <li>Sauvegardez et redémarrez votre boîtier MAG.</li>
              </ol>
            </div>

            <div className="my-8 p-8 rounded-2xl bg-[#0A1428] border border-[#1E7BFF] text-center space-y-4">
              <h3 className="text-xl font-bold text-white">
                Activez votre décodeur MAG dès maintenant
              </h3>
              <Link
                href="/abonnement-atlas-pro-12-mois/"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-bold text-white bg-[#1E7BFF] hover:bg-[#2D9CFF] glow-primary transition-all"
              >
                <span>Commander un abonnement MAG 12 mois</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <RelatedGuides
            title="Autres Tutoriels d'Installation"
            subtitle="Découvrez comment configurer votre abonnement sur vos autres téléviseurs et boîtiers."
            guides={relatedInstallationGuides}
          />
        </article>
      </main>

      <Footer />
    </div>
  );
}
