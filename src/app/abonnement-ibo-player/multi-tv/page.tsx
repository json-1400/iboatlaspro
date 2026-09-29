import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SiloHeader } from "@/components/SiloHeader";
import { constructMetadata } from "@/lib/seo";
import {
  Tv,
  CheckCircle2,
  HelpCircle,
  ArrowRight,
  ShieldCheck,
  Zap,
  Key,
  Layers,
} from "lucide-react";

export function generateMetadata(): Metadata {
  return constructMetadata({
    title: "IBO Player sur 2 TV | Comment Activer & Configurer 2 Écrans",
    description:
      "Guide complet pour installer et activer IBO Player sur deux téléviseurs simultanés (Samsung, LG, Fire Stick). Gestion des adresses MAC et playlist synchronisée.",
    path: "/abonnement-ibo-player/multi-tv/",
  });
}

export default function IboPlayerMultiTvPage() {
  const breadcrumbItems = [
    { label: "Abonnement IBO Player", href: "/abonnement-ibo-player/" },
    { label: "Multi-TV (2 Écrans)", href: "/abonnement-ibo-player/multi-tv/" },
  ];

  const steps = [
    {
      step: "1",
      title: "Relever l'Adresse MAC de chaque téléviseur",
      desc: "Installez l'application IBO Player sur votre première TV (Salon) et sur votre seconde TV (Chambre). Notez précieusement l'Adresse MAC et le Device Key qui s'affichent sur l'écran d'accueil de chaque appareil.",
    },
    {
      step: "2",
      title: "Choisir un abonnement serveur 2 Connexions",
      desc: "Une licence IBO Player active uniquement le lecteur. Pour regarder sur 2 téléviseurs en même temps, vous devez impérativement souscrire à une formule serveur IPTV autorisant 2 flux simultanés pour éviter l'écran noir.",
    },
    {
      step: "3",
      title: "Injecter votre Playlist sur les 2 appareils",
      desc: "Connectez-vous sur le portail de gestion avec les identifiants de la TV 1, chargez votre lien M3U, puis répétez l'opération pour la TV 2. Vos deux écrans partagent désormais les mêmes favoris.",
    },
    {
      step: "4",
      title: "Profiter du streaming 4K sans interruption",
      desc: "Redémarrez vos deux applications. Vous pouvez désormais visionner deux chaînes ou films différents simultanément en qualité 4K Ultra HD.",
    },
  ];

  const faqItems = [
    {
      q: "Puis-je activer IBO Player sur 2 TV avec une seule licence d'application ?",
      a: "Non. L'application IBO Player facture sa licence par adresse MAC physique. Si vous avez 2 téléviseurs, chaque appareil nécessite sa propre activation d'application (ou notre Pack Duo Tout Compris qui inclut les activations et le serveur).",
    },
    {
      q: "Pourquoi mon second téléviseur coupe quand j'allume le premier ?",
      a: "Si votre abonnement IPTV serveur est mono-connexion, le serveur expulse le premier écran dès que le second se connecte. Pour résoudre ce problème, passez à l'offre 2 connexions simultanées.",
    },
    {
      q: "Puis-je installer IBO Player sur une TV Samsung et une Fire Stick en même temps ?",
      a: "Oui. IBO Player est disponible sur le Tizen Store (Samsung), LG Content Store, et sur Amazon Fire TV Stick. La configuration multi-écrans fonctionne de manière identique quel que soit le modèle.",
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "HowTo",
        name: "Comment utiliser IBO Player sur 2 téléviseurs en même temps",
        description:
          "Instructions pour configurer et activer deux instances IBO Player avec un flux serveur 2 connexions.",
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
          badge="GUIDE TECHNIQUE & PACK DUO"
          titlePrefix="Activer IBO Player sur"
          titleGradient="2 Téléviseurs (Multi-TV)"
          description="Tout ce que vous devez savoir pour configurer IBO Player Pro sur vos téléviseurs du salon et de la chambre sans conflit d'adresse MAC ni coupure serveur."
          primaryCtaText="Pack 2 Écrans Tout Compris"
          primaryCtaHref="/commander/?plan=12-mois&devices=2"
          secondaryCtaText="Tutoriel Configuration"
          secondaryCtaHref="/centre-d-aide/tutoriels/configurer-ibo-player/"
        />

        {/* Technical Explainer */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-[#0A1428] border border-[#1A2A4A] shadow-2xl">
            <div className="max-w-3xl">
              <span className="text-xs font-bold text-[#1E7BFF] uppercase tracking-wider">
                COMPRENDRE LE FONCTIONNEMENT MULTI-TV
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-white">
                La différence essentielle entre Licence App et Flux Serveur
              </h2>
              <p className="mt-4 text-sm sm:text-base text-[#9FB0CC] leading-relaxed">
                Beaucoup d&apos;utilisateurs pensent qu&apos;acheter une activation IBO Player
                permet de regarder sur tous les téléviseurs du foyer. Or, deux éléments
                distincts entrent en jeu :
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-[#060E1F] border border-[#1A2A4A] space-y-3">
                <div className="flex items-center gap-3 text-[#1E7BFF]">
                  <Key className="w-5 h-5" />
                  <h3 className="text-base font-bold text-white">
                    1. La Licence IBO Player (Hardware)
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#9FB0CC] leading-relaxed">
                  L&apos;application verrouille sa licence sur l&apos;<strong>adresse MAC unique</strong>{" "}
                  du téléviseur. Votre TV Samsung du salon et votre TV LG de la chambre possèdent
                  deux adresses physiques distinctes et requièrent chacune leur propre enregistrement.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#060E1F] border border-[#1A2A4A] space-y-3">
                <div className="flex items-center gap-3 text-[#22C55E]">
                  <Layers className="w-5 h-5" />
                  <h3 className="text-base font-bold text-white">
                    2. Le Flux Serveur IPTV (Connexions)
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#9FB0CC] leading-relaxed">
                  C&apos;est le serveur qui délivre les chaînes 4K. Avec une formule classique mono-écran,
                  le serveur bloque le signal dès qu&apos;une seconde TV se connecte. Notre formule{" "}
                  <strong>Pack Duo 2 Écrans</strong> autorise deux diffusions simultanées sans coupure.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Step-by-Step Installation */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Guide pas à pas pour configurer vos 2 écrans
            </h2>
            <p className="mt-3 text-sm text-[#9FB0CC]">
              Suivez ces 4 étapes simples pour profiter d&apos;IBO Player dans deux pièces différentes.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s) => (
              <div
                key={s.step}
                className="p-6 rounded-2xl bg-[#0A1428] border border-[#1A2A4A] flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#1E7BFF]/10 border border-[#1E7BFF]/30 text-[#1E7BFF] font-extrabold flex items-center justify-center text-lg mb-4">
                    {s.step}
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">{s.title}</h3>
                  <p className="text-xs text-[#9FB0CC] leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* High Conversion Banner */}
        <section className="py-12 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#0A1428] via-[#0E1F3D] to-[#0A1428] border-2 border-[#1E7BFF] shadow-[0_0_50px_rgba(30,123,255,0.2)] flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <span className="px-3 py-1 rounded-full text-xs font-bold text-white bg-[#22C55E]">
                SOLUTION CLÉ EN MAIN
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-2">
                Besoin du Pack 2 Écrans avec configuration assistée ?
              </h3>
              <p className="text-xs sm:text-sm text-[#9FB0CC] mt-1">
                Commandez votre abonnement 2 connexions : notre équipe configure vos deux appareils sous 15 minutes.
              </p>
            </div>
            <Link
              href="/commander/?plan=12-mois&devices=2"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-bold text-white bg-[#1E7BFF] hover:bg-[#2D9CFF] glow-primary transition-all flex-shrink-0"
            >
              <span>Commander pour 2 TV</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white flex items-center justify-center gap-2">
              <HelpCircle className="w-6 h-6 text-[#1E7BFF]" />
              <span>Questions Fréquentes IBO Player 2 TV</span>
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
