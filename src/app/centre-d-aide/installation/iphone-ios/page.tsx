import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { StickyCTA } from "@/components/StickyCTA";
import { RelatedGuides } from "@/components/RelatedGuides";
import { CheckCircle2, Smartphone, ArrowRight } from "lucide-react";

export function generateMetadata(): Metadata {
  return {
    title: "Comment Installer Atlas Pro sur iPhone & iPad (iOS) : Guide 2026",
    description:
      "Tutoriel complet pour installer Atlas Pro sur iPhone et iPad. Téléchargez Atlas Pro ONTV ou IPTV Smarters Pro depuis l'App Store iOS et configurez votre abonnement en 5 minutes.",
    keywords:
      "atlas pro iphone, installer atlas pro sur iphone, atlas pro ios, atlas pro ipad, atlas pro pour iphone, atlas pro sur iphone, comment installer atlas pro sur iphone, atlas pro ios app",
    alternates: {
      canonical: "https://iboatlaspro.com/centre-d-aide/installation/iphone-ios/",
    },
  };
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Comment installer Atlas Pro sur iPhone ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pour installer Atlas Pro sur iPhone : ouvrez l'App Store, recherchez 'IPTV Smarters Pro' ou 'Atlas Pro ONTV', installez l'application, puis entrez votre URL de serveur et vos identifiants Atlas Pro fournis par iboatlaspro.com après commande.",
      },
    },
    {
      "@type": "Question",
      name: "Atlas Pro est-il disponible sur l'App Store iOS ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Atlas Pro ONTV n'est pas toujours disponible directement sur l'App Store iOS selon votre région. L'alternative recommandée sur iPhone et iPad est IPTV Smarters Pro, compatible avec tous les abonnements Atlas Pro via Xtream Codes.",
      },
    },
    {
      "@type": "Question",
      name: "Atlas Pro fonctionne-t-il sur iPad ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui. Atlas Pro fonctionne parfaitement sur iPad via IPTV Smarters Pro ou GSE Smart IPTV. Entrez vos identifiants Xtream Codes Atlas Pro pour accéder à toutes vos chaînes en 4K/FHD.",
      },
    },
    {
      "@type": "Question",
      name: "Pourquoi Atlas Pro ne fonctionne plus sur mon iPhone ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Si Atlas Pro ne fonctionne plus sur iPhone, vérifiez : 1) votre abonnement n'est pas expiré, 2) votre connexion Wi-Fi est active, 3) changez vos DNS vers 8.8.8.8, 4) désinstallez et réinstallez l'application.",
      },
    },
  ],
};

const relatedGuides = [
  {
    title: "Installation sur Smart TV Samsung & LG",
    href: "/centre-d-aide/installation/smart-tv/",
    description: "Installez Atlas Pro IBO ou IPTV Smarters sur votre téléviseur connecté.",
    badge: "Smart TV",
  },
  {
    title: "Installation sur Amazon Fire TV Stick",
    href: "/centre-d-aide/installation/fire-tv-stick/",
    description: "Guide pas-à-pas pour Fire Stick 4K avec le code Downloader.",
    badge: "Fire Stick",
  },
  {
    title: "Installation sur Chromecast",
    href: "/centre-d-aide/installation/chromecast/",
    description: "Diffusez Atlas Pro sur votre TV via Google Chromecast.",
    badge: "Chromecast",
  },
];

export default function IphoneIosInstallPage() {
  const breadcrumbItems = [
    { label: "Centre d'aide", href: "/centre-d-aide/" },
    { label: "Installation", href: "/centre-d-aide/installation/" },
    { label: "iPhone & iPad (iOS)", href: "/centre-d-aide/installation/iphone-ios/" },
  ];

  const steps = [
    {
      num: "1",
      title: "Ouvrez l'App Store sur votre iPhone ou iPad",
      body: "Appuyez sur l'icône App Store (fond bleu). Assurez-vous d'être connecté à votre identifiant Apple.",
    },
    {
      num: "2",
      title: "Recherchez IPTV Smarters Pro",
      body: "Dans la barre de recherche, tapez « IPTV Smarters Pro » et installez l'application. C'est le lecteur recommandé pour Atlas Pro sur iOS — entièrement gratuit au téléchargement.",
    },
    {
      num: "3",
      title: "Choisissez « Xtream Codes API »",
      body: "Au premier lancement, sélectionnez le mode de connexion « Xtream Codes API ». Ne choisissez pas M3U URL si vous avez reçu un code Atlas Pro.",
    },
    {
      num: "4",
      title: "Entrez vos identifiants Atlas Pro",
      body: "Renseignez l'URL du serveur, votre nom d'utilisateur et votre mot de passe exactement comme fournis dans votre e-mail de confirmation iboatlaspro.com. Respectez la casse.",
    },
    {
      num: "5",
      title: "Chargez vos chaînes et profitez",
      body: "L'application charge automatiquement toutes vos chaînes, bouquets et VOD en quelques secondes. Votre abonnement Atlas Pro est actif sur iPhone.",
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
              GUIDE OFFICIEL iOS
            </span>
            <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Installer{" "}
              <span className="gradient-text-blue">Atlas Pro sur iPhone & iPad</span>
            </h1>
            <p className="mt-4 text-base text-[#9FB0CC] leading-relaxed max-w-2xl mx-auto">
              Guide complet 2026 pour configurer votre abonnement Atlas Pro sur iOS en moins de 5 minutes.
              Compatible iPhone 12 et versions ultérieures, iPad et iPod Touch.
            </p>
          </header>

          <div className="space-y-4 text-sm sm:text-base text-white/90 leading-relaxed">
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

            {/* App Store note */}
            <div className="p-5 rounded-2xl bg-[#060E1F] border border-[#1A2A4A]">
              <p className="text-xs text-[#9FB0CC] leading-relaxed">
                <strong className="text-white">Note :</strong> Si vous ne trouvez pas Atlas Pro ONTV sur l&apos;App Store de votre région,
                utilisez <strong className="text-white">IPTV Smarters Pro</strong> ou <strong className="text-white">GSE Smart IPTV</strong> — tous deux
                100 % compatibles avec votre abonnement Atlas Pro via Xtream Codes.
              </p>
            </div>

            {/* CTA bridge */}
            <div className="my-8 p-8 rounded-2xl bg-gradient-to-r from-[#0A1428] to-[#0E1C38] border border-[#1E7BFF] text-center space-y-4">
              <h3 className="text-xl font-bold text-white">
                Vous n&apos;avez pas encore d&apos;abonnement Atlas Pro pour votre iPhone ?
              </h3>
              <p className="text-xs sm:text-sm text-[#9FB0CC] max-w-xl mx-auto">
                Commandez votre abonnement 12 mois et recevez vos identifiants iOS-compatibles en moins de 15 minutes.
              </p>
              <Link
                href="/abonnement-atlas-pro/12-mois/"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-bold text-white bg-[#1E7BFF] hover:bg-[#2D9CFF] glow-primary transition-all"
              >
                <Smartphone className="w-4 h-4" />
                <span>Commander l&apos;abonnement 12 mois (39,99 €)</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <RelatedGuides
            title="Autres Guides d'Installation"
            subtitle="Utilisez Atlas Pro sur tous vos appareils avec nos tutoriels dédiés."
            guides={relatedGuides}
          />
        </article>
      </main>

      <StickyCTA
        title="Abonnement Atlas Pro pour iPhone & iPad"
        buttonText="Commander l'accès iOS"
        href="/abonnement-atlas-pro/12-mois/"
      />
      <Footer />
    </div>
  );
}
