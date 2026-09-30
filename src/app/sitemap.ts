/**
 * sitemap.ts — iboatlaspro.com
 *
 * Dynamic sitemap — lastModified dates are read LIVE from Supabase.
 *
 * How it works:
 * ─────────────────────────────────────────────────────────────────────────────
 * 1. Next.js calls this file at build time (SSG) or on each request (if
 *    `export const dynamic = 'force-dynamic'` is set).
 *
 * 2. `fetchSitemapMetadata()` queries the `page_metadata` Supabase table.
 *    Each row has: path, last_modified, change_freq, priority.
 *
 * 3. When you update a page's content:
 *    → Go to Supabase Dashboard > Table Editor > page_metadata
 *    → Find the row for that path
 *    → Edit any field and Save — the trigger auto-sets `last_modified = now()`
 *    → OR run: UPDATE page_metadata SET notes='updated' WHERE path='/your-path/'
 *    → Redeploy on Netlify → sitemap reflects the accurate lastmod instantly.
 *
 * 4. To add a new page: INSERT a new row into `page_metadata`.
 *    No code change needed.
 *
 * Fallback: if Supabase is unreachable at build time, the sitemap returns
 * an empty array (no 500 error). Add a Netlify build retry if this matters.
 * ─────────────────────────────────────────────────────────────────────────────
 */

import type { MetadataRoute } from "next";
import { fetchSitemapMetadata } from "@/lib/supabase/sitemap";

const BASE_URL = "https://iboatlaspro.com";

// Force dynamic so Next.js re-fetches from Supabase on each Netlify build
// (rather than caching a stale sitemap at build time).
// Remove this line if you want ISR caching at the edge instead.
export const dynamic = "force-dynamic";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const pages = await fetchSitemapMetadata();

  if (pages.length === 0) {
    // Safety net: if DB is down, emit the homepage at minimum
    return [
      {
        url: BASE_URL,
        lastModified: new Date(),
        changeFrequency: "daily",
        priority: 1.0,
      },
    ];
  }

  return pages.map((row) => ({
    url: `${BASE_URL}${row.path}`,
    lastModified: new Date(row.last_modified),
    changeFrequency: row.change_freq,
    priority: Number(row.priority),
  }));
}
