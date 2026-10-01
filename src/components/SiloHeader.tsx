import Link from "next/link";
import { ArrowRight, ShieldCheck, Zap } from "lucide-react";

interface SiloHeaderProps {
  readonly badge: string;
  readonly titlePrefix: string;
  readonly titleGradient: string;
  readonly titleSuffix?: string;
  readonly description: string;
  readonly primaryCtaText?: string;
  readonly primaryCtaHref?: string;
  readonly secondaryCtaText?: string;
  readonly secondaryCtaHref?: string;
}

export function SiloHeader({
  badge,
  titlePrefix,
  titleGradient,
  titleSuffix = "",
  description,
  primaryCtaText = "Choisir mon abonnement",
  primaryCtaHref = "#pricing",
  secondaryCtaText = "Voir les offres 12 mois",
  secondaryCtaHref = "/abonnement-atlas-pro-12-mois/",
}: SiloHeaderProps) {
  return (
    <header className="relative pt-12 pb-16 md:pt-16 md:pb-24 glow-stadium border-b border-[#1A2A4A]/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Top Badges */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide text-white bg-[#0A1428] border border-[#1A2A4A] mb-6 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-[#1E7BFF] animate-pulse" />
          <span>{badge}</span>
        </div>

        {/* Unified H1 */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12] max-w-4xl">
          {titlePrefix}{" "}
          <span className="gradient-text-blue">{titleGradient}</span>{" "}
          {titleSuffix}
        </h1>

        {/* Subtitle */}
        <p className="mt-5 text-base sm:text-lg text-[#9FB0CC] max-w-2xl leading-relaxed">
          {description}
        </p>

        {/* Action CTAs */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href={primaryCtaHref}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm sm:text-base font-bold text-white bg-[#1E7BFF] hover:bg-[#2D9CFF] glow-primary transition-all duration-200"
          >
            <span>{primaryCtaText}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          {secondaryCtaText && (
            <Link
              href={secondaryCtaHref}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm sm:text-base font-semibold text-white border border-[#1A2A4A] hover:border-[#1E7BFF] bg-[#0A1428] transition-colors"
            >
              <span>{secondaryCtaText}</span>
            </Link>
          )}
        </div>

        {/* Mini Trust Row */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-[#9FB0CC]">
          <span className="flex items-center gap-1.5">
            <Zap className="w-3.5 h-3.5 text-[#1E7BFF]" />
            Activation instantanée (&lt; 15 min)
          </span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-[#22C55E]" />
            Serveurs anti-coupure 4K / FHD
          </span>
        </div>
      </div>
    </header>
  );
}
