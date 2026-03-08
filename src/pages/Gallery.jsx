import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionTitle from '../components/common/SectionTitle';
import PageHeader from '../components/common/PageHeader';

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
    : images.filter((img) => img.category === activeCategory);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <PageHeader
        title="Gallery"
        subtitle="Capturing moments of learning, teamwork, creativity, and campus life."
      />

      <section className="section-padding">
        <div className="container-custom">
          <SectionTitle title="School Gallery" />

          <div className="mb-8 flex flex-wrap justify-center gap-2 sm:mb-10 sm:gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 sm:px-6 sm:text-base ${
                  activeCategory === cat
                    ? 'bg-[#11224d] text-white shadow-lg'
                    : 'bg-white text-gray-600 shadow-sm ring-1 ring-slate-200 hover:bg-blue-50 hover:text-[#1E3A8A]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <motion.div layout className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <AnimatePresence>
              {filteredImages.map((image) => (
                <motion.div
                  key={image.src}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  className="surface-card relative group cursor-pointer overflow-hidden rounded-[1.35rem] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:rounded-[1.5rem]"
                >
                  <img
                    src={image.src}
                    alt={image.title}
                    className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-110 sm:h-64"
                  />
                  <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
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
