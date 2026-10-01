import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { StickyCTA } from "@/components/StickyCTA";
import { BookOpen, ShieldCheck, Zap, ArrowRight } from "lucide-react";

export function generateMetadata(): Metadata {
  return {
    title: "Guide Installation IPTV Smarters Pro : Code Downloader Fire Stick",
    description:
      "Guide d'installation et configuration d'IPTV Smarters Pro sur Amazon Fire Stick et Android TV avec le code Downloader 820147.",
    alternates: {
      canonical: "https://iboatlaspro.com/applications/iptv-smarters-pro/",
    },
  };
}

export default function IptvSmartersDownloadPage() {
  const breadcrumbItems = [
    { label: "Applications", href: "/applications/" },
    { label: "Guide IPTV Smarters Pro", href: "/applications/iptv-smarters-pro/" },
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
                LECTEUR UNIVERSEL RECOMMANDÉ
              </span>
              <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                Installer <span className="gradient-text-blue">IPTV Smarters Pro</span> sur TV & Box
              </h1>
              <p className="mt-3 text-sm sm:text-base text-[#9FB0CC] leading-relaxed">
                Le lecteur multi-plateforme sans publicité. Compatible
                avec vos identifiants Xtream Codes et vos listes M3U Atlas Pro.
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
                  Saisissez ce code dans l&apos;application Downloader pour lancer l&apos;installation automatique.
                </p>
              </div>

              {/* Guide CTA & Disclaimer */}
              <div className="text-center space-y-4">
                <Link
                  href="/centre-d-aide/installation/fire-tv-stick/"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-bold text-white bg-[#1E7BFF] hover:bg-[#2D9CFF] glow-primary transition-all"
                >
                  <BookOpen className="w-5 h-5" />
                  <span>Consulter le tutoriel d&apos;installation complet</span>
                </Link>
                <div className="p-4 rounded-xl bg-[#060E1F]/80 border border-[#1A2A4A] text-left text-xs text-[#9FB0CC] space-y-1.5">
                  <p className="font-semibold text-white flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    Transparence & Sécurité
                  </p>
                  <p>
                    Ce site ne stocke ni ne distribue aucun fichier binaire exécutable (.apk). L&apos;application IPTV Smarters Pro s&apos;installe de manière autonome via l&apos;application officielle Downloader (code vérifié <strong>820147</strong>) ou depuis les boutiques officielles compatibles.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <StickyCTA
        title="Obtenez vos identifiants Smarters Pro"
        buttonText="Abonnement 1 an (39,99 €)"
        href="/commander/?plan=12-mois"
      />
      <Footer />
    </div>
  );
}
