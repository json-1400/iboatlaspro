import Link from "next/link";
import { Check } from "lucide-react";
import type { PricingPlan } from "@/types";

interface PricingCardProps {
  readonly plan: PricingPlan;
}

export function PricingCard({ plan }: PricingCardProps) {
  const {
    duration,
    subtitle,
    price,
    monthlyEquivalent,
    isHighlighted,
    badgeText,
    ctaText,
    features,
  } = plan;

  const planSlugMap: Record<string, string> = {
    "plan-1m": "1-mois",
    "plan-3m": "3-mois",
    "plan-6m": "6-mois",
    "plan-12m": "12-mois",
  };
  const targetPlan = planSlugMap[plan.id] || "12-mois";

  return (
    <div
      className={`relative flex flex-col justify-between p-6 sm:p-7 rounded-xl transition-all duration-200 ${
        isHighlighted
          ? "bg-[#0A1428] border-2 border-[#1E7BFF] glow-card-active shadow-[0_0_40px_rgba(30,123,255,0.25)] scale-[1.02] z-10"
          : "bg-[#0A1428]/80 border border-[#1A2A4A] hover:border-[#1E7BFF]/50"
      }`}
    >
      {/* Highlighted Badge */}
      {isHighlighted && badgeText && (
        <div className="absolute -top-3.5 right-6">
          <span className="px-3.5 py-1 rounded-full text-xs font-bold text-white bg-[#1E7BFF] shadow-[0_0_15px_rgba(30,123,255,0.5)]">
            {badgeText}
          </span>
        </div>
      )}

      {/* Plan Header */}
      <div>
        <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
          {duration}
        </h3>
        <p className="text-xs sm:text-sm text-[#9FB0CC] mt-1 font-medium">
          {subtitle}
        </p>

        {/* Price Display */}
        <div className="mt-5 pb-5 border-b border-[#1A2A4A]">
          <div className="flex items-baseline gap-1">
            <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {price}
            </span>
            {!monthlyEquivalent && (
              <span className="text-sm font-medium text-[#9FB0CC]">/mois</span>
            )}
          </div>
          {monthlyEquivalent && (
            <p className="text-xs text-[#9FB0CC] mt-1 font-medium">
              {monthlyEquivalent}
            </p>
          )}
        </div>

        {/* CTA Button */}
        <div className="mt-6 mb-7">
          <Link
            href={`/commander/?plan=${targetPlan}`}
            className={`w-full inline-flex items-center justify-center px-5 py-3 rounded-full text-sm font-semibold transition-all duration-200 ${
              isHighlighted
                ? "bg-[#1E7BFF] text-white hover:bg-[#2D9CFF] glow-primary"
                : "bg-transparent text-white border border-[#1A2A4A] hover:border-[#1E7BFF] hover:bg-[#1E7BFF]/10"
            }`}
          >
            {ctaText}
          </Link>
        </div>

        {/* Features Checklist */}
        <ul className="space-y-3" aria-label={`Fonctionnalités pour l'offre ${duration}`}>
          {features.map((feature) => (
            <li key={feature} className="flex items-center gap-2.5">
              <span className="flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center text-[#1E7BFF]">
                <Check className="w-4 h-4 stroke-[3]" />
              </span>
              <span className="text-xs sm:text-sm text-white/90 font-medium">
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
