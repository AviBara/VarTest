// Per-domain configuration. Everything that differs between the three sites lives here.
// Affiliate IDs are placeholders: replace them after signing up (see README).

export const SITES = {
  america: {
    key: 'america',
    domain: 'america.uno',
    lang: 'es',
    name: 'América Uno',
    tagline: 'Guías de viaje y vida en las Américas',
    description:
      'Guías prácticas para viajar, trabajar y vivir en América: destinos, presupuestos, eSIM, seguros y consejos actualizados.',
    continent: 'América',
    accent: '#c2410c',
    accentSoft: '#fff1e6',
    accentSoftDark: '#2a2119',
    routes: { destinations: 'destinos', guides: 'guias' },
    affiliates: {
      booking: { aid: 'TODO_BOOKING_AID' },
      airalo: { ref: 'TODO_AIRALO_REF' },
      safetywing: { ref: 'TODO_SAFETYWING_REF' },
    },
    social: { twitter: '', instagram: '' },
    contactEmail: 'hola@america.uno',
  },
  europe: {
    key: 'europe',
    domain: 'europe.uno',
    lang: 'en',
    name: 'Europe Uno',
    tagline: 'Travel and living guides for Europe',
    description:
      'Practical guides to travel, work and live in Europe: destinations, budgets, eSIM, insurance and up-to-date tips.',
    continent: 'Europe',
    accent: '#1d4ed8',
    accentSoft: '#e8efff',
    accentSoftDark: '#171c2b',
    routes: { destinations: 'destinations', guides: 'guides' },
    affiliates: {
      booking: { aid: 'TODO_BOOKING_AID' },
      airalo: { ref: 'TODO_AIRALO_REF' },
      safetywing: { ref: 'TODO_SAFETYWING_REF' },
    },
    social: { twitter: '', instagram: '' },
    contactEmail: 'hello@europe.uno',
  },
  africa: {
    key: 'africa',
    domain: 'africa.uno',
    lang: 'en',
    name: 'Africa Uno',
    tagline: 'Travel and living guides for Africa',
    description:
      'Practical guides to travel, work and live in Africa: destinations, budgets, eSIM, insurance and up-to-date tips.',
    continent: 'Africa',
    accent: '#15803d',
    accentSoft: '#e7f6ec',
    accentSoftDark: '#152219',
    routes: { destinations: 'destinations', guides: 'guides' },
    affiliates: {
      booking: { aid: 'TODO_BOOKING_AID' },
      airalo: { ref: 'TODO_AIRALO_REF' },
      safetywing: { ref: 'TODO_SAFETYWING_REF' },
    },
    social: { twitter: '', instagram: '' },
    contactEmail: 'hello@africa.uno',
  },
};

export const SITE_KEYS = Object.keys(SITES);

export function getSite(key) {
  const k = (key || 'america').toLowerCase();
  if (!SITES[k]) {
    throw new Error(`Unknown SITE "${key}". Use one of: ${SITE_KEYS.join(', ')}`);
  }
  return SITES[k];
}
