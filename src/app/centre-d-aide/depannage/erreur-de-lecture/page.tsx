import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedGuides } from "@/components/RelatedGuides";
import { ExpiredAlert } from "@/components/ExpiredAlert";
import { CheckCircle2, ArrowRight } from "lucide-react";

export function generateMetadata(): Metadata {
  return {
    title: "Atlas Pro Erreur de Lecture & Buffering : 5 Solutions Rapides",
    description:
      "Résolvez l'erreur de lecture sur Atlas Pro ONTV : saccades, freeze, écran noir, buffering. Guide de dépannage 2026 pour Smart TV, Fire Stick et Android.",
    keywords:
      "atlas pro erreur de lecture, atlas pro on tv erreur de lecture, erreur de lecture atlas pro ontv, atlas pro bug, atlas pro ne fonctionne plus, atlas pro saccades, atlas pro freeze, buffering atlas pro",
    alternates: {
      canonical:
        "https://iboatlaspro.com/centre-d-aide/depannage/erreur-de-lecture/",
    },
  };
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Pourquoi Atlas Pro affiche une erreur de lecture ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "L'erreur de lecture sur Atlas Pro est généralement causée par : une vitesse de connexion Internet insuffisante (minimum 20 Mbps recommandé), un tampon (buffer) trop petit dans les paramètres de l'application, une chaîne temporairement hors service, ou un problème DNS. Changez vos DNS en 8.8.8.8 et augmentez la taille du buffer dans les paramètres Atlas Pro.",
      },
    },
    {
      "@type": "Question",
      name: "Comment résoudre les saccades et le buffering sur Atlas Pro ONTV ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pour éliminer le buffering sur Atlas Pro ONTV : 1) Testez votre débit Internet (minimum 20 Mbps). 2) Changez vos DNS en 8.8.8.8. 3) Dans les paramètres Atlas Pro, augmentez la taille du buffer à 3000 ms. 4) Connectez votre appareil en câble Ethernet plutôt qu'en Wi-Fi. 5) Essayez une autre qualité de flux (HD au lieu de 4K).",
      },
    },
    {
      "@type": "Question",
      name: "Atlas Pro on TV erreur de lecture sur Samsung : que faire ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sur Samsung TV : allez dans les paramètres d'Atlas Pro IBO, augmentez la taille du tampon, changez les DNS réseau (Paramètres > Réseau > DNS : 8.8.8.8). Si le problème persiste, désinstallez et réinstallez Atlas Pro IBO depuis le Samsung App Store.",
      },
    },
    {
      "@type": "Question",
      name: "Atlas Pro ne fonctionne plus après une mise à jour, que faire ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Après une mise à jour d'Atlas Pro ONTV, une erreur peut survenir si le cache est corrompu. Solution : désinstallez l'application, redémarrez l'appareil, réinstallez la dernière version depuis notre page /applications/atlas-pro-ontv/ et rentrez vos identifiants.",
      },
    },
  ],
};

const relatedGuides = [
  {
    title: "Atlas Pro ne peut pas se connecter au serveur",
    href: "/centre-d-aide/depannage/ne-peut-pas-se-connecter-au-serveur/",
    description: "6 solutions pour l'erreur de connexion serveur Atlas Pro.",
    badge: "Connexion",
  },
  {
    title: "Écran Noir & Buffering IPTV",
    href: "/centre-d-aide/depannage/ecran-noir-buffering/",
    description: "Optimisation réseau et paramètres buffer pour flux fluides.",
    badge: "Optimisation",
  },
  {
    title: "Code ou Abonnement Expiré",
    href: "/centre-d-aide/depannage/code-expire/",
    description: "Réactivez votre code Atlas Pro après expiration.",
    badge: "Renouvellement",
  },
];

