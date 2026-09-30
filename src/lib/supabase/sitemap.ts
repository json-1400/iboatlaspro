import { createClient } from "@supabase/supabase-js";

export interface PageMetadataRow {
  path: string;
  last_modified: string; // ISO 8601 timestamptz from Postgres
  change_freq:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
  priority: number;
}

/**
 * Fetches all page metadata rows from Supabase for sitemap generation.
 *
 * Uses the anon key (public read policy) — no sensitive data is exposed.
 * Falls back to an empty array if the DB is unreachable, so the sitemap
 * never hard-crashes at build/request time.
 */
export async function fetchSitemapMetadata(): Promise<PageMetadataRow[]> {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  // Graceful fallback: if env vars are missing (e.g. local dev without .env.local)
  if (!url || !key) {
    console.warn("[sitemap] Supabase env vars missing — returning empty sitemap.");
    return [];
  }

  const supabase = createClient(url, key, {
    auth: { persistSession: false, autoRefreshToken: false },
  });

  const { data, error } = await supabase
    .from("page_metadata")
    .select("path, last_modified, change_freq, priority")
    .order("priority", { ascending: false });

  if (error) {
    console.error("[sitemap] Supabase query error:", error.message);
    return [];
  }

  return (data ?? []) as PageMetadataRow[];
}
