/* eslint-disable prettier/prettier */
import type { LinksFunction, LoaderArgs, MetaFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { Link, useLoaderData } from '@remix-run/react';
import groq from 'groq';
import stylesheet from '~/tailwind.css';
import { getClient } from '~/sanity/client';
import type { SanityImageSource } from '@sanity/asset-utils';
import urlBuilder from '@sanity/image-url';
import { projectDetails } from '~/sanity/projectDetails';

import { guideZ } from '~/types/content';
import AlbumCover from '~/components/RecordCover';

import { getSession } from '~/sessions';
import Layout from '~/components/Layout';
import type { HomeDocument } from '~/types/home';

import Title from '~/components/Title';
import SanityContent from '~/components/SanityContent';

export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: stylesheet }];
};

export const meta: MetaFunction = ({ data, parentsData }) => {
  const home = parentsData.root.home as HomeDocument;

  return {
    title: [data.guide.metatitle, home.siteTitle].filter(Boolean).join(' | '),
    description: [data.guide.metadescription],
    'og:image': urlBuilder(projectDetails())
      .image(data.guide.metaimage.asset._ref)
      .url(),
    'og:title': [data.guide.metatitle, home.siteTitle]
      .filter(Boolean)
      .join(' | '),
    'og:description': [data.guide.metadescription],
    'og:type': 'website',
    'og:url': 'https://howtu.ai/guides/' + data.guide.slug,
    'og:site_name': 'howtu.ai',
  };
};

// Load the `product` document with this slug
export const loader = async ({ params, request }: LoaderArgs) => {
  const session = await getSession(request.headers.get('Cookie'));
  const token = session.get('token');
  const preview = Boolean(token);

  const query = groq`*[_type == "guide" && slug.current == $slug][0]{
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

  const guide = await getClient(preview)
    // Params from the loader uses the filename
    // $slug.tsx has the params { slug: 'hello-world' }
    .fetch(query, params)
    // Parsed with Zod to validate data at runtime
    // and generate a Typescript type
    .then((res) => (res ? guideZ.parse(res) : null));

  if (!guide) {
    throw new Response('Not found', { status: 404 });
  }

  return json({
    guide,
  });
};

export default function GuidePage() {
  const { guide } = useLoaderData<typeof loader>();

  return (
    <Layout>
      <section>
        <header className='mx-auto max-w-4xl '>
          <Link className='underline' to='/guides'>
            A howtu.ai guide
          </Link>
          <Title>{guide.title}</Title>
        </header>
        {guide.image ? (
          <img
            className=' my-6 h-auto  w-full object-cover  '
            src={urlBuilder(projectDetails())
              .image(guide.image.asset._ref)
              .height(500)
              .width(1400)
              .fit('max')
              .auto('format')
              .url()}
            alt={String(guide.image.title) ?? ``}
            loading='lazy'
          />
        ) : (
          <div className='flex aspect-square w-full items-center justify-center bg-gray-100 text-gray-500'>
            {guide.image.title ?? `Missing Record art`}
          </div>
        )}
      </section>
      {guide.content && guide.content?.length > 0 ? (
        <article className='mx-auto max-w-4xl'>
          <SanityContent value={guide.content} />
        </article>
      ) : null}

      <section className='-mx-32 -mt-32 mb-32 hidden h-screen  max-h-screen border   '>
        <header className=' absolute top-1/2 z-0 mx-auto -mt-12 ml-48 max-w-6xl '>
          <Link className='underline' to='/guides'>
            A howtu.ai guide
          </Link>
          <Title>{guide.title}</Title>
        </header>
        <div className='h-full  max-h-screen overflow-hidden  bg-black object-cover  '>
          <AlbumCover image={guide.image} title={guide.title} />
        </div>
      </section>
    </Layout>
  );
}
