import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export function generateMetadata(): Metadata {
  return {
    title: "Mentions Légales : iboatlaspro.com",
    description: "Informations légales, éditeur, hébergeur et responsable de publication du site iboatlaspro.com.",
    alternates: {
      canonical: "https://iboatlaspro.com/mentions-legales/",
    },
  };
}

export default function MentionsLegalesPage() {
  const breadcrumbItems = [{ label: "Mentions Légales", href: "/mentions-legales/" }];

  return (
    <div className="min-h-screen flex flex-col bg-[#040A17] text-white">
      <Navbar />

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbItems} />
        </div>

        <article className="py-12 md:py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-8">
            Mentions Légales
          </h1>

          <div className="space-y-6 text-sm text-[#9FB0CC] leading-relaxed">
            {/* Required by French LCEN law */}
            <section className="space-y-2">
              <h2 className="text-lg font-bold text-white">1. Éditeur du site</h2>
              <p>
                Le site <strong>iboatlaspro.com</strong> est édité par :
              </p>
              <ul className="list-disc list-inside space-y-1 pl-2">
                <li><strong>Raison sociale :</strong> iboatlaspro (auto-entrepreneur)</li>
                <li><strong>Responsable de publication :</strong> [Votre Nom Complet]</li>
                <li><strong>SIRET :</strong> [Numéro SIRET à renseigner]</li>
                <li><strong>Adresse :</strong> [Adresse postale complète à renseigner]</li>
                <li>
                  <strong>Contact :</strong>{" "}
                  <a href="mailto:support@iboatlaspro.com" className="text-[#1E7BFF] hover:underline">
                    support@iboatlaspro.com
                  </a>
                  {" "}/ WhatsApp : +212 715 214 002
                </li>
                <li>
                  <strong>Signalement DMCA / Droits :</strong>{" "}
                  <a href="mailto:dmca@iboatlaspro.com" className="text-[#1E7BFF] hover:underline">
                    dmca@iboatlaspro.com
                  </a>
                </li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-white">2. Hébergeur</h2>
              <ul className="list-disc list-inside space-y-1 pl-2">
                <li><strong>Société :</strong> Vercel Inc.</li>
                <li><strong>Adresse :</strong> 340 Pine Street, Suite 1202, San Francisco, CA 94104, États-Unis</li>
                <li>
                  <strong>Site web :</strong>{" "}
                  <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-[#1E7BFF] hover:underline">
                    vercel.com
                  </a>
                </li>
              </ul>
              <p className="mt-2">
                Base de données hébergée par <strong>Supabase Inc.</strong>, 970 Toa Payoh North #07-04, Singapore 318992.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-white">3. Activité du site</h2>
              <p>
                iboatlaspro.com est un prestataire de services d&apos;assistance technique pour la
                configuration d&apos;applications IPTV tierces. Le site <strong>ne diffuse, n&apos;héberge
                ni ne transmet aucun flux audiovisuel</strong>. Les codes d&apos;accès fournis sont des
                identifiants de configuration pour des applications disponibles publiquement.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-white">4. Propriété intellectuelle</h2>
              <p>
                L&apos;ensemble des éléments graphiques, textuels et structurels du site iboatlaspro.com
                est la propriété exclusive de l&apos;éditeur. Toute reproduction, même partielle,
                est interdite sans autorisation écrite préalable.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-white">5. Données personnelles (RGPD)</h2>
              <p>
                Les données collectées (adresse e-mail, numéro WhatsApp) sont uniquement utilisées
                pour la livraison de la commande et le support technique. Elles ne sont jamais
                revendues à des tiers. Conformément au RGPD, vous pouvez exercer vos droits d&apos;accès,
                de rectification et de suppression à l&apos;adresse :{" "}
                <a href="mailto:support@iboatlaspro.com" className="text-[#1E7BFF] hover:underline">
                  support@iboatlaspro.com
                </a>.
              </p>
            </section>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
