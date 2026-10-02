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
  ShieldCheck,
  Zap,
} from "lucide-react";

export function generateMetadata(): Metadata {
  return constructMetadata({
    title: "Application Atlas Pro IBO : Définition, Versions & Compatibilité (2026)",
    description:
      "Fiche technique complète de l'application officielle Atlas Pro IBO pour Smart TV et boîtiers Android : présentation, versions stables, avantages, limites et compatibilité.",
    path: "/applications/atlas-pro-ibo/",
  });
}

export default function AtlasProIboPage() {
  const breadcrumbItems = [
    { label: "Applications", href: "/applications/" },
    { label: "Atlas Pro IBO", href: "/applications/atlas-pro-ibo/" },
  ];

  const versionHistory = [
    {
      version: "v2.8.2 Stable (Dernière version 2026)",
      date: "Janvier 2026",
      notes:
        "Intégration du décodage matériel HEVC/H.265 optimisé, correction du cache de l'EPG sur Smart TV et zapping sous la seconde.",
      isCurrent: true,
    },
    {
      version: "v2.7.0",
      date: "Septembre 2025",
      notes:
        "Prise en charge native des flux audio Dolby Digital Plus (E-AC3) et amélioration du lecteur VOD avec reprise de lecture.",
      isCurrent: false,
    },
    {
      version: "v2.5.1",
      date: "Mars 2025",
      notes:
        "Refonte ergonomique de l'interface d'accueil, tri automatique des bouquets internationaux et favoris multi-catégories.",
      isCurrent: false,
    },
  ];

  const pros = [
    "Interface fluide spécifiquement calibrée pour télécommandes TV (zéro curseur souris requis).",
    "Intégration directe des identifiants Atlas Pro sans manipulation fastidieuse de fichiers M3U.",
    "Zapping quasi-instantané (< 0.8 seconde) sur les flux Live Full HD et 4K 50 FPS.",
    "Lecteur VOD avec mémorisation de la position de lecture, sous-titres français et choix des pistes audio.",
    "Faible consommation de mémoire vive (RAM), parfait pour les téléviseurs d'entrée et milieu de gamme.",
  ];

  const cons = [
    "Réservé aux abonnements Atlas Pro (incompatible avec les listes de lecture tierces non configurées).",
    "Non disponible sur l'App Store Apple (iOS / tvOS) en version native.",
    "Nécessite une liaison Internet stable (fibre ou VDSL > 25 Mbps pour la 4K Ultra HD).",
  ];

  const compatibilityMatrix = [
    {
      device: "Smart TV Samsung",
      system: "Tizen OS (2018 à 2026)",
      status: "100% Compatible",
      supportLevel: "Optimal",
    },
    {
      device: "Smart TV LG",
      system: "webOS (4.0 à 24+)",
      status: "100% Compatible",
      supportLevel: "Optimal",
    },
    {
      device: "Amazon Fire TV Stick",
      system: "Fire OS 6, 7 & 8 (Lite, 4K, Max, Cube)",
      status: "100% Compatible",
      supportLevel: "Optimal",
    },
    {
      device: "Android TV & Google TV",
      system: "Android TV 7.0 à 14+ (Sony, Philips, TCL, Thomson)",
      status: "100% Compatible",
      supportLevel: "Optimal",
    },
    {
      device: "Boîtiers TV Streaming",
      system: "Nvidia Shield, Xiaomi Mi Box, Chromecast avec Google TV",
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
      q: "Quelle est la différence entre Atlas Pro IBO et l'application IBO Player Pro générique ?",
      a: "Atlas Pro IBO est une version spécialement développée et pré-configurée pour l'infrastructure des serveurs Atlas Pro. Contrairement au lecteur IBO Player Pro générique qui requiert des abonnements séparés et des manipulations de playlists complexes, Atlas Pro IBO intègre directement les protocoles du réseau Atlas Pro pour une activation simplifiée et une compatibilité maximale des codecs 4K.",
    },
    {
      q: "Quels sont les codecs vidéo et audio pris en charge par Atlas Pro IBO ?",
      a: "L'application prend en charge le décodage matériel et logiciel des codecs H.265 (HEVC Main 10), H.264 (AVC), MPEG-4 ainsi que les formats audio AAC, MP3, Dolby Digital (AC3) et Dolby Digital Plus (E-AC3) pour un son multicanal 5.1 sur les chaînes de sport et de cinéma.",
    },
    {
      q: "Où puis-je trouver le tutoriel pas-à-pas pour installer Atlas Pro IBO ?",
      a: "Tous les guides d'installation étape par étape, incluant les codes numériques Downloader et les procédures par type de téléviseur, sont regroupés dans notre Centre d'Aide officiel dans la section Guides d'Installation.",
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        name: "Atlas Pro IBO",
        operatingSystem: "Android TV, Fire OS, Tizen, webOS",
        applicationCategory: "MultimediaApplication",
        softwareVersion: "v2.8.2",
        description:
          "Application de streaming officielle Atlas Pro IBO dédiée aux Smart TV et boîtiers Android.",
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
              APPLICATION OFFICIELLE SMART TV
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Atlas Pro IBO : <span className="gradient-text-blue">Fiche Technique, Versions & Compatibilité</span>
            </h1>
            <p className="mt-4 text-sm sm:text-base text-[#9FB0CC] leading-relaxed max-w-2xl mx-auto">
              Découvrez en détail l&apos;application officielle <strong className="text-white">Atlas Pro IBO</strong>,
              spécialement conçue pour sublimer votre expérience sur Smart TV et boîtiers de streaming.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/centre-d-aide/guides/comment-configurer-ibo-player-pro/"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-bold text-white bg-[#1E7BFF] hover:bg-[#2D9CFF] glow-primary transition-all"
              >
                <BookOpen className="w-4 h-4" />
                <span>Voir le tutoriel de configuration</span>
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
                  Qu&apos;est-ce que l&apos;application Atlas Pro IBO ?
                </h2>
              </div>
            </div>
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0A1428] border border-[#1A2A4A] space-y-4 text-sm text-[#9FB0CC] leading-relaxed">
              <p>
                <strong className="text-white">Atlas Pro IBO</strong> est l&apos;application de lecture officielle
                conçue par l&apos;écosystème Atlas Pro pour répondre aux exigences des téléviseurs connectés de salon.
                À la différence de lecteurs tiers génériques (comme IBO Player Pro qui impose des licences externes
                et des configurations manuelles), Atlas Pro IBO est une version optimisée dès la racine pour communiquer
                directement avec les serveurs CDN de notre infrastructure.
              </p>
              <p>
                Dotée d&apos;un moteur de décodage matériel léger basé sur le framework ExoPlayer v2, l&apos;application
                élimine les temps de chargement fastidieux : elle indexe les plus de 10 000 chaînes directes et le catalogue
                VOD en quelques secondes seulement lors du démarrage, tout en garantissant une réactivité immédiate à la télécommande.
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
                  Avantages et Inconvénients d&apos;Atlas Pro IBO
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
              Pour des raisons de clarté technique, les guides de téléchargement, codes Downloader
              et procédures d&apos;injection des identifiants sont centralisés dans notre Centre d&apos;Aide officiel.
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/centre-d-aide/guides/comment-configurer-ibo-player-pro/"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs sm:text-sm font-bold text-white bg-[#1E7BFF] hover:bg-[#2D9CFF] glow-primary transition-all"
              >
                <span>Tutoriel IBO Player Pro</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/centre-d-aide/guides/"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-[#0A1428] hover:bg-white/10 border border-[#1A2A4A] transition-all"
              >
                <span>Tous les guides &amp; tutoriels</span>
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
                  Foire Aux Questions : Atlas Pro IBO
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
        title="Profitez de l'application Atlas Pro IBO"
        buttonText="Abonnement 12 mois (39,99 €)"
        href="/abonnement-atlas-pro-12-mois/"
      />
      <Footer />
    </div>
  );
}
