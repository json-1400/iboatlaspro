import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Check, ArrowRight, ShieldCheck, Zap, Star } from "lucide-react";

export function generateMetadata(): Metadata {
  return {
    title: "Abonnement IPTV Smarters Pro 1 An : Pack 12 Mois 4K Pas Cher",
    description:
      "Abonnement IPTV Smarters Pro 1 an pour seulement 49,99 €. Accédez à +10 000 chaînes HD/FHD/4K sans coupure avec vos identifiants Xtream Codes officiels.",
    alternates: {
      canonical: "https://iboatlaspro.com/abonnement-iptv-smarters-pro/1-an/",
    },
  };
}

export default function SmartersPro1AnPage() {
  const breadcrumbItems = [
    {
      label: "Abonnement IPTV Smarters Pro",
      href: "/abonnement-iptv-smarters-pro/",
    },
    {
      label: "Formule 1 An",
      href: "/abonnement-iptv-smarters-pro/1-an/",
    },
  ];

  const features = [
    "Identifiants Xtream Codes (Serveur URL, Nom d'utilisateur, Mot de passe)",
    "Plus de 10 000 chaînes directes françaises et internationales",
    "Bouquet sport intégral en 4K Ultra HD & Full HD 50 FPS",
    "Catalogue VOD cinéma et séries mis à jour quotidiennement",
    "Compatible IPTV Smarters Pro, Smarters Player Lite & Smarters Pro Plus",
    "Support multi-appareils (Android, iOS, Fire Stick, PC, Smart TV)",
    "Activation instantanée par e-mail et WhatsApp sous 15 minutes",
    "Assistance technique 24h/24 et 7j/7 pour la configuration",
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#040A17] text-white">
      <Navbar />

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbItems} />
        </div>

        <section className="py-12 md:py-20 glow-stadium">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="px-3.5 py-1.5 rounded-full text-xs font-bold text-white bg-[#0A1428] border border-[#1E7BFF]">
              OFFRE RECOMMANDÉE 12 MOIS
            </span>
            <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Abonnement IPTV Smarters Pro{" "}
              <span className="gradient-text-blue">1 An</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[#9FB0CC] max-w-xl mx-auto leading-relaxed">
              La formule idéale pour profiter d&apos;un an de divertissement sans
              coupure sur l&apos;application IPTV Smarters Pro.
            </p>

            <div className="mt-10 p-8 sm:p-10 rounded-2xl bg-[#0A1428] border-2 border-[#1E7BFF] glow-card-active max-w-2xl mx-auto text-left space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[#1A2A4A] gap-4">
                <div>
                  <div className="text-4xl font-extrabold text-white">
                    € 49,99
                  </div>
                  <div className="text-xs text-[#22C55E] font-bold mt-1">
                    Soit seulement 4,16 € / mois (Paiement unique pour 365 jours)
                  </div>
                </div>
                <div className="flex items-center gap-1 text-[#FFB800]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                  <span className="text-xs font-bold text-white ml-1">4.9/5</span>
                </div>
              </div>

              <ul className="space-y-3" aria-label="Inclus dans l'offre Smarters 1 an">
                {features.map((feat) => (
                  <li key={feat} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#1E7BFF] stroke-[3] mt-0.5 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-white/90">
                      {feat}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="pt-2">
                <Link
                  href="/commander/?plan=smarters-12m"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full text-base font-bold text-white bg-[#1E7BFF] hover:bg-[#2D9CFF] glow-primary transition-all duration-200"
                >
                  <span>Commander l&apos;offre 1 an Smarters Pro</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>

              <div className="flex items-center justify-between text-xs text-[#9FB0CC] pt-2">
                <span className="flex items-center gap-1">
                  <Zap className="w-3.5 h-3.5 text-[#1E7BFF]" />
                  Identifiants envoyés en 15 min
                </span>
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#22C55E]" />
                  Serveurs 10 Gbps anti-freeze
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
