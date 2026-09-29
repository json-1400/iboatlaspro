import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CheckCircle, AlertTriangle, ArrowRight, Zap } from "lucide-react";

export function generateMetadata(): Metadata {
  return {
    title: "IBO Player Gratuit : Période d'Essai 7 Jours & Fonctionnement",
    description:
      "Tout savoir sur l'offre IBO Player gratuit : 7 jours d'essai offerts, fonctionnement de la licence et comment continuer à regarder vos chaînes après l'expiration.",
    alternates: {
      canonical: "https://iboatlaspro.com/abonnement-ibo-player/gratuit/",
    },
  };
}

export default function IboGratuitPage() {
  const breadcrumbItems = [
    { label: "Abonnement IBO Player", href: "/abonnement-ibo-player/" },
    { label: "IBO Player Gratuit", href: "/abonnement-ibo-player/gratuit/" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#040A17] text-white">
      <Navbar />

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbItems} />
        </div>

        <section className="py-12 md:py-20 glow-stadium">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <span className="px-3.5 py-1.5 rounded-full text-xs font-bold text-white bg-[#0A1428] border border-[#1A2A4A]">
                EXPLICATION ESSAI
              </span>
              <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                IBO Player <span className="gradient-text-blue">Gratuit</span> :
                Comment ça marche ?
              </h1>
              <p className="mt-4 text-base text-[#9FB0CC] leading-relaxed">
                Lors de votre premier téléchargement sur Smart TV ou Android,
                IBO Player accorde automatiquement une période d&apos;essai
                gratuite de 7 jours.
              </p>
            </div>

            <div className="mt-10 p-6 sm:p-8 rounded-2xl bg-[#0A1428] border border-[#1A2A4A] space-y-6">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-[#060E1F] border border-[#1A2A4A]">
                <CheckCircle className="w-5 h-5 text-[#22C55E] flex-shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-white/90">
                  <strong>Pendant les 7 premiers jours :</strong> L&apos;application
                  est 100% fonctionnelle sans paiement. Vous pouvez tester vos
                  listes de lecture M3U et apprécier l&apos;interface.
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-[#060E1F] border border-[#1A2A4A]">
                <AlertTriangle className="w-5 h-5 text-[#FFB800] flex-shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-white/90">
                  <strong>Après les 7 jours :</strong> Un écran de blocage vous
                  demande d&apos;activer la licence. Vos listes et favoris restent
                  sauvegardés, mais la lecture vidéo est suspendue.
                </div>
              </div>

              <div className="pt-4 text-center space-y-4">
                <h3 className="text-lg font-bold text-white">
                  Votre période d&apos;essai gratuite est terminée ?
                </h3>
                <p className="text-xs sm:text-sm text-[#9FB0CC]">
                  Débloquez votre lecteur pour une année entière en seulement
                  quelques minutes grâce à notre portail officiel.
                </p>
                <Link
                  href="/abonnement-ibo-player/activation/"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-bold text-white bg-[#1E7BFF] hover:bg-[#2D9CFF] glow-primary transition-all"
                >
                  <span>Activer ma licence pour 1 an (7,99 €)</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
