import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedGuides } from "@/components/RelatedGuides";
import { ExpiredAlert } from "@/components/ExpiredAlert";
import { CheckCircle2, AlertCircle, ArrowRight } from "lucide-react";

export function generateMetadata(): Metadata {
  return {
    title: "Atlas Pro Ne Peut Pas Se Connecter au Serveur : 6 Solutions 2026",
    description:
      "Résolvez l'erreur « Atlas Pro ne peut pas se connecter au serveur » en moins de 5 minutes. DNS, redémarrage box, URL invalide, code expiré : toutes les causes et solutions.",
    keywords:
      "atlas pro ne peut pas se connecter au serveur, atlaspro ne peut pas se connecter au serveur, atlas pro impossible de se connecter au serveur, pourquoi atlas pro ne peut pas se connecter au serveur, atlas pro url serveur invalide, atlas pro connexion serveur impossible, atlas pro ne se connecte pas au serveur",
    alternates: {
      canonical:
        "https://iboatlaspro.com/centre-d-aide/depannage/ne-peut-pas-se-connecter-au-serveur/",
    },
  };
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Pourquoi Atlas Pro ne peut pas se connecter au serveur ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Les causes principales sont : 1) blocage DNS de votre fournisseur d'accès (FAI), 2) redémarrage nécessaire de votre box Internet, 3) URL du serveur incorrecte ou avec espace accidentel, 4) abonnement Atlas Pro expiré, 5) panne temporaire du serveur. Changez vos DNS vers 8.8.8.8 et 8.8.4.4 pour résoudre 80 % des cas.",
      },
    },
    {
      "@type": "Question",
      name: "Comment résoudre l'erreur de connexion serveur Atlas Pro ONTV ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Solution en 3 étapes : 1) Changez vos DNS en 8.8.8.8 (primaire) et 8.8.4.4 (secondaire) dans les paramètres réseau de votre appareil. 2) Débranchez votre box Internet 30 secondes. 3) Vérifiez l'URL du serveur Atlas Pro — copiez-collez depuis votre e-mail sans espaces.",
      },
    },
    {
      "@type": "Question",
      name: "Atlas Pro ne peut pas se connecter au serveur sur Samsung TV, que faire ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sur Samsung TV : allez dans Paramètres > Général > Réseau > Paramètres réseau > Modifier le DNS. Entrez 8.8.8.8 comme DNS primaire. Redémarrez Atlas Pro IBO. Si le problème persiste, vérifiez que votre abonnement Atlas Pro n'est pas expiré.",
      },
    },
    {
      "@type": "Question",
      name: "Atlas Pro URL serveur invalide : comment corriger ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "L'erreur 'URL serveur invalide' sur Atlas Pro signifie que l'adresse de serveur saisie est incorrecte. Copiez-collez l'URL exactement depuis votre e-mail de confirmation iboatlaspro.com — vérifiez qu'il n'y a pas d'espace avant http:// et que le port est inclus.",
      },
    },
    {
      "@type": "Question",
      name: "Atlas Pro ne peut pas se connecter au serveur 2026, est-ce une panne ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Si plusieurs utilisateurs signalent le problème simultanément, il peut s'agir d'une maintenance temporaire de nos serveurs. Contactez notre support WhatsApp disponible 24h/24 pour une confirmation en temps réel.",
      },
    },
  ],
};

const relatedGuides = [
  {
    title: "Erreur de Lecture & Buffering",
    href: "/centre-d-aide/depannage/erreur-de-lecture/",
    description: "Résolvez les saccades, freezes et erreurs de lecture sur Atlas Pro.",
    badge: "Lecture",
  },
  {
    title: "Code ou Abonnement Expiré",
    href: "/centre-d-aide/depannage/code-expire/",
    description: "Réactivez votre code Atlas Pro immédiatement après expiration.",
    badge: "Renouvellement",
  },
  {
    title: "Identifiant Atlas Pro Perdu",
    href: "/centre-d-aide/depannage/identifiant-perdu/",
    description: "Retrouvez votre code d'accès Atlas Pro sans réinstaller.",
    badge: "Identifiant",
  },
];

