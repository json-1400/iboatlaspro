import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { StickyCTA } from "@/components/StickyCTA";
import { constructMetadata } from "@/lib/seo";
import {
  BookOpen,
  ShieldCheck,
  Zap,
  ArrowRight,
  Tv,
  HelpCircle,
  Smartphone,
  Flame,
} from "lucide-react";

export function generateMetadata(): Metadata {
  return constructMetadata({
    title: "Guide Installation IBO Player Pro : Code Downloader (2026)",
    description:
      "Guide d'installation officiel IBO Player Pro pour Android TV et Fire Stick. Utilisez le code Downloader 492015 pour une configuration rapide et sécurisée en 4K.",
    path: "/applications/atlas-pro-ibo/",
  });
}

export default function AtlasProIboDownloadPage() {
  const breadcrumbItems = [
    { label: "Applications", href: "/applications/" },
    { label: "Guide IBO Player Pro", href: "/applications/atlas-pro-ibo/" },
  ];

  const stepsDownloader = [
    {
      num: "1",
      title: "Installez l'application Downloader",
      desc: "Sur votre Amazon Fire TV Stick ou Android TV, ouvrez le store d'applications et installez l'application gratuite 'Downloader' (icône orange).",
    },
    {
      num: "2",
      title: "Autorisez les sources inconnues",
      desc: "Dans les Paramètres de votre TV > Appareil > Options pour développeurs, activez l'autorisation pour l'application Downloader.",
    },
    {
      num: "3",
      title: "Saisissez le code Downloader : 492015",
      desc: "Ouvrez Downloader, entrez simplement le code numérique 492015 dans la barre d'URL et cliquez sur 'Go'. Le téléchargement de l'APK démarre automatiquement.",
    },
    {
      num: "4",
      title: "Installez et ouvrez IBO Player Pro",
      desc: "Cliquez sur 'Installer', puis 'Ouvrir'. Votre adresse MAC s'affiche pour activer votre lecteur et charger votre abonnement Atlas Pro 12 Mois.",
    },
  ];

  const faqItems = [
    {
      q: "Quel est le code Downloader officiel pour IBO Player Pro APK ?",
      a: "Le code Downloader officiel et sécurisé pour télécharger directement IBO Player Pro APK sur Fire TV Stick et Android TV est 492015. Il pointe vers la dernière version stable sans publicité.",
    },
    {
      q: "L'APK IBO Player Pro est-il compatible avec tous les boîtiers Android TV ?",
      a: "Oui. L'APK est 100% compatible avec Amazon Fire TV Stick (Lite, 4K, Max, Cube), Nvidia Shield TV, Xiaomi Mi Box & Mi TV Stick, Chromecast avec Google TV et toutes les Smart TV sous Android TV (Sony, Philips, TCL).",
    },
    {
      q: "Comment activer et injecter mes chaînes après avoir installé l'APK ?",
      a: "Dès l'installation terminée, notez votre adresse MAC et votre Device Key. Activez l'application sur le portail officiel ou commandez directement votre abonnement Atlas Pro 12 Mois pour recevoir votre playlist 4K.",
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        name: "IBO Player Pro APK",
        operatingSystem: "Android TV, Fire OS",
        applicationCategory: "MultimediaApplication",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "EUR",
        },
        softwareVersion: "v2.8.0",
      },
      {
        "@type": "HowTo",
        name: "Comment installer IBO Player Pro APK avec le code Downloader",
        description:
          "Instructions pour télécharger et installer IBO Player Pro APK sur Fire Stick et Android TV via Downloader.",
        step: stepsDownloader.map((s) => ({
          "@type": "HowToStep",
          name: s.title,
          text: s.desc,
        })),
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

        {/* Hero Header */}
        <section className="py-12 md:py-20 glow-stadium">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold text-white bg-[#0A1428] border border-[#1E7BFF]">
                <BookOpen className="w-3.5 h-3.5 text-[#1E7BFF]" />
                GUIDE OFFICIEL DE CONFIGURATION
              </span>
              <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Installer <span className="gradient-text-blue">IBO Player Pro</span> sur TV & Fire Stick
              </h1>
              <p className="mt-3 text-sm sm:text-base text-[#9FB0CC] leading-relaxed">
                Configurez la version officielle d&apos;IBO Player Pro sur votre Amazon Fire TV Stick,
                Google TV ou Box Android TV grâce à notre code Downloader vérifié.
              </p>
            </div>

            {/* AEO Direct Answer: Code Downloader */}
            <div className="p-8 sm:p-10 rounded-3xl bg-[#0A1428] border border-[#1A2A4A] space-y-6">
              <div className="p-6 rounded-2xl bg-[#060E1F] border-2 border-[#1E7BFF] text-center space-y-3">
                <span className="text-xs font-bold text-[#38BDF8] uppercase tracking-wider block">
                  Code Downloader Officiel Fire Stick & Android TV :
                </span>
                <div className="text-5xl font-mono font-extrabold text-[#22C55E] tracking-widest">
                  492015
                </div>
                <p className="text-xs sm:text-sm text-[#9FB0CC]">
                  Saisissez ce code à 6 chiffres dans l&apos;application Downloader pour lancer la configuration.
                </p>
              </div>

              {/* Disclaimer Non-Hébergement */}
              <div className="p-4 rounded-xl bg-[#060E1F]/80 border border-[#1A2A4A] text-left text-xs text-[#9FB0CC] space-y-1.5">
                <p className="font-semibold text-white flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  Transparence & Sécurité
                </p>
                <p>
                  Ce site ne stocke ni ne distribue aucun binaire d&apos;application (.apk). L&apos;accès s&apos;effectue en toute sécurité via l&apos;application officielle Downloader (disponible sur Amazon Appstore et Google Play) à l&apos;aide du code vérifié <strong>492015</strong>.
                </p>
              </div>

              {/* Security Badges */}
              <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-[#9FB0CC] pt-2">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#22C55E]" />
                  <span>Version officielle v2.8.0 vérifiée</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Zap className="w-4 h-4 text-[#1E7BFF]" />
                  <span>Compatible Fire OS & Android TV 9 à 14</span>
                </span>
              </div>
            </div>

            {/* Step-by-Step Downloader Tutorial */}
            <div className="mt-12 space-y-6">
              <div className="text-center mb-8">
                <span className="text-xs font-bold text-[#1E7BFF] uppercase tracking-wider">
                  GUIDE D&apos;INSTALLATION
                </span>
                <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-white">
                  Comment installer l&apos;APK avec Downloader ?
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {stepsDownloader.map((s) => (
                  <div
                    key={s.num}
                    className="p-6 rounded-2xl bg-[#0A1428] border border-[#1A2A4A] space-y-3"
                  >
                    <div className="w-9 h-9 rounded-xl bg-[#1E7BFF] text-white font-extrabold flex items-center justify-center text-sm">
                      {s.num}
                    </div>
                    <h3 className="text-base font-bold text-white">{s.title}</h3>
                    <p className="text-xs sm:text-sm text-[#9FB0CC] leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Next Steps CTA */}
            <div className="mt-12 p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#0B172E] via-[#0D244D] to-[#081224] border-2 border-[#1E7BFF] shadow-[0_0_40px_rgba(30,123,255,0.25)] text-center space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold text-white bg-[#1E7BFF]">
                <Flame className="w-3.5 h-3.5" />
                VOS CHAÎNES 4K
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                APK installé ? Activez vos 10 000+ chaînes avec Atlas Pro
              </h3>
              <p className="text-xs sm:text-sm text-[#9FB0CC] max-w-xl mx-auto">
                Alimentez votre lecteur IBO Player Pro avec l&apos;abonnement Atlas Pro 12 Mois :
                fluidité garantie 4K, zap ultra-rapide et support WhatsApp 7j/7.
              </p>
              <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/commander/?plan=12-mois"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-bold text-white bg-[#1E7BFF] hover:bg-[#2D9CFF] glow-primary transition-all"
                >
                  <span>Commander Atlas Pro 12 Mois (39,99 €)</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="https://activation.iboplayer.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold text-white border border-[#1A2A4A] hover:border-[#1E7BFF] bg-[#0A1428]"
                >
                  <span>Portail officiel d&apos;activation</span>
                </a>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mt-16 space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white flex items-center justify-center gap-2">
                  <HelpCircle className="w-6 h-6 text-[#1E7BFF]" />
                  <span>Questions Fréquentes IBO Player Pro APK</span>
                </h2>
              </div>

              <div className="space-y-4">
                {faqItems.map((item) => (
                  <div
                    key={item.q}
                    className="p-6 rounded-2xl bg-[#0A1428] border border-[#1A2A4A]"
                  >
                    <h3 className="text-base font-bold text-white">{item.q}</h3>
                    <p className="mt-2 text-xs sm:text-sm text-[#9FB0CC] leading-relaxed">
                      {item.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <StickyCTA
        title="IBO Player Pro APK Android TV"
        buttonText="Abonnement 12 Mois (39,99 €)"
        href="/commander/?plan=12-mois"
      />
      <Footer />
    </div>
  );
}
