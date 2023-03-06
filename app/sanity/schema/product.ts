/* eslint-disable prettier/prettier */
import { Disc } from 'lucide-react';
import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'product',
  title: 'Record',
  type: 'document',
  icon: Disc,
  fieldsets: [
    {
      name: 'rating',
      title: 'Rating',
      options: { columns: 2 },
    },
  ],
  groups: [
    {
      name: 'details',
      title: 'Details',
    },
    {
      name: 'editorial',
      title: 'Editorial',
    },
    {
      name: 'features',
      title: 'Features',
    },
  ],
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      group: 'details',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
      },
      group: 'details',
    }),
    defineField({
      name: 'referral',
      type: 'url',
      group: 'details',
    }),
    defineField({
      name: 'likes',
      type: 'number',
      readOnly: true,
      fieldset: 'rating',
    }),
    defineField({
      name: 'dislikes',
      type: 'number',
      readOnly: true,
      fieldset: 'rating',
    }),
    defineField({
      name: 'category',
      type: 'reference',
      to: [{ type: 'category' }],
      group: 'details',
    }),
    defineField({
      name: 'tags',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'tag' } }],
      group: 'details',
    }),
    defineField({
      name: 'content',
      type: 'array',
      of: [{ type: 'block' }, { type: 'image' }],
      group: 'editorial',
    }),
    defineField({
      name: 'image',
      type: 'image',
      options: { hotspot: true },
      group: 'editorial',
    }),
    defineField({
      name: 'features',
      type: 'array',
      of: [{ type: 'feature' }],
      group: 'features',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      category: 'category.title',
      media: 'image',
    },
    prepare({ title, category, media }) {
      return {
        title,
        subtitle: category,
        media,
      };
    },
  },
});
