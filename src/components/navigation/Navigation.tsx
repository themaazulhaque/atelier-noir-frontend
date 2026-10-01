'use client';

import { useState, useEffect, useCallback } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

const navLinks = [
  { label: 'Work', href: '#work' },
  { label: 'Studio', href: '#studio' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Escape' && mobileOpen) setMobileOpen(false);
  }, [mobileOpen]);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    if (href.startsWith('/')) return;
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const getLink = (link: typeof navLinks[0]) => {
    if (link.href === '/projects') return '/projects';
    if (isHome) return link.href;
    return `/${link.href}`;
  };

  return (
    <>
      <nav
        className={cn(
          'fixed z-50 transition-all duration-500',
          scrolled
            ? 'top-3 left-3 right-3 sm:top-4 sm:left-4 sm:right-4 md:top-5 md:left-6 md:right-6 lg:left-8 lg:right-8 rounded-2xl bg-[#111110]/85 backdrop-blur-xl border border-[#2a2925]/80 shadow-[0_8px_32px_rgba(0,0,0,0.4)] py-3 px-4 sm:px-6'
            : 'top-0 left-0 right-0 bg-transparent py-5 sm:py-6 px-[clamp(1.5rem,4vw,4rem)]'
        )}
        aria-label="Main navigation"
        onKeyDown={handleKeyDown}
      >
        <div className="max-w-[1440px] mx-auto flex items-center justify-between">
          <Link href="/" onClick={() => setMobileOpen(false)} aria-label="Atelier Noir - Home">
            <span className="font-body text-[0.7rem] font-medium tracking-[0.3em] text-[#f0ebe3] hover:opacity-70 transition-opacity">
              ATELIER NOIR
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8 lg:gap-10">
            {navLinks.map((link) => {
              const href = getLink(link);
              if (link.href !== '/projects') {
                return (
                  <a
                    key={link.href}
                    href={href}
                    onClick={(e) => { e.preventDefault(); scrollTo(href); }}
                    className="group relative text-[0.8rem] tracking-[0.08em] text-[#a09889] hover:text-[#f0ebe3] transition-colors"
                  >
                    {link.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#c9a96e] transition-all duration-500 ease-out group-hover:w-full" />
                  </a>
                );
              }
              return (
                <Link
                  key={link.href}
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "group relative text-[0.8rem] tracking-[0.08em] transition-colors",
                    pathname === '/projects' ? 'text-[#f0ebe3]' : 'text-[#a09889] hover:text-[#f0ebe3]'
                  )}
                >
                  {link.label}
                  <span className={cn(
                    "absolute -bottom-1 left-0 h-px bg-[#c9a96e] transition-all duration-500 ease-out",
                    pathname === '/projects' ? 'w-full' : 'w-0 group-hover:w-full'
                  )} />
                </Link>
              );
            })}
          </div>

          <button
            className="md:hidden flex flex-col gap-1.5 w-7 z-[1001] p-1"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <motion.span
              className="block w-full h-[1.5px] bg-[#f0ebe3] origin-center"
              animate={mobileOpen ? { y: 3.75, rotate: 45 } : { y: 0, rotate: 0 }}
              transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            />
            <motion.span
              className="block w-full h-[1.5px] bg-[#f0ebe3] origin-center"
              animate={mobileOpen ? { y: -3.75, rotate: -45 } : { y: 0, rotate: 0 }}
              transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed inset-0 z-[999] bg-[#111110] flex items-center justify-center"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            <div className="flex flex-col items-center gap-6">
              {navLinks.map((link, i) => {
                const href = getLink(link);
                const isProjectsLink = link.href === '/projects';
                const content = (
                  <>
                    <span className="absolute -left-12 top-1/2 -translate-y-1/2 font-body text-[0.65rem] tracking-[0.1em] text-[#6b6358]">
                      0{i + 1}
                    </span>
                    {link.label}
                  </>
                );
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  >
                    {isProjectsLink ? (
                      <Link
                        href={href}
                        onClick={() => setMobileOpen(false)}
                        className="relative font-display text-[clamp(2.5rem,8vw,5rem)] font-light text-[#f0ebe3] hover:text-[#c9a96e] transition-colors"
                      >
                        {content}
                      </Link>
                    ) : (
                      <a
                        href={href}
                        onClick={(e) => { e.preventDefault(); scrollTo(href); }}
                        className="relative font-display text-[clamp(2.5rem,8vw,5rem)] font-light text-[#f0ebe3] hover:text-[#c9a96e] transition-colors"
                      >
                        {content}
                      </a>
                    )}
                  </motion.div>
                );
              })}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mt-10 flex flex-col items-center gap-1 text-[0.75rem] tracking-[0.05em] text-[#6b6358]"
              >
                <span>Interior Architecture Studio</span>
                <span>New Delhi / Mumbai</span>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
