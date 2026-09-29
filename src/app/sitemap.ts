import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://iboatlaspro.com";
  const now = new Date();

  const routes = [
    "",
    "/abonnement-atlas-pro/",
    "/abonnement-atlas-pro/1-mois/",
    "/abonnement-atlas-pro/12-mois/",
    "/abonnement-atlas-pro/essai-gratuit/",
    "/abonnement-ibo-player/",
    "/abonnement-ibo-player/activation/",
    "/abonnement-ibo-player/1-an/",
    "/abonnement-ibo-player/samsung-lg/",
    "/abonnement-ibo-player/gratuit/",
    "/abonnement-ibo-player/playlist/",
    "/abonnement-iptv-smarters-pro/",
    "/abonnement-iptv-smarters-pro/1-an/",
    "/abonnement-iptv-smarters-pro/prix/",
    "/applications/",
    "/applications/atlas-pro-ontv/",
    "/applications/atlas-pro-ibo/",
    "/applications/iptv-smarters-pro/",
    "/chaines/",
    "/chaines/sports/",
    "/chaines/francaises/",
    "/chaines/internationales/",
    "/centre-d-aide/",
    "/centre-d-aide/installation/",
    "/centre-d-aide/installation/smart-tv/",
    "/centre-d-aide/installation/fire-tv-stick/",
    "/centre-d-aide/installation/android-tv/",
    "/centre-d-aide/installation/mag-box/",
    "/centre-d-aide/depannage/",
    "/centre-d-aide/depannage/erreur-connexion-serveur/",
    "/centre-d-aide/depannage/ecran-noir-buffering/",
    "/centre-d-aide/depannage/code-expire/",
    "/centre-d-aide/tutoriels/",
    "/centre-d-aide/tutoriels/configurer-ibo-player/",
    "/centre-d-aide/tutoriels/configurer-iptv-smarters/",
    "/centre-d-aide/guides/",
    "/centre-d-aide/guides/iptv-legal-ou-illegal/",
    "/centre-d-aide/guides/comparatif-box-streaming/",
    "/avis-clients/",
    "/cgv/",
    "/mentions-legales/",
    "/confidentialite/",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : route.includes("12-mois") ? 0.9 : 0.8,
  }));
}
