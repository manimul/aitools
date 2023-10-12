/* eslint-disable prettier/prettier */
// File: /categories/$slug.tsx

import { Link, useLoaderData, useParams } from '@remix-run/react';
import groq from 'groq';
import { json } from '@remix-run/node';
import type { productsZ, RecordDocument } from '~/types/product';
import { projectDetails } from '~/sanity/projectDetails';

import { categoryZ, productStubsZ, groupedProductsZ } from '~/types/product';

import type { LinksFunction, LoaderArgs, MetaFunction } from '@remix-run/node';
import Layout from '~/components/Layout';
import stylesheet from '~/tailwind.css';
import AlbumCover from '~/components/RecordCover';

import { getClient } from '~/sanity/client';
import Title from '~/components/Title';
import urlBuilder from '@sanity/image-url';
import SanityContent from '~/components/SanityContent';
import ProductCard from '~/components/ProductCard';
import { HomeDocument } from '~/types/home';

export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: stylesheet }];
};

export const meta: MetaFunction = ({ data, parentsData }) => {
  const home = parentsData.root.home as HomeDocument;

  return {
    title: ['Explore ' + data.category.title + ' tools', home.siteTitle]
      .filter(Boolean)
      .join(' | '),
    description: [
      'Explore top-rated ' +
        data.category.title +
        ' tools and elevate your projects with our comprehensive selection. Dive into detailed guides and expert reviews to choose the best ' +
        data.category.title +
        ' solution tailored to your needs.',
    ],
    'og:image': urlBuilder(projectDetails())
      .image(data.category.image.asset._ref)
      .url(),
    'og:title': ['Explore ' + data.category.title + ' tools', home.siteTitle]
      .filter(Boolean)
      .join(' | '),
    'og:description':
      'Unlock the power of artificial intelligence with accessible AI solutions at howtu.ai. Elevate your everyday tasks and boost productivity by exploring our wide range of user-friendly tools, comprehensive guides, and expert insights designed to simplify your personal and professional life. Begin your AI journey with us today!',
    'og:type': 'website',
    'og:url': 'https://howtu.ai/categories/' + data.category.slug.current,
    'og:site_name': 'howtu.ai',
  };
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
    content,
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
          <>
            <h2 className='mt-12 mb-6 font-mono text-6xl capitalize'>
              New tools
            </h2>
            <div className='grid gap-6 md:grid-cols-4 md:gap-16'>
              {products.slice(0, 4).map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
          </>
        ) : (
          <p>No products found with this tag.</p>
        )}

        {Object.keys(groupedProducts).length > 0 ? (
          Object.keys(groupedProducts).map((tagTitle) => (
            <div className='my-12  border-t-2 border-dashed' key={tagTitle}>
              <h2 className='mt-12 mb-6 font-mono text-6xl capitalize'>
                {tagTitle}
              </h2>
              <div className='grid  gap-6 md:grid-cols-3 md:gap-16'>
                {groupedProducts[tagTitle].map((product) => (
                  <ProductCard key={product._id} product={product} />
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
