import Image from "next/image";
import { Star, Play } from "lucide-react";
import type { VodItem } from "@/types";

interface VodCardProps {
  readonly item: VodItem;
}

export function VodCard({ item }: VodCardProps) {
  return (
    <article className="flex-shrink-0 w-52 sm:w-64 rounded-xl overflow-hidden bg-[#0A1428] border border-[#1A2A4A] group hover:border-[#1E7BFF] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(30,123,255,0.3)] relative">
      {/* Poster Image (2:3 aspect ratio) */}
      <div className="relative aspect-[2/3] w-full overflow-hidden bg-[#060E1F]">
        <Image
          src={item.imageSrc}
          alt={`Affiche officielle du film ${item.title}`}
          fill
          sizes="(max-width: 640px) 208px, 256px"
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />

        {/* Subtle dark gradient scrim */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#0A1428] via-[#0A1428]/25 to-black/40"
          aria-hidden="true"
        />

        {/* Top Badges: Quality and Rating */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
          <span className="px-2 py-0.5 rounded text-[10px] font-extrabold text-white bg-[#1E7BFF] shadow-[0_0_10px_rgba(30,123,255,0.4)]">
            {item.quality}
          </span>
          <div className="flex items-center gap-1 px-2 py-0.5 rounded bg-black/60 backdrop-blur-sm border border-white/10 text-[#FFB800] text-xs font-bold">
            <Star className="w-3 h-3 fill-current" />
            <span className="text-white text-[11px]">{item.rating}</span>
          </div>
        </div>

        {/* Hover Play Button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
          <div className="w-12 h-12 rounded-full bg-[#1E7BFF] text-white flex items-center justify-center shadow-[0_0_20px_rgba(30,123,255,0.6)] transform scale-90 group-hover:scale-100 transition-transform">
            <Play className="w-5 h-5 fill-current translate-x-0.5" />
          </div>
        </div>

        {/* Bottom Details Scrim */}
        <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
          <div className="text-[11px] font-semibold text-[#1E7BFF] uppercase tracking-wider">
            {item.category} • {item.year}
          </div>
          <h3 className="text-base font-bold text-white mt-1 leading-snug line-clamp-1 group-hover:text-[#1E7BFF] transition-colors">
            {item.title}
          </h3>
        </div>
      </div>
    </article>
  );
}
