/* eslint-disable prettier/prettier */
import type { LinksFunction, LoaderArgs, MetaFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { Link, useLoaderData } from '@remix-run/react';
import groq from 'groq';
import { projectDetails } from '~/sanity/projectDetails';

import { guidesZ } from '~/types/content';
import urlBuilder from '@sanity/image-url';

import AlbumCover from '~/components/RecordCover';

import Layout from '~/components/Layout';
import Title from '~/components/Title';
import { getClient } from '~/sanity/client';
import stylesheet from '~/tailwind.css';
import type { HomeDocument } from '~/types/home';

export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: stylesheet }];
};

export const meta: MetaFunction = (data) => {
  const home = data.parentsData.root.home;

  return {
    title: ['Learn how to use AI to your advantage', home.siteTitle]
      .filter(Boolean)
      .join(' | '),
    description:
      "Browse the different types of AI tools. Unlock the power of AI with our comprehensive guides! Whether you're a beginner or seasoned pro, explore step-by-step tutorials and insights to navigate through various AI tools with ease. Elevate your skills, understand complex technologies, and harness AI's potential to drive innovation and solutions in your projects or business, listed by category type.",
    'og:title': ['Learn how to use AI to your advantage', home.siteTitle]
      .filter(Boolean)
      .join(' | '),
    'og:description':
      "Browse the different types of AI tools. Unlock the power of AI with our comprehensive guides! Whether you're a beginner or seasoned pro, explore step-by-step tutorials and insights to navigate through various AI tools with ease. Elevate your skills, understand complex technologies, and harness AI's potential to drive innovation and solutions in your projects or business, listed by category type.",
    'og:type': 'website',
    'og:url': 'https://howtu.ai/guides',
    'og:site_name': 'howtu.ai',
  };
};

export const loader = async (props: LoaderArgs) => {
  const guideQuery = groq`*[_type == "guide" ]{
         _id,
        title,
        // GROQ can re-shape data in the request!
        "slug": slug.current,
     
        // for simplicity in this demo these are typed as "any"
        // we can make them type-safe with a little more work
        // https://www.simeongriggs.dev/type-safe-groq-queries-for-sanity-data-with-zod
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

  const guides = await getClient()
    .fetch(guideQuery)
    .then((res) => (res ? guidesZ.parse(res) : null));

  if (!guides) {
    throw new Response('Not found', { status: 404 });
  }

  return json({ guides });
};

export default function Index() {
  const { guides } = useLoaderData<typeof loader>();

  return (
    <Layout>
      <div className='grid grid-cols-1 gap-6 md:gap-12'>
        <header className='space-y-4'>
          <Title>All howtu.ai Guides</Title>
        </header>
        {guides.length > 0 ? (
          <section className='grid md:grid-cols-3'>
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
          </section>
        ) : (
          <p> No products found </p>
        )}
      </div>
    </Layout>
  );
}
