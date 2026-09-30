import { PRICING_PLANS } from "@/data/site-content";
import { PricingCard } from "@/components/PricingCard";

export function PricingSection() {
  return (
    <section
      id="abonnement"
      className="py-20 md:py-28 bg-[#040A17] relative scroll-mt-20"
      aria-label="Tarifs et abonnements"
    >
      <div id="pricing" className="absolute -top-24" aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-bold text-[#1E7BFF] tracking-wider uppercase">
            NOS OFFRES
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Abonnement Atlas Pro : Des Tarifs Clairs et Sans Engagement
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#9FB0CC] leading-relaxed">
            Choisissez la durée qui vous convient. Tous nos abonnements incluent
            l&apos;accès à toutes les chaînes, films et séries, en 4K / FHD.
          </p>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch max-w-6xl mx-auto">
          {PRICING_PLANS.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
}
