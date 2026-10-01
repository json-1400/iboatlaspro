import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedGuides } from "@/components/RelatedGuides";
import { CheckCircle2, ArrowRight } from "lucide-react";

export function generateMetadata(): Metadata {
  return {
    title: "Identifiant Atlas Pro Perdu : Retrouver son Code en 3 Étapes",
    description:
      "Vous avez perdu votre identifiant Atlas Pro ? Retrouvez votre code d'accès, nom d'utilisateur ou mot de passe Atlas Pro ONTV en 3 étapes. Guide officiel iboatlaspro.com.",
    keywords:
      "atlas pro identifiant perdu, ou trouver identifiant atlas pro, comment retrouver son code atlas pro, identifiant atlas pro ontv, atlas pro mon compte, code atlas pro perdu, atlas pro identifiant oublié",
    alternates: {
      canonical:
        "https://iboatlaspro.com/centre-d-aide/depannage/identifiant-perdu/",
    },
  };
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Comment retrouver mon identifiant Atlas Pro perdu ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Retrouvez votre identifiant Atlas Pro en 3 étapes : 1) Cherchez l'e-mail de confirmation envoyé par iboatlaspro.com dans votre boîte de réception (sujet : 'Votre commande Atlas Pro'). 2) Vérifiez vos spams. 3) Si introuvable, contactez notre support WhatsApp avec votre numéro de commande ou l'e-mail utilisé lors de l'achat.",
      },
    },
    {
      "@type": "Question",
      name: "Où trouver son code Atlas Pro ONTV ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Votre code Atlas Pro ONTV se trouve dans l'e-mail de confirmation reçu après achat sur iboatlaspro.com. Il contient l'URL du serveur, votre nom d'utilisateur et votre mot de passe. Cherchez dans vos spams si vous ne le trouvez pas.",
      },
    },
    {
      "@type": "Question",
      name: "Atlas Pro identifiant perdu : comment contacter le support ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Contactez le support iboatlaspro.com via WhatsApp disponible 24h/24. Communiquez votre adresse e-mail d'achat ou votre numéro de commande et notre équipe vous renverra vos identifiants Atlas Pro immédiatement.",
      },
    },
    {
      "@type": "Question",
      name: "Peut-on changer son code Atlas Pro ONTV ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Non. Votre identifiant Atlas Pro ONTV est généré automatiquement et lié à votre abonnement. Il ne peut pas être modifié manuellement. En cas de perte, contactez notre support pour récupérer vos accès.",
      },
    },
  ],
};

const relatedGuides = [
  {
    title: "Code ou Abonnement Expiré",
    href: "/centre-d-aide/depannage/code-expire/",
    description: "Renouvelez votre code Atlas Pro et réactivez votre accès instantanément.",
    badge: "Renouvellement",
  },
  {
    title: "Erreur de Connexion Serveur",
    href: "/centre-d-aide/depannage/erreur-connexion-serveur/",
    description: "Résolvez les problèmes de connexion DNS et URL serveur Atlas Pro.",
    badge: "Connexion",
  },
  {
    title: "Atlas Pro ne peut pas se connecter au serveur",
    href: "/centre-d-aide/depannage/ne-peut-pas-se-connecter-au-serveur/",
    description: "6 solutions classées par efficacité pour restaurer l'accès serveur.",
    badge: "Serveur",
  },
];

export default function IdentifiantPerduPage() {
  const breadcrumbItems = [
    { label: "Centre d'aide", href: "/centre-d-aide/" },
    { label: "Dépannage", href: "/centre-d-aide/depannage/" },
    { label: "Identifiant Perdu", href: "/centre-d-aide/depannage/identifiant-perdu/" },
  ];

  const steps = [
    {
      num: "1",
      title: "Cherchez l'e-mail de confirmation dans votre boîte de réception",
      body: "Après achat sur iboatlaspro.com, un e-mail de confirmation a été envoyé à l'adresse utilisée lors du paiement. Sujet de l'e-mail : « Votre commande Atlas Pro — Identifiants d'accès ». Cherchez également dans vos spams / courriers indésirables.",
    },
    {
      num: "2",
      title: "Vérifiez l'historique WhatsApp",
      body: "Vos identifiants Atlas Pro (URL serveur, nom d'utilisateur, mot de passe) ont également été envoyés par message WhatsApp au numéro que vous avez communiqué lors de la commande. Cherchez le message dans votre historique de conversation.",
    },
    {
      num: "3",
      title: "Contactez notre support pour récupérer vos accès",
      body: "Si vous ne retrouvez ni l'e-mail ni le message WhatsApp, contactez notre équipe technique disponible 24h/24. Munissez-vous de votre adresse e-mail d'achat ou de votre numéro de commande pour que nous puissions retrouver votre dossier et renvoyer vos identifiants Atlas Pro immédiatement.",
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
              <span className="gradient-text-blue">Identifiant Atlas Pro</span> Perdu{" "}
              — Retrouver son Code
            </h1>
            <p className="mt-4 text-base text-[#9FB0CC] leading-relaxed max-w-2xl mx-auto">
              Vous avez perdu votre code d&apos;accès, nom d&apos;utilisateur ou mot de passe Atlas Pro ?
              Retrouvez-le en moins de 2 minutes avec ce guide.
            </p>
          </header>

          <div className="space-y-4 text-sm sm:text-base text-white/90 leading-relaxed">
            {steps.map((step) => (
              <div
                key={step.num}
                className="p-6 rounded-2xl bg-[#0A1428] border border-[#1A2A4A] flex gap-5 items-start"
              >
                <div className="w-9 h-9 rounded-full bg-[#1E7BFF] flex items-center justify-center text-white font-extrabold text-sm flex-shrink-0">
                  {step.num}
                </div>
                <div className="space-y-1.5">
                  <h2 className="text-base font-bold text-white flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#22C55E] flex-shrink-0" />
                    {step.title}
                  </h2>
                  <p className="text-[#9FB0CC] text-xs sm:text-sm">{step.body}</p>
                </div>
              </div>
            ))}

            {/* Security note */}
            <div className="p-5 rounded-2xl bg-[#060E1F] border border-[#1A2A4A]">
              <p className="text-xs text-[#9FB0CC] leading-relaxed">
                <strong className="text-white">Conseil de sécurité :</strong> Une fois vos identifiants retrouvés,
                notez-les dans un gestionnaire de mots de passe (Bitwarden, 1Password) ou dans un document
                sécurisé pour éviter ce problème à l&apos;avenir.
              </p>
            </div>

            {/* CTA bridge */}
            <div className="my-8 p-8 rounded-2xl bg-gradient-to-r from-[#0A1428] to-[#0E1C38] border border-[#1E7BFF] text-center space-y-4">
              <h3 className="text-xl font-bold text-white">
                Votre abonnement Atlas Pro est également expiré ?
              </h3>
              <p className="text-xs sm:text-sm text-[#9FB0CC] max-w-xl mx-auto">
                Profitez-en pour renouveler votre accès 12 mois et recevoir de nouveaux identifiants
                frais immédiatement.
              </p>
              <Link
                href="/abonnement-atlas-pro-12-mois/"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-bold text-white bg-[#1E7BFF] hover:bg-[#2D9CFF] glow-primary transition-all"
              >
                <span>Renouveler l&apos;abonnement 12 mois (39,99 €)</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <RelatedGuides
            title="Autres Fiches Dépannage"
            subtitle="Consultez nos solutions aux pannes fréquentes pour retrouver un streaming fluide."
            guides={relatedGuides}
          />
        </article>
      </main>

      <Footer />
    </div>
  );
}
