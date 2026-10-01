import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { StickyCTA } from "@/components/StickyCTA";
import { RelatedGuides } from "@/components/RelatedGuides";
import { CheckCircle2, Tv, ArrowRight } from "lucide-react";

export function generateMetadata(): Metadata {
  return {
    title: "Installer Atlas Pro sur Chromecast : Guide Complet 2026",
    description:
      "Comment installer et utiliser Atlas Pro sur Google Chromecast ou Chromecast with Google TV. Diffusez vos chaînes 4K Atlas Pro ONTV sur votre TV via Chromecast en 5 étapes.",
    keywords:
      "atlas pro chromecast, installer atlas pro sur chromecast, atlas pro sur chromecast, comment installer atlas pro ontv sur chromecast, télécharger atlas pro sur chromecast",
    alternates: {
      canonical: "https://iboatlaspro.com/centre-d-aide/installation/chromecast/",
    },
  };
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Comment installer Atlas Pro sur Chromecast ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pour Chromecast with Google TV : ouvrez le Play Store depuis votre Chromecast, recherchez 'Atlas Pro ONTV' ou 'IPTV Smarters Pro', installez-le, puis entrez vos identifiants Atlas Pro. Pour un Chromecast classique (sans Google TV), utilisez l'application Cast depuis votre smartphone.",
      },
    },
    {
      "@type": "Question",
      name: "Atlas Pro est-il compatible avec Chromecast ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui. Atlas Pro est compatible avec Chromecast with Google TV (4K et HD). Pour les anciens modèles Chromecast sans OS, utilisez la fonction Cast depuis IPTV Smarters Pro sur votre smartphone Android ou iPhone.",
      },
    },
    {
      "@type": "Question",
      name: "Quelle application IPTV utiliser sur Chromecast avec Google TV ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sur Chromecast with Google TV, nous recommandons Atlas Pro ONTV (code Downloader : 782914) ou IPTV Smarters Pro, tous deux disponibles sur le Google Play Store intégré.",
      },
    },
  ],
};

const relatedGuides = [
  {
    title: "Installation sur Smart TV Samsung & LG",
    href: "/centre-d-aide/installation/smart-tv/",
    description: "Guide complet pour Smart TV Tizen et webOS.",
    badge: "Smart TV",
  },
  {
    title: "Installation sur iPhone & iPad (iOS)",
    href: "/centre-d-aide/installation/iphone-ios/",
    description: "Configurez Atlas Pro sur votre iPhone ou iPad via IPTV Smarters.",
    badge: "iOS",
  },
  {
    title: "Installation sur PC Windows",
    href: "/centre-d-aide/installation/pc-windows/",
    description: "Regardez Atlas Pro sur votre ordinateur Windows.",
    badge: "Windows",
  },
];

export default function ChromecastInstallPage() {
  const breadcrumbItems = [
    { label: "Centre d'aide", href: "/centre-d-aide/" },
    { label: "Installation", href: "/centre-d-aide/installation/" },
    { label: "Chromecast", href: "/centre-d-aide/installation/chromecast/" },
  ];

  const steps = [
    {
      num: "1",
      title: "Identifiez votre modèle Chromecast",
      body: "Chromecast with Google TV (télécommande incluse) : vous avez un vrai système Android TV — suivez les étapes ci-dessous. Chromecast classique (sans télécommande) : utilisez la fonction Cast depuis votre smartphone.",
    },
    {
      num: "2",
      title: "Ouvrez le Google Play Store sur Chromecast with Google TV",
      body: "Depuis l'interface Google TV, naviguez vers Recherche > tapez « Atlas Pro ONTV » ou « IPTV Smarters Pro ». Sélectionnez l'application et cliquez Installer.",
    },
    {
      num: "3",
      title: "Alternative : Utilisez Downloader pour Atlas Pro ONTV",
      body: "Installez l'application Downloader depuis le Play Store. Entrez le code 782914 pour accéder directement au fichier APK officiel Atlas Pro ONTV.",
    },
    {
      num: "4",
      title: "Entrez vos identifiants Atlas Pro",
      body: "Au lancement de l'application, sélectionnez « Xtream Codes API ». Renseignez l'URL serveur, votre nom d'utilisateur et mot de passe reçus par e-mail depuis iboatlaspro.com.",
    },
    {
      num: "5",
      title: "Pour Chromecast classique : utilisez Cast",
      body: "Sur votre smartphone, ouvrez IPTV Smarters Pro, lancez une chaîne, puis appuyez sur l'icône Cast (carré avec Wi-Fi). Sélectionnez votre Chromecast dans la liste pour diffuser sur TV.",
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
              GUIDE OFFICIEL CHROMECAST
            </span>
            <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Installer{" "}
              <span className="gradient-text-blue">Atlas Pro sur Chromecast</span>
            </h1>
            <p className="mt-4 text-base text-[#9FB0CC] leading-relaxed max-w-2xl mx-auto">
              Guide 2026 pour configurer Atlas Pro ONTV sur votre Google Chromecast with Google TV ou diffuser
              via Cast depuis votre smartphone.
            </p>
          </header>

          <div className="space-y-4 text-sm sm:text-base text-white/90 leading-relaxed">
            {/* Model selector callout */}
            <div className="p-5 rounded-2xl bg-[#0E1C38]/80 border border-[#1E7BFF]/40">
              <div className="flex items-start gap-3">
                <Tv className="w-5 h-5 text-[#1E7BFF] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-bold text-white mb-1">Quel modèle Chromecast avez-vous ?</p>
                  <ul className="text-xs text-[#9FB0CC] space-y-1">
                    <li>
                      <strong className="text-white">Chromecast with Google TV</strong> (2020 ou 2023) — télécommande incluse → suivez les étapes 1 à 4
                    </li>
                    <li>
                      <strong className="text-white">Chromecast classique</strong> (1ère, 2ème, 3ème gen) — pas de télécommande → suivez l&apos;étape 5
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {steps.map((step) => (
              <div
                key={step.num}
                className="p-6 rounded-2xl bg-[#0A1428] border border-[#1A2A4A] flex gap-5 items-start"
              >
                <div className="w-9 h-9 rounded-full bg-[#1E7BFF] flex items-center justify-center text-white font-extrabold text-sm flex-shrink-0">
                  {step.num}
                </div>
                <div className="space-y-1.5">
                  <h2 className="text-base font-bold text-white flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#22C55E] flex-shrink-0" />
                    {step.title}
                  </h2>
                  <p className="text-[#9FB0CC] text-xs sm:text-sm">{step.body}</p>
                </div>
              </div>
            ))}

            {/* CTA bridge */}
            <div className="my-8 p-8 rounded-2xl bg-gradient-to-r from-[#0A1428] to-[#0E1C38] border border-[#1E7BFF] text-center space-y-4">
              <h3 className="text-xl font-bold text-white">
                Pas encore d&apos;abonnement Atlas Pro pour votre Chromecast ?
              </h3>
              <p className="text-xs sm:text-sm text-[#9FB0CC] max-w-xl mx-auto">
                Commandez votre accès 12 mois et recevez vos identifiants en moins de 15 minutes.
              </p>
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
            title="Autres Guides d'Installation"
            subtitle="Atlas Pro est compatible avec tous vos appareils connectés."
            guides={relatedGuides}
          />
        </article>
      </main>

      <StickyCTA
        title="Abonnement Atlas Pro pour Chromecast"
        buttonText="Commander l'accès"
        href="/abonnement-atlas-pro-12-mois/"
      />
      <Footer />
    </div>
  );
}
