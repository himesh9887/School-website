import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaBars,
  FaTimes,
  FaGraduationCap,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaMoon,
  FaSun,
} from 'react-icons/fa';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Academics', path: '/academics' },
  { name: 'Admission', path: '/admission' },
  { name: 'Faculty', path: '/faculty' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Notice', path: '/notice' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar({ theme, setTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isDark = theme === 'dark';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <nav className="sticky top-0 z-50">
      <div className={`hidden md:block ${isDark ? 'border-b border-white/6 bg-[#020817] text-slate-300' : 'bg-[#09142d] text-blue-50'}`}>
        <div className="container-custom flex items-center justify-between gap-6 py-2.5 text-xs">
          <div className="flex items-center gap-5">
            <span className="inline-flex items-center gap-2">
              <FaPhoneAlt className="text-orange-300" /> +91 98765 43210
            </span>
            <span className="inline-flex items-center gap-2">
              <FaEnvelope className="text-emerald-300" /> info@excellenceschool.edu
            </span>
          </div>
          <span className={`inline-flex items-center gap-2 ${isDark ? 'text-slate-400' : 'text-blue-100'}`}>
            <FaMapMarkerAlt className="text-orange-300" /> Knowledge City Campus
          </span>
        </div>
      </div>

      <div
        className={`transition-all duration-300 ${
          isDark
            ? scrolled
              ? 'border-b border-white/8 bg-[#06101f]/96 shadow-[0_18px_45px_rgba(0,0,0,0.42)] backdrop-blur-xl'
              : 'border-b border-white/6 bg-[#06101f]/90 backdrop-blur-xl'
            : scrolled
              ? 'border-b border-slate-200/80 bg-white/90 shadow-lg backdrop-blur-xl'
              : 'border-b border-transparent bg-white/80 backdrop-blur-md'
        }`}
      >
        <div className="container-custom">
          <div className="flex min-h-[72px] items-center justify-between gap-3 sm:min-h-[78px]">
            <Link to="/" className="group flex min-w-0 items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0b1530] via-[#2450a4] to-[#fb923c] shadow-lg transition-transform duration-300 group-hover:-rotate-6 sm:h-12 sm:w-12">
                <FaGraduationCap className="text-xl text-white sm:text-2xl" />
              </div>
              <div className="min-w-0">
                <h1 className={`truncate text-base font-bold sm:text-xl ${isDark ? 'text-white' : 'text-[#10244a]'}`}>
                  Excellence School
                </h1>
                <p className={`truncate text-[10px] uppercase tracking-[0.16em] sm:text-[11px] sm:tracking-[0.18em] ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                  Nursery to 10th Standard
                </p>
              </div>
            </Link>

            <div className="hidden lg:flex lg:flex-1 lg:justify-center">
              <div className={`flex items-center gap-1 rounded-full px-2 py-2 ${
                isDark ? 'bg-white/[0.03] ring-1 ring-white/8 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]' : 'bg-slate-50 ring-1 ring-slate-200'
              }`}>
                {navLinks.map((link) => {
                  const isActive = location.pathname === link.path;
                  return (
                    <Link
                      key={link.name}
                      to={link.path}
                      className={`rounded-full px-3.5 py-2 text-sm font-semibold transition-all duration-300 ${
                        isActive
                          ? isDark
                            ? 'bg-gradient-to-r from-[#f97316] to-[#3970d7] text-white shadow-lg'
                            : 'bg-[#11224d] text-white shadow-md'
                          : isDark
                            ? 'text-slate-300 hover:bg-white/7 hover:text-white'
                            : 'text-slate-600 hover:bg-white hover:text-[#123063]'
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="hidden items-center gap-3 lg:flex">
              <button
                type="button"
                aria-label="Toggle theme"
                onClick={() => setTheme(isDark ? 'light' : 'dark')}
                className={`inline-flex h-11 w-11 items-center justify-center rounded-full border transition-all ${
                  isDark
                    ? 'border-white/10 bg-white/5 text-yellow-300 hover:bg-white/10'
                    : 'border-slate-200 bg-white text-[#123063] hover:bg-slate-50'
                }`}
              >
                {isDark ? <FaSun /> : <FaMoon />}
              </button>
              <Link to="/admission" className="gradient-btn px-5 py-3 text-sm">
                Apply Now
              </Link>
            </div>

            <div className="flex shrink-0 items-center gap-2 lg:hidden">
              <button
                type="button"
                aria-label="Toggle theme"
                onClick={() => setTheme(isDark ? 'light' : 'dark')}
                className={`inline-flex h-9 w-9 items-center justify-center rounded-full border transition-all sm:h-10 sm:w-10 ${
                  isDark
                    ? 'border-white/10 bg-white/5 text-yellow-300 hover:bg-white/10'
                    : 'border-slate-200 bg-white text-[#123063] hover:bg-slate-50'
                }`}
              >
                {isDark ? <FaSun /> : <FaMoon />}
              </button>
              <button
                type="button"
                aria-label="Toggle menu"
                onClick={() => setIsOpen((prev) => !prev)}
                className={`inline-flex h-9 w-9 items-center justify-center rounded-xl border transition-colors sm:h-10 sm:w-10 ${
                  isDark
                    ? 'border-white/10 bg-white/5 text-white hover:bg-white/10'
                    : 'border-slate-200 text-[#123063] hover:bg-slate-50'
                }`}
              >
                {isOpen ? <FaTimes className="text-lg sm:text-xl" /> : <FaBars className="text-lg sm:text-xl" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={`border-b shadow-xl backdrop-blur-xl lg:hidden ${
              isDark ? 'border-white/8 bg-[#06101f]/98' : 'border-slate-200 bg-white/96'
            }`}
          >
            <div className="container-custom py-4">
              <div className="grid gap-2">
                {navLinks.map((link) => {
                  const isActive = location.pathname === link.path;
                  return (
                    <Link
                      key={link.name}
                      to={link.path}
                      className={`rounded-2xl px-4 py-3 text-sm font-medium transition-all duration-300 ${
                        isActive
                          ? isDark
                            ? 'bg-gradient-to-r from-[#f97316] to-[#3970d7] text-white shadow-lg'
                            : 'bg-[#11224d] text-white shadow-sm'
                          : isDark
                            ? 'text-slate-300 hover:bg-white/7 hover:text-white'
                            : 'text-slate-600 hover:bg-slate-50 hover:text-[#123063]'
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
                <div className="mt-3 grid gap-3">
                  <Link to="/contact" className={`secondary-btn w-full py-3 text-sm ${isDark ? 'border-white/10 bg-white/6 text-white hover:bg-white/10' : ''}`}>
                    Book Visit
                  </Link>
                  <Link to="/admission" className="gradient-btn w-full py-3 text-sm">
                    Start Admission
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
