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
      name: 'referral',
      type: 'url',
      group: 'details',
    }),

    defineField({
      name: 'score',
      type: 'number',
      fieldset: 'rating',
    }),
    defineField({
      name: 'pricing',
      type: 'string',
      group: 'details',
    }),
    defineField({
      title: 'Is there a free tier available?',
      name: 'free',
      type: 'boolean',
      group: 'details',
    }),
    defineField({
      name: 'specialdeal',
      title: 'Special Deal',
      type: 'string',
      group: 'details',
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
      name: 'image',
      type: 'image',
      options: { hotspot: true },
      group: 'editorial',
    }),
    defineField({
      name: 'imagealt',
      title: 'Image alt text',
      type: 'string',
      group: 'editorial',
    }),
    defineField({
      name: 'gallery',
      type: 'array',
      of: [{ type: 'image' }],
      group: 'editorial',
    }),
    defineField({
      name: 'content',
      title: 'Short Description',
      type: 'array',
      of: [{ type: 'block' }, { type: 'image' }],
      group: 'editorial',
    }),
    defineField({
      name: 'overview',
      title: 'Full Description',
      type: 'array',
      of: [{ type: 'block' }, { type: 'image' }],
      group: 'editorial',
    }),
    defineField({
      name: 'ease',
      title: 'Ease of Use',
      type: 'array',
      of: [{ type: 'block' }, { type: 'image' }],
      group: 'editorial',
    }),
    defineField({
      name: 'support',
      type: 'array',
      of: [{ type: 'block' }, { type: 'image' }],
      group: 'editorial',
    }),
    defineField({
      name: 'background',
      title: 'Background Information',
      type: 'array',
      of: [{ type: 'block' }, { type: 'image' }],
      group: 'editorial',
    }),

    defineField({
      name: 'features',
      type: 'array',
      of: [{ type: 'feature' }],
      group: 'features',
    }),

    defineField({
      name: 'pros',
      type: 'array',
      of: [{ type: 'feature' }],
      group: 'features',
    }),
    defineField({
      name: 'cons',
      type: 'array',
      of: [{ type: 'feature' }],
      group: 'features',
    }),
    defineField({
      name: 'metatitle',
      title: 'Meta Title',
      type: 'string',
      group: 'seo',
    }),
    defineField({
      name: 'metadescription',
      title: 'Meta Description',
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
