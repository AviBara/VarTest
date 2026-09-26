import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Entry ids look like "america/mexico": the first segment is the site key.
const destinations = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/destinations' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    country: z.string().optional(),
    featured: z.boolean().default(false),
    budgetPerDay: z.string().optional(),
    bestTime: z.string().optional(),
    currency: z.string().optional(),
    language: z.string().optional(),
    visa: z.string().optional(),
    bookingQuery: z.string().optional(),
    updated: z.coerce.date(),
  }),
});

const guides = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/guides' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string().optional(),
    featured: z.boolean().default(false),
    updated: z.coerce.date(),
  }),
});

export const collections = { destinations, guides };
