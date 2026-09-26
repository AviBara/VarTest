// Runtime access to the active site's config (resolved at build time from SITE env).
import { getSite, SITES } from './sites.js';

export type SiteKey = keyof typeof SITES;
export type SiteConfig = (typeof SITES)[SiteKey];

const key = (import.meta.env.SITE_KEY as SiteKey) ?? 'america';
export const site: SiteConfig = getSite(key);
export const siteKey: SiteKey = key;
