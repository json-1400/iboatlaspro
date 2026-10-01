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
              <h2 className="text-lg font-bold text-white">1. Objet et nature du service</h2>
              <p>
                Les présentes Conditions Générales de Vente régissent les droits
                et obligations des parties dans le cadre de la fourniture de
                services d&apos;assistance technique à la configuration d&apos;applications
                IPTV sur iboatlaspro.com.
              </p>
              <p>
                iboatlaspro.com est un <strong>prestataire de services d&apos;assistance
                technique</strong>. Le site ne diffuse, n&apos;héberge ni ne transmet aucun
                flux audiovisuel. Les codes fournis sont des identifiants de
                configuration pour des applications tierces disponibles publiquement.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-white">2. Éditeur et vendeur</h2>
              <ul className="list-disc list-inside space-y-1 pl-2">
                <li><strong>Raison sociale :</strong> iboatlaspro (auto-entrepreneur)</li>
                <li><strong>SIRET :</strong> [Numéro SIRET à renseigner]</li>
                <li><strong>Adresse :</strong> [Adresse postale complète à renseigner]</li>
                <li>
                  <strong>Email :</strong>{" "}
                  <a href="mailto:support@iboatlaspro.com" className="text-[#1E7BFF] hover:underline">
                    support@iboatlaspro.com
                  </a>
                </li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-white">3. Commandes et Activation</h2>
              <p>
                Toute commande effectuée sur le site entraîne l&apos;acceptation
                pleine et entière des présentes conditions. Les codes d&apos;accès
                ou identifiants de configuration sont envoyés par e-mail ou
                messagerie instantanée après confirmation du paiement dans un
                délai habituel de 15 minutes.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-white">4. Paiement</h2>
              <p>
                Les paiements sont traités de manière sécurisée via{" "}
                <strong>Stripe</strong> et/ou <strong>PayPal</strong>.
                iboatlaspro.com ne stocke aucune donnée bancaire. Toutes les
                transactions sont chiffrées (TLS 1.3).
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-white">5. Droit de rétractation &amp; Remboursement</h2>
              <p>
                Conformément à l&apos;article L.221-28 du Code de la consommation
                relatif aux contenus numériques fournis immédiatement sur demande
                expresse du client, le droit de rétractation de 14 jours{" "}
                <strong>ne s&apos;applique plus</strong> une fois le code
                d&apos;activation délivré et utilisé.
              </p>
              <p>
                Nous offrons toutefois une garantie d&apos;assistance technique
                pour résoudre tout éventuel dysfonctionnement dans les 48 heures
                suivant la livraison.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-white">6. Responsabilité du client</h2>
              <p>
                L&apos;utilisateur est seul responsable du matériel utilisé
                (téléviseur, boîtier, connexion Internet haut débit requise &gt;
                25 Mbps pour la 4K) et de la conformité de son usage avec la
                législation en vigueur dans son pays de résidence.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-white">7. Règlement des litiges (UE)</h2>
              <p>
                En cas de litige non résolu à l&apos;amiable, vous pouvez recourir
                à la plateforme européenne de règlement en ligne des litiges (RLL) :
              </p>
              <p>
                <a
                  href="https://ec.europa.eu/consumers/odr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1E7BFF] hover:underline"
                >
                  https://ec.europa.eu/consumers/odr
                </a>
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-white">8. Droit applicable</h2>
              <p>
                Les présentes CGV sont soumises au droit français. Tout litige
                relève de la compétence exclusive des tribunaux compétents.
              </p>
            </section>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
