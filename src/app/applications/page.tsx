import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SiloHeader } from "@/components/SiloHeader";
import { StickyCTA } from "@/components/StickyCTA";
import { BookOpen, ArrowRight, ShieldCheck, Smartphone, Tv } from "lucide-react";

export function generateMetadata(): Metadata {
  return {
    title: "Applications Compatibles & Guides d'Installation : Atlas Pro, IBO, Smarters",
    description:
      "Guides d'installation et codes Downloader vérifiés pour Atlas Pro ONTV, Atlas Pro IBO et IPTV Smarters Pro sur Fire TV Stick, Android TV et Smart TV.",
    alternates: {
      canonical: "https://iboatlaspro.com/applications/",
    },
  };
}

export default function ApplicationsHubPage() {
  const breadcrumbItems = [
    { label: "Applications & Guides", href: "/applications/" },
  ];

  const apps = [
    {
      title: "Atlas Pro ONTV",
      version: "v3.2.1",
      platform: "Android TV, Fire Stick, Box Android",
      downloaderCode: "782914",
      href: "/applications/atlas-pro-ontv/",
      badge: "RECOMMANDÉ POUR ATLAS PRO",
      description:
        "L'application officielle pour votre abonnement Atlas Pro. Interface ergonomique, zapping fluide et EPG complet.",
    },
    {
      title: "Atlas Pro IBO",
      version: "v2.8.0",
      platform: "Smart TV, Android TV, Fire Stick",
      downloaderCode: "492015",
      href: "/applications/atlas-pro-ibo/",
      badge: "OPTIMISÉ SMART TV",
      description:
        "La déclinaison IBO dédiée aux abonnés Atlas Pro avec chargement instantané des playlists et design moderne.",
    },
    {
      title: "Atlas Pro Max",
      version: "v5.0.1",
      platform: "Android TV, Fire Stick, Box, Mobile",
      downloaderCode: "614920",
      href: "/applications/atlas-pro-max/",
      badge: "NOUVELLE VERSION 2026",
      description:
        "Lecteur nouvelle génération avec décodage 4K 50 FPS ultra-rapide, buffer adaptatif et compatibilité Android 7 à 14+.",
    },
    {
      title: "IPTV Smarters Pro",
      version: "v4.0.2",
      platform: "Android, iOS, Fire Stick, Windows, Mac",
      downloaderCode: "820147",
      href: "/applications/iptv-smarters-pro/",
      badge: "MULTI-PLATEFORME",
      description:
        "Le lecteur universel compatible avec vos identifiants Xtream Codes. Support multi-écrans et contrôle parental.",
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
          badge="GUIDES D'INSTALLATION & CONFIGURATION"
          titlePrefix="Applications IPTV &"
          titleGradient="Guides d'Accès"
          titleSuffix="Officiels"
          description="Consultez nos tutoriels de configuration étape par étape et codes Downloader pour vos téléviseurs et boîtiers connectés. Aucun téléchargement direct de fichier n'est requis."
          primaryCtaText="Voir les codes Downloader"
          primaryCtaHref="#apps-grid"
          secondaryCtaText="Centre de tutoriels"
          secondaryCtaHref="/centre-d-aide/installation/"
        />

        {/* Disclaimer non-hébergement */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 mb-4">
          <div className="p-4 sm:p-5 rounded-2xl bg-[#0A1428] border border-[#1A2A4A] flex items-start gap-3.5 text-xs sm:text-sm text-[#9FB0CC]">
            <ShieldCheck className="w-5 h-5 text-[#22C55E] flex-shrink-0 mt-0.5" />
            <p>
              <strong className="text-white">Note d&apos;information :</strong> Ce site ne propose aucun hébergement ni distribution directe de fichiers exécutables (.apk). Nous fournissons exclusivement des guides d&apos;assistance technique et des codes d&apos;accès compatibles avec l&apos;application officielle Downloader (AFTVnews) et les boutiques d&apos;applications certifiées.
            </p>
          </div>
        </div>

        <section id="apps-grid" className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {apps.map((app) => (
              <div
                key={app.title}
                className="p-8 rounded-2xl bg-[#0A1428] border border-[#1A2A4A] hover:border-[#1E7BFF] transition-all flex flex-col justify-between space-y-6"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-2.5 py-1 rounded text-[10px] font-bold text-white bg-[#1E7BFF]/20 text-[#1E7BFF] border border-[#1E7BFF]/40">
                      {app.badge}
                    </span>
                    <span className="text-xs text-[#9FB0CC] font-mono">
                      {app.version}
                    </span>
                  </div>

                  <h2 className="text-2xl font-bold text-white tracking-tight">
                    {app.title}
                  </h2>
                  <p className="text-xs text-[#9FB0CC] mt-1 font-medium">
                    {app.platform}
                  </p>

                  <p className="text-xs sm:text-sm text-[#9FB0CC] mt-4 leading-relaxed">
                    {app.description}
                  </p>

                  <div className="mt-5 p-3.5 rounded-xl bg-[#060E1F] border border-[#1A2A4A]">
                    <div className="text-[11px] text-[#9FB0CC] font-medium">
                      Code Downloader Fire Stick :
                    </div>
                    <div className="text-lg font-mono font-bold text-[#22C55E]">
                      {app.downloaderCode}
                    </div>
                  </div>
                </div>

                <Link
                  href={app.href}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs sm:text-sm font-bold text-white bg-[#1E7BFF] hover:bg-[#2D9CFF] glow-primary transition-all"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Consulter le guide d&apos;installation</span>
                </Link>
              </div>
            ))}
          </div>
        </section>
      </main>

      <StickyCTA
        title="Besoin d'un abonnement pour votre application ?"
        buttonText="Voir nos offres"
        href="/abonnement-atlas-pro-12-mois/"
      />
      <Footer />
    </div>
  );
}
