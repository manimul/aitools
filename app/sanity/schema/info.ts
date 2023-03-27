/* eslint-disable prettier/prettier */
import { List } from 'lucide-react';
import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'info',
  title: 'Info',
  type: 'document',
  icon: List,

  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),

    defineField({
      name: 'image',
      type: 'image',
      options: { hotspot: true },
    }),

    defineField({
      name: 'content',
      type: 'array',
      of: [{ type: 'block' }, { type: 'image' }],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
    prepare({ title, media }) {
      return {
        title,
        media,
      };
    },
  },
});
