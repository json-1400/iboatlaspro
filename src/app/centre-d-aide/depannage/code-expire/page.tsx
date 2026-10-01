import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { StickyCTA } from "@/components/StickyCTA";
import { AlertCircle, CheckCircle2, ArrowRight, ShieldCheck, Zap } from "lucide-react";

export function generateMetadata(): Metadata {
  return {
    title: "Code IPTV Expiré ou Bloqué : Comment Renouveler Immédiatement 2025",
    description:
      "Votre code d'activation Atlas Pro ou abonnement IPTV est expiré ? Renouvelez votre accès 12 mois en moins de 15 minutes et conservez vos playlists sans réinstallation.",
    alternates: {
      canonical: "https://iboatlaspro.com/centre-d-aide/depannage/code-expire/",
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
    title: "Écran Noir & Buffering IPTV",
    href: "/centre-d-aide/depannage/ecran-noir-buffering/",
    description: "Comment éliminer les ralentissements, saccades et coupures sur vos flux TV en direct.",
    badge: "Optimisation",
  },
];

export default function CodeExpirePage() {
  const breadcrumbItems = [
    { label: "Centre d'aide", href: "/centre-d-aide/" },
    { label: "Dépannage", href: "/centre-d-aide/depannage/" },
    { label: "Code Expiré", href: "/centre-d-aide/depannage/code-expire/" },
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
              RÉACTIVATION EXPRESS
            </span>
            <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Votre Code ou Abonnement IPTV est{" "}
              <span className="gradient-text-blue">Expiré</span> ?
            </h1>
            <p className="mt-4 text-base text-[#9FB0CC] leading-relaxed">
              Lorsque votre période d&apos;abonnement arrive à échéance, le
              serveur coupe automatiquement le flux de diffusion. Vous pouvez le
              réactiver en quelques clics sans réinstaller votre application.
            </p>
          </header>

          <div className="space-y-8 text-sm sm:text-base text-white/90 leading-relaxed">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0A1428] border border-[#1A2A4A] space-y-4">
              <h2 className="text-xl font-bold text-white">
                Faut-il réinstaller vos applications ou reconfigurer votre Smart TV ?
              </h2>
              <p className="text-[#9FB0CC] text-xs sm:text-sm">
                <strong>Non !</strong> Vos applications (Atlas Pro ONTV, IBO Player, IPTV Smarters) restent installées sur votre téléviseur. Dès validation de votre renouvellement, nous réactivons le compte lié à votre identifiant ou adresse MAC à distance.
              </p>
            </div>

            {/* Direct Conversion Offer Box */}
            <div className="p-8 sm:p-10 rounded-2xl bg-[#0A1428] border-2 border-[#1E7BFF] glow-card-active shadow-[0_0_40px_rgba(30,123,255,0.3)] space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#1A2A4A]">
                <div>
                  <span className="text-xs font-bold text-[#1E7BFF] uppercase tracking-wider">
                    FORMULE DE RENOUVELLEMENT 12 MOIS
                  </span>
                  <div className="text-3xl sm:text-4xl font-extrabold text-white mt-1">
                    € 39,99{" "}
                    <span className="text-xs font-normal text-[#9FB0CC]">
                      pour un an complet
                    </span>
                  </div>
                </div>
                <div className="text-xs font-bold text-[#22C55E] bg-[#22C55E]/10 px-3 py-1.5 rounded-full border border-[#22C55E]/30 text-center">
                  Réactivation sous 15 minutes
                </div>
              </div>

              <ul className="space-y-3 text-xs sm:text-sm text-white/90">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1E7BFF] flex-shrink-0" />
                  Conservation intégrale de vos favoris et réglages
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1E7BFF] flex-shrink-0" />
                  Accès à plus de 10 000 chaînes 4K et 50 000 films VOD
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1E7BFF] flex-shrink-0" />
                  Assistance prioritaire 24/7 par WhatsApp
                </li>
              </ul>

              <Link
                href="/abonnement-atlas-pro-12-mois/"
                className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-bold text-white bg-[#1E7BFF] hover:bg-[#2D9CFF] glow-primary transition-all"
              >
                <span>Renouveler votre abonnement Atlas Pro 12 mois</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <RelatedGuides
            title="Autres Fiches Dépannage"
            subtitle="Consultez nos solutions aux pannes fréquentes pour retrouver un streaming fluide."
            guides={relatedDepannageGuides}
          />
        </article>
      </main>

      <StickyCTA
        title="Réactivation express de votre code expiré"
        buttonText="Renouveler maintenant"
        href="/abonnement-atlas-pro-12-mois/"
      />
      <Footer />
    </div>
  );
}
