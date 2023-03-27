/* eslint-disable prettier/prettier */
import type { LinksFunction, LoaderArgs, MetaFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { Link, useLoaderData } from '@remix-run/react';
import groq from 'groq';
import { useRouteData } from 'remix-utils';

import AlbumCover from '~/components/RecordCover';
import Layout from '~/components/Layout';
import Title from '~/components/Title';
import { getClient } from '~/sanity/client';
import stylesheet from '~/tailwind.css';
import { categoryZ, tagsZ, productStubsZ } from '~/types/product';
import type { HomeDocument } from '~/types/home';
import SanityContent from '~/components/SanityContent';
import ProductCard from '~/components/ProductCard';

export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: stylesheet }];
};

export const meta: MetaFunction = (data) => {
  const home = data.parentsData.root.home as HomeDocument;

  return {
    title: ['Browse AI Tool Categories', home.siteTitle]
      .filter(Boolean)
      .join(' | '),
    description:
      'Browse the different types of AI tools listed by category type.',
  };
};

export const loader = async (props: LoaderArgs) => {
  const tagQuery = groq`*[_type == "tag" ]{
      title,
      slug
    }`;

  const tags = await getClient()
    .fetch(tagQuery)
    .then((res) => (res ? tagsZ.parse(res) : null));

  if (!tags) {
    throw new Response('Not found', { status: 404 });
  }

  return json({ tags });
};

export default function Index() {
  const { tags } = useLoaderData<typeof loader>();

  return (
    <Layout>
      <div className='grid grid-cols-1 gap-6 md:gap-12'>
        <header className='space-y-4'>
          <Title>All Tags</Title>
        </header>
        {tags.length > 0 ? (
          <div className=' flex flex-wrap'>
            {tags.map((tag) => (
              <Link
                key={tag._key}
                to={'/tags/' + tag.slug}
                className='rounded-xl mr-4 mb-4 w-auto  rounded-full border border-black px-2 font-mono text-4xl   lowercase dark:border-white'
              >
                {tag.title}{' '}
              </Link>
            ))}
          </div>
        ) : (
          <p> No products found </p>
        )}
      </div>
    </Layout>
  );
}
