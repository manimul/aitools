/* eslint-disable prettier/prettier */
import { List } from 'lucide-react';
import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'guide',
  title: 'Guide',
  type: 'document',
  icon: List,

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
      name: 'seo',
      title: 'SEO',
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
      name: 'tags',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'tag' } }],
      group: 'details',
    }),
    defineField({
      name: 'image',
      type: 'image',
      options: { hotspot: true },
      group: 'editorial',
    }),

    defineField({
      name: 'content',
      type: 'array',
      of: [{ type: 'block' }, { type: 'image' }],
      group: 'editorial',
    }),
    defineField({
      name: 'overview',
      type: 'array',
      of: [{ type: 'block' }, { type: 'image' }],
      group: 'editorial',
    }),

    defineField({
      name: 'metatitle',
      title: 'Title',
      type: 'string',
      group: 'seo',
    }),
    defineField({
      name: 'metadescription',
      title: 'Description',
      type: 'string',
      validation: (Rule) =>
        Rule.max(150).warning(
          `A descriptions shouldn't be more than 150 characters.`
        ),

      group: 'seo',
    }),
    defineField({
      name: 'metaimage',
      title: 'Image',
      type: 'image',
      group: 'seo',
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
