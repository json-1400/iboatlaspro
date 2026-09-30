import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { StickyCTA } from "@/components/StickyCTA";
import { RelatedGuides } from "@/components/RelatedGuides";
import { CheckCircle2, Monitor, ArrowRight } from "lucide-react";

export function generateMetadata(): Metadata {
  return {
    title: "Installer Atlas Pro sur PC Windows & Mac : Guide Complet 2026",
    description:
      "Comment regarder Atlas Pro sur PC Windows et Mac. Téléchargez IPTV Smarters Pro ou utilisez un émulateur Android. Configuration Xtream Codes Atlas Pro étape par étape.",
    keywords:
      "atlas pro windows, atlas pro pc, atlas pro pour pc, atlas pro sur pc, atlas pro ontv windows, atlas pro max windows, atlas pro pour windows, atlas pro pc windows, atlas pro mac",
    alternates: {
      canonical: "https://iboatlaspro.com/centre-d-aide/installation/pc-windows/",
    },
  };
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Comment installer Atlas Pro sur PC Windows ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pour regarder Atlas Pro sur PC Windows, téléchargez IPTV Smarters Pro pour Windows sur le site officiel, installez-le, puis entrez vos identifiants Xtream Codes Atlas Pro (URL serveur, nom d'utilisateur, mot de passe) reçus depuis iboatlaspro.com.",
      },
    },
    {
      "@type": "Question",
      name: "Atlas Pro fonctionne-t-il sur Mac ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui. Sur Mac, utilisez IPTV Smarters Pro (disponible sur le Mac App Store) ou installez un émulateur Android comme Bluestacks pour lancer Atlas Pro ONTV. Entrez vos identifiants Xtream Codes Atlas Pro pour vous connecter.",
      },
    },
    {
      "@type": "Question",
      name: "Quelle est la meilleure application Atlas Pro pour Windows ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "IPTV Smarters Pro pour Windows est la solution recommandée pour Atlas Pro sur PC. Gratuit au téléchargement, compatible avec tous les abonnements Atlas Pro via Xtream Codes, et disponible en version Windows 10/11.",
      },
    },
    {
      "@type": "Question",
      name: "Atlas Pro ONTV est-il disponible sur Windows ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Atlas Pro ONTV n'a pas de version native Windows. Pour PC, utilisez IPTV Smarters Pro ou installez Bluestacks (émulateur Android) puis téléchargez l'APK Atlas Pro ONTV depuis le site officiel.",
      },
    },
  ],
};

const relatedGuides = [
  {
    title: "Installation sur iPhone & iPad (iOS)",
    href: "/centre-d-aide/installation/iphone-ios/",
    description: "Guide complet pour configurer Atlas Pro sur iOS.",
    badge: "iOS",
  },
  {
    title: "Installation sur Android TV",
    href: "/centre-d-aide/installation/android-tv/",
    description: "Nvidia Shield, Mi Box et Android TV box.",
    badge: "Android",
  },
  {
    title: "IPTV Smarters Pro",
    href: "/applications/iptv-smarters-pro/",
    description: "Téléchargez IPTV Smarters Pro pour Windows, Mac et toutes plateformes.",
    badge: "Multi-plateforme",
  },
];

