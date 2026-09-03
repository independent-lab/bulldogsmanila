import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const stories = defineCollection({
  loader: glob({ pattern: ['**/*.md', '!_template.md'], base: './src/content/stories' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    date: z.coerce.date(),
    excerpt: z.string(),
    heroImage: z.string(),
    heroAlt: z.string(),
    socialImage: z.string().optional(),
    dogs: z.array(z.enum(['bacon', 'beer', 'baobao', 'bowser'])).min(1),
    category: z.enum(['everyday', 'heart', 'funny', 'soft']),
    feelings: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    socialLinks: z.object({
      facebook: z.string().url().or(z.literal('')).optional(),
      instagram: z.string().url().or(z.literal('')).optional(),
      tiktok: z.string().url().or(z.literal('')).optional(),
      youtube: z.string().url().or(z.literal('')).optional(),
    }).default({}),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { stories };
