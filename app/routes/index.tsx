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
import { productStubsZ } from '~/types/product';
import type { HomeDocument } from '~/types/home';
import SanityContent from '~/components/SanityContent';
import ProductCard from '~/components/ProductCard';

export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: stylesheet }];
};

export const meta: MetaFunction = (data) => {
  const home = data.parentsData.root.home as HomeDocument;

  return {
    title: [home.title, home.siteTitle].filter(Boolean).join(' | '),
  };
};

export const loader = async (props: LoaderArgs) => {
  const query = groq`*[_type == "product"][0...12]{
    _id,
    title,
    metadescription,
    tags[]{
    _key,
    "title": @->title,
    "slug": @->slug.current
  },
    "slug": slug.current,
    "category": category->title,
    image
  }`;

  const products = await getClient()
    .fetch(query)
    .then((res) => (res ? productStubsZ.parse(res) : null));

  if (!products) {
    throw new Response('Not found', { status: 404 });
  }

  return json({ products });
};

export default function Index() {
  const { products } = useLoaderData<typeof loader>();
  const { home } = useRouteData(`root`) as { home: HomeDocument };

  return (
    <Layout>
      <div className='grid grid-cols-1 gap-6 md:gap-12'>
        <section className=' mb-6 border p-4 md:p-6  '>
          <div className='mx-auto grid  gap-4 md:py-8 lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-0'>
            <div className='order-2 mr-auto space-y-4 place-self-center md:order-1 lg:col-span-7'>
              <header className='space-y-4'>
                {home.title ? <Title>{home.title}</Title> : null}
                <p className='text-xl'>{home.subTitle} here </p>
              </header>
            </div>
            <div className='order-1 md:order-2 lg:col-span-5 lg:mt-0 lg:flex'>
              <AlbumCover image={home.image} title={home.title} />
            </div>
          </div>
        </section>
        {products.length > 0 ? (
          <ul className='grid  gap-6 space-y-12 md:grid-cols-3 md:gap-16 '>
            {products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </ul>
        ) : (
          <p>No products found</p>
        )}
      </div>
    </Layout>
  );
}
