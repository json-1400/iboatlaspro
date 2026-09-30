import Link from "next/link";
import { AlertCircle, ArrowRight } from "lucide-react";

interface ExpiredAlertProps {
  readonly title?: string;
  readonly message?: string;
  readonly ctaText?: string;
  readonly href?: string;
}

export function ExpiredAlert({
  title = "Votre code ou abonnement est expiré ?",
  message = "Évitez les coupures et bénéficiez de notre flux 4K ultra-stable sur serveurs dédiés avec activation immédiate.",
  ctaText = "Commander l'abonnement Atlas Pro 12 mois",
  href = "/abonnement-atlas-pro-12-mois/",
}: ExpiredAlertProps) {
  return (
    <aside
      aria-label="Alerte renouvellement abonnement"
      className="my-8 p-6 rounded-2xl bg-[#0A1428] border-2 border-[#1E7BFF] shadow-[0_0_30px_rgba(30,123,255,0.25)] relative overflow-hidden"
    >
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 relative z-10">
        <div className="flex items-start gap-3.5">
          <div className="w-10 h-10 rounded-full bg-[#1E7BFF]/20 border border-[#1E7BFF] flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-0">
            <AlertCircle className="w-5 h-5 text-[#1E7BFF]" />
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
              {title}
            </h3>
            <p className="text-xs sm:text-sm text-[#9FB0CC] mt-1 max-w-xl leading-relaxed">
              {message}
            </p>
          </div>
        </div>

        <Link
          href={href}
          className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-bold text-white bg-[#1E7BFF] hover:bg-[#2D9CFF] glow-primary transition-all duration-200 flex-shrink-0 w-full sm:w-auto justify-center"
        >
          <span>{ctaText}</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </aside>
  );
}
