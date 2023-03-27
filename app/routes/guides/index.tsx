/* eslint-disable prettier/prettier */
import type { LinksFunction, LoaderArgs, MetaFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { Link, useLoaderData } from '@remix-run/react';
import groq from 'groq';
import { guidesZ } from '~/types/content';
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
          <Title>All How.ai Guides</Title>
        </header>
        {guides.length > 0 ? (
          <section className='grid grid-cols-3'>
            {guides.map((guide) => (
              <Link to={'/guides/' + guide.slug} key={guide.title}>
                <div className=''>
                  <AlbumCover image={guide.image} title={guide.title} />
                </div>
                {guide.title}
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
