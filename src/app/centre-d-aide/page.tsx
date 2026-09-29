// CLIENT: interactive help center search and filter
"use client";

import { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import {
  Search,
  Wrench,
  AlertCircle,
  BookOpen,
  HelpCircle,
  ArrowRight,
  Headphones,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function CentreAideMasterPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const breadcrumbItems = [
    { label: "Centre d'aide & Support", href: "/centre-d-aide/" },
  ];

  const categories = [
    {
      title: "Guides d'Installation",
      desc: "Tutoriels pas à pas pour Smart TV, Amazon Fire TV Stick, Box Android et MAG Box.",
      icon: Wrench,
      href: "/centre-d-aide/installation/",
      badge: "4 guides",
    },
    {
      title: "Dépannage & Résolution d'Erreurs",
      desc: "Résolvez les soucis de buffering, écran noir, erreur de connexion au serveur et code expiré.",
      icon: AlertCircle,
      href: "/centre-d-aide/depannage/",
      badge: "3 solutions",
    },
    {
      title: "Tutoriels Applications",
      desc: "Configuration d'IBO Player Pro, IPTV Smarters Pro, injection de playlist M3U et Xtream.",
      icon: BookOpen,
      href: "/centre-d-aide/tutoriels/",
      badge: "Tutos pas à pas",
    },
    {
      title: "Guides & Comparatifs",
      desc: "Articles d'experts sur la légalité de l'IPTV, comparatifs des boîtiers TV et conseils débit.",
      icon: HelpCircle,
      href: "/centre-d-aide/guides/",
      badge: "Articles de fond",
    },
  ];

  const popularArticles = [
    {
      title: "Comment résoudre l'erreur de connexion au serveur ?",
      category: "Dépannage",
      href: "/centre-d-aide/depannage/erreur-connexion-serveur/",
    },
    {
      title: "Installer l'IPTV sur Smart TV Samsung & LG",
      category: "Installation",
      href: "/centre-d-aide/installation/smart-tv/",
    },
    {
      title: "Code ou abonnement expiré : que faire ?",
      category: "Dépannage",
      href: "/centre-d-aide/depannage/code-expire/",
    },
    {
      title: "L'IPTV est-elle légale en France et en Europe ?",
      category: "Guides",
      href: "/centre-d-aide/guides/iptv-legal-ou-illegal/",
    },
    {
      title: "Configuration complète d'IBO Player Pro",
      category: "Tutoriels",
      href: "/centre-d-aide/tutoriels/configurer-ibo-player/",
    },
  ];

  const filteredArticles = searchQuery.trim()
    ? popularArticles.filter((art) =>
        art.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : popularArticles;

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
              ASSISTANCE 24/7 & TUTORIELS
            </span>
            <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Centre d&apos;Aide &{" "}
              <span className="gradient-text-blue">Support Client</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[#9FB0CC] max-w-xl mx-auto leading-relaxed">
              Comment pouvons-nous vous aider aujourd&apos;hui ? Retrouvez tous
              nos guides de configuration, solutions aux erreurs et assistance.
            </p>

            {/* Interactive Search Bar */}
            <div className="mt-8 max-w-2xl mx-auto relative">
              <Search className="w-5 h-5 text-[#9FB0CC] absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Rechercher un tutoriel (ex: Smart TV, code expiré, buffering, Smarters)..."
                className="w-full pl-12 pr-4 py-4 rounded-full bg-[#0A1428] border border-[#1A2A4A] focus:border-[#1E7BFF] text-white placeholder-[#9FB0CC]/60 text-sm sm:text-base shadow-2xl focus:outline-none transition-colors"
              />
            </div>
          </div>
        </section>

        {/* 4 Main Category Cards */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat) => {
              const IconComp = cat.icon;
              return (
                <Link
                  key={cat.title}
                  href={cat.href}
                  className="p-6 rounded-2xl bg-[#0A1428] border border-[#1A2A4A] hover:border-[#1E7BFF] transition-all group flex flex-col justify-between space-y-4 hover:-translate-y-0.5"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-11 h-11 rounded-xl bg-[#1E7BFF]/20 text-[#1E7BFF] flex items-center justify-center group-hover:scale-105 transition-transform">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-bold text-[#9FB0CC] bg-[#060E1F] px-2.5 py-1 rounded-full border border-[#1A2A4A]">
                        {cat.badge}
                      </span>
                    </div>

                    <h2 className="text-lg font-bold text-white group-hover:text-[#1E7BFF] transition-colors">
                      {cat.title}
                    </h2>
                    <p className="text-xs text-[#9FB0CC] mt-2 leading-relaxed">
                      {cat.desc}
                    </p>
                  </div>

                  <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1E7BFF] pt-2">
                    <span>Accéder aux guides</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Popular / Search Results Articles */}
        <section className="py-12 bg-[#060E1F]/50 border-t border-b border-[#1A2A4A]/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-bold text-white mb-6">
              {searchQuery ? "Résultats de recherche" : "Articles les plus consultés"}
            </h2>

            <div className="space-y-3">
              {filteredArticles.map((art) => (
                <Link
                  key={art.title}
                  href={art.href}
                  className="p-4 rounded-xl bg-[#0A1428] border border-[#1A2A4A] hover:border-[#1E7BFF] transition-colors flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#1E7BFF] bg-[#1E7BFF]/10 px-2 py-0.5 rounded">
                      {art.category}
                    </span>
                    <span className="text-xs sm:text-sm font-medium text-white group-hover:text-[#1E7BFF] transition-colors">
                      {art.title}
                    </span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#9FB0CC] group-hover:text-[#1E7BFF] transition-colors flex-shrink-0" />
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
              Vous n&apos;avez pas trouvé réponse à votre question ?
            </h2>
            <p className="text-xs sm:text-sm text-[#9FB0CC] max-w-lg mx-auto">
              Nos techniciens sont connectés en permanence pour vous assister en
              direct et configurer votre appareil à distance.
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
