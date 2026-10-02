-- Migration 002: Synchronisation sitemap page_metadata avec les slugs longue traîne et nettoyage des silos supprimés

-- 1. Nettoyage des anciennes URLs supprimées (Silos obsolètes et anciens slugs courts)
DELETE FROM public.page_metadata
WHERE 
  path LIKE '/chaines/%'
  OR path LIKE '/centre-d-aide/installation/%'
  OR path LIKE '/centre-d-aide/tutoriels/%'
  OR path IN (
    '/centre-d-aide/depannage/ne-peut-pas-se-connecter-au-serveur/',
    '/centre-d-aide/depannage/erreur-connexion-serveur/',
    '/centre-d-aide/depannage/erreur-de-lecture/',
    '/centre-d-aide/depannage/identifiant-perdu/',
    '/centre-d-aide/depannage/ecran-noir-buffering/',
    '/centre-d-aide/depannage/code-expire/',
    '/centre-d-aide/guides/fire-tv-stick/',
    '/centre-d-aide/guides/android-tv/',
    '/centre-d-aide/guides/configurer-ibo-player/',
    '/centre-d-aide/guides/configurer-iptv-smarters/',
    '/centre-d-aide/guides/iptv-legal-ou-illegal/',
    '/centre-d-aide/guides/comparatif-box-streaming/',
    '/cgv/',
    '/mentions-legales/'
  );

-- 2. Insertion / Mise à jour des nouvelles pages avec Slugs Longue Traîne
INSERT INTO public.page_metadata (path, last_modified, change_freq, priority, notes)
VALUES
  -- Centre d'aide - Hubs
  ('/centre-d-aide/',                                                            NOW(), 'monthly', 0.80, 'hub centre d aide'),
  ('/centre-d-aide/depannage/',                                                 NOW(), 'monthly', 0.85, 'hub depannage'),
  ('/centre-d-aide/guides/',                                                    NOW(), 'monthly', 0.80, 'hub guides et tutoriels'),

  -- Centre d'aide - Dépannage (Slugs Longue Traîne)
  ('/centre-d-aide/depannage/atlas-pro-ne-peut-pas-se-connecter-au-serveur/',   NOW(), 'monthly', 0.90, 'depannage: connexion serveur atlas pro'),
  ('/centre-d-aide/depannage/erreur-de-connexion-serveur-iptv/',                NOW(), 'monthly', 0.85, 'depannage: erreur connexion serveur iptv'),
  ('/centre-d-aide/depannage/atlas-pro-on-tv-erreur-de-lecture/',               NOW(), 'monthly', 0.85, 'depannage: atlas pro on tv erreur de lecture'),
  ('/centre-d-aide/depannage/retrouver-identifiant-code-atlas-pro-perdu/',       NOW(), 'monthly', 0.85, 'depannage: identifiant code perdu'),
  ('/centre-d-aide/depannage/resoudre-ecran-noir-buffering-iptv/',              NOW(), 'monthly', 0.80, 'depannage: ecran noir et buffering'),
  ('/centre-d-aide/depannage/code-abonnement-atlas-pro-expire/',                NOW(), 'monthly', 0.85, 'depannage: code expire et renouvellement'),

  -- Centre d'aide - Guides & Installation (Slugs Longue Traîne)
  ('/centre-d-aide/guides/comment-installer-atlas-pro-sur-fire-tv-stick/',      NOW(), 'monthly', 0.85, 'guide: installation fire tv stick downloader'),
  ('/centre-d-aide/guides/installer-atlas-pro-box-android-google-tv/',          NOW(), 'monthly', 0.80, 'guide: installation android tv google tv'),
  ('/centre-d-aide/guides/comment-configurer-ibo-player-pro/',                  NOW(), 'monthly', 0.80, 'guide: tutoriel configuration ibo player pro'),
  ('/centre-d-aide/guides/comment-configurer-iptv-smarters-pro/',               NOW(), 'monthly', 0.80, 'guide: configuration iptv smarters pro'),
  ('/centre-d-aide/guides/abonnement-iptv-legal-ou-illegal-en-france/',         NOW(), 'monthly', 0.75, 'guide: legalite iptv france'),
  ('/centre-d-aide/guides/comparatif-meilleure-box-tv-pour-iptv/',              NOW(), 'monthly', 0.75, 'guide: comparatif box streaming tv iptv'),

  -- Legal
  ('/conditions-utilisation/',                                                  NOW(), 'yearly',  0.30, 'conditions d utilisation'),
  ('/confidentialite/',                                                         NOW(), 'yearly',  0.30, 'politique de confidentialite'),
  ('/politique-remboursement/',                                                 NOW(), 'yearly',  0.30, 'politique de remboursement')

ON CONFLICT (path) DO UPDATE SET
  last_modified = EXCLUDED.last_modified,
  change_freq   = EXCLUDED.change_freq,
  priority      = EXCLUDED.priority,
  notes         = EXCLUDED.notes;
