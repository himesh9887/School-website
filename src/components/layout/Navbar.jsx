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

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const isDark = theme === 'dark';

  return (
    <nav className="sticky top-0 z-50">
      <div className={`hidden lg:block ${isDark ? 'bg-[#050b18] text-slate-200' : 'bg-[#09142d] text-blue-50'}`}>
        <div className="container-custom flex items-center justify-between gap-6 py-3 text-xs tracking-wide">
          <div className="flex items-center gap-6">
            <span className="inline-flex items-center gap-2">
              <FaPhoneAlt className="text-orange-300" /> +91 98765 43210
            </span>
            <span className="inline-flex items-center gap-2">
              <FaEnvelope className="text-emerald-300" /> info@excellenceschool.edu
            </span>
          </div>
          <span className={`inline-flex items-center gap-2 ${isDark ? 'text-slate-300' : 'text-blue-100'}`}>
            <FaMapMarkerAlt className="text-orange-300" /> Knowledge City Campus, India
          </span>
        </div>
      </div>

      <div
        className={`transition-all duration-300 ${
          isDark
            ? scrolled
              ? 'border-b border-white/8 bg-[#07101f]/90 shadow-[0_18px_45px_rgba(0,0,0,0.35)] backdrop-blur-xl'
              : 'border-b border-transparent bg-[#07101f]/75 backdrop-blur-md'
            : scrolled
              ? 'border-b border-slate-200/80 bg-white/86 shadow-lg backdrop-blur-xl'
              : 'border-b border-transparent bg-white/70 backdrop-blur-md'
        }`}
      >
        <div className="container-custom">
          <div className="flex h-20 items-center justify-between gap-3">
            <Link to="/" className="group flex min-w-0 items-center gap-3">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0b1530] via-[#2450a4] to-[#fb923c] shadow-lg transition-transform duration-300 group-hover:-rotate-6">
                <FaGraduationCap className="text-2xl text-white" />
              </div>
              <div className="min-w-0">
                <h1 className={`truncate text-lg font-bold sm:text-xl ${isDark ? 'text-white' : 'text-[#10244a]'}`}>
                  Excellence School
                </h1>
                <p className={`truncate text-xs uppercase tracking-[0.18em] ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                  Nursery to 10th Standard
                </p>
              </div>
            </Link>

            <div className="hidden items-center gap-2 xl:flex">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                      isActive
                        ? isDark
                          ? 'bg-white text-[#081225] shadow-md'
                          : 'bg-[#11224d] text-white shadow-md'
                        : isDark
                          ? 'text-slate-300 hover:bg-white/8 hover:text-white'
                          : 'text-slate-600 hover:bg-blue-50 hover:text-[#123063]'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            <div className="hidden items-center gap-3 lg:flex">
              <button
                type="button"
                aria-label="Toggle theme"
                onClick={() => setTheme(isDark ? 'light' : 'dark')}
                className={`inline-flex h-11 w-11 items-center justify-center rounded-full border transition-all ${
                  isDark
                    ? 'border-white/10 bg-white/6 text-yellow-300 hover:bg-white/10'
                    : 'border-slate-200 bg-white text-[#123063] hover:bg-slate-50'
                }`}
              >
                {isDark ? <FaSun /> : <FaMoon />}
              </button>
              <Link to="/contact" className={`secondary-btn px-5 py-3 text-sm ${isDark ? 'border-white/10 bg-white/6 text-white hover:bg-white/10' : ''}`}>
                Book Visit
              </Link>
              <Link to="/admission" className="gradient-btn px-5 py-3 text-sm">
                Apply Now
              </Link>
            </div>

            <div className="flex items-center gap-2 xl:hidden">
              <button
                type="button"
                aria-label="Toggle theme"
                onClick={() => setTheme(isDark ? 'light' : 'dark')}
                className={`inline-flex h-11 w-11 items-center justify-center rounded-full border transition-all ${
                  isDark
                    ? 'border-white/10 bg-white/6 text-yellow-300 hover:bg-white/10'
                    : 'border-slate-200 bg-white text-[#123063] hover:bg-slate-50'
                }`}
              >
                {isDark ? <FaSun /> : <FaMoon />}
              </button>
              <button
                aria-label="Toggle menu"
                onClick={() => setIsOpen((prev) => !prev)}
                className={`rounded-xl border p-2.5 transition-colors ${
                  isDark
                    ? 'border-white/10 text-white hover:bg-white/8'
                    : 'border-slate-200 text-[#123063] hover:bg-slate-50'
                }`}
              >
                {isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`border-b shadow-lg backdrop-blur-xl xl:hidden ${
              isDark ? 'border-white/8 bg-[#07101f]/95' : 'border-slate-200 bg-white/95'
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
                            ? 'bg-white text-[#081225] shadow-sm'
                            : 'bg-[#11224d] text-white shadow-sm'
                          : isDark
                            ? 'text-slate-300 hover:bg-white/8 hover:text-white'
                            : 'text-slate-600 hover:bg-slate-50 hover:text-[#123063]'
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
                <div className="mt-2 grid gap-3 sm:grid-cols-2">
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
