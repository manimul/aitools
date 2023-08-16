/* eslint-disable prettier/prettier */
import { Users } from 'lucide-react';
import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'usecase',
  title: 'Use Case',
  type: 'document',
  icon: Users,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
      },
    }),
  ],
});
