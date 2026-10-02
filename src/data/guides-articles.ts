export interface GuideStep {
  stepNumber: number;
  title: string;
  desc: string;
  tip?: string;
}

export interface GuideArticle {
  slug: string;
  title: string;
  category: "installation" | "tutoriel" | "dossier";
  categoryLabel: string;
  badge: string;
  readingTime: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  intro: string;
  targetDevice?: string;
  steps?: GuideStep[];
  sections?: {
    title: string;
    content: string;
    points?: string[];
  }[];
  verdict?: string;
  faq?: {
    question: string;
    answer: string;
  }[];
  relatedSlugs: string[];
}

export const GUIDES_ARTICLES: readonly GuideArticle[] = [
  {
    slug: "abonnement-iptv-legal-ou-illegal-en-france",
    title: "Abonnement IPTV : Est-ce Légal ou Illégal en France ?",
    category: "dossier",
    categoryLabel: "Dossier & Législation",
    badge: "DOSSIER JURIDIQUE 2026",
    readingTime: "6 min de lecture",
    metaTitle: "Abonnement IPTV Légal ou Illégal en France ? Le Point Juridique 2026",
    metaDescription:
      "L'IPTV est-elle légale en France ? Décryptage complet du cadre légal, de la technologie IPTV, des applications autorisées et des précautions à prendre.",
    keywords:
      "iptv legal ou illegal, iptv legalite france, loi iptv 2026, arcom iptv, sanctions iptv, abonnement iptv droit",
    intro:
      "La technologie de diffusion télévisuelle sur IP suscite de nombreuses interrogations chez les utilisateurs. Faisons le point juridique clair et factuel sur la législation en vigueur en France et en Europe.",
    sections: [
      {
        title: "1. La technologie IPTV est 100 % légale",
        content:
          "L'IPTV (Internet Protocol Television) est un protocole de transmission numérique standardisé utilisé mondialement par les plus grands opérateurs télécoms (Orange, Free, SFR, Bouygues Telecom) pour diffuser leurs box TV. La technologie de transmission par paquets IP elle-même est parfaitement légale et brevetée.",
      },
      {
        title: "2. Les applications de lecture (IBO Player, Smarters Pro)",
        content:
          "Les applications comme IBO Player, IPTV Smarters Pro, Smart IPTV ou TiviMate sont de simples lecteurs multimédias vides de tout contenu lors de leur téléchargement. Elles sont validées et distribuées légalement sur Google Play, Apple App Store, Samsung Apps et LG Content Store sans aucune infraction.",
      },
      {
        title: "3. Pourquoi choisir une infrastructure professionnelle ?",
        content:
          "Choisir un service avec serveurs sécurisés, protection de vos données personnelles et chiffrement de flux est indispensable pour assurer votre tranquillité d'esprit au quotidien contre les coupures intempestives et les blocages DNS.",
      },
    ],
    faq: [
      {
        question: "L'application IPTV Smarters est-elle légale ?",
        answer:
          "Oui, IPTV Smarters Pro est une application logicielle de lecture 100 % légale disponible sur les stores d'applications officiels comme Google Play et Apple Store.",
      },
      {
        question: "Pourquoi les FAI bloquent-ils certains flux ?",
        answer:
          "Certains opérateurs appliquent des restrictions administratives temporaires sur des plages d'adresses IP ou noms de domaine. Utiliser des DNS publics comme Google (8.8.8.8) ou Cloudflare (1.1.1.1) permet de contourner ces filtrages de routage.",
      },
    ],
    relatedSlugs: [
      "comparatif-meilleure-box-tv-pour-iptv",
      "comment-configurer-ibo-player-pro",
      "comment-installer-atlas-pro-sur-fire-tv-stick",
    ],
  },
  {
    slug: "comparatif-meilleure-box-tv-pour-iptv",
    title: "Comparatif des Meilleures Box TV pour l'IPTV en 2026",
    category: "dossier",
    categoryLabel: "Comparatif Matériel",
    badge: "COMPARATIF MATÉRIEL 2026",
    readingTime: "7 min de lecture",
    metaTitle: "Comparatif Meilleures Box TV pour l'IPTV 2026 : Nvidia Shield, Fire TV, Apple TV",
    metaDescription:
      "Quelle est la meilleure Box TV pour regarder l'IPTV en 4K ? Comparatif complet : Nvidia Shield TV Pro, Amazon Fire TV Stick 4K Max, Apple TV et Xiaomi Box S.",
    keywords:
      "meilleure box tv iptv, comparatif box iptv 2026, nvidia shield pro iptv, fire tv stick 4k iptv, apple tv iptv",
    intro:
      "Pour profiter pleinement d'un flux IPTV 4K à 50 ou 60 images par seconde sans aucun micro-freeze ni surchauffe, le choix de votre boîtier multimédia est déterminant. Voici notre sélection rigoureusement testée sur nos serveurs.",
    sections: [
      {
        title: "Amazon Fire TV Stick 4K Max — Le Meilleur Rapport Qualité/Prix",
        content:
          "Prix moyen : ~79 €. Équipée du Wi-Fi 6E, d'un processeur quad-core rapide et de 16 Go de stockage, la Fire TV Stick 4K Max est le choix recommandé pour 90 % des utilisateurs. L'installation d'Atlas Pro ONTV ou Smarters Pro s'effectue en 3 minutes via l'outil Downloader.",
        points: [
          "Wi-Fi 6E ultra réactif et faible latence",
          "Télécommande vocale ergonomique avec contrôle TV",
          "Installation facile via sideloading Downloader",
        ],
      },
      {
        title: "Nvidia Shield TV Pro — La Puissance Ultime pour Puristes",
        content:
          "Prix moyen : ~219 €. Dotée du processeur Tegra X1+, de 3 Go de RAM et d'un port Ethernet Gigabit, elle offre un upscaling 4K par Intelligence Artificielle inégalé pour transformer les flux Full HD en véritable qualité 4K nette.",
        points: [
          "Upscaling IA temps réel impressionnant",
          "Port Ethernet Gigabit 1000 Mbps natif",
          "Compatibilité Dolby Vision et Dolby Atmos",
        ],
      },
      {
        title: "Apple TV 4K (3e Génération) — La Fluidité Absolue",
        content:
          "Prix moyen : ~169 €. Avec la puce A15 Bionic et le système tvOS sans publicités agressives, l'expérience est d'une réactivité exemplaire. Compatible avec des applications premium comme IBO Player, IPTVX et TiviMax.",
        points: [
          "Puce A15 Bionic ultra puissante",
          "Interface sans pub et navigation ultra fluide",
          "Intégration parfaite dans l'écosystème Apple",
        ],
      },
      {
        title: "Xiaomi TV Box S (2nd Gen) — L'Option Google TV Économique",
        content:
          "Prix moyen : ~55 €. Une box Google TV compacte avec télécommande Bluetooth, décodage 4K HDR10+ et accès direct au Google Play Store sans manipulation complexe.",
        points: [
          "Prix ultra accessible",
          "Système Google TV officiel certifié",
          "Chromecast 4K intégré",
        ],
      },
    ],
    faq: [
      {
        question: "Quelle box choisir pour un budget de moins de 100 € ?",
        answer:
          "L'Amazon Fire TV Stick 4K Max est sans conteste la meilleure référence du marché sous la barre des 100 € pour sa stabilité et sa prise en charge du Wi-Fi 6E.",
      },
      {
        question: "Faut-il privilégier le Wi-Fi ou le câble Ethernet ?",
        answer:
          "Le câble Ethernet RJ45 est toujours recommandé car il garantit un ping stable et élimine 100 % des perturbations radioélectriques.",
      },
    ],
    relatedSlugs: [
      "abonnement-iptv-legal-ou-illegal-en-france",
      "comment-installer-atlas-pro-sur-fire-tv-stick",
      "installer-atlas-pro-box-android-google-tv",
    ],
  },
  {
    slug: "comment-installer-atlas-pro-sur-fire-tv-stick",
    title: "Comment Installer Atlas Pro sur Amazon Fire TV Stick",
    category: "installation",
    categoryLabel: "Guide d'Installation",
    badge: "AMAZON FIRE STICK",
    readingTime: "4 min de lecture",
    targetDevice: "Amazon Fire TV Stick Lite / 4K / 4K Max / Cube",
    metaTitle: "Installer Atlas Pro sur Fire TV Stick : Tutoriel Downloader 2026",
    metaDescription:
      "Tutoriel pas à pas pour installer Atlas Pro ONTV et IPTV Smarters sur Amazon Fire TV Stick en 3 minutes grâce à l'application Downloader.",
    keywords:
      "installer atlas pro fire stick, telecharger atlas pro fire tv, code downloader atlas pro ontv, iptv firestick amazon",
    intro:
      "Le Fire TV Stick d'Amazon est le matériel le plus populaire pour le streaming grâce à sa fluidité. Suivez cette méthode rapide pour installer notre application officielle en utilisant l'utilitaire Downloader.",
    steps: [
      {
        stepNumber: 1,
        title: "Installer l'application 'Downloader' depuis l'Amazon Appstore",
        desc: "Depuis l'écran d'accueil du Fire TV, allez dans 'Trouver' > 'Rechercher', tapez 'Downloader' (icône orange), puis téléchargez l'application gratuite.",
      },
      {
        stepNumber: 2,
        title: "Activer les Options pour les développeurs",
        desc: "Allez dans Paramètres > Mon Fire TV > À propos de. Cliquez 7 fois consécutives sur le nom de votre appareil jusqu'à voir le message 'Vous êtes maintenant un développeur'. Revenez en arrière, entrez dans 'Options pour les développeurs' et autorisez 'Downloader' pour les 'Applications de sources inconnues'.",
      },
      {
        stepNumber: 3,
        title: "Télécharger l'APK officiel Atlas Pro ONTV",
        desc: "Ouvrez Downloader, saisissez le code court ou l'URL directe de téléchargement fournie sur notre page /applications/atlas-pro-ontv/ puis cliquez sur Go. Le fichier APK se télécharge automatiquement.",
      },
      {
        stepNumber: 4,
        title: "Installer et lancer l'application",
        desc: "Une fois le téléchargement terminé, une fenêtre contextuelle s'ouvre. Cliquez sur 'Installer'. Une fois l'opération terminée, cliquez sur 'Ouvrir'.",
      },
      {
        stepNumber: 5,
        title: "Saisir votre Code d'activation ou vos identifiants",
        desc: "Entrez votre code à chiffres Atlas Pro ou vos identifiants Xtream (Server URL, Username, Password) et profitez instantanément de vos programmes.",
      },
    ],
    faq: [
      {
        question: "Pourquoi le Fire TV refuse d'installer les applications inconnues ?",
        answer:
          "Amazon sécurise son système par défaut. Il suffit d'activer les 'Options pour développeurs' comme expliqué à l'étape 2 pour débloquer l'installation.",
      },
    ],
    relatedSlugs: [
      "installer-atlas-pro-box-android-google-tv",
      "comparatif-meilleure-box-tv-pour-iptv",
      "comment-configurer-iptv-smarters-pro",
    ],
  },
  {
    slug: "installer-atlas-pro-box-android-google-tv",
    title: "Comment Installer Atlas Pro sur Box Android & Google TV",
    category: "installation",
    categoryLabel: "Guide d'Installation",
    badge: "ANDROID TV & GOOGLE TV",
    readingTime: "4 min de lecture",
    targetDevice: "Nvidia Shield, Xiaomi Mi Box, Sony Google TV, TCL, Philips Android",
    metaTitle: "Installer IPTV sur Android TV & Google TV : Guide Pas à Pas",
    metaDescription:
      "Tutoriel de configuration IPTV sur Box Android, Google TV et téléviseurs Sony, Philips, TCL. Téléchargement APK et configuration rapide.",
    keywords:
      "installation iptv android tv, atlas pro google tv, iptv xiaomi box, iptv nvidia shield, apk atlas pro tv",
    intro:
      "Les téléviseurs et boîtiers tournant sous Android TV ou Google TV offrent une flexibilité maximale. Découvrez comment installer Atlas Pro ONTV ou IPTV Smarters Pro en quelques clics.",
    steps: [
      {
        stepNumber: 1,
        title: "Ouvrir le Google Play Store sur votre TV",
        desc: "Accédez au Play Store officiel depuis votre interface TV.",
      },
      {
        stepNumber: 2,
        title: "Installer un lecteur multimédia ou l'outil Downloader",
        desc: "Vous pouvez installer directement 'IPTV Smarters Pro' ou installer 'Downloader' pour récupérer notre application dédiée Atlas Pro ONTV optimisée pour télécommande.",
      },
      {
        stepNumber: 3,
        title: "Autoriser l'installation des sources inconnues si besoin",
        desc: "Dans Paramètres > Sécurité et restrictions > Sources inconnues, cochez l'autorisation pour l'application avec laquelle vous téléchargez.",
      },
      {
        stepNumber: 4,
        title: "Connexion avec l'API Xtream Codes",
        desc: "Renseignez le nom de votre choix, le nom d'utilisateur, le mot de passe et l'URL du serveur reçus par e-mail.",
      },
    ],
    relatedSlugs: [
      "comment-installer-atlas-pro-sur-fire-tv-stick",
      "comparatif-meilleure-box-tv-pour-iptv",
      "comment-configurer-iptv-smarters-pro",
    ],
  },
  {
    slug: "comment-configurer-ibo-player-pro",
    title: "Comment Configurer IBO Player Pro de A à Z",
    category: "tutoriel",
    categoryLabel: "Tutoriel Application",
    badge: "TUTORIEL IBO PLAYER",
    readingTime: "5 min de lecture",
    metaTitle: "Comment Configurer IBO Player Pro : Tutoriel Pas à Pas 2026",
    metaDescription:
      "Guide complet pour configurer IBO Player Pro sur Smart TV, Fire Stick et Apple TV : ajout de liste M3U, identifiants Xtream et activation de l'application.",
    keywords:
      "configurer ibo player, ibo player pro tutoriel, ajouter playlist ibo player, device id ibo player, activation ibo player",
    intro:
      "IBO Player Pro est devenu le lecteur multimédia de référence sur Smart TV Samsung et LG grâce à son ergonomie ultra rapide, son zapping instantané et son interface moderne.",
    steps: [
      {
        stepNumber: 1,
        title: "Installer IBO Player sur votre téléviseur ou appareil",
        desc: "Téléchargez l'application depuis le Samsung Store, LG Content Store, Google Play ou l'App Store Apple.",
      },
      {
        stepNumber: 2,
        title: "Noter votre Device ID et Device Key",
        desc: "Ces deux informations s'affichent clairement au centre de votre écran dès l'ouverture de l'application.",
      },
      {
        stepNumber: 3,
        title: "Accéder au portail web de gestion iboplayer.pro",
        desc: "Depuis votre smartphone ou votre ordinateur, rendez-vous sur le site officiel de gestion d'IBO Player et connectez-vous avec votre Device ID et Device Key.",
      },
      {
        stepNumber: 4,
        title: "Ajouter vos identifiants Xtream Codes ou lien M3U",
        desc: "Cliquez sur 'Add XC Playlist' (recommandé) et renseignez votre nom d'utilisateur, mot de passe et URL du serveur reçus lors de votre souscription.",
      },
      {
        stepNumber: 5,
        title: "Recharger la liste sur votre écran TV",
        desc: "Cliquez sur 'Save' sur le site web, puis appuyez sur le bouton vert ou le bouton 'Reload' de votre télécommande TV. Vos chaînes et VOD sont synchronisées !",
      },
    ],
    faq: [
      {
        question: "L'application IBO Player est-elle gratuite ?",
        answer:
          "IBO Player propose un essai gratuit de 7 jours. Après cette période, une licence à vie d'environ 8 € peut être activée sur leur site officiel pour conserver le lecteur de manière permanente.",
      },
      {
        question: "Comment changer la langue audio et les sous-titres dans IBO Player ?",
        answer:
          "Pendant la lecture d'une vidéo, appuyez sur la touche flèche vers le bas ou OK pour faire apparaître la barre de contrôle, puis cliquez sur l'icône 'Audio / Subtitle'.",
      },
    ],
    relatedSlugs: [
      "comment-configurer-iptv-smarters-pro",
      "comment-installer-atlas-pro-sur-fire-tv-stick",
      "installer-atlas-pro-box-android-google-tv",
    ],
  },
  {
    slug: "comment-configurer-iptv-smarters-pro",
    title: "Comment Configurer IPTV Smarters Pro Pas à Pas",
    category: "tutoriel",
    categoryLabel: "Tutoriel Application",
    badge: "TUTORIEL SMARTERS PRO",
    readingTime: "4 min de lecture",
    metaTitle: "Comment Configurer IPTV Smarters Pro : Guide Ultime 2026",
    metaDescription:
      "Paramétrage pas à pas d'IPTV Smarters Pro sur TV, Android, iOS et PC : connexion API Xtream Codes, activation du mode multi-écrans et EPG.",
    keywords:
      "configurer iptv smarters pro, tutoriel iptv smarters, smarters player lite reglage, xtream codes api smarters",
    intro:
      "IPTV Smarters Pro est l'une des applications les plus utilisées au monde grâce à sa compatibilité multi-plateformes et sa prise en charge du contrôle parental et du multi-écrans.",
    steps: [
      {
        stepNumber: 1,
        title: "Télécharger l'application officielle",
        desc: "Installez 'IPTV Smarters Pro' ou 'Smarters Player Lite' depuis le store d'applications de votre appareil.",
      },
      {
        stepNumber: 2,
        title: "Sélectionner 'Connexion avec l'API Xtream Codes'",
        desc: "Ne choisissez pas 'Charger votre liste de lecture ou fichier' : l'API Xtream Codes est beaucoup plus rapide et maintient le guide TV (EPG) à jour automatiquement.",
      },
      {
        stepNumber: 3,
        title: "Saisir vos 4 paramètres de connexion",
        desc: "1) Any Name : 'Atlas Pro'. 2) Username : votre nom d'utilisateur. 3) Password : votre mot de passe. 4) Server URL : l'adresse commençant par http:// fournie lors de votre commande.",
      },
      {
        stepNumber: 4,
        title: "Cliquer sur 'Ajouter un utilisateur' et lancer le téléchargement",
        desc: "L'application télécharge les bouquets 'Live TV', 'Movies' et 'Series'. Une fois terminé, cliquez sur votre profil pour commencer à regarder.",
      },
    ],
    faq: [
      {
        question: "Pourquoi l'EPG ne s'affiche pas sur certaines chaînes ?",
        answer:
          "Allez dans Paramètres > Installer EPG > Actualiser les données EPG pour forcer la mise à jour des programmes.",
      },
    ],
    relatedSlugs: [
      "comment-configurer-ibo-player-pro",
      "comment-installer-atlas-pro-sur-fire-tv-stick",
      "installer-atlas-pro-box-android-google-tv",
    ],
  },
];

export function getGuideArticle(slug: string): GuideArticle | undefined {
  return GUIDES_ARTICLES.find((article) => article.slug === slug);
}

export function getAllGuideSlugs(): string[] {
  return GUIDES_ARTICLES.map((article) => article.slug);
}
