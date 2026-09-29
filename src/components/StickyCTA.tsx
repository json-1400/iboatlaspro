import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";

interface StickyCTAProps {
  readonly title?: string;
  readonly buttonText?: string;
  readonly href?: string;
}

export function StickyCTA({
  title = "Accès IPTV instantané en 15 minutes",
  buttonText = "Commander mon code",
  href = "/abonnement-atlas-pro/12-mois/",
}: StickyCTAProps) {
  return (
    <aside
      aria-label="Action rapide d'abonnement"
      className="fixed bottom-4 left-4 right-4 md:left-auto md:right-8 md:bottom-8 z-40"
    >
      <div className="bg-[#0A1428]/95 backdrop-blur-md border border-[#1E7BFF]/60 rounded-full px-5 py-3 shadow-[0_0_30px_rgba(30,123,255,0.35)] flex items-center justify-between gap-4">
        <div className="hidden sm:flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-[#22C55E] flex-shrink-0" />
          <span className="text-xs sm:text-sm font-semibold text-white truncate">
            {title}
          </span>
        </div>

        <Link
          href={href}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2 rounded-full text-xs sm:text-sm font-bold text-white bg-[#1E7BFF] hover:bg-[#2D9CFF] glow-primary transition-all duration-200"
        >
          <span>{buttonText}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </aside>
  );
}
