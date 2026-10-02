import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedGuides } from "@/components/RelatedGuides";
import {
  GUIDES_ARTICLES,
  getGuideArticle,
  getAllGuideSlugs,
} from "@/data/guides-articles";
import {
  BookOpen,
  ArrowRight,
  CheckCircle2,
  Clock,
  Tv,
  HelpCircle,
  Zap,
} from "lucide-react";

interface GuidePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const slugs = getAllGuideSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: GuidePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getGuideArticle(slug);

  if (!article) {
    return {
      title: "Guide Non Trouvé | Centre d'Aide iboatlaspro",
    };
  }

  return {
    title: article.metaTitle,
    description: article.metaDescription,
    keywords: article.keywords,
    alternates: {
      canonical: `https://iboatlaspro.com/centre-d-aide/guides/${article.slug}/`,
    },
    openGraph: {
      title: article.metaTitle,
      description: article.metaDescription,
      url: `https://iboatlaspro.com/centre-d-aide/guides/${article.slug}/`,
      type: "article",
    },
  };
}

export default async function GuideSlugPage({ params }: GuidePageProps) {
  const { slug } = await params;
  const article = getGuideArticle(slug);

  if (!article) {
    notFound();
  }

  const breadcrumbItems = [
    { label: "Centre d'aide", href: "/centre-d-aide/" },
    { label: "Guides & Tutoriels", href: "/centre-d-aide/guides/" },
    {
      label: article.title,
      href: `/centre-d-aide/guides/${article.slug}/`,
    },
  ];

  const relatedGuidesList = article.relatedSlugs
    .map((rSlug) => {
      const rel = getGuideArticle(rSlug);
      if (!rel) return null;
      return {
        title: rel.title,
        href: `/centre-d-aide/guides/${rel.slug}/`,
        description: rel.metaDescription,
        badge: rel.categoryLabel,
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
            name: "Guides & Tutoriels",
            item: "https://iboatlaspro.com/centre-d-aide/guides/",
          },
          {
            "@type": "ListItem",
            position: 4,
            name: article.title,
            item: `https://iboatlaspro.com/centre-d-aide/guides/${article.slug}/`,
          },
        ],
      },
      ...(article.steps && article.steps.length > 0
        ? [
            {
              "@type": "HowTo",
              name: article.title,
              description: article.metaDescription,
              step: article.steps.map((st) => ({
                "@type": "HowToStep",
                position: st.stepNumber,
                name: st.title,
                text: st.desc,
              })),
            },
          ]
        : [
            {
              "@type": "Article",
              headline: article.title,
              description: article.metaDescription,
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": `https://iboatlaspro.com/centre-d-aide/guides/${article.slug}/`,
              },
            },
          ]),
      ...(article.faq && article.faq.length > 0
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
            <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold text-white bg-[#0A1428] border border-[#1E7BFF]">
                <BookOpen className="w-3.5 h-3.5 text-[#1E7BFF]" />
                {article.badge}
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold text-[#9FB0CC] bg-[#060E1F] border border-[#1A2A4A]">
                <Clock className="w-3.5 h-3.5" />
                {article.readingTime}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              {article.title}
            </h1>

            {article.targetDevice && (
              <div className="mt-3 inline-flex items-center gap-2 text-xs sm:text-sm text-[#22C55E] bg-[#22C55E]/10 px-4 py-1.5 rounded-full border border-[#22C55E]/30 font-medium">
                <Tv className="w-4 h-4" />
                <span>Compatible : {article.targetDevice}</span>
              </div>
            )}

            <p className="mt-4 text-base text-[#9FB0CC] leading-relaxed max-w-2xl mx-auto">
              {article.intro}
            </p>
          </header>

          {/* Étapes pas à pas pour Installation / Tutoriels */}
          {article.steps && article.steps.length > 0 && (
            <section className="space-y-6 mb-12">
              <h2 className="text-2xl font-bold text-white tracking-tight">
                Instructions de Configuration Détaillées
              </h2>

              <div className="space-y-4">
                {article.steps.map((st) => (
                  <div
                    key={st.stepNumber}
                    className="p-6 sm:p-7 rounded-2xl bg-[#0A1428] border border-[#1A2A4A] hover:border-[#1E7BFF]/50 transition-all space-y-3"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-lg bg-[#1E7BFF]/20 text-[#1E7BFF] flex items-center justify-center text-sm font-extrabold shrink-0">
                        {st.stepNumber}
                      </span>
                      <h3 className="text-lg font-bold text-white">{st.title}</h3>
                    </div>
                    <p className="text-xs sm:text-sm text-[#9FB0CC] leading-relaxed pl-11">
                      {st.desc}
                    </p>
                    {st.tip && (
                      <div className="ml-11 p-3 rounded-xl bg-[#060E1F] border border-[#1E7BFF]/20 text-xs text-[#22C55E] flex items-center gap-2">
                        <Zap className="w-4 h-4 shrink-0" />
                        <span>{st.tip}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Sections de contenu pour Dossiers / Comparatifs */}
          {article.sections && article.sections.length > 0 && (
            <div className="space-y-6 mb-12">
              {article.sections.map((sec) => (
                <div
                  key={sec.title}
                  className="p-6 sm:p-8 rounded-2xl bg-[#0A1428] border border-[#1A2A4A] space-y-3"
                >
                  <h2 className="text-xl font-bold text-white">{sec.title}</h2>
                  <p className="text-xs sm:text-sm text-[#9FB0CC] leading-relaxed">
                    {sec.content}
                  </p>
                  {sec.points && (
                    <ul className="space-y-2 text-xs sm:text-sm text-white/90 pt-2 border-t border-[#1A2A4A]/60">
                      {sec.points.map((pt) => (
                        <li key={pt} className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#1E7BFF] shrink-0" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* CTA Box */}
          <div className="p-8 sm:p-10 rounded-2xl bg-[#0A1428] border-2 border-[#1E7BFF] glow-card-active shadow-[0_0_40px_rgba(30,123,255,0.2)] text-center space-y-6 mb-12">
            <div>
              <span className="text-xs font-bold text-[#22C55E] uppercase tracking-wider bg-[#22C55E]/10 px-3 py-1 rounded-full border border-[#22C55E]/30">
                COMPATIBILITÉ 100% GARANTIE
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-3">
                Profitez d&apos;un flux 4K stable sur tous vos appareils
              </h2>
              <p className="text-xs sm:text-sm text-[#9FB0CC] mt-2 max-w-xl mx-auto">
                Accédez à plus de 18 000 chaînes premium et 85 000 VOD en 4K Ultra HD avec activation instantanée et assistance 24/7.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/abonnement-atlas-pro-12-mois/"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-bold text-white bg-[#1E7BFF] hover:bg-[#2D9CFF] glow-primary transition-all"
              >
                <span>Découvrir l&apos;offre 12 Mois</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/centre-d-aide/"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm font-semibold text-white bg-[#060E1F] border border-[#1A2A4A] hover:border-white/30 transition-all"
              >
                <span>Retour au Centre d&apos;Aide</span>
              </Link>
            </div>
          </div>

          {/* FAQ */}
          {article.faq && article.faq.length > 0 && (
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

          {/* Related Guides */}
          {relatedGuidesList.length > 0 && (
            <RelatedGuides
              title="Guides Complémentaires Recommandés"
              subtitle="Optimisez votre matériel et maîtrisez toutes les fonctionnalités de vos applications."
              guides={relatedGuidesList}
            />
          )}
        </article>
      </main>

      <Footer />
    </div>
  );
}
