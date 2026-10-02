import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { StickyCTA } from "@/components/StickyCTA";
import { constructMetadata } from "@/lib/seo";
import {
  CheckCircle2,
  XCircle,
  Tv,
  Cpu,
  Layers,
  Sparkles,
  HelpCircle,
  ArrowRight,
  BookOpen,
  Zap,
} from "lucide-react";

export function generateMetadata(): Metadata {
  return constructMetadata({
    title: "Application Atlas Pro ONTV : Fiche Technique, Versions & Compatibilité (2026)",
    description:
      "Fiche technique complète de l'application officielle Atlas Pro ONTV pour Fire TV Stick et boîtiers Android : présentation, versions stables, avantages, limites et compatibilité.",
    path: "/applications/atlas-pro-ontv/",
  });
}

export default function AtlasProOntvPage() {
  const breadcrumbItems = [
    { label: "Applications", href: "/applications/" },
    { label: "Atlas Pro ONTV", href: "/applications/atlas-pro-ontv/" },
  ];

  const versionHistory = [
    {
      version: "v4.0.2 Stable (Dernière version 2026)",
      date: "Février 2026",
      notes:
        "Nouvelle interface moderne et épurée, navigation plus fluide, stabilité accrue avec reconnexion automatique au serveur, correction de la synchronisation EPG et streaming optimisé HD/4K pour le direct et la VOD.",
      isCurrent: true,
    },
    {
      version: "v4.0.0",
      date: "Janvier 2026",
      notes:
        "Refonte majeure de l'architecture logicielle, compatibilité avec les architectures 64-bit et passage au code Downloader unifié 822648.",
      isCurrent: false,
    },
    {
      version: "v3.2.1",
      date: "Septembre 2025",
      notes:
        "Routage adaptatif des flux FHD et 4K, optimisation du buffer pour les connexions ADSL/VDSL et refonte du zapping rapide.",
      isCurrent: false,
    },
  ];

  const pros = [
    "Ultra-léger en ressources : tourne sans aucun ralentissement même sur des clés Fire Stick Lite ou Mi TV Stick.",
    "Zapping instantané spécialement optimisé pour les amateurs de sport et de multiplex football.",
    "Grille EPG interactive avec aperçu en temps réel du programme en cours et des émissions suivantes.",
    "Gestion simplifiée des bouquets favoris avec réorganisation personnalisée des chaînes préférées.",
    "Connexion directe et sécurisée avec vos identifiants Atlas Pro 12 Mois.",
  ];

  const cons = [
    "Interface sobre axée sur l'efficacité plutôt que sur les animations graphiques cinéma.",
    "Pas de client natif pour ordinateurs Windows ou Mac (nécessite IPTV Smarters Pro sur PC).",
    "Non disponible sur l'App Store Apple (réservé à l'écosystème Android TV et Fire OS).",
  ];

  const compatibilityMatrix = [
    {
      device: "Amazon Fire TV Stick",
      system: "Fire OS 6, 7 & 8 (Lite, 4K, 4K Max, Cube)",
      status: "100% Compatible",
      supportLevel: "Recommandé",
    },
    {
      device: "Boîtiers Android TV",
      system: "Nvidia Shield TV, Xiaomi Mi Box S, Mecool, Formuler",
      status: "100% Compatible",
      supportLevel: "Optimal",
    },
    {
      device: "Smart TV Android & Google TV",
      system: "Sony Bravia, Philips Ambilight, TCL, Thomson (Android 7 à 14+)",
      status: "100% Compatible",
      supportLevel: "Optimal",
    },
    {
      device: "Chromecast avec Google TV",
      system: "Google TV OS (HD et 4K)",
      status: "100% Compatible",
      supportLevel: "Optimal",
    },
    {
      device: "Smartphones & Tablettes Android",
      system: "Android 8.0+",
      status: "Compatible (Mode Tactile)",
      supportLevel: "Standard",
    },
  ];

  const faqItems = [
    {
      q: "Pourquoi choisir Atlas Pro ONTV plutôt qu'Atlas Pro Max ?",
      a: "Atlas Pro ONTV est le lecteur idéal pour les utilisateurs recherchant la rapidité absolue et la sobriété. Si vous possédez un boîtier ou une clé HDMI avec des ressources modestes (comme un Fire Stick Lite ou une TV d'ancienne génération), ONTV consomme moitié moins de mémoire RAM et garantit un zapping plus vif qu'une interface lourde.",
    },
    {
      q: "L'application Atlas Pro ONTV supporte-t-elle les flux 4K Ultra HD ?",
      a: "Oui, à condition que votre équipement (téléviseur et boîtier) dispose d'un décodeur matériel 4K et d'une connexion Internet d'au moins 25 Mbps, Atlas Pro ONTV restitue les flux 4K 50 FPS avec un débit binaire de 25 à 30 Mbps.",
    },
    {
      q: "Comment installer l'application sur un Amazon Fire Stick ?",
      a: "Le guide d'installation complet étape par étape, incluant le code officiel pour l'application Downloader, est disponible dans la rubrique Guides d'Installation de notre Centre d'Aide.",
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        name: "Atlas Pro ONTV",
        operatingSystem: "Android TV, Fire OS",
        applicationCategory: "MultimediaApplication",
        softwareVersion: "v4.0.2",
        description:
          "Application officielle de streaming Atlas Pro ONTV optimisée pour Amazon Fire Stick et boîtiers Android TV.",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "EUR",
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: faqItems.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.a,
          },
        })),
      },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#040A17] text-white">
      <Navbar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbItems} />
        </div>

        {/* Hero Section */}
        <section className="py-12 md:py-20 glow-stadium border-b border-[#1A2A4A]/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold text-white bg-[#0A1428] border border-[#1E7BFF] shadow-sm mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#1E7BFF]" />
              LECTEUR ULTRA-RAPIDE & LÉGER
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Atlas Pro ONTV : <span className="gradient-text-blue">Fiche Technique, Versions & Compatibilité</span>
            </h1>
            <p className="mt-4 text-sm sm:text-base text-[#9FB0CC] leading-relaxed max-w-2xl mx-auto">
              Retrouvez l&apos;analyse complète du lecteur <strong className="text-white">Atlas Pro ONTV</strong>,
              réputé pour sa stabilité à toute épreuve, sa réactivité et sa faible empreinte mémoire.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/centre-d-aide/guides/comment-installer-atlas-pro-sur-fire-tv-stick/"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-bold text-white bg-[#1E7BFF] hover:bg-[#2D9CFF] glow-primary transition-all"
              >
                <BookOpen className="w-4 h-4" />
                <span>Voir le guide d&apos;installation</span>
              </Link>
              <Link
                href="/abonnement-atlas-pro-12-mois/"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-white bg-[#0A1428] hover:bg-white/10 border border-[#1A2A4A] transition-all"
              >
                <span>Souscrire un abonnement Atlas Pro</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-16">
          {/* Section 1 : Définition & Rôle */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#1E7BFF]/15 text-[#1E7BFF] flex items-center justify-center">
                <Tv className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#1E7BFF] uppercase tracking-wider">
                  PRÉSENTATION DU LOGICIEL
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Qu&apos;est-ce que l&apos;application Atlas Pro ONTV ?
                </h2>
              </div>
            </div>
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0A1428] border border-[#1A2A4A] space-y-4 text-sm text-[#9FB0CC] leading-relaxed">
              <p>
                <strong className="text-white">Atlas Pro ONTV</strong> est le lecteur historique officiel conçu pour
                les utilisateurs qui privilégient la rapidité d&apos;exécution et la réactivité du zapping avant tout.
                Développé spécifiquement pour l&apos;écosystème Android TV et les clés Amazon Fire TV Stick, ONTV embarque
                un moteur de décodage dépouillé de tout composant superflu, ce qui lui permet de se charger en moins
                de 2 secondes.
              </p>
              <p>
                Particulièrement appréciée lors des multiplex sportifs et des soirées de forte affluence, l&apos;application
                intègre un système de reconnexion automatique invisible et une gestion du buffer qui compense les micro-variations
                de débit des connexions Internet résidentielles.
              </p>
            </div>
          </section>

          {/* Section 2 : Versions & Mises à Jour */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#22C55E]/15 text-[#22C55E] flex items-center justify-center">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#22C55E] uppercase tracking-wider">
                  CYCLE DE DÉVELOPPEMENT
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Historique des Versions & Dernière Version Stable
                </h2>
              </div>
            </div>
            <div className="space-y-3">
              {versionHistory.map((ver) => (
                <div
                  key={ver.version}
                  className={`p-5 sm:p-6 rounded-2xl border transition-all ${
                    ver.isCurrent
                      ? "bg-[#060E1F] border-[#1E7BFF] shadow-lg shadow-[#1E7BFF]/10"
                      : "bg-[#0A1428] border-[#1A2A4A]"
                  }`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2.5">
                      <span className="font-bold text-white text-base sm:text-lg">
                        {ver.version}
                      </span>
                      {ver.isCurrent && (
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold text-[#22C55E] bg-[#22C55E]/15 border border-[#22C55E]/30">
                          VERSION RECOMMANDÉE
                        </span>
                      )}
                    </div>
                    <span className="text-xs font-medium text-[#9FB0CC]">{ver.date}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#9FB0CC] leading-relaxed">
                    {ver.notes}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 3 : Avantages & Inconvénients */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#1E7BFF]/15 text-[#1E7BFF] flex items-center justify-center">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#1E7BFF] uppercase tracking-wider">
                  ANALYSE TECHNIQUE COMPARATIVE
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Avantages et Inconvénients d&apos;Atlas Pro ONTV
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Avantages */}
              <div className="p-6 sm:p-8 rounded-2xl bg-[#0A1428] border border-[#22C55E]/30 space-y-4">
                <div className="flex items-center gap-2 text-[#22C55E] font-bold text-lg">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>Points Forts & Avantages</span>
                </div>
                <ul className="space-y-3 text-xs sm:text-sm text-[#9FB0CC]">
                  {pros.map((p, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] mt-2 flex-shrink-0" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Inconvénients */}
              <div className="p-6 sm:p-8 rounded-2xl bg-[#0A1428] border border-[#EF4444]/30 space-y-4">
                <div className="flex items-center gap-2 text-[#EF4444] font-bold text-lg">
                  <XCircle className="w-5 h-5" />
                  <span>Limites & Points d&apos;Attention</span>
                </div>
                <ul className="space-y-3 text-xs sm:text-sm text-[#9FB0CC]">
                  {cons.map((c, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#EF4444] mt-2 flex-shrink-0" />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Section 4 : Compatibilité Matérielle & OS */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#1E7BFF]/15 text-[#1E7BFF] flex items-center justify-center">
                <Cpu className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#1E7BFF] uppercase tracking-wider">
                  MATRICE D&apos;EXÉCUTION
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Compatibilité Matérielle & Systèmes d&apos;Exploitation
                </h2>
              </div>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-[#1A2A4A] bg-[#0A1428]">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-[#060E1F] text-white border-b border-[#1A2A4A]">
                  <tr>
                    <th className="py-4 px-4 sm:px-6 font-bold">Appareil / Marque</th>
                    <th className="py-4 px-4 sm:px-6 font-bold">Système d&apos;exploitation</th>
                    <th className="py-4 px-4 sm:px-6 font-bold">Compatibilité</th>
                    <th className="py-4 px-4 sm:px-6 font-bold">Performances</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#1A2A4A]/60 text-[#9FB0CC]">
                  {compatibilityMatrix.map((row) => (
                    <tr key={row.device} className="hover:bg-white/[0.02] transition-colors">
                      <td className="py-3.5 px-4 sm:px-6 font-semibold text-white">
                        {row.device}
                      </td>
                      <td className="py-3.5 px-4 sm:px-6">{row.system}</td>
                      <td className="py-3.5 px-4 sm:px-6">
                        <span className="inline-flex items-center gap-1.5 text-[#22C55E] font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>{row.status}</span>
                        </span>
                      </td>
                      <td className="py-3.5 px-4 sm:px-6 font-medium text-white">
                        {row.supportLevel}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 5 : Passerelle Centre d'Aide (Installation) */}
          <section className="p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-[#060E1F] via-[#0A1428] to-[#0E1C38] border-2 border-[#1E7BFF] text-center space-y-5">
            <div className="w-12 h-12 rounded-full bg-[#1E7BFF]/20 text-[#1E7BFF] mx-auto flex items-center justify-center">
              <BookOpen className="w-6 h-6" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Besoin du tutoriel d&apos;installation pas-à-pas ?
            </h2>
            <p className="text-xs sm:text-sm text-[#9FB0CC] max-w-xl mx-auto leading-relaxed">
              Pour des raisons de clarté technique, les codes Downloader officiels et les étapes
              de configuration détaillées sont centralisés dans notre Centre d&apos;Aide officiel.
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/centre-d-aide/guides/comment-installer-atlas-pro-sur-fire-tv-stick/"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs sm:text-sm font-bold text-white bg-[#1E7BFF] hover:bg-[#2D9CFF] glow-primary transition-all"
              >
                <span>Guide d&apos;installation Fire TV Stick</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/centre-d-aide/guides/installer-atlas-pro-box-android-google-tv/"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-[#0A1428] hover:bg-white/10 border border-[#1A2A4A] transition-all"
              >
                <span>Guide d&apos;installation Android TV</span>
              </Link>
            </div>
          </section>

          {/* Section 6 : FAQ */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#1E7BFF]/15 text-[#1E7BFF] flex items-center justify-center">
                <HelpCircle className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#1E7BFF] uppercase tracking-wider">
                  QUESTIONS FRÉQUENTES
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Foire Aux Questions : Atlas Pro ONTV
                </h2>
              </div>
            </div>

            <div className="space-y-3">
              {faqItems.map((item, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-[#0A1428] border border-[#1A2A4A] space-y-2">
                  <h3 className="text-base font-bold text-white">{item.q}</h3>
                  <p className="text-xs sm:text-sm text-[#9FB0CC] leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </section>
        </article>
      </main>

      <StickyCTA
        title="Profitez de l'application Atlas Pro ONTV"
        buttonText="Abonnement 12 mois (39,99 €)"
        href="/abonnement-atlas-pro-12-mois/"
      />
      <Footer />
    </div>
  );
}
