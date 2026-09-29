import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SiloHeader } from "@/components/SiloHeader";
import { constructMetadata } from "@/lib/seo";
import {
  Tv,
  Users,
  CheckCircle2,
  ShieldCheck,
  Zap,
  ArrowRight,
  HelpCircle,
  Smartphone,
  Monitor,
} from "lucide-react";

export function generateMetadata(): Metadata {
  return constructMetadata({
    title: "Abonnement IPTV Multi-Écrans | 2 à 3 Connexions 4K Simultanées",
    description:
      "Profitez de votre abonnement IPTV sur 2 ou 3 téléviseurs en même temps sans coupure. Flux 4K indépendants pour salon, chambre et mobile.",
    path: "/abonnement-atlas-pro/multi-ecrans/",
  });
}

export default function MultiEcransPage() {
  const breadcrumbItems = [
    { label: "Abonnements Atlas Pro", href: "/abonnement-atlas-pro/" },
    { label: "Multi-Écrans", href: "/abonnement-atlas-pro/multi-ecrans/" },
  ];

  const plans = [
    {
      name: "Pack Solo (1 Écran)",
      price: "49,99 €",
      period: "12 Mois",
      desc: "Idéal pour un téléviseur principal",
      devices: "1 Connexion",
      ctaHref: "/commander/?plan=12-mois&devices=1",
      ctaText: "Choisir 1 Écran",
      features: [
        "1 Téléviseur ou appareil à la fois",
        "Toutes les chaînes directes & VOD",
        "Qualité 4K / FHD sans buffering",
        "Support technique 24/7",
      ],
      highlight: false,
    },
    {
      name: "Pack Duo (2 Écrans)",
      price: "84,99 €",
      period: "12 Mois",
      desc: "Salon + Chambre en simultané",
      devices: "2 Connexions Actives",
      ctaHref: "/commander/?plan=12-mois&devices=2",
      ctaText: "Commander Pack Duo (2 Écrans)",
      features: [
        "2 Flux 4K indépendants en même temps",
        "Zéro blocage ou coupure entre appareils",
        "Même playlist synchronisée",
        "Compatible Smart TV + Fire Stick / Box",
        "Support prioritaire WhatsApp",
      ],
      highlight: true,
      badge: "LE PLUS CHOISI",
    },
    {
      name: "Pack Famille (3 Écrans)",
      price: "114,99 €",
      period: "12 Mois",
      desc: "Pour toute la maison en simultané",
      devices: "3 Connexions Actives",
      ctaHref: "/commander/?plan=12-mois&devices=3",
      ctaText: "Commander Pack Famille",
      features: [
        "3 Flux 4K simultanés sans partage de débit",
        "Chacun regarde son programme librement",
        "Idéal TV Salon + Chambres + Tablette",
        "Activation prioritaire en 15 minutes",
        "Support technique dédié",
      ],
      highlight: false,
    },
  ];

  const faqItems = [
    {
      q: "Puis-je regarder des programmes différents sur chaque téléviseur ?",
      a: "Oui, absolument. Le pack multi-écrans vous alloue des flux de streaming totalement indépendants. Une personne peut regarder un match de sport en direct dans le salon pendant qu'un film en 4K est visionné dans la chambre.",
    },
    {
      q: "Pourquoi un abonnement IPTV standard coupe-t-il sur 2 téléviseurs ?",
      a: "Sur un abonnement IPTV classique mono-écran, le serveur verrouille la ligne dès qu'un second appareil se connecte. Cela provoque immédiatement un écran noir ou une erreur 'Code expiré / Limite atteinte'. Notre pack multi-écrans autorise explicitement 2 à 3 sessions parallèles sans aucun risque de déconnexion.",
    },
    {
      q: "Puis-je utiliser le multi-écrans sur deux adresses internet différentes ?",
      a: "Oui, nos serveurs multi-connexions autorisent l'utilisation simultanée sur des réseaux différents, par exemple un téléviseur à la maison et un smartphone en déplacement 4G/5G.",
    },
    {
      q: "Comment configurer mes deux appareils après la commande ?",
      a: "Après votre commande, nos techniciens vous transmettent soit vos identifiants Xtream Codes à entrer sur vos deux applications, soit configurent directement les adresses MAC de vos téléviseurs.",
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        name: "Abonnement IPTV Multi-Écrans iboatlaspro",
        description:
          "Formule multi-connexions pour 2 à 3 téléviseurs simultanés en qualité 4K sans coupure.",
        offers: {
          "@type": "AggregateOffer",
          priceCurrency: "EUR",
          lowPrice: "49.99",
          highPrice: "114.99",
          offerCount: "3",
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

        <SiloHeader
          badge="SOLUTION MULTI-CONNEXIONS FAMILIALE"
          titlePrefix="Abonnement IPTV"
          titleGradient="Multi-Écrans (2 à 3 TV)"
          description="Fini les disputes de télécommande. Regardez vos chaînes en direct et films en 4K sur 2 ou 3 téléviseurs simultanément sans coupure ni blocage serveur."
          primaryCtaText="Voir les offres Multi-Écrans"
          primaryCtaHref="#tarifs-multi"
          secondaryCtaText="Tester l'offre 12 Mois"
          secondaryCtaHref="/abonnement-atlas-pro/12-mois/"
        />

        {/* Problem & Solution Section */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-bold text-[#1E7BFF] uppercase tracking-wider">
                TECHNOLOGIE MULTI-CONNEXIONS
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-white">
                Pourquoi choisir une formule Multi-Écrans dédiée ?
              </h2>
              <p className="mt-4 text-sm sm:text-base text-[#9FB0CC] leading-relaxed">
                Avec un abonnement IPTV mono-écran standard, allumer un deuxième
                écran dans la chambre coupe automatiquement le flux du salon ou
                provoque des gels d&apos;image constants.
              </p>
              <p className="mt-3 text-sm sm:text-base text-[#9FB0CC] leading-relaxed">
                L&apos;infrastructure <strong>iboatlaspro Multi-Écrans</strong> alloue
                une bande passante dédiée à chaque terminal. Vos deux ou trois
                écrans bénéficient d&apos;un flux 4K 60fps distinct, géré par des
                serveurs à équilibrage de charge dynamique.
              </p>

              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3 text-sm text-white">
                  <CheckCircle2 className="w-5 h-5 text-[#22C55E]" />
                  <span>Flux 4K indépendants sans partage de débit</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-white">
                  <CheckCircle2 className="w-5 h-5 text-[#22C55E]" />
                  <span>Compatible Smart TV, Fire Stick, Android Box et Mobile</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-white">
                  <CheckCircle2 className="w-5 h-5 text-[#22C55E]" />
                  <span>Activation rapide et assistance à la configuration</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-[#0A1428] border border-[#1A2A4A] space-y-3">
                <div className="w-12 h-12 rounded-xl bg-[#1E7BFF]/10 border border-[#1E7BFF]/30 flex items-center justify-center text-[#1E7BFF]">
                  <Tv className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-white">TV Salon</h3>
                <p className="text-xs text-[#9FB0CC]">
                  Matchs de football, sports en direct et grands événements en 4K 60FPS.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#0A1428] border border-[#1A2A4A] space-y-3">
                <div className="w-12 h-12 rounded-xl bg-[#22C55E]/10 border border-[#22C55E]/30 flex items-center justify-center text-[#22C55E]">
                  <Monitor className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-white">TV Chambre</h3>
                <p className="text-xs text-[#9FB0CC]">
                  Films à la demande, séries complètes et documentaires en Ultra Haute Définition.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#0A1428] border border-[#1A2A4A] space-y-3">
                <div className="w-12 h-12 rounded-xl bg-[#FFB800]/10 border border-[#FFB800]/30 flex items-center justify-center text-[#FFB800]">
                  <Smartphone className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-white">Mobile & Tablette</h3>
                <p className="text-xs text-[#9FB0CC]">
                  Visionnage nomade en 4G/5G lors de vos déplacements ou voyages.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#0A1428] border border-[#1A2A4A] space-y-3">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-white">Zéro Conflit</h3>
                <p className="text-xs text-[#9FB0CC]">
                  Chaque membre de la famille conserve ses favoris et son historique.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section id="tarifs-multi" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-[#22C55E] uppercase tracking-wider">
              TARIFS 12 MOIS ÉCONOMIQUES
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-white">
              Choisissez votre formule selon vos besoins
            </h2>
            <p className="mt-3 text-sm text-[#9FB0CC]">
              Toutes nos formules incluent l&apos;intégralité du catalogue chaînes et VOD 4K.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((p) => (
              <div
                key={p.name}
                className={`relative rounded-2xl p-8 flex flex-col justify-between transition-all ${
                  p.highlight
                    ? "bg-[#0A1428] border-2 border-[#1E7BFF] shadow-[0_0_40px_rgba(30,123,255,0.25)] scale-[1.02]"
                    : "bg-[#0A1428]/80 border border-[#1A2A4A] hover:border-[#1E7BFF]/50"
                }`}
              >
                {p.badge && (
                  <div className="absolute -top-3.5 right-6">
                    <span className="px-3.5 py-1 rounded-full text-xs font-bold text-white bg-[#1E7BFF] shadow-[0_0_15px_rgba(30,123,255,0.5)]">
                      {p.badge}
                    </span>
                  </div>
                )}

                <div>
                  <h3 className="text-xl font-bold text-white">{p.name}</h3>
                  <p className="text-xs text-[#9FB0CC] mt-1">{p.desc}</p>

                  <div className="mt-6 pb-6 border-b border-[#1A2A4A]">
                    <div className="text-3xl sm:text-4xl font-extrabold text-white">
                      {p.price}
                    </div>
                    <div className="text-xs font-medium text-[#22C55E] mt-1">
                      {p.devices}
                    </div>
                  </div>

                  <ul className="mt-6 space-y-3">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-center gap-2.5 text-xs sm:text-sm text-white/90">
                        <CheckCircle2 className="w-4 h-4 text-[#1E7BFF] flex-shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-4">
                  <Link
                    href={p.ctaHref}
                    className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-bold transition-all ${
                      p.highlight
                        ? "bg-[#1E7BFF] text-white hover:bg-[#2D9CFF] glow-primary"
                        : "bg-transparent text-white border border-[#1A2A4A] hover:border-[#1E7BFF] hover:bg-[#1E7BFF]/10"
                    }`}
                  >
                    <span>{p.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white flex items-center justify-center gap-2">
              <HelpCircle className="w-6 h-6 text-[#1E7BFF]" />
              <span>Questions fréquentes sur le Multi-Écrans</span>
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
