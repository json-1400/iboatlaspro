import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ExpiredAlert } from "@/components/ExpiredAlert";
import { CheckCircle2, AlertCircle } from "lucide-react";

export function generateMetadata(): Metadata {
  return {
    title: "Erreur de Connexion Serveur IPTV : Causes et Solutions en 4 Étapes",
    description:
      "Comment résoudre le message 'Server Connection Failed' ou 'Erreur de connexion au serveur' sur IPTV Smarters, IBO Player et Atlas Pro. Guide de dépannage 2025.",
    alternates: {
      canonical: "https://iboatlaspro.com/centre-d-aide/depannage/erreur-connexion-serveur/",
    },
  };
}

import { RelatedGuides } from "@/components/RelatedGuides";

const relatedDepannageGuides = [
  {
    title: "Écran Noir & Buffering IPTV",
    href: "/centre-d-aide/depannage/ecran-noir-buffering/",
    description: "Comment éliminer les ralentissements, saccades et coupures sur vos flux TV en direct.",
    badge: "Optimisation",
  },
  {
    title: "Code ou Abonnement Expiré",
    href: "/centre-d-aide/depannage/code-expire/",
    description: "Réactivation immédiate de votre code ou adresse MAC sans réinstaller vos applications.",
    badge: "Réactivation",
  },
];

export default function ErreurConnexionServeurPage() {
  const breadcrumbItems = [
    { label: "Centre d'aide", href: "/centre-d-aide/" },
    { label: "Dépannage", href: "/centre-d-aide/depannage/" },
    { label: "Erreur Connexion Serveur", href: "/centre-d-aide/depannage/erreur-connexion-serveur/" },
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
              GUIDE DE DÉPANNAGE
            </span>
            <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Comment résoudre l&apos;erreur{" "}
              <span className="gradient-text-blue">Connexion Serveur IPTV</span> ?
            </h1>
            <p className="mt-4 text-base text-[#9FB0CC] leading-relaxed">
              Le message &laquo; Server Connection Error &raquo; apparaît
              généralement suite à un blocage DNS de votre box Internet ou une
              faute de frappe dans vos identifiants.
            </p>
          </header>

          <div className="space-y-6 text-sm sm:text-base text-white/90 leading-relaxed">
            <div className="p-6 rounded-2xl bg-[#0A1428] border border-[#1A2A4A] space-y-3">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#22C55E]" />
                Solution 1 : Modifier les serveurs DNS de votre appareil
              </h2>
              <p className="text-[#9FB0CC] text-xs sm:text-sm">
                Certains fournisseurs d&apos;accès à Internet (FAI) bloquent les adresses IPTV par défaut. Changez vos DNS dans les paramètres réseau de votre TV ou Fire Stick :
                <br />
                <strong>DNS Primaire :</strong> <code>8.8.8.8</code> (Google) ou <code>1.1.1.1</code> (Cloudflare).
                <br />
                <strong>DNS Secondaire :</strong> <code>8.8.4.4</code> ou <code>1.0.0.1</code>.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0A1428] border border-[#1A2A4A] space-y-3">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#22C55E]" />
                Solution 2 : Redémarrer votre Box Internet et votre téléviseur
              </h2>
              <p className="text-[#9FB0CC] text-xs sm:text-sm">
                Débranchez la prise électrique de votre box pendant 30 secondes pour renouveler votre adresse IP publique, puis redémarrez votre application.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0A1428] border border-[#1A2A4A] space-y-3">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#22C55E]" />
                Solution 3 : Vérifier l&apos;URL du serveur et les majuscules
              </h2>
              <p className="text-[#9FB0CC] text-xs sm:text-sm">
                Les identifiants Xtream Codes sont sensibles à la casse. Assurez-vous de ne pas avoir ajouté d&apos;espace accidentel avant ou après votre mot de passe.
              </p>
            </div>

            <ExpiredAlert
              title="Votre compte a expiré sur le serveur ?"
              message="Si votre abonnement est arrivé à son terme, nos serveurs interrompent l'accès. Renouvelez votre accès 12 mois pour réactiver vos bouquets instantanément."
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
