/* eslint-disable prettier/prettier */
import React from 'react';
import AlbumCover from '~/components/RecordCover';
import PrimaryHeading from '~/components/PrimaryHeading';
import Button from '~/components/Button';

type ButtonProps = {
  text: string;
  link: string;
  alt?: boolean;
};

type HeroProps = {
  title?: string | null;
  subtitle?: string | null;
  buttons?: ButtonProps[];
  image?: any;
};

export default function PrimaryHero(props: HeroProps) {
  const { title, subtitle, buttons, image } = props;

  return (
    <section className=' mb-6 rounded-lg border-2 border-black bg-white p-4 dark:border-white dark:bg-black md:p-6   '>
      <div className='mx-auto grid md:py-8 lg:grid-cols-12  lg:gap-5 lg:py-16 '>
        <div className='order-2 mr-auto space-y-4 place-self-center md:order-1 lg:col-span-6 '>
          {title ? <PrimaryHeading>{title}</PrimaryHeading> : null}
          {subtitle ? <p>{subtitle}</p> : null}
          <div className='w-auto '>
            {buttons?.map((button, index) => (
              <Button
                key={index}
                link={button.link}
                title={button.text}
                alt={button.alt}
              />
            ))}
          </div>
        </div>

        <div className='order-1 h-auto w-full md:order-2 lg:col-start-8 lg:col-end-13 lg:mt-0 lg:flex'>
          {image ? <AlbumCover image={image} title={title} /> : null}
        </div>
      </div>
    </section>
  );
}
