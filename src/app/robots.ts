import type { MetadataRoute } from "next";

/**
 * robots.ts — iboatlaspro.com
 *
 * World-class SEO rules applied:
 * 1. Crawl budget preservation: Block checkout, thank-you, private API routes.
 * 2. AdsBot-Google explicitly declared (does not follow wildcard rules).
 * 3. AI Scraping / Content Harvester blocking: Block bots that consume bandwidth
 *    and scrape catalog without providing search referral traffic.
 * 4. Absolute HTTPS sitemap reference.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        // Standard Search Crawlers (Googlebot, Bingbot, etc.)
        userAgent: "*",
        allow: "/",
        disallow: [
          "/commander/", // Checkout flow
          "/merci/",     // Post-purchase order confirmation
          "/api/",       // Server API routes
        ],
      },
      {
        // Google Ads Landing Page Quality Evaluator
        userAgent: "AdsBot-Google",
        allow: "/",
        disallow: ["/commander/", "/merci/", "/api/"],
      },
      {
        // AI Content Scrapers & Bandwidth Harvesters (Preserve Server Resources)
        userAgent: [
          "GPTBot",
          "ChatGPT-User",
          "CCBot",
          "Bytespider",
          "ClaudeBot",
          "anthropic-ai",
          "PerplexityBot",
          "Amazonbot",
        ],
        disallow: ["/"],
      },
    ],
    sitemap: "https://iboatlaspro.com/sitemap.xml",
  };
}
