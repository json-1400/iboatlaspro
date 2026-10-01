import { Wifi, Gauge, Cpu, Volume2, ShieldCheck } from "lucide-react";

export function NetworkSpecsSection() {
  const specs = [
    {
      icon: Gauge,
      title: "Débits Internet Recommandés",
      details: [
        { label: "Qualité Full HD 1080p (50 FPS)", value: "12 à 15 Mbps stables" },
        { label: "Qualité Ultra HD 4K (HEVC HDR)", value: "25 à 30 Mbps minimum" },
        { label: "Type de connexion idéal", value: "Fibre optique, Câble ou 5G fixe" },
        { label: "Latence réseau (Jitter)", value: "< 5 ms recommandé (Ethernet RJ45)" },
      ],
    },
    {
      icon: Cpu,
      title: "Codecs Vidéo & Compression",
      details: [
        { label: "Norme principale 4K", value: "H.265 / HEVC (Main 10 Profile)" },
        { label: "Norme standard HD", value: "H.264 / AVC (High Profile)" },
        { label: "Fréquence d'images native", value: "50 FPS (sport) & 24 FPS (cinéma)" },
        { label: "Conteneurs multimédias", value: "TS (Transport Stream) & MP4 / MKV" },
      ],
    },
    {
      icon: Volume2,
      title: "Pistes Audio & Immersion",
      details: [
        { label: "Format Surround cinéma", value: "Dolby Digital Plus (E-AC3 5.1)" },
        { label: "Format broadcast standard", value: "AAC Stéréo Haute Définition" },
        { label: "Multi-langues & Sous-titres", value: "Pistes audio FR/EN + EPG dynamique" },
        { label: "Synchronisation lèvres (Lip-Sync)", value: "Passthrough HDMI pris en charge" },
      ],
    },
    {
      icon: Wifi,
      title: "Protocoles & Compatibilité Réseau",
      details: [
        { label: "API de connexion", value: "Xtream Codes API (v2 / v3 sécurisée)" },
        { label: "Format de playlist", value: "Lien M3U8 / HLS avec token chiffré" },
        { label: "Bande Wi-Fi recommandée", value: "5 GHz (Canaux 36 à 48 sans interférence)" },
        { label: "Résolution DNS conseillée", value: "Cloudflare 1.1.1.1 ou Google 8.8.8.8" },
      ],
    },
  ];

  return (
    <section className="py-16 bg-[#060D1E] border-t border-[#1A2A4A]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-[#1E7BFF] uppercase tracking-wider">
            ARCHITECTURE TECHNIQUE & PERFORMANCES
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Spécifications Réseau, Codecs et Débits Requis
          </h2>
          <p className="mt-3 text-sm text-[#9FB0CC] leading-relaxed">
            Pour garantir une lecture fluide sans aucun buffering ni gel d&apos;image lors des grands événements sportifs,
            notre infrastructure s&apos;appuie sur des paramètres stricts de diffusion 50 FPS.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {specs.map((spec) => {
            const Icon = spec.icon;
            return (
              <div
                key={spec.title}
                className="p-6 rounded-2xl bg-[#0A1428] border border-[#1A2A4A] space-y-4 hover:border-[#1E7BFF]/40 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#1E7BFF]/10 border border-[#1E7BFF]/30 flex items-center justify-center text-[#1E7BFF]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white">{spec.title}</h3>
                </div>

                <div className="divide-y divide-[#1A2A4A]/60 pt-1">
                  {spec.details.map((item) => (
                    <div
                      key={item.label}
                      className="py-2.5 flex items-center justify-between gap-4 text-xs"
                    >
                      <span className="text-[#9FB0CC]">{item.label}</span>
                      <span className="font-semibold text-white font-mono text-right">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Conseil Pro d'ingénieur réseau */}
        <div className="mt-8 p-4 sm:p-5 rounded-2xl bg-[#060E1F] border border-[#1E7BFF]/40 flex items-start gap-3.5 text-xs sm:text-sm text-[#9FB0CC]">
          <ShieldCheck className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
          <p>
            <strong className="text-white">Conseil de nos techniciens :</strong> Si vous constatez des micro-coupures aux heures de pointe (20h-23h), reliez votre Smart TV ou boîtier par un câble Ethernet RJ45 direct ou basculez votre Wi-Fi sur la bande 5 GHz. Cela élimine 95 % des pertes de paquets causées par les interférences d&apos;appartement.
          </p>
        </div>
      </div>
    </section>
  );
}
