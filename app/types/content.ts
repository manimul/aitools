/* eslint-disable prettier/prettier */
import { z } from 'zod';

// This is a Zod schema
// https://zod.dev/

// It will validate data at run time
// And generate Types during development
// Giving you both the flexibility of writing GROQ queries
// And the safety of Typescript
// without being limited to the shape of your Sanity Schema
export const guideZ = z.object({
  _id: z.string(),
  title: z.string().nullable(),
  metatitle: z.string().nullable().optional(),
  metadescription: z.string().nullable(),
  slug: z.string().nullable(),

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
  metaimage: z.any().nullable(),
  content: z.array(z.any()).nullable(),
  overview: z.array(z.any()).nullable(),
});

export const guidesZ = z.array(guideZ);

export const guideStubZ = z.object({
  _id: z.string(),
  title: z.string().nullable(),
  slug: z.string().nullable(),
  tags: z
    .array(
      z.object({
        _key: z.string().optional(),
        title: z.string().nullable(),
        slug: z.string().nullable(),
      })
    )
    .nullable()
    .optional(),
  metadescription: z.string().nullable(),
  image: z.any().nullable(),
});

export const guideStubsZ = z.array(guideStubZ);
