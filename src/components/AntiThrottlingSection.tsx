import { ShieldAlert, Zap, Globe, Router, Sliders, CheckCircle2 } from "lucide-react";

export function AntiThrottlingSection() {
  const tips = [
    {
      step: "01",
      icon: Globe,
      title: "Changer les DNS de votre Décodeur / TV",
      problem: "Les résolveurs DNS par défaut de certains FAI ralentissent la résolution des serveurs de streaming aux heures de grande écoute.",
      solution: "Basculez manuellement vos DNS sur Cloudflare (1.1.1.1 et 1.0.0.1) ou Google (8.8.8.8 et 8.8.4.4) dans les paramètres réseau de votre TV ou de votre box.",
      result: "Résolution d'adresse immédiate et contournement des filtres de transit.",
    },
    {
      step: "02",
      icon: Sliders,
      title: "Augmenter la Taille du Buffer (Mémoire Tampon)",
      problem: "Un buffer trop court (1 à 2 secondes) entraîne une interruption de l'image dès qu'une micro-variation de débit survient sur votre ligne.",
      solution: "Dans les réglages de votre lecteur (Atlas ONTV, IBO Player ou Smarters), modifiez le paramètre 'Stream Buffer' en sélectionnant 'Large / Élevé' (4 à 8 secondes).",
      result: "Lecture ultra-fluide qui absorbe les pics d'affluence sans geler l'image.",
    },
    {
      step: "03",
      icon: Router,
      title: "Bande Wi-Fi 5 GHz ou Câble Ethernet RJ45",
      problem: "La bande Wi-Fi 2.4 GHz souffre d'interférences massives en zone urbaine (murs, voisins, micro-ondes), provoquant du jitter.",
      solution: "Connectez votre équipement en câble réseau RJ45 direct ou sélectionnez expressément le réseau Wi-Fi 5 GHz (canaux 36 à 48).",
      result: "Latence inférieure à 5 ms et zéro perte de paquets sur les flux 4K 50 FPS.",
    },
  ];

  return (
    <section className="py-16 bg-[#040A17] border-t border-[#1A2A4A]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-[#1E7BFF] uppercase tracking-wider">
            EXPERTISE RÉSEAU & ASSISTANCE PRATIQUE
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Guide Anti-Coupure : Comment Éviter le Bridage lors des Soirs de Match
          </h2>
          <p className="mt-3 text-sm text-[#9FB0CC] leading-relaxed">
            Vous constatez des ralentissements ou des coupures récurrentes entre 20h45 et 23h ?
            Voici les 3 réglages techniques éprouvés par nos ingénieurs pour libérer toute la puissance de votre ligne.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tips.map((tip) => {
            const Icon = tip.icon;
            return (
              <div
                key={tip.step}
                className="p-6 sm:p-7 rounded-2xl bg-[#0A1428] border border-[#1A2A4A] flex flex-col justify-between hover:border-[#1E7BFF]/50 transition-all duration-200"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xl font-mono font-extrabold text-[#1E7BFF]">
                      {tip.step}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-[#1E7BFF]/10 border border-[#1E7BFF]/30 flex items-center justify-center text-[#1E7BFF]">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white tracking-tight">
                    {tip.title}
                  </h3>

                  <div className="mt-4 space-y-3 text-xs leading-relaxed">
                    <div className="p-3 rounded-xl bg-[#060E1F] border border-red-500/20 text-red-300">
                      <strong className="block text-white mb-0.5">Symptôme observé :</strong>
                      {tip.problem}
                    </div>

                    <div className="p-3 rounded-xl bg-[#060E1F] border border-[#1E7BFF]/30 text-[#9FB0CC]">
                      <strong className="block text-white mb-0.5">Réglage recommandé :</strong>
                      {tip.solution}
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-[#1A2A4A]/60 flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                  <span>{tip.result}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
