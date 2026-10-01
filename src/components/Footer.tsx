import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Logo } from "@/components/Logo";

export function Footer() {
  return (
    <footer className="bg-[#040A17] border-t border-[#1A2A4A] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Top Header Row: Brand Logo & Social Icons */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-10 border-b border-[#1A2A4A]/60">
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <Logo />
            <span className="hidden sm:inline text-xs text-[#9FB0CC] border-l border-[#1A2A4A] pl-4">
              La référence du streaming IPTV 4K / FHD sans coupure
            </span>
          </div>

          <div className="flex items-center gap-2.5">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-8 h-8 rounded-full bg-[#0A1428] border border-[#1A2A4A] flex items-center justify-center text-[#9FB0CC] hover:text-white hover:border-[#1E7BFF] transition-colors"
            >
              <FaFacebookF className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X Twitter"
              className="w-8 h-8 rounded-full bg-[#0A1428] border border-[#1A2A4A] flex items-center justify-center text-[#9FB0CC] hover:text-white hover:border-[#1E7BFF] transition-colors"
            >
              <FaXTwitter className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-8 h-8 rounded-full bg-[#0A1428] border border-[#1A2A4A] flex items-center justify-center text-[#9FB0CC] hover:text-white hover:border-[#1E7BFF] transition-colors"
            >
              <FaInstagram className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="w-8 h-8 rounded-full bg-[#0A1428] border border-[#1A2A4A] flex items-center justify-center text-[#9FB0CC] hover:text-white hover:border-[#1E7BFF] transition-colors"
            >
              <FaYoutube className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="w-8 h-8 rounded-full bg-[#0A1428] border border-[#1A2A4A] flex items-center justify-center text-[#9FB0CC] hover:text-white hover:border-[#1E7BFF] transition-colors"
            >
              <FaTiktok className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* 4 Semantic Silo Columns for High-Authority Internal Linking */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Column 1: Formules & Abonnements */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider">
              Abonnements IPTV
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link
                  href="/abonnement-atlas-pro-12-mois/"
                  className="text-white font-semibold hover:text-[#1E7BFF] transition-colors"
                >
                  Abonnement Atlas Pro 12 Mois (39,99 €)
                </Link>
              </li>
              <li>
                <Link
                  href="/#abonnement"
                  className="text-[#9FB0CC] hover:text-white transition-colors"
                >
                  Grille Tarifaire Complète
                </Link>
              </li>
              <li>
                <Link
                  href="/abonnement-atlas-pro-6-mois/"
                  className="text-[#9FB0CC] hover:text-white transition-colors"
                >
                  Abonnement Atlas Pro 6 Mois
                </Link>
              </li>
              <li>
                <Link
                  href="/abonnement-atlas-pro-3-mois/"
                  className="text-[#9FB0CC] hover:text-white transition-colors"
                >
                  Abonnement Atlas Pro 3 Mois
                </Link>
              </li>
              <li>
                <Link
                  href="/abonnement-atlas-pro-multi-ecrans/"
                  className="text-[#22C55E] font-medium hover:underline flex items-center gap-1"
                >
                  <span>Abonnement IPTV Multi-Écrans (12 Mois)</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/abonnement-atlas-pro-2-ecrans/"
                  className="text-[#9FB0CC] hover:text-white transition-colors"
                >
                  Pack Duo (2 Écrans - 12 Mois)
                </Link>
              </li>
              <li>
                <Link
                  href="/abonnement-atlas-pro-3-ecrans/"
                  className="text-[#9FB0CC] hover:text-white transition-colors"
                >
                  Pack Famille (3 Écrans - 12 Mois)
                </Link>
              </li>
              <li>
                <Link
                  href="/abonnement-atlas-pro-4-ecrans/"
                  className="text-[#9FB0CC] hover:text-white transition-colors"
                >
                  Pack Maxi (4 Écrans - 12 Mois)
                </Link>
              </li>
              <li>
                <Link
                  href="/commander/"
                  className="text-[#1E7BFF] font-semibold hover:underline"
                >
                  Commander en Ligne
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Chaînes & Applications */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider">
              Chaînes & Téléchargements
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link
                  href="/chaines/sports/"
                  className="text-[#9FB0CC] hover:text-white transition-colors"
                >
                  Chaînes Sport 4K 50FPS
                </Link>
              </li>
              <li>
                <Link
                  href="/chaines/francaises/"
                  className="text-[#9FB0CC] hover:text-white transition-colors"
                >
                  Chaînes TV Françaises & TNT
                </Link>
              </li>
              <li>
                <Link
                  href="/chaines/internationales/"
                  className="text-[#9FB0CC] hover:text-white transition-colors"
                >
                  Chaînes Internationales (+50 pays)
                </Link>
              </li>
              <li>
                <Link
                  href="/chaines/"
                  className="text-[#9FB0CC] hover:text-white transition-colors"
                >
                  Catalogue Complet (+10 000 chaînes)
                </Link>
              </li>
              <li>
                <Link
                  href="/applications/atlas-pro-ontv/"
                  className="text-[#9FB0CC] hover:text-white transition-colors"
                >
                  Guide Atlas Pro ONTV (Code 782914)
                </Link>
              </li>
              <li>
                <Link
                  href="/applications/atlas-pro-ibo/"
                  className="text-[#9FB0CC] hover:text-white transition-colors"
                >
                  Guide Atlas Pro IBO (Code 492015)
                </Link>
              </li>
              <li>
                <Link
                  href="/applications/iptv-smarters-pro/"
                  className="text-[#9FB0CC] hover:text-white transition-colors"
                >
                  Guide IPTV Smarters Pro (Code 820147)
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Centre d'Aide & Dépannage */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider">
              Assistance & Dépannage
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link
                  href="/centre-d-aide/"
                  className="text-[#9FB0CC] hover:text-white transition-colors"
                >
                  Centre d&apos;Aide & Support 24/7
                </Link>
              </li>
              <li>
                <Link
                  href="/centre-d-aide/installation/smart-tv/"
                  className="text-[#9FB0CC] hover:text-white transition-colors"
                >
                  Installation Smart TV Samsung & LG
                </Link>
              </li>
              <li>
                <Link
                  href="/centre-d-aide/installation/fire-tv-stick/"
                  className="text-[#9FB0CC] hover:text-white transition-colors"
                >
                  Installation Amazon Fire TV Stick
                </Link>
              </li>
              <li>
                <Link
                  href="/centre-d-aide/depannage/erreur-connexion-serveur/"
                  className="text-[#9FB0CC] hover:text-white transition-colors"
                >
                  Erreur Connexion Serveur IPTV
                </Link>
              </li>
              <li>
                <Link
                  href="/centre-d-aide/depannage/ecran-noir-buffering/"
                  className="text-[#9FB0CC] hover:text-white transition-colors"
                >
                  Supprimer le Buffering IPTV
                </Link>
              </li>
              <li>
                <Link
                  href="/centre-d-aide/depannage/code-expire/"
                  className="text-[#22C55E] font-semibold hover:underline"
                >
                  Code ou Abonnement Expiré
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Légal, Confiance & Paiement */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider">
              Confiance & Légal
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link
                  href="/conditions-utilisation/"
                  className="text-[#9FB0CC] hover:text-white transition-colors"
                >
                  Conditions d&apos;utilisation
                </Link>
              </li>
              <li>
                <Link
                  href="/confidentialite/"
                  className="text-[#9FB0CC] hover:text-white transition-colors"
                >
                  Politique de confidentialité
                </Link>
              </li>
              <li>
                <Link
                  href="/politique-remboursement/"
                  className="text-[#9FB0CC] hover:text-white transition-colors"
                >
                  Politique de remboursement
                </Link>
              </li>
            </ul>

            <div className="pt-2">
              <span className="text-[10px] font-semibold text-[#9FB0CC] uppercase tracking-wider block mb-2">
                Paiement Sécurisé SSL
              </span>
              <div className="flex items-center gap-2">
                <div className="h-6 w-10 rounded bg-[#0A1428] border border-[#1A2A4A] flex items-center justify-center px-1">
                  <span className="text-[10px] font-extrabold italic text-[#2563EB] tracking-tighter">
                    VISA
                  </span>
                </div>
                <div className="h-6 w-10 rounded bg-[#0A1428] border border-[#1A2A4A] flex items-center justify-center">
                  <div className="flex items-center -space-x-1.5">
                    <div className="w-3 h-3 rounded-full bg-[#EB001B] opacity-90" />
                    <div className="w-3 h-3 rounded-full bg-[#F79E1B] opacity-90" />
                  </div>
                </div>
                <div className="h-6 w-10 rounded bg-[#0A1428] border border-[#1A2A4A] flex items-center justify-center px-1">
                  <span className="text-[9px] font-bold text-[#22C55E]">CB</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Line */}
        <div className="pt-8 border-t border-[#1A2A4A]/50 text-center">
          <p className="text-xs text-[#9FB0CC]/80">
            © 2025 iboatlaspro.com. Tous droits réservés. L&apos;ensemble des
            marques citées sont la propriété de leurs détenteurs respectifs.
          </p>
        </div>
      </div>
    </footer>
  );
}
