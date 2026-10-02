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
  Monitor,
  Smartphone,
  Laptop,
} from "lucide-react";

export function generateMetadata(): Metadata {
  return constructMetadata({
    title: "Application IPTV Smarters Pro : Fiche Technique, Versions & Compatibilité (2026)",
    description:
      "Analyse technique complète d'IPTV Smarters Pro : lecteur multimédia universel, versions v4.0.2, avantages, limites et compatibilité iOS, Windows, Mac, Fire TV et Android.",
    path: "/applications/iptv-smarters-pro/",
  });
}

export default function IptvSmartersProPage() {
  const breadcrumbItems = [
    { label: "Applications", href: "/applications/" },
    { label: "IPTV Smarters Pro", href: "/applications/iptv-smarters-pro/" },
  ];

  const versionHistory = [
    {
      version: "v4.0.2 Stable (Dernière version 2026)",
      date: "Février 2026",
      notes:
        "Optimisation du moteur de lecture multi-flux, décodage matériel H.265 étendu et amélioration du support Picture-in-Picture (PiP) sur iOS 18 et Android 14.",
      isCurrent: true,
    },
    {
      version: "v3.1.5",
      date: "Octobre 2025",
      notes:
        "Outil de test de bande passante intégré (Speed Test), support de la sélection avancée des pistes audio et corrections du cache EPG.",
      isCurrent: false,
    },
    {
      version: "v3.0.0",
      date: "Avril 2025",
      notes:
        "Refonte visuelle complète de l'interface d'accueil, intégration du mode multi-écrans (jusqu'à 4 flux simultanés) et contrôle parental renforcé.",
      isCurrent: false,
    },
  ];

  const pros = [
    "Véritable compatibilité multiplateforme : disponible nativement sur iOS (iPhone/iPad), macOS, Windows, Android et Fire OS.",
    "Support complet de l'API Xtream Codes : connexion rapide via Nom d'utilisateur, Mot de passe et URL de serveur.",
    "Mode Multi-Screen : possibilité de diviser l'écran en 2 ou 4 flux simultanés (idéal pour les soirées multiplex sport).",
    "Contrôle parental complet avec code PIN pour verrouiller les catégories et bouquets spécifiques.",
    "Prise en charge de lecteurs externes (VLC Media Player, MX Player) en cas de codecs particuliers.",
  ];

  const cons = [
    "Configuration initiale manuelle requise (saisie complète des paramètres Xtream Codes fournis par votre service).",
    "Ergonomie parfois dense sur les téléviseurs d'entrée de gamme comparé à une application 100% native comme Atlas Pro IBO.",
    "Certaines fonctionnalités avancées (multi-écrans) nécessitent un appareil puissant (processeur récent et 2 Go de RAM minimum).",
    "Aucun contenu inclus : application purement logicielle exigeant un abonnement actif pour fonctionner.",
  ];

  const compatibilityMatrix = [
    {
      device: "Apple iPhone & iPad",
      system: "iOS / iPadOS 12.0 à 18+",
      status: "100% Compatible",
      supportLevel: "Natif (App Store)",
    },
    {
      device: "Ordinateurs Apple Mac",
      system: "macOS 11.0+ (Puces M1/M2/M3 & Intel)",
      status: "100% Compatible",
      supportLevel: "Natif (Mac App Store)",
    },
    {
      device: "PC & Portables Windows",
      system: "Windows 10 & Windows 11 (64-bit)",
      status: "100% Compatible",
      supportLevel: "Logiciel Bureau Dédié",
    },
    {
      device: "Amazon Fire TV Stick",
      system: "Fire OS 6, 7 & 8 (Lite, 4K, Max, Cube)",
      status: "100% Compatible",
      supportLevel: "Installation Downloader",
    },
    {
      device: "Android TV & Google TV",
      system: "Android TV 7.0 à 14+ (Sony, Philips, TCL)",
      status: "100% Compatible",
      supportLevel: "Google Play Store / APK",
    },
    {
      device: "Smartphones & Tablettes Android",
      system: "Android 8.0+",
      status: "100% Compatible",
      supportLevel: "Mode Tactile Optimisé",
    },
  ];

  const faqItems = [
    {
      q: "Qu'est-ce qu'IPTV Smarters Pro exactement ?",
      a: "IPTV Smarters Pro est un lecteur multimédia logiciel tiers développé par WHMCS SMARTERS. L'application ne fournit aucun flux vidéo ni chaîne de télévision. Elle agit comme une interface cliente permettant de lire les contenus d'un abonnement externe (comme Atlas Pro) grâce aux protocoles Xtream Codes API ou aux listes de lecture M3U.",
    },
    {
      q: "Comment configurer mon abonnement Atlas Pro sur IPTV Smarters Pro ?",
      a: "Lors du premier lancement de l'application, choisissez l'option 'Connexion avec l'API Xtream Codes'. Renseignez un nom arbitraire de profil, votre nom d'utilisateur, votre mot de passe et l'URL du serveur reçus par e-mail lors de votre souscription Atlas Pro, puis validez pour charger automatiquement vos chaînes et la VOD.",
    },
    {
      q: "L'application IPTV Smarters Pro est-elle gratuite ?",
      a: "La version de base d'IPTV Smarters Pro est disponible gratuitement sur la plupart des magasins d'applications. Elle permet de lire les flux en direct, le guide EPG et les catalogues VOD sans coût supplémentaire obligatoire pour l'utilisateur standard.",
    },
    {
      q: "Pourquoi reçois-je un message 'Invalid Details' lors de la connexion ?",
      a: "Cette notification indique généralement une erreur de saisie dans vos identifiants : vérifiez les minuscules/majuscules dans le mot de passe, l'absence d'espaces invisibles au début ou à la fin de l'URL du serveur, ou assurez-vous que votre abonnement Atlas Pro est bien actif.",
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "@id": "https://iboatlaspro.com/applications/iptv-smarters-pro/#software",
        name: "IPTV Smarters Pro",
        applicationCategory: "MultimediaApplication",
        operatingSystem: "iOS, macOS, Windows 10/11, Android, Fire OS",
        softwareVersion: "4.0.2",
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.7",
          reviewCount: "3840",
          bestRating: "5",
          worstRating: "1",
        },
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "EUR",
          availability: "https://schema.org/InStock",
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Accueil",
            item: "https://iboatlaspro.com/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Applications",
            item: "https://iboatlaspro.com/applications/",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "IPTV Smarters Pro",
            item: "https://iboatlaspro.com/applications/iptv-smarters-pro/",
          },
        ],
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbItems} />
        </div>

        {/* HERO SECTION */}
        <section className="py-12 md:py-16 glow-stadium border-b border-[#1A2A4A]/50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold text-white bg-[#0A1428] border border-[#1E7BFF]">
                <Sparkles className="w-3.5 h-3.5 text-[#1E7BFF]" />
                LECTEUR MULTIPLATEFORME UNIVERSEL
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                Application <span className="gradient-text-blue">IPTV Smarters Pro</span> : Analyse, Versions &amp; Compatibilité
              </h1>
              <p className="text-base sm:text-lg text-[#9FB0CC] leading-relaxed">
                Le lecteur multimédia le plus répandu pour lire vos flux Xtream Codes sur iPhone, Mac, PC Windows, Fire TV et Android. Fiche d&apos;analyse technique et synthèse matérielle.
              </p>
            </div>

            {/* Quick Specs Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
              <div className="p-4 rounded-xl bg-[#0A1428] border border-[#1A2A4A] text-center">
                <span className="text-xs text-[#9FB0CC] block uppercase tracking-wider">Catégorie</span>
                <span className="text-sm sm:text-base font-bold text-white mt-1 block">Lecteur Tiers Universel</span>
              </div>
              <div className="p-4 rounded-xl bg-[#0A1428] border border-[#1A2A4A] text-center">
                <span className="text-xs text-[#9FB0CC] block uppercase tracking-wider">Version Active</span>
                <span className="text-sm sm:text-base font-bold text-[#22C55E] mt-1 block">v4.0.2 Stable (2026)</span>
              </div>
              <div className="p-4 rounded-xl bg-[#0A1428] border border-[#1A2A4A] text-center">
                <span className="text-xs text-[#9FB0CC] block uppercase tracking-wider">Protocoles</span>
                <span className="text-sm sm:text-base font-bold text-[#1E7BFF] mt-1 block">Xtream Codes &amp; M3U</span>
              </div>
              <div className="p-4 rounded-xl bg-[#0A1428] border border-[#1A2A4A] text-center">
                <span className="text-xs text-[#9FB0CC] block uppercase tracking-wider">Disponibilité</span>
                <span className="text-sm sm:text-base font-bold text-white mt-1 block">iOS, Mac, Win, Android</span>
              </div>
            </div>
          </div>
        </section>

        {/* 1. DÉFINITION & ARCHITECTURE TECHNIQUE */}
        <section className="py-12 md:py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div>
              <span className="text-xs font-bold text-[#1E7BFF] uppercase tracking-wider">Définition &amp; Rôle</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                Qu&apos;est-ce qu&apos;IPTV Smarters Pro ?
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 items-start">
              <div className="p-6 rounded-2xl bg-[#0A1428] border border-[#1A2A4A] space-y-4">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Laptop className="w-5 h-5 text-[#1E7BFF]" />
                  Un lecteur indépendant multiplateforme
                </h3>
                <p className="text-sm text-[#9FB0CC] leading-relaxed">
                  <strong>IPTV Smarters Pro</strong> est une solution logicielle cliente développée par la société WHMCS SMARTERS. Il s&apos;agit d&apos;un lecteur multimédia neutre sans contenu intégré. L&apos;application a été pensée pour combler le manque d&apos;applications IPTV natives sur les écosystèmes Apple (iOS, iPadOS, macOS) et Microsoft Windows.
                </p>
                <p className="text-sm text-[#9FB0CC] leading-relaxed">
                  Elle interprète les API Xtream Codes pour structurer automatiquement les flux en trois répertoires ergonomiques : le Direct TV avec EPG interactif, le catalogue de Films et les Séries TV classées par saisons et épisodes.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#0A1428] border border-[#1A2A4A] space-y-4">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Cpu className="w-5 h-5 text-emerald-400" />
                  Moteur de lecture &amp; Multi-Screen
                </h3>
                <p className="text-sm text-[#9FB0CC] leading-relaxed">
                  L&apos;un des atouts distinctifs d&apos;IPTV Smarters Pro réside dans sa prise en charge du <strong>Multi-Screen</strong>. Cette fonctionnalité logicielle permet d&apos;afficher simultanément 2 à 4 flux vidéo sur une même dalle d&apos;écran, très prisée lors des multiplex sportifs.
                </p>
                <p className="text-sm text-[#9FB0CC] leading-relaxed">
                  De plus, si un codec vidéo spécifique n&apos;est pas décodé par le moteur par défaut, l&apos;application permet de basculer en un clic sur des lecteurs tiers installés sur votre machine (VLC Player ou MX Player).
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 2. HISTORIQUE DES VERSIONS & CHANGELOG */}
        <section className="py-12 md:py-16 bg-[#060E1F]/60 border-y border-[#1A2A4A]/50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div>
              <span className="text-xs font-bold text-[#1E7BFF] uppercase tracking-wider">Cycle de Développement</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                Historique des Versions &amp; Notes de Mise à Jour
              </h2>
              <p className="text-sm text-[#9FB0CC] mt-2">
                Suivi des évolutions logicielles récentes d&apos;IPTV Smarters Pro pour assurer une lecture fluide et sans latence.
              </p>
            </div>

            <div className="space-y-4">
              {versionHistory.map((item, idx) => (
                <div
                  key={idx}
                  className={`p-6 rounded-2xl border ${
                    item.isCurrent
                      ? "bg-[#0A1428] border-[#1E7BFF]/70 shadow-lg shadow-[#1E7BFF]/10"
                      : "bg-[#0A1428]/60 border-[#1A2A4A]"
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-3">
                      <span className="text-base font-extrabold text-white font-mono">{item.version}</span>
                      {item.isCurrent && (
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#1E7BFF]/20 text-[#1E7BFF] border border-[#1E7BFF]/30">
                          Version Recommandée
                        </span>
                      )}
                    </div>
                    <span className="text-xs font-medium text-[#9FB0CC]">{item.date}</span>
                  </div>
                  <p className="text-sm text-[#9FB0CC] leading-relaxed">{item.notes}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. TABLEAU AVANTAGES & INCONVÉNIENTS */}
        <section className="py-12 md:py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div>
              <span className="text-xs font-bold text-[#1E7BFF] uppercase tracking-wider">Évaluation Technique</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                Avantages et Limites d&apos;IPTV Smarters Pro
              </h2>
              <p className="text-sm text-[#9FB0CC] mt-2">
                Analyse impartiale des points forts et des contraintes du lecteur pour orienter votre choix d&apos;installation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Avantages */}
              <div className="p-6 sm:p-8 rounded-2xl bg-[#0A1428] border border-emerald-500/30 space-y-4">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400" />
                  <h3 className="text-lg font-bold text-white">Points Forts</h3>
                </div>
                <ul className="space-y-3">
                  {pros.map((pro, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-[#9FB0CC] leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
                      <span>{pro}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Inconvénients */}
              <div className="p-6 sm:p-8 rounded-2xl bg-[#0A1428] border border-amber-500/30 space-y-4">
                <div className="flex items-center gap-2">
                  <XCircle className="w-6 h-6 text-amber-400" />
                  <h3 className="text-lg font-bold text-white">Limites &amp; Contraintes</h3>
                </div>
                <ul className="space-y-3">
                  {cons.map((con, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-[#9FB0CC] leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0" />
                      <span>{con}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 4. MATRICE DE COMPATIBILITÉ MATÉRIEL & OS */}
        <section className="py-12 md:py-16 bg-[#060E1F]/60 border-y border-[#1A2A4A]/50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div>
              <span className="text-xs font-bold text-[#1E7BFF] uppercase tracking-wider">Matrice Matérielle</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                Compatibilité par Système &amp; Écran
              </h2>
              <p className="text-sm text-[#9FB0CC] mt-2">
                Vue d&apos;ensemble de la prise en charge d&apos;IPTV Smarters Pro à travers les principaux systèmes d&apos;exploitation.
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-[#1A2A4A] bg-[#0A1428]">
              <table className="w-full text-left text-sm text-[#9FB0CC]">
                <thead className="bg-[#060E1F] text-xs uppercase font-bold text-white border-b border-[#1A2A4A]">
                  <tr>
                    <th scope="col" className="px-6 py-4">Équipement / Écran</th>
                    <th scope="col" className="px-6 py-4">Système d&apos;Exploitation</th>
                    <th scope="col" className="px-6 py-4">Statut</th>
                    <th scope="col" className="px-6 py-4">Mode d&apos;Exécution</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#1A2A4A]">
                  {compatibilityMatrix.map((row, idx) => (
                    <tr key={idx} className="hover:bg-[#060E1F]/50 transition-colors">
                      <td className="px-6 py-4 font-semibold text-white">{row.device}</td>
                      <td className="px-6 py-4">{row.system}</td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                          {row.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-white font-medium">{row.supportLevel}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 5. PASSERELLE CENTRE D'AIDE & INSTALLATION */}
        <section className="py-12 md:py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-[#0A1428] to-[#060E1F] border border-[#1E7BFF]/40 space-y-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="space-y-2 max-w-xl">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1E7BFF] uppercase tracking-wider">
                    <BookOpen className="w-4 h-4" />
                    Tutoriels &amp; Procédures de Déploiement
                  </span>
                  <h3 className="text-2xl font-extrabold text-white">
                    Besoin du guide d&apos;installation pas-à-pas ?
                  </h3>
                  <p className="text-sm text-[#9FB0CC] leading-relaxed">
                    Les tutoriels d&apos;installation complets, la procédure de saisie Xtream Codes et les guides pour PC, Mac, iPhone et Fire Stick sont regroupés dans notre Centre d&apos;Aide technique.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row md:flex-col gap-3 shrink-0">
                  <Link
                    href="/centre-d-aide/guides/comment-installer-atlas-pro-sur-fire-tv-stick/"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-white bg-[#1E7BFF] hover:bg-[#2D9CFF] glow-primary transition-all"
                  >
                    <span>Guide Fire TV Stick</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/centre-d-aide/guides/installer-atlas-pro-box-android-google-tv/"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-white bg-[#0A1428] hover:bg-[#0E1E38] border border-[#1A2A4A] transition-all"
                  >
                    <span>Guide Android TV &amp; Box</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Additional helpful links */}
              <div className="pt-6 border-t border-[#1A2A4A] flex flex-wrap gap-4 text-xs text-[#9FB0CC]">
                <span className="font-semibold text-white">Autres guides associés :</span>
                <Link href="/centre-d-aide/guides/comment-configurer-iptv-smarters-pro/" className="hover:text-white underline transition-colors">
                  Configuration IPTV Smarters Pro
                </Link>
                <span>•</span>
                <Link href="/centre-d-aide/guides/comment-configurer-ibo-player-pro/" className="hover:text-white underline transition-colors">
                  Configuration IBO Player Pro
                </Link>
                <span>•</span>
                <Link href="/centre-d-aide/guides/" className="hover:text-white underline transition-colors">
                  Tous les guides &amp; tutoriels
                </Link>
              </div>

              <div className="p-4 rounded-xl bg-[#060E1F]/90 border border-[#1A2A4A] text-xs text-[#9FB0CC] flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <p>
                  <strong>Transparence légale &amp; technique :</strong> Notre site ne distribue aucun binaire non vérifié ni package exécutable pirate. IPTV Smarters Pro s&apos;installe via l&apos;App Store officiel d&apos;Apple, les installateurs officiels Windows de l&apos;éditeur ou l&apos;application Downloader sous votre responsabilité.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 6. FAQ TECHNIQUE */}
        <section className="py-12 md:py-16 bg-[#060E1F]/60 border-t border-[#1A2A4A]/50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div>
              <span className="text-xs font-bold text-[#1E7BFF] uppercase tracking-wider">Questions Fréquentes</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                Foire Aux Questions : IPTV Smarters Pro
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {faqItems.map((item, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-[#0A1428] border border-[#1A2A4A] space-y-2.5">
                  <h3 className="text-base font-bold text-white flex items-start gap-2">
                    <HelpCircle className="w-5 h-5 text-[#1E7BFF] mt-0.5 shrink-0" />
                    <span>{item.q}</span>
                  </h3>
                  <p className="text-sm text-[#9FB0CC] leading-relaxed pl-7">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. CTA FINAL ABONNEMENT COMPATIBLE */}
        <section className="py-16 md:py-20 glow-stadium border-t border-[#1A2A4A]/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <span className="px-3.5 py-1.5 rounded-full text-xs font-bold text-white bg-[#0A1428] border border-[#1E7BFF]">
              SERVEURS HAUT DÉBIT COMPATIBLES
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Associez IPTV Smarters Pro à l&apos;infrastructure <span className="gradient-text-blue">Atlas Pro</span>
            </h2>
            <p className="text-base text-[#9FB0CC] max-w-2xl mx-auto leading-relaxed">
              Bénéficiez de vos identifiants Xtream Codes haute performance pour IPTV Smarters Pro avec zapping instantané, flux 4K 50 FPS et EPG complet.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/abonnement-atlas-pro-12-mois/"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-bold text-white bg-[#1E7BFF] hover:bg-[#2D9CFF] glow-primary transition-all"
              >
                <span>Découvrir l&apos;abonnement 12 mois</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/centre-d-aide/guides/"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-semibold text-white bg-[#0A1428] hover:bg-[#0E1E38] border border-[#1A2A4A] transition-all"
              >
                <BookOpen className="w-5 h-5" />
                <span>Tous nos tutoriels d&apos;aide</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <StickyCTA
        title="Obtenez vos identifiants Xtream Codes"
        buttonText="Abonnement 1 an (39,99 €)"
        href="/abonnement-atlas-pro-12-mois/"
      />
      <Footer />
    </div>
  );
}
