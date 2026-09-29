import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/commander/", "/api/"],
      },
    ],
    sitemap: "https://iboatlaspro.com/sitemap.xml",
  };
}
