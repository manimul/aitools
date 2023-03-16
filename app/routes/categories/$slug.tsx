/* eslint-disable prettier/prettier */
// File: /categories/$slug.tsx

import { Link, useLoaderData, useParams } from '@remix-run/react';
import groq from 'groq';
import { json } from '@remix-run/node';
import { categoryZ, productStubsZ } from '~/types/product';

import type { LinksFunction, LoaderArgs } from '@remix-run/node';
import Layout from '~/components/Layout';
import stylesheet from '~/tailwind.css';
import AlbumCover from '~/components/RecordCover';

import { getClient } from '~/sanity/client';

export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: stylesheet }];
};

// Load the `category` document with this slug
export const loader = async (props: LoaderArgs) => {
  const { slug } = props.params;
  const categoryQuery = groq`*[_type == "category" && slug.current == $slug][0] {
    title,
    slug
  }`;

  const category = await getClient()
    .fetch(categoryQuery, { slug })
    .then((res) => (res ? categoryZ.parse(res) : null));

  if (!category) {
    throw new Response('Not found', { status: 404 });
  }

  const productsQuery = groq`*[_type == "product" && references(*[_type == "category" && slug.current == $slug]._id)] | order(publishedAt desc) [0...12]{
    _id,
    title,
    metadescription,
    "slug": slug.current,
    "category": category->title,
    image
  }`;

  const products = await getClient()
    .fetch(productsQuery, { slug })
    .then((res) => (res ? productStubsZ.parse(res) : null));

  if (!products) {
    throw new Response('Not found', { status: 404 });
  }

  return json({ category, products });
};

export default function Categories() {
  const { category, products } = useLoaderData<typeof loader>();
  const params = useParams();

  return (
    <Layout>
      <div>
        <h2>A list of products from the {params.slug} category</h2>
        {products.length > 0 ? (
          <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3'>
            {products.map((product) => (
              <div key={product._id} className='rounded border p-4'>
                <h3 className='text-xl'>{product.title}</h3>
                {product.image && (
                  <>
                    <AlbumCover image={product.image} title={product.title} />
                  </>
                )}
                <p>{product.category}</p>
                <Link to={`/products/${product.slug}`} className='underline'>
                  View Product
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <p>No products found with this tag.</p>
        )}
      </div>
    </Layout>
  );
}
