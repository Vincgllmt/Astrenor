'use client';

import Link from 'next/link';
import { useState } from 'react';
import ThemeSelector from './ThemeSelector';

const navigation = [
  { name: 'Accueil', href: '/' },
  {
    name: 'Royaumes',
    href: '/royaumes',
    submenu: [
      { name: 'Meltoria', href: '/royaumes/meltoria' },
      { name: 'Sylvestri', href: '/royaumes/sylvestri' },
      { name: 'Anduin', href: '/royaumes/anduin' },
    ]
  },
  { name: 'Histoire', href: '/histoire' },
  { name: 'Magie', href: '/magie' },
  { name: 'Les Enfers', href: '/enfers' },
  { name: 'Religion', href: '/religion' },
  {
    name: 'Encyclopédie',
    href: '/races',
    submenu: [
      { name: 'Races', href: '/races' },
      { name: 'Bestiaire', href: '/bestiaire' },
      { name: 'Légendes', href: '/legendes' },
      { name: 'Quêtes', href: '/quetes' },
    ]
  },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/90 to-transparent backdrop-blur-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center bg-black/50 group-hover:animate-glow transition-all">
              <span className="text-primary text-xl font-bold">A</span>
            </div>
            <span className="text-2xl font-bold text-gradient hidden sm:block">Astrenor</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => setActiveSubmenu(item.name)}
                onMouseLeave={() => setActiveSubmenu(null)}
              >
                <Link
                  href={item.href}
                  className="px-4 py-2 text-foreground/80 hover:text-primary transition-colors duration-200 relative group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                </Link>

                {item.submenu && activeSubmenu === item.name && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-black/95 border border-primary-dark rounded-lg shadow-xl overflow-hidden">
                    {item.submenu.map((subitem) => (
                      <Link
                        key={subitem.name}
                        href={subitem.href}
                        className="block px-4 py-3 text-foreground/80 hover:text-primary hover:bg-primary/10 transition-all"
                      >
                        {subitem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Theme Selector */}
            <div className="ml-4">
              <ThemeSelector />
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-black/95 border-t border-primary-dark">
            {navigation.map((item) => (
              <div key={item.name}>
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-foreground/80 hover:text-primary hover:bg-primary/10 transition-all"
                >
                  {item.name}
                </Link>
                {item.submenu && (
                  <div className="pl-6 bg-black/50">
                    {item.submenu.map((subitem) => (
                      <Link
                        key={subitem.name}
                        href={subitem.href}
                        onClick={() => setIsOpen(false)}
                        className="block px-4 py-2 text-sm text-foreground/60 hover:text-primary transition-all"
                      >
                        ↳ {subitem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Mobile Theme Selector */}
            <div className="px-4 py-3 border-t border-primary-dark/50 flex items-center justify-between">
              <span className="text-foreground/60 text-sm">Thème</span>
              <ThemeSelector />
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
