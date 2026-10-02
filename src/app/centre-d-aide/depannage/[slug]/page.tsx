import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ExpiredAlert } from "@/components/ExpiredAlert";
import { RelatedGuides } from "@/components/RelatedGuides";
import {
  DEPANNAGE_ARTICLES,
  getDepannageArticle,
  getAllDepannageSlugs,
} from "@/data/depannage-articles";
import {
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  ShieldCheck,
  Zap,
  HelpCircle,
  Wrench,
} from "lucide-react";

interface DepannagePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const slugs = getAllDepannageSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: DepannagePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getDepannageArticle(slug);

  if (!article) {
    return {
      title: "Article Non Trouvé | Centre d'Aide iboatlaspro",
    };
  }

  return {
    title: article.metaTitle,
    description: article.metaDescription,
    keywords: article.keywords,
    alternates: {
      canonical: `https://iboatlaspro.com/centre-d-aide/depannage/${article.slug}/`,
    },
    openGraph: {
      title: article.metaTitle,
      description: article.metaDescription,
      url: `https://iboatlaspro.com/centre-d-aide/depannage/${article.slug}/`,
      type: "article",
    },
  };
}

export default async function DepannageSlugPage({ params }: DepannagePageProps) {
  const { slug } = await params;
  const article = getDepannageArticle(slug);

  if (!article) {
    notFound();
  }

  const breadcrumbItems = [
    { label: "Centre d'aide", href: "/centre-d-aide/" },
    { label: "Dépannage & Erreurs", href: "/centre-d-aide/depannage/" },
    {
      label: article.title,
      href: `/centre-d-aide/depannage/${article.slug}/`,
    },
  ];

  const relatedGuidesList = article.relatedSlugs
    .map((rSlug) => {
      const rel = getDepannageArticle(rSlug);
      if (!rel) return null;
      return {
        title: rel.title,
        href: `/centre-d-aide/depannage/${rel.slug}/`,
        description: rel.metaDescription,
        badge: rel.badge,
      };
    })
    .filter((item): item is NonNullable<typeof item> => item !== null);

  const jsonLdGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Accueil",
            item: "https://iboatlaspro.com/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Centre d'aide",
            item: "https://iboatlaspro.com/centre-d-aide/",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Dépannage",
            item: "https://iboatlaspro.com/centre-d-aide/depannage/",
          },
          {
            "@type": "ListItem",
            position: 4,
            name: article.title,
            item: `https://iboatlaspro.com/centre-d-aide/depannage/${article.slug}/`,
          },
        ],
      },
      {
        "@type": "HowTo",
        name: article.title,
        description: article.metaDescription,
        step: article.solutions.map((sol) => ({
          "@type": "HowToStep",
          position: sol.stepNumber,
          name: sol.title,
          text: sol.desc,
        })),
      },
      ...(article.faq.length > 0
        ? [
            {
              "@type": "FAQPage",
              mainEntity: article.faq.map((item) => ({
                "@type": "Question",
                name: item.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: item.answer,
                },
              })),
            },
          ]
        : []),
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbItems} />
        </div>

        <article className="py-12 md:py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="text-center mb-12">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold text-white bg-[#0A1428] border border-[#1E7BFF]">
              <Wrench className="w-3.5 h-3.5 text-[#1E7BFF]" />
              {article.badge}
            </span>
            <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              {article.title}
            </h1>
            <p className="mt-4 text-base text-[#9FB0CC] leading-relaxed max-w-2xl mx-auto">
              {article.intro}
            </p>
          </header>

          {/* Symptômes & Causes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="p-6 rounded-2xl bg-[#0A1428] border border-[#1A2A4A] space-y-3">
              <h2 className="text-base font-bold text-white flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-[#F59E0B]" />
                Symptômes fréquents
              </h2>
              <ul className="space-y-2 text-xs sm:text-sm text-[#9FB0CC]">
                {article.symptoms.map((symptom) => (
                  <li key={symptom} className="flex items-start gap-2">
                    <span className="text-[#F59E0B] font-bold">•</span>
                    <span>{symptom}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-[#0A1428] border border-[#1A2A4A] space-y-3">
              <h2 className="text-base font-bold text-white flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#1E7BFF]" />
                Origines du problème
              </h2>
              <ul className="space-y-2 text-xs sm:text-sm text-[#9FB0CC]">
                {article.causes.map((cause) => (
                  <li key={cause} className="flex items-start gap-2">
                    <span className="text-[#1E7BFF] font-bold">•</span>
                    <span>{cause}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Solutions Pas à Pas */}
          <section className="space-y-6 mb-12">
            <h2 className="text-2xl font-bold text-white tracking-tight">
              Procédure de Résolution Pas à Pas
            </h2>

            <div className="space-y-4">
              {article.solutions.map((solution) => (
                <div
                  key={solution.stepNumber}
                  className="p-6 sm:p-7 rounded-2xl bg-[#0A1428] border border-[#1A2A4A] hover:border-[#1E7BFF]/50 transition-all space-y-3"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-[#1E7BFF]/20 text-[#1E7BFF] flex items-center justify-center text-sm font-extrabold shrink-0">
                      {solution.stepNumber}
                    </span>
                    <h3 className="text-lg font-bold text-white">
                      {solution.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-[#9FB0CC] leading-relaxed pl-11">
                    {solution.desc}
                  </p>
                  {solution.tip && (
                    <div className="ml-11 p-3 rounded-xl bg-[#060E1F] border border-[#1E7BFF]/20 text-xs text-[#22C55E] flex items-center gap-2">
                      <Zap className="w-4 h-4 shrink-0" />
                      <span>{solution.tip}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Conversion CTA Box */}
          <div className="p-8 sm:p-10 rounded-2xl bg-[#0A1428] border-2 border-[#1E7BFF] glow-card-active shadow-[0_0_40px_rgba(30,123,255,0.2)] text-center space-y-6 mb-12">
            <div>
              <span className="text-xs font-bold text-[#22C55E] uppercase tracking-wider bg-[#22C55E]/10 px-3 py-1 rounded-full border border-[#22C55E]/30">
                SERVEURS ULTRA STABLES 99.8% UP-TIME
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-3">
                Fatigué des coupures et erreurs de serveur ?
              </h2>
              <p className="text-xs sm:text-sm text-[#9FB0CC] mt-2 max-w-xl mx-auto">
                Bénéficiez d&apos;une infrastructure européenne avec serveurs CDN dédiés, anti-buffering matériel et assistance WhatsApp 7j/7.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/abonnement-atlas-pro-12-mois/"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-bold text-white bg-[#1E7BFF] hover:bg-[#2D9CFF] glow-primary transition-all"
              >
                <span>Abonnement Atlas Pro 12 Mois</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={process.env.NEXT_PUBLIC_WHATSAPP_URL || "https://wa.me/212715214002"}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm font-semibold text-white bg-[#060E1F] border border-[#1A2A4A] hover:border-white/30 transition-all"
              >
                <span>Assistance WhatsApp 24/7</span>
              </a>
            </div>
          </div>

          {/* FAQ */}
          {article.faq.length > 0 && (
            <section className="mb-12 space-y-6">
              <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
                <HelpCircle className="w-6 h-6 text-[#1E7BFF]" />
                Questions Fréquentes
              </h2>
              <div className="space-y-4">
                {article.faq.map((item) => (
                  <div
                    key={item.question}
                    className="p-6 rounded-2xl bg-[#0A1428] border border-[#1A2A4A] space-y-2"
                  >
                    <h3 className="text-base font-bold text-white">
                      {item.question}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#9FB0CC] leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Alert Expiration */}
          <div className="mb-12">
            <ExpiredAlert />
          </div>

          {/* Related Guides */}
          {relatedGuidesList.length > 0 && (
            <RelatedGuides
              title="Autres Guides de Dépannage"
              subtitle="Consultez nos autres diagnostics pour résoudre tous vos problèmes de flux."
              guides={relatedGuidesList}
            />
          )}
        </article>
      </main>

      <Footer />
    </div>
  );
}
