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
  Film,
} from "lucide-react";

export function generateMetadata(): Metadata {
  return constructMetadata({
    title: "Application Atlas Pro Max (v5.0.1) : Fiche Technique, Versions & Compatibilité",
    description:
      "Fiche technique complète de l'application officielle Atlas Pro Max v5.0.1 : présentation du lecteur cinéma 4K HDR, versions, avantages, limites et compatibilité matérielle.",
    path: "/applications/atlas-pro-max/",
  });
}

export default function AtlasProMaxPage() {
  const breadcrumbItems = [
    { label: "Applications", href: "/applications/" },
    { label: "Atlas Pro Max", href: "/applications/atlas-pro-max/" },
  ];

  const versionHistory = [
    {
      version: "v5.0.1 Stable 2026 (Dernière version)",
      date: "Janvier 2026",
      notes:
        "Mise à niveau du moteur de rendu ExoPlayer v2, intégration du buffer adaptatif intelligent anti-freeze et support complet du décodage 4K 50 FPS HDR10.",
      isCurrent: true,
    },
    {
      version: "v4.8.0",
      date: "Août 2025",
      notes:
        "Refonte complète du catalogue VOD avec affichage dynamique des jaquettes, fiches acteurs et bandes-annonces intégrées.",
      isCurrent: false,
    },
    {
      version: "v4.5.2",
      date: "Février 2025",
      notes:
        "Ajout du contrôle parental avec verrouillage par code PIN et amélioration de la recherche vocale sur Google TV.",
      isCurrent: false,
    },
  ];

  const pros = [
    "Interface moderne inspirée des grandes plateformes de streaming avec carrousels thématiques et affiches HD.",
    "Décodage 4K HDR10 et 50 FPS avec synchronisation audio/vidéo ultra-précise sur les téléviseurs récents.",
    "Reprise automatique de lecture sur les films et séries VOD avec gestion des pistes audio et sous-titres FR.",
    "Module de contrôle parental intégré pour sécuriser l'accès des enfants aux bouquets adultes et sensibles.",
    "Recherche vocale compatible avec la télécommande Google Assistant et Alexa sur Fire OS.",
  ];

  const cons = [
    "Plus gourmand en ressources : nécessite un équipement disposant d'au moins 2 Go de mémoire RAM pour une fluidité parfaite.",
    "Déconseillé sur les toutes premières générations de clés HDMI (Fire Stick 1re génération ou Mi Stick 1080p).",
    "Non disponible sur l'écosystème Apple (iOS, iPadOS, tvOS).",
  ];

  const compatibilityMatrix = [
    {
      device: "Nvidia Shield TV & Shield Pro",
      system: "Android TV 9 à 11+",
      status: "100% Compatible",
      supportLevel: "Performance Maximale",
    },
    {
      device: "Amazon Fire TV Stick 4K & 4K Max",
      system: "Fire OS 7 & 8",
      status: "100% Compatible",
      supportLevel: "Recommandé",
    },
    {
      device: "Chromecast avec Google TV 4K",
      system: "Google TV OS",
      status: "100% Compatible",
      supportLevel: "Recommandé",
    },
    {
      device: "Smart TV Android & Google TV récentes",
      system: "Sony, TCL, Philips (Android TV 9.0+ avec ≥ 2 Go RAM)",
      status: "100% Compatible",
      supportLevel: "Optimal",
    },
    {
      device: "Boîtiers TV d'entrée de gamme (< 1.5 Go RAM)",
      system: "Android TV 7.0+",
      status: "Compatible (Préférer ONTV)",
      supportLevel: "Modéré",
    },
  ];

  const faqItems = [
    {
      q: "Quelles sont les spécifications recommandées pour faire tourner Atlas Pro Max en 4K ?",
      a: "Pour exploiter pleinement la fluidité d'Atlas Pro Max, nous recommandons un boîtier ou une Smart TV dotée d'au moins 2 Go de RAM, d'un processeur quad-core 64 bits et d'une connexion Internet fibrée ou 5G d'au moins 25 à 30 Mbps réels.",
    },
    {
      q: "L'application Atlas Pro Max est-elle payante ?",
      a: "Non. Le logiciel Atlas Pro Max est mis à disposition sans surcoût pour tous les abonnés Atlas Pro. L'accès aux flux TV et au catalogue VOD nécessite simplement d'entrer vos identifiants officiels d'abonnement 12 Mois.",
    },
    {
      q: "Où trouver le guide pour installer Atlas Pro Max sur mon boîtier ?",
      a: "Le tutoriel pas-à-pas détaillé avec le code officiel pour l'application Downloader est accessible directement dans notre Centre d'Aide officiel.",
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        name: "Atlas Pro Max",
        operatingSystem: "Android TV, Google TV, Fire OS",
        applicationCategory: "MultimediaApplication",
        softwareVersion: "v5.0.1",
        description:
          "Application de streaming officielle Atlas Pro Max optimisée pour l'expérience cinéma VOD 4K HDR.",
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
              EXPÉRIENCE CINÉMA NOUVELLE GÉNÉRATION
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Atlas Pro Max : <span className="gradient-text-blue">Fiche Technique, Versions & Compatibilité</span>
            </h1>
            <p className="mt-4 text-sm sm:text-base text-[#9FB0CC] leading-relaxed max-w-2xl mx-auto">
              Présentation détaillée de l&apos;application <strong className="text-white">Atlas Pro Max v5.0.1</strong>,
              le lecteur premium conçu pour restituer l&apos;intégralité de vos chaînes et films en qualité 4K Ultra HD HDR.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/centre-d-aide/guides/installer-atlas-pro-box-android-google-tv/"
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
                <Film className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#1E7BFF] uppercase tracking-wider">
                  PRÉSENTATION DU LOGICIEL
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Qu&apos;est-ce que l&apos;application Atlas Pro Max ?
                </h2>
              </div>
            </div>
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0A1428] border border-[#1A2A4A] space-y-4 text-sm text-[#9FB0CC] leading-relaxed">
              <p>
                <strong className="text-white">Atlas Pro Max</strong> représente l&apos;évolution visuelle et technologique
                de la suite logicielle Atlas Pro. Alors qu&apos;ONTV se concentre sur l&apos;extrême légèreté, Max adopte
                une ergonomie riche et cinématographique, conçue pour transformer votre salon en véritable salle de projection.
              </p>
              <p>
                Construit autour d&apos;un moteur de décodage matériel haute performance, Atlas Pro Max prend en charge les profils
                HEVC Main 10 bits et l&apos;audio Dolby Digital Plus 5.1. Son interface organise automatiquement le flux en direct
                avec grille des programmes enrichie, tout en offrant une section VOD complète avec fiches détaillées, résumés,
                casting et mémorisation de reprise sur tous vos épisodes de séries.
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
                <Tv className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#1E7BFF] uppercase tracking-wider">
                  ANALYSE TECHNIQUE COMPARATIVE
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Avantages et Inconvénients d&apos;Atlas Pro Max
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
              Comment installer l&apos;application Atlas Pro Max ?
            </h2>
            <p className="text-xs sm:text-sm text-[#9FB0CC] max-w-xl mx-auto leading-relaxed">
              Pour des raisons de clarté technique, les codes Downloader et la procédure détaillée
              d&apos;installation étape par étape sont consultables dans notre Centre d&apos;Aide officiel.
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/centre-d-aide/guides/installer-atlas-pro-box-android-google-tv/"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs sm:text-sm font-bold text-white bg-[#1E7BFF] hover:bg-[#2D9CFF] glow-primary transition-all"
              >
                <span>Guide d&apos;installation Android TV / Box</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/centre-d-aide/guides/comment-installer-atlas-pro-sur-fire-tv-stick/"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-[#0A1428] hover:bg-white/10 border border-[#1A2A4A] transition-all"
              >
                <span>Guide Fire TV Stick</span>
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
                  Foire Aux Questions : Atlas Pro Max
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
        title="Profitez de l'expérience Atlas Pro Max"
        buttonText="Abonnement 12 mois (39,99 €)"
        href="/abonnement-atlas-pro-12-mois/"
      />
      <Footer />
    </div>
  );
}
