import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SiloHeader } from "@/components/SiloHeader";
import { StickyCTA } from "@/components/StickyCTA";
import { Tv, Box, ArrowRight, Smartphone, Monitor, Cast, Laptop } from "lucide-react";

export function generateMetadata(): Metadata {
  return {
    title: "Guides d'Installation IPTV : Smart TV, Fire Stick, iPhone, PC & Android",
    description:
      "Toutes les instructions pour installer et configurer Atlas Pro et IPTV sur Smart TV Samsung/LG, Fire TV Stick, iPhone, iPad, Chromecast, PC Windows, Mac et Box Android.",
    keywords:
      "installation atlas pro, installer atlas pro, configuration iptv, atlas pro smart tv, atlas pro fire stick, atlas pro iphone, atlas pro pc windows, atlas pro chromecast",
    alternates: {
      canonical: "https://iboatlaspro.com/centre-d-aide/installation/",
    },
  };
}

export default function InstallationHubPage() {
  const breadcrumbItems = [
    { label: "Centre d'aide", href: "/centre-d-aide/" },
    { label: "Installation & Matériel", href: "/centre-d-aide/installation/" },
  ];

  const guides = [
    {
      title: "Smart TV (Samsung & LG)",
      desc: "Installation simple via les stores Tizen et webOS avec IBO Player, IPTV Smarters ou Smart IPTV.",
      href: "/centre-d-aide/installation/smart-tv/",
      icon: Tv,
    },
    {
      title: "Amazon Fire TV Stick",
      desc: "Téléchargement d'Atlas Pro ONTV et Smarters Pro via l'application Downloader en 3 étapes.",
      href: "/centre-d-aide/installation/fire-tv-stick/",
      icon: Monitor,
    },
    {
      title: "Box Android & Google TV",
      desc: "Configuration sur Xiaomi Mi Box, Nvidia Shield, Smart TV Android et smartphones.",
      href: "/centre-d-aide/installation/android-tv/",
      icon: Smartphone,
    },
    {
      title: "iPhone & iPad (iOS)",
      desc: "Installation d'Atlas Pro et Smarters Pro sur iOS via l'App Store Apple. Configuration en 5 minutes.",
      href: "/centre-d-aide/installation/iphone-ios/",
      icon: Smartphone,
    },
    {
      title: "Google Chromecast",
      desc: "Diffusion et installation d'Atlas Pro sur Chromecast et Chromecast avec Google TV en 4K.",
      href: "/centre-d-aide/installation/chromecast/",
      icon: Cast,
    },
    {
      title: "PC Windows & Mac",
      desc: "Regardez vos chaînes sur ordinateur avec IPTV Smarters Pro, VLC ou un émulateur Android.",
      href: "/centre-d-aide/installation/pc-windows/",
      icon: Laptop,
    },
    {
      title: "Boîtiers MAG (254, 322, 520)",
      desc: "Configuration de l'URL du portail interne STB pour décodeurs Infomir MAG.",
      href: "/centre-d-aide/installation/mag-box/",
      icon: Box,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#040A17] text-white">
      <Navbar />

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbItems} />
        </div>

        <SiloHeader
          badge="GUIDES DE CONFIGURATION"
          titlePrefix="Tutoriels d'Installation"
          titleGradient="IPTV par Appareil"
          description="Sélectionnez votre type d'appareil pour accéder au tutoriel détaillé avec captures d'écran et conseils d'optimisation du débit 4K."
          primaryCtaText="Abonnement Atlas Pro"
          primaryCtaHref="/abonnement-atlas-pro/12-mois/"
          secondaryCtaText="Support technique"
          secondaryCtaHref="/centre-d-aide/"
        />

        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {guides.map((item) => {
              const IconComp = item.icon;
              return (
                <Link
                  key={item.title}
                  href={item.href}
                  className="p-8 rounded-2xl bg-[#0A1428] border border-[#1A2A4A] hover:border-[#1E7BFF] transition-all group flex flex-col justify-between space-y-4"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#1E7BFF]/20 text-[#1E7BFF] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h2 className="text-xl font-bold text-white group-hover:text-[#1E7BFF] transition-colors">
                      {item.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-[#9FB0CC] mt-2 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#1E7BFF] pt-2">
                    <span>Lire le guide complet</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      </main>

      <StickyCTA
        title="Besoin d'un abonnement 4K compatible ?"
        buttonText="Découvrir l'offre 12 mois"
        href="/abonnement-atlas-pro/12-mois/"
      />
      <Footer />
    </div>
  );
}
