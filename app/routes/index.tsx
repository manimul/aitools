/* eslint-disable prettier/prettier */
import type { LinksFunction, LoaderArgs, MetaFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { Link, useLoaderData } from '@remix-run/react';
import groq from 'groq';
import { useRouteData } from 'remix-utils';
import urlBuilder from '@sanity/image-url';
import { projectDetails } from '~/sanity/projectDetails';

import AlbumCover from '~/components/RecordCover';
import Layout from '~/components/Layout';
import Title from '~/components/Title';
import { getClient } from '~/sanity/client';
import stylesheet from '~/tailwind.css';
import { categoriesZ, productStubsZ } from '~/types/product';
import type { HomeDocument } from '~/types/home';
import SanityContent from '~/components/SanityContent';
import ProductCard from '~/components/ProductCard';
import { guidesZ, infosZ } from '~/types/content';

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
  const query = groq`*[_type == "product"][0...4]{
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

  const categoryQuery = groq`*[_type == "category"][0...4]{
    title,
    image,
    slug
  }`;

  const infoQuery = groq`*[_type == "info"][0...4]{
        _id,

  title,
  image,
content
}`;

  const guideQuery = groq`*[_type == "guide"][0...4]{
    _id,
    title,
    "slug": slug.current,
    image,
    content,
    metatitle,
    metadescription,
    metaimage,
    overview,
    tags[]{
      _key,
      "title": @->title,
      "slug": @->slug.current
    }
  }`;

  const [products, categories, guides, infos] = await Promise.all([
    getClient()
      .fetch(query)
      .then((res) => (res ? productStubsZ.parse(res) : null)),
    getClient()
      .fetch(categoryQuery)
      .then((res) => (res ? categoriesZ.parse(res) : null)),
    getClient()
      .fetch(guideQuery)
      .then((res) => (res ? guidesZ.parse(res) : null)),
    getClient()
      .fetch(infoQuery)
      .then((res) => (res ? infosZ.parse(res) : null)),
  ]);

  if (!products || !categories || !guides || !infos) {
    throw new Response('Not found', { status: 404 });
  }

  return json({ products, categories, guides, infos });
};

export default function Index() {
  const { products, categories, guides, infos } =
    useLoaderData<typeof loader>();
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
        {guides.length > 0 ? (
          <section>
            <h2 className='mb-6 font-mono text-2xl capitalize md:text-6xl'>
              Newest howtu.ai Guides
            </h2>
            <div className='grid md:grid-cols-3'>
              {guides.map((guide) => (
                <Link
                  to={'/guides/' + guide.slug}
                  key={guide.title}
                  className='group grid items-center gap-4 border p-2 transition-all duration-300 hover:-translate-y-2 hover:border-dashed md:grid-cols-2 '
                >
                  <div className=''>
                    {guide.image ? (
                      <img
                        className='h-auto w-full  object-cover shadow-black transition-all duration-300  group-hover:scale-105 '
                        src={urlBuilder(projectDetails())
                          .image(guide.image.asset._ref)
                          .height(300)
                          .width(400)
                          .fit('max')
                          .auto('format')
                          .url()}
                        alt={String(guide.title) ?? ``}
                        loading='lazy'
                      />
                    ) : (
                      <div className='flex aspect-square w-full items-center justify-center bg-gray-100 text-gray-500'>
                        {guide.title ?? `Missing thumbnail`}
                      </div>
                    )}
                  </div>
                  <div>
                    {' '}
                    <h2 className='text-2xl'> {guide.title}</h2>
                    <span className='opacity-50  group-hover:underline group-hover:opacity-100'>
                      Read the guide
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        ) : (
          <p> No products found </p>
        )}
        {products.length > 0 ? (
          <section className='my-12 border-t-2 border-dashed pt-12 '>
            {' '}
            <h2 className='mb-6 font-mono text-2xl capitalize md:text-6xl'>
              Newest Tool Reviews
            </h2>
            <ul className='mb-12  grid gap-6 md:grid-cols-4 md:gap-16 '>
              {products.slice(0, 4).map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </ul>
          </section>
        ) : (
          <p>No products found</p>
        )}

        <section>
          {' '}
          {categories.length > 0 ? (
            <section className='my-12 border-t-2 border-dashed pt-12 '>
              <h2 className='mb-6 font-mono text-2xl capitalize md:text-6xl'>
                Newest Categories
              </h2>
              <div className='grid gap-6 md:grid-cols-2'>
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
              </div>
            </section>
          ) : (
            <p> No products found </p>
          )}
        </section>

        <section>
          {' '}
          {infos.length > 0 ? (
            <section className='my-12 border-t-2 border-dashed pt-12 '>
              <div>
                {infos.map((info) => (
                  <div
                    key={info.title}
                    className='my-12  grid gap-6 border-t-2 border-dashed pt-12 md:grid-cols-2 '
                  >
                    {info.image ? (
                      <div>
                        {' '}
                        <h2
                          className=' z-10  p-4 font-mono text-3xl 
                '
                        >
                          {info.title}
                        </h2>
                        <img
                          className='  h-auto  w-full object-cover  '
                          src={urlBuilder(projectDetails())
                            .image(info.image.asset._ref)
                            .height(500)
                            .width(500)
                            .fit('max')
                            .auto('format')
                            .url()}
                          alt={String(info.image.title) ?? ``}
                          loading='lazy'
                        />
                      </div>
                    ) : (
                      <div className='flex aspect-square w-full items-center justify-center bg-gray-100 text-gray-500'>
                        {info.image.title ?? `Missing Record art`}
                      </div>
                    )}

                    {info.content && info.content?.length > 0 ? (
                      <section id='overview'>
                        <SanityContent value={info.content} />
                      </section>
                    ) : null}
                  </div>
                ))}
              </div>
            </section>
          ) : (
            <p> No products found </p>
          )}
        </section>
      </div>
    </Layout>
  );
}
