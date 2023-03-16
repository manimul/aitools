/* eslint-disable prettier/prettier */

import { Home } from 'lucide-react';
import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'home',
  title: 'Home',
  type: 'document',
  icon: Home,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'subTitle',
      type: 'string',
    }),
    defineField({
      name: 'logo',
      type: 'image',
    }),
    defineField({
      name: 'image',
      type: 'image',
      options: { hotspot: true },
    }),

    defineField({
      name: 'siteTitle',
      type: 'string',
    }),
    defineField({
      name: 'metatitle',
      title: 'Meta Title',
      type: 'string',
    }),
    defineField({
      name: 'metadescription',
      title: 'Meta Description',
      type: 'string',
    }),
    defineField({
      name: 'metaimage',
      title: 'Meta Image',
      type: 'image',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      category: 'siteTitle',
    },
  },
});
