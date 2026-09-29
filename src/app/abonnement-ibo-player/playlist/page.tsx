import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ListPlus, ArrowRight, ShieldCheck, Zap } from "lucide-react";

export function generateMetadata(): Metadata {
  return {
    title: "Playlist IBO Player : Configurer Lien M3U & Xtream Codes Facilement",
    description:
      "Tutoriel complet pour ajouter et configurer votre playlist IBO Player (lien M3U, identifiants Xtream Codes) et profiter de vos chaînes TV en 4K.",
    alternates: {
      canonical: "https://iboatlaspro.com/abonnement-ibo-player/playlist/",
    },
  };
}

export default function IboPlaylistPage() {
  const breadcrumbItems = [
    { label: "Abonnement IBO Player", href: "/abonnement-ibo-player/" },
    { label: "Configuration Playlist", href: "/abonnement-ibo-player/playlist/" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#040A17] text-white">
      <Navbar />

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbItems} />
        </div>

        <section className="py-12 md:py-20 glow-stadium">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="px-3.5 py-1.5 rounded-full text-xs font-bold text-white bg-[#0A1428] border border-[#1E7BFF]">
                TUTORIEL PLAYLIST
              </span>
              <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                Comment ajouter une{" "}
                <span className="gradient-text-blue">Playlist IBO Player</span> ?
              </h1>
              <p className="mt-4 text-base text-[#9FB0CC] leading-relaxed">
                Injectez facilement votre abonnement IPTV Atlas Pro sur votre
                application IBO Player en quelques étapes simples.
              </p>
            </div>

            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-[#0A1428] border border-[#1A2A4A] flex flex-col sm:flex-row items-start gap-4">
                <span className="w-8 h-8 rounded-full bg-[#1E7BFF] text-white font-bold flex items-center justify-center flex-shrink-0 text-sm">
                  1
                </span>
                <div>
                  <h2 className="text-base sm:text-lg font-bold text-white">
                    Accéder au portail de gestion IBO
                  </h2>
                  <p className="text-xs sm:text-sm text-[#9FB0CC] mt-1 leading-relaxed">
                    Ouvrez votre navigateur web sur votre smartphone ou PC et
                    rendez-vous sur le site officiel de gestion d&apos;IBO Player.
                    Connectez-vous avec votre adresse MAC et votre Device Key.
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-[#0A1428] border border-[#1A2A4A] flex flex-col sm:flex-row items-start gap-4">
                <span className="w-8 h-8 rounded-full bg-[#1E7BFF] text-white font-bold flex items-center justify-center flex-shrink-0 text-sm">
                  2
                </span>
                <div>
                  <h2 className="text-base sm:text-lg font-bold text-white">
                    Cliquer sur &laquo; Add Playlist &raquo; ou &laquo; Xtream Codes &raquo;
                  </h2>
                  <p className="text-xs sm:text-sm text-[#9FB0CC] mt-1 leading-relaxed">
                    Nous recommandons la méthode Xtream Codes qui permet un
                    chargement plus rapide des catégories, de l&apos;EPG et des
                    logos de chaînes.
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-[#0A1428] border border-[#1A2A4A] flex flex-col sm:flex-row items-start gap-4">
                <span className="w-8 h-8 rounded-full bg-[#1E7BFF] text-white font-bold flex items-center justify-center flex-shrink-0 text-sm">
                  3
                </span>
                <div>
                  <h2 className="text-base sm:text-lg font-bold text-white">
                    Entrer les identifiants fournis avec votre abonnement
                  </h2>
                  <p className="text-xs sm:text-sm text-[#9FB0CC] mt-1 leading-relaxed">
                    Renseignez le nom de votre playlist, l&apos;URL du serveur
                    (fournie par nos soins), votre nom d&apos;utilisateur et
                    votre mot de passe. Cliquez sur &laquo; Save &raquo;.
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-[#0A1428] border border-[#1A2A4A] flex flex-col sm:flex-row items-start gap-4">
                <span className="w-8 h-8 rounded-full bg-[#1E7BFF] text-white font-bold flex items-center justify-center flex-shrink-0 text-sm">
                  4
                </span>
                <div>
                  <h2 className="text-base sm:text-lg font-bold text-white">
                    Recharger l&apos;application sur votre TV
                  </h2>
                  <p className="text-xs sm:text-sm text-[#9FB0CC] mt-1 leading-relaxed">
                    Retournez sur votre téléviseur et appuyez sur &laquo; Reload
                    &raquo; (ou redémarrez l&apos;application). Vos bouquets de
                    chaînes apparaissent immédiatement.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Conversion Box */}
            <div className="mt-12 p-8 rounded-2xl bg-[#060E1F] border border-[#1E7BFF]/40 text-center space-y-4">
              <h3 className="text-xl font-bold text-white">
                Besoin d&apos;une playlist IPTV 4K ultra-stable pour votre IBO Player ?
              </h3>
              <p className="text-xs sm:text-sm text-[#9FB0CC] max-w-xl mx-auto">
                Profitez de notre formule Atlas Pro 12 mois compatible à 100% avec
                IBO Player : zéro freeze, zap rapide et support dédié.
              </p>
              <Link
                href="/abonnement-atlas-pro/12-mois/"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-bold text-white bg-[#1E7BFF] hover:bg-[#2D9CFF] glow-primary transition-all"
              >
                <span>Découvrir l&apos;offre Atlas Pro 12 Mois</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
