import { NextResponse } from "next/server";
import { getAllSubscriptionPlans } from "@/data/subscription-plans";

export const dynamic = "force-dynamic";

const INDEXNOW_KEY = "e4b2d8f9c1a34b2e8d7f6a5c3b1e9d2f";
const HOST = "iboatlaspro.com";
const BASE_URL = `https://${HOST}`;
const KEY_LOCATION = `${BASE_URL}/${INDEXNOW_KEY}.txt`;

// Fallback core routes to ping if no specific URLs provided
const CORE_CANONICAL_PATHS: readonly string[] = [
  "",
  "/applications/",
  "/applications/atlas-pro-max/",
  "/applications/atlas-pro-ontv/",
  "/applications/atlas-pro-ibo/",
  "/applications/iptv-smarters-pro/",
  "/centre-d-aide/",
  "/centre-d-aide/depannage/",
  "/centre-d-aide/depannage/atlas-pro-ne-peut-pas-se-connecter-au-serveur/",
  "/centre-d-aide/depannage/erreur-de-connexion-serveur-iptv/",
  "/centre-d-aide/depannage/atlas-pro-on-tv-erreur-de-lecture/",
  "/centre-d-aide/depannage/retrouver-identifiant-code-atlas-pro-perdu/",
  "/centre-d-aide/depannage/resoudre-ecran-noir-buffering-iptv/",
  "/centre-d-aide/depannage/code-abonnement-atlas-pro-expire/",
  "/centre-d-aide/guides/",
  "/centre-d-aide/guides/comment-installer-atlas-pro-sur-fire-tv-stick/",
  "/centre-d-aide/guides/installer-atlas-pro-box-android-google-tv/",
  "/centre-d-aide/guides/comment-configurer-ibo-player-pro/",
  "/centre-d-aide/guides/comment-configurer-iptv-smarters-pro/",
  "/centre-d-aide/guides/abonnement-iptv-legal-ou-illegal-en-france/",
  "/centre-d-aide/guides/comparatif-meilleure-box-tv-pour-iptv/",
  "/conditions-utilisation/",
  "/confidentialite/",
  "/politique-remboursement/",
];

function getAllCanonicalUrls(): string[] {
  const plans = getAllSubscriptionPlans();
  const planUrls = plans.map((p) => `${BASE_URL}/${p.slug}/`);
  const staticUrls = CORE_CANONICAL_PATHS.map((p) => `${BASE_URL}${p}`);
  return [...staticUrls, ...planUrls];
}

export async function POST(request: Request): Promise<NextResponse> {
  try {
    const authHeader = request.headers.get("authorization");
    const secret = process.env.CRON_SECRET;

    // If a CRON_SECRET is configured, enforce authorization
    if (secret && authHeader !== `Bearer ${secret}`) {
      return NextResponse.json(
        { error: "Unauthorized access to IndexNow ping" },
        { status: 401 }
      );
    }

    let targetUrls: string[] = [];
    try {
      const body = await request.json() as { urls?: unknown };
      if (Array.isArray(body.urls) && body.urls.every((u): u is string => typeof u === "string")) {
        targetUrls = body.urls;
      }
    } catch {
      // If empty body or not JSON, fallback to all canonical URLs
      targetUrls = getAllCanonicalUrls();
    }

    if (targetUrls.length === 0) {
      targetUrls = getAllCanonicalUrls();
    }

    const payload = {
      host: HOST,
      key: INDEXNOW_KEY,
      keyLocation: KEY_LOCATION,
      urlList: targetUrls,
    };

    const response = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok && response.status !== 202 && response.status !== 200) {
      const errorText = await response.text();
      return NextResponse.json(
        {
          success: false,
          status: response.status,
          message: "IndexNow API error",
          details: errorText,
        },
        { status: 502 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "IndexNow ping submitted successfully",
      submittedCount: targetUrls.length,
      urls: targetUrls,
    });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      { success: false, error: errorMessage },
      { status: 500 }
    );
  }
}
