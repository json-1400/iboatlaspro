import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export function generateMetadata(): Metadata {
  return {
    title: "Politique de Remboursement : iboatlaspro.com",
    description:
      "Découvrez notre politique de remboursement et de garantie de satisfaction pour les services d'assistance IPTV sur iboatlaspro.com.",
    alternates: {
      canonical: "https://iboatlaspro.com/politique-remboursement/",
    },
  };
}

export default function PolitiqueRemboursementPage() {
  const breadcrumbItems = [
    { label: "Politique de remboursement", href: "/politique-remboursement/" },
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
            Politique de remboursement
          </h1>

          <div className="space-y-6 text-sm text-[#9FB0CC] leading-relaxed">
            <section className="space-y-2">
              <h2 className="text-lg font-bold text-white">1. Nature du service et droit de rétractation</h2>
              <p>
                Conformément à l&apos;article L.221-28 du Code de la consommation,
                le droit de rétractation de 14 jours <strong>ne s&apos;applique pas</strong> aux
                contenus numériques fournis immédiatement et activés à la demande expresse
                du client. Une fois vos identifiants de configuration délivrés et activés,
                la prestation est réputée exécutée.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-white">2. Garantie assistance technique</h2>
              <p>
                Bien que les remboursements ne soient pas applicables après activation,
                nous offrons une <strong>garantie d&apos;assistance technique complète</strong> :
              </p>
              <ul className="list-disc list-inside space-y-1 pl-2">
                <li>Support 24h/24, 7j/7 via WhatsApp et e-mail</li>
                <li>Résolution de tout dysfonctionnement dans les <strong>48 heures</strong></li>
                <li>Remplacement des identifiants en cas de défaillance serveur de notre côté</li>
                <li>Renouvellement sans frais si le problème est imputable à notre infrastructure</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-white">3. Cas exceptionnels de remboursement</h2>
              <p>
                Un remboursement peut être accordé, à notre entière discrétion, dans les
                cas suivants :
              </p>
              <ul className="list-disc list-inside space-y-1 pl-2">
                <li>
                  Les identifiants n&apos;ont <strong>pas encore été délivrés</strong> et le délai
                  de 15 minutes a été largement dépassé sans communication de notre part
                </li>
                <li>
                  Une erreur de double facturation avérée de notre part
                </li>
              </ul>
              <p className="mt-2">
                Dans ces cas, soumettez votre demande à{" "}
                <a
                  href="mailto:support@iboatlaspro.com"
                  className="text-[#1E7BFF] hover:underline"
                >
                  support@iboatlaspro.com
                </a>{" "}
                dans les <strong>24 heures</strong> suivant la commande.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-white">4. Problèmes techniques non éligibles au remboursement</h2>
              <p>
                Les situations suivantes ne donnent pas droit à un remboursement, mais
                bénéficient d&apos;un support technique prioritaire :
              </p>
              <ul className="list-disc list-inside space-y-1 pl-2">
                <li>Connexion Internet insuffisante (&lt; 25 Mbps pour la 4K)</li>
                <li>Blocage DNS appliqué par votre fournisseur d&apos;accès Internet (FAI)</li>
                <li>Matériel incompatible ou obsolète</li>
                <li>Mauvaise configuration de l&apos;application côté utilisateur</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-white">5. Règlement des litiges (UE)</h2>
              <p>
                En cas de désaccord persistant, vous pouvez recourir à la plateforme
                européenne de règlement en ligne des litiges :{" "}
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
              <h2 className="text-lg font-bold text-white">6. Nous contacter</h2>
              <p>
                Pour toute demande liée à cette politique :{" "}
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
