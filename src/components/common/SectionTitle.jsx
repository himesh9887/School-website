import { motion } from 'framer-motion';

export default function SectionTitle({ title, subtitle, light = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-10 text-center sm:mb-12"
    >
      <span
        className={`inline-flex rounded-full px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] sm:px-4 sm:text-[11px] sm:tracking-[0.24em] ${
          light ? 'bg-white/15 text-blue-100' : 'bg-white text-[#2450a4] shadow-sm ring-1 ring-blue-100'
        }`}
      >
        Excellence School
      </span>
      <h2 className={`mt-4 mb-3 text-[2rem] font-bold leading-tight sm:mt-5 sm:mb-4 sm:text-3xl md:text-5xl ${light ? 'text-white' : 'text-[#11224d]'}`}>
        {title}
      </h2>
      <div className={`mx-auto h-1 w-24 rounded-full bg-gradient-to-r ${light ? 'from-orange-300 to-emerald-300' : 'from-[#f97316] to-[#2450a4]'}`} />
      {subtitle && (
        <p className={`mx-auto mt-4 max-w-2xl text-[15px] leading-7 sm:mt-5 sm:text-base md:text-lg ${light ? 'text-blue-100' : 'text-slate-600'}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
