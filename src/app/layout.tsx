import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://iboatlaspro.com"),
  title: "iboatlaspro - Abonnement IPTV Premium 4K / FHD Sans Coupure",
  description:
    "Profitez de milliers de chaînes TV, films et séries en direct en qualité 4K / FHD sans coupure. Activation instantanée, compatible tous appareils, support client 24/7.",
  alternates: {
    canonical: "https://iboatlaspro.com",
    languages: {
      "fr-FR": "https://iboatlaspro.com",
      "en-US": "https://iboatlaspro.com/en",
      "x-default": "https://iboatlaspro.com",
    },
  },
  openGraph: {
    title: "iboatlaspro - Abonnement IPTV Premium 4K / FHD",
    description:
      "Votre monde de divertissement sans limites. Accédez à toutes vos chaînes et films préférés en 4K.",
    url: "https://iboatlaspro.com",
    siteName: "iboatlaspro",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "iboatlaspro - IPTV Premium 4K / FHD",
    description:
      "Abonnement IPTV stable sans coupure, compatible avec Smart TV, Android, Apple, PC.",
  },
};

const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://iboatlaspro.com/#organization",
      name: "iboatlaspro",
      url: "https://iboatlaspro.com",
      logo: "https://iboatlaspro.com/images/hero-devices.jpg",
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        availableLanguage: ["French", "English"],
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://iboatlaspro.com/#website",
      url: "https://iboatlaspro.com",
      name: "iboatlaspro",
      publisher: {
        "@id": "https://iboatlaspro.com/#organization",
      },
    },
    {
      "@type": "Product",
      "@id": "https://iboatlaspro.com/#product",
      name: "Abonnement IPTV Premium iboatlaspro",
      description:
        "Accès à plus de 10 000 chaînes de télévision et films en 4K / FHD sans coupure.",
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "EUR",
        lowPrice: "19.99",
        highPrice: "79.99",
        offerCount: "3",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        reviewCount: "2348",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
        />
      </head>
      <body className="min-h-screen bg-[#040A17] text-white font-sans antialiased selection:bg-[#1E7BFF] selection:text-white">
        {children}
      </body>
    </html>
  );
}
