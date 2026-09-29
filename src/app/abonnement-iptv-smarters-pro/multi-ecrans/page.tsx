import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SiloHeader } from "@/components/SiloHeader";
import { constructMetadata } from "@/lib/seo";
import {
  Tv,
  Smartphone,
  CheckCircle2,
  HelpCircle,
  ArrowRight,
  ShieldCheck,
  Zap,
  Monitor,
  Laptop,
} from "lucide-react";

export function generateMetadata(): Metadata {
  return constructMetadata({
    title: "IPTV Smarters Pro Multi-Écran | Connexion sur 2 Appareils 4K",
    description:
      "Comment utiliser IPTV Smarters Pro sur 2 appareils en même temps (Smart TV, Smartphone, Fire Stick, PC). Guide Xtream Codes et formule 2 connexions.",
    path: "/abonnement-iptv-smarters-pro/multi-ecrans/",
  });
}

export default function SmartersProMultiEcransPage() {
  const breadcrumbItems = [
    {
      label: "Abonnement IPTV Smarters Pro",
      href: "/abonnement-iptv-smarters-pro/",
    },
    {
      label: "Multi-Écran (2 Appareils)",
      href: "/abonnement-iptv-smarters-pro/multi-ecrans/",
    },
  ];

  const deviceCombos = [
    {
      title: "Smart TV + Smartphone",
      icon: "tv-phone",
      desc: "Regardez vos séries sur le grand écran du salon tout en suivant vos événements sportifs en direct sur mobile en déplacement 4G/5G.",
    },
    {
      title: "Fire TV Stick + Ordinateur (PC/Mac)",
      icon: "fire-pc",
      desc: "Profitez du streaming 4K dans votre chambre sur Fire TV Stick tout en ayant votre lecteur actif sur Windows ou Mac.",
    },
    {
      title: "Deux Smart TV (Salon & Chambre)",
      icon: "two-tv",
      desc: "Configuration familiale parfaite. Deux flux 4K 60FPS distincts sans déconnexion intempestive ni partage de bande passante.",
    },
  ];

  const steps = [
    {
      num: "01",
      title: "Télécharger IPTV Smarters Pro sur chaque terminal",
      desc: "Installez l'application officielle depuis le Google Play Store, LG Content Store, Samsung Apps ou l'App Store pour iOS.",
    },
    {
      num: "02",
      title: "Sélectionner 'Connexion avec API Xtream Codes'",
      desc: "Dans l'écran d'accueil de l'application sur vos deux appareils, choisissez l'option Xtream Codes (Nom, Utilisateur, Mot de passe et URL du serveur).",
    },
    {
      num: "03",
      title: "Saisir vos accès multi-connexions fournis",
      desc: "Entrez les identifiants reçus après votre commande. Grâce à notre serveur multi-écrans, la même ligne alimente vos deux appareils sans conflit.",
    },
    {
      num: "04",
      title: "Lancer le streaming en simultané",
      desc: "Appuyez sur 'Login'. Les chaînes en direct et VOD 4K se chargent instantanément sur vos deux écrans indépendamment.",
    },
  ];

  const faqItems = [
    {
      q: "IPTV Smarters Pro est-il gratuit pour plusieurs appareils ?",
      a: "Oui, le téléchargement de l'application IPTV Smarters Pro est gratuit sur la plupart des stores. Cependant, pour que deux appareils fonctionnent en même temps sans être bloqués par le serveur, vous devez disposer d'un abonnement IPTV autorisant 2 connexions simultanées.",
    },
    {
      q: "Que se passe-t-il si j'utilise un abonnement mono-écran sur 2 appareils ?",
      a: "Le serveur IPTV détecte immédiatement la double session et coupe le premier appareil (écran noir ou message 'Serveur occupé'). Pour une utilisation fluide, le pack 2 connexions est obligatoire.",
    },
    {
      q: "Mes listes de favoris sont-elles synchronisées entre mes appareils ?",
      a: "L'application stocke les favoris localement sur chaque appareil. Cela vous permet d'avoir vos chaînes préférées sur votre TV et les favoris des enfants sur la seconde TV ou tablette.",
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "HowTo",
        name: "Comment connecter IPTV Smarters Pro sur 2 appareils en même temps",
        description:
          "Guide étape par étape pour configurer IPTV Smarters Pro en multi-écrans avec l'API Xtream Codes.",
        step: steps.map((s) => ({
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

        <SiloHeader
          badge="SOLUTION MULTI-PLATEFORME"
          titlePrefix="IPTV Smarters Pro"
          titleGradient="Multi-Écran (2 Appareils)"
          description="Profitez de l'application la plus populaire sur deux écrans en même temps. Smart TV, Fire TV, smartphone ou PC : configurez votre double accès en 5 minutes."
          primaryCtaText="Pack 2 Écrans Smarters Pro"
          primaryCtaHref="/commander/?plan=12-mois&devices=2"
          secondaryCtaText="Télécharger l'APK"
          secondaryCtaHref="/applications/iptv-smarters-pro/"
        />

        {/* Combinations */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-[#1E7BFF] uppercase tracking-wider">
              FLEXIBILITÉ TOTALE
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-white">
              Toutes les combinaisons d&apos;écrans possibles
            </h2>
            <p className="mt-3 text-sm text-[#9FB0CC]">
              Connectez n&apos;importe quelle paire d&apos;appareils selon vos habitudes quotidiennes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 rounded-2xl bg-[#0A1428] border border-[#1A2A4A] space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#1E7BFF]/10 border border-[#1E7BFF]/30 flex items-center justify-center text-[#1E7BFF]">
                <Tv className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Smart TV + Mobile</h3>
              <p className="text-xs sm:text-sm text-[#9FB0CC] leading-relaxed">
                {deviceCombos[0].desc}
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#0A1428] border border-[#1A2A4A] space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#22C55E]/10 border border-[#22C55E]/30 flex items-center justify-center text-[#22C55E]">
                <Laptop className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Fire Stick + Ordinateur</h3>
              <p className="text-xs sm:text-sm text-[#9FB0CC] leading-relaxed">
                {deviceCombos[1].desc}
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#0A1428] border border-[#1A2A4A] space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#FFB800]/10 border border-[#FFB800]/30 flex items-center justify-center text-[#FFB800]">
                <Monitor className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Deux Smart TV</h3>
              <p className="text-xs sm:text-sm text-[#9FB0CC] leading-relaxed">
                {deviceCombos[2].desc}
              </p>
            </div>
          </div>
        </section>

        {/* Steps */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-[#0A1428] border border-[#1A2A4A]">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Configuration de la double connexion en 4 étapes
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-[#9FB0CC]">
                Méthode rapide via l&apos;API Xtream Codes officielle.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((st) => (
                <div
                  key={st.num}
                  className="p-6 rounded-2xl bg-[#060E1F] border border-[#1A2A4A]"
                >
                  <div className="text-2xl font-extrabold text-[#1E7BFF] mb-2 font-mono">
                    {st.num}
                  </div>
                  <h3 className="text-sm font-bold text-white mb-2">{st.title}</h3>
                  <p className="text-xs text-[#9FB0CC] leading-relaxed">{st.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-12 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#0A1428] via-[#0E1F3D] to-[#0A1428] border-2 border-[#22C55E] shadow-[0_0_50px_rgba(34,197,94,0.15)] flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <span className="px-3 py-1 rounded-full text-xs font-bold text-white bg-[#22C55E]">
                FORMULE RECOMMANDÉE
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-2">
                Abonnement 12 Mois - 2 Écrans IPTV Smarters Pro
              </h3>
              <p className="text-xs sm:text-sm text-[#9FB0CC] mt-1">
                Accès immédiat à toutes les chaînes 4K, films et séries VOD pour vos 2 appareils.
              </p>
            </div>
            <Link
              href="/commander/?plan=12-mois&devices=2"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-bold text-white bg-[#22C55E] hover:bg-[#1fa951] shadow-[0_0_20px_rgba(34,197,94,0.3)] transition-all flex-shrink-0"
            >
              <span>Activer pour 2 Écrans</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white flex items-center justify-center gap-2">
              <HelpCircle className="w-6 h-6 text-[#1E7BFF]" />
              <span>Questions Fréquentes IPTV Smarters Multi-Écran</span>
            </h2>
          </div>

          <div className="space-y-4">
            {faqItems.map((item) => (
              <div
                key={item.q}
                className="p-6 rounded-xl bg-[#0A1428] border border-[#1A2A4A]"
              >
                <h3 className="text-base font-bold text-white">{item.q}</h3>
                <p className="mt-2 text-sm text-[#9FB0CC] leading-relaxed">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
