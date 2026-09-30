/**
 * robots.ts — iboatlaspro.com
 *
 * World-class SEO rules applied:
 * ─────────────────────────────────────────────────────────────────────────────
 * 1. Explicitly block all checkout/thank-you/API routes from all bots.
 *    Prevents crawl budget waste on non-indexable pages.
 *
 * 2. AdsBot (Google Ads quality scorer) must be blocked separately —
 *    it does NOT respect the wildcard `User-agent: *` rule.
 *    If not blocked, it crawls disallowed pages and affects ad quality scores.
 *
 * 3. Sitemap URL is declared absolutely (HTTPS, no trailing ambiguity).
 *
 * 4. No `Crawl-delay` directive — Google ignores it; Bing respects it.
 *    Crawl rate is better managed via Google Search Console.
 * ─────────────────────────────────────────────────────────────────────────────
 */

import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        // All crawlers: allow the full site, block non-indexable paths
        userAgent: "*",
        allow: "/",
        disallow: [
          "/commander/",   // Checkout flow — no SEO value
          "/merci/",       // Post-purchase thank-you — no SEO value
          "/api/",         // API routes — not for indexing
        ],
      },
      {
        // Google Ads bot scores landing page quality separately.
        // Must be listed explicitly — it ignores wildcard rules.
        userAgent: "AdsBot-Google",
        allow: "/",
        disallow: ["/commander/", "/merci/", "/api/"],
      },
    ],
    sitemap: "https://iboatlaspro.com/sitemap.xml",
  };
}
