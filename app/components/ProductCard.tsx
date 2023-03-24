/* eslint-disable prettier/prettier */
// components/ProductItem.tsx

import { Link } from '@remix-run/react';
import type { ProductDocument } from '~/types/product';
import AlbumCover from './RecordCover';

export default function ProductCard({ product }: { product: ProductDocument }) {
  return (
    <li
      key={product._id}
      className='group relative flex flex-col transition-all duration-300 hover:-translate-y-2  '
    >
      <div className='relative overflow-hidden transition-all '>
        <AlbumCover image={product.image} title={product.title} />
      </div>
      <div className='flex flex-col space-y-2'>
        {product?.category ? (
          <span className='mt-2 font-mono text-xs uppercase opacity-60 '>
            Category: {product.category}
          </span>
        ) : null}
        {product?.slug ? (
          <Link
            prefetch='intent'
            to={'/products/' + product?.slug}
            className=' text-xl  font-bold md:text-3xl '
          >
            {product.title}
            {/* Makes this entire block clickable */}
            <span className='absolute inset-0' />
          </Link>
        ) : (
          <span className='pt-4 text-xl font-bold'>{product.title}</span>
        )}

        {product?.tags ? (
          <div className='flex flex-wrap space-x-2'>
            {product?.tags.map((tag) => (
              <Link
                key={tag._key}
                to={'/tags/' + tag.slug}
                className='rounded-xl w-auto  rounded-full border border-black px-2 font-mono text-sm   lowercase dark:border-white'
              >
                {tag.title}{' '}
              </Link>
            ))}
          </div>
        ) : null}
        {product?.metadescription ? (
          <span className='   leading-snug opacity-60 '>
            {product.metadescription}
          </span>
        ) : null}
        {product?.slug ? (
          <>
            <Link
              prefetch='intent'
              to={'/products/' + product?.slug}
              className=' text-md   md:text-lg'
            >
              <span className='mr-1 opacity-0 group-hover:opacity-100'>👉</span>
              <span className='-ml-4 group-hover:-ml-0 group-hover:underline'>
                Learn More
              </span>
              {/* Makes this entire block clickable */}
              <span className='absolute inset-0' />
            </Link>
          </>
        ) : (
          <span className='pt-4 text-xl font-bold'></span>
        )}
      </div>
    </li>
  );
}
