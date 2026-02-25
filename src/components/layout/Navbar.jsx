import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaGraduationCap } from 'react-icons/fa';

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

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 shadow-lg backdrop-blur-sm' : 'bg-white'
      }`}
    >
      <div className="container-custom">
        <div className="flex h-20 items-center justify-between">
          <Link to="/" className="group flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#10244a] to-[#2967c8] shadow-lg transition-transform duration-300 group-hover:rotate-6">
              <FaGraduationCap className="text-2xl text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-[#10244a] sm:text-xl">Excellence School</h1>
              <p className="text-xs text-slate-500">Nursery to 10th Standard</p>
            </div>
          </Link>

          <div className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`group relative text-sm font-semibold tracking-wide transition-colors duration-300 ${
                    isActive ? 'text-[#123063]' : 'text-slate-600 hover:text-[#123063]'
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute -bottom-1 left-0 h-[2px] rounded-full bg-[#2967c8] transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>
              );
            })}
            <Link to="/admission" className="gradient-btn px-5 py-2 text-sm">
              Apply Now
            </Link>
          </div>

          <button
            aria-label="Toggle menu"
            onClick={() => setIsOpen((prev) => !prev)}
            className="rounded-lg p-2 text-[#123063] transition-colors hover:bg-slate-100 lg:hidden"
          >
            {isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-slate-200 bg-white lg:hidden"
          >
            <div className="container-custom py-4">
              <div className="grid gap-2">
                {navLinks.map((link) => {
                  const isActive = location.pathname === link.path;
                  return (
                    <Link
                      key={link.name}
                      to={link.path}
                      className={`rounded-xl px-4 py-3 text-sm font-medium transition-all duration-300 ${
                        isActive
                          ? 'bg-blue-50 text-[#123063] shadow-sm'
                          : 'text-slate-600 hover:bg-slate-50 hover:text-[#123063]'
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
                <Link to="/admission" className="gradient-btn mt-2 w-full py-3 text-sm">
                  Start Admission
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