export default function ErreurDeLecturePage() {
  const breadcrumbItems = [
    { label: "Centre d'aide", href: "/centre-d-aide/" },
    { label: "Dépannage", href: "/centre-d-aide/depannage/" },
    { label: "Erreur de Lecture", href: "/centre-d-aide/depannage/erreur-de-lecture/" },
  ];

  const solutions = [
    {
      num: "1",
      title: "Tester et optimiser votre connexion Internet",
      priority: "COMMENCEZ ICI",
      body: "Atlas Pro 4K nécessite au minimum 20 Mbps. Testez votre débit sur fast.com. Si votre débit est insuffisant, basculez sur une qualité HD dans les paramètres de flux d'Atlas Pro ONTV. Connectez votre appareil en câble Ethernet (RJ45) plutôt qu'en Wi-Fi pour éliminer les pertes de signal.",
    },
    {
      num: "2",
      title: "Changer les DNS vers Google ou Cloudflare",
      priority: null,
      body: "Un blocage DNS peut provoquer des erreurs de lecture intermittentes. Dans les paramètres réseau de votre appareil, configurez le DNS primaire sur 8.8.8.8 (Google) et le secondaire sur 8.8.4.4. Redémarrez l'application ensuite.",
    },
    {
      num: "3",
      title: "Augmenter la taille du tampon (buffer)",
      priority: null,
      body: "Dans Atlas Pro ONTV ou IPTV Smarters Pro, accédez aux Paramètres > Lecteur > Taille du buffer et augmentez la valeur à 3 000 ms ou 5 000 ms. Un buffer plus grand compensera les micro-variations de votre connexion et éliminera les saccades.",
    },
    {
      num: "4",
      title: "Essayer une autre chaîne ou un autre flux",
      priority: null,
      body: "Certaines chaînes peuvent être temporairement indisponibles sur le serveur. Testez plusieurs chaînes différentes. Si une seule chaîne cause une erreur de lecture, le problème vient du diffuseur source et non de votre abonnement ou connexion.",
    },
    {
      num: "5",
      title: "Vider le cache et mettre à jour l'application",
      priority: null,
      body: "Allez dans Paramètres > Applications > Atlas Pro ONTV > Vider le cache. Ensuite, vérifiez si une mise à jour de l'application est disponible sur le Play Store ou via notre page de téléchargement officielle. Relancez l'application après la mise à jour.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#040A17] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbItems} />
        </div>

        <article className="py-12 md:py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="text-center mb-12">
            <span className="px-3.5 py-1.5 rounded-full text-xs font-bold text-white bg-[#0A1428] border border-[#1E7BFF]">
              GUIDE DE DÉPANNAGE
            </span>
            <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              <span className="gradient-text-blue">Atlas Pro</span> — Erreur de Lecture{" "}
              & Buffering
            </h1>
            <p className="mt-4 text-base text-[#9FB0CC] leading-relaxed max-w-2xl mx-auto">
              Saccades, freeze, écran noir, message &laquo; Erreur de lecture &raquo; sur Atlas Pro ONTV —
              ces 5 solutions règlent 95 % des problèmes de lecture en quelques minutes.
            </p>
          </header>

          <div className="space-y-4 text-sm sm:text-base text-white/90 leading-relaxed">
            {solutions.map((sol) => (
              <div
                key={sol.num}
                className="p-6 rounded-2xl bg-[#0A1428] border border-[#1A2A4A] space-y-3"
              >
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-full bg-[#1E7BFF]/20 text-[#1E7BFF] flex items-center justify-center font-extrabold text-sm flex-shrink-0">
                    {sol.num}
                  </div>
                  <div className="flex-1 space-y-2">
                    <div>
                      {sol.priority && (
                        <span className="block text-[10px] font-bold text-[#22C55E] uppercase tracking-wider mb-0.5">
                          {sol.priority}
                        </span>
                      )}
                      <h2 className="text-base font-bold text-white flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#22C55E] flex-shrink-0" />
                        {sol.title}
                      </h2>
                    </div>
                    <p className="text-[#9FB0CC] text-xs sm:text-sm">{sol.body}</p>
                  </div>
                </div>
              </div>
            ))}

            <ExpiredAlert
              title="Les erreurs de lecture peuvent aussi indiquer un abonnement expiré"
              message="Lorsque votre code Atlas Pro expire, le serveur peut afficher une erreur de lecture au lieu d'un message d'expiration clair. Si vous utilisez Atlas Pro depuis plus de 12 mois sans renouveler, c'est probablement la cause."
            />

            <div className="my-8 p-8 rounded-2xl bg-gradient-to-r from-[#0A1428] to-[#0E1C38] border border-[#1E7BFF] text-center space-y-4">
              <h3 className="text-xl font-bold text-white">
                Problème non résolu ? Notre support technique répond en 5 minutes
              </h3>
              <p className="text-xs sm:text-sm text-[#9FB0CC] max-w-xl mx-auto">
                Nos techniciens peuvent diagnostiquer votre erreur de lecture Atlas Pro à distance
                et vous guider en temps réel via WhatsApp.
              </p>
              <Link
                href="/abonnement-atlas-pro/12-mois/"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-bold text-white bg-[#1E7BFF] hover:bg-[#2D9CFF] glow-primary transition-all"
              >
                <span>Renouveler ou commander Atlas Pro</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <RelatedGuides
            title="Autres Fiches Dépannage"
            subtitle="Consultez nos guides pour résoudre tous les problèmes fréquents Atlas Pro."
            guides={relatedGuides}
          />
        </article>
      </main>

      <Footer />
    </div>
  );
}
