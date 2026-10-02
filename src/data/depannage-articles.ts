export interface DepannageFaqItem {
  question: string;
  answer: string;
}

export interface DepannageSolutionStep {
  stepNumber: number;
  title: string;
  desc: string;
  tip?: string;
}

export interface DepannageArticle {
  slug: string;
  title: string;
  badge: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  intro: string;
  symptoms: string[];
  causes: string[];
  solutions: DepannageSolutionStep[];
  faq: DepannageFaqItem[];
  relatedSlugs: string[];
}

export const DEPANNAGE_ARTICLES: readonly DepannageArticle[] = [
  {
    slug: "atlas-pro-ne-peut-pas-se-connecter-au-serveur",
    title: "Atlas Pro Ne Peut Pas Se Connecter au Serveur",
    badge: "ERREUR RÉSEAU N°1",
    metaTitle: "Atlas Pro Ne Peut Pas Se Connecter au Serveur : 6 Solutions 2026",
    metaDescription:
      "Résolvez l'erreur « Atlas Pro ne peut pas se connecter au serveur » en moins de 5 minutes. DNS, redémarrage box, URL invalide, code expiré : toutes les causes et solutions.",
    keywords:
      "atlas pro ne peut pas se connecter au serveur, atlaspro ne peut pas se connecter au serveur, atlas pro impossible de se connecter au serveur, pourquoi atlas pro ne peut pas se connecter au serveur, atlas pro url serveur invalide, atlas pro connexion serveur impossible",
    intro:
      "L'erreur « Atlas Pro ne peut pas se connecter au serveur » est le problème le plus fréquent rencontré par les utilisateurs d'Atlas Pro ONTV et IBO Player. Dans 85 % des cas, le serveur fonctionne parfaitement mais un blocage réseau intermédiaire (DNS du FAI, cache corrompu ou URL erronée) empêche l'authentification.",
    symptoms: [
      "Message d'alerte rouge « Impossible de joindre le serveur » à l'ouverture de l'application",
      "Boucle de chargement infinie sur la page de connexion Xtream Codes",
      "Erreur « URL serveur invalide ou hors ligne » après saisie manuelle",
      "Connexion fonctionnelle en 4G/partage de connexion mais bloquée sur la box Wi-Fi",
    ],
    causes: [
      "Blocage DNS de l'opérateur Internet (Orange, SFR, Free, Bouygues filtrant les ports)",
      "URL du serveur erronée avec un espace invisible copié au début ou à la fin",
      "Abonnement Atlas Pro arrivé à échéance (code d'activation expiré)",
      "Cache réseau de la TV ou du décodeur saturé nécessitant un cycle d'alimentation",
      "Maintenance technique temporaire sur un nœud de distribution CDN",
    ],
    solutions: [
      {
        stepNumber: 1,
        title: "Changer les DNS de votre appareil vers Google (8.8.8.8)",
        desc: "Les fournisseurs d'accès français bloquent souvent la résolution de noms des serveurs IPTV. Allez dans les Paramètres Réseau de votre Smart TV ou Fire Stick, modifiez la configuration IP de Manuel/DHCP pour définir le DNS primaire sur 8.8.8.8 et le secondaire sur 8.8.4.4 (ou Cloudflare 1.1.1.1).",
        tip: "Redémarrez complètement l'application après avoir enregistré les DNS.",
      },
      {
        stepNumber: 2,
        title: "Redémarrage électrique complet de la Box Internet et de la TV",
        desc: "Éteignez votre Box Internet et votre téléviseur. Débranchez les prises électriques pendant 60 secondes complètes pour vider la table NAT et le cache mémoire. Rebranchez d'abord la box, attendez la synchronisation complète, puis rallumez la TV.",
      },
      {
        stepNumber: 3,
        title: "Vérifier scrupuleusement l'URL du serveur sans espace",
        desc: "Sur l'écran de connexion Xtream Codes, assurez-vous que l'URL commence bien par http:// (et non https:// si votre flux ne le supporte pas). Vérifiez qu'aucun espace n'a été inséré avant le http ou après le numéro de port.",
        tip: "Consultez l'e-mail de confirmation iboatlaspro.com pour copier l'URL exacte.",
      },
      {
        stepNumber: 4,
        title: "Tester la connexion via partage de connexion 4G / 5G",
        desc: "Activez le partage de connexion sur votre smartphone et connectez votre TV ou Fire Stick sur ce réseau mobile. Si l'application se connecte immédiatement, votre abonnement est actif et le blocage vient à 100 % de votre Box Internet ou de son pare-feu.",
      },
      {
        stepNumber: 5,
        title: "Vérifier le statut d'expiration de votre abonnement",
        desc: "Lorsque votre compte arrive à son terme (après 12 mois), le serveur refuse l'authentification et renvoie une erreur de connexion. Vérifiez la date d'expiration reçue dans votre espace client ou renouvelez votre code.",
      },
      {
        stepNumber: 6,
        title: "Vider le cache ou réinstaller la dernière version d'Atlas Pro",
        desc: "Dans Paramètres > Applications > Atlas Pro ONTV, forcez l'arrêt puis cliquez sur « Vider le cache ». Si l'erreur persiste, désinstallez puis téléchargez le fichier APK le plus récent.",
      },
    ],
    faq: [
      {
        question: "Pourquoi Atlas Pro ne peut pas se connecter au serveur ?",
        answer:
          "Les causes principales sont : 1) blocage DNS de votre fournisseur d'accès, 2) redémarrage nécessaire de la box, 3) URL serveur avec espace accidentel, 4) abonnement expiré. Modifier vos DNS vers 8.8.8.8 résout 85 % des pannes.",
      },
      {
        question: "Atlas Pro URL serveur invalide : comment corriger ?",
        answer:
          "Copiez l'URL exactement depuis votre e-mail de confirmation iboatlaspro.com. Assurez-vous d'inclure le numéro de port (:80 ou :8080) sans espace avant ni après.",
      },
      {
        question: "Est-ce une panne générale des serveurs Atlas Pro ?",
        answer:
          "Nos serveurs disposent d'un taux de disponibilité de 99,8 %. Si une maintenance programmée a lieu, notre support client WhatsApp vous répondra instantanément avec le statut des grappes.",
      },
    ],
    relatedSlugs: [
      "erreur-de-connexion-serveur-iptv",
      "code-abonnement-atlas-pro-expire",
      "atlas-pro-on-tv-erreur-de-lecture",
    ],
  },
  {
    slug: "erreur-de-connexion-serveur-iptv",
    title: "Erreur de Connexion Serveur IPTV : Causes et Solutions",
    badge: "SERVEUR FAILED",
    metaTitle: "Erreur de Connexion Serveur IPTV : Causes et Solutions 2026",
    metaDescription:
      "Comment résoudre 'Server Connection Failed' sur IPTV Smarters, IBO Player et Atlas Pro. DNS, redémarrage box, URL invalide : guide de dépannage 2026.",
    keywords:
      "erreur connexion serveur iptv, server connection failed iptv, erreur connexion serveur atlas pro, iptv smarters connexion serveur, ibo player connexion serveur",
    intro:
      "Le message « Server Connection Failed » ou « Erreur de connexion au serveur » s'affiche sur IPTV Smarters Pro, IBO Player ou XCIPTV lorsque le lecteur n'obtient pas de réponse HTTP valide du serveur d'authentification.",
    symptoms: [
      "Écran rouge ou pop-up « Server Connection Failed » sur IPTV Smarters Pro",
      "Message « Cannot connect to stream server » sur IBO Player",
      "Échec de mise à jour des listes de chaînes et de l'EPG",
    ],
    causes: [
      "Filtrage DNS strict exercé par votre FAI",
      "Nom d'utilisateur ou mot de passe erroné (sensible à la casse)",
      "Ligne bloquée en raison de multi-connexions simultanées non autorisées",
      "Expiration de la validité de l'abonnement",
    ],
    solutions: [
      {
        stepNumber: 1,
        title: "Vérifier la casse des identifiants (Majuscules / Minuscules)",
        desc: "Les serveurs Xtream Codes sont strictement sensibles à la casse. Un 'A' majuscule au lieu d'un 'a' minuscule provoquera un refus d'accès serveur immédiat.",
      },
      {
        stepNumber: 2,
        title: "Configurer les serveurs DNS Cloudflare (1.1.1.1)",
        desc: "Définissez le DNS primaire sur 1.1.1.1 et le secondaire sur 1.0.0.1. Ces serveurs contournent instantanément les filtrages administratifs des opérateurs européens.",
      },
      {
        stepNumber: 3,
        title: "Vérifier qu'un seul écran est actif à la fois",
        desc: "Si vous disposez d'un compte simple connexion, lancer la lecture sur un second appareil fermera automatiquement la session précédente avec une erreur serveur.",
      },
    ],
    faq: [
      {
        question: "Comment résoudre l'erreur 'Server Connection Failed' sur IPTV Smarters ?",
        answer:
          "Dans 80 % des cas, le changement de DNS en 8.8.8.8 ou 1.1.1.1 combiné à la vérification scrupuleuse des identifiants (sans espace) règle immédiatement le problème.",
      },
      {
        question: "Pourquoi IBO Player affiche une erreur serveur ?",
        answer:
          "Si votre adresse MAC est bien enregistrée mais que le portail ne charge pas, vérifiez que votre URL M3U ou Xtream est valide et non expirée.",
      },
    ],
    relatedSlugs: [
      "atlas-pro-ne-peut-pas-se-connecter-au-serveur",
      "code-abonnement-atlas-pro-expire",
      "resoudre-ecran-noir-buffering-iptv",
    ],
  },
  {
    slug: "atlas-pro-on-tv-erreur-de-lecture",
    title: "Atlas Pro On TV Erreur de Lecture & Saccades : 5 Solutions",
    badge: "BUFFERING & FREEZE",
    metaTitle: "Atlas Pro On TV Erreur de Lecture & Buffering : 5 Solutions Rapides",
    metaDescription:
      "Résolvez l'erreur de lecture sur Atlas Pro ONTV : saccades, freeze, écran noir, buffering. Guide de dépannage 2026 pour Smart TV, Fire Stick et Android.",
    keywords:
      "atlas pro on tv erreur de lecture, atlas pro erreur de lecture, erreur de lecture atlas pro ontv, atlas pro bug, atlas pro ne fonctionne plus, atlas pro saccades, buffering atlas pro",
    intro:
      "L'erreur « Atlas Pro ONTV Erreur de lecture » ou les micro-coupures répétées se produisent lorsque le décodeur vidéo matériel de votre appareil ne parvient pas à décoder le flux H.264/H.265 ou lorsque le tampon mémoire est épuisé.",
    symptoms: [
      "Message « Erreur de lecture : impossible de lire cette vidéo » après 5 secondes",
      "Image figée alors que le son continue de fonctionner normalement",
      "Saccades et baisse de fluidité lors des matchs de football en direct 50 FPS",
    ],
    causes: [
      "Connexion Wi-Fi instable avec gigue (jitter) supérieure à 30 ms",
      "Taille de tampon (Buffer Size) insuffisante dans l'application",
      "Incompatibilité du moteur de décodage matériel (Hardware vs Software decoding)",
      "Surcharge temporaire sur le transcodeur d'une chaîne spécifique",
    ],
    solutions: [
      {
        stepNumber: 1,
        title: "Basculer le lecteur interne vers VLC ou ExoPlayer",
        desc: "Dans les réglages de l'application (Settings > Player Selection), passez de 'Native Player' à 'ExoPlayer' ou 'VLC'. Ces moteurs intègrent des décodeurs logiciels beaucoup plus tolérants aux variations de débit.",
      },
      {
        stepNumber: 2,
        title: "Augmenter la taille du Buffer à 3 ou 5 secondes",
        desc: "Réglez le tampon vidéo sur 3000 ms ou 5000 ms. Cela permet à l'application de stocker quelques secondes d'avance et d'absorber les micro-chutes de votre débit Wi-Fi.",
      },
      {
        stepNumber: 3,
        title: "Privilégier un branchement Ethernet ou le Wi-Fi 5 GHz",
        desc: "Le Wi-Fi 2.4 GHz subit de fortes interférences dans les appartements. Connectez votre TV en câble direct RJ45 ou connectez-vous au réseau Wi-Fi 5 GHz de votre box.",
      },
    ],
    faq: [
      {
        question: "Pourquoi Atlas Pro affiche une erreur de lecture ?",
        answer:
          "Cela provient soit d'un débit instable, soit d'un codec audio/vidéo incompatible. Choisir le lecteur ExoPlayer ou VLC dans les paramètres règle 90 % des erreurs de lecture.",
      },
      {
        question: "Quel débit est nécessaire pour le streaming 4K sans saccade ?",
        answer:
          "Une vitesse stable d'au moins 25 à 30 Mbps avec un ping inférieur à 30 ms est recommandée pour le flux Ultra HD 4K 50 FPS.",
      },
    ],
    relatedSlugs: [
      "resoudre-ecran-noir-buffering-iptv",
      "atlas-pro-ne-peut-pas-se-connecter-au-serveur",
      "code-abonnement-atlas-pro-expire",
    ],
  },
  {
    slug: "retrouver-identifiant-code-atlas-pro-perdu",
    title: "Identifiant Atlas Pro Perdu : Retrouver son Code en 3 Étapes",
    badge: "RÉCUPÉRATION COMPTE",
    metaTitle: "Identifiant Atlas Pro Perdu : Retrouver son Code en 3 Étapes",
    metaDescription:
      "Vous avez perdu votre identifiant Atlas Pro ? Retrouvez votre code d'accès, nom d'utilisateur ou mot de passe Atlas Pro ONTV en 3 étapes. Guide officiel iboatlaspro.com.",
    keywords:
      "atlas pro identifiant perdu, ou trouver identifiant atlas pro, comment retrouver son code atlas pro, identifiant atlas pro ontv, atlas pro mon compte, code atlas pro perdu",
    intro:
      "Vous avez réinitialisé votre téléviseur ou changé de box et vous ne retrouvez plus votre code d'activation Atlas Pro ou vos identifiants Xtream Codes ? Voici la procédure pour les récupérer immédiatement.",
    symptoms: [
      "Nouvelle installation demandant Username et Password introuvables",
      "E-mail de confirmation égaré ou supprimé par erreur",
      "Changement de téléviseur nécessitant le transfert des identifiants",
    ],
    causes: [
      "E-mail de confirmation classé automatiquement dans le dossier Spams / Courriers indésirables",
      "Erreur de frappe lors de la saisie de votre adresse e-mail lors de la commande",
      "Suppression involontaire de la boîte de réception",
    ],
    solutions: [
      {
        stepNumber: 1,
        title: "Rechercher dans votre boîte mail (y compris Spams)",
        desc: "Faites une recherche avec les mots-clés 'iboatlaspro', 'Atlas Pro', ou 'Abonnement'. Pensez à vérifier le dossier Spams / Pourriels ainsi que la corbeille.",
      },
      {
        stepNumber: 2,
        title: "Contacter le support client avec votre e-mail de commande",
        desc: "Envoyez un message sur notre assistance WhatsApp officielle avec l'adresse mail utilisée lors de l'achat ou votre nom. Nos agents renvoient vos accès sécurisés en quelques minutes.",
      },
    ],
    faq: [
      {
        question: "Comment retrouver mon identifiant Atlas Pro perdu ?",
        answer:
          "Vérifiez l'e-mail de confirmation d'achat reçu de la part d'iboatlaspro.com. Si introuvable, notre support WhatsApp vous le réexpédiera immédiatement sur présentation de votre preuve de paiement.",
      },
      {
        question: "Peut-on changer manuellement son code Atlas Pro ?",
        answer:
          "Non, le code est généré de manière chiffrée par nos serveurs pour garantir la sécurité de votre abonnement et empêcher les piratages de flux.",
      },
    ],
    relatedSlugs: [
      "code-abonnement-atlas-pro-expire",
      "atlas-pro-ne-peut-pas-se-connecter-au-serveur",
    ],
  },
  {
    slug: "resoudre-ecran-noir-buffering-iptv",
    title: "Écran Noir & Buffering Constant : Comment Supprimer les Coupures",
    badge: "FLUX BLOQUÉ",
    metaTitle: "Écran Noir & Buffering IPTV : Comment Supprimer les Coupures et Saccades",
    metaDescription:
      "Astuces d'experts pour éliminer le buffering, les coupures et l'écran noir sur votre IPTV. Réglages du lecteur VLC/ExoPlayer et optimisation de bande passante.",
    keywords:
      "ecran noir iptv, buffering iptv constant, saccades atlas pro, ecran noir smart tv iptv, coupure streaming tv",
    intro:
      "L'écran noir avec le rond de chargement qui tourne en boucle est souvent causé par un débit Wi-Fi instable, un problème de codec vidéo ou un engorgement du cache mémoire de votre téléviseur.",
    symptoms: [
      "Écran noir complet avec audio audible en arrière-plan",
      "Cercle de chargement toutes les 30 secondes en direct",
      "Blocage complet de l'application nécessitant de débrancher la TV",
    ],
    causes: [
      "Cache de l'application saturé par des heures de visionnage continu",
      "Bande passante locale accaparée par d'autres téléchargements",
      "Format de décodage non pris en charge par la puce graphique de votre téléviseur",
    ],
    solutions: [
      {
        stepNumber: 1,
        title: "Vider le cache de l'application IPTV",
        desc: "Dans les paramètres d'application de votre appareil, videz le cache d'Atlas Pro ou d'IBO Player. Ne supprimez pas les données (sauf si vous avez noté vos identifiants).",
      },
      {
        stepNumber: 2,
        title: "Désactiver le décodage matériel (Passer en Software)",
        desc: "Si l'écran est noir alors que le son fonctionne, votre processeur TV ne gère pas le codec vidéo en accélération matérielle. Choisissez 'Software Decoding' dans les options du lecteur.",
      },
      {
        stepNumber: 3,
        title: "Tester la chaîne en format FHD au lieu de 4K",
        desc: "Si votre bande passante chute aux heures de pointe, sélectionnez la déclinaison Full HD de la chaîne pour retrouver une fluidité totale.",
      },
    ],
    faq: [
      {
        question: "Pourquoi l'image est noire mais le son fonctionne ?",
        answer:
          "C'est un conflit de codec vidéo matériel. Passez le décodeur en mode Logiciel (Software) ou installez le lecteur VLC comme moteur principal.",
      },
    ],
    relatedSlugs: [
      "atlas-pro-on-tv-erreur-de-lecture",
      "atlas-pro-ne-peut-pas-se-connecter-au-serveur",
      "code-abonnement-atlas-pro-expire",
    ],
  },
  {
    slug: "code-abonnement-atlas-pro-expire",
    title: "Code ou Abonnement Expiré : Comment Renouveler Immédiatement",
    badge: "RÉACTIVATION EXPRESS",
    metaTitle: "Code IPTV Expiré ou Bloqué : Comment Renouveler Immédiatement 2026",
    metaDescription:
      "Votre code d'activation Atlas Pro ou abonnement IPTV est expiré ? Renouvelez votre accès 12 mois en moins de 15 minutes et conservez vos playlists sans réinstallation.",
    keywords:
      "code expire atlas pro, abonnement atlas pro expire, renouvellement atlas pro, recharger code iptv, reactiver atlas pro",
    intro:
      "Lorsque votre abonnement arrive à son terme, nos serveurs interrompent la diffusion du flux. Vous n'avez pas besoin de réinstaller votre application ni de reconfigurer vos appareils : votre ligne peut être réactivée instantanément à distance.",
    symptoms: [
      "Message « Account Expired » ou « Code expiré » à l'ouverture",
      "Disparition des catégories de chaînes et de la liste VOD",
      "Échec d'authentification lors de la connexion Xtream Codes",
    ],
    causes: [
      "La période de 1, 3, 6 ou 12 mois de votre abonnement est arrivée à son terme",
      "Compte d'essai de 24h ou 48h terminé",
    ],
    solutions: [
      {
        stepNumber: 1,
        title: "Choisir votre formule de réactivation",
        desc: "Commandez votre renouvellement 12 mois sur notre boutique officielle pour bénéficier du tarif préférentiel et des 2 mois offerts.",
      },
      {
        stepNumber: 2,
        title: "Indiquer votre identifiant existant ou adresse MAC",
        desc: "Lors de la commande, précisez votre identifiant actuel ou adresse MAC pour que nous prolongions directement votre compte sans rien changer sur votre TV.",
      },
      {
        stepNumber: 3,
        title: "Redémarrer l'application pour recharger les droits",
        desc: "Une fois la confirmation WhatsApp reçue, relancez l'application : l'ensemble des bouquets et films réapparaît instantanément.",
      },
    ],
    faq: [
      {
        question: "Faut-il réinstaller l'application après expiration ?",
        answer:
          "Non ! Vos applications (Atlas Pro, IBO Player, Smarters Pro) restent en place. La réactivation s'effectue directement sur nos serveurs.",
      },
      {
        question: "Combien de temps prend la réactivation d'un compte ?",
        answer:
          "Votre accès est réactivé en moins de 15 minutes après validation de votre commande sur iboatlaspro.com.",
      },
    ],
    relatedSlugs: [
      "atlas-pro-ne-peut-pas-se-connecter-au-serveur",
      "retrouver-identifiant-code-atlas-pro-perdu",
    ],
  },
];

export function getDepannageArticle(slug: string): DepannageArticle | undefined {
  return DEPANNAGE_ARTICLES.find((article) => article.slug === slug);
}

export function getAllDepannageSlugs(): string[] {
  return DEPANNAGE_ARTICLES.map((article) => article.slug);
}
