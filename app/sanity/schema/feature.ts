/* eslint-disable prettier/prettier */
import { defineField, defineType } from 'sanity';

import { secondsToMinutes } from '~/lib/secondsToMinutes';
import Duration from '~/sanity/components/Duration';

export default defineType({
  name: 'feature',
  title: 'Feature',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'duration',
      description: 'Time in seconds',
      type: 'number',
      components: {
        input: Duration,
      },
    }),
  ],
  preview: {
    select: {
      title: 'title',
      duration: 'duration',
    },
    prepare({ title, duration }) {
      return {
        title,
        subtitle: secondsToMinutes(duration),
      };
    },
  },
});
