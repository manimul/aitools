/* eslint-disable prettier/prettier */
import React from 'react';
import { definePreview } from '@sanity/preview-kit';

import SanityContent from '~/components/SanityContent';
import { projectDetails } from '~/sanity/projectDetails';
import type { RecordDocument } from '~/types/product';
import Layout from '~/components/Layout';
import Title from '~/components/Title';
import AlbumCover from '~/components/RecordCover';
import ExitPreview from '~/components/ExitPreview';
import { Link } from '@remix-run/react';

export default function Record(props: RecordDocument) {
  const {
    _id,
    title,
    referral,
    category,
    tags,
    content,
    overview,
    support,
    ease,
    image,
    features,
    pros,
    cons,
    score,
    pricing,
  } = props;

  const nonYellowStar = (
    <svg
      aria-hidden='true'
      className='h-5 w-5 text-gray-300 dark:text-gray-500'
      fill='currentColor'
      viewBox='0 0 20 20'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
    </svg>
  );
  const yellowStar = (
    <svg
      aria-hidden='true'
      className='h-5 w-5 text-yellow-400'
      fill='currentColor'
      viewBox='0 0 20 20'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
    </svg>
  );

  const starIcons = Array(5)
    .fill(nonYellowStar)
    .map((star, index) => {
      if (index < (score ?? 0)) {
        return yellowStar;
      }
      return star;
    });

  return (
    <Layout>
      <section className=' mb-6 '>
        <div className='mx-auto grid   py-8 lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-0'>
          <div className='mr-auto space-y-3 place-self-center lg:col-span-7'>
            <header>
              {category ? (
                <h2 className='text-xs  uppercase tracking-widest opacity-70 '>
                  Category:{' '}
                  <Link className='underline' to='/'>
                    {category}
                  </Link>
                </h2>
              ) : null}
              {title ? <Title>{title}</Title> : null}
              {content && content?.length > 0 ? (
                <section className='my-6 text-6xl  italic  '>
                  <SanityContent value={content} />
                </section>
              ) : null}

              {tags ? (
                <>
                  {tags.map((tag) => (
                    <div
                      key={tag._key}
                      className=' mx-2 my-4  inline-flex rounded bg-green-500 py-1 px-2 lowercase'
                    >
                      <Link to={'/tags/' + tag.slug} className='text-xs'>
                        {tag.title}{' '}
                      </Link>
                    </div>
                  ))}
                </>
              ) : null}
            </header>
            {referral ? (
              <a className='text-purple-500 underline' href={referral}>
                Visit the {title} website
              </a>
            ) : null}
            {score ? (
              <section>
                <h2 className='text-2xl'>Score</h2>
                <span className='text-4xl text-yellow-500'></span>
                <div className='flex items-center'>
                  {starIcons}
                  <p className='ml-2 text-sm font-medium text-gray-500 dark:text-gray-400'>
                    {score} out of 5
                  </p>
                </div>
              </section>
            ) : null}
            {pricing ? (
              <section>
                <h2 className='text-2xl'>Price Range</h2>
                <p className='text-bold font-serif text-2xl italic text-green-600'>
                  {' '}
                  {pricing}
                </p>
              </section>
            ) : null}

            <a
              href='#'
              className='inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-center text-base font-medium text-gray-900 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800'
            >
              Read more
            </a>
          </div>
          <div className='hidden lg:col-span-5 lg:mt-0 lg:flex'>
            <AlbumCover image={image} title={title} />
          </div>
        </div>
      </section>

      <article className='flex flex-col items-start gap-4 lg:flex-row lg:gap-12'>
        <div className='grid-gap-4 sticky top-1 mx-auto grid max-w-[70vw] grid-cols-1 space-y-4'>
          <AlbumCover image={image} title={title} />
          {features && features?.length > 0 ? (
            <>
              <ul className='grid grid-cols-1 divide-y divide-gray-100 rounded border bg-[#f1f1f1] p-4 dark:divide-gray-900 dark:bg-[#111111]'>
                <li className='featureing-tighter py-3 text-2xl font-bold'>
                  {features?.length === 1
                    ? `1 Great Feature`
                    : `${features?.length} Key Features`}
                </li>
                {features.map((feature) => (
                  <li
                    key={feature._key}
                    className='flex items-center justify-between py-3'
                  >
                    <span className='text-lg'>{feature.title}</span>
                  </li>
                ))}
              </ul>
            </>
          ) : null}
        </div>
        <div className=' flex flex-shrink-0 flex-col gap-4 md:gap-4 lg:w-2/3'>
          {overview && overview?.length > 0 ? (
            <section>
              <h2 className='text-2xl'>Overview</h2>
              <SanityContent value={overview} />
            </section>
          ) : null}
          {ease && ease?.length > 0 ? (
            <section className='mt-6 border-t border-gray-400 py-6'>
              <h2 className='text-2xl '>Ease of Use</h2>
              <SanityContent value={ease} />
            </section>
          ) : null}
          {support && support?.length > 0 ? (
            <section className='mt-6 border-t border-gray-400 py-6'>
              <h2 className='text-2xl '>Customer Support</h2>
              <SanityContent value={support} />
            </section>
          ) : null}
          {referral ? (
            <a
              href={referral}
              className='mr-auto w-auto border-2 border-purple-500 py-4 px-12 text-purple-500'
            >
              Try Out Now
            </a>
          ) : null}

          {pros && cons && pros?.length > 0 && cons?.length > 0 ? (
            <section>
              <h2 className=' py-3 text-2xl font-bold'>Pros & Cons</h2>
              <div className='grid grid-cols-2 divide-x divide-gray-100  dark:divide-gray-900'>
                {pros && pros?.length > 0 ? (
                  <div className='p-4'>
                    <h2>Pros</h2>
                    <ul className='grid grid-cols-1 divide-y divide-gray-100 dark:divide-gray-900'>
                      {pros.map((pro) => (
                        <li
                          key={pro._key}
                          className='flex items-center justify-between py-3'
                        >
                          <span className='text-lg'>👍 {pro.title}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
                {cons && cons?.length > 0 ? (
                  <div className='p-4'>
                    <h2 className='text-sm uppercase'>Cons</h2>

                    <ul className=' grid grid-cols-1 divide-y divide-gray-100 dark:divide-gray-900'>
                      {cons.map((con) => (
                        <li key={con._key} className=' py-3'>
                          <h3 className='text-lg'>👎 {con.title}</h3>
                          <span className='text-lg'> {con.description}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </div>
            </section>
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