export default function PcWindowsInstallPage() {
  const breadcrumbItems = [
    { label: "Centre d'aide", href: "/centre-d-aide/" },
    { label: "Installation", href: "/centre-d-aide/installation/" },
    { label: "PC Windows & Mac", href: "/centre-d-aide/installation/pc-windows/" },
  ];

  const methods = [
    {
      label: "MÉTHODE 1 — RECOMMANDÉE",
      title: "IPTV Smarters Pro pour Windows",
      color: "[#22C55E]",
      steps: [
        "Rendez-vous sur le site officiel IPTV Smarters et téléchargez la version Windows.",
        "Installez le fichier .exe et lancez l'application.",
        "Sélectionnez « Login with Xtream Codes API ».",
        "Entrez vos identifiants Atlas Pro reçus par e-mail : URL serveur, nom d'utilisateur, mot de passe.",
        "Cliquez « Add User » — toutes vos chaînes et VOD Atlas Pro se chargent automatiquement.",
      ],
    },
    {
      label: "MÉTHODE 2 — ALTERNATIVE",
      title: "Bluestacks + APK Atlas Pro ONTV",
      color: "[#1E7BFF]",
      steps: [
        "Téléchargez et installez Bluestacks 5 (émulateur Android) sur bluestacks.com.",
        "Dans Bluestacks, rendez-vous sur notre page /applications/atlas-pro-ontv/ pour copier le code Downloader.",
        "Installez Atlas Pro ONTV APK via l'explorateur de fichiers Bluestacks.",
        "Lancez Atlas Pro ONTV, entrez votre code d'abonnement Atlas Pro.",
      ],
    },
    {
      label: "MÉTHODE 3 — Mac uniquement",
      title: "IPTV Smarters Pro sur Mac App Store",
      color: "[#9FB0CC]",
      steps: [
        "Ouvrez le Mac App Store depuis votre Dock.",
        "Recherchez « IPTV Smarters Pro » et installez l'application.",
        "Entrez vos identifiants Xtream Codes Atlas Pro et profitez de vos chaînes en 4K.",
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#040A17] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbItems} />
        </div>

        <article className="py-12 md:py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="text-center mb-12">
            <span className="px-3.5 py-1.5 rounded-full text-xs font-bold text-white bg-[#0A1428] border border-[#1E7BFF]">
              GUIDE OFFICIEL PC & MAC
            </span>
            <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Installer{" "}
              <span className="gradient-text-blue">Atlas Pro sur PC Windows & Mac</span>
            </h1>
            <p className="mt-4 text-base text-[#9FB0CC] leading-relaxed max-w-2xl mx-auto">
              Regardez toutes vos chaînes Atlas Pro sur votre ordinateur Windows 10/11 ou Mac grâce à
              IPTV Smarters Pro — compatible et gratuit.
            </p>
          </header>

          <div className="space-y-6 text-sm sm:text-base text-white/90 leading-relaxed">
            {methods.map((method) => (
              <div key={method.label} className="p-6 rounded-2xl bg-[#0A1428] border border-[#1A2A4A] space-y-4">
                <div className="flex items-center gap-3">
                  <Monitor className={`w-5 h-5 text-${method.color}`} />
                  <div>
                    <span className={`text-[10px] font-bold text-${method.color} uppercase tracking-wider`}>
                      {method.label}
                    </span>
                    <h2 className="text-lg font-bold text-white">{method.title}</h2>
                  </div>
                </div>
                <ol className="space-y-2 list-none">
                  {method.steps.map((step, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className={`w-5 h-5 rounded-full bg-${method.color}/20 text-${method.color} flex items-center justify-center text-[10px] font-bold flex-shrink-0 mt-0.5`}>
                        {i + 1}
                      </span>
                      <span className="text-[#9FB0CC] text-xs sm:text-sm">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            ))}

            {/* CTA bridge */}
            <div className="my-8 p-8 rounded-2xl bg-gradient-to-r from-[#0A1428] to-[#0E1C38] border border-[#1E7BFF] text-center space-y-4">
              <h3 className="text-xl font-bold text-white">
                Pas encore d&apos;abonnement Atlas Pro pour votre PC ?
              </h3>
              <p className="text-xs sm:text-sm text-[#9FB0CC] max-w-xl mx-auto">
                Recevez vos identifiants Xtream Codes en moins de 15 minutes après commande.
              </p>
              <Link
                href="/abonnement-atlas-pro/12-mois/"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-bold text-white bg-[#1E7BFF] hover:bg-[#2D9CFF] glow-primary transition-all"
              >
                <span>Commander l&apos;abonnement 12 mois PC (39,99 €)</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <RelatedGuides
            title="Autres Guides d'Installation"
            subtitle="Installez Atlas Pro sur tous vos appareils."
            guides={relatedGuides}
          />
        </article>
      </main>

      <StickyCTA
        title="Atlas Pro sur PC Windows & Mac"
        buttonText="Commander l'accès"
        href="/abonnement-atlas-pro/12-mois/"
      />
      <Footer />
    </div>
  );
}
