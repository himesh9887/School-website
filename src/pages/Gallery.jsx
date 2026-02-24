import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionTitle from '../components/common/SectionTitle';

const categories = ['All', 'Events', 'Sports', 'Classroom', 'Annual Function'];

const images = [
  { src: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600', category: 'Classroom', title: 'Smart Class' },
  { src: 'https://images.unsplash.com/photo-1540479859555-17af45c78602?w=600', category: 'Events', title: 'Science Exhibition' },
  { src: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600', category: 'Sports', title: 'Sports Day' },
  { src: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600', category: 'Annual Function', title: 'Cultural Program' },
  { src: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600', category: 'Classroom', title: 'Library' },
  { src: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600', category: 'Events', title: 'Group Activity' },
  { src: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600', category: 'Sports', title: 'Basketball Court' },
  { src: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600', category: 'Annual Function', title: 'Annual Day' },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredImages = activeCategory === 'All' 
    ? images 
    : images.filter(img => img.category === activeCategory);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <div className="bg-[#1E3A8A] text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Gallery</h1>
          <p className="text-blue-200">Capturing moments of learning and joy</p>
        </div>
      </div>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle title="School Gallery" />
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-[#1E3A8A] text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-blue-50 hover:text-[#1E3A8A]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Image Grid */}
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <AnimatePresence>
              {filteredImages.map((image) => (
                <motion.div
                  key={image.src}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  className="relative group overflow-hidden rounded-xl cursor-pointer"
                >
                  <img 
                    src={image.src} 
                    alt={image.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 text-white">
                      <p className="font-semibold">{image.title}</p>
                      <p className="text-sm text-gray-300">{image.category}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
