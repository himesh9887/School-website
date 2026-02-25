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

export default function Footer() {
  return (
    <footer className="mt-16 overflow-hidden bg-[#0d1e3e] text-white">
      <div className="border-b border-blue-900/70 bg-gradient-to-r from-[#123063] to-[#1c4b98]">
        <div className="container-custom flex flex-col items-center justify-between gap-4 py-5 text-center md:flex-row md:text-left">
          <p className="text-sm font-medium text-blue-100 md:text-base">
            Admissions open for session 2026-27. Limited seats available.
          </p>
          <Link
            to="/admission"
            className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-semibold text-[#123063] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
          >
            Apply Now <FaArrowRight className="text-xs" />
          </Link>
        </div>
      </div>

      <div className="pt-14 pb-8">
      <div className="container-custom">
        <div className="mb-10 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="text-center md:text-left">
            <div className="mb-4 flex items-center justify-center gap-3 md:justify-start">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-white text-[#123063]">
                <FaGraduationCap className="text-xl" />
              </div>
              <h3 className="text-lg font-bold">Excellence School</h3>
            </div>
            <p className="mb-5 text-sm leading-relaxed text-blue-100/95">
              Quality education from Nursery to Class 10 with equal focus on academics,
              discipline, and personality development.
            </p>
            <div className="flex justify-center gap-3 md:justify-start">
              {[FaFacebook, FaTwitter, FaInstagram, FaYoutube].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  aria-label="social"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-blue-700/70 bg-blue-900/50 transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:bg-[#2967c8]"
                >
                  <Icon className="text-sm" />
                </a>
              ))}
            </div>
          </div>

          <div className="text-center md:text-left">
            <h4 className="mb-4 border-b border-blue-800 pb-2 text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm text-blue-100/95">
              {quickLinks.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="inline-flex items-center gap-2 transition-all duration-300 hover:translate-x-1 hover:text-white"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-300" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h4 className="mb-4 border-b border-blue-800 pb-2 text-lg font-semibold">Contact</h4>
            <ul className="space-y-3 text-sm text-blue-100/95">
              <li className="flex items-start justify-center gap-3 md:justify-start">
                <FaMapMarkerAlt className="mt-1 flex-shrink-0 text-blue-300" />
                <span>123 Education Street, Knowledge City, State - 123456</span>
              </li>
              <li className="flex items-center justify-center gap-3 md:justify-start">
                <FaPhone className="text-blue-300" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center justify-center gap-3 md:justify-start">
                <FaEnvelope className="text-blue-300" />
                <span>info@excellenceschool.edu</span>
              </li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h4 className="mb-4 border-b border-blue-800 pb-2 text-lg font-semibold">School Hours</h4>
            <ul className="space-y-2 text-sm text-blue-100/95">
              <li className="flex justify-between gap-3 rounded-lg bg-blue-950/25 px-3 py-2">
                <span>Monday - Friday</span>
                <span>8:00 AM - 3:00 PM</span>
              </li>
              <li className="flex justify-between gap-3 rounded-lg bg-blue-950/25 px-3 py-2">
                <span>Saturday</span>
                <span>8:00 AM - 12:00 PM</span>
              </li>
              <li className="flex justify-between gap-3 rounded-lg bg-red-950/20 px-3 py-2 text-red-300">
                <span>Sunday</span>
                <span>Closed</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-blue-900 pt-6 text-center text-sm text-blue-200 md:flex-row md:text-left">
          <p>Copyright 2026 Excellence School. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <Link to="/contact" className="transition-colors hover:text-white">
              Support
            </Link>
            <Link to="/admission" className="transition-colors hover:text-white">
              Admissions
            </Link>
          </div>
        </div>
      </div>
      </div>
    </footer>
  );
}
