import Link from "next/link";
import { Tv, Smartphone, Monitor, ShieldCheck, ArrowRight, Laptop } from "lucide-react";

export function DeviceCompatibilitySection() {
  const devices = [
    {
      category: "Samsung Smart TV",
      os: "Tizen OS (2018 à 2026+)",
      recommendedApp: "IBO Player / Net IPTV",
      installMethod: "Téléchargement direct depuis le Samsung Smart Hub officiel",
      badge: "INSTALLATION FACILE",
      guideHref: "/centre-d-aide/installation/smart-tv/",
      icon: Tv,
    },
    {
      category: "LG Smart TV",
      os: "webOS (v4.0 à v24+)",
      recommendedApp: "IBO Player Pro / Smarters",
      installMethod: "Disponible sur le LG Content Store officiel en 1 clic",
      badge: "OPTIMISÉ 4K HDR",
      guideHref: "/centre-d-aide/installation/smart-tv/",
      icon: Tv,
    },
    {
      category: "Amazon Fire TV Stick",
      os: "Fire OS (Lite, 4K, 4K Max, Cube)",
      recommendedApp: "Atlas Pro ONTV",
      installMethod: "Via l'application Downloader avec le code vérifié 782914",
      badge: "RECOMMANDÉ ATLAS PRO",
      guideHref: "/centre-d-aide/installation/fire-tv-stick/",
      icon: Monitor,
    },
    {
      category: "Android TV & Google TV",
      os: "Sony, Philips, TCL, Nvidia Shield, Mi Box",
      recommendedApp: "Atlas Pro Max (v5.0.1)",
      installMethod: "Code Downloader 614920 ou Google Play Store",
      badge: "BUFFER ADAPTATIF",
      guideHref: "/centre-d-aide/installation/android-tv/",
      icon: Monitor,
    },
    {
      category: "Apple iPhone, iPad & Apple TV",
      os: "iOS 15+, iPadOS, tvOS 4K",
      recommendedApp: "IPTV Smarters Pro",
      installMethod: "Téléchargement sécurisé depuis l'Apple App Store",
      badge: "100% APPLE STORE",
      guideHref: "/centre-d-aide/installation/iphone-ios/",
      icon: Smartphone,
    },
    {
      category: "Ordinateurs PC & Mac",
      os: "Windows 10/11 & macOS Sonoma/Sequoia",
      recommendedApp: "IPTV Smarters Pro / VLC",
      installMethod: "Application native PC ou lecteur multimédia universel",
      badge: "MULTI-FENÊTRES",
      guideHref: "/centre-d-aide/installation/pc-windows/",
      icon: Laptop,
    },
  ];

  return (
    <section className="py-16 bg-[#040A17] border-t border-[#1A2A4A]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-[#1E7BFF] uppercase tracking-wider">
            ÉCOSYSTÈME MULTI-ÉCRANS
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Compatibilité Matérielle & Applications Conseillées
          </h2>
          <p className="mt-3 text-sm text-[#9FB0CC] leading-relaxed">
            Votre abonnement Atlas Pro fonctionne sans décodeur supplémentaire. Vous pouvez l&apos;activer sur
            votre téléviseur principal, votre smartphone ou votre boîtier de streaming en quelques minutes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {devices.map((device) => {
            const Icon = device.icon;
            return (
              <div
                key={device.category}
                className="p-6 rounded-2xl bg-[#0A1428] border border-[#1A2A4A] flex flex-col justify-between hover:border-[#1E7BFF]/50 transition-all duration-200"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-2.5 py-1 rounded text-[10px] font-bold text-[#1E7BFF] bg-[#1E7BFF]/15 border border-[#1E7BFF]/30">
                      {device.badge}
                    </span>
                    <Icon className="w-5 h-5 text-[#9FB0CC]" />
                  </div>

                  <h3 className="text-lg font-bold text-white tracking-tight">
                    {device.category}
                  </h3>
                  <p className="text-xs font-mono text-[#9FB0CC] mt-0.5">
                    {device.os}
                  </p>

                  <div className="mt-4 pt-4 border-t border-[#1A2A4A]/60 space-y-2 text-xs">
                    <div>
                      <span className="text-[#9FB0CC] block text-[11px] uppercase tracking-wider font-semibold">
                        Application recommandée :
                      </span>
                      <strong className="text-white font-medium">
                        {device.recommendedApp}
                      </strong>
                    </div>
                    <div>
                      <span className="text-[#9FB0CC] block text-[11px] uppercase tracking-wider font-semibold">
                        Méthode d&apos;accès :
                      </span>
                      <span className="text-[#CBD5E1]">
                        {device.installMethod}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#1A2A4A]/60">
                  <Link
                    href={device.guideHref}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1E7BFF] hover:underline group"
                  >
                    <span>Consulter le guide de configuration</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
