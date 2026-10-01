// CLIENT: interactive desktop dropdowns and mobile drawer navigation
"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import {
  ChevronDown,
  Menu,
  X,
  Globe,
  Tv,
  Smartphone,
  ShieldCheck,
  HelpCircle,
  Download,
  Star,
  Zap,
  Film,
  Trophy,
  Wrench,
  AlertCircle,
  BookOpen,
  Users,
} from "lucide-react";
import { Logo } from "@/components/Logo";

interface NavDropdownItem {
  readonly title: string;
  readonly desc: string;
  readonly href: string;
  readonly icon: React.ComponentType<{ className?: string }>;
  readonly badge?: string;
}

interface NavSection {
  readonly label: string;
  readonly href?: string;
  readonly items?: readonly NavDropdownItem[];
}

const NAV_MENU: readonly NavSection[] = [
  {
    label: "Abonnement",
    href: "/#abonnement",
  },
  {
    label: "Multi-Écrans",
    href: "/abonnement-atlas-pro-multi-ecrans/",
  },
  {
    label: "Chaînes & VOD",
    items: [
      {
        title: "Catalogue Complet",
        desc: "Plus de 10 000 chaînes directes & replay",
        href: "/chaines/",
        icon: Tv,
      },
      {
        title: "Chaînes Sport 4K",
        desc: "Multi-flux direct 50 FPS & compétitions majeures",
        href: "/chaines/sports/",
        icon: Trophy,
      },
      {
        title: "Chaînes Françaises",
        desc: "TNT & bouquets cinéma en ultra HD",
        href: "/chaines/francaises/",
        icon: Tv,
      },
      {
        title: "Chaînes Internationales",
        desc: "+50 pays : Belgique, Suisse, Maghreb, UK, USA",
        href: "/chaines/internationales/",
        icon: Globe,
      },
      {
        title: "VOD Films & Séries",
        desc: "+50 000 titres récents en 4K UHD",
        href: "/#vod",
        icon: Film,
      },
    ],
  },
  {
    label: "Applications",
    items: [
      {
        title: "Toutes les Applications",
        desc: "Guides d'installation et codes Downloader",
        href: "/applications/",
        icon: Download,
      },
      {
        title: "Atlas Pro ONTV",
        desc: "Code Downloader Fire Stick : 782914",
        href: "/applications/atlas-pro-ontv/",
        icon: Zap,
      },
      {
        title: "Atlas Pro IBO Player",
        desc: "Code Downloader : 492015",
        href: "/applications/atlas-pro-ibo/",
        icon: Tv,
      },
      {
        title: "IPTV Smarters Pro",
        desc: "Code Downloader : 820147",
        href: "/applications/iptv-smarters-pro/",
        icon: Smartphone,
      },
    ],
  },
  {
    label: "Centre d'Aide",
    items: [
      {
        title: "Centre d'Aide Hub",
        desc: "Recherche en direct & support WhatsApp",
        href: "/centre-d-aide/",
        icon: HelpCircle,
      },
      {
        title: "Guides d'Installation",
        desc: "Smart TV, Fire Stick, Android TV & MAG",
        href: "/centre-d-aide/installation/",
        icon: Wrench,
      },
      {
        title: "Dépannage & Erreurs",
        desc: "Solutions serveur, buffering et code expiré",
        href: "/centre-d-aide/depannage/",
        icon: AlertCircle,
      },
      {
        title: "Tutoriels Applications",
        desc: "Configuration IBO Player & Smarters",
        href: "/centre-d-aide/tutoriels/",
        icon: BookOpen,
      },
    ],
  },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpandedSection, setMobileExpandedSection] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 180);
  };

  const handleDropdownToggle = (label: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setActiveDropdown((prev) => (prev === label ? null : label));
  };

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
          timeoutRef.current = null;
        }
        setActiveDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-[#040A17]/90 border-b border-[#1A2A4A]/60 transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Left: Brand Logo */}
        <div className="flex-shrink-0">
          <Logo />
        </div>

        {/* Center: Optimized Compact Capsule Navigation with Dropdowns */}
        <nav
          ref={navRef}
          className="hidden lg:flex items-center gap-2 bg-[#0B1528]/85 border border-[#1A2A4A] rounded-full px-4 py-2 shadow-inner"
          aria-label="Navigation principale"
        >
          {NAV_MENU.map((section) => {
            const hasItems = Boolean(section.items && section.items.length > 0);
            const isOpen = activeDropdown === section.label;

            if (!hasItems && section.href) {
              return (
                <Link
                  key={section.label}
                  href={section.href}
                  className="text-xs font-semibold text-[#9FB0CC] hover:text-white px-3.5 py-1.5 rounded-full transition-colors hover:bg-white/5"
                >
                  {section.label}
                </Link>
              );
            }

            return (
              <div
                key={section.label}
                className="relative"
                onMouseEnter={() => handleMouseEnter(section.label)}
                onMouseLeave={handleMouseLeave}
              >
                {section.href ? (
                  <Link
                    href={section.href}
                    className={`flex items-center gap-1.5 text-xs font-semibold px-3.5 py-1.5 rounded-full transition-colors ${
                      isOpen
                        ? "text-white bg-[#1E7BFF]/20"
                        : "text-[#9FB0CC] hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <span>{section.label}</span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-[#1E7BFF]" : "text-[#9FB0CC]"
                      }`}
                    />
                  </Link>
                ) : (
                  <button
                    type="button"
                    onClick={() => handleDropdownToggle(section.label)}
                    className={`flex items-center gap-1.5 text-xs font-semibold px-3.5 py-1.5 rounded-full transition-colors ${
                      isOpen
                        ? "text-white bg-[#1E7BFF]/20"
                        : "text-[#9FB0CC] hover:text-white hover:bg-white/5"
                    }`}
                    aria-expanded={isOpen}
                    aria-haspopup="true"
                  >
                    <span>{section.label}</span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-[#1E7BFF]" : "text-[#9FB0CC]"
                      }`}
                    />
                  </button>
                )}

                {/* Dropdown Popover */}
                {isOpen && section.items && (
                  <div
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-80 z-50"
                    onMouseEnter={() => handleMouseEnter(section.label)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="bg-[#0A1428]/95 backdrop-blur-xl border border-[#1A2A4A] rounded-2xl p-2.5 shadow-2xl space-y-1">
                      {section.items.map((item) => {
                        const IconComp = item.icon;
                        return (
                          <Link
                            key={item.title}
                            href={item.href}
                            onClick={() => {
                              if (timeoutRef.current) {
                                clearTimeout(timeoutRef.current);
                                timeoutRef.current = null;
                              }
                              setActiveDropdown(null);
                            }}
                            className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/5 transition-colors group"
                          >
                            <div className="w-8 h-8 rounded-lg bg-[#1E7BFF]/10 text-[#1E7BFF] flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-[#1E7BFF] group-hover:text-white transition-colors">
                              <IconComp className="w-4 h-4" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between">
                                <span className="text-xs font-bold text-white group-hover:text-[#1E7BFF] transition-colors truncate">
                                  {item.title}
                                </span>
                                {item.badge && (
                                  <span className="text-[9px] font-bold text-[#22C55E] bg-[#22C55E]/10 px-1.5 py-0.5 rounded ml-2">
                                    {item.badge}
                                  </span>
                                )}
                              </div>
                              <p className="text-[11px] text-[#9FB0CC] leading-tight line-clamp-1 mt-0.5">
                                {item.desc}
                              </p>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Right: Pill CTA Button */}
        <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
          <Link
            href="/abonnement-atlas-pro-12-mois/"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-xs font-bold text-white bg-[#1E7BFF] hover:bg-[#2D9CFF] glow-primary transition-all duration-200 active:scale-[0.98]"
          >
            Commander maintenant
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex lg:hidden items-center gap-3">
          <Link
            href="/commander/"
            className="px-3.5 py-1.5 text-xs font-bold text-white bg-[#1E7BFF] rounded-full"
          >
            Commander
          </Link>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="p-2 rounded-lg text-[#9FB0CC] hover:text-white hover:bg-[#0A1428] border border-[#1A2A4A]"
            aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation with Accordion Sections */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-[#1A2A4A] bg-[#060E1F]/98 backdrop-blur-xl px-4 pt-3 pb-6 space-y-3 max-h-[80vh] overflow-y-auto">
          <nav className="flex flex-col space-y-1">
            {NAV_MENU.map((section) => {
              const hasItems = Boolean(section.items && section.items.length > 0);
              const isExpanded = mobileExpandedSection === section.label;

              if (!hasItems && section.href) {
                return (
                  <Link
                    key={section.label}
                    href={section.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-3 py-2.5 rounded-lg text-sm font-semibold text-white hover:bg-white/5"
                  >
                    {section.label}
                  </Link>
                );
              }

              return (
                <div key={section.label} className="border-b border-[#1A2A4A]/50 pb-1">
                  <button
                    type="button"
                    onClick={() =>
                      setMobileExpandedSection(
                        isExpanded ? null : section.label
                      )
                    }
                    className="w-full flex items-center justify-between px-3 py-2.5 text-sm font-semibold text-white hover:bg-white/5 rounded-lg"
                  >
                    <span>{section.label}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#9FB0CC] transition-transform ${
                        isExpanded ? "rotate-180 text-[#1E7BFF]" : ""
                      }`}
                    />
                  </button>

                  {isExpanded && section.items && (
                    <div className="pl-3 pr-1 py-1 space-y-1">
                      {section.items.map((item) => (
                        <Link
                          key={item.title}
                          href={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium text-[#9FB0CC] hover:text-white hover:bg-white/5"
                        >
                          <span>{item.title}</span>
                          {item.badge && (
                            <span className="text-[9px] font-bold text-[#22C55E]">
                              {item.badge}
                            </span>
                          )}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          <div className="pt-3 border-t border-[#1A2A4A] flex items-center justify-center">
            <Link
              href="/abonnement-atlas-pro-12-mois/"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 text-xs font-bold text-white bg-[#1E7BFF] hover:bg-[#2D9CFF] rounded-full"
            >
              Commander maintenant
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
