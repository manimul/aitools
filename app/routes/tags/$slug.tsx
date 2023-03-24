/* eslint-disable prettier/prettier */
import { Link, useLoaderData, useParams } from '@remix-run/react';
import groq from 'groq';
import { json } from '@remix-run/node';
import { tagZ, productStubsZ } from '~/types/product';

import type { LinksFunction, LoaderArgs } from '@remix-run/node';
import Layout from '~/components/Layout';
import stylesheet from '~/tailwind.css';
import { getClient } from '~/sanity/client';
import AlbumCover from '~/components/RecordCover';
import Title from '~/components/Title';
import ProductCard from '~/components/ProductCard';

export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: stylesheet }];
};

// Load the `product` document with this slug
export const loader = async (props: LoaderArgs) => {
  const query = groq`*[_type == "tag" && title == "homework"][0] {
    title,
    slug
  }`;

  const tag = await getClient()
    .fetch(query)
    .then((res) => (res ? tagZ.parse(res) : null));

  if (!tag) {
    throw new Response('Not found', { status: 404 });
  }
  const { slug } = props.params;

  const query2 = groq`*[_type == "product" && references(*[_type == "tag" && slug.current == $slug]._id)] | order(publishedAt desc) [0...12]{
    _id,
    title,
    metadescription,
    "slug": slug.current,
    "category": category->title,
  
    image
  }`;

  const products = await getClient()
    .fetch(query2, { slug })
    .then((res) => (res ? productStubsZ.parse(res) : null));

  if (!products) {
    throw new Response('Not found', { status: 404 });
  }

  return json({ tag, products });
};

export default function Tags() {
  const { tag, products } = useLoaderData<typeof loader>();

  const params = useParams();

  return (
    <Layout>
      <div>
        <section className=' mb-6 border p-6  '>
          <div className='mx-auto grid   py-8 lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-0'>
            <div className='mr-auto space-y-2 place-self-center lg:col-span-7'>
              <header className='space-y-4'>
                <Title>A list of products tagged with "{params.slug}"</Title>
              </header>
            </div>
            <div className='hidden lg:col-span-5 lg:mt-0 lg:flex'>
              <img></img>{' '}
            </div>
          </div>
        </section>
        {products.length > 0 ? (
          <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3'>
            {products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        ) : (
          <p>No products found with this tag.</p>
        )}
      </div>
    </Layout>
  );
}
