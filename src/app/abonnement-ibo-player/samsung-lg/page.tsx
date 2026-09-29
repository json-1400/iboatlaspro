import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { StickyCTA } from "@/components/StickyCTA";
import { Tv, Check, ArrowRight, ShieldCheck, Zap } from "lucide-react";

export function generateMetadata(): Metadata {
  return {
    title: "IBO Player Pro pour Smart TV Samsung & LG : Installation & Activation",
    description:
      "Installez et activez IBO Player Pro sur votre Smart TV Samsung (Tizen) et LG (webOS). Guide pas à pas et licence officielle pour diffuser vos chaînes en 4K.",
    alternates: {
      canonical: "https://iboatlaspro.com/abonnement-ibo-player/samsung-lg/",
    },
  };
}

export default function IboSamsungLgPage() {
  const breadcrumbItems = [
    { label: "Abonnement IBO Player", href: "/abonnement-ibo-player/" },
    { label: "Smart TV Samsung & LG", href: "/abonnement-ibo-player/samsung-lg/" },
  ];

  const steps = [
    {
      step: "01",
      title: "Télécharger l'application depuis le store",
      desc: "Allumez votre Smart TV, ouvrez le Samsung Apps ou le LG Content Store, et tapez 'IBO Player' dans la barre de recherche.",
    },
    {
      step: "02",
      title: "Récupérer vos identifiants à l'écran",
      desc: "Ouvrez l'application IBO Player. Notez soigneusement l'Adresse MAC et le Device Key qui s'affichent à l'écran.",
    },
    {
      step: "03",
      title: "Activer votre licence officielle",
      desc: "Rendez-vous sur notre portail d'activation pour débloquer votre accès annuel en moins de 5 minutes.",
    },
    {
      step: "04",
      title: "Profiter de vos flux 4K / FHD",
      desc: "Redémarrez l'application sur votre téléviseur : vos chaînes et bouquets TV sont instantanément chargés avec zapping instantané.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#040A17] text-white">
      <Navbar />

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbItems} />
        </div>

        <section className="py-12 md:py-20 glow-stadium">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <span className="px-3.5 py-1.5 rounded-full text-xs font-bold text-white bg-[#0A1428] border border-[#1E7BFF]">
                GUIDE SMART TV
              </span>
              <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                IBO Player Pro pour{" "}
                <span className="gradient-text-blue">Smart TV Samsung & LG</span>
              </h1>
              <p className="mt-4 text-base sm:text-lg text-[#9FB0CC] leading-relaxed">
                Le moyen le plus élégant et fluide de regarder la télévision en
                haute définition directement sur votre grand écran, sans
                boîtier externe ni câble supplémentaire.
              </p>
            </div>

            {/* Steps grid */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
              {steps.map((item) => (
                <div
                  key={item.step}
                  className="p-6 rounded-2xl bg-[#0A1428] border border-[#1A2A4A] flex flex-col gap-3"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#1E7BFF] text-white text-sm font-extrabold flex items-center justify-center">
                    {item.step}
                  </div>
                  <h2 className="text-lg font-bold text-white">{item.title}</h2>
                  <p className="text-xs sm:text-sm text-[#9FB0CC] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA Box */}
            <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-[#0A1428] to-[#0E1C38] border border-[#1E7BFF]/60 text-center space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Prêt à activer IBO Player sur votre Smart TV ?
              </h3>
              <p className="text-xs sm:text-sm text-[#9FB0CC] max-w-xl mx-auto">
                Bénéficiez d&apos;une activation immédiate par nos experts pour
                seulement 7,99 € par an ou optez pour notre formule avec
                abonnement 12 mois inclus.
              </p>
              <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/abonnement-ibo-player/activation/"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold text-white bg-[#1E7BFF] hover:bg-[#2D9CFF] glow-primary transition-all"
                >
                  <span>Activer mon IBO Player</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/abonnement-atlas-pro/12-mois/"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-white border border-[#1A2A4A] hover:border-[#1E7BFF] bg-[#0A1428]"
                >
                  <span>Pack avec abonnement 12 mois</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <StickyCTA
        title="Activation IBO Player Samsung & LG"
        buttonText="Activer ma TV"
        href="/abonnement-ibo-player/activation/"
      />
      <Footer />
    </div>
  );
}
