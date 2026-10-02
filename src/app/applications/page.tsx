import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SiloHeader } from "@/components/SiloHeader";
import { StickyCTA } from "@/components/StickyCTA";
import { constructMetadata } from "@/lib/seo";
import {
  BookOpen,
  ArrowRight,
  ShieldCheck,
  Tv,
  Cpu,
  Layers,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

export function generateMetadata(): Metadata {
  return constructMetadata({
    title: "Applications Compatibles & Fiches Techniques : Atlas Pro IBO, ONTV, Max, Smarters",
    description:
      "Fiches techniques complètes, comparatifs de versions, avantages et compatibilité des applications officielles Atlas Pro IBO, ONTV, Max et IPTV Smarters Pro.",
    path: "/applications/",
  });
}

export default function ApplicationsHubPage() {
  const breadcrumbItems = [
    { label: "Applications", href: "/applications/" },
  ];

  const apps = [
    {
      title: "Atlas Pro IBO",
      version: "v2.8.2 Stable",
      platform: "Samsung Tizen, LG webOS, Android TV",
      badge: "OPTIMISÉ SMART TV",
      badgeColor: "bg-[#1E7BFF]/20 text-[#1E7BFF] border-[#1E7BFF]/40",
      href: "/applications/atlas-pro-ibo/",
      guideHref: "/centre-d-aide/guides/comment-configurer-ibo-player-pro/",
      description:
        "L'application dédiée aux abonnés Atlas Pro avec zapping instantané, gestion fluide de l'EPG et prise en charge native des télécommandes Smart TV.",
      features: ["Zapping < 0.8s", "Codecs HEVC / H.265", "Ergonomie télécommande"],
    },
    {
      title: "Atlas Pro ONTV",
      version: "v4.0.2 Stable",
      platform: "Fire TV Stick, Box Android, Google TV",
      badge: "BOÎTIERS & FIRE TV",
      badgeColor: "bg-amber-500/20 text-amber-400 border-amber-500/40",
      href: "/applications/atlas-pro-ontv/",
      guideHref: "/centre-d-aide/guides/comment-installer-atlas-pro-sur-fire-tv-stick/",
      description:
        "Interface moderne et ultra-fluide pour Fire Stick et Android TV, avec reconnexion automatique serveur, EPG corrigé et streaming optimisé 4K.",
      features: ["Interface v4.0 repensée", "Reconnexion auto serveur", "Streaming HD & 4K optimisé"],
    },
    {
      title: "Atlas Pro Max",
      version: "v5.0.1 Stable",
      platform: "Android TV, Nvidia Shield, Box 4K",
      badge: "PERFORMANCE 4K HDR",
      badgeColor: "bg-purple-500/20 text-purple-400 border-purple-500/40",
      href: "/applications/atlas-pro-max/",
      guideHref: "/centre-d-aide/guides/installer-atlas-pro-box-android-google-tv/",
      description:
        "Lecteur multimédia nouvelle génération calibré pour les flux 4K 50 FPS, buffer adaptatif multi-paliers et reprise intelligente de lecture VOD.",
      features: ["4K HDR & 50 FPS", "Buffer anti-coupure", "Audio Dolby Atmos"],
    },
    {
      title: "IPTV Smarters Pro",
      version: "v4.0.2 Stable",
      platform: "iOS, Mac, Windows, Android, Fire OS",
      badge: "LECTEUR UNIVERSEL TIERS",
      badgeColor: "bg-emerald-500/20 text-emerald-400 border-emerald-500/40",
      href: "/applications/iptv-smarters-pro/",
      guideHref: "/centre-d-aide/guides/comment-configurer-iptv-smarters-pro/",
      description:
        "Le lecteur multiplateforme de référence pour Apple (iPhone, Mac), PC Windows et Android. Compatible protocoles Xtream Codes et multi-écran.",
      features: ["Multiplateforme universel", "Xtream Codes API", "Multi-Screen (4 flux)"],
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
          badge="LOGICIELS & APPLICATIONS COMPATIBLES"
          titlePrefix="Applications &"
          titleGradient="Lecteurs Multimédia"
          titleSuffix="Atlas Pro"
          description="Consultez les fiches techniques détaillées, historiques de versions, comparatifs d'avantages et matrices de compatibilité matérielle de nos applications partenaires."
          primaryCtaText="Explorer les fiches techniques"
          primaryCtaHref="#apps-grid"
          secondaryCtaText="Centre d'aide & Installation"
          secondaryCtaHref="/centre-d-aide/guides/"
        />

        {/* Note de Transparence & Découplage Installation */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 mb-6">
          <div className="p-4 sm:p-5 rounded-2xl bg-[#0A1428] border border-[#1A2A4A] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs sm:text-sm text-[#9FB0CC]">
            <div className="flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <p>
                <strong className="text-white">Fiches d&apos;analyse logicielle :</strong> Cette section analyse les fonctionnalités, versions et performances des applications. Pour les guides d&apos;installation pas-à-pas avec codes Downloader, rendez-vous dans notre Centre d&apos;Aide.
              </p>
            </div>
            <Link
              href="/centre-d-aide/guides/"
              className="shrink-0 inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold text-white bg-[#1E7BFF] hover:bg-[#2D9CFF] transition-colors"
            >
              <span>Guides d&apos;installation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* GRILLE DES APPLICATIONS (4 COLONNES) */}
        <section id="apps-grid" className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {apps.map((app) => (
              <div
                key={app.title}
                className="p-6 rounded-2xl bg-[#0A1428] border border-[#1A2A4A] hover:border-[#1E7BFF] transition-all flex flex-col justify-between space-y-6 group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className={`px-2.5 py-1 rounded text-[10px] font-bold border ${app.badgeColor}`}>
                      {app.badge}
                    </span>
                    <span className="text-xs text-[#9FB0CC] font-mono">
                      {app.version}
                    </span>
                  </div>

                  <div>
                    <h2 className="text-xl font-bold text-white tracking-tight group-hover:text-[#1E7BFF] transition-colors">
                      {app.title}
                    </h2>
                    <p className="text-xs text-[#9FB0CC] mt-1 font-medium">
                      {app.platform}
                    </p>
                  </div>

                  <p className="text-xs text-[#9FB0CC] leading-relaxed">
                    {app.description}
                  </p>

                  <div className="pt-2 border-t border-[#1A2A4A] space-y-2">
                    {app.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-[#9FB0CC]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  <Link
                    href={app.href}
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full text-xs font-bold text-white bg-[#1E7BFF] hover:bg-[#2D9CFF] glow-primary transition-all"
                  >
                    <span>Consulter la fiche technique</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link
                    href={app.guideHref}
                    className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-full text-[11px] font-semibold text-[#9FB0CC] hover:text-white bg-[#060E1F] hover:bg-[#0E1E38] border border-[#1A2A4A] transition-all"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Tutoriel d&apos;installation</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PASSERELLE VERS CENTRE D'AIDE */}
        <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-[#0A1428] to-[#060E1F] border border-[#1E7BFF]/30 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <span className="text-xs font-bold text-[#1E7BFF] uppercase tracking-wider">
                Support &amp; Déploiement
              </span>
              <h3 className="text-2xl font-extrabold text-white">
                Vous cherchez les guides d&apos;installation complets ?
              </h3>
              <p className="text-sm text-[#9FB0CC] leading-relaxed">
                Retrouvez nos pas-à-pas illustrés, la configuration des codes Downloader et la résolution des erreurs de streaming sur notre Centre d&apos;Aide dédié.
              </p>
            </div>
            <Link
              href="/centre-d-aide/guides/"
              className="shrink-0 inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-bold text-white bg-[#1E7BFF] hover:bg-[#2D9CFF] glow-primary transition-all"
            >
              <span>Accéder aux Guides d&apos;Installation</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </main>

      <StickyCTA
        title="Besoin d'un abonnement pour votre application ?"
        buttonText="Abonnement 1 an (39,99 €)"
        href="/abonnement-atlas-pro-12-mois/"
      />
      <Footer />
    </div>
  );
}
