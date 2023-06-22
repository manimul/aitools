/* eslint-disable prettier/prettier */
import { Link } from '@remix-run/react';
import React from 'react';

type ButtonProps = {
  title?: string | null;
  link?: string | null;
  alt?: boolean; // adding the new prop
};

export default function Button(props: ButtonProps) {
  const { title, link, alt } = props;

  return (
    <Link
      className={`w-auto rounded-lg  border-2 p-3 px-4 font-mono text-sm uppercase 
      ${
        alt
          ? 'border-white bg-black text-white dark:bg-white dark:text-black'
          : 'border-black dark:border-white  '
      }`}
      to={link || '/'}
    >
      {title}
    </Link>
  );
}
