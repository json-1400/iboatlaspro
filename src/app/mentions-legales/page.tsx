import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export function generateMetadata(): Metadata {
  return {
    title: "Mentions Légales : iboatlaspro.com",
    description: "Informations légales et hébergement du site iboatlaspro.com.",
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
            <section className="space-y-2">
              <h2 className="text-lg font-bold text-white">Éditeur du site</h2>
              <p>
                Le site <strong>iboatlaspro.com</strong> est édité par l&apos;équipe
                technique internationale iboatlaspro, spécialisée dans les
                solutions de divertissement multimédia et l&apos;assistance
                numérique.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-white">Hébergement</h2>
              <p>
                Le site est hébergé sur une infrastructure cloud distribuée haute
                disponibilité (Vercel Inc. / Netlify Inc.), avec réplication de
                données sécurisée en Europe.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-white">Contact & Support</h2>
              <p>
                Pour toute question technique ou demande d&apos;assistance,
                veuillez nous contacter via WhatsApp ou par e-mail à l&apos;adresse
                : <code>support@iboatlaspro.com</code>.
              </p>
            </section>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
