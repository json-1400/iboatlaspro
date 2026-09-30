export interface SubscriptionPlanFaq {
  readonly question: string;
  readonly answer: string;
}

export interface SubscriptionPlanBenefit {
  readonly title: string;
  readonly desc: string;
  readonly iconName: "tv" | "zap" | "shield" | "users" | "sparkles" | "check";
}

export interface SubscriptionPlanItem {
  readonly slug: string;
  readonly id: string;
  readonly name: string;
  readonly shortTitle: string;
  readonly badgeText?: string;
  readonly isPopular?: boolean;
  readonly targetKeyword: string;
  readonly secondaryKeywords: readonly string[];
  readonly metaTitle: string;
  readonly metaDescription: string;
  readonly duration: string;
  readonly durationMonths: number;
  readonly screens: number;
  readonly price: string;
  readonly priceNumeric: number;
  readonly originalPrice?: string;
  readonly discountPercentage?: string;
  readonly monthlyEquivalent: string;
  readonly ctaCheckoutUrl: string;
  readonly heroTagline: string;
  readonly heroDescription: string;
  readonly features: readonly string[];
  readonly benefits: readonly SubscriptionPlanBenefit[];
  readonly faqs: readonly SubscriptionPlanFaq[];
}

export const SUBSCRIPTION_PLANS_DATA: readonly SubscriptionPlanItem[] = [
  {
    slug: "abonnement-atlas-pro-12-mois",
    id: "plan-12m",
    name: "Abonnement Atlas Pro 12 Mois",
    shortTitle: "12 Mois (Offre Phare)",
    badgeText: "MEILLEUR RAPPORT QUALITÉ-PRIX",
    isPopular: true,
    targetKeyword: "abonnement atlas pro 12 mois",
    secondaryKeywords: [
      "abonnement iptv 12 mois",
      "atlas pro 12 mois",
      "code iptv 12 mois",
      "abonnement iptv 12 mois smart tv",
      "iptv 12 mois pas cher",
      "atlas pro iptv 12 mois",
    ],
    metaTitle: "Abonnement Atlas Pro 12 Mois Officiel : Code IPTV 4K à 39,99 €",
    metaDescription:
      "Abonnement officiel Atlas Pro 12 mois à 39,99 € (soit 3,33 €/mois). +10 000 chaînes 4K/FHD, VOD illimitée, anti-freeze 99.9%. Activation instantanée en 15 min.",
    duration: "12 Mois",
    durationMonths: 12,
    screens: 1,
    price: "39,99 €",
    priceNumeric: 39.99,
    originalPrice: "79,99 €",
    discountPercentage: "-50%",
    monthlyEquivalent: "soit 3,33 €/mois",
    ctaCheckoutUrl: "/commander/?plan=12-mois",
    heroTagline: "Tranquillité totale pendant 1 an avec le meilleur débit 4K",
    heroDescription:
      "Notre formule la plus plébiscitée en France, Belgique et Suisse. Profitez d'une année complète d'accès sans interruption à toutes les chaînes de sport, cinéma et séries au tarif le plus économique.",
    features: [
      "Plus de 10 000 chaînes directes (France, Belgique, Suisse, International)",
      "Bouquet sport complet 4K 50 FPS (Foot, F1, Champions League)",
      "VOD illimitée avec +50 000 films et séries récents en 4K Ultra HD",
      "Technologie Anti-Freeze exclusive et serveurs CDN redondés 99.9%",
      "Guide des programmes EPG dynamique et Replay 7 jours inclus",
      "Compatible Smart TV Samsung, LG, Android TV, Fire Stick, Apple iOS et PC",
      "Livraison prioritaire du code par e-mail et WhatsApp en 15 minutes",
      "Support technique VIP réactif 7j/7 avec garantie de remplacement",
    ],
    benefits: [
      {
        title: "Économie Maximale",
        desc: "Seulement 3,33 € par mois, soit 50% de réduction par rapport à l'engagement trimestriel.",
        iconName: "zap",
      },
      {
        title: "Stabilité Serveurs 99.9%",
        desc: "Infrastructure CDN répartie sur 8 datacenters européens pour zéro coupure en soirée de grand match.",
        iconName: "shield",
      },
      {
        title: "Activation Instantanée",
        desc: "Code d'activation généré et transmis immédiatement après validation sécurisée.",
        iconName: "sparkles",
      },
    ],
    faqs: [
      {
        question: "Quel est le tarif de l'abonnement Atlas Pro 12 mois ?",
        answer:
          "L'abonnement Atlas Pro 12 mois est proposé au prix de 39,99 € pour un an d'accès complet, ce qui équivaut à 3,33 € par mois. Aucun frais caché ni renouvellement automatique involontaire.",
      },
      {
        question: "Comment activer mon abonnement après l'achat ?",
        answer:
          "Dès votre commande validée, vous recevez vos identifiants (Code 12 chiffres, URL de serveur et identifiant Xtream) par e-mail et WhatsApp sous 15 minutes. Il vous suffit de les saisir dans l'application Atlas Pro ONTV ou IBO Player.",
      },
      {
        question: "Puis-je changer d'appareil en cours d'année ?",
        answer:
          "Oui. Bien que l'abonnement 1 écran ne fonctionne que sur un seul appareil à la fois, vous pouvez transférer vos identifiants d'un appareil à l'autre en toute liberté.",
      },
    ],
  },
  {
    slug: "abonnement-atlas-pro-6-mois",
    id: "plan-6m",
    name: "Abonnement Atlas Pro 6 Mois",
    shortTitle: "6 Mois",
    badgeText: "LE CHOIX ÉQUILIBRÉ",
    targetKeyword: "abonnement atlas pro 6 mois",
    secondaryKeywords: [
      "atlas pro 6 mois",
      "abonnement iptv 6 mois",
      "code atlas pro 6 mois",
      "iptv 6 mois pas cher",
    ],
    metaTitle: "Abonnement Atlas Pro 6 Mois : Formule IPTV 4K à 29,99 €",
    metaDescription:
      "Abonnement Atlas Pro 6 mois officiel à 29,99 € (5,00 €/mois). Accès complet à +10 000 chaînes HD/4K, VOD sans coupure. Activation express en 15 min.",
    duration: "6 Mois",
    durationMonths: 6,
    screens: 1,
    price: "29,99 €",
    priceNumeric: 29.99,
    originalPrice: "45,00 €",
    discountPercentage: "-33%",
    monthlyEquivalent: "soit 5,00 €/mois",
    ctaCheckoutUrl: "/commander/?plan=6-mois",
    heroTagline: "Le compromis idéal entre flexibilité et tarif réduit",
    heroDescription:
      "Idéal pour couvrir une demi-saison sportive ou tester le service sur la durée sans engagement annuel. Bénéficiez des mêmes performances techniques que la formule 12 mois.",
    features: [
      "Accès complet aux +10 000 chaînes directes mondiales",
      "Toutes les compétitions sportives en direct 4K / FHD",
      "Catalogue VOD à jour avec nouveautés cinéma hebdomadaires",
      "Serveurs stables avec basculement automatique anti-buffering",
      "Installation facile sur Smart TV, Fire TV, boîtier Android et smartphone",
      "Assistance WhatsApp dédiée 7j/7",
    ],
    benefits: [
      {
        title: "Flexibilité Semestrielle",
        desc: "Idéal pour suivre l'intégralité d'une saison sportive sans engagement à long terme.",
        iconName: "tv",
      },
      {
        title: "Qualité 4K Intégrale",
        desc: "Tous les flux Ultra HD et Dolby Audio inclus sans surcoût.",
        iconName: "sparkles",
      },
      {
        title: "Mise à Niveau Simple",
        desc: "Possibilité de prolonger vers 12 mois à tout moment en conservant votre compte.",
        iconName: "check",
      },
    ],
    faqs: [
      {
        question: "Quelle est la différence entre l'offre 6 mois et 12 mois ?",
        answer:
          "Les deux formules offrent exactement les mêmes chaînes, flux 4K et catalogue VOD. La formule 12 mois est simplement plus avantageuse au prorata mensuel (3,33 €/mois contre 5,00 €/mois).",
      },
      {
        question: "Que se passe-t-il à la fin des 6 mois ?",
        answer:
          "Aucun prélèvement automatique n'est effectué. Vous recevrez un rappel par e-mail et WhatsApp vous invitant à renouveler votre code si vous souhaitez poursuivre.",
      },
    ],
  },
  {
    slug: "abonnement-atlas-pro-3-mois",
    id: "plan-3m",
    name: "Abonnement Atlas Pro 3 Mois",
    shortTitle: "3 Mois",
    badgeText: "DÉCOUVERTE SANS ENGAGEMENT",
    targetKeyword: "abonnement atlas pro 3 mois",
    secondaryKeywords: [
      "atlas pro 3 mois",
      "abonnement iptv 3 mois",
      "code atlas pro 3 mois",
      "tester atlas pro",
    ],
    metaTitle: "Abonnement Atlas Pro 3 Mois : Accès IPTV Sans Engagement à 19,99 €",
    metaDescription:
      "Abonnement Atlas Pro 3 mois officiel à 19,99 € (6,66 €/mois). Toutes les chaînes directes et VOD 4K sans engagement. Activation rapide en 15 min.",
    duration: "3 Mois",
    durationMonths: 3,
    screens: 1,
    price: "19,99 €",
    priceNumeric: 19.99,
    monthlyEquivalent: "soit 6,66 €/mois",
    ctaCheckoutUrl: "/commander/?plan=3-mois",
    heroTagline: "Testez l'excellence de nos serveurs en conditions réelles",
    heroDescription:
      "La formule idéale pour juger par vous-même de la fluidité, du zéro-buffering et de la richesse du bouquet Atlas Pro sur vos appareils avant de passer à l'offre annuelle.",
    features: [
      "Catalogue exhaustif de plus de 10 000 chaînes directes",
      "Tous les grands canaux de sport et chaînes cinéma",
      "VOD intégrale avec Replay disponible",
      "Compatible toutes plateformes (TV, mobile, tablette, PC)",
      "Activation sous 15 minutes garantie",
    ],
    benefits: [
      {
        title: "Zéro Risque",
        desc: "Découvrez notre infrastructure à petit prix sans engagement de reconduction.",
        iconName: "shield",
      },
      {
        title: "Test Pleine Puissance",
        desc: "Accès 100% débridé aux serveurs premium identiques à la formule 12 mois.",
        iconName: "zap",
      },
      {
        title: "Support Inclus",
        desc: "Aide à la configuration pas-à-pas offerte par nos techniciens sur WhatsApp.",
        iconName: "check",
      },
    ],
    faqs: [
      {
        question: "L'offre 3 mois a-t-elle des restrictions de chaînes ?",
        answer:
          "Non. L'offre 3 mois donne accès à 100% du bouquet sans aucune limitation ni chaîne manquante.",
      },
    ],
  },
  {
    slug: "abonnement-atlas-pro-multi-ecrans",
    id: "plan-multi-hub",
    name: "Abonnement Atlas Pro Multi-Écrans (12 Mois)",
    shortTitle: "Multi-Écrans (Hub 12M)",
    badgeText: "SOLUTION MULTIROOM TOUT-EN-UN",
    targetKeyword: "abonnement atlas pro multi ecrans",
    secondaryKeywords: [
      "atlas pro multiroom",
      "iptv 12 mois multi ecrans",
      "atlas pro 2 a 4 ecrans",
      "abonnement iptv famille 12 mois",
    ],
    metaTitle: "Abonnement Atlas Pro Multi-Écrans 12 Mois : Multiroom 2 à 4 TV 4K",
    metaDescription:
      "Abonnement Atlas Pro 12 mois multi-écrans : regardez 2, 3 ou 4 téléviseurs en même temps sans coupure. Flux 4K indépendants pour salon et chambres.",
    duration: "12 Mois",
    durationMonths: 12,
    screens: 2,
    price: "À partir de 59,99 €",
    priceNumeric: 59.99,
    monthlyEquivalent: "soit dès 5,00 €/mois",
    ctaCheckoutUrl: "/commander/?plan=12-mois&devices=2",
    heroTagline: "Toute la famille connectée simultanément sans aucune interférence",
    heroDescription:
      "Fini les conflits pour la télécommande. Chaque membre de la famille regarde son programme favori en direct ou en VOD 4K sur son propre écran, dans le salon, les chambres ou en mobilité.",
    features: [
      "Disponible en versions 2, 3 ou 4 écrans simultanés (12 Mois)",
      "Flux 4K UHD 100% indépendants avec serveurs dédiés",
      "Aucune déconnexion croisée ni blocage de flux",
      "Fonctionne sur la même connexion internet ou adresses IP séparées",
      "Même catalogue complet : 10 000+ chaînes & 50 000+ VOD",
      "Support technique VIP prioritaire pour toute la configuration",
    ],
    benefits: [
      {
        title: "Multiroom Indépendant",
        desc: "Chacun son émission, son match ou son film préféré en simultané.",
        iconName: "users",
      },
      {
        title: "Économie de Groupe",
        desc: "Moins cher que de souscrire plusieurs abonnements individuels séparés.",
        iconName: "zap",
      },
      {
        title: "Compatibilité Mixte",
        desc: "Associez librement une Smart TV Samsung dans le salon et un Fire Stick dans la chambre.",
        iconName: "tv",
      },
    ],
    faqs: [
      {
        question: "Les écrans doivent-ils être dans la même maison ?",
        answer:
          "Non. Vous pouvez utiliser vos connexions sur le réseau de votre maison ou en déplacement via votre smartphone ou tablette 4G/5G.",
      },
    ],
  },
  {
    slug: "abonnement-atlas-pro-2-ecrans",
    id: "plan-2ecrans",
    name: "Abonnement Atlas Pro 2 Écrans (12 Mois)",
    shortTitle: "Pack Duo (2 Écrans - 12M)",
    badgeText: "PACK DUO SALON & CHAMBRE",
    targetKeyword: "abonnement atlas pro 2 ecrans",
    secondaryKeywords: [
      "atlas pro 2 ecrans",
      "iptv 12 mois 2 ecrans",
      "atlas pro pack duo",
      "iptv 2 connexions simultanees",
    ],
    metaTitle: "Abonnement Atlas Pro 2 Écrans 12 Mois : Pack Duo 4K à 59,99 €",
    metaDescription:
      "Abonnement IPTV 12 mois Atlas Pro 2 écrans simultanés à 59,99 € (5,00 €/mois). 2 flux 4K indépendants sans coupure. Activation prioritaire en 15 min.",
    duration: "12 Mois",
    durationMonths: 12,
    screens: 2,
    price: "59,99 €",
    priceNumeric: 59.99,
    originalPrice: "79,98 €",
    discountPercentage: "-25%",
    monthlyEquivalent: "soit 5,00 €/mois (2,50 €/écran)",
    ctaCheckoutUrl: "/commander/?plan=12-mois&devices=2",
    heroTagline: "Deux téléviseurs connectés en simultané en 4K Ultra HD",
    heroDescription:
      "La formule préférée des couples et foyers souhaitant équiper le téléviseur principal du salon et un second écran dans la chambre sans payer deux abonnements complets.",
    features: [
      "Abonnement valable 12 mois pour 2 connexions simultanées",
      "2 flux vidéo 4K/FHD strictement indépendants",
      "Zéro coupure : bande passante allouée doublée sur nos serveurs CDN",
      "Accès intégral aux 10 000+ chaînes mondiales et VOD 4K",
      "Compatible Smart TV Samsung, LG, Fire Stick, Android TV et iOS",
      "Livraison rapide de vos 2 accès sécurisés par e-mail et WhatsApp",
    ],
    benefits: [
      {
        title: "2 Flux Dédiés",
        desc: "Regardez le match dans le salon pendant qu'un film est diffusé dans la chambre.",
        iconName: "tv",
      },
      {
        title: "Tarif Préférentiel",
        desc: "Seulement 20 € de plus que l'offre 1 écran pour une année complète.",
        iconName: "zap",
      },
      {
        title: "Configuration Simple",
        desc: "Deux identifiants clairs ou un code partagé selon votre matériel.",
        iconName: "check",
      },
    ],
    faqs: [
      {
        question: "Comment configurer les 2 appareils avec l'offre Duo ?",
        answer:
          "Vous recevez soit un code compatible 2 flux simultanés, soit deux codes dédiés selon les applications choisies (Atlas Pro ONTV, IBO Player ou IPTV Smarters). Notre support vous accompagne pas-à-pas.",
      },
      {
        question: "Puis-je regarder un match sur l'écran 1 et un film sur l'écran 2 ?",
        answer:
          "Absolument. Les deux flux sont 100% indépendants et n'ont aucune interférence mutuelle.",
      },
    ],
  },
  {
    slug: "abonnement-atlas-pro-3-ecrans",
    id: "plan-3ecrans",
    name: "Abonnement Atlas Pro 3 Écrans (12 Mois)",
    shortTitle: "Pack Famille (3 Écrans - 12M)",
    badgeText: "PACK FAMILLE 3 CONNEXIONS",
    targetKeyword: "abonnement atlas pro 3 ecrans",
    secondaryKeywords: [
      "atlas pro 3 ecrans",
      "iptv 12 mois 3 ecrans",
      "iptv 3 connexions simultanees",
      "abonnement iptv 3 tv 12 mois",
    ],
    metaTitle: "Abonnement Atlas Pro 3 Écrans 12 Mois : Pack Famille à 79,99 €",
    metaDescription:
      "Abonnement officiel Atlas Pro 12 mois 3 écrans à 79,99 € (6,66 €/mois). 3 flux 4K simultanés pour salon et chambres. Activation express en 15 min.",
    duration: "12 Mois",
    durationMonths: 12,
    screens: 3,
    price: "79,99 €",
    priceNumeric: 79.99,
    originalPrice: "119,97 €",
    discountPercentage: "-33%",
    monthlyEquivalent: "soit 6,66 €/mois (2,22 €/écran)",
    ctaCheckoutUrl: "/commander/?plan=12-mois&devices=3",
    heroTagline: "Trois flux 4K simultanés pour répondre aux envies de toute la maison",
    heroDescription:
      "La solution parfaite pour équiper trois téléviseurs ou appareils en simultané : salon, chambre parentale et chambre des enfants, avec accès illimité au sport, cinéma et dessins animés.",
    features: [
      "Abonnement annuel 12 mois pour 3 connexions en simultané",
      "3 flux vidéo indépendants en Ultra HD 4K et Full HD 50 FPS",
      "Aucune interférence ni ralentissement entre les appareils",
      "Accès illimité aux 10 000+ chaînes internationales et VOD complète",
      "Contrôle parental disponible pour les chaînes et contenus adultes",
      "Assistance technique prioritaire 7j/7 sur WhatsApp",
    ],
    benefits: [
      {
        title: "3 Écrans Indépendants",
        desc: "Fini les compromis : sport, séries et programmes jeunesse en même temps.",
        iconName: "users",
      },
      {
        title: "Très Économique",
        desc: "Revient à seulement 2,22 € par mois et par téléviseur équipé.",
        iconName: "zap",
      },
      {
        title: "Stabilité Éprouvée",
        desc: "Serveurs calibrés pour absorber plusieurs flux simultanés sans latence.",
        iconName: "shield",
      },
    ],
    faqs: [
      {
        question: "Quelle vitesse de connexion internet faut-il pour 3 écrans 4K ?",
        answer:
          "Nous recommandons une connexion fibre ou VDSL d'au moins 30 à 50 Mbps pour profiter de trois flux 4K simultanés en toute fluidité.",
      },
    ],
  },
  {
    slug: "abonnement-atlas-pro-4-ecrans",
    id: "plan-4ecrans",
    name: "Abonnement Atlas Pro 4 Écrans (12 Mois)",
    shortTitle: "Pack Maxi (4 Écrans - 12M)",
    badgeText: "PACK MAXI FAMILLE & RÉSIDENCE",
    targetKeyword: "abonnement atlas pro 4 ecrans",
    secondaryKeywords: [
      "atlas pro 4 ecrans",
      "iptv 12 mois 4 ecrans",
      "atlas pro 4 connexions",
      "iptv multiroom 4 ecrans 12 mois",
    ],
    metaTitle: "Abonnement Atlas Pro 4 Écrans 12 Mois : Pack Maxi 4K à 99,99 €",
    metaDescription:
      "Abonnement Atlas Pro 12 mois 4 écrans simultanés à 99,99 € (8,33 €/mois). 4 connexions 4K indépendantes pour toute la résidence. Activation en 15 min.",
    duration: "12 Mois",
    durationMonths: 12,
    screens: 4,
    price: "99,99 €",
    priceNumeric: 99.99,
    originalPrice: "159,96 €",
    discountPercentage: "-37%",
    monthlyEquivalent: "soit 8,33 €/mois (2,08 €/écran)",
    ctaCheckoutUrl: "/commander/?plan=12-mois&devices=4",
    heroTagline: "La puissance maximale pour équiper jusqu'à 4 pièces en simultané",
    heroDescription:
      "L'expérience multiroom ultime pour les grandes familles ou les résidences secondaires. Quatre écrans diffusent simultanément en 4K Ultra HD sans aucune restriction.",
    features: [
      "Abonnement complet 12 mois pour 4 connexions simultanées actives",
      "4 flux vidéo indépendants 4K UHD avec débit prioritaire garanti",
      "Serveurs VIP à bande passante dédiée pour zéro coupure",
      "Plus de 10 000 chaînes directes & 50 000 films et séries VOD",
      "Compatible tous les téléviseurs (Samsung, LG, Sony, Philips, TCL, etc.)",
      "Support WhatsApp VIP avec assistance personnalisée à l'installation",
    ],
    benefits: [
      {
        title: "Multiroom Intégral",
        desc: "Jusqu'à 4 téléviseurs ou mobiles actifs au même instant.",
        iconName: "users",
      },
      {
        title: "Tarif Dégressif Ultime",
        desc: "Seulement 2,08 € par mois par téléviseur connecté.",
        iconName: "sparkles",
      },
      {
        title: "Bande Passante VIP",
        desc: "Routage prioritaire sur notre cluster CDN européen haute capacité.",
        iconName: "shield",
      },
    ],
    faqs: [
      {
        question: "Peut-on utiliser le 4ème écran sur une résidence secondaire ?",
        answer:
          "Oui, les 4 écrans ne sont pas obligés d'être connectés à la même box Internet. Vous pouvez regarder dans votre résidence principale et secondaire en même temps.",
      },
      {
        question: "Y a-t-il une réduction pour le renouvellement après 1 an ?",
        answer:
          "Oui, nos clients fidèles bénéficient d'un tarif préférentiel lors de la reconduction de leur formule 4 écrans.",
      },
    ],
  },
] as const;

export function getAllSubscriptionPlans(): readonly SubscriptionPlanItem[] {
  return SUBSCRIPTION_PLANS_DATA;
}

export function getSubscriptionPlanBySlug(
  slug: string
): SubscriptionPlanItem | undefined {
  return SUBSCRIPTION_PLANS_DATA.find((plan) => plan.slug === slug);
}

export function getAllSubscriptionPlanSlugs(): string[] {
  return SUBSCRIPTION_PLANS_DATA.map((plan) => plan.slug);
}
