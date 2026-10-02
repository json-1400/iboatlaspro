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
  { path: "/", changeFrequency: "daily", priority: 1.0 },

  // Applications
  { path: "/applications/", changeFrequency: "weekly", priority: 0.90 },
  { path: "/applications/atlas-pro-ontv/", changeFrequency: "weekly", priority: 0.90 },
  { path: "/applications/atlas-pro-max/", changeFrequency: "weekly", priority: 0.90 },
  { path: "/applications/atlas-pro-ibo/", changeFrequency: "weekly", priority: 0.85 },
  { path: "/applications/iptv-smarters-pro/", changeFrequency: "weekly", priority: 0.80 },

  // Centre d'aide - Hub
  { path: "/centre-d-aide/", changeFrequency: "monthly", priority: 0.80 },

  // Centre d'aide - Dépannage
  { path: "/centre-d-aide/depannage/", changeFrequency: "monthly", priority: 0.85 },
  { path: "/centre-d-aide/depannage/atlas-pro-ne-peut-pas-se-connecter-au-serveur/", changeFrequency: "monthly", priority: 0.90 },
  { path: "/centre-d-aide/depannage/erreur-de-connexion-serveur-iptv/", changeFrequency: "monthly", priority: 0.85 },
  { path: "/centre-d-aide/depannage/atlas-pro-on-tv-erreur-de-lecture/", changeFrequency: "monthly", priority: 0.85 },
  { path: "/centre-d-aide/depannage/retrouver-identifiant-code-atlas-pro-perdu/", changeFrequency: "monthly", priority: 0.85 },
  { path: "/centre-d-aide/depannage/resoudre-ecran-noir-buffering-iptv/", changeFrequency: "monthly", priority: 0.80 },
  { path: "/centre-d-aide/depannage/code-abonnement-atlas-pro-expire/", changeFrequency: "monthly", priority: 0.85 },

  // Centre d'aide - Guides, Tutoriels & Installation
  { path: "/centre-d-aide/guides/", changeFrequency: "monthly", priority: 0.80 },
  { path: "/centre-d-aide/guides/comment-installer-atlas-pro-sur-fire-tv-stick/", changeFrequency: "monthly", priority: 0.85 },
  { path: "/centre-d-aide/guides/installer-atlas-pro-box-android-google-tv/", changeFrequency: "monthly", priority: 0.80 },
  { path: "/centre-d-aide/guides/comment-configurer-ibo-player-pro/", changeFrequency: "monthly", priority: 0.80 },
  { path: "/centre-d-aide/guides/comment-configurer-iptv-smarters-pro/", changeFrequency: "monthly", priority: 0.80 },
  { path: "/centre-d-aide/guides/abonnement-iptv-legal-ou-illegal-en-france/", changeFrequency: "monthly", priority: 0.75 },
  { path: "/centre-d-aide/guides/comparatif-meilleure-box-tv-pour-iptv/", changeFrequency: "monthly", priority: 0.75 },

  // Legal
  { path: "/conditions-utilisation/", changeFrequency: "yearly", priority: 0.30 },
  { path: "/confidentialite/", changeFrequency: "yearly", priority: 0.30 },
  { path: "/politique-remboursement/", changeFrequency: "yearly", priority: 0.30 },
];

// Stable content revision date for static catalog & guides (ensures search engines respect lastmod)
const STATIC_CONTENT_REVISION_DATE = new Date("2026-03-31T00:00:00.000Z");

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const dbPages = await fetchSitemapMetadata();
  const subscriptionPlans = getAllSubscriptionPlans();

  // Dynamic subscription plan URLs
  const planUrls: MetadataRoute.Sitemap = subscriptionPlans.map((plan) => ({
    url: `${BASE_URL}/${plan.slug}/`,
    lastModified: STATIC_CONTENT_REVISION_DATE,
    changeFrequency: "weekly",
    priority: plan.isPopular ? 0.95 : 0.90,
  }));

  // Build the complete fallback list from static routes + dynamic plans
  const fallbackUrls: MetadataRoute.Sitemap = [
    ...STATIC_ROUTES.map((route) => ({
      url: `${BASE_URL}${route.path}`,
      lastModified: STATIC_CONTENT_REVISION_DATE,
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
