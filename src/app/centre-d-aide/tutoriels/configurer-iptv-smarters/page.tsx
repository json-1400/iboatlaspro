import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { StickyCTA } from "@/components/StickyCTA";
import { ArrowRight, Check } from "lucide-react";

export function generateMetadata(): Metadata {
  return {
    title: "Comment Configurer IPTV Smarters Pro : Guide Xtream Codes 2025",
    description:
      "Tutoriel pas à pas pour configurer IPTV Smarters Pro sur Smart TV, Fire Stick et Android. Connexion API Xtream Codes, EPG et zapping rapide.",
    alternates: {
      canonical: "https://iboatlaspro.com/centre-d-aide/tutoriels/configurer-iptv-smarters/",
    },
  };
}

import { RelatedGuides } from "@/components/RelatedGuides";

const relatedTutorialGuides = [
  {
    title: "Configurer IBO Player Pro",
    href: "/centre-d-aide/tutoriels/configurer-ibo-player/",
    description: "Guide étape par étape pour associer votre adresse MAC et Device Key sur IBO Player.",
    badge: "IBO Player",
  },
  {
    title: "Installation Fire TV Stick 4K",
    href: "/centre-d-aide/installation/fire-tv-stick/",
    description: "Comment installer IPTV Smarters Pro avec Downloader sur Amazon Fire TV Stick.",
    badge: "Fire Stick",
  },
];

export default function ConfigurerIptvSmartersPage() {
  const breadcrumbItems = [
    { label: "Centre d'aide", href: "/centre-d-aide/" },
    { label: "Tutoriels", href: "/centre-d-aide/tutoriels/" },
    { label: "Configurer IPTV Smarters", href: "/centre-d-aide/tutoriels/configurer-iptv-smarters/" },
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
              TUTORIEL SMARTERS
            </span>
            <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Comment Configurer{" "}
              <span className="gradient-text-blue">IPTV Smarters Pro</span> ?
            </h1>
            <p className="mt-4 text-base text-[#9FB0CC] leading-relaxed">
              La méthode la plus rapide et fiable en utilisant l&apos;API Xtream
              Codes pour synchroniser l&apos;intégralité de vos chaînes et VOD.
            </p>
          </header>

          <div className="space-y-6 text-sm sm:text-base text-white/90 leading-relaxed">
            <div className="p-6 rounded-2xl bg-[#0A1428] border border-[#1A2A4A] space-y-3">
              <h2 className="text-lg font-bold text-white">
                1. Sélectionner &laquo; Login with Xtream Codes API &raquo;
              </h2>
              <p className="text-[#9FB0CC] text-xs sm:text-sm">
                À l&apos;ouverture d&apos;IPTV Smarters Pro, choisissez la seconde option &laquo; Connexion avec API Xtream Codes &raquo;. C&apos;est la méthode qui garantit l&apos;affichage des logos de chaînes et du guide EPG.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0A1428] border border-[#1A2A4A] space-y-3">
              <h2 className="text-lg font-bold text-white">
                2. Saisir vos identifiants Atlas Pro
              </h2>
              <ul className="space-y-1 text-xs sm:text-sm text-[#9FB0CC] list-disc list-inside">
                <li><strong>Nom :</strong> Atlas Pro (ou ce que vous voulez)</li>
                <li><strong>Nom d&apos;utilisateur :</strong> Votre identifiant reçu par e-mail</li>
                <li><strong>Mot de passe :</strong> Votre mot de passe</li>
                <li><strong>URL du serveur :</strong> L&apos;URL communiquée lors de la commande</li>
              </ul>
            </div>

            <div className="my-8 p-8 rounded-2xl bg-[#0A1428] border border-[#1E7BFF] text-center space-y-4">
              <h3 className="text-xl font-bold text-white">
                Commandez vos identifiants IPTV Smarters Pro officiels
              </h3>
              <Link
                href="/commander/?plan=12-mois"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-bold text-white bg-[#1E7BFF] hover:bg-[#2D9CFF] glow-primary transition-all"
              >
                <span>Commander vos identifiants 12 Mois (39,99 €)</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <RelatedGuides
            title="Autres Tutoriels de Configuration"
            subtitle="Guides de configuration pas à pas pour vos lecteurs et applications IPTV."
            guides={relatedTutorialGuides}
          />
        </article>
      </main>

      <Footer />
    </div>
  );
}
