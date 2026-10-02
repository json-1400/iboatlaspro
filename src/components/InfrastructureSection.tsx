import Link from "next/link";
import { Server, Zap, ShieldCheck, Activity, Cpu, ArrowRight } from "lucide-react";

export function InfrastructureSection() {
  const specs = [
    {
      icon: Server,
      title: "Cluster CDN 8 Datacenters",
      desc: "Nœuds de diffusion répartis à Paris, Francfort, Amsterdam et Londres pour minimiser la distance physique avec votre box Internet.",
    },
    {
      icon: Zap,
      title: "Bande Passante 10 Gbps",
      desc: "Réseau calibré avec une réserve de débit de 300% pour absorber les pics de trafic lors des soirées de Ligue des Champions et Classico.",
    },
    {
      icon: Cpu,
      title: "Encodage HEVC / H.265",
      desc: "Compression vidéo de pointe réduisant la consommation de bande passante de 40% tout en préservant une netteté 4K 50 FPS chirurgicale.",
    },
    {
      icon: ShieldCheck,
      title: "Technologie Anti-Freeze 2.0",
      desc: "Algorithme d'équilibrage dynamique basculant automatiquement votre flux sur un serveur miroir en moins de 200 millisecondes en cas de micro-coupure.",
    },
  ];

  return (
    <section
      className="py-20 md:py-28 bg-[#060E1F] border-y border-[#1A2A4A] relative overflow-hidden"
      aria-label="Infrastructure technique et stabilité des serveurs"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-bold text-[#1E7BFF] tracking-wider uppercase">
            EXPERTISE TECHNIQUE & E-E-A-T
          </span>
          <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Infrastructure Serveur 99.9% : La Technologie Anti-Freeze Expliquée
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#9FB0CC] leading-relaxed">
            La majorité des pannes IPTV proviennent de serveurs surchargés. Atlas Pro
            utilise une architecture CDN dédiée de niveau opérateur pour garantir une
            stabilité totale sans aucun buffering.
          </p>
        </div>

        {/* Live Performance Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-[#0A1428] border border-[#1A2A4A] rounded-xl p-5 text-center">
            <div className="flex items-center justify-center gap-1.5 text-[#22C55E] text-xs font-bold mb-1">
              <Activity className="w-3.5 h-3.5" />
              <span>DISPONIBILITÉ</span>
            </div>
            <div className="text-2xl sm:text-3xl font-black text-white">99.95%</div>
            <div className="text-[11px] text-[#9FB0CC] mt-0.5">Uptime certifié 2026</div>
          </div>

          <div className="bg-[#0A1428] border border-[#1A2A4A] rounded-xl p-5 text-center">
            <div className="flex items-center justify-center gap-1.5 text-[#1E7BFF] text-xs font-bold mb-1">
              <Zap className="w-3.5 h-3.5" />
              <span>DÉBIT CRÊTE</span>
            </div>
            <div className="text-2xl sm:text-3xl font-black text-white">10 Gbps</div>
            <div className="text-[11px] text-[#9FB0CC] mt-0.5">Par nœud de diffusion</div>
          </div>

          <div className="bg-[#0A1428] border border-[#1A2A4A] rounded-xl p-5 text-center">
            <div className="flex items-center justify-center gap-1.5 text-purple-400 text-xs font-bold mb-1">
              <Server className="w-3.5 h-3.5" />
              <span>DATACENTERS</span>
            </div>
            <div className="text-2xl sm:text-3xl font-black text-white">8 Clusters</div>
            <div className="text-[11px] text-[#9FB0CC] mt-0.5">Europe occidentale</div>
          </div>

          <div className="bg-[#0A1428] border border-[#1A2A4A] rounded-xl p-5 text-center">
            <div className="flex items-center justify-center gap-1.5 text-amber-400 text-xs font-bold mb-1">
              <Cpu className="w-3.5 h-3.5" />
              <span>ZAPPING VIDÉO</span>
            </div>
            <div className="text-2xl sm:text-3xl font-black text-white">&lt; 0.5s</div>
            <div className="text-[11px] text-[#9FB0CC] mt-0.5">Changement de chaîne</div>
          </div>
        </div>

        {/* 4 Architectural Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {specs.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-[#0A1428] border border-[#1A2A4A] hover:border-[#1E7BFF]/50 rounded-2xl p-6 sm:p-8 transition-colors flex gap-5"
              >
                <div className="w-12 h-12 rounded-xl bg-[#1E7BFF]/10 border border-[#1E7BFF]/30 flex items-center justify-center text-[#1E7BFF] flex-shrink-0">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-[#9FB0CC] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Diagnostic Link Bridge */}
        <div className="mt-12 text-center">
          <Link
            href="/centre-d-aide/depannage/atlas-pro-ne-peut-pas-se-connecter-au-serveur/"
            className="inline-flex items-center gap-2 text-xs sm:text-sm text-[#9FB0CC] hover:text-[#1E7BFF] transition-colors"
          >
            <span>Un problème de connexion avec votre fournisseur Internet ? Consultez notre guide de configuration DNS</span>
            <ArrowRight className="w-4 h-4 text-[#1E7BFF]" />
          </Link>
        </div>
      </div>
    </section>
  );
}
