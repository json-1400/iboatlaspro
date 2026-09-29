import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SiloHeader } from "@/components/SiloHeader";
import { Star, CheckCircle2, ArrowRight } from "lucide-react";

export function generateMetadata(): Metadata {
  return {
    title: "Avis Abonnement IPTV France : Plus de 2 300 Témoignages Vérifiés",
    description:
      "Consultez les avis authentiques de nos clients sur l'abonnement IPTV iboatlaspro. Note moyenne 4.8/5 sur +2 300 avis. Qualité 4K, zéro buffer et support 24/7.",
    alternates: {
      canonical: "https://iboatlaspro.com/avis-clients/",
    },
  };
}

export default function AvisClientsPage() {
  const breadcrumbItems = [
    { label: "Avis Clients", href: "/avis-clients/" },
  ];

  const extendedReviews = [
    {
      name: "Thomas D.",
      location: "Bruxelles",
      rating: 5,
      date: "Il y a 2 jours",
      plan: "Abonnement 12 Mois",
      comment:
        "Service au top ! Qualité incroyable en 4K et zéro buffer même pendant les grands soirs de matchs et multiplex. Je recommande à 100% !",
      avatarSrc: "/images/avatars/thomas.jpg",
    },
    {
      name: "Sophie L.",
      location: "Liège",
      rating: 5,
      date: "Il y a 5 jours",
      plan: "Abonnement 12 Mois",
      comment:
        "Installation super rapide sur ma Smart TV Samsung et support très réactif sur WhatsApp. Meilleur IPTV que j'ai testé depuis des années !",
      avatarSrc: "/images/avatars/sophie.jpg",
    },
    {
      name: "Karim B.",
      location: "Marseille",
      rating: 5,
      date: "Il y a 1 semaine",
      plan: "Abonnement 6 Mois",
      comment:
        "Toutes les chaînes que je voulais, films et séries inclus. Zapping ultra rapide et image d'une netteté parfaite.",
      avatarSrc: "/images/avatars/karim.jpg",
    },
    {
      name: "Alexandre M.",
      location: "Paris",
      rating: 5,
      date: "Il y a 2 semaines",
      plan: "Abonnement 12 Mois",
      comment:
        "Fonctionne à merveille sur mon Amazon Fire Stick 4K avec l'application Atlas Pro ONTV. Aucun décalage sur les matchs en direct.",
      avatarSrc: "/images/avatars/thomas.jpg",
    },
    {
      name: "Nathalie R.",
      location: "Lyon",
      rating: 5,
      date: "Il y a 3 semaines",
      plan: "Pack IBO Player",
      comment:
        "Application IBO Player activée en moins de 10 minutes après paiement. Assistance par message très polie et professionnelle.",
      avatarSrc: "/images/avatars/sophie.jpg",
    },
    {
      name: "Mehdi T.",
      location: "Toulouse",
      rating: 5,
      date: "Il y a 1 mois",
      plan: "Abonnement 12 Mois",
      comment:
        "J'avais des doutes après de mauvaises expériences ailleurs, mais ici les serveurs tiennent parfaitement la charge. 10/10.",
      avatarSrc: "/images/avatars/karim.jpg",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#040A17] text-white">
      <Navbar />

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbItems} />
        </div>

        <SiloHeader
          badge="NOTE CLIENT 4.8 / 5"
          titlePrefix="Avis Clients sur"
          titleGradient="l'Abonnement IPTV"
          titleSuffix="France"
          description="Découvrez les retours d'expérience authentiques de notre communauté d'abonnés en France, Belgique et Suisse."
          primaryCtaText="Rejoindre nos abonnés"
          primaryCtaHref="/abonnement-atlas-pro/12-mois/"
        />

        {/* Global Rating Score Banner */}
        <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 rounded-2xl bg-[#0A1428] border border-[#1A2A4A] flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <div className="flex items-center justify-center md:justify-start gap-1 text-[#FFB800] mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-current" />
                ))}
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                4.8 sur 5 étoiles
              </h2>
              <p className="text-xs sm:text-sm text-[#9FB0CC] mt-1">
                Basé sur 2 348 avis clients vérifiés au cours des 12 derniers mois.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-white">
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#060E1F] border border-[#1A2A4A]">
                <CheckCircle2 className="w-4 h-4 text-[#22C55E]" />
                99.2% de satisfaction
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#060E1F] border border-[#1A2A4A]">
                <CheckCircle2 className="w-4 h-4 text-[#22C55E]" />
                Support résolu sous 15 min
              </span>
            </div>
          </div>
        </section>

        {/* Reviews Grid */}
        <section className="pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {extendedReviews.map((rev, index) => (
              <div
                key={`${rev.name}-${index}`}
                className="p-6 rounded-2xl bg-[#0A1428] border border-[#1A2A4A] flex flex-col justify-between space-y-4 hover:border-[#1E7BFF]/40 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="relative w-10 h-10 rounded-full overflow-hidden border border-[#1E7BFF]/30">
                        <Image
                          src={rev.avatarSrc}
                          alt={rev.name}
                          fill
                          sizes="40px"
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-white">
                          {rev.name}
                        </h3>
                        <p className="text-xs text-[#9FB0CC]">{rev.location}</p>
                      </div>
                    </div>
                    <span className="text-[10px] text-[#9FB0CC]">{rev.date}</span>
                  </div>

                  <div className="flex items-center gap-1 text-[#FFB800] mb-2">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>

                  <p className="text-xs sm:text-sm text-[#9FB0CC] italic leading-relaxed">
                    &ldquo;{rev.comment}&rdquo;
                  </p>
                </div>

                <div className="pt-3 border-t border-[#1A2A4A] flex items-center justify-between text-[11px] text-[#1E7BFF]">
                  <span>Formule : {rev.plan}</span>
                  <span className="text-[#22C55E] flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> Achat vérifié
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
