/* eslint-disable prettier/prettier */
import React from 'react';
import type { SanityImageSource } from '@sanity/asset-utils';
import urlBuilder from '@sanity/image-url';

import { projectDetails } from '~/sanity/projectDetails';

type RecordCoverProps = {
  title?: string | null;
  image?: SanityImageSource;
};

export default function RecordCover(props: RecordCoverProps) {
  const { title, image } = props;

  return (
    <div className=''>
      {image ? (
        <img
          className='h-auto mt-auto w-full  object-cover shadow-black transition-all duration-300  group-hover:scale-105 '
          src={urlBuilder(projectDetails())
            .image(image.asset._ref)
            .height(800)
            //.width(800)
            //.bg('ffffff')
            .fit('fillmax')
           //.auto('format')
            .url()}
          alt={String(title) ?? ``}
          loading='lazy'
        />
      ) : (
        <div className='flex aspect-square w-full items-center justify-center bg-gray-100 text-gray-500'>
          {title ?? `Missing Record art`}
        </div>
      )}
    </div>
  );
}
