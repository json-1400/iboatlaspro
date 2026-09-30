import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ExpiredAlert } from "@/components/ExpiredAlert";
import { RelatedGuides } from "@/components/RelatedGuides";
import { CheckCircle2, ArrowRight } from "lucide-react";

export function generateMetadata(): Metadata {
  return {
    title: "Erreur de Connexion Serveur IPTV : Causes et Solutions 2026",
    description:
      "Comment résoudre 'Server Connection Failed' sur IPTV Smarters et IBO Player. DNS, redémarrage box, URL invalide : guide de dépannage 2026. Voir aussi : Atlas Pro ne peut pas se connecter au serveur.",
    keywords:
      "erreur connexion serveur iptv, server connection failed iptv, erreur connexion serveur atlas pro, iptv smarters connexion serveur, ibo player connexion serveur",
    alternates: {
      canonical:
        "https://iboatlaspro.com/centre-d-aide/depannage/erreur-connexion-serveur/",
    },
  };
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Comment résoudre l'erreur 'Server Connection Failed' sur IPTV Smarters ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "L'erreur 'Server Connection Failed' sur IPTV Smarters est causée dans 80 % des cas par un blocage DNS de votre fournisseur d'accès. Solution : changez vos DNS en 8.8.8.8 (Google) dans les paramètres réseau de votre appareil, puis redémarrez l'application.",
      },
    },
    {
      "@type": "Question",
      name: "Pourquoi IBO Player affiche une erreur de connexion au serveur ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "IBO Player affiche une erreur de connexion si l'URL du portail est incorrecte, si votre abonnement est expiré, ou si votre FAI bloque les adresses IPTV. Vérifiez vos DNS (8.8.8.8) et l'URL copiée depuis votre e-mail de confirmation.",
      },
    },
    {
      "@type": "Question",
      name: "Comment changer les DNS pour corriger l'erreur serveur IPTV ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dans les paramètres réseau de votre TV, Fire Stick ou box Android, cherchez 'DNS' et remplacez les valeurs par 8.8.8.8 (primaire) et 8.8.4.4 (secondaire). Redémarrez ensuite votre application IPTV.",
      },
    },
  ],
};

const relatedDepannageGuides = [
  {
    title: "Atlas Pro ne peut pas se connecter au serveur",
    href: "/centre-d-aide/depannage/ne-peut-pas-se-connecter-au-serveur/",
    description:
      "Guide dédié avec 6 solutions pour le message Atlas Pro spécifique — inclut URL invalide, VPN et réinstallation.",
    badge: "Atlas Pro",
  },
  {
    title: "Écran Noir & Buffering IPTV",
    href: "/centre-d-aide/depannage/ecran-noir-buffering/",
    description:
      "Comment éliminer les ralentissements, saccades et coupures sur vos flux TV en direct.",
    badge: "Optimisation",
  },
  {
    title: "Code ou Abonnement Expiré",
    href: "/centre-d-aide/depannage/code-expire/",
    description:
      "Réactivation immédiate de votre code ou adresse MAC sans réinstaller vos applications.",
    badge: "Réactivation",
  },
];

export default function ErreurConnexionServeurPage() {
  const breadcrumbItems = [
    { label: "Centre d'aide", href: "/centre-d-aide/" },
    { label: "Dépannage", href: "/centre-d-aide/depannage/" },
    {
      label: "Erreur Connexion Serveur",
      href: "/centre-d-aide/depannage/erreur-connexion-serveur/",
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
              GUIDE DE DÉPANNAGE
            </span>
            <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Comment résoudre l&apos;erreur{" "}
              <span className="gradient-text-blue">Connexion Serveur IPTV</span> ?
            </h1>
            <p className="mt-4 text-base text-[#9FB0CC] leading-relaxed max-w-2xl mx-auto">
              Le message &laquo; Server Connection Error &raquo; ou &laquo; Connexion au serveur
              impossible &raquo; apparaît généralement suite à un blocage DNS de votre box
              Internet ou une faute de frappe dans vos identifiants.
            </p>
          </header>

          {/* Cross-link callout to the Atlas Pro-specific page */}
          <div className="mb-8 p-5 rounded-2xl bg-[#0E1C38]/80 border border-[#1E7BFF]/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-0.5">
              <p className="text-xs font-bold text-[#1E7BFF] uppercase tracking-wider">
                Erreur spécifique Atlas Pro ?
              </p>
              <p className="text-sm text-[#9FB0CC]">
                Si le message est exactement &laquo; <strong className="text-white">Atlas Pro ne peut pas se connecter au serveur</strong> &raquo;,
                consultez notre guide dédié avec 6 solutions classées par efficacité.
              </p>
            </div>
            <Link
              href="/centre-d-aide/depannage/ne-peut-pas-se-connecter-au-serveur/"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-white bg-[#1E7BFF] hover:bg-[#2D9CFF] transition-all flex-shrink-0 whitespace-nowrap"
            >
              Guide Atlas Pro
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="space-y-6 text-sm sm:text-base text-white/90 leading-relaxed">
            <div className="p-6 rounded-2xl bg-[#0A1428] border border-[#1A2A4A] space-y-3">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#22C55E]" />
                Solution 1 : Modifier les serveurs DNS de votre appareil
              </h2>
              <p className="text-[#9FB0CC] text-xs sm:text-sm">
                Certains fournisseurs d&apos;accès à Internet (FAI) bloquent les adresses IPTV
                par défaut. Changez vos DNS dans les paramètres réseau de votre TV ou Fire Stick :
                <br />
                <strong>DNS Primaire :</strong>{" "}
                <code className="bg-[#060E1F] px-1.5 py-0.5 rounded text-[#22C55E]">8.8.8.8</code>{" "}
                (Google) ou{" "}
                <code className="bg-[#060E1F] px-1.5 py-0.5 rounded text-[#22C55E]">1.1.1.1</code>{" "}
                (Cloudflare).
                <br />
                <strong>DNS Secondaire :</strong>{" "}
                <code className="bg-[#060E1F] px-1.5 py-0.5 rounded">8.8.4.4</code> ou{" "}
                <code className="bg-[#060E1F] px-1.5 py-0.5 rounded">1.0.0.1</code>.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0A1428] border border-[#1A2A4A] space-y-3">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#22C55E]" />
                Solution 2 : Redémarrer votre Box Internet et votre téléviseur
              </h2>
              <p className="text-[#9FB0CC] text-xs sm:text-sm">
                Débranchez la prise électrique de votre box pendant 30 secondes pour renouveler
                votre adresse IP publique, puis redémarrez votre application.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0A1428] border border-[#1A2A4A] space-y-3">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#22C55E]" />
                Solution 3 : Vérifier l&apos;URL du serveur et les identifiants
              </h2>
              <p className="text-[#9FB0CC] text-xs sm:text-sm">
                Les identifiants Xtream Codes sont sensibles à la casse. Assurez-vous de ne
                pas avoir ajouté d&apos;espace accidentel avant ou après votre URL, nom
                d&apos;utilisateur ou mot de passe. Copiez-collez directement depuis votre
                e-mail de confirmation.
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
