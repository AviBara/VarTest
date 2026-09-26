// UI strings per language. Content itself lives in Markdown; this is only chrome.
const strings = {
  es: {
    nav: { destinations: 'Destinos', guides: 'Guías', about: 'Sobre nosotros' },
    home: {
      heroTitle: (continent: string) => `Viaja, trabaja y vive en ${continent}`,
      heroLead:
        'Guías prácticas escritas para gente real: qué llevar, cuánto cuesta, cómo moverse y qué evitar.',
      ctaDestinations: 'Explorar destinos',
      ctaGuides: 'Ver guías',
      latestGuides: 'Guías recientes',
      featuredDestinations: 'Destinos destacados',
      allDestinations: 'Todos los destinos',
      allGuides: 'Todas las guías',
    },
    destinations: {
      title: 'Destinos',
      lead: 'Países y ciudades con información práctica: presupuesto, mejor época, conectividad y seguridad.',
      budgetLabel: 'Presupuesto diario',
      bestTime: 'Mejor época',
      currency: 'Moneda',
      language: 'Idioma',
      visa: 'Visado',
    },
    guides: {
      title: 'Guías',
      lead: 'Consejos que aplican a todo el continente: conectividad, seguros, dinero y planificación.',
      updated: 'Actualizado',
      readingTime: 'min de lectura',
    },
    affiliate: {
      title: 'Prepara tu viaje',
      booking: 'Buscar alojamiento',
      bookingDesc: 'Hoteles, hostales y apartamentos con cancelación gratuita.',
      esim: 'Comprar eSIM',
      esimDesc: 'Datos móviles desde que aterrizas, sin cambiar de tarjeta.',
      insurance: 'Seguro de viaje',
      insuranceDesc: 'Cobertura médica flexible para viajes largos y nómadas.',
      disclosure:
        'Algunos enlaces son de afiliado: si compras a través de ellos, recibimos una comisión sin costo extra para ti. Esto financia el sitio.',
    },
    footer: {
      about: 'Sobre nosotros',
      privacy: 'Privacidad',
      disclosure: 'Afiliados',
      contact: 'Contacto',
      rights: 'Todos los derechos reservados.',
    },
    notFound: { title: 'Página no encontrada', lead: 'El enlace no existe o fue movido.', back: 'Volver al inicio' },
    breadcrumbHome: 'Inicio',
  },
  en: {
    nav: { destinations: 'Destinations', guides: 'Guides', about: 'About' },
    home: {
      heroTitle: (continent: string) => `Travel, work and live in ${continent}`,
      heroLead:
        'Practical guides written for real people: what to pack, what it costs, how to get around and what to avoid.',
      ctaDestinations: 'Explore destinations',
      ctaGuides: 'Read the guides',
      latestGuides: 'Latest guides',
      featuredDestinations: 'Featured destinations',
      allDestinations: 'All destinations',
      allGuides: 'All guides',
    },
    destinations: {
      title: 'Destinations',
      lead: 'Countries and cities with practical information: budget, best time to go, connectivity and safety.',
      budgetLabel: 'Daily budget',
      bestTime: 'Best time',
      currency: 'Currency',
      language: 'Language',
      visa: 'Visa',
    },
    guides: {
      title: 'Guides',
      lead: 'Advice that applies across the continent: connectivity, insurance, money and planning.',
      updated: 'Updated',
      readingTime: 'min read',
    },
    affiliate: {
      title: 'Plan your trip',
      booking: 'Find a place to stay',
      bookingDesc: 'Hotels, hostels and apartments with free cancellation.',
      esim: 'Get an eSIM',
      esimDesc: 'Mobile data the moment you land, no SIM swap needed.',
      insurance: 'Travel insurance',
      insuranceDesc: 'Flexible medical cover for long trips and nomads.',
      disclosure:
        'Some links are affiliate links: if you buy through them we earn a commission at no extra cost to you. This keeps the site running.',
    },
    footer: {
      about: 'About',
      privacy: 'Privacy',
      disclosure: 'Affiliates',
      contact: 'Contact',
      rights: 'All rights reserved.',
    },
    notFound: { title: 'Page not found', lead: 'The link does not exist or has moved.', back: 'Back to home' },
    breadcrumbHome: 'Home',
  },
} as const;

export type Lang = keyof typeof strings;
export function t(lang: string) {
  return strings[(lang as Lang) in strings ? (lang as Lang) : 'en'];
}
