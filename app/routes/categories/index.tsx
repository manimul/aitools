/* eslint-disable prettier/prettier */
import type { LinksFunction, LoaderArgs, MetaFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { Link, useLoaderData } from '@remix-run/react';
import groq from 'groq';
import { useRouteData } from 'remix-utils';

import AlbumCover from '~/components/RecordCover';
import Layout from '~/components/Layout';
import Title from '~/components/Title';
import { projectDetails } from '~/sanity/projectDetails';
import urlBuilder from '@sanity/image-url';

import { getClient } from '~/sanity/client';
import stylesheet from '~/tailwind.css';
import { categoryZ, categoriesZ, productStubsZ } from '~/types/product';
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
  const categoryQuery = groq`*[_type == "category" ]{
      title,
      image,
      slug
    }`;

  const categories = await getClient()
    .fetch(categoryQuery)
    .then((res) => (res ? categoriesZ.parse(res) : null));

  if (!categories) {
    throw new Response('Not found', { status: 404 });
  }

  return json({ categories });
};

export default function Index() {
  const { categories } = useLoaderData<typeof loader>();

  return (
    <Layout>
      <div className='grid grid-cols-1 gap-6 md:gap-12'>
        <header className='space-y-4'>
          <Title>All Categories</Title>
        </header>
        {categories.length > 0 ? (
          <section className='grid gap-6 md:grid-cols-2'>
            {categories.map((category) => (
              <Link
                to={'/categories/' + category.slug.current}
                key={category.title}
              >
                <h2
                  className='absolute z-10 bg-white p-4 font-mono text-3xl dark:bg-black
                '
                >
                  {category.title}
                </h2>

                {category.image ? (
                  <img
                    className='  h-auto  w-full object-cover  '
                    src={urlBuilder(projectDetails())
                      .image(category.image.asset._ref)
                      .height(200)
                      .width(500)
                      .fit('max')
                      .auto('format')
                      .url()}
                    alt={String(category.image.title) ?? ``}
                    loading='lazy'
                  />
                ) : (
                  <div className='flex aspect-square w-full items-center justify-center bg-gray-100 text-gray-500'>
                    {category.image.title ?? `Missing Record art`}
                  </div>
                )}
              </Link>
            ))}
          </section>
        ) : (
          <p> No products found </p>
        )}
      </div>
    </Layout>
  );
}
