/* eslint-disable prettier/prettier */
import React from 'react';
import type { PropsWithChildren } from 'react';

export default function PrimaryHeading(props: PropsWithChildren) {
  return props.children ? (
    <h1 className='text-bold max-w-4xl  font-mono text-4xl font-bold md:text-3xl lg:text-4xl xl:text-6xl'>
      {props.children}
    </h1>
  ) : null;
}
