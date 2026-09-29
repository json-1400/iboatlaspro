import Image from "next/image";
import { ShieldCheck, Zap, Globe, Headphones } from "lucide-react";
import { STATS } from "@/data/site-content";

export function StatsBand() {
  const renderStatIcon = (type: string) => {
    switch (type) {
      case "shield":
        return <ShieldCheck className="w-6 h-6 text-[#1E7BFF]" />;
      case "zap":
        return <Zap className="w-6 h-6 text-[#1E7BFF]" />;
      case "globe":
        return <Globe className="w-6 h-6 text-[#1E7BFF]" />;
      case "headset":
        return <Headphones className="w-6 h-6 text-[#1E7BFF]" />;
      default:
        return <Zap className="w-6 h-6 text-[#1E7BFF]" />;
    }
  };

  return (
    <section className="py-12 bg-[#040A17] relative" aria-label="Statistiques de performance">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl overflow-hidden border border-[#1A2A4A] bg-[#0A1428]/80 shadow-2xl">
          {/* Server Room Background Image with dark overlay */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <Image
              src="/images/server-room.jpg"
              alt="Infrastructure de serveurs haute disponibilité pour streaming ultra-rapide"
              fill
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="object-cover object-center filter blur-[2px] opacity-25 scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#040A17]/95 via-[#060E1F]/90 to-[#040A17]/95" />
          </div>

          {/* 4 Stats Grid with Vertical Dividers */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#1A2A4A] py-8 sm:py-10">
            {STATS.map((stat) => (
              <div
                key={stat.id}
                className="flex items-center justify-center gap-4 px-6 py-4 sm:py-2 text-center sm:text-left"
              >
                {/* Circular Outline Icon */}
                <div className="w-12 h-12 rounded-full border border-[#1E7BFF]/50 bg-[#1E7BFF]/10 flex items-center justify-center flex-shrink-0 shadow-[0_0_15px_rgba(30,123,255,0.2)]">
                  {renderStatIcon(stat.iconType)}
                </div>

                {/* Number & Label */}
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-[#9FB0CC] font-medium mt-0.5">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
