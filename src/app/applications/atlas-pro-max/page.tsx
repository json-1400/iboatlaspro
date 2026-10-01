import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { StickyCTA } from "@/components/StickyCTA";
import {
  BookOpen,
  ShieldCheck,
  Zap,
  ArrowRight,
  Check,
  Smartphone,
  Tv,
  HelpCircle,
  Lock,
} from "lucide-react";

export function generateMetadata(): Metadata {
  return {
    title: "Guide Installation Atlas Pro Max (v5.0.1) : Code Downloader Officiel 2026",
    description:
      "Guide pas-à-pas pour installer Atlas Pro Max v5.0.1 sur Android TV, Fire TV Stick et Box via le code Downloader 614920. Tutoriel sécurisé sans virus.",
    keywords:
      "atlas pro max, code downloader atlas pro max, installer atlas pro max, tutoriel atlas pro max, application atlas pro max 2026",
    alternates: {
      canonical: "https://iboatlaspro.com/applications/atlas-pro-max/",
    },
    openGraph: {
      title: "Guide Installation Atlas Pro Max (v5.0.1) — Code Downloader Officiel 2026",
      description:
        "Tutoriel de configuration rapide pour abonnés Atlas Pro. Installez facilement Atlas Pro Max v5.0.1 avec l'application Downloader.",
      url: "https://iboatlaspro.com/applications/atlas-pro-max/",
      type: "website",
      locale: "fr_FR",
    },
  };
}

const maxFaqSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      "@id": "https://iboatlaspro.com/applications/atlas-pro-max/#software",
      name: "Atlas Pro Max",
      operatingSystem: "Android, Android TV, FireOS",
      applicationCategory: "MultimediaApplication",
      softwareVersion: "5.0.1 Stable 2026",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "EUR",
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://iboatlaspro.com/applications/atlas-pro-max/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Quelle est la différence entre Atlas Pro Max et Atlas Pro ONTV ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Atlas Pro Max intègre un moteur de décodage vidéo de nouvelle génération (v5.0.1) optimisé pour les flux 4K 50 FPS et les appareils récents, avec un buffer adaptatif amélioré contre les ralentissements.",
          },
        },
        {
          "@type": "Question",
          name: "Quel est le code Downloader pour installer Atlas Pro Max sur Fire TV ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Utilisez le code Downloader officiel 614920 dans l'application Downloader de votre Fire Stick ou Android TV pour lancer le téléchargement immédiat de l'APK.",
          },
        },
        {
          "@type": "Question",
          name: "L'application Atlas Pro Max est-elle gratuite ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Oui, l'installation de l'application Atlas Pro Max est gratuite. Pour accéder aux flux TV et VOD, vous devez renseigner votre code d'abonnement officiel Atlas Pro 12 mois.",
          },
        },
      ],
    },
  ],
};

