import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SiloHeader } from "@/components/SiloHeader";
import { ExpiredAlert } from "@/components/ExpiredAlert";
import { DEPANNAGE_ARTICLES } from "@/data/depannage-articles";
import { ArrowRight, Wrench } from "lucide-react";

export function generateMetadata(): Metadata {
  return {
    title: "Dépannage Atlas Pro & IPTV : Toutes les Solutions 2026",
    description:
      "Résolvez en 5 minutes les problèmes Atlas Pro les plus fréquents : ne peut pas se connecter au serveur, erreur de lecture, identifiant perdu, écran noir, code expiré.",
    keywords:
      "depannage atlas pro, atlas pro ne fonctionne plus, atlas pro probleme, probleme atlas pro ontv, atlas pro erreur, atlas pro ne marche plus",
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {DEPANNAGE_ARTICLES.map((item, i) => (
              <Link
                key={item.slug}
                href={`/centre-d-aide/depannage/${item.slug}/`}
                className={`p-7 rounded-2xl bg-[#0A1428] border transition-all group flex flex-col justify-between space-y-4 ${
                  i === 0
                    ? "border-[#1E7BFF] shadow-[0_0_20px_rgba(30,123,255,0.15)]"
                    : "border-[#1A2A4A] hover:border-[#1E7BFF]"
                }`}
              >
                <div>
                  <span
                    className={`text-[10px] font-bold px-2.5 py-1 rounded-full border ${
                      i === 0
                        ? "text-[#22C55E] bg-[#22C55E]/10 border-[#22C55E]/30"
                        : "text-[#1E7BFF] bg-[#1E7BFF]/10 border-[#1E7BFF]/30"
                    }`}
                  >
                    {item.badge}
                  </span>
                  <h2 className="text-lg font-bold text-white mt-4 group-hover:text-[#1E7BFF] transition-colors">
                    {item.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-[#9FB0CC] mt-2 leading-relaxed">
                    {item.metaDescription}
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
