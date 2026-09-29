import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export function generateMetadata(): Metadata {
  return {
    title: "Conditions Générales de Vente (CGV) : iboatlaspro",
    description: "Conditions générales de vente et d'utilisation des services d'assistance technique et abonnements sur iboatlaspro.com.",
    alternates: {
      canonical: "https://iboatlaspro.com/cgv/",
    },
  };
}

export default function CgvPage() {
  const breadcrumbItems = [{ label: "CGV", href: "/cgv/" }];

  return (
    <div className="min-h-screen flex flex-col bg-[#040A17] text-white">
      <Navbar />

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbItems} />
        </div>

        <article className="py-12 md:py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-8">
            Conditions Générales de Vente (CGV)
          </h1>

          <div className="space-y-6 text-sm text-[#9FB0CC] leading-relaxed">
            <section className="space-y-2">
              <h2 className="text-lg font-bold text-white">1. Objet</h2>
              <p>
                Les présentes Conditions Générales de Vente régissent les droits
                et obligations des parties dans le cadre de la fourniture de
                licences d&apos;applications et d&apos;assistance à la configuration
                de flux numériques sur iboatlaspro.com.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-white">2. Commandes et Activation</h2>
              <p>
                Toute commande effectuée sur le site entraîne l&apos;acceptation
                pleine et entière des présentes conditions. Les codes d&apos;accès
                ou licences sont envoyés par e-mail ou messagerie instantanée
                après confirmation du paiement dans un délai habituel de 15
                minutes.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-white">3. Droit de rétractation & Remboursement</h2>
              <p>
                Conformément à la législation en vigueur relative aux contenus
                numériques fournis immédiatement, le droit de rétractation ne
                s&apos;applique plus une fois le code d&apos;activation délivré et
                activé. Nous offrons toutefois une garantie d&apos;assistance
                technique pour résoudre tout éventuel dysfonctionnement.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-white">4. Responsabilité du client</h2>
              <p>
                L&apos;utilisateur est seul responsable du matériel utilisé
                (téléviseur, boîtier, connexion Internet haut débit requise &gt;
                25 Mbps pour la 4K) et de la conformité de son usage.
              </p>
            </section>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
