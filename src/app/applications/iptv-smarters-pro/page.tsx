import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { StickyCTA } from "@/components/StickyCTA";
import { Download, ShieldCheck, Zap, ArrowRight } from "lucide-react";

export function generateMetadata(): Metadata {
  return {
    title: "Télécharger IPTV Smarters Pro APK v4.0.2 : Code Downloader Fire Stick",
    description:
      "Téléchargement gratuit de l'APK officiel IPTV Smarters Pro. Code Downloader 820147 pour Amazon Fire Stick, Android TV et tablettes. Version sans pub.",
    alternates: {
      canonical: "https://iboatlaspro.com/applications/iptv-smarters-pro/",
    },
  };
}

export default function IptvSmartersDownloadPage() {
  const breadcrumbItems = [
    { label: "Applications", href: "/applications/" },
    { label: "IPTV Smarters Pro APK", href: "/applications/iptv-smarters-pro/" },
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
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="px-3.5 py-1.5 rounded-full text-xs font-bold text-white bg-[#0A1428] border border-[#1E7BFF]">
                LECTEUR UNIVERSEL
              </span>
              <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                Télécharger <span className="gradient-text-blue">IPTV Smarters Pro</span> APK
              </h1>
              <p className="mt-3 text-sm sm:text-base text-[#9FB0CC] leading-relaxed">
                La dernière version officielle v4.0.2 sans publicité. Compatible
                avec vos identifiants Xtream Codes et vos listes M3U.
              </p>
            </div>

            <div className="p-8 sm:p-10 rounded-2xl bg-[#0A1428] border border-[#1A2A4A] space-y-8">
              {/* Downloader Code Box */}
              <div className="p-6 rounded-xl bg-[#060E1F] border-2 border-[#1E7BFF]/70 text-center space-y-2">
                <span className="text-xs font-semibold text-[#9FB0CC] uppercase tracking-wider">
                  Code Downloader pour Amazon Fire Stick & TV :
                </span>
                <div className="text-4xl font-mono font-extrabold text-[#22C55E] tracking-wider">
                  820147
                </div>
                <p className="text-xs text-[#9FB0CC]">
                  Saisissez ce code dans l&apos;application Downloader pour déclencher le téléchargement automatique.
                </p>
              </div>

              {/* Direct APK Link */}
              <div className="text-center">
                <a
                  href="#direct-apk"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-bold text-white bg-[#1E7BFF] hover:bg-[#2D9CFF] glow-primary transition-all"
                >
                  <Download className="w-5 h-5" />
                  <span>Télécharger IPTV Smarters Pro (v4.0.2 - 65 Mo)</span>
                </a>
                <div className="flex items-center justify-center gap-4 text-xs text-[#9FB0CC] mt-3">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-4 h-4 text-[#22C55E]" />
                    APK officiel garanti
                  </span>
                  <span className="flex items-center gap-1">
                    <Zap className="w-4 h-4 text-[#1E7BFF]" />
                    Mode Multi-Écran activé
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <StickyCTA
        title="Obtenez vos identifiants Smarters Pro"
        buttonText="Abonnement 1 an (39,99 €)"
        href="/abonnement-iptv-smarters-pro/1-an/"
      />
      <Footer />
    </div>
  );
}
