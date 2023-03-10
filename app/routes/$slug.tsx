/* eslint-disable prettier/prettier */
import type {
  ActionFunction,
  LinksFunction,
  LoaderArgs,
  MetaFunction,
} from '@remix-run/node';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import groq from 'groq';
import { PreviewSuspense } from '@sanity/preview-kit';

import stylesheet from '~/tailwind.css';
import Record, { PreviewRecord } from '~/components/Product';
import { getClient, writeClient } from '~/sanity/client';
import { productZ } from '~/types/product';
import { getSession } from '~/sessions';
import type { HomeDocument } from '~/types/home';

export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: stylesheet }];
};

export const meta: MetaFunction = ({ data, parentsData }) => {
  const home = parentsData.root.home as HomeDocument;

  return {
    title: [data.product.title, home.siteTitle].filter(Boolean).join(' | '),
  };
};

// Perform a `like` or `dislike` mutation on a `product` document
export const action: ActionFunction = async ({ request }) => {
  if (request.method !== 'POST') {
    return json({ message: 'Method not allowed' }, 405);
  }

  const body = await request.formData();
  const id = String(body.get('id'));
  const action = String(body.get('action'));

  if (id) {
    switch (action) {
      case 'LIKE':
        return await writeClient
          .patch(id)
          .setIfMissing({ likes: 0 })
          .inc({ likes: 1 })
          .commit()
          .then(({ likes, dislikes }) => ({
            likes: likes ?? 0,
            dislikes: dislikes ?? 0,
          }));
      case 'DISLIKE':
        return await writeClient
          .patch(id)
          .setIfMissing({ dislikes: 0 })
          .inc({ dislikes: 1 })
          .commit()
          .then(({ likes, dislikes }) => ({
            likes: likes ?? 0,
            dislikes: dislikes ?? 0,
          }));
      default:
        return json({ message: 'Invalid action' }, 400);
    }
  }

  return json({ message: 'Bad request' }, 400);
};

// Load the `product` document with this slug
export const loader = async ({ params, request }: LoaderArgs) => {
  const session = await getSession(request.headers.get('Cookie'));
  const token = session.get('token');
  const preview = Boolean(token);

  const query = groq`*[_type == "product" && slug.current == $slug][0]{
    _id,
    title,
    // GROQ can re-shape data in the request!
    "slug": slug.current,
    "category": category->title,
    // coalesce() returns the first value that is not null
    // so we can ensure we have at least a zero
    "likes": coalesce(likes, 0),
    "dislikes": coalesce(dislikes, 0),
    // for simplicity in this demo these are typed as "any"
    // we can make them type-safe with a little more work
    // https://www.simeongriggs.dev/type-safe-groq-queries-for-sanity-data-with-zod
    image,
    content,
    overview,
    score,
    referral,
    pricing,
    ease,
    support,
    // this is how we extract values from arrays
    features[]{
      _key,
      title,
      duration
    },
    pros[]{
      _key,
      title,
    },
    cons[]{
      _key,
      title,
    },    tags[]{
      _key,
      title,
      slug
    }
  }`;

  const product = await getClient(preview)
    // Params from the loader uses the filename
    // $slug.tsx has the params { slug: 'hello-world' }
    .fetch(query, params)
    // Parsed with Zod to validate data at runtime
    // and generate a Typescript type
    .then((res) => (res ? productZ.parse(res) : null));

  if (!product) {
    throw new Response('Not found', { status: 404 });
  }

  return json({
    product,
    preview,
    query: preview ? query : null,
    params: preview ? params : null,
    // Note: This makes the token available to the client if they have an active session
    // This is useful to show live preview to unauthenticated users
    // If you would rather not, replace token with `null` and it will rely on your Studio auth
    token: preview ? token : null,
  });
};

export default function RecordPage() {
  const { product, preview, query, params, token } =
    useLoaderData<typeof loader>();

  if (preview && query && params && token) {
    return (
      <PreviewSuspense fallback={<Record {...product} />}>
        <PreviewRecord query={query} params={params} token={token} />
      </PreviewSuspense>
    );
  }

  return <Record {...product} />;
}
