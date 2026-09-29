import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { StickyCTA } from "@/components/StickyCTA";
import { ArrowRight, Check } from "lucide-react";

export function generateMetadata(): Metadata {
  return {
    title: "Comment Configurer IBO Player Pro : Guide Pas à Pas 2025",
    description:
      "Tutoriel détaillé pour paramétrer IBO Player Pro avec votre abonnement IPTV. Activation par MAC/Device Key et injection de flux Xtream Codes.",
    alternates: {
      canonical: "https://iboatlaspro.com/centre-d-aide/tutoriels/configurer-ibo-player/",
    },
  };
}

import { RelatedGuides } from "@/components/RelatedGuides";

const relatedTutorialGuides = [
  {
    title: "Configurer IPTV Smarters Pro",
    href: "/centre-d-aide/tutoriels/configurer-iptv-smarters/",
    description: "Guide complet pour configurer l'API Xtream Codes et l'EPG sur l'application Smarters Pro.",
    badge: "Xtream Codes",
  },
  {
    title: "Installation sur Smart TV",
    href: "/centre-d-aide/installation/smart-tv/",
    description: "Comment installer IBO Player depuis l'App Store de votre téléviseur Samsung ou LG.",
    badge: "Installation",
  },
];

export default function ConfigurerIboPlayerPage() {
  const breadcrumbItems = [
    { label: "Centre d'aide", href: "/centre-d-aide/" },
    { label: "Tutoriels", href: "/centre-d-aide/tutoriels/" },
    { label: "Configurer IBO Player", href: "/centre-d-aide/tutoriels/configurer-ibo-player/" },
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
              TUTORIEL IBO PLAYER
            </span>
            <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Comment Configurer{" "}
              <span className="gradient-text-blue">IBO Player Pro</span> ?
            </h1>
            <p className="mt-4 text-base text-[#9FB0CC] leading-relaxed">
              Suivez ce guide simple pour lier votre playlist Atlas Pro à IBO
              Player et profiter d&apos;une interface 4K personnalisée.
            </p>
          </header>

          <div className="space-y-6 text-sm sm:text-base text-white/90 leading-relaxed">
            <div className="p-6 rounded-2xl bg-[#0A1428] border border-[#1A2A4A] space-y-3">
              <h2 className="text-lg font-bold text-white">
                Étape 1 : Récupérer les identifiants de l&apos;application
              </h2>
              <p className="text-[#9FB0CC] text-xs sm:text-sm">
                Au premier lancement sur votre téléviseur, IBO Player affiche une <strong>Adresse MAC</strong> (ex: 00:1a:79:...) et un <strong>Device Key</strong> à 6 chiffres. Prenez-les en photo.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0A1428] border border-[#1A2A4A] space-y-3">
              <h2 className="text-lg font-bold text-white">
                Étape 2 : Connecter votre playlist via le portail
              </h2>
              <p className="text-[#9FB0CC] text-xs sm:text-sm">
                Depuis votre téléphone ou ordinateur, rendez-vous sur le site de gestion IBO, connectez-vous avec vos identifiants, et ajoutez votre lien M3U ou vos identifiants Xtream Codes fournis dans votre e-mail de commande.
              </p>
            </div>

            <div className="my-8 p-8 rounded-2xl bg-[#0A1428] border border-[#1E7BFF] text-center space-y-4">
              <h3 className="text-xl font-bold text-white">
                Besoin d&apos;activer votre licence IBO Player Pro ?
              </h3>
              <Link
                href="/abonnement-ibo-player/activation/"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-bold text-white bg-[#1E7BFF] hover:bg-[#2D9CFF] glow-primary transition-all"
              >
                <span>Accéder au portail d&apos;activation (7,99 €)</span>
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
