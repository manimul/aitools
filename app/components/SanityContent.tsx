/* eslint-disable prettier/prettier */
import React from 'react';
import { PortableText } from '@portabletext/react';

import SanityImage from '~/components/SanityImage';
import SanityYoutube from '~/components/SanityYoutube';

type ContentProps = {
  value: any[];
};

const components = {
  types: {
    image: SanityImage,
    youtube: SanityYoutube,
  },
};

export default function SanityContent(props: ContentProps) {
  const { value } = props;

  return (
    <div className='prose font-serif dark:prose-invert md:prose-2xl prose-headings:font-mono prose-a:text-cyan-600 dark:prose-a:text-cyan-200'>
      <PortableText value={value} components={components} />
    </div>
  );
}
