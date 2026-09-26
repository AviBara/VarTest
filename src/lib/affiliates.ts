import { site } from '../site';

// Builds outbound links. If an affiliate id is still a TODO placeholder the plain
// (non-affiliate) URL is used so nothing on the site is ever broken.
const isSet = (v: string) => v && !v.startsWith('TODO');

export function bookingUrl(query?: string): string {
  const u = new URL('https://www.booking.com/searchresults.html');
  if (query) u.searchParams.set('ss', query);
  if (isSet(site.affiliates.booking.aid)) u.searchParams.set('aid', site.affiliates.booking.aid);
  return u.toString();
}

export function esimUrl(): string {
  const ref = site.affiliates.airalo.ref;
  return isSet(ref) ? `https://www.airalo.com/?ref=${encodeURIComponent(ref)}` : 'https://www.airalo.com/';
}

export function insuranceUrl(): string {
  const ref = site.affiliates.safetywing.ref;
  return isSet(ref)
    ? `https://safetywing.com/nomad-insurance?referenceID=${encodeURIComponent(ref)}`
    : 'https://safetywing.com/nomad-insurance';
}
