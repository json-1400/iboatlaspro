import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { StickyCTA } from "@/components/StickyCTA";
import { Download, ShieldCheck, Zap, ArrowRight, Check } from "lucide-react";

export function generateMetadata(): Metadata {
  return {
    title: "Télécharger Atlas Pro ONTV APK v3.2.1 : Code Downloader Officiel",
    description:
      "Téléchargement direct de l'APK officiel Atlas Pro ONTV pour Fire Stick, Android TV et Box. Code Downloader 782914 sécurisé et guide d'installation étape par étape.",
    alternates: {
      canonical: "https://iboatlaspro.com/applications/atlas-pro-ontv/",
    },
  };
}

export default function AtlasProOntvDownloadPage() {
  const breadcrumbItems = [
    { label: "Applications", href: "/applications/" },
    { label: "Atlas Pro ONTV APK", href: "/applications/atlas-pro-ontv/" },
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
                APPLICATION OFFICIELLE
              </span>
              <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                Télécharger <span className="gradient-text-blue">Atlas Pro ONTV</span> APK
              </h1>
              <p className="mt-3 text-sm sm:text-base text-[#9FB0CC] leading-relaxed">
                Le lecteur IPTV conçu sur mesure pour votre abonnement Atlas Pro.
                Performances 4K maximales, EPG réactif et zapping instantané.
              </p>
            </div>

            <div className="p-8 sm:p-10 rounded-2xl bg-[#0A1428] border border-[#1A2A4A] space-y-8">
              {/* Downloader Code Box */}
              <div className="p-6 rounded-xl bg-[#060E1F] border-2 border-[#1E7BFF]/70 text-center space-y-2">
                <span className="text-xs font-semibold text-[#9FB0CC] uppercase tracking-wider">
                  Installation rapide sur Amazon Fire Stick via l&apos;application Downloader :
                </span>
                <div className="text-4xl font-mono font-extrabold text-[#22C55E] tracking-wider">
                  782914
                </div>
                <p className="text-xs text-[#9FB0CC]">
                  Ouvrez l&apos;app Downloader sur votre Fire TV, tapez ce code et validez &laquo; Go &raquo;.
                </p>
              </div>

              {/* Direct APK Link */}
              <div className="text-center">
                <a
                  href="#direct-apk"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-bold text-white bg-[#1E7BFF] hover:bg-[#2D9CFF] glow-primary transition-all"
                >
                  <Download className="w-5 h-5" />
                  <span>Téléchargement direct APK (v3.2.1 - 42 Mo)</span>
                </a>
                <div className="flex items-center justify-center gap-4 text-xs text-[#9FB0CC] mt-3">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-4 h-4 text-[#22C55E]" />
                    Fichier officiel vérifié
                  </span>
                  <span className="flex items-center gap-1">
                    <Zap className="w-4 h-4 text-[#1E7BFF]" />
                    Compatible Android 5.1+
                  </span>
                </div>
              </div>

              {/* Install Instructions */}
              <div className="pt-6 border-t border-[#1A2A4A] space-y-3">
                <h2 className="text-base font-bold text-white">
                  Comment installer sur Amazon Fire TV Stick :
                </h2>
                <ol className="list-decimal list-inside space-y-2 text-xs sm:text-sm text-[#9FB0CC] leading-relaxed">
                  <li>Activez le &laquo; Débogage ADB &raquo; et les &laquo; Applications de sources inconnues &raquo; dans les paramètres de votre Fire TV.</li>
                  <li>Installez l&apos;application gratuite &laquo; Downloader &raquo; depuis l&apos;Amazon Appstore.</li>
                  <li>Saisissez le code <strong>782914</strong> dans le champ URL et lancez le téléchargement.</li>
                  <li>Cliquez sur &laquo; Installer &raquo; puis ouvrez l&apos;application avec vos identifiants Atlas Pro.</li>
                </ol>
                <div className="pt-3">
                  <Link
                    href="/centre-d-aide/installation/fire-tv-stick/"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#1E7BFF] hover:underline"
                  >
                    <span>Consultez notre guide d&apos;installation Fire TV Stick avec Downloader</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <StickyCTA
        title="Pas encore d'abonnement Atlas Pro ?"
        buttonText="Commander mon code 12 mois"
        href="/abonnement-atlas-pro/12-mois/"
      />
      <Footer />
    </div>
  );
}
