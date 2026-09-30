-- =====================================================================
-- Migration: page_metadata table for dynamic sitemap lastmod
-- Run this in: Supabase Dashboard > SQL Editor
-- =====================================================================

-- Table: one row per canonical URL path
CREATE TABLE IF NOT EXISTS public.page_metadata (
  path            text PRIMARY KEY,           -- e.g. '/abonnement-atlas-pro/12-mois/'
  last_modified   timestamptz NOT NULL DEFAULT now(),
  change_freq     text NOT NULL DEFAULT 'weekly'
                  CHECK (change_freq IN ('always','hourly','daily','weekly','monthly','yearly','never')),
  priority        numeric(3,2) NOT NULL DEFAULT 0.8
                  CHECK (priority >= 0.0 AND priority <= 1.0),
  notes           text                        -- human-readable note on what changed
);

-- Auto-update last_modified on any row UPDATE
CREATE OR REPLACE FUNCTION public.touch_page_metadata()
RETURNS TRIGGER LANGUAGE plpgsql AS $$
BEGIN
  NEW.last_modified = now();
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS trg_touch_page_metadata ON public.page_metadata;
CREATE TRIGGER trg_touch_page_metadata
  BEFORE UPDATE ON public.page_metadata
  FOR EACH ROW
  EXECUTE FUNCTION public.touch_page_metadata();

-- Index for fast ordered queries (sitemap generator)
CREATE INDEX IF NOT EXISTS idx_page_metadata_priority
  ON public.page_metadata (priority DESC);

-- RLS: only service role can write; anon can read (sitemap is public)
ALTER TABLE public.page_metadata ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Public read page_metadata" ON public.page_metadata;
CREATE POLICY "Public read page_metadata"
  ON public.page_metadata FOR SELECT
  USING (true);

DROP POLICY IF EXISTS "Service role manages page_metadata" ON public.page_metadata;
CREATE POLICY "Service role manages page_metadata"
  ON public.page_metadata FOR ALL
  USING (auth.role() = 'service_role');

-- =====================================================================
-- Seed: initial page data (matches current sitemap.ts)
-- =====================================================================
INSERT INTO public.page_metadata (path, last_modified, change_freq, priority, notes)
VALUES
  -- Homepage
  ('',                                                              '2026-09-30', 'daily',   1.00, 'atlas pro france KW added, FAQ schema'),

  -- Silo 1: ABONNEMENT
  ('/abonnement-atlas-pro/',                                        '2026-09-30', 'weekly',  0.95, 'cannibalization fix: brand-nav KW only'),
  ('/abonnement-atlas-pro/12-mois/',                               '2026-09-30', 'weekly',  0.95, 'transactional KW: abonnement iptv 12 mois'),
  ('/abonnement-atlas-pro/multi-ecrans/',                          '2026-09-15', 'weekly',  0.85, 'multi-screen plans'),

  -- Silo 2: APPLICATIONS
  ('/applications/',                                               '2026-09-20', 'weekly',  0.90, 'download hub'),
  ('/applications/atlas-pro-ontv/',                               '2026-09-20', 'weekly',  0.90, 'atlas pro ontv apk'),
  ('/applications/atlas-pro-ibo/',                                '2026-09-20', 'weekly',  0.85, 'atlas pro ibo samsung'),
  ('/applications/iptv-smarters-pro/',                            '2026-09-20', 'weekly',  0.80, 'smarters pro abonnement'),

  -- Silo 3: INSTALLATION
  ('/centre-d-aide/installation/',                                '2026-09-20', 'monthly', 0.80, 'install hub'),
  ('/centre-d-aide/installation/smart-tv/',                       '2026-09-20', 'monthly', 0.85, 'atlas pro samsung tv'),
  ('/centre-d-aide/installation/fire-tv-stick/',                  '2026-09-20', 'monthly', 0.85, 'atlas pro firestick'),
  ('/centre-d-aide/installation/android-tv/',                     '2026-09-20', 'monthly', 0.80, 'atlas pro android tv'),
  ('/centre-d-aide/installation/iphone-ios/',                     '2026-09-30', 'monthly', 0.85, 'NEW: atlas pro iphone ios'),
  ('/centre-d-aide/installation/chromecast/',                     '2026-09-30', 'monthly', 0.80, 'NEW: atlas pro chromecast'),
  ('/centre-d-aide/installation/pc-windows/',                     '2026-09-30', 'monthly', 0.80, 'NEW: atlas pro windows pc mac'),
  ('/centre-d-aide/installation/mag-box/',                        '2026-09-20', 'monthly', 0.75, 'atlas pro portal mag'),

  -- Silo 4: DÉPANNAGE
  ('/centre-d-aide/depannage/',                                   '2026-09-20', 'monthly', 0.85, 'depannage hub'),
  ('/centre-d-aide/depannage/ne-peut-pas-se-connecter-au-serveur/','2026-09-30','monthly', 0.90, 'NEW: #1 keyword cluster'),
  ('/centre-d-aide/depannage/erreur-connexion-serveur/',          '2026-09-20', 'monthly', 0.85, 'server connection failed'),
  ('/centre-d-aide/depannage/erreur-de-lecture/',                 '2026-09-30', 'monthly', 0.85, 'NEW: atlas pro erreur de lecture'),
  ('/centre-d-aide/depannage/identifiant-perdu/',                 '2026-09-30', 'monthly', 0.85, 'NEW: identifiant perdu'),
  ('/centre-d-aide/depannage/ecran-noir-buffering/',              '2026-09-20', 'monthly', 0.80, 'buffering ecran noir'),
  ('/centre-d-aide/depannage/code-expire/',                       '2026-09-20', 'monthly', 0.85, 'renouvellement atlas pro'),

  -- Silo 5: CHAÎNES
  ('/chaines/',                                                   '2026-09-20', 'weekly',  0.80, 'atlas pro 4k chaînes'),
  ('/chaines/sports/',                                            '2026-09-20', 'weekly',  0.80, 'sport iptv'),
  ('/chaines/francaises/',                                        '2026-09-20', 'weekly',  0.80, 'chaînes françaises'),
  ('/chaines/internationales/',                                   '2026-09-20', 'weekly',  0.75, 'chaînes internationales'),

  -- Tutoriels & Guides
  ('/centre-d-aide/tutoriels/',                                   '2026-09-20', 'monthly', 0.75, 'tutoriels hub'),
  ('/centre-d-aide/tutoriels/configurer-ibo-player/',             '2026-09-20', 'monthly', 0.75, 'configurer ibo player'),
  ('/centre-d-aide/tutoriels/configurer-iptv-smarters/',         '2026-09-20', 'monthly', 0.75, 'configurer smarters'),
  ('/centre-d-aide/guides/',                                      '2026-09-20', 'monthly', 0.70, 'guides hub'),
  ('/centre-d-aide/guides/iptv-legal-ou-illegal/',               '2026-09-20', 'monthly', 0.70, 'iptv légal'),
  ('/centre-d-aide/guides/comparatif-box-streaming/',            '2026-09-20', 'monthly', 0.70, 'comparatif box'),

  -- Social Proof
  ('/avis-clients/',                                              '2026-09-20', 'weekly',  0.70, 'reviews'),

  -- Legal (low priority = spend crawl budget elsewhere)
  ('/cgv/',                                                       '2026-09-01', 'monthly', 0.10, 'CGV'),
  ('/mentions-legales/',                                          '2026-09-01', 'monthly', 0.10, 'mentions légales'),
  ('/confidentialite/',                                           '2026-09-01', 'monthly', 0.10, 'politique confidentialité')

ON CONFLICT (path) DO NOTHING;
