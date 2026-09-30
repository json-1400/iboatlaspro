-- After editing a page's content, run this in Supabase SQL Editor:
UPDATE page_metadata
SET notes = 'Updated FAQ answers and pricing'
WHERE path = '/abonnement-atlas-pro/12-mois/';
-- ↑ The DB trigger auto-sets last_modified = now()




INSERT INTO page_metadata (path, change_freq, priority, notes)
VALUES ('/nouvelle-page/', 'monthly', 0.80, 'new page description');
-- last_modified defaults to now() automatically
