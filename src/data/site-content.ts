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
    id: "plan-1m",
    duration: "1 mois",
    subtitle: "Accès complet",
    price: "€ 9,99",
    ctaText: "Commander maintenant",
    features: [
      "Toutes les chaînes TV",
      "Films & Séries à la demande",
      "Qualité 4K / FHD",
      "Support 24/7",
    ],
  },
  {
    id: "plan-3m",
    duration: "3 mois",
    subtitle: "Plus de divertissement",
    price: "€ 19,99",
    monthlyEquivalent: "soit € 6,66/mois",
    ctaText: "Commander maintenant",
    features: [
      "Toutes les chaînes TV",
      "Films & Séries à la demande",
      "Qualité 4K / FHD",
      "Support 24/7",
    ],
  },
  {
    id: "plan-6m",
    duration: "6 mois",
    subtitle: "Le choix malin",
    price: "€ 29,99",
    monthlyEquivalent: "soit € 5,00/mois",
    isHighlighted: true,
    badgeText: "Meilleure offre",
    ctaText: "Commander maintenant",
    features: [
      "Toutes les chaînes TV",
      "Films & Séries à la demande",
      "Qualité 4K / FHD",
      "Support 24/7",
    ],
  },
  {
    id: "plan-12m",
    duration: "12 mois",
    subtitle: "Le meilleur rapport qualité-prix",
    price: "€ 49,99",
    monthlyEquivalent: "soit € 4,16/mois",
    ctaText: "Commander maintenant",
    features: [
      "Toutes les chaînes TV",
      "Films & Séries à la demande",
      "Qualité 4K / FHD",
      "Support 24/7",
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
    question: "Comment fonctionne l'IPTV ?",
    answer:
      "L'IPTV (Télévision sur Protocole Internet) permet de diffuser des chaînes de télévision et des contenus vidéo à la demande directement via votre connexion Internet haut débit, sans parabole ni décodeur traditionnel.",
  },
  {
    id: "faq-2",
    question: "Sur quels appareils puis-je l'utiliser ?",
    answer:
      "Notre service est compatible avec les Smart TV (Samsung, LG, Sony), boîtiers Android, Fire TV Stick, récepteurs MAG, smartphones et tablettes (iOS et Android), ainsi que les ordinateurs Windows et Mac.",
  },
  {
    id: "faq-3",
    question: "Est-ce que c'est légal ?",
    answer:
      "L'utilisation de la technologie IPTV et des lecteurs de flux est tout à fait légale. Nous assurons la mise à disposition technique et une assistance dédiée 24/7 pour configurer vos applications préférées.",
  },
  {
    id: "faq-4",
    question: "Proposez-vous un essai gratuit ?",
    answer:
      "Oui, nous mettons à votre disposition une période de test pour vérifier la compatibilité avec votre matériel et constater la fluidité de nos flux en 4K / Full HD avant tout abonnement.",
  },
  {
    id: "faq-5",
    question: "Comment obtenir de l'aide ?",
    answer:
      "Notre équipe de support technique est joignable 24 heures sur 24 et 7 jours sur 7 directement par WhatsApp et Telegram pour vous assister dans l'installation ou répondre à toute question.",
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

