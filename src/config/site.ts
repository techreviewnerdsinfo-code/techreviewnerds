// Centralised configuration for your site.  Modify these values to adjust
// branding, niches and contact details.  The rest of the code imports
// these values so they can be updated in one place.

export const BRAND_NAME = 'Tech Review Nerds';
export const DOMAIN = 'techreviewnerds.com';
export const PRIMARY_NICHE = 'laptops';
export const SUB_NICHES = ['budget', 'gaming', 'student', 'business', 'ultrabook'] as const;
export const TARGET_COUNTRY = 'United States';
export const VOICE_TONE = 'helpful, expert, concise';
export const FIGMA_LINK = '';
export const LOGO_ASSET_URL = '';
export const CONTACT_EMAIL = 'techreviewnerdsinfo@gmail.com';

export type Category = (typeof SUB_NICHES)[number];