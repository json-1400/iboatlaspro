// CLIENT: interactive post-purchase confirmation view
"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import {
  CheckCircle2,
  Clock,
  Download,
  ShieldCheck,
  Tv,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { PLAN_CONFIGS, PlanDuration } from "@/lib/subscriptions";

export function MerciClientContent() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("orderId") || "CMD-EN-COURS";
  const planSlug = (searchParams.get("plan") || "12-mois") as PlanDuration;
  const devices = searchParams.get("devices") || "1";

  const plan = PLAN_CONFIGS[planSlug] || PLAN_CONFIGS["12-mois"];
  const whatsappUrl =
    process.env.NEXT_PUBLIC_WHATSAPP_URL || "https://wa.me/212715214002";

  const contactWhatsappMessage = encodeURIComponent(
    `Bonjour, je viens de passer la commande #${orderId} pour l'offre ${plan.name} (${devices} écran(s)). Pouvez-vous activer mon accès ?`
  );

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      {/* Success Badge & Headline */}
      <div className="text-center space-y-4">
        <div className="mx-auto w-20 h-20 rounded-full bg-[#22C55E]/10 border-2 border-[#22C55E] flex items-center justify-center shadow-[0_0_35px_rgba(34,197,94,0.3)]">
          <CheckCircle2 className="w-10 h-10 text-[#22C55E]" />
        </div>

        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0A1428] border border-[#1E7BFF]/40 text-xs font-semibold text-[#1E7BFF]">
          <span>Numéro de commande :</span>
          <span className="font-mono font-bold text-white">{orderId}</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          Merci pour votre commande !
        </h1>

        <p className="text-sm sm:text-base text-[#9FB0CC] max-w-xl mx-auto">
          Votre demande d&apos;abonnement a été transmise à notre équipe technique.
          Vos accès et votre configuration personnalisée sont en cours de génération.
        </p>
      </div>

      {/* Order Summary Card */}
      <div className="mt-10 p-6 sm:p-8 rounded-2xl bg-[#0A1428] border border-[#1A2A4A] shadow-2xl">
        <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-[#22C55E]" />
          <span>Récapitulatif de votre commande</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pb-6 border-b border-[#1A2A4A] text-sm">
          <div className="p-4 rounded-xl bg-[#060E1F] border border-[#1A2A4A]">
            <div className="text-xs text-[#9FB0CC]">Formule choisie</div>
            <div className="text-base font-bold text-white mt-1">{plan.name}</div>
          </div>
          <div className="p-4 rounded-xl bg-[#060E1F] border border-[#1A2A4A]">
            <div className="text-xs text-[#9FB0CC]">Connexions simultanées</div>
            <div className="text-base font-bold text-[#22C55E] mt-1">
              {devices} {Number(devices) > 1 ? "Écrans" : "Écran"}
            </div>
          </div>
          <div className="p-4 rounded-xl bg-[#060E1F] border border-[#1A2A4A]">
            <div className="text-xs text-[#9FB0CC]">Délai moyen d&apos;activation</div>
            <div className="text-base font-bold text-[#1E7BFF] mt-1 flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              <span>Moins de 15 minutes</span>
            </div>
          </div>
        </div>

        {/* 3-Step Live Timeline */}
        <div className="mt-6 pt-2">
          <h3 className="text-sm font-semibold text-white mb-4">
            Étapes de mise en service :
          </h3>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-[#22C55E]/20 border border-[#22C55E] flex items-center justify-center flex-shrink-0 mt-0.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#22C55E]" />
              </div>
              <div>
                <div className="text-sm font-bold text-white">
                  Étape 1 : Commande enregistrée
                </div>
                <div className="text-xs text-[#9FB0CC]">
                  Votre requête #{orderId} est priorisée dans la file de configuration.
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-[#1E7BFF]/20 border border-[#1E7BFF] flex items-center justify-center flex-shrink-0 mt-0.5 animate-pulse">
                <div className="w-2 h-2 rounded-full bg-[#1E7BFF]" />
              </div>
              <div>
                <div className="text-sm font-bold text-[#1E7BFF]">
                  Étape 2 : Préparation de vos accès (En cours)
                </div>
                <div className="text-xs text-[#9FB0CC]">
                  Nos techniciens vérifient la compatibilité du serveur avec votre appareil.
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-[#1A2A4A] border border-[#1A2A4A] flex items-center justify-center flex-shrink-0 mt-0.5">
                <div className="w-2 h-2 rounded-full bg-[#9FB0CC]" />
              </div>
              <div>
                <div className="text-sm font-medium text-[#9FB0CC]">
                  Étape 3 : Réception & Assistance
                </div>
                <div className="text-xs text-[#9FB0CC]/70">
                  Notification par WhatsApp ou e-mail dès que le flux est actif.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Urgent activation button via WhatsApp */}
        <div className="mt-8 pt-6 border-t border-[#1A2A4A] text-center">
          <p className="text-xs text-[#9FB0CC] mb-3">
            Vous souhaitez accélérer votre activation ou transmettre une adresse MAC ?
          </p>
          <a
            href={`${whatsappUrl}?text=${contactWhatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full text-sm font-bold text-white bg-[#22C55E] hover:bg-[#1fa951] shadow-[0_0_25px_rgba(34,197,94,0.3)] transition-all"
          >
            <FaWhatsapp className="w-5 h-5" />
            <span>Ouvrir WhatsApp avec le support technique</span>
            <ExternalLink className="w-4 h-4 opacity-75" />
          </a>
        </div>
      </div>

      {/* Useful Next Steps / Applications Downloads */}
      <div className="mt-12">
        <h2 className="text-lg font-bold text-white mb-4 text-center">
          En attendant l&apos;activation, préparez votre équipement avec nos guides
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link
            href="/applications/atlas-pro-ontv/"
            className="p-5 rounded-xl bg-[#0A1428] border border-[#1A2A4A] hover:border-[#1E7BFF] transition-all group flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 text-[#1E7BFF] font-bold text-sm mb-1">
                <Download className="w-4 h-4" />
                <span>Atlas Pro ONTV</span>
              </div>
              <p className="text-xs text-[#9FB0CC]">
                L&apos;application optimisée pour Android TV, Fire Stick et Box.
              </p>
            </div>
            <div className="mt-4 text-xs font-semibold text-white group-hover:text-[#1E7BFF] flex items-center gap-1">
              <span>Voir le guide</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </Link>

          <Link
            href="/centre-d-aide/guides/comment-configurer-ibo-player-pro/"
            className="p-5 rounded-xl bg-[#0A1428] border border-[#1A2A4A] hover:border-[#1E7BFF] transition-all group flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 text-[#22C55E] font-bold text-sm mb-1">
                <Tv className="w-4 h-4" />
                <span>IBO Player Pro</span>
              </div>
              <p className="text-xs text-[#9FB0CC]">
                Tutoriel de configuration rapide pour téléviseurs Samsung et LG.
              </p>
            </div>
            <div className="mt-4 text-xs font-semibold text-white group-hover:text-[#22C55E] flex items-center gap-1">
              <span>Lire le tutoriel</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </Link>

          <Link
            href="/centre-d-aide/guides/comment-installer-atlas-pro-sur-fire-tv-stick/"
            className="p-5 rounded-xl bg-[#0A1428] border border-[#1A2A4A] hover:border-[#1E7BFF] transition-all group flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 text-[#FFB800] font-bold text-sm mb-1">
                <Download className="w-4 h-4" />
                <span>Fire TV Stick 4K</span>
              </div>
              <p className="text-xs text-[#9FB0CC]">
                Guide d&apos;installation via le code Downloader en 3 minutes.
              </p>
            </div>
            <div className="mt-4 text-xs font-semibold text-white group-hover:text-[#FFB800] flex items-center gap-1">
              <span>Voir le guide</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
