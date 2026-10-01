import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export function generateMetadata(): Metadata {
  return {
    title: "Conditions d'Utilisation : iboatlaspro.com",
    description:
      "Conditions d'utilisation des services d'assistance technique à la configuration d'applications IPTV sur iboatlaspro.com.",
    alternates: {
      canonical: "https://iboatlaspro.com/conditions-utilisation/",
    },
  };
}

export default function ConditionsUtilisationPage() {
  const breadcrumbItems = [
    { label: "Conditions d'utilisation", href: "/conditions-utilisation/" },
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
            Conditions d&apos;utilisation
          </h1>

          <div className="space-y-6 text-sm text-[#9FB0CC] leading-relaxed">
            <section className="space-y-2">
              <h2 className="text-lg font-bold text-white">1. Objet et nature du service</h2>
              <p>
                iboatlaspro.com est un <strong>prestataire de services d&apos;assistance
                technique</strong> pour la configuration d&apos;applications IPTV tierces.
                Le site <strong>ne diffuse, n&apos;héberge ni ne transmet aucun flux
                audiovisuel</strong>. Les identifiants fournis sont des codes de
                configuration pour des applications disponibles publiquement.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-white">2. Acceptation des conditions</h2>
              <p>
                En passant commande sur iboatlaspro.com, vous acceptez pleinement et
                sans réserve les présentes conditions d&apos;utilisation. Si vous n&apos;acceptez
                pas ces conditions, veuillez ne pas utiliser nos services.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-white">3. Commande et activation</h2>
              <p>
                Après confirmation de votre paiement, vos identifiants de configuration
                vous sont envoyés par e-mail et WhatsApp dans un délai habituel de
                <strong> 15 minutes</strong>. En cas de délai exceptionnel, notre support
                est disponible 24h/24 et 7j/7.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-white">4. Paiement sécurisé</h2>
              <p>
                Toutes les transactions sont traitées par <strong>Stripe</strong> et/ou
                {" "}<strong>PayPal</strong>. Vos données bancaires sont chiffrées (TLS 1.3)
                et ne sont jamais stockées sur nos serveurs.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-white">5. Responsabilité de l&apos;utilisateur</h2>
              <p>
                L&apos;utilisateur est seul responsable du matériel utilisé (téléviseur,
                décodeur, connexion Internet &gt; 25 Mbps pour la 4K) et de la
                conformité de son usage avec la législation en vigueur dans son pays
                de résidence.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-white">6. Règlement des litiges (UE)</h2>
              <p>
                En cas de litige non résolu à l&apos;amiable, vous pouvez recourir à la
                plateforme européenne de règlement en ligne des litiges (RLL) :{" "}
                <a
                  href="https://ec.europa.eu/consumers/odr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1E7BFF] hover:underline"
                >
                  ec.europa.eu/consumers/odr
                </a>
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-white">7. Contact</h2>
              <p>
                Pour toute question relative à ces conditions :{" "}
                <a
                  href="mailto:support@iboatlaspro.com"
                  className="text-[#1E7BFF] hover:underline"
                >
                  support@iboatlaspro.com
                </a>
              </p>
            </section>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
