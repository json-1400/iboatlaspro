import { CheckCircle2, Clock, Mail, MessageSquare, Headphones, ShieldCheck } from "lucide-react";

export function OrderTimelineSection() {
  const steps = [
    {
      time: "Minute 0",
      title: "Paiement 100% Sécurisé",
      desc: "Validation instantanée de votre commande par carte bancaire ou PayPal sous protocole de chiffrement TLS 1.3 de niveau bancaire.",
      icon: ShieldCheck,
      color: "text-[#1E7BFF]",
      border: "border-[#1E7BFF]",
    },
    {
      time: "Minute 5 à 10",
      title: "Attribution de la Ligne",
      desc: "Notre système alloue automatiquement votre flux dédié sur nos serveurs haute disponibilité et génère votre code sécurisé à 12 chiffres.",
      icon: Clock,
      color: "text-[#38BDF8]",
      border: "border-[#38BDF8]",
    },
    {
      time: "Minute 15",
      title: "Réception Email & WhatsApp",
      desc: "Vous recevez votre code d'accès, votre lien M3U et vos identifiants Xtream Codes directement par e-mail et sur WhatsApp pour un suivi direct.",
      icon: Mail,
      color: "text-[#22C55E]",
      border: "border-[#22C55E]",
    },
    {
      time: "Activation",
      title: "Assistance au Premier Zapping",
      desc: "Nos techniciens vous accompagnent en direct pour saisir votre code sur votre application (IBO Player, Atlas ONTV ou Smarters).",
      icon: Headphones,
      color: "text-[#F59E0B]",
      border: "border-[#F59E0B]",
    },
  ];

  return (
    <section className="py-16 bg-[#060D1E] border-t border-[#1A2A4A]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-[#1E7BFF] uppercase tracking-wider">
            TRANSPARENCE & PROCESSUS DE LIVRAISON
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Que se passe-t-il exactement après votre commande ?
          </h2>
          <p className="mt-3 text-sm text-[#9FB0CC] leading-relaxed">
            Pas de délai d&apos;attente imprévisible : voici le déroulement chronologique automatisé entre votre paiement et votre première émission en 4K.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.title}
                className="relative p-6 rounded-2xl bg-[#0A1428] border border-[#1A2A4A] flex flex-col justify-between hover:border-[#1E7BFF]/40 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-white px-2.5 py-1 rounded bg-[#060E1F] border border-[#1A2A4A]">
                      {step.time}
                    </span>
                    <Icon className={`w-5 h-5 ${step.color}`} />
                  </div>

                  <h3 className="text-base font-bold text-white tracking-tight">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-xs text-[#9FB0CC] leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#1A2A4A]/60 flex items-center gap-1.5 text-[11px] text-[#9FB0CC]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Étape {idx + 1} validée en temps réel</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Note de garantie humaine */}
        <div className="mt-10 p-5 rounded-2xl bg-[#0A1428] border border-[#1A2A4A] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-[#9FB0CC]">
          <div className="flex items-center gap-3">
            <MessageSquare className="w-6 h-6 text-[#22C55E] flex-shrink-0" />
            <p>
              <strong className="text-white">Besoin d&apos;une aide immédiate ?</strong> Notre équipe technique est disponible en continu sur WhatsApp pour répondre à vos questions et vous guider pas-à-pas.
            </p>
          </div>
          <a
            href="https://wa.me/212715214002"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 rounded-xl font-bold text-white bg-[#22C55E] hover:bg-[#16A34A] transition-colors whitespace-nowrap text-xs flex items-center gap-2 shadow-[0_0_15px_rgba(34,197,94,0.3)]"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Discuter sur WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
