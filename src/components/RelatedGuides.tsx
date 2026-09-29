import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";

export interface RelatedGuideItem {
  title: string;
  href: string;
  description: string;
  badge?: string;
}

interface RelatedGuidesProps {
  title?: string;
  subtitle?: string;
  guides: RelatedGuideItem[];
}

export function RelatedGuides({
  title = "Guides & Tutoriels Associés",
  subtitle = "Consultez les autres guides de cette section pour approfondir vos connaissances ou résoudre vos questions techniques.",
  guides,
}: RelatedGuidesProps) {
  if (!guides || guides.length === 0) return null;

  return (
    <section className="mt-16 pt-12 border-t border-[#1A2A4A]/60">
      <div className="flex items-center gap-2.5 mb-2">
        <div className="w-8 h-8 rounded-lg bg-[#1E7BFF]/10 border border-[#1E7BFF]/20 flex items-center justify-center text-[#1E7BFF]">
          <BookOpen className="w-4 h-4" />
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
          {title}
        </h2>
      </div>
      <p className="text-sm text-[#9FB0CC] mb-8 max-w-2xl">{subtitle}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {guides.map((guide) => (
          <Link
            key={guide.href}
            href={guide.href}
            className="group relative flex flex-col justify-between p-5 rounded-xl bg-[#0A1428]/60 border border-[#1A2A4A] hover:border-[#1E7BFF]/50 hover:bg-[#0A1428] transition-all duration-200"
          >
            <div>
              {guide.badge && (
                <span className="inline-block text-[11px] font-semibold tracking-wider uppercase text-[#1E7BFF] bg-[#1E7BFF]/10 border border-[#1E7BFF]/20 px-2 py-0.5 rounded-full mb-3">
                  {guide.badge}
                </span>
              )}
              <h3 className="text-base font-semibold text-white group-hover:text-[#1E7BFF] transition-colors mb-2">
                {guide.title}
              </h3>
              <p className="text-xs text-[#9FB0CC] line-clamp-3 leading-relaxed mb-4">
                {guide.description}
              </p>
            </div>

            <div className="flex items-center gap-1.5 text-xs font-medium text-[#1E7BFF] pt-2 border-t border-[#1A2A4A]/40 group-hover:translate-x-0.5 transition-transform">
              <span>Lire le guide</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
