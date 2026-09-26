// Builds every site in sites.js into dist/<key>. Usage: npm run build:all
import { spawnSync } from 'node:child_process';
import { SITE_KEYS } from '../src/sites.js';

const only = process.argv.slice(2);
const keys = only.length ? only : SITE_KEYS;
for (const key of keys) {
  console.log(`\n=== Building ${key} ===`);
  const r = spawnSync('npx', ['astro', 'build'], { stdio: 'inherit', env: { ...process.env, SITE: key } });
  if (r.status !== 0) process.exit(r.status ?? 1);
}
