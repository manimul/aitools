/* eslint-disable prettier/prettier */
import type { LoaderArgs, LoaderFunction } from '@remix-run/node';
import groq from 'groq';
import { getClient } from '~/sanity/client';
type Item = {
  slug: string;
};
interface Slug {
  slug?: string;
}

const slugsQuery = groq`*[defined(slug.current)]{
  _type == "product" => {
    "slug": "tools/" + slug.current
  },
  _type == "category" => {
    "slug": "categories/" + slug.current
  },
  _type == "tag" => {
    "slug": "tags/" + slug.current
  },
}`;

const getSlugs = async () => {
  const slugList = await getClient().fetch(slugsQuery);

  return slugList;
};

const renderXML = (slugs: { slug?: string }[]) => {
  const url = 'https://www.howtu.ai';

  const sourceXML = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
<loc>https://www.howtu.ai/</loc>
</url>
<url>
<loc>https://www.howtu.ai/products</loc>
</url>
<url>
<loc>https://www.howtu.ai/tags</loc>
</url>
<url>
<loc>https://www.howtu.ai/categories</loc>
</url>
      ${slugs
        .filter((item) => item.slug)
        .map(
          (item) => `<url>
        <loc>${url}/${item.slug!.trim()}</loc>
      </url>`
        )}
    </urlset>`;

  return sourceXML;
};

export const loader: LoaderFunction = async ({ request }: LoaderArgs) => {
  const slugs = await getSlugs();
  const xmlString = renderXML(slugs);

  return new Response(xmlString, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=86400',
    },
  });
};
