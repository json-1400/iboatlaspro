import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ExpiredAlert } from "@/components/ExpiredAlert";
import { CheckCircle2, Zap } from "lucide-react";

export function generateMetadata(): Metadata {
  return {
    title: "Écran Noir & Buffering IPTV : Comment Supprimer les Coupures et Saccades",
    description:
      "Astuces d'experts pour éliminer le buffering, les coupures et l'écran noir sur votre IPTV. Réglages du lecteur VLC/ExoPlayer et optimisation de bande passante.",
    alternates: {
      canonical: "https://iboatlaspro.com/centre-d-aide/depannage/ecran-noir-buffering/",
    },
  };
}

import { RelatedGuides } from "@/components/RelatedGuides";

const relatedDepannageGuides = [
  {
    title: "Erreur Connexion Serveur IPTV",
    href: "/centre-d-aide/depannage/erreur-connexion-serveur/",
    description: "Comment résoudre l'erreur Server Connection Failed en modifiant vos DNS ou en relançant votre box.",
    badge: "Connexion",
  },
  {
    title: "Code ou Abonnement Expiré",
    href: "/centre-d-aide/depannage/code-expire/",
    description: "Réactivation immédiate de votre code ou adresse MAC sans réinstaller vos applications.",
    badge: "Réactivation",
  },
];

export default function EcranNoirBufferingPage() {
  const breadcrumbItems = [
    { label: "Centre d'aide", href: "/centre-d-aide/" },
    { label: "Dépannage", href: "/centre-d-aide/depannage/" },
    { label: "Écran Noir & Buffering", href: "/centre-d-aide/depannage/ecran-noir-buffering/" },
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
              OPTIMISATION FLUX
            </span>
            <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Supprimer le{" "}
              <span className="gradient-text-blue">Buffering & l&apos;Écran Noir</span>
            </h1>
            <p className="mt-4 text-base text-[#9FB0CC] leading-relaxed">
              Un flux qui saccade ou s&apos;arrête est souvent lié au décodeur
              vidéo de votre application ou au Wi-Fi. Voici comment y remédier.
            </p>
          </header>

          <div className="space-y-6 text-sm sm:text-base text-white/90 leading-relaxed">
            <div className="p-6 rounded-2xl bg-[#0A1428] border border-[#1A2A4A] space-y-3">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#22C55E]" />
                1. Changer le lecteur vidéo interne (ExoPlayer vers VLC / Hardware)
              </h2>
              <p className="text-[#9FB0CC] text-xs sm:text-sm">
                Dans les paramètres de votre application (IPTV Smarters ou IBO), allez dans <em>Player Settings</em> et passez du décodeur logiciel (Software) au décodeur matériel (Hardware / VLC). Cela décharge le processeur de votre TV.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0A1428] border border-[#1A2A4A] space-y-3">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#22C55E]" />
                2. Privilégier une connexion Ethernet filaire ou Wi-Fi 5 GHz
              </h2>
              <p className="text-[#9FB0CC] text-xs sm:text-sm">
                Les flux 4K Ultra HD exigent un débit stable supérieur à 25 Mbps. Si possible, reliez votre boîtier avec un câble réseau RJ45 plutôt qu&apos;en Wi-Fi 2.4 GHz saturé.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0A1428] border border-[#1A2A4A] space-y-3">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#22C55E]" />
                3. Vider le cache de l&apos;application
              </h2>
              <p className="text-[#9FB0CC] text-xs sm:text-sm">
                Sur Android TV / Fire Stick, allez dans <em>Applications &gt; Gérer les applications &gt; Vider le cache</em> pour libérer de la mémoire vive.
              </p>
            </div>

            <ExpiredAlert
              title="Votre fournisseur actuel subit trop de coupures ?"
              message="Passez sur l'infrastructure Atlas Pro 10 Gbps : notre technologie de routage intelligent élimine le buffering même pendant les soirs de grands matchs."
            />
          </div>

          <RelatedGuides
            title="Autres Fiches Dépannage"
            subtitle="Consultez nos solutions aux pannes fréquentes pour retrouver un streaming fluide."
            guides={relatedDepannageGuides}
          />
        </article>
      </main>

      <Footer />
    </div>
  );
}
