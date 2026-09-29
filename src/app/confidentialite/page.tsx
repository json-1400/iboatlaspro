import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export function generateMetadata(): Metadata {
  return {
    title: "Politique de Confidentialité & RGPD : iboatlaspro",
    description: "Protection de vos données personnelles et conformité RGPD sur iboatlaspro.com.",
    alternates: {
      canonical: "https://iboatlaspro.com/confidentialite/",
    },
  };
}

export default function ConfidentialitePage() {
  const breadcrumbItems = [
    { label: "Politique de Confidentialité", href: "/confidentialite/" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#040A17] text-white">
      <Navbar />

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbItems} />
        </div>

        <article className="py-12 md:py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-8">
            Politique de Confidentialité
          </h1>

          <div className="space-y-6 text-sm text-[#9FB0CC] leading-relaxed">
            <section className="space-y-2">
              <h2 className="text-lg font-bold text-white">
                1. Collecte des données
              </h2>
              <p>
                Nous collectons uniquement les informations strictement
                nécessaires au traitement de vos commandes et à l&apos;activation
                de vos accès (adresse e-mail, numéro de contact WhatsApp, adresse
                MAC de votre appareil si applicable).
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-white">
                2. Sécurité et Non-partage
              </h2>
              <p>
                Vos données personnelles ne sont jamais vendues, cédées ou
                transférées à des tiers publicitaires. Elles sont chiffrées selon
                les protocoles de sécurité SSL/TLS les plus stricts.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-white">
                3. Vos droits (RGPD)
              </h2>
              <p>
                Conformément au Règlement Général sur la Protection des Données
                (RGPD), vous disposez d&apos;un droit d&apos;accès, de
                rectification et de suppression de vos données sur simple demande
                par e-mail à : <code>privacy@iboatlaspro.com</code>.
              </p>
            </section>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