export default function NeConnectePasServeurPage() {
  const breadcrumbItems = [
    { label: "Centre d'aide", href: "/centre-d-aide/" },
    { label: "Dépannage", href: "/centre-d-aide/depannage/" },
    {
      label: "Ne peut pas se connecter au serveur",
      href: "/centre-d-aide/depannage/ne-peut-pas-se-connecter-au-serveur/",
    },
  ];

  const solutions = [
    {
      num: "1",
      title: "Modifier les DNS de votre appareil",
      priority: "SOLUTION LA PLUS EFFICACE — 80 % des cas",
      color: "[#22C55E]",
      body: (
        <>
          Votre fournisseur d&apos;accès Internet (Orange, SFR, Bouygues, Free) bloque parfois
          les adresses IPTV par défaut. Changez vos DNS dans les paramètres réseau :
          <ul className="mt-2 space-y-1 text-[#9FB0CC]">
            <li>
              <strong className="text-white">DNS Primaire :</strong>{" "}
              <code className="bg-[#0A1428] px-2 py-0.5 rounded text-[#22C55E]">8.8.8.8</code>{" "}
              (Google)
            </li>
            <li>
              <strong className="text-white">DNS Secondaire :</strong>{" "}
              <code className="bg-[#0A1428] px-2 py-0.5 rounded text-[#22C55E]">8.8.4.4</code>
            </li>
          </ul>
          <p className="mt-2 text-[#9FB0CC] text-xs">
            Ou utilisez Cloudflare :{" "}
            <code className="bg-[#0A1428] px-1.5 py-0.5 rounded">1.1.1.1</code> /{" "}
            <code className="bg-[#0A1428] px-1.5 py-0.5 rounded">1.0.0.1</code>
          </p>
        </>
      ),
    },
    {
      num: "2",
      title: "Redémarrer votre box Internet",
      priority: null,
      color: "[#1E7BFF]",
      body: (
        <p className="text-[#9FB0CC] text-xs sm:text-sm">
          Débranchez la prise électrique de votre box Internet pendant 30 secondes pour
          renouveler votre adresse IP publique. Redémarrez ensuite Atlas Pro ONTV ou Atlas Pro IBO.
        </p>
      ),
    },
    {
      num: "3",
      title: "Vérifier l'URL du serveur et les identifiants",
      priority: null,
      color: "[#1E7BFF]",
      body: (
        <>
          <p className="text-[#9FB0CC] text-xs sm:text-sm">
            L&apos;URL et les identifiants Atlas Pro sont sensibles à la casse. Vérifiez :
          </p>
          <ul className="mt-2 space-y-1 text-[#9FB0CC] text-xs list-disc list-inside">
            <li>Pas d&apos;espace avant ou après l&apos;URL</li>
            <li>Le protocole <code className="bg-[#060E1F] px-1 rounded">http://</code> ou <code className="bg-[#060E1F] px-1 rounded">https://</code> est bien présent</li>
            <li>Le port est inclus (ex : <code className="bg-[#060E1F] px-1 rounded">:8080</code>)</li>
            <li>Nom d&apos;utilisateur et mot de passe copiés sans faute depuis l&apos;e-mail</li>
          </ul>
        </>
      ),
    },
    {
      num: "4",
      title: "Forcer la fermeture et relancer Atlas Pro",
      priority: null,
      color: "[#1E7BFF]",
      body: (
        <p className="text-[#9FB0CC] text-xs sm:text-sm">
          Sur votre appareil, forcez la fermeture de l&apos;application Atlas Pro (paramètres &gt;
          applications &gt; Atlas Pro &gt; forcer l&apos;arrêt), attendez 10 secondes,
          puis relancez. Videz également le cache de l&apos;application.
        </p>
      ),
    },
    {
      num: "5",
      title: "Désactiver votre VPN s'il est actif",
      priority: null,
      color: "[#1E7BFF]",
      body: (
        <p className="text-[#9FB0CC] text-xs sm:text-sm">
          Un VPN actif peut bloquer la connexion aux serveurs Atlas Pro. Désactivez
          temporairement votre VPN, relancez l&apos;application et testez la connexion.
        </p>
      ),
    },
    {
      num: "6",
      title: "Réinstaller l'application Atlas Pro",
      priority: null,
      color: "[#1E7BFF]",
      body: (
        <p className="text-[#9FB0CC] text-xs sm:text-sm">
          En dernier recours, désinstallez complètement Atlas Pro ONTV, redémarrez l&apos;appareil,
          réinstallez via notre page{" "}
          <Link href="/applications/atlas-pro-ontv/" className="text-[#1E7BFF] underline underline-offset-2">
            téléchargement officiel
          </Link>{" "}
          et saisissez à nouveau vos identifiants.
        </p>
      ),
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
              <span className="gradient-text-blue">Atlas Pro</span> Ne Peut Pas Se Connecter au Serveur
            </h1>
            <p className="mt-4 text-base text-[#9FB0CC] leading-relaxed max-w-2xl mx-auto">
              Ce message d&apos;erreur touche principalement les abonnés dont le FAI bloque les adresses IPTV.
              Suivez nos 6 solutions dans l&apos;ordre — la première résout 80 % des cas en 2 minutes.
            </p>
          </header>

          <div className="space-y-4 text-sm sm:text-base leading-relaxed">
            {solutions.map((sol) => (
              <div
                key={sol.num}
                className="p-6 rounded-2xl bg-[#0A1428] border border-[#1A2A4A] space-y-3"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-9 h-9 rounded-full bg-${sol.color}/20 text-${sol.color} flex items-center justify-center font-extrabold text-sm flex-shrink-0`}>
                    {sol.num}
                  </div>
                  <div className="flex-1 space-y-2">
                    <div>
                      {sol.priority && (
                        <span className={`block text-[10px] font-bold text-${sol.color} uppercase tracking-wider mb-0.5`}>
                          {sol.priority}
                        </span>
                      )}
                      <h2 className="text-base font-bold text-white flex items-center gap-2">
                        <CheckCircle2 className={`w-4 h-4 text-${sol.color} flex-shrink-0`} />
                        {sol.title}
                      </h2>
                    </div>
                    <div>{sol.body}</div>
                  </div>
                </div>
              </div>
            ))}

            <ExpiredAlert
              title="Votre abonnement Atlas Pro est expiré ?"
              message="Si votre code Atlas Pro est arrivé à terme, le serveur coupe automatiquement l'accès — c'est la cause la plus fréquente après DNS. Renouvelez votre abonnement 12 mois pour retrouver l'accès immédiatement."
            />

            <div className="my-8 p-8 rounded-2xl bg-gradient-to-r from-[#0A1428] to-[#0E1C38] border border-[#1E7BFF] text-center space-y-4">
              <h3 className="text-xl font-bold text-white">
                Le problème persiste ? Notre support répond en moins de 5 minutes
              </h3>
              <p className="text-xs sm:text-sm text-[#9FB0CC] max-w-xl mx-auto">
                Notre équipe technique est disponible 24h/24 sur WhatsApp pour diagnostiquer
                votre connexion Atlas Pro et vous redonner l&apos;accès instantanément.
              </p>
              <Link
                href="/abonnement-atlas-pro/12-mois/"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-bold text-white bg-[#1E7BFF] hover:bg-[#2D9CFF] glow-primary transition-all"
              >
                <span>Renouveler mon abonnement Atlas Pro</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <RelatedGuides
            title="Autres Fiches Dépannage"
            subtitle="Consultez nos autres guides pour résoudre rapidement les problèmes fréquents."
            guides={relatedGuides}
          />
        </article>
      </main>

      <Footer />
    </div>
  );
}
