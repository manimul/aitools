/* eslint-disable prettier/prettier */
// File: /categories/$slug.tsx

import { Link, useLoaderData, useParams } from '@remix-run/react';
import groq from 'groq';
import { json } from '@remix-run/node';
import type { productsZ, RecordDocument } from '~/types/product';
import { categoryZ, productStubsZ, groupedProductsZ } from '~/types/product';

import type { LinksFunction, LoaderArgs } from '@remix-run/node';
import Layout from '~/components/Layout';
import stylesheet from '~/tailwind.css';
import AlbumCover from '~/components/RecordCover';

import { getClient } from '~/sanity/client';
import Title from '~/components/Title';

export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: stylesheet }];
};

// Load the `category` document with this slug
export const loader = async (props: LoaderArgs) => {
  const { slug } = props.params;
  const categoryQuery = groq`*[_type == "category" && slug.current == $slug][0] {
    title,
    image,
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
    "tags": tags[]->{
      title,
      "slug": slug.current
    },
    image
  }`;

  const products = await getClient()
    .fetch(productsQuery, { slug })
    .then((res) => (res ? groupedProductsZ.parse(res) : null));

  if (!products) {
    throw new Response('Not found', { status: 404 });
  }

  return json({ category, products });
};

function groupProductsByTags<T>(products: T[]): {
  [key: string]: T[];
} {
  const groupedProducts: { [key: string]: T[] } = {};

  products.forEach((product: any) => {
    if (product.tags) {
      product.tags.forEach((tag: any) => {
        const tagName = tag.title;
        if (tagName) {
          if (!groupedProducts[tagName]) {
            groupedProducts[tagName] = [];
          }
          groupedProducts[tagName].push(product);
        }
      });
    }
  });

  return groupedProducts;
}

export default function Categories() {
  const { category, products } = useLoaderData<typeof loader>();
  const params = useParams();
  const groupedProducts = groupProductsByTags(products);
  console.log('Grouped products:', groupedProducts);

  return (
    <Layout>
      <div>
        <section className=' mb-6 border border-dashed p-4 md:p-6  '>
          <div className='mx-auto grid   gap-3 py-3 lg:grid-cols-12 lg:gap-8 lg:py-4 xl:gap-0'>
            <div className='mr-auto space-y-2 place-self-center lg:col-span-6'>
              <header className='space-y-4'>
                <Title>
                  The <span className='font-mono text-blue-300'>howtu.ai</span>{' '}
                  guide to AI{' '}
                  <span className='font-serif text-gray-400 '>
                    {category.title}
                  </span>{' '}
                  tools
                </Title>
              </header>
            </div>
            <div className=' lg:col-span-6 lg:mt-0 lg:flex'>
              <AlbumCover image={category.image} title={category.title} />
            </div>
          </div>
        </section>
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

        {Object.keys(groupedProducts).length > 0 ? (
          Object.keys(groupedProducts).map((tagTitle) => (
            <div key={tagTitle}>
              <h2 className='my-4 text-2xl'>{tagTitle}</h2>
              <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3'>
                {groupedProducts[tagTitle].map((product) => (
                  <div key={product._id} className='rounded border p-4'>
                    <h3 className='text-xl'>{product.title}</h3>
                    {product.image && (
                      <>
                        <AlbumCover
                          image={product.image}
                          title={product.title}
                        />
                      </>
                    )}
                    <p>{product.category}</p>
                    <Link
                      to={`/products/${product.slug}`}
                      className='underline'
                    >
                      View Product
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))
        ) : (
          <p>No products found with this tag.</p>
        )}
      </div>
    </Layout>
  );
}
