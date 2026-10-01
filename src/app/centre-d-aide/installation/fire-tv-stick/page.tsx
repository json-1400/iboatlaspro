import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { StickyCTA } from "@/components/StickyCTA";
import { ArrowRight, Monitor } from "lucide-react";

export function generateMetadata(): Metadata {
  return {
    title: "Installer l'IPTV sur Amazon Fire TV Stick : Tutoriel Rapide avec Downloader",
    description:
      "Guide complet pour installer Atlas Pro ONTV ou IPTV Smarters sur Amazon Fire TV Stick 4K avec l'application Downloader. Codes et étapes pas à pas.",
    alternates: {
      canonical: "https://iboatlaspro.com/centre-d-aide/installation/fire-tv-stick/",
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

export default function FireStickInstallationGuide() {
  const breadcrumbItems = [
    { label: "Centre d'aide", href: "/centre-d-aide/" },
    { label: "Installation", href: "/centre-d-aide/installation/" },
    { label: "Amazon Fire TV Stick", href: "/centre-d-aide/installation/fire-tv-stick/" },
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
              TUTORIEL FIRE TV STICK
            </span>
            <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Installer l&apos;IPTV sur{" "}
              <span className="gradient-text-blue">Amazon Fire TV Stick 4K</span>
            </h1>
            <p className="mt-4 text-base text-[#9FB0CC] leading-relaxed">
              Le Fire TV Stick d&apos;Amazon est l&apos;un des boîtiers les plus
              performants pour l&apos;IPTV. Suivez notre méthode avec Downloader.
            </p>
          </header>

          <div className="space-y-6 text-sm sm:text-base text-white/90 leading-relaxed">
            <div className="p-6 rounded-2xl bg-[#0A1428] border border-[#1A2A4A] space-y-3">
              <h2 className="text-lg font-bold text-white">
                Étape 1 : Autoriser les applications inconnues
              </h2>
              <p className="text-[#9FB0CC] text-xs sm:text-sm">
                Allez dans <em>Paramètres &gt; Ma Fire TV &gt; Options pour les développeurs</em>, puis activez <strong>Applications de sources inconnues</strong>.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0A1428] border border-[#1A2A4A] space-y-3">
              <h2 className="text-lg font-bold text-white">
                Étape 2 : Installer Downloader et entrer le code
              </h2>
              <p className="text-[#9FB0CC] text-xs sm:text-sm">
                Installez l&apos;application &laquo; Downloader &raquo; depuis l&apos;Appstore Amazon, puis saisissez le code officiel <strong>782914</strong> pour Atlas Pro ONTV ou <strong>820147</strong> pour IPTV Smarters Pro.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0A1428] border border-[#1A2A4A] space-y-3">
              <h2 className="text-lg font-bold text-white">
                Étape 3 : Renseigner vos identifiants
              </h2>
              <p className="text-[#9FB0CC] text-xs sm:text-sm">
                Lancez l&apos;application installée et entrez vos identifiants Atlas Pro envoyés après votre commande. Vos chaînes se synchronisent en quelques secondes.
              </p>
            </div>

            <div className="my-8 p-8 rounded-2xl bg-[#0A1428] border border-[#1E7BFF] text-center space-y-4">
              <h3 className="text-xl font-bold text-white">
                Prêt à équiper votre Fire TV Stick ?
              </h3>
              <Link
                href="/abonnement-atlas-pro-12-mois/"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-bold text-white bg-[#1E7BFF] hover:bg-[#2D9CFF] glow-primary transition-all"
              >
                <span>Commander l&apos;abonnement 12 mois (39,99 €)</span>
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

      <StickyCTA
        title="Abonnement Fire Stick 4K sans coupure"
        buttonText="Commander"
        href="/abonnement-atlas-pro-12-mois/"
      />
      <Footer />
    </div>
  );
}
