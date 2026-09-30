import Link from "next/link";
import { CheckCircle2, MessageSquare, Tv, ArrowRight, ShieldCheck } from "lucide-react";

export function HowToStepsSection() {
  const steps = [
    {
      number: "01",
      icon: CheckCircle2,
      title: "Choisissez votre formule",
      desc: "Sélectionnez l'offre adaptée à votre foyer : 12 Mois (39,99 €) ou l'un de nos packs Multi-Écrans pour équiper salon et chambres.",
    },
    {
      number: "02",
      icon: MessageSquare,
      title: "Recevez votre code sous 15 min",
      desc: "Dès validation sécurisée, vos identifiants (code 12 chiffres, lien m3u et identifiant Xtream) vous sont transmis par e-mail et WhatsApp.",
    },
    {
      number: "03",
      icon: Tv,
      title: "Connectez-vous et profitez",
      desc: "Ouvrez Atlas Pro ONTV, Atlas Pro Max ou IBO Player sur votre téléviseur, entrez votre code et accédez immédiatement à +10 000 chaînes 4K.",
    },
  ];

  return (
    <section
      className="py-20 md:py-28 bg-[#040A17] relative border-t border-[#1A2A4A]"
      aria-label="Comment activer votre abonnement en 3 étapes"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-bold text-[#1E7BFF] tracking-wider uppercase">
            SIMPLICITÉ & RAPIDITÉ
          </span>
          <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Comment Activer Votre Accès Atlas Pro en 3 Minutes
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#9FB0CC] leading-relaxed">
            Aucune configuration complexe ni compétence technique requise.
            Notre équipe vous accompagne en direct sur WhatsApp en cas de besoin.
          </p>
        </div>

        {/* 3 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative max-w-6xl mx-auto">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="bg-[#0A1428] border border-[#1A2A4A] hover:border-[#1E7BFF]/50 rounded-2xl p-7 sm:p-8 transition-colors flex flex-col justify-between relative group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#1E7BFF]/10 border border-[#1E7BFF]/30 flex items-center justify-center text-[#1E7BFF]">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-3xl sm:text-4xl font-black text-[#1A2A4A] group-hover:text-[#1E7BFF]/40 transition-colors font-mono">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                    {step.title}
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-sm text-[#9FB0CC] leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#1A2A4A]/50 flex items-center gap-1.5 text-xs text-emerald-400 font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Activation garantie ou remboursé</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA to Pricing */}
        <div className="mt-14 text-center">
          <Link
            href="#abonnement"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-base font-bold text-white bg-[#1E7BFF] hover:bg-[#2D9CFF] glow-primary transition-all transform hover:-translate-y-0.5"
          >
            <span>Choisir ma formule d&apos;abonnement</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
