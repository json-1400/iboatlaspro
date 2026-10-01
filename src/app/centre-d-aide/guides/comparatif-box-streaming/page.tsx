import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Check, Star, ArrowRight } from "lucide-react";

export function generateMetadata(): Metadata {
  return {
    title: "Comparatif Meilleures Box TV pour l'IPTV 2025 : Nvidia Shield, Fire TV, Apple TV",
    description:
      "Quelle est la meilleure Box TV pour regarder l'IPTV en 4K ? Comparatif complet : Nvidia Shield TV Pro, Amazon Fire TV Stick 4K Max, Apple TV et Xiaomi Box S.",
    alternates: {
      canonical: "https://iboatlaspro.com/centre-d-aide/guides/comparatif-box-streaming/",
    },
  };
}

import { RelatedGuides } from "@/components/RelatedGuides";

const relatedDeviceGuides = [
  {
    title: "IPTV Légal ou Illégal en France ?",
    href: "/centre-d-aide/guides/iptv-legal-ou-illegal/",
    description: "Le point juridique complet sur l'utilisation des lecteurs IPTV et des flux numériques en 2025.",
    badge: "Juridique",
  },
  {
    title: "Guide Fire TV Stick 4K",
    href: "/centre-d-aide/installation/fire-tv-stick/",
    description: "Tutoriel d'installation pas à pas sur le boîtier le plus vendu du comparatif.",
    badge: "Installation",
  },
  {
    title: "Installation Box Android TV",
    href: "/centre-d-aide/installation/android-tv/",
    description: "Comment configurer l'IPTV sur Nvidia Shield, Xiaomi Mi Box et téléviseurs Android.",
    badge: "Android",
  },
];

export default function ComparatifBoxPage() {
  const breadcrumbItems = [
    { label: "Centre d'aide", href: "/centre-d-aide/" },
    { label: "Guides", href: "/centre-d-aide/guides/" },
    { label: "Comparatif Box TV", href: "/centre-d-aide/guides/comparatif-box-streaming/" },
  ];

  const devices = [
    {
      name: "Amazon Fire TV Stick 4K Max",
      rank: "Meilleur Rapport Qualité / Prix",
      price: "~ 79 €",
      pros: ["Wi-Fi 6E ultra rapide", "Installation facile avec Downloader", "Télécommande ergonomique"],
      verdict: "Le choix numéro 1 pour 90% des utilisateurs IPTV.",
    },
    {
      name: "Nvidia Shield TV Pro",
      rank: "Performance Ultime",
      price: "~ 219 €",
      pros: ["Processeur Tegra X1+ surpuissant", "Upscaling IA 4K impressionnant", "Port Ethernet Gigabit"],
      verdict: "Pour les puristes exigeant la fluidité la plus absolue.",
    },
    {
      name: "Apple TV 4K",
      rank: "Écosystème & Fluidité",
      price: "~ 169 €",
      pros: ["Puce A15 Bionic ultra fluide", "Interface sans publicité", "Excellente application IBO Player / TiviMax"],
      verdict: "Idéal si vous possédez déjà un iPhone ou un Mac.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#040A17] text-white">
      <Navbar />

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbItems} />
        </div>

        <article className="py-12 md:py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="text-center mb-12">
            <span className="px-3.5 py-1.5 rounded-full text-xs font-bold text-white bg-[#0A1428] border border-[#1E7BFF]">
              COMPARATIF MATÉRIEL 2025
            </span>
            <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Quelle est la Meilleure{" "}
              <span className="gradient-text-blue">Box TV pour l&apos;IPTV</span> ?
            </h1>
            <p className="mt-4 text-base text-[#9FB0CC] leading-relaxed">
              Pour profiter pleinement d&apos;un flux 4K sans saccades, le choix
              de votre boîtier multimédia est déterminant. Voici notre sélection
              testée et approuvée.
            </p>
          </header>

          <div className="space-y-6">
            {devices.map((box) => (
              <div
                key={box.name}
                className="p-8 rounded-2xl bg-[#0A1428] border border-[#1A2A4A] space-y-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <span className="text-xs font-bold text-[#1E7BFF] uppercase tracking-wider">
                      {box.rank}
                    </span>
                    <h2 className="text-2xl font-bold text-white mt-1">
                      {box.name}
                    </h2>
                  </div>
                  <div className="text-lg font-bold text-[#22C55E]">
                    {box.price}
                  </div>
                </div>

                <ul className="space-y-2 text-xs sm:text-sm text-white/90">
                  {box.pros.map((pro) => (
                    <li key={pro} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#1E7BFF]" />
                      {pro}
                    </li>
                  ))}
                </ul>

                <p className="text-xs sm:text-sm text-[#9FB0CC] pt-2 border-t border-[#1A2A4A]">
                  <strong>Notre avis :</strong> {box.verdict}
                </p>
              </div>
            ))}
          </div>

          <div className="my-12 p-8 rounded-2xl bg-[#060E1F] border border-[#1E7BFF]/50 text-center space-y-4">
            <h3 className="text-xl font-bold text-white">
              Une fois votre Box choisie, équipez-la du meilleur abonnement IPTV
            </h3>
            <Link
              href="/abonnement-atlas-pro-12-mois/"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-bold text-white bg-[#1E7BFF] hover:bg-[#2D9CFF] glow-primary transition-all"
            >
              <span>Découvrir notre offre 12 mois à 39,99 €</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <RelatedGuides
            title="Guides Associés"
            subtitle="Poursuivez votre lecture avec nos dossiers juridiques et guides de configuration matériel."
            guides={relatedDeviceGuides}
          />
        </article>
      </main>

      <Footer />
    </div>
  );
}
