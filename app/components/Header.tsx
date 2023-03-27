/* eslint-disable prettier/prettier */
import ThemeToggle from '~/components/ThemeToggle';
import Logo from '~/components/Logo';
import { Link } from '@remix-run/react';

export default function Header() {
  return (
    <header className='z-10 w-full border-b border-gray-100 backdrop-blur-lg transition-colors duration-1000 ease-in-out dark:border-gray-900 md:fixed'>
      <div className='container  mx-auto items-center justify-between p-4 md:flex lg:px-12'>
        <Logo />
        <div className='space-x-6 font-mono '>
          <Link to='/'>Home</Link>
          <Link to='/tools'>All AI Tools</Link>
          <Link to='/categories'>AI Tool Categories</Link>
          <Link to='/guides'>Howtu.ai Guides</Link>
        </div>

        <ThemeToggle />
      </div>
    </header>
  );
}
