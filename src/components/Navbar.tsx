import React, { useState, useEffect } from 'react';
import { Film, Sun, Moon, Menu, X, Ticket } from 'lucide-react';

interface NavbarProps {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
  onBookClick: () => void;
}

export default function Navbar({ theme, toggleTheme, onBookClick }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Events', href: '#events' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Timeline', href: '#timeline' },
    { name: 'FAQs', href: '#faqs' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      id="navbar-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? theme === 'dark'
            ? 'bg-dark-bg/90 border-b border-white/10 shadow-2xl backdrop-blur-md py-3'
            : 'bg-white/95 border-b border-black/10 shadow-lg backdrop-blur-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            id="brand-logo"
            href="#hero"
            className="flex items-center space-x-2 group focus:outline-none"
          >
            <div className="bg-accent-red p-2 rounded-lg glow-red transform group-hover:rotate-12 transition-transform duration-300">
              <Film className="w-6 h-6 text-white" />
            </div>
            <span
              className={`font-heading text-lg sm:text-xl font-bold tracking-tight transition-colors duration-300 ${
                theme === 'dark' ? 'text-white' : 'text-slate-900'
              }`}
            >
              Movie Events <span className="text-gold">&amp; Tickets</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav id="desktop-nav" className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-sans text-sm font-medium transition-colors duration-200 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-accent-red after:transition-all after:duration-300 hover:after:w-full ${
                  theme === 'dark'
                    ? 'text-white/80 hover:text-white'
                    : 'text-slate-700 hover:text-slate-900'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action buttons */}
          <div className="hidden sm:flex items-center space-x-4">
            {/* Theme Toggle */}
            <button
              id="theme-toggler"
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-all duration-300 focus:outline-none border ${
                theme === 'dark'
                  ? 'bg-slate-800 border-white/10 text-gold hover:bg-slate-700'
                  : 'bg-slate-100 border-black/10 text-slate-800 hover:bg-slate-200'
              }`}
              title="Toggle theme mode"
              aria-label="Toggle light or dark theme"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* CTA Book tickets */}
            <button
              id="nav-cta-book-tickets"
              onClick={onBookClick}
              className="flex items-center space-x-2 bg-accent-red hover:bg-red-700 text-white px-5 py-2 rounded-full font-heading font-semibold text-sm transition-all duration-300 shadow-md hover:scale-105 active:scale-95 scroll-smooth cursor-pointer"
            >
              <Ticket className="w-4 h-4 animate-bounce" />
              <span>Book Tickets</span>
            </button>
          </div>

          {/* Mobile Action Buttons Bar */}
          <div className="flex items-center space-x-2 sm:space-x-4 lg:hidden">
            {/* Small screen Theme Toggle */}
            <button
              id="theme-toggler-mobile"
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-all duration-300 focus:outline-none ${
                theme === 'dark' ? 'text-gold hover:bg-slate-800' : 'text-slate-800 hover:bg-slate-100'
              }`}
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* Mobile Hamburger toggle */}
            <button
              id="mobile-drawer-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-lg focus:outline-none ${
                theme === 'dark'
                  ? 'text-white hover:bg-slate-800'
                  : 'text-slate-900 hover:bg-slate-100'
              }`}
              title="Toggle navigation drawer"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar Flyout */}
      {isMobileMenuOpen && (
        <div
          id="mobile-nav-panel"
          className={`lg:hidden fixed inset-x-0 top-[60px] p-6 shadow-2xl transition-all duration-300 ease-in-out border-b z-40 ${
            theme === 'dark'
              ? 'bg-dark-bg/95 border-white/10 text-white'
              : 'bg-white/95 border-black/10 text-slate-900'
          }`}
        >
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`font-sans text-base font-semibold py-2 transition-colors ${
                  theme === 'dark' ? 'hover:text-gold' : 'hover:text-accent-red'
                }`}
              >
                {link.name}
              </a>
            ))}

            <button
              id="mobile-nav-book-cta"
              onClick={() => {
                setIsMobileMenuOpen(false);
                onBookClick();
              }}
              className="flex items-center justify-center space-x-2 bg-accent-red text-white py-3 rounded-xl font-heading font-bold text-center glow-red"
            >
              <Ticket className="w-5 h-5" />
              <span>Book Tickets Now</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
