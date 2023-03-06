/* eslint-disable prettier/prettier */
import React from 'react';
import { definePreview } from '@sanity/preview-kit';

import SanityContent from '~/components/SanityContent';
import { projectDetails } from '~/sanity/projectDetails';
import type { RecordDocument } from '~/types/product';
import Layout from '~/components/Layout';
import Title from '~/components/Title';
import AlbumCover from '~/components/RecordCover';
import { secondsToMinutes } from '~/lib/secondsToMinutes';
import LikeDislike from '~/components/LikeDislike';
import ExitPreview from '~/components/ExitPreview';

export default function Record(props: RecordDocument) {
  const { _id, title, category, content, image, features, likes, dislikes } =
    props;

  return (
    <Layout>
      <article className='flex flex-col items-start gap-4 lg:flex-row lg:gap-12'>
        <div className='grid-gap-4 mx-auto grid max-w-[70vw] grid-cols-1'>
          <AlbumCover image={image} title={title} />
          <LikeDislike id={_id} likes={likes} dislikes={dislikes} />
        </div>
        <div className='flex flex-shrink-0 flex-col gap-4 md:gap-6 lg:w-2/3'>
          <header>
            {title ? <Title>{title}</Title> : null}
            {category ? (
              <h2 className='featureing-tighter bg-black text-2xl font-bold text-white'>
                {category}
              </h2>
            ) : null}
          </header>
          {content && content?.length > 0 ? (
            <SanityContent value={content} />
          ) : null}
          <a
            href='www.test.com'
            className='mr-auto w-auto border-2 border-purple-500 py-4 px-12 text-purple-500'
          >
            Try Out Now
          </a>
          {features && features?.length > 0 ? (
            <>
              <ul className='grid grid-cols-1 divide-y divide-gray-100 dark:divide-gray-900'>
                <li className='featureing-tighter py-3 text-2xl font-bold'>
                  {features?.length === 1
                    ? `1 Feature`
                    : `${features?.length} Key Features`}
                </li>
                {features.map((feature) => (
                  <li
                    key={feature._key}
                    className='flex items-center justify-between py-3'
                  >
                    <span className='text-lg'>{feature.title}</span>
                    {feature.duration ? (
                      <span className='text-sm font-bold'>
                        {secondsToMinutes(feature.duration)}
                      </span>
                    ) : null}
                  </li>
                ))}
              </ul>
            </>
          ) : null}
        </div>
      </article>
    </Layout>
  );
}

type PreviewRecordProps = {
  query: string;
  params: { [key: string]: string };
  token: string | null;
};

const { projectId, dataset } = projectDetails();
const usePreview = definePreview({ projectId, dataset });

export function PreviewRecord(props: PreviewRecordProps) {
  const { query, params, token } = props;

  const data = usePreview(token ?? null, query, params);

  return (
    <>
      <ExitPreview />
      <Record {...data} />
    </>
  );
}
