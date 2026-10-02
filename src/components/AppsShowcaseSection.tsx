import Link from "next/link";
import { BookOpen, Tv, Smartphone, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";

export function AppsShowcaseSection() {
  const apps = [
    {
      title: "Atlas Pro ONTV",
      version: "v4.0.2 Stable",
      badge: "BOÎTIERS & FIRE TV",
      downloaderCode: "822648",
      href: "/applications/atlas-pro-ontv/",
      desc: "Nouvelle version 4.0 avec interface repensée, reconnexion automatique serveur et streaming optimisé HD & 4K.",
      features: ["Interface v4.0 fluide", "Reconnexion serveur auto", "Streaming HD & 4K"],
    },
    {
      title: "Atlas Pro Max",
      version: "v5.0.1 Stable 2026",
      badge: "DERNIÈRE VERSION",
      isHighlighted: true,
      downloaderCode: "614920",
      href: "/applications/atlas-pro-max/",
      desc: "Le nouveau moteur de lecture 4K 50 FPS avec buffer adaptatif automatique anti-coupure et Dolby Audio.",
      features: ["Décodage 4K HEVC", "Buffer adaptatif", "Android 7 à 14+"],
    },
    {
      title: "Atlas Pro IBO",
      version: "v2.8.0 Optimisée",
      badge: "SMART TV & APPLE",
      downloaderCode: "492015",
      href: "/applications/atlas-pro-ibo/",
      desc: "La solution parfaite pour Smart TV Samsung Tizen, LG webOS et appareils Apple (iPhone, iPad, Apple TV).",
      features: ["Interface Smart TV", "Playlists M3U/Xtream", "Replay 7 jours"],
    },
  ];

  return (
    <section
      className="py-20 md:py-28 bg-[#040A17] relative"
      aria-label="Applications et téléchargements officiels"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-bold text-[#1E7BFF] tracking-wider uppercase">
            ÉCOSYSTÈME APPLICATIF OFFICIEL
          </span>
          <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Des Applications Dédiées pour Tous Vos Appareils
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#9FB0CC] leading-relaxed">
            Profitez de votre abonnement Atlas Pro sur votre application favorite.
            Consultez nos tutoriels pas-à-pas et configurez facilement via l&apos;application officielle Downloader.
          </p>
        </div>

        {/* 3 Apps Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch max-w-6xl mx-auto">
          {apps.map((app) => (
            <div
              key={app.title}
              className={`relative flex flex-col justify-between p-6 sm:p-8 rounded-2xl transition-all duration-200 ${
                app.isHighlighted
                  ? "bg-[#0A1428] border-2 border-[#1E7BFF] shadow-[0_0_40px_rgba(30,123,255,0.25)] scale-[1.02] z-10"
                  : "bg-[#0A1428]/80 border border-[#1A2A4A] hover:border-[#1E7BFF]/50"
              }`}
            >
              {app.badge && (
                <div className="absolute -top-3.5 right-6">
                  <span
                    className={`px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase ${
                      app.isHighlighted
                        ? "bg-[#1E7BFF] text-white shadow-[0_0_15px_rgba(30,123,255,0.5)]"
                        : "bg-[#1A2A4A] text-[#9FB0CC] border border-[#1A2A4A]"
                    }`}
                  >
                    {app.badge}
                  </span>
                </div>
              )}

              <div>
                <div className="flex items-center justify-between text-xs text-[#9FB0CC] mb-2 font-mono">
                  <span>{app.version}</span>
                  <span className="flex items-center gap-1 text-emerald-400">
                    <ShieldCheck className="w-3.5 h-3.5" /> Sécurisé
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {app.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#9FB0CC] mt-2 leading-relaxed">
                  {app.desc}
                </p>

                {/* Downloader Code Box */}
                <div className="mt-5 p-3.5 rounded-xl bg-[#060E1F] border border-[#1A2A4A] flex items-center justify-between">
                  <span className="text-[11px] text-[#9FB0CC] uppercase tracking-wider font-semibold">
                    Code Downloader :
                  </span>
                  <span className="text-xl font-mono font-black text-[#22C55E]">
                    {app.downloaderCode}
                  </span>
                </div>

                {/* Checklist features */}
                <ul className="mt-5 space-y-2 border-t border-[#1A2A4A] pt-4">
                  {app.features.map((feat) => (
                    <li key={feat} className="text-xs text-[#CBD5E1] flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1E7BFF]" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div className="mt-7">
                <Link
                  href={app.href}
                  className={`w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${
                    app.isHighlighted
                      ? "bg-[#1E7BFF] text-white hover:bg-[#2D9CFF] shadow-[0_0_20px_rgba(30,123,255,0.4)]"
                      : "bg-white/5 text-white border border-[#1A2A4A] hover:border-[#1E7BFF] hover:bg-[#1E7BFF]/10"
                  }`}
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Guide d&apos;installation {app.title}</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Apps Link */}
        <div className="mt-12 text-center">
          <Link
            href="/applications/"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#1E7BFF] hover:underline"
          >
            <span>Consulter le catalogue complet des applications et lecteurs compatibles</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
