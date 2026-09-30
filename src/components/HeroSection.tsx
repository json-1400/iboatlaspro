import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Tv, Zap, Headphones, RefreshCw } from "lucide-react";
import { HERO_FEATURES } from "@/data/site-content";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-12 pb-20 md:pt-16 md:pb-28 glow-stadium"
      aria-label="Section d'introduction"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copy, Badges, Features, CTA */}
          <div className="lg:col-span-6 z-10 flex flex-col items-start space-y-7">
            {/* Top Badges */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide text-white bg-[#0A1428] border border-[#1A2A4A] shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#1E7BFF] animate-pulse" />
                IPTV PREMIUM
              </span>
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide text-white bg-[#0A1428] border border-[#1A2A4A] shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#22C55E]" />
                EN DIRECT • SANS BUFFER
              </span>
            </div>

            {/* H1 Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-[60px] font-extrabold tracking-tight text-white leading-[1.08]">
              Atlas Pro Officiel :{" "}
              <span className="gradient-text-blue block sm:inline">
                Plateforme IPTV 4K
              </span>{" "}
              & Serveurs Stables
            </h1>

            {/* Subtitle / Paragraph */}
            <p className="text-base sm:text-lg text-[#9FB0CC] leading-relaxed max-w-xl font-normal">
              Accédez à l&apos;infrastructure officielle <strong className="text-white font-semibold">Atlas Pro en France</strong> : plus de 10 000 chaînes TV en direct et VOD en qualité 4K Ultra HD sans aucune coupure. Serveurs CDN redondés 99.9%, zapping instantané et activation en 15 minutes.
            </p>

            {/* Row of 4 Features */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full pt-2">
              {HERO_FEATURES.map((feat) => {
                const getFeatureIcon = () => {
                  switch (feat.iconName) {
                    case "tv":
                      return <Tv className="w-4 h-4 text-white" />;
                    case "buffer":
                      return <RefreshCw className="w-4 h-4 text-white" />;
                    case "zap":
                      return <Zap className="w-4 h-4 text-white" />;
                    case "support":
                      return <Headphones className="w-4 h-4 text-white" />;
                  }
                };

                return (
                  <div key={feat.id} className="flex flex-col items-start gap-2">
                    <div className="w-8 h-8 rounded-full bg-[#1E7BFF] flex items-center justify-center flex-shrink-0 shadow-[0_0_12px_rgba(30,123,255,0.4)]">
                      {getFeatureIcon()}
                    </div>
                    <div>
                      <div className="text-xs sm:text-[13px] font-bold text-white leading-tight">
                        {feat.title}
                      </div>
                      <div className="text-[11px] sm:text-xs text-[#9FB0CC] leading-tight mt-0.5">
                        {feat.subtitle}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Main Primary CTA Button */}
            <div className="pt-3">
              <Link
                href="#abonnement"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-base font-bold text-white bg-[#1E7BFF] hover:bg-[#2D9CFF] glow-primary glow-primary-hover transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <span>Choisir mon abonnement</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Right Column: Devices Composition Showcase */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            {/* Ambient blue background blur glow */}
            <div
              className="absolute -inset-4 bg-gradient-to-tr from-[#1E7BFF]/20 via-[#1E7BFF]/10 to-transparent rounded-3xl blur-2xl -z-10"
              aria-hidden="true"
            />

            <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden border border-[#1A2A4A]/60 shadow-2xl">
              <Image
                src="/images/hero-devices.jpg"
                alt="Affichage multi-écrans IPTV sur TV 4K, ordinateur portable, tablette tactile et smartphone"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 640px"
                className="object-cover object-center"
              />

              {/* Gradient masks on left and bottom edges to blend seamlessly into #040A17 */}
              <div
                className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#040A17] via-transparent to-transparent opacity-60"
                aria-hidden="true"
              />
              <div
                className="absolute inset-0 pointer-events-none bg-gradient-to-r from-[#040A17]/70 via-transparent to-transparent opacity-70"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
