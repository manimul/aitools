/* eslint-disable prettier/prettier */
import { z } from 'zod';

export const homeZ = z.object({
  title: z.string().nullable(),
  siteTitle: z.string().nullable(),
  subTitle: z.string().nullable(),
  image: z.any().nullable(),
});

export type HomeDocument = z.infer<typeof homeZ>;
