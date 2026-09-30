import type {
  NavLink,
  FeatureItem,
  DeviceItem,
  PricingPlan,
  Testimonial,
  StatItem,
  FaqItem,
  VodItem,
} from "@/types";

export const NAV_LINKS: readonly NavLink[] = [
  { label: "Accueil", href: "#hero" },
  { label: "Chaînes", href: "#devices" },
  { label: "Films & Séries", href: "#pricing" },
  { label: "Sports", href: "#stats" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
] as const;

export const HERO_FEATURES: readonly FeatureItem[] = [
  {
    id: "f1",
    title: "Qualité 4K / FHD",
    subtitle: "Ultra HD",
    iconName: "tv",
  },
  {
    id: "f2",
    title: "Sans Buffer",
    subtitle: "Streaming stable",
    iconName: "buffer",
  },
  {
    id: "f3",
    title: "Activation",
    subtitle: "Instantanée",
    iconName: "zap",
  },
  {
    id: "f4",
    title: "Support 24/7",
    subtitle: "WhatsApp & Telegram",
    iconName: "support",
  },
] as const;

export const COMPATIBLE_DEVICES: readonly DeviceItem[] = [
  { id: "d1", name: "Smart TV", iconType: "smart-tv" },
  { id: "d2", name: "Android TV", iconType: "android" },
  { id: "d3", name: "Fire TV Stick", iconType: "fire-tv" },
  { id: "d4", name: "MAG Box", iconType: "mag-box" },
  { id: "d5", name: "Windows", iconType: "windows" },
  { id: "d6", name: "Mac", iconType: "apple" },
  { id: "d7", name: "Smartphones", iconType: "smartphone" },
  { id: "d8", name: "Tablettes", iconType: "tablet" },
] as const;

export const PRICING_PLANS: readonly PricingPlan[] = [
  {
    id: "plan-3m",
    duration: "3 mois",
    subtitle: "Découverte & flexibilité",
    price: "€ 19,99",
    monthlyEquivalent: "soit € 6,66/mois",
    ctaText: "Commander maintenant",
    features: [
      "Toutes les chaînes directes & VOD",
      "Qualité 4K UHD & FHD sans coupure",
      "Compatible Smart TV, Fire Stick, Box",
      "Support technique 24/7 WhatsApp",
    ],
  },
  {
    id: "plan-6m",
    duration: "6 mois",
    subtitle: "Le choix malin",
    price: "€ 29,99",
    monthlyEquivalent: "soit € 5,00/mois",
    ctaText: "Commander maintenant",
    features: [
      "Toutes les chaînes directes & VOD",
      "Qualité 4K UHD & FHD sans coupure",
      "Compatible Smart TV, Fire Stick, Box",
      "Support technique 24/7 WhatsApp",
    ],
  },
  {
    id: "plan-12m",
    duration: "12 mois",
    subtitle: "Le meilleur rapport qualité-prix",
    price: "€ 39,99",
    monthlyEquivalent: "soit € 3,33/mois",
    isHighlighted: true,
    badgeText: "Offre Phare (Recommandé)",
    ctaText: "Commander maintenant",
    features: [
      "Toutes les chaînes directes & VOD",
      "Qualité 4K UHD & FHD sans coupure",
      "Option Multi-Écrans disponible (+20 €)",
      "Activation prioritaire en 15 minutes",
      "Garantie satisfaction sous 24h",
      "Support technique VIP 24/7",
    ],
  },
] as const;

export const TESTIMONIALS: readonly Testimonial[] = [
  {
    id: "t1",
    name: "Thomas D.",
    location: "Bruxelles",
    rating: 5,
    comment:
      "Service au top ! Qualité incroyable en 4K et zéro buffer. Je recommande à 100% !",
    avatarSrc: "/images/avatars/thomas.jpg",
  },
  {
    id: "t2",
    name: "Sophie L.",
    location: "Liège",
    rating: 5,
    comment:
      "Installation super rapide et support très réactif sur WhatsApp. Meilleur IPTV que j'ai testé !",
    avatarSrc: "/images/avatars/sophie.jpg",
  },
  {
    id: "t3",
    name: "Karim B.",
    location: "Marseille",
    rating: 5,
    comment:
      "Toutes les chaînes que je voulais, films et séries inclus. Vraiment au top !",
    avatarSrc: "/images/avatars/karim.jpg",
  },
] as const;

export const STATS: readonly StatItem[] = [
  {
    id: "s1",
    value: "99.9%",
    label: "Uptime Garantie",
    iconType: "shield",
  },
  {
    id: "s2",
    value: "< 1 sec",
    label: "Temps de connexion",
    iconType: "zap",
  },
  {
    id: "s3",
    value: "+ 10 000",
    label: "Chaînes & VOD",
    iconType: "globe",
  },
  {
    id: "s4",
    value: "24/7",
    label: "Support client",
    iconType: "headset",
  },
] as const;

export const FAQ_ITEMS: readonly FaqItem[] = [
  {
    id: "faq-1",
    question: "Qu'est-ce que l'abonnement Atlas Pro officiel en France ?",
    answer:
      "Atlas Pro est une infrastructure IPTV haut débit permettant d'accéder à plus de 10 000 chaînes directes en 4K/FHD et plus de 50 000 films et séries VOD. Le service officiel garantit des serveurs équilibrés sans coupure, une compatibilité universelle et une activation instantanée par code Xtream ou lien M3U.",
  },
  {
    id: "faq-2",
    question: "Quel est le prix de l'abonnement Atlas Pro 12 mois ?",
    answer:
      "L'abonnement Atlas Pro 12 mois est proposé à 39,99 € (soit seulement 3,33 €/mois). Des formules 3 mois (19,99 €) et 6 mois (29,99 €) sont également disponibles, ainsi que des offres multi-écrans 2, 3 ou 4 écrans simultanés.",
  },
  {
    id: "faq-3",
    question: "Pourquoi Atlas Pro ne peut pas se connecter au serveur et comment résoudre ce problème ?",
    answer:
      "Cette erreur est presque toujours liée au blocage DNS appliqué par certains fournisseurs d'accès Internet (FAI). Pour la résoudre immédiatement : configurez les DNS de votre appareil ou routeur sur 8.8.8.8 (Google) ou 1.1.1.1 (Cloudflare), ou vérifiez la validité de vos identifiants auprès de notre support WhatsApp 24/7.",
  },
  {
    id: "faq-4",
    question: "Comment installer Atlas Pro sur Smart TV, Android Box ou Fire Stick ?",
    answer:
      "Sur Android TV et Fire Stick, téléchargez l'application officielle Atlas Pro ONTV ou Atlas Pro Max via l'application Downloader (Code : 614920). Sur Smart TV Samsung ou LG, installez IBO Player ou IPTV Smarters Pro depuis le store d'applications et saisissez vos codes Xtream reçus par email.",
  },
  {
    id: "faq-5",
    question: "Puis-je utiliser mon abonnement Atlas Pro sur plusieurs écrans en même temps ?",
    answer:
      "L'abonnement standard est mono-écran. Pour regarder simultanément sur plusieurs téléviseurs ou smartphones au sein du même foyer, souscrivez à l'offre Atlas Pro Multi-Écrans (formules 2, 3 ou 4 écrans simultanés sans freeze).",
  },
  {
    id: "faq-6",
    question: "Quelle vitesse de connexion Internet est requise pour le streaming 4K sans coupure ?",
    answer:
      "Une connexion d'au moins 15 à 25 Mbps (Fibre optique, 5G ou très bon VDSL) est recommandée pour profiter pleinement des flux Ultra HD 4K et FHD à 60 FPS avec notre technologie Anti-Freeze 2.0.",
  },
  {
    id: "faq-7",
    question: "Sous quel délai mon abonnement est-il activé ?",
    answer:
      "Dès la validation de votre commande, vos identifiants de connexion (URL de serveur, identifiant, mot de passe et lien M3U) vous sont expédiés en moins de 15 minutes par email et WhatsApp avec un guide complet de démarrage.",
  },
] as const;

export const VOD_CATALOG: readonly VodItem[] = [
  {
    id: "vod-1",
    title: "Apex Velocity",
    category: "Course & Action",
    quality: "4K UHD",
    year: "2025",
    rating: "4.9",
    imageSrc: "/images/vod/vod-apex-velocity-racing-4k.jpg",
  },
  {
    id: "vod-2",
    title: "Cyber Chronicles",
    category: "Science-Fiction",
    quality: "4K UHD",
    year: "2024",
    rating: "4.8",
    imageSrc: "/images/vod/vod-cyber-chronicles-4k.jpg",
  },
  {
    id: "vod-3",
    title: "Final Glory",
    category: "Football & Sport",
    quality: "4K UHD",
    year: "2025",
    rating: "5.0",
    imageSrc: "/images/vod/vod-final-glory-stadium-4k.jpg",
  },
  {
    id: "vod-4",
    title: "Interstellar Echoes",
    category: "Aventure Spatiale",
    quality: "4K UHD",
    year: "2025",
    rating: "4.9",
    imageSrc: "/images/vod/vod-interstellar-echoes-space-4k.jpg",
  },
  {
    id: "vod-5",
    title: "Realm of Ashes",
    category: "Heroic Fantasy",
    quality: "4K UHD",
    year: "2024",
    rating: "4.8",
    imageSrc: "/images/vod/vod-realm-of-ashes-series-4k.jpg",
  },
  {
    id: "vod-6",
    title: "Shadow Protocol",
    category: "Thriller & Espionnage",
    quality: "4K UHD",
    year: "2025",
    rating: "4.9",
    imageSrc: "/images/vod/vod-shadow-protocol-action-4k.jpg",
  },
] as const;

