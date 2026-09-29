import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SiloHeader } from "@/components/SiloHeader";
import { ExpiredAlert } from "@/components/ExpiredAlert";
import { AlertTriangle, ArrowRight, RefreshCw, Zap } from "lucide-react";

export function generateMetadata(): Metadata {
  return {
    title: "Dépannage IPTV & Solutions aux Erreurs Fréquentes : Guide Complet",
    description:
      "Résolvez rapidement les problèmes courants d'IPTV : message d'erreur de connexion au serveur, écran noir, buffering constant et code d'accès expiré.",
    alternates: {
      canonical: "https://iboatlaspro.com/centre-d-aide/depannage/",
    },
  };
}

export default function DepannageHubPage() {
  const breadcrumbItems = [
    { label: "Centre d'aide", href: "/centre-d-aide/" },
    { label: "Dépannage & Erreurs", href: "/centre-d-aide/depannage/" },
  ];

  const issues = [
    {
      title: "Erreur de Connexion au Serveur",
      desc: "L'application affiche 'Server Connection Failed' ou ne charge pas les catégories. Diagnostic réseau et DNS.",
      href: "/centre-d-aide/depannage/erreur-connexion-serveur/",
      badge: "PROBLÈME FRÉQUENT",
    },
    {
      title: "Écran Noir & Buffering Constant",
      desc: "La vidéo saccade, tourne en boucle ou affiche un écran noir sur certaines chaînes. Ajustements du lecteur et décodeur.",
      href: "/centre-d-aide/depannage/ecran-noir-buffering/",
      badge: "OPTIMISATION FLUX",
    },
    {
      title: "Code ou Abonnement Expiré",
      desc: "Votre compte est arrivé à échéance. Comment renouveler immédiatement et conserver vos playlists et favoris.",
      href: "/centre-d-aide/depannage/code-expire/",
      badge: "RENOUVELLEMENT",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#040A17] text-white">
      <Navbar />

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbItems} />
        </div>

        <SiloHeader
          badge="SUPPORT TECHNIQUE RAPIDE"
          titlePrefix="Dépannage &"
          titleGradient="Solutions aux Erreurs"
          description="Trouvez des diagnostics clairs et des solutions immédiates pour réparer votre flux IPTV sans attendre le support."
          primaryCtaText="Consulter les solutions"
          primaryCtaHref="#issues-grid"
          secondaryCtaText="Contacter WhatsApp"
          secondaryCtaHref={process.env.NEXT_PUBLIC_WHATSAPP_URL || "https://wa.me/212715214002"}
        />

        <section id="issues-grid" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {issues.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="p-8 rounded-2xl bg-[#0A1428] border border-[#1A2A4A] hover:border-[#1E7BFF] transition-all group flex flex-col justify-between space-y-4"
              >
                <div>
                  <span className="text-[10px] font-bold text-[#1E7BFF] bg-[#1E7BFF]/10 px-2.5 py-1 rounded-full border border-[#1E7BFF]/30">
                    {item.badge}
                  </span>
                  <h2 className="text-xl font-bold text-white mt-4 group-hover:text-[#1E7BFF] transition-colors">
                    {item.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-[#9FB0CC] mt-2 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#1E7BFF] pt-2">
                  <span>Voir la solution pas à pas</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12">
            <ExpiredAlert />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
