import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PricingSection } from "@/components/PricingSection";
import { ArrowRight, HelpCircle } from "lucide-react";

export function generateMetadata(): Metadata {
  return {
    title: "Prix Abonnement IPTV Smarters Pro : Tarifs 1, 3, 6 et 12 Mois",
    description:
      "Consultez les prix officiels de nos abonnements pour IPTV Smarters Pro. À partir de 9,99 € par mois jusqu'à 49,99 € l'année. Sans coupure et compatible tous supports.",
    alternates: {
      canonical: "https://iboatlaspro.com/abonnement-iptv-smarters-pro/prix/",
    },
  };
}

export default function SmartersPrixPage() {
  const breadcrumbItems = [
    {
      label: "Abonnement IPTV Smarters Pro",
      href: "/abonnement-iptv-smarters-pro/",
    },
    {
      label: "Grille Tarifaire",
      href: "/abonnement-iptv-smarters-pro/prix/",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#040A17] text-white">
      <Navbar />

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbItems} />
        </div>

        <section className="pt-12 pb-8 text-center max-w-3xl mx-auto px-4">
          <span className="px-3.5 py-1.5 rounded-full text-xs font-bold text-white bg-[#0A1428] border border-[#1A2A4A]">
            TRANSPARENCE TARIFAIRE
          </span>
          <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Prix et Tarifs{" "}
            <span className="gradient-text-blue">IPTV Smarters Pro</span>
          </h1>
          <p className="mt-4 text-base text-[#9FB0CC] leading-relaxed">
            Trouvez la formule adaptée à vos besoins. Tous nos forfaits
            comprennent l&apos;accès illimité à l&apos;intégralité des chaînes 4K
            et de la VOD, sans frais cachés.
          </p>
        </section>

        <PricingSection />

        <section className="py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 rounded-2xl bg-[#0A1428] border border-[#1A2A4A] space-y-4 text-center">
            <HelpCircle className="w-10 h-10 text-[#1E7BFF] mx-auto" />
            <h2 className="text-xl font-bold text-white">
              Une question sur nos tarifs Smarters Pro ?
            </h2>
            <p className="text-xs sm:text-sm text-[#9FB0CC] max-w-lg mx-auto">
              Notre équipe d&apos;assistance est disponible 24/7 sur WhatsApp
              pour vous guider dans le choix de votre formule ou vous fournir un
              test.
            </p>
            <Link
              href="/centre-d-aide/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-bold text-white border border-[#1E7BFF] hover:bg-[#1E7BFF]/10 transition-colors"
            >
              <span>Consulter notre Centre d&apos;aide</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
