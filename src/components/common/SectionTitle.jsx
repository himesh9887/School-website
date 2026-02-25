import { motion } from 'framer-motion';

export default function SectionTitle({ title, subtitle, light = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-12 text-center"
    >
      <span
        className={`inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider ${
          light ? 'bg-white/20 text-blue-100' : 'bg-blue-50 text-[#2e63be]'
        }`}
      >
        Excellence School
      </span>
      <h2 className={`mt-4 mb-4 text-3xl font-bold md:text-4xl ${light ? 'text-white' : 'text-[#123063]'}`}>
        {title}
      </h2>
      <div className="mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-[#123063] to-[#2e63be]" />
      {subtitle && (
        <p className={`mx-auto mt-4 max-w-2xl text-base md:text-lg ${light ? 'text-blue-100' : 'text-slate-600'}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
