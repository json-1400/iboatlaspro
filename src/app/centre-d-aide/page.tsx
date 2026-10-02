// CLIENT: interactive help center search and filter
"use client";

import { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { DEPANNAGE_ARTICLES } from "@/data/depannage-articles";
import { GUIDES_ARTICLES } from "@/data/guides-articles";
import {
  Search,
  Wrench,
  AlertCircle,
  BookOpen,
  ArrowRight,
  Headphones,
  CheckCircle2,
  Tv,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function CentreAideMasterPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const breadcrumbItems = [
    { label: "Centre d'aide & Support", href: "/centre-d-aide/" },
  ];

  const pillars = [
    {
      title: "Dépannage & Résolution d'Erreurs",
      desc: "Résolvez en 5 minutes les soucis de connexion serveur, écran noir, buffering, code expiré ou identifiant perdu.",
      icon: AlertCircle,
      href: "/centre-d-aide/depannage/",
      badge: "6 diagnostics immédiats",
      popularLinks: [
        {
          title: "Atlas Pro ne peut pas se connecter au serveur",
          href: "/centre-d-aide/depannage/atlas-pro-ne-peut-pas-se-connecter-au-serveur/",
        },
        {
          title: "Code ou abonnement Atlas Pro expiré",
          href: "/centre-d-aide/depannage/code-abonnement-atlas-pro-expire/",
        },
        {
          title: "Écran noir & buffering IPTV constant",
          href: "/centre-d-aide/depannage/resoudre-ecran-noir-buffering-iptv/",
        },
      ],
    },
    {
      title: "Guides d'Installation & Tutoriels",
      desc: "Tutoriels pas à pas pour configurer Fire Stick, Box Android TV, IBO Player et IPTV Smarters.",
      icon: BookOpen,
      href: "/centre-d-aide/guides/",
      badge: "6 guides & tutos",
      popularLinks: [
        {
          title: "Installation Amazon Fire TV Stick",
          href: "/centre-d-aide/guides/comment-installer-atlas-pro-sur-fire-tv-stick/",
        },
        {
          title: "Installation Box Android & Google TV",
          href: "/centre-d-aide/guides/installer-atlas-pro-box-android-google-tv/",
        },
        {
          title: "Configuration IBO Player Pro de A à Z",
          href: "/centre-d-aide/guides/comment-configurer-ibo-player-pro/",
        },
      ],
    },
  ];

  const allArticles = [
    ...DEPANNAGE_ARTICLES.map((a) => ({
      title: a.title,
      category: "Dépannage",
      href: `/centre-d-aide/depannage/${a.slug}/`,
      keywords: `${a.title} ${a.keywords} ${a.intro}`,
    })),
    ...GUIDES_ARTICLES.map((g) => ({
      title: g.title,
      category: g.categoryLabel,
      href: `/centre-d-aide/guides/${g.slug}/`,
      keywords: `${g.title} ${g.keywords} ${g.intro}`,
    })),
  ];

  const filteredArticles = searchQuery.trim()
    ? allArticles.filter((art) =>
        art.keywords.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : allArticles.slice(0, 8);

  const helpCenterJsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Centre d'Aide & Support Technique iboatlaspro",
    description:
      "Guides d'installation, résolutions d'erreurs et tutoriels de configuration pour votre abonnement IPTV.",
    url: "https://iboatlaspro.com/centre-d-aide/",
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#040A17] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(helpCenterJsonLd) }}
      />
      <Navbar />

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbItems} />
        </div>

        {/* Master Hub Hero Header with Search Bar */}
        <section className="pt-12 pb-16 md:pt-16 md:pb-24 glow-stadium border-b border-[#1A2A4A]/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold text-white bg-[#0A1428] border border-[#1E7BFF] shadow-[0_0_15px_rgba(30,123,255,0.3)]">
              ASSISTANCE TECHNIQUE & TUTORIELS
            </span>
            <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Centre d&apos;Aide &{" "}
              <span className="gradient-text-blue">Support Client</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[#9FB0CC] max-w-xl mx-auto leading-relaxed">
              Comment pouvons-nous vous aider aujourd&apos;hui ? Retrouvez nos
              guides pas à pas et solutions aux erreurs de flux.
            </p>

            {/* Interactive Search Bar */}
            <div className="mt-8 max-w-2xl mx-auto relative">
              <Search className="w-5 h-5 text-[#9FB0CC] absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Rechercher un guide (ex: Smart TV, Fire Stick, code expiré, buffering, IBO Player)..."
                className="w-full pl-12 pr-4 py-4 rounded-full bg-[#0A1428] border border-[#1A2A4A] focus:border-[#1E7BFF] text-white placeholder-[#9FB0CC]/60 text-sm sm:text-base shadow-2xl focus:outline-none transition-colors"
              />
            </div>
          </div>
        </section>

        {/* 2 Main Consolidated Pillars */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pillars.map((pillar) => {
              const IconComp = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="p-8 rounded-2xl bg-[#0A1428] border border-[#1A2A4A] hover:border-[#1E7BFF] transition-all group flex flex-col justify-between space-y-6"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-[#1E7BFF]/20 text-[#1E7BFF] flex items-center justify-center group-hover:scale-105 transition-transform">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-bold text-[#1E7BFF] bg-[#1E7BFF]/10 px-3 py-1 rounded-full border border-[#1E7BFF]/30">
                        {pillar.badge}
                      </span>
                    </div>

                    <h2 className="text-2xl font-bold text-white group-hover:text-[#1E7BFF] transition-colors">
                      {pillar.title}
                    </h2>
                    <p className="text-sm text-[#9FB0CC] mt-2 leading-relaxed">
                      {pillar.desc}
                    </p>

                    <div className="mt-6 space-y-2 border-t border-[#1A2A4A]/60 pt-4">
                      <p className="text-xs font-bold text-white/70 uppercase tracking-wider">
                        Articles les plus consultés :
                      </p>
                      {pillar.popularLinks.map((link) => (
                        <Link
                          key={link.title}
                          href={link.href}
                          className="block text-xs sm:text-sm text-[#9FB0CC] hover:text-[#1E7BFF] transition-colors py-1 flex items-center gap-2"
                        >
                          <span className="text-[#1E7BFF] font-bold">›</span>
                          <span>{link.title}</span>
                        </Link>
                      ))}
                    </div>
                  </div>

                  <Link
                    href={pillar.href}
                    className="inline-flex items-center justify-between p-3.5 rounded-xl bg-[#060E1F] border border-[#1A2A4A] hover:border-[#1E7BFF] text-sm font-semibold text-white group/btn transition-all"
                  >
                    <span>Explorer toute la section</span>
                    <ArrowRight className="w-4 h-4 text-[#1E7BFF] group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              );
            })}
          </div>
        </section>

        {/* Popular / Search Results Articles */}
        <section className="py-12 bg-[#060E1F]/50 border-t border-b border-[#1A2A4A]/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-bold text-white mb-6">
              {searchQuery ? "Résultats de recherche" : "Guides et Diagnostics Recommandés"}
            </h2>

            <div className="space-y-3">
              {filteredArticles.map((art) => (
                <Link
                  key={art.title}
                  href={art.href}
                  className="p-4 rounded-xl bg-[#0A1428] border border-[#1A2A4A] hover:border-[#1E7BFF] transition-colors flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#1E7BFF] bg-[#1E7BFF]/10 px-2 py-0.5 rounded shrink-0">
                      {art.category}
                    </span>
                    <span className="text-xs sm:text-sm font-medium text-white group-hover:text-[#1E7BFF] transition-colors">
                      {art.title}
                    </span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#9FB0CC] group-hover:text-[#1E7BFF] transition-colors shrink-0" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Direct WhatsApp & Escalation Contact Card */}
        <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-[#0A1428] via-[#0E1C38] to-[#0A1428] border border-[#1E7BFF]/50 space-y-4">
            <Headphones className="w-10 h-10 text-[#1E7BFF] mx-auto" />
            <h2 className="text-2xl font-bold text-white">
              Besoin d&apos;aide pour configurer votre appareil ?
            </h2>
            <p className="text-xs sm:text-sm text-[#9FB0CC] max-w-lg mx-auto">
              Nos agents techniques sont disponibles 7j/7 pour vous assister et
              vous guider étape par étape par message ou capture d&apos;écran.
            </p>
            <div className="pt-2">
              <a
                href={process.env.NEXT_PUBLIC_WHATSAPP_URL || "https://wa.me/212715214002"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-base font-bold text-white bg-[#22C55E] hover:bg-[#1fa951] shadow-[0_0_25px_rgba(34,197,94,0.3)] transition-all"
              >
                <FaWhatsapp className="w-6 h-6" />
                <span>Discuter avec un technicien sur WhatsApp</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
