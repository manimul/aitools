/* eslint-disable prettier/prettier */
import { Users } from 'lucide-react';
import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'faq',
  title: 'Faq Item',
  type: 'document',
  icon: Users,
  fields: [
    defineField({
      name: 'question',
      type: 'string',
    }),
    defineField({
      name: 'answer',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'question',
      },
    }),
  ],
});
