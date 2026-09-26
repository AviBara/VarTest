import { getCollection, type CollectionEntry } from 'astro:content';
import { siteKey, site } from '../site';

type Name = 'destinations' | 'guides';

/** Entries of the given collection that belong to the active site, newest first. */
export async function siteEntries<N extends Name>(name: N): Promise<CollectionEntry<N>[]> {
  const all = await getCollection(name, (e) => e.id.startsWith(`${siteKey}/`));
  return all.sort((a, b) => b.data.updated.getTime() - a.data.updated.getTime());
}

export function slugOf(entry: { id: string }): string {
  return entry.id.split('/').slice(1).join('/');
}

export function pathFor(name: Name, entry: { id: string }): string {
  return `/${site.routes[name]}/${slugOf(entry)}`;
}

export function readingMinutes(body: string | undefined): number {
  const words = (body ?? '').split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

export function formatDate(d: Date, lang: string): string {
  return d.toLocaleDateString(lang === 'es' ? 'es-ES' : 'en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
