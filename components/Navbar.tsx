'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

const navLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Past Trades', href: '/results' },
  { name: 'Blogs', href: '/blog' },
  { name: 'Membership', href: '/membership' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${scrolled ? 'bg-[#020202]/70 backdrop-blur-2xl border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.8)] py-4' : 'bg-transparent border-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group relative z-50">
          <div className="w-8 h-8 relative">
            <Image src="https://i.ibb.co/bR8bDCp5/122151.png" alt="Logo" fill className="object-contain" referrerPolicy="no-referrer" />
          </div>
          <span className="font-display text-lg tracking-[0.25em] font-medium uppercase text-white group-hover:text-gold transition-colors duration-300">
            Capital Guru
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-[11px] font-mono tracking-[0.2em] uppercase transition-all duration-300 hover:text-gold relative ${pathname === link.href ? 'text-white' : 'text-zinc-500'}`}
            >
              {link.name}
              {pathname === link.href && (
                <motion.div layoutId="nav-indicator" className="absolute -bottom-3 left-0 right-0 h-[1px] bg-gold" />
              )}
            </Link>
          ))}
          <Link href="https://cosmofeed.com/vig/6a0c3b251be92d0013bbe3c4" target="_blank" className="ml-6 px-7 py-3 text-[10px] font-bold font-mono tracking-[0.2em] uppercase text-black bg-gradient-to-r from-gold to-[#F4D068] hover:from-white hover:to-white transition-all duration-500 shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] flex items-center gap-2 rounded-sm origin-center">
            Join Now <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden relative z-50 flex items-center justify-center p-2 text-white/80 hover:text-white transition-colors" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          <div className="relative w-6 h-5 flex flex-col pt-[1px] justify-between">
            <span className={`block w-full h-[1.5px] bg-current transform transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'rotate-45 translate-y-[9px]' : ''}`} />
            <span className={`block w-full h-[1.5px] bg-current transition-all duration-200 ease-in-out ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
            <span className={`block w-full h-[1.5px] bg-current transform transition-all duration-300 ease-in-out ${mobileMenuOpen ? '-rotate-45 -translate-y-[9px]' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 bg-[#020202]/95 backdrop-blur-3xl z-40 flex flex-col pt-32 px-6 pb-12"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.1, duration: 0.4 }}
                  key={link.name}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-2xl font-display tracking-wide text-zinc-400 hover:text-white block border-b border-white/5 py-4 transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.4 }}
              className="mt-auto pt-8 border-t border-white/10"
            >
               <Link 
                href="https://cosmofeed.com/vig/6a0c3b251be92d0013bbe3c4" 
                target="_blank"
                className="w-full flex justify-center items-center bg-gold hover:bg-white text-black transition-colors py-5 px-6 text-xs font-bold font-mono tracking-[0.2em] uppercase rounded-sm gap-2"
              >
                Join Now <ArrowUpRight className="w-4 h-4"/>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
