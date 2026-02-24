import { motion } from 'framer-motion';

export default function SectionTitle({ title, subtitle, light = false }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-12"
    >
      <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${light ? 'text-white' : 'text-[#1E3A8A]'}`}>
        {title}
      </h2>
      <div className="w-24 h-1 bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6] mx-auto rounded-full" />
      {subtitle && (
        <p className={`mt-4 text-lg max-w-2xl mx-auto ${light ? 'text-blue-100' : 'text-gray-600'}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}