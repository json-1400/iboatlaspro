import type { Metadata } from "next";

export const SITE_URL = "https://iboatlaspro.com";
export const SITE_NAME = "iboatlaspro";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/images/hero-devices.jpg`;

export interface PageMetadataParams {
  readonly title: string;
  readonly description: string;
  readonly path: string;
  readonly noIndex?: boolean;
}

/**
 * Standardized SEO metadata factory ensuring canonical URLs,
 * OpenGraph, Twitter Cards, and language alternates.
 */
export function constructMetadata({
  title,
  description,
  path,
  noIndex = false,
}: PageMetadataParams): Metadata {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  const canonicalUrl = `${SITE_URL}${cleanPath}`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        "fr-FR": canonicalUrl,
        "x-default": canonicalUrl,
      },
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: SITE_NAME,
      locale: "fr_FR",
      type: "website",
      images: [
        {
          url: DEFAULT_OG_IMAGE,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [DEFAULT_OG_IMAGE],
    },
    robots: noIndex
      ? {
          index: false,
          follow: true,
        }
      : {
          index: true,
          follow: true,
        },
  };
}

export const buildMetadata = constructMetadata;

