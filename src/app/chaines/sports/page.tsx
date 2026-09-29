import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { StickyCTA } from "@/components/StickyCTA";
import { Trophy, Check, ArrowRight, Zap, ShieldCheck } from "lucide-react";

export function generateMetadata(): Metadata {
  return {
    title: "Chaînes Sport IPTV : Direct Football, Sports Mécaniques & Combats en 4K 50FPS",
    description:
      "Toutes les chaînes de sport en direct sur votre IPTV : grands championnats européens, sports mécaniques, arts martiaux et tournois mondiaux sans coupure et à 50 FPS.",
    alternates: {
      canonical: "https://iboatlaspro.com/chaines/sports/",
    },
  };
}

export default function ChainesSportPage() {
  const breadcrumbItems = [
    { label: "Chaînes", href: "/chaines/" },
    { label: "Chaînes Sport", href: "/chaines/sports/" },
  ];

  const sportsChannels = [
    {
      name: "Football Européen & Coupes Majeures",
      quality: "4K UHD & FHD 50 FPS",
      channels: "Multi-flux directs HD & Canaux Événements 4K",
      competitions: "Championnats Européens, Coupes Internationales, Grands Tournois",
    },
    {
      name: "Sports Mécaniques & Vitesse",
      quality: "4K UHD HDR 50 FPS",
      channels: "Canaux Spécialisés & Caméras Embarquées",
      competitions: "Courses sur Circuit, Grands Prix Internationaux, Rallyes",
    },
    {
      name: "Sports de Combat & Soirées Titres",
      quality: "FHD 50 FPS Sans Latence",
      channels: "Canaux Événements & Soirées Combats en Direct",
      competitions: "Arts Martiaux Mixtes, Boxe Mondiale, Chocs Internationaux",
    },
    {
      name: "Sports Américains & Omnisports",
      quality: "FHD 50 FPS & 4K UHD",
      channels: "Multiplex Tennis, Basket, Cyclisme & Athlétisme",
      competitions: "Grands Chelems, Ligues Nord-Américaines, Tours Cyclistes",
    },
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
                LE MEILLEUR DU SPORT EN DIRECT
              </span>
              <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                Chaînes Sport IPTV :{" "}
                <span className="gradient-text-blue">Zéro Latence & 50 FPS</span>
              </h1>
              <p className="mt-4 text-base text-[#9FB0CC] leading-relaxed">
                Suivez toutes les plus grandes compétitions sportives mondiales
                avec une fluidité absolue et des flux haute fidélité sans
                décalage.
              </p>
            </div>

            <div className="space-y-6">
              {sportsChannels.map((item) => (
                <div
                  key={item.name}
                  className="p-6 rounded-2xl bg-[#0A1428] border border-[#1A2A4A] flex flex-col md:flex-row md:items-center justify-between gap-6"
                >
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <h2 className="text-xl font-bold text-white">
                        {item.name}
                      </h2>
                      <span className="px-2.5 py-0.5 rounded text-[10px] font-bold text-white bg-[#1E7BFF]">
                        {item.quality}
                      </span>
                    </div>
                    <div className="text-xs text-[#1E7BFF] font-medium">
                      {item.channels}
                    </div>
                    <p className="text-xs sm:text-sm text-[#9FB0CC]">
                      <strong>Événements majeurs :</strong> {item.competitions}
                    </p>
                  </div>

                  <Link
                    href="/abonnement-atlas-pro/12-mois/"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-bold text-white bg-[#1E7BFF] hover:bg-[#2D9CFF] glow-primary transition-all flex-shrink-0"
                  >
                    <span>Regarder en direct</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>

            <div className="mt-12 p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-[#0A1428] via-[#0E1C38] to-[#0A1428] border-2 border-[#1E7BFF] text-center space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Ne manquez plus aucun grand match ni multiplex
              </h3>
              <p className="text-sm text-[#9FB0CC] max-w-xl mx-auto">
                Rejoignez des milliers de passionnés de sport profitant de nos flux Ultra HD 50 images par seconde avec zapping ultra-rapide.
              </p>
              <div className="pt-2">
                <Link
                  href="/abonnement-atlas-pro/12-mois/"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm sm:text-base font-bold text-white bg-[#1E7BFF] hover:bg-[#2D9CFF] glow-primary transition-all"
                >
                  <span>Regarder tous les matchs en direct avec l&apos;offre 12 mois (39,99 €)</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <StickyCTA
        title="Accédez à tous les matchs en direct"
        buttonText="Abonnement 1 an (39,99 €)"
        href="/abonnement-atlas-pro/12-mois/"
      />
      <Footer />
    </div>
  );
}
