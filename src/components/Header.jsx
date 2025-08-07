"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { navLinks } from '@/contants/appData.js';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Close menu when navigating
  useEffect(() => {
    setOpenMenu(false);
  }, [pathname]);

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`w-full h-16 sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'shadow-md bg-white/90 backdrop-blur-sm' : 'bg-white'}`}>
      <nav className="container mx-auto h-full px-4 flex-bc">
        {/* Logo */}
        <Link href={'/'} className='text-2xl font-bold text-gray-800 hover:text-blue-600 transition-colors'>
          Auto-Rental
        </Link>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setOpenMenu(!openMenu)}
          aria-label="Toggle menu"
          className="md:hidden p-2 rounded-full hover:bg-gray-100 transition-colors"
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span className={`block h-0.5 rounded-full bg-gray-900 transition-all ${openMenu ? 'rotate-45 translate-y-2 bg-blue-600' : ''}`} />
            <span className={`block h-0.5 rounded-full bg-gray-900 transition-all ${openMenu ? 'opacity-0' : 'opacity-100'}`} />
            <span className={`block h-0.5 rounded-full bg-gray-900 transition-all ${openMenu ? '-rotate-45 -translate-y-2 bg-blue-600' : ''}`} />
          </div>
        </button>
        
        {/* Navigation Links */}
        <ul className={`${openMenu ? 'absolute top-16 left-0 right-0 py-4 px-6' : 'hidden'} md:flex gap-8 bg-white md:bg-transparent shadow-lg md:shadow-none`}>
          {navLinks?.map((navlink) => {
            const isActive = pathname === navlink.link;
            return (
              <li key={navlink.link}>
                <Link
                  href={navlink.link}
                  className={`block py-2 px-1 text-lg md:text-base font-medium transition-colors ${isActive ? 'text-blue-600' : 'text-gray-600 hover:text-blue-500'}`}
                >
                  {navlink.text}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Header;