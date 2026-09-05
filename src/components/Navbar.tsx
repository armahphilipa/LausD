import React, { useEffect, useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  onOpenPartnerModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenPartnerModal }) => {
  const { isLight } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#team', label: 'Team' },
    { href: '#focus', label: 'Services' },
    { href: '#manufacturing', label: 'Manufacturing' },
    { href: '#impact', label: 'Impact' },
    { href: '#faq', label: 'FAQ' },
  ];

  const logoSrc = isLight ? '/logo-placeholder-light.svg' : '/logo-placeholder.svg';

  return (
    <>
      <header
        id="site-header"
        className={`fixed top-0 left-0 right-0 z-[200] transition-all duration-300 ${
          isScrolled ? 'py-3.5' : 'py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`flex items-center justify-between transition-all duration-300 rounded-full px-5 py-3 ${
              isLight
                ? isScrolled
                  ? 'bg-white/95 backdrop-blur-md border border-neutral-200 shadow-md shadow-black/5 text-[#202020]'
                  : 'bg-white/90 backdrop-blur-md border border-neutral-200/90 shadow-sm text-[#202020]'
                : isScrolled
                ? 'bg-[#202020]/90 backdrop-blur-md border border-[#333533] shadow-xl text-[#D6D6D6]'
                : 'bg-transparent text-[#D6D6D6]'
            }`}
          >
            {/* Brand Logo Image Placeholder */}
            <a
              href="#hero"
              id="brand-logo"
              className="flex items-center transition-transform hover:scale-[1.02] focus:outline-none"
              aria-label="Laus Deo Consult Home"
            >
              <img
                src={logoSrc}
                alt="Laus Deo Consult Logo"
                className="h-9 sm:h-10 w-auto object-contain max-w-[180px] sm:max-w-[200px]"
                referrerPolicy="no-referrer"
              />
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  id={`nav-link-${link.label.toLowerCase()}`}
                  className={`relative py-1 transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#FFEE32] hover:after:w-full after:transition-all after:duration-300 ${
                    isLight
                      ? 'text-[#333533] hover:text-[#202020] font-semibold'
                      : 'text-[#D6D6D6]/80 hover:text-[#FFEE32]'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Desktop CTA & Theme Toggle */}
            <div className="hidden md:flex items-center gap-3">
              <ThemeToggle variant="nav" />
              <a
                href="#partner"
                id="nav-cta-partner"
                onClick={onOpenPartnerModal}
                className="inline-flex items-center gap-1.5 bg-[#FFEE32] hover:bg-[#ffe800] text-[#202020] px-5 py-2 rounded-full text-xs font-bold tracking-wide uppercase shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
              >
                <span>Partner with us</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Mobile Right Controls */}
            <div className="flex md:hidden items-center gap-2">
              <ThemeToggle variant="nav" />
              <button
                id="mobile-nav-toggle"
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`p-2 rounded-full border transition-colors focus:outline-none ${
                  isLight
                    ? 'border-neutral-200 text-[#202020] hover:bg-neutral-100'
                    : 'border-white/20 text-[#D6D6D6] hover:bg-white/10'
                }`}
                aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <div
        id="mobile-drawer"
        className={`fixed inset-0 backdrop-blur-xl z-[199] flex flex-col items-center justify-center transition-all duration-300 md:hidden ${
          isLight
            ? 'bg-white/98 text-[#202020]'
            : 'bg-[#202020]/98 text-[#D6D6D6]'
        } ${
          isMobileMenuOpen
            ? 'opacity-100 pointer-events-auto scale-100'
            : 'opacity-0 pointer-events-none scale-95'
        }`}
      >
        <button
          id="mobile-drawer-close"
          type="button"
          onClick={() => setIsMobileMenuOpen(false)}
          className={`absolute top-6 right-6 p-3 rounded-full border transition-colors ${
            isLight
              ? 'text-[#202020] hover:text-black border-neutral-200 hover:bg-neutral-100'
              : 'text-[#D6D6D6]/80 hover:text-white border-white/10 hover:bg-white/10'
          }`}
          aria-label="Close menu"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="flex flex-col items-center gap-6 text-center max-w-sm w-full px-6">
          <a
            href="#hero"
            onClick={() => setIsMobileMenuOpen(false)}
            className="transition-transform hover:scale-105"
            aria-label="Laus Deo Consult Home"
          >
            <img
              src={logoSrc}
              alt="Laus Deo Consult Logo"
              className="h-12 w-auto object-contain max-w-[220px]"
              referrerPolicy="no-referrer"
            />
          </a>

          <nav
            className={`flex flex-col gap-4 text-xl font-display font-medium mt-1 ${
              isLight ? 'text-[#202020]' : 'text-[#D6D6D6]/90'
            }`}
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`py-1 transition-colors ${
                  isLight
                    ? 'hover:text-[#202020] hover:bg-[#FFEE32]/20 rounded-lg px-3 font-semibold'
                    : 'hover:text-[#FFEE32]'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Mobile Drawer Theme Toggle */}
          <div className="w-full">
            <ThemeToggle variant="drawer" />
          </div>

          <a
            href="#partner"
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-full bg-[#FFEE32] hover:bg-[#ffe800] text-[#202020] px-8 py-3.5 rounded-full font-bold text-sm tracking-wide uppercase shadow-lg transition-transform transform active:scale-95"
          >
            Partner with us
          </a>
        </div>
      </div>
    </>
  );
};
