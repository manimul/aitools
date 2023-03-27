/* eslint-disable prettier/prettier */
import ThemeToggle from '~/components/ThemeToggle';
import Logo from '~/components/Logo';
import { Link } from '@remix-run/react';

export default function Header() {
  return (
    <header className='border-b border-gray-100 transition-colors duration-1000 ease-in-out dark:border-gray-900'>
      <div className='container mx-auto flex items-center justify-between p-4 lg:px-12'>
        <Logo />
        <div className='space-x-6 font-mono'>
          <Link to='/'>Home</Link>
          <Link to='/tools'>All AI Tools</Link>
          <Link to='/categories'>AI Tool Categories</Link>
          <Link to='/categories'>Howtu.ai Guides</Link>
        </div>

        <ThemeToggle />
      </div>
    </header>
  );
}
