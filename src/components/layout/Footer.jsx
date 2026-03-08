import { Link } from 'react-router-dom';
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaGraduationCap,
  FaArrowRight,
} from 'react-icons/fa';

const quickLinks = [
  { label: 'About', path: '/about' },
  { label: 'Academics', path: '/academics' },
  { label: 'Admission', path: '/admission' },
  { label: 'Faculty', path: '/faculty' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Notice', path: '/notice' },
  { label: 'Contact', path: '/contact' },
];

export default function Footer({ theme }) {
  const isDark = theme === 'dark';

  return (
    <footer className={`mt-16 overflow-hidden text-white ${isDark ? 'bg-[#040913]' : 'bg-[#081225]'}`}>
      <div className="container-custom relative">
        <div className="relative z-10 -translate-y-8 rounded-[1.6rem] bg-gradient-to-r from-[#11224d] via-[#2450a4] to-[#f97316] px-5 py-6 shadow-2xl sm:-translate-y-10 sm:rounded-[2rem] sm:px-6 sm:py-8 md:px-10">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/80">
                Admissions Open 2026-27
              </p>
              <h3 className="mt-2 text-xl font-bold sm:text-2xl md:text-3xl">
                Ready to visit the campus and meet the faculty team?
              </h3>
            </div>
            <div className="grid gap-3 sm:flex sm:flex-wrap">
              <Link to="/contact" className="secondary-btn w-full border-white/30 bg-white/15 px-6 py-3 text-white sm:w-auto">
                Schedule Visit
              </Link>
              <Link to="/admission" className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-[#123063] transition hover:-translate-y-0.5 sm:w-auto">
                Apply Now <FaArrowRight className="text-xs" />
              </Link>
            </div>
          </div>
        </div>

        <div className="grid gap-8 pb-8 md:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_0.9fr_0.9fr]">
          <div className="text-center md:text-left">
            <div className="mb-5 flex items-center justify-center gap-3 md:justify-start">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#123063]">
                <FaGraduationCap className="text-xl" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Excellence School</h3>
                <p className="text-xs uppercase tracking-[0.22em] text-blue-200">
                  Learn. Lead. Excel.
                </p>
              </div>
            </div>
            <p className="max-w-md text-sm leading-7 text-blue-100/90">
              A future-focused school campus with modern classrooms, caring mentors, and balanced
              development across academics, sports, and confidence building.
            </p>
            <div className="mt-6 flex justify-center gap-3 md:justify-start">
              {[FaFacebook, FaTwitter, FaInstagram, FaYoutube].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  aria-label="social"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-white/6 transition-all duration-300 hover:-translate-y-1 hover:bg-[#2450a4]"
                >
                  <Icon className="text-sm" />
                </a>
              ))}
            </div>
          </div>

          <div className="text-center md:text-left">
            <h4 className="mb-5 text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-3 text-sm text-blue-100/90">
              {quickLinks.map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="inline-flex items-center gap-2 transition hover:text-white">
                    <span className="h-1.5 w-1.5 rounded-full bg-orange-300" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h4 className="mb-5 text-lg font-semibold">Contact</h4>
            <ul className="space-y-4 text-sm text-blue-100/90">
              <li className="flex items-start justify-center gap-3 md:justify-start">
                <FaMapMarkerAlt className="mt-1 text-orange-300" />
                <span>123 Education Street, Knowledge City, State - 123456</span>
              </li>
              <li className="flex items-center justify-center gap-3 md:justify-start">
                <FaPhone className="text-emerald-300" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center justify-center gap-3 md:justify-start">
                <FaEnvelope className="text-blue-300" />
                <span>info@excellenceschool.edu</span>
              </li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h4 className="mb-5 text-lg font-semibold">School Hours</h4>
            <div className="space-y-3 text-sm text-blue-100/90">
              <div className="rounded-2xl border border-white/10 bg-white/6 px-4 py-3">
                Monday - Friday: 8:00 AM - 3:00 PM
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/6 px-4 py-3">
                Saturday: 8:00 AM - 12:00 PM
              </div>
              <div className="rounded-2xl border border-red-400/20 bg-red-500/10 px-4 py-3 text-red-200">
                Sunday: Closed
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 py-5 text-center text-sm text-blue-200/90 md:flex md:items-center md:justify-between md:text-left">
          <p>Copyright 2026 Excellence School. All rights reserved.</p>
          <div className="mt-3 flex justify-center gap-5 md:mt-0 md:justify-start">
            <Link to="/contact" className="transition hover:text-white">
              Support
            </Link>
            <Link to="/admission" className="transition hover:text-white">
              Admissions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
