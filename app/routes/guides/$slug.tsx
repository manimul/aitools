/* eslint-disable prettier/prettier */
import type { LinksFunction, LoaderArgs } from '@remix-run/node';
import { json } from '@remix-run/node';
import { Link, useLoaderData } from '@remix-run/react';
import groq from 'groq';
import stylesheet from '~/tailwind.css';
import { getClient } from '~/sanity/client';
import { guideZ } from '~/types/content';
import AlbumCover from '~/components/RecordCover';

import { getSession } from '~/sessions';
import Layout from '~/components/Layout';
import Title from '~/components/Title';
import SanityContent from '~/components/SanityContent';

export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: stylesheet }];
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
      <section className=' -mx-32 -mt-32 mb-32 h-screen  max-h-screen border   '>
        <header className=' absolute top-1/2 z-0 mx-auto -mt-12 ml-48 max-w-6xl '>
          <Link className='underline' to='/guides'>
            A howtu.ai guide
          </Link>
          <Title>{guide.title}</Title>
        </header>
        <div className='h-full  max-h-screen  overflow-hidden '>
          <AlbumCover image={guide.image} title={guide.title} />
        </div>
      </section>
      {guide.content && guide.content?.length > 0 ? (
        <article className='mx-auto max-w-3xl'>
          <SanityContent value={guide.content} />
        </article>
      ) : null}
    </Layout>
  );
}
