import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { StickyCTA } from "@/components/StickyCTA";
import {
  getAllSubscriptionPlanSlugs,
  getSubscriptionPlanBySlug,
  getAllSubscriptionPlans,
} from "@/data/subscription-plans";
import {
  Check,
  ShieldCheck,
  Zap,
  Tv,
  Users,
  Sparkles,
  ArrowRight,
  HelpCircle,
  Lock,
  Headphones,
} from "lucide-react";

interface PageProps {
  readonly params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllSubscriptionPlanSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const plan = getSubscriptionPlanBySlug(slug);

  if (!plan) {
    return {
      title: "Formule Introuvable | iboatlaspro",
    };
  }

  return {
    title: plan.metaTitle,
    description: plan.metaDescription,
    keywords: [plan.targetKeyword, ...plan.secondaryKeywords].join(", "),
    alternates: {
      canonical: `https://iboatlaspro.com/${plan.slug}/`,
    },
    openGraph: {
      title: plan.metaTitle,
      description: plan.metaDescription,
      url: `https://iboatlaspro.com/${plan.slug}/`,
      type: "website",
      locale: "fr_FR",
      siteName: "Atlas Pro France",
    },
  };
}

export default async function DynamicPlanPage({ params }: PageProps) {
  const { slug } = await params;
  const plan = getSubscriptionPlanBySlug(slug);

  if (!plan) {
    notFound();
  }

  const allPlans = getAllSubscriptionPlans();
  const otherPlans = allPlans.filter((p) => p.slug !== plan.slug).slice(0, 3);

  const isMultiScreenHub =
    plan.slug === "abonnement-atlas-pro-multi-ecrans" || plan.screens > 1;

  const multiScreenPlans = [
    allPlans.find((p) => p.slug === "abonnement-atlas-pro-2-ecrans"),
    allPlans.find((p) => p.slug === "abonnement-atlas-pro-3-ecrans"),
    allPlans.find((p) => p.slug === "abonnement-atlas-pro-4-ecrans"),
  ].filter((p): p is (typeof allPlans)[number] => Boolean(p));

  const breadcrumbItems = [
    { label: "Accueil", href: "/" },
    { label: "Abonnements", href: "/#abonnement" },
    { label: plan.shortTitle, href: `/${plan.slug}/` },
  ];

  const jsonLdGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        "@id": `https://iboatlaspro.com/${plan.slug}/#product`,
        name: plan.name,
        description: plan.metaDescription,
        image: "https://iboatlaspro.com/images/hero-devices.jpg",
        brand: {
          "@type": "Brand",
          name: "Atlas Pro",
        },
        offers: {
          "@type": "Offer",
          url: `https://iboatlaspro.com/${plan.slug}/`,
          priceCurrency: "EUR",
          price: plan.priceNumeric.toFixed(2),
          priceValidUntil: "2026-12-31",
          availability: "https://schema.org/InStock",
          itemCondition: "https://schema.org/NewCondition",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "420",
        },
      },
      {
        "@type": "FAQPage",
        "@id": `https://iboatlaspro.com/${plan.slug}/#faq`,
        mainEntity: plan.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: breadcrumbItems.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.label,
          item: `https://iboatlaspro.com${item.href}`,
        })),
      },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#040A17] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
      />
      <Navbar />

      <main className="flex-1">
        {/* Breadcrumbs Navigation */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
          <Breadcrumbs items={breadcrumbItems} />
        </div>

        {/* Hero Section */}
        <section className="py-12 md:py-18 relative overflow-hidden">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {plan.badgeText && (
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold text-white bg-[#0A1428] border border-[#1E7BFF] shadow-[0_0_20px_rgba(30,123,255,0.35)] uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-[#1E7BFF]" />
                {plan.badgeText}
              </span>
            )}

            <h1 className="mt-5 text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              {plan.name} :{" "}
              <span className="text-[#1E7BFF]">{plan.heroTagline}</span>
            </h1>

            <p className="mt-5 text-base sm:text-lg text-[#9FB0CC] max-w-3xl mx-auto leading-relaxed">
              Découvrez l&apos;offre officielle{" "}
              <strong className="text-white font-semibold">{plan.targetKeyword}</strong>.{" "}
              {plan.heroDescription}
            </p>

            {/* Pricing Section : Multi-Écrans 3-Tiers Grid OR Single Plan Card */}
            {isMultiScreenHub ? (
              <div className="mt-12">
                <div className="text-center mb-8">
                  <span className="text-xs font-bold text-[#1E7BFF] uppercase tracking-wider">
                    GRILLE MULTI-ÉCRANS 12 MOIS
                  </span>
                  <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    Choisissez votre nombre d&apos;écrans simultanés
                  </h2>
                  <p className="mt-2 text-xs sm:text-sm text-[#9FB0CC] max-w-xl mx-auto">
                    Tous nos forfaits multiroom sont valables 12 mois avec flux 4K indépendants sans coupure.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch max-w-6xl mx-auto text-left">
                  {multiScreenPlans.map((mPlan) => {
                    const isSelected =
                      mPlan.slug === plan.slug ||
                      (plan.slug === "abonnement-atlas-pro-multi-ecrans" &&
                        mPlan.screens === 3);

                    return (
                      <div
                        key={mPlan.slug}
                        className={`relative flex flex-col justify-between p-6 sm:p-7 rounded-2xl transition-all duration-200 ${
                          isSelected
                            ? "bg-[#0A1428] border-2 border-[#1E7BFF] shadow-[0_0_40px_rgba(30,123,255,0.25)] scale-[1.02] z-10"
                            : "bg-[#0A1428]/80 border border-[#1A2A4A] hover:border-[#1E7BFF]/50"
                        }`}
                      >
                        {mPlan.badgeText && (
                          <div className="absolute -top-3.5 right-6">
                            <span className="px-3.5 py-1 rounded-full text-[10px] font-bold text-white bg-[#1E7BFF] shadow-[0_0_15px_rgba(30,123,255,0.5)] uppercase tracking-wider">
                              {mPlan.badgeText}
                            </span>
                          </div>
                        )}

                        <div>
                          <div className="flex items-center gap-2 text-xs font-bold text-[#1E7BFF] uppercase tracking-wider">
                            <Tv className="w-4 h-4" />
                            <span>{mPlan.screens} Écrans Simultanés</span>
                          </div>
                          <h3 className="mt-2 text-xl sm:text-2xl font-bold text-white tracking-tight">
                            {mPlan.shortTitle}
                          </h3>
                          <p className="text-xs text-[#9FB0CC] mt-1 font-medium leading-relaxed">
                            {mPlan.heroTagline}
                          </p>

                          <div className="mt-5 pb-5 border-b border-[#1A2A4A]">
                            <div className="flex items-baseline gap-2">
                              <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                                {mPlan.price}
                              </span>
                              {mPlan.originalPrice && (
                                <span className="text-sm text-[#9FB0CC] line-through font-medium">
                                  {mPlan.originalPrice}
                                </span>
                              )}
                            </div>
                            <p className="text-xs text-[#1E7BFF] mt-1 font-semibold">
                              {mPlan.monthlyEquivalent}
                            </p>
                          </div>

                          <div className="mt-6 mb-3">
                            <Link
                              href={mPlan.ctaCheckoutUrl}
                              className={`w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-bold transition-all duration-200 ${
                                isSelected
                                  ? "bg-[#1E7BFF] text-white hover:bg-[#2D9CFF] shadow-[0_0_20px_rgba(30,123,255,0.4)]"
                                  : "bg-white/5 text-white border border-[#1A2A4A] hover:border-[#1E7BFF] hover:bg-[#1E7BFF]/10"
                              }`}
                            >
                              <span>Commander {mPlan.screens} Écrans</span>
                              <ArrowRight className="w-4 h-4" />
                            </Link>
                          </div>

                          <div className="mb-5 text-center">
                            <Link
                              href={`/${mPlan.slug}/`}
                              className="text-[11px] text-[#9FB0CC] hover:text-[#1E7BFF] transition-colors underline-offset-4 hover:underline"
                            >
                              Détails complets Pack {mPlan.screens} Écrans →
                            </Link>
                          </div>

                          <ul className="space-y-2.5 border-t border-[#1A2A4A] pt-5">
                            {mPlan.features.slice(0, 5).map((feat) => (
                              <li key={feat} className="flex items-start gap-2">
                                <span className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                                  <Check className="w-3 h-3 stroke-[3]" />
                                </span>
                                <span className="text-xs text-[#CBD5E1] leading-snug">
                                  {feat}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-8 text-center text-xs text-[#9FB0CC] flex items-center justify-center gap-2">
                  <Lock className="w-3.5 h-3.5 text-emerald-400" />
                  <span>
                    Paiement 100% sécurisé — Tous vos codes livrés par e-mail et WhatsApp en 15 minutes
                  </span>
                </div>
              </div>
            ) : (
              <div className="mt-10 max-w-xl mx-auto bg-[#0A1428] border-2 border-[#1E7BFF] rounded-2xl p-6 sm:p-8 shadow-[0_0_50px_rgba(30,123,255,0.2)]">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-[#1A2A4A]">
                  <div className="text-center sm:text-left">
                    <span className="text-xs uppercase tracking-wider text-[#9FB0CC] font-bold">
                      Tarif TTC Tout Inclus
                    </span>
                    <div className="flex items-baseline gap-2 mt-1 justify-center sm:justify-start">
                      <span className="text-4xl sm:text-5xl font-black text-white tracking-tight">
                        {plan.price}
                      </span>
                      {plan.originalPrice && (
                        <span className="text-lg text-[#9FB0CC] line-through font-medium">
                          {plan.originalPrice}
                        </span>
                      )}
                    </div>
                    <span className="text-sm font-semibold text-[#1E7BFF]">
                      {plan.monthlyEquivalent}
                    </span>
                  </div>

                  {plan.discountPercentage && (
                    <span className="px-3.5 py-1.5 rounded-full text-xs font-black bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                      {plan.discountPercentage} ÉCONOMIE
                    </span>
                  )}
                </div>

                {/* Instant CTA Button */}
                <div className="mt-6">
                  <Link
                    href={plan.ctaCheckoutUrl}
                    className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base font-bold text-white bg-[#1E7BFF] hover:bg-[#2D9CFF] shadow-[0_0_30px_rgba(30,123,255,0.4)] transition-all duration-200 transform hover:-translate-y-0.5"
                  >
                    <span>Commander cette formule</span>
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <p className="mt-2.5 text-xs text-[#9FB0CC] flex items-center justify-center gap-2">
                    <Lock className="w-3.5 h-3.5 text-emerald-400" />
                    Paiement 100% sécurisé — Activation garantie sous 15 minutes
                  </p>
                </div>

                {/* Guarantees Badges */}
                <div className="mt-6 pt-6 border-t border-[#1A2A4A] grid grid-cols-2 gap-3 text-left">
                  <div className="flex items-center gap-2 text-xs text-[#9FB0CC]">
                    <Zap className="w-4 h-4 text-[#1E7BFF] flex-shrink-0" />
                    <span>Activation instantanée</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#9FB0CC]">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>Garantie 99.9% anti-freeze</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#9FB0CC]">
                    <Tv className="w-4 h-4 text-[#1E7BFF] flex-shrink-0" />
                    <span>
                      {plan.screens === 1
                        ? "1 Connexion active"
                        : `${plan.screens} Écrans simultanés`}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#9FB0CC]">
                    <Headphones className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>Support WhatsApp 24/7</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Benefits Grid Section */}
        <section className="py-14 bg-[#060D1E] border-y border-[#1A2A4A]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white text-center tracking-tight">
              Pourquoi choisir l&apos;offre {plan.name} ?
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#9FB0CC] text-center max-w-2xl mx-auto">
              Une infrastructure ultra-rapide conçue spécifiquement pour la diffusion 4K sans latence.
            </p>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              {plan.benefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="bg-[#0A1428] border border-[#1A2A4A] p-6 rounded-xl hover:border-[#1E7BFF]/50 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#1E7BFF]/10 border border-[#1E7BFF]/30 flex items-center justify-center text-[#1E7BFF] mb-4">
                    {benefit.iconName === "users" ? (
                      <Users className="w-5 h-5" />
                    ) : benefit.iconName === "tv" ? (
                      <Tv className="w-5 h-5" />
                    ) : benefit.iconName === "zap" ? (
                      <Zap className="w-5 h-5" />
                    ) : (
                      <ShieldCheck className="w-5 h-5" />
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-[#9FB0CC] leading-relaxed">
                    {benefit.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Full Features Checklist Section */}
        <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white text-center tracking-tight">
            Tout ce qui est inclus dans votre accès {plan.shortTitle}
          </h2>

          <div className="mt-8 bg-[#0A1428] border border-[#1A2A4A] rounded-2xl p-6 sm:p-8">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </span>
                  <span className="text-sm text-[#CBD5E1] font-medium leading-snug">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Interactive FAQ Section */}
        <section className="py-16 bg-[#060D1E] border-t border-[#1A2A4A]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold text-[#1E7BFF] uppercase tracking-wider">
                RÉPONSES À VOS QUESTIONS
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Questions fréquentes sur l&apos;offre {plan.shortTitle}
              </h2>
            </div>

            <div className="space-y-4">
              {plan.faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="bg-[#0A1428] border border-[#1A2A4A] rounded-xl p-5"
                >
                  <h3 className="text-base font-bold text-white flex items-center gap-2.5">
                    <HelpCircle className="w-4 h-4 text-[#1E7BFF] flex-shrink-0" />
                    <span>{faq.question}</span>
                  </h3>
                  <p className="mt-2.5 text-sm text-[#9FB0CC] leading-relaxed pl-6.5">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Other Available Plans Navigation */}
        <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-2xl font-bold text-white text-center mb-8">
            Découvrez nos autres formules d&apos;abonnement Atlas Pro
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {otherPlans.map((other) => (
              <Link
                key={other.slug}
                href={`/${other.slug}/`}
                className="bg-[#0A1428] border border-[#1A2A4A] hover:border-[#1E7BFF] p-5 rounded-xl transition-all duration-200 group flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-bold text-[#1E7BFF] uppercase tracking-wider">
                    {other.duration}
                  </span>
                  <h3 className="mt-1 text-lg font-bold text-white group-hover:text-[#1E7BFF] transition-colors">
                    {other.name}
                  </h3>
                  <p className="mt-1.5 text-xs text-[#9FB0CC] line-clamp-2">
                    {other.heroTagline}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#1A2A4A] flex items-center justify-between">
                  <span className="text-base font-extrabold text-white">
                    {other.price}
                  </span>
                  <span className="text-xs text-[#1E7BFF] font-semibold flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                    Voir l&apos;offre <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <StickyCTA />
      <Footer />
    </div>
  );
}
