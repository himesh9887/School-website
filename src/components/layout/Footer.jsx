import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import { FaGraduationCap } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#1E3A8A] text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* School Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <FaGraduationCap className="text-[#1E3A8A] text-xl" />
              </div>
              <h3 className="text-lg font-bold">Excellence School</h3>
            </div>
            <p className="text-blue-200 text-sm leading-relaxed mb-4">
              Providing quality education from Nursery to 10th Standard. Building future leaders through academic excellence and character development.
            </p>
            <div className="flex space-x-4">
              {[FaFacebook, FaTwitter, FaInstagram, FaYoutube].map((Icon, idx) => (
                <a key={idx} href="#" className="w-8 h-8 bg-blue-800 rounded-full flex items-center justify-center hover:bg-[#3B82F6] transition-colors">
                  <Icon className="text-sm" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-blue-700 pb-2">Quick Links</h4>
            <ul className="space-y-2 text-blue-200 text-sm">
              {['About Us', 'Academics', 'Admission', 'Faculty', 'Gallery', 'Contact'].map((item) => (
                <li key={item}>
                  <Link to={`/${item.toLowerCase().replace(' ', '-')}`} className="hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-blue-700 pb-2">Contact Us</h4>
            <ul className="space-y-3 text-blue-200 text-sm">
              <li className="flex items-start space-x-3">
                <FaMapMarkerAlt className="mt-1 text-[#60A5FA]" />
                <span>123 Education Street, Knowledge City, State - 123456</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaPhone className="text-[#60A5FA]" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaEnvelope className="text-[#60A5FA]" />
                <span>info@excellenceschool.edu</span>
              </li>
            </ul>
          </div>

          {/* School Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-blue-700 pb-2">School Hours</h4>
            <ul className="space-y-2 text-blue-200 text-sm">
              <li className="flex justify-between">
                <span>Monday - Friday</span>
                <span>8:00 AM - 3:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span>8:00 AM - 12:00 PM</span>
              </li>
              <li className="flex justify-between text-red-300">
                <span>Sunday</span>
                <span>Closed</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-800 pt-8 text-center text-blue-300 text-sm">
          <p>&copy; 2026 Excellence School. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}