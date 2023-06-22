/* eslint-disable prettier/prettier */
import React from 'react';
import type { PropsWithChildren } from 'react';

export default function SecondaryHeading(props: PropsWithChildren) {
  return props.children ? (
    <h2 className='mb-6 font-mono text-2xl capitalize md:text-6xl'>
      {props.children}
    </h2>
  ) : null;
}
