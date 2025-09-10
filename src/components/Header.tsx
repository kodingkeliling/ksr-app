'use client';

import { useState } from 'react';
import { siteConfig } from '@/data/mockData';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Beranda', href: '#home' },
    { name: 'Tentang Kami', href: '#about' },
    { name: 'Tim Kami', href: '#team' },
    { name: 'FAQ', href: '#faq' },
    // { name: 'Kontak Kami', href: '#contact' },
    // { name: 'YouTube', href: '#youtube' },
  ];

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    
    // Close mobile menu if open
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img 
              src="/img/logoksr.png" 
              alt="KSR Logo" 
              className="w-13 h-12"
              />
              </div>
              <div className="ml-3">
                <h1 className="text-xl font-bold text-red-600">{siteConfig.name}</h1>
                <p className="text-xs text-gray-600">{siteConfig.fullName}</p>
                 </div>
          </div>


          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleSmoothScroll(e, item.href)}
                className="text-gray-700 hover:text-red-600 px-3 py-2 text-sm font-medium transition-colors duration-200 cursor-pointer"
              >
                {item.name}
              </a>
            ))}
          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="#daftar"
              onClick={(e) => handleSmoothScroll(e, '#daftar')}
              className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors duration-200 font-medium cursor-pointer"
            >
              Daftar!
            </a>
          </div>
          </nav>


          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-red-600 focus:outline-none focus:text-red-600"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                  className="text-gray-700 hover:text-red-600 block px-3 py-2 text-base font-medium cursor-pointer"
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#daftar"
                onClick={(e) => handleSmoothScroll(e, '#daftar')}
                className="bg-red-600 text-white block px-3 py-2 rounded-lg text-base font-medium mt-4 text-center cursor-pointer"
              >
                Daftar!
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
