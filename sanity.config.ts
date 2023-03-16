/* eslint-disable prettier/prettier */
import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';

import { projectDetails } from '~/sanity/projectDetails';
import schema from '~/sanity/schema';
import { structure, defaultDocumentNode } from '~/sanity/structure';

export const config = defineConfig({
  ...projectDetails(),
  name: 'sanity-remix',
  title: 'Sanity Remix',
  plugins: [
    deskTool({ structure, defaultDocumentNode }),
    visionTool({
      defaultApiVersion: 'v2021-10-21',
      defaultDataset: 'production',
    }),
  ],
  basePath: `/studio`,
  schema: {
    types: schema,
  },
});