export default function AtlasProMaxDownloadPage() {
  const breadcrumbItems = [
    { label: "Accueil", href: "/" },
    { label: "Applications", href: "/applications/" },
    { label: "Guide Atlas Pro Max", href: "/applications/atlas-pro-max/" },
  ];

  const features = [
    "Moteur de lecture Ultra HD 4K & Full HD 50 FPS optimisé",
    "Buffer adaptatif automatique anti-coupure et anti-freeze",
    "Guide électronique des programmes (EPG) dynamique avec Replay",
    "Support du son multi-canal Dolby Digital Plus",
    "Compatible Android TV, Fire TV Stick, Box Android et Smartphones",
    "Prise en charge intégrale des codes 12 chiffres et Xtream API",
  ];

  const versionHistory = [
    { version: "v5.0.1 (Recommandée)", date: "Janvier 2026", note: "Optimisation mémoire 4K et correction zapping" },
    { version: "v4.0.2 Stable", date: "Septembre 2025", note: "Amélioration compatibilité Fire TV OS 8" },
    { version: "v4.0.1", date: "Mai 2025", note: "Support EPG étendu 7 jours" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#040A17] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(maxFaqSchema) }}
      />
      <Navbar />

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
          <Breadcrumbs items={breadcrumbItems} />
        </div>

        <section className="py-12 md:py-20 relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="px-3.5 py-1.5 rounded-full text-xs font-bold text-white bg-[#0A1428] border border-[#1E7BFF] shadow-[0_0_20px_rgba(30,123,255,0.3)]">
                GUIDE OFFICIEL DE CONFIGURATION
              </span>
              <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                Installer <span className="text-[#1E7BFF]">Atlas Pro Max</span> sur TV & Box
              </h1>
              <p className="mt-3 text-sm sm:text-base text-[#9FB0CC] leading-relaxed">
                Configurez facilement l&apos;application <strong className="text-white">Atlas Pro Max (v5.0.1)</strong> sur
                vos téléviseurs et boîtiers Android TV & Fire TV Stick grâce au code Downloader sécurisé.
              </p>
            </div>

            <div className="p-6 sm:p-10 rounded-2xl bg-[#0A1428] border border-[#1A2A4A] space-y-8 shadow-[0_0_40px_rgba(30,123,255,0.15)]">
              {/* Downloader Code Box */}
              <div className="p-6 rounded-xl bg-[#060E1F] border-2 border-[#1E7BFF]/70 text-center space-y-2">
                <span className="text-xs font-semibold text-[#9FB0CC] uppercase tracking-wider">
                  Installation rapide sur Amazon Fire Stick & Android TV via Downloader :
                </span>
                <div className="text-4xl sm:text-5xl font-mono font-extrabold text-[#22C55E] tracking-wider">
                  614920
                </div>
                <p className="text-xs text-[#9FB0CC]">
                  Ouvrez l&apos;application Downloader, saisissez ce code à 6 chiffres et cliquez sur &laquo; Go &raquo;.
                </p>
              </div>

              {/* Guide CTA & Disclaimer */}
              <div className="text-center space-y-4">
                <a
                  href="#guide-installation"
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-base font-bold text-white bg-[#1E7BFF] hover:bg-[#2D9CFF] shadow-[0_0_30px_rgba(30,123,255,0.4)] transition-all"
                >
                  <BookOpen className="w-5 h-5" />
                  <span>Consulter le guide pas-à-pas</span>
                </a>
                <div className="p-4 rounded-xl bg-[#060E1F]/80 border border-[#1A2A4A] text-left text-xs text-[#9FB0CC] space-y-1.5">
                  <p className="font-semibold text-white flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    Transparence & Sécurité
                  </p>
                  <p>
                    Ce site ne stocke ni ne distribue directement aucun fichier exécutable (.apk). L&apos;accès s&apos;effectue de manière autonome et sécurisée depuis l&apos;application officielle Downloader (disponible sur Amazon Appstore et Google Play) via le code <strong>614920</strong>.
                  </p>
                </div>
              </div>

              {/* Install Instructions */}
              <div id="guide-installation" className="pt-6 border-t border-[#1A2A4A] space-y-3">
                <h2 className="text-lg font-bold text-white">
                  Guide d&apos;installation étape par étape :
                </h2>
                <ol className="list-decimal list-inside space-y-2.5 text-xs sm:text-sm text-[#9FB0CC] leading-relaxed">
                  <li>Activez les &laquo; Sources inconnues &raquo; dans les paramètres développeur de votre appareil.</li>
                  <li>Installez l&apos;application gratuite &laquo; Downloader &raquo; depuis l&apos;Amazon Appstore ou Google Play.</li>
                  <li>Entrez le code <strong>614920</strong> dans le champ de recherche et validez.</li>
                  <li>Une fois l&apos;APK téléchargé, cliquez sur &laquo; Installer &raquo;.</li>
                  <li>Lancez l&apos;application et connectez-vous avec votre code d&apos;abonnement officiel Atlas Pro.</li>
                </ol>
                <div className="pt-2 flex items-center gap-2 text-xs text-[#1E7BFF]">
                  <Link
                    href="/centre-d-aide/installation/fire-tv-stick/"
                    className="hover:underline flex items-center gap-1 font-semibold"
                  >
                    Voir le tutoriel complet Fire TV Stick <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Version History Table */}
              <div className="pt-6 border-t border-[#1A2A4A]">
                <h2 className="text-base font-bold text-white mb-3">
                  Historique des versions Atlas Pro Max :
                </h2>
                <div className="divide-y divide-[#1A2A4A] text-xs">
                  {versionHistory.map((item) => (
                    <div key={item.version} className="py-2.5 flex items-center justify-between gap-4">
                      <div>
                        <span className="font-bold text-white">{item.version}</span>
                        <span className="text-[#9FB0CC] ml-2">({item.date})</span>
                      </div>
                      <span className="text-[#9FB0CC] text-right">{item.note}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Commercial Bridge Card */}
            <div className="mt-10 p-6 rounded-2xl bg-[#060E1F] border border-[#1E7BFF]/50 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
              <div>
                <span className="text-xs font-bold text-[#1E7BFF] uppercase tracking-wider">
                  BESOIN D&apos;UN CODE D&apos;ACTIVATION ?
                </span>
                <h3 className="mt-1 text-base sm:text-lg font-bold text-white">
                  Abonnement Atlas Pro 12 Mois Officiel
                </h3>
                <p className="text-xs text-[#9FB0CC] mt-0.5">
                  Accès débridé à +10 000 chaînes 4K sans coupure pour 39,99 € par an.
                </p>
              </div>
              <Link
                href="/abonnement-atlas-pro-12-mois/"
                className="px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#1E7BFF] hover:bg-[#2D9CFF] flex-shrink-0"
              >
                Commander mon code
              </Link>
            </div>
          </div>
        </section>
      </main>

      <StickyCTA />
      <Footer />
    </div>
  );
}
