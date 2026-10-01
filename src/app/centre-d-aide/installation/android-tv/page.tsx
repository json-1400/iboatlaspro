import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { StickyCTA } from "@/components/StickyCTA";
import { ArrowRight, Smartphone } from "lucide-react";

export function generateMetadata(): Metadata {
  return {
    title: "Installer l'IPTV sur Android TV & Box TV : Guide Complet 2025",
    description:
      "Tutoriel d'installation IPTV pour Xiaomi Mi Box, Nvidia Shield, Chromecast Google TV et Box Android. Téléchargez les applications et profitez de la 4K.",
    alternates: {
      canonical: "https://iboatlaspro.com/centre-d-aide/installation/android-tv/",
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
    title: "Boîtiers MAG 254 / 256 / 322",
    href: "/centre-d-aide/installation/mag-box/",
    description: "Configuration du portail serveur et adresse MAC sur décodeurs Infomir MAG.",
    badge: "Stalker",
  },
];

export default function AndroidTvInstallationGuide() {
  const breadcrumbItems = [
    { label: "Centre d'aide", href: "/centre-d-aide/" },
    { label: "Installation", href: "/centre-d-aide/installation/" },
    { label: "Android TV & Box", href: "/centre-d-aide/installation/android-tv/" },
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
              GUIDE ANDROID TV
            </span>
            <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Installer l&apos;IPTV sur{" "}
              <span className="gradient-text-blue">Box Android & Google TV</span>
            </h1>
            <p className="mt-4 text-base text-[#9FB0CC] leading-relaxed">
              Pour Xiaomi Mi Box, Nvidia Shield, Chromecast avec Google TV et
              smartphones / tablettes Android.
            </p>
          </header>

          <div className="space-y-6 text-sm sm:text-base text-white/90 leading-relaxed">
            <div className="p-6 rounded-2xl bg-[#0A1428] border border-[#1A2A4A] space-y-3">
              <h2 className="text-lg font-bold text-white">
                Méthode 1 : Depuis le Google Play Store
              </h2>
              <p className="text-[#9FB0CC] text-xs sm:text-sm">
                Ouvrez le Play Store sur votre Android TV et téléchargez <strong>IPTV Smarters Pro</strong> ou <strong>IBO Player</strong>. Lancez l&apos;application et connectez-vous avec vos identifiants Atlas Pro.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0A1428] border border-[#1A2A4A] space-y-3">
              <h2 className="text-lg font-bold text-white">
                Méthode 2 : Installation de l&apos;APK officiel Atlas Pro ONTV
              </h2>
              <p className="text-[#9FB0CC] text-xs sm:text-sm">
                Téléchargez l&apos;application Downloader et utilisez le code <strong>782914</strong> pour installer directement notre application officielle optimisée pour la télécommande.
              </p>
            </div>

            <div className="my-8 p-8 rounded-2xl bg-[#0A1428] border border-[#1E7BFF] text-center space-y-4">
              <h3 className="text-xl font-bold text-white">
                Profitez d&apos;un flux 4K stable sur votre boîtier Android
              </h3>
              <Link
                href="/abonnement-atlas-pro-12-mois/"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-bold text-white bg-[#1E7BFF] hover:bg-[#2D9CFF] glow-primary transition-all"
              >
                <span>Commander mon abonnement 12 mois</span>
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
