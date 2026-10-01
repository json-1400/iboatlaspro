import type { MetadataRoute } from "next";
import { fetchSitemapMetadata } from "@/lib/supabase/sitemap";
import { getAllSubscriptionPlans } from "@/data/subscription-plans";

const BASE_URL = "https://iboatlaspro.com";

export const dynamic = "force-dynamic";

interface StaticRouteDef {
  path: string;
  changeFrequency: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority: number;
}

const STATIC_ROUTES: readonly StaticRouteDef[] = [
  // Homepage
  { path: "", changeFrequency: "daily", priority: 1.0 },

  // Applications
  { path: "/applications/", changeFrequency: "weekly", priority: 0.90 },
  { path: "/applications/atlas-pro-ontv/", changeFrequency: "weekly", priority: 0.90 },
  { path: "/applications/atlas-pro-max/", changeFrequency: "weekly", priority: 0.90 },
  { path: "/applications/atlas-pro-ibo/", changeFrequency: "weekly", priority: 0.85 },
  { path: "/applications/iptv-smarters-pro/", changeFrequency: "weekly", priority: 0.80 },

  // Chaînes & VOD
  { path: "/chaines/", changeFrequency: "weekly", priority: 0.85 },
  { path: "/chaines/sports/", changeFrequency: "weekly", priority: 0.85 },
  { path: "/chaines/francaises/", changeFrequency: "weekly", priority: 0.80 },
  { path: "/chaines/internationales/", changeFrequency: "weekly", priority: 0.75 },

  // Centre d'aide - Hub
  { path: "/centre-d-aide/", changeFrequency: "monthly", priority: 0.80 },

  // Centre d'aide - Installation
  { path: "/centre-d-aide/installation/", changeFrequency: "monthly", priority: 0.80 },
  { path: "/centre-d-aide/installation/smart-tv/", changeFrequency: "monthly", priority: 0.85 },
  { path: "/centre-d-aide/installation/fire-tv-stick/", changeFrequency: "monthly", priority: 0.85 },
  { path: "/centre-d-aide/installation/android-tv/", changeFrequency: "monthly", priority: 0.80 },
  { path: "/centre-d-aide/installation/iphone-ios/", changeFrequency: "monthly", priority: 0.80 },
  { path: "/centre-d-aide/installation/pc-windows/", changeFrequency: "monthly", priority: 0.80 },
  { path: "/centre-d-aide/installation/chromecast/", changeFrequency: "monthly", priority: 0.80 },
  { path: "/centre-d-aide/installation/mag-box/", changeFrequency: "monthly", priority: 0.75 },

  // Centre d'aide - Dépannage
  { path: "/centre-d-aide/depannage/", changeFrequency: "monthly", priority: 0.85 },
  { path: "/centre-d-aide/depannage/ne-peut-pas-se-connecter-au-serveur/", changeFrequency: "monthly", priority: 0.90 },
  { path: "/centre-d-aide/depannage/erreur-connexion-serveur/", changeFrequency: "monthly", priority: 0.85 },
  { path: "/centre-d-aide/depannage/erreur-de-lecture/", changeFrequency: "monthly", priority: 0.85 },
  { path: "/centre-d-aide/depannage/identifiant-perdu/", changeFrequency: "monthly", priority: 0.85 },
  { path: "/centre-d-aide/depannage/ecran-noir-buffering/", changeFrequency: "monthly", priority: 0.80 },
  { path: "/centre-d-aide/depannage/code-expire/", changeFrequency: "monthly", priority: 0.85 },

  // Centre d'aide - Tutoriels & Guides
  { path: "/centre-d-aide/tutoriels/", changeFrequency: "monthly", priority: 0.75 },
  { path: "/centre-d-aide/tutoriels/configurer-ibo-player/", changeFrequency: "monthly", priority: 0.75 },
  { path: "/centre-d-aide/tutoriels/configurer-iptv-smarters/", changeFrequency: "monthly", priority: 0.75 },
  { path: "/centre-d-aide/guides/", changeFrequency: "monthly", priority: 0.70 },
  { path: "/centre-d-aide/guides/iptv-legal-ou-illegal/", changeFrequency: "monthly", priority: 0.75 },
  { path: "/centre-d-aide/guides/comparatif-box-streaming/", changeFrequency: "monthly", priority: 0.70 },

  // Legal
  { path: "/conditions-utilisation/", changeFrequency: "yearly", priority: 0.30 },
  { path: "/confidentialite/", changeFrequency: "yearly", priority: 0.30 },
  { path: "/politique-remboursement/", changeFrequency: "yearly", priority: 0.30 },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const dbPages = await fetchSitemapMetadata();
  const subscriptionPlans = getAllSubscriptionPlans();

  // Dynamic subscription plan URLs
  const planUrls: MetadataRoute.Sitemap = subscriptionPlans.map((plan) => ({
    url: `${BASE_URL}/${plan.slug}/`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: plan.isPopular ? 0.95 : 0.90,
  }));

  // Build the complete fallback list from static routes + dynamic plans
  const fallbackUrls: MetadataRoute.Sitemap = [
    ...STATIC_ROUTES.map((route) => ({
      url: `${BASE_URL}${route.path}`,
      lastModified: new Date(),
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
    ...planUrls,
  ];

  if (dbPages.length === 0) {
    return fallbackUrls;
  }

  // When Supabase has rows, merge with fallback ensuring no duplicates
  const dbPaths = new Set(dbPages.map((p) => p.path));
  const sitemapFromDb: MetadataRoute.Sitemap = dbPages.map((row) => ({
    url: `${BASE_URL}${row.path}`,
    lastModified: new Date(row.last_modified),
    changeFrequency: row.change_freq,
    priority: Number(row.priority),
  }));

  const extraToAppend = fallbackUrls.filter(
    (item) => !dbPaths.has(item.url.replace(BASE_URL, ""))
  );

  return [...sitemapFromDb, ...extraToAppend];
}
