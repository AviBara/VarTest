// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { getSite } from './src/sites.js';

// One codebase, three domains. Pick the site with SITE=america|europe|africa.
const site = getSite(process.env.SITE);

export default defineConfig({
  site: `https://${site.domain}`,
  outDir: `./dist/${site.key}`,
  trailingSlash: 'never',
  build: { format: 'file' },
  integrations: [sitemap()],
  vite: {
    define: { 'import.meta.env.SITE_KEY': JSON.stringify(site.key) },
  },
});
