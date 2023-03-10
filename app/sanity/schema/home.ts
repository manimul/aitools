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
      name: 'logo',
      type: 'image',
    }),
    defineField({
      name: 'siteTitle',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      category: 'siteTitle',
    },
  },
});
