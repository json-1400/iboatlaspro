import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export interface BreadcrumbItem {
  readonly label: string;
  readonly href: string;
}

interface BreadcrumbsProps {
  readonly items: readonly BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Accueil",
        item: "https://iboatlaspro.com",
      },
      ...items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 2,
        name: item.label,
        item: `https://iboatlaspro.com${item.href}`,
      })),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav
        aria-label="Fil d'Ariane"
        className="flex items-center space-x-2 text-xs sm:text-sm text-[#9FB0CC] py-4 overflow-x-auto no-scrollbar"
      >
        <Link
          href="/"
          className="flex items-center gap-1.5 hover:text-white transition-colors"
          aria-label="Retour à l'accueil"
        >
          <Home className="w-3.5 h-3.5 text-[#1E7BFF]" />
          <span>Accueil</span>
        </Link>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <div key={item.href} className="flex items-center space-x-2">
              <ChevronRight className="w-3.5 h-3.5 text-[#1A2A4A] flex-shrink-0" />
              {isLast ? (
                <span className="text-white font-medium truncate" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="hover:text-white transition-colors truncate"
                >
                  {item.label}
                </Link>
              )}
            </div>
          );
        })}
      </nav>
    </>
  );
}
