import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/abonnement-atlas-pro/1-mois",
        destination: "/abonnement-atlas-pro/12-mois/",
        permanent: true,
      },
      {
        source: "/abonnement-atlas-pro/1-mois/",
        destination: "/abonnement-atlas-pro/12-mois/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
