/* eslint-disable prettier/prettier */
import { z } from 'zod';

// This is a Zod schema
// https://zod.dev/

// It will validate data at run time
// And generate Types during development
// Giving you both the flexibility of writing GROQ queries
// And the safety of Typescript
// without being limited to the shape of your Sanity Schema
export const productZ = z.object({
  _id: z.string(),
  title: z.string().nullable(),
  slug: z.string().nullable(),
  referral: z.string().nullable(),
  likes: z.number(),
  dislikes: z.number(),
  score: z.number(),
  pricing: z.string().nullable(),

  category: z.string().nullable(),
  features: z
    .array(
      z.object({
        _key: z.string(),
        title: z.string().nullable(),
        duration: z.number().nullable(),
      })
    )
    .nullable(),
  pros: z
    .array(
      z.object({
        _key: z.string(),
        title: z.string().nullable(),
      })
    )
    .nullable(),
  cons: z
    .array(
      z.object({
        _key: z.string(),
        title: z.string().nullable(),
      })
    )
    .nullable(),
  tags: z
    .array(
      z.object({
        _key: z.string(),
        title: z.string().nullable(),
        slug: z.string().nullable(),
      })
    )
    .nullable(),
  // ...being a touch lazy here, these could be more strongly typed
  image: z.any().nullable(),
  content: z.array(z.any()).nullable(),
  overview: z.array(z.any()).nullable(),
  ease: z.array(z.any()).nullable(),
  support: z.array(z.any()).nullable(),
});

export type RecordDocument = z.infer<typeof productZ>;

export const productsZ = z.array(productZ);

export const productStubZ = z.object({
  _id: z.string(),
  title: z.string().nullable(),
  slug: z.string().nullable(),
  category: z.string().nullable(),
  image: z.any().nullable(),
});

export const productStubsZ = z.array(productStubZ);
