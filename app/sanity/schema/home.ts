/* eslint-disable prettier/prettier */

import { Home } from 'lucide-react';
import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'home',
  title: 'Home',
  type: 'document',
  icon: Home,
  groups: [
    {
      name: 'Hero',
      title: 'Hero',
    },
    {
      name: 'contentSection',
      title: 'Content Section',
    },

    {
      name: 'useCaseSection',
      title: 'Use Case Section',
    },
    {
      name: 'profileTools',
      title: 'Profile Tools',
    },
    {
      name: 'featuredGuide',
      title: 'Featured Guide',
    },
    {
      name: 'exploreCategories',
      title: 'Explore Categories',
    },
    {
      name: 'faq',
      title: 'FAQ Section',
    },
    {
      name: 'seo',
      title: 'SEO',
    },
  ],
  fields: [
    defineField({
      name: 'siteTitle',
      type: 'string',
    }),

    // Hero Section
    defineField({
      name: 'title',
      type: 'string',
      group: 'Hero',
    }),
    defineField({
      name: 'subTitle',
      type: 'string',
      group: 'Hero',
    }),
    defineField({
      name: 'logo',
      type: 'image',
    }),
    defineField({
      name: 'image',
      type: 'image',
      options: { hotspot: true },
      group: 'Hero',
    }),

    // Content Section
    defineField({
      name: 'showContentSection',
      type: 'boolean',
      group: 'contentSection',
      initialValue: true,
    }),
    defineField({
      name: 'contentSectionTitle',
      type: 'string',
      group: 'contentSection',
    }),
    defineField({
      name: 'contentSectionBody',
      type: 'array',
      of: [{ type: 'block' }, { type: 'image' }],
      group: 'contentSection',
    }),
    defineField({
      name: 'contentSectionImage',
      type: 'image',
      options: { hotspot: true },
      group: 'contentSection',
    }),

    // Use Case Section
    defineField({
      name: 'showUseCaseSection',
      type: 'boolean',
      group: 'useCaseSection',
      initialValue: true,
    }),

    defineField({
      name: 'useCaseSectionTitle',
      type: 'string',
      group: 'useCaseSection',
    }),

    defineField({
      name: 'useCaseReference',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'usecase' } }],
      group: 'useCaseSection',
    }),

    // Profile Tools
    defineField({
      name: 'showProfileTools',
      type: 'boolean',
      group: 'profileTools',
      initialValue: true,
    }),
    defineField({
      name: 'profileToolsTitle',
      type: 'string',
      group: 'profileTools',
    }),

    // Featured Guide
    defineField({
      name: 'showFeaturedGuide',
      type: 'boolean',
      group: 'featuredGuide',
      initialValue: true,
    }),

    defineField({
      name: 'selectFeaturedGuide',
      type: 'reference',
      to: { type: 'guide' },
      group: 'featuredGuide',
    }),

    // Explore Categories
    defineField({
      name: 'showExploreCategories',
      type: 'boolean',
      group: 'exploreCategories',
      initialValue: true,
    }),

    defineField({
      name: 'selectExploreCategories',
      type: 'reference',
      to: { type: 'category' },
      group: 'exploreCategories',
    }),

    // FAQ Section
    defineField({
      name: 'showFAQ',
      type: 'boolean',
      group: 'faq',
      initialValue: true,
    }),

    defineField({
      name: 'faqTitle',
      type: 'string',
      group: 'faq',
    }),

    defineField({
      name: 'faqBody',
      type: 'array',
      of: [{ type: 'block' }, { type: 'image' }],
      group: 'faq',
    }),

    // SEO Section

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
      group: 'seo',
    }),
    defineField({
      name: 'metaimage',
      title: 'Meta Image',
      type: 'image',
      group: 'seo',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      category: 'siteTitle',
    },
  },
});
