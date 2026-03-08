import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function PageHeader({ title, subtitle }) {
  return (
    <div className="page-hero pt-18 pb-12 md:pt-28 md:pb-20">
      <div className="container-custom relative z-10">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div className="max-w-3xl">
            <span className="mb-4 inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-100 sm:mb-5 sm:px-4 sm:text-xs sm:tracking-[0.24em]">
              Excellence School
            </span>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-4 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-6xl"
            >
              {title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="max-w-2xl text-base text-blue-100 md:text-lg"
            >
              {subtitle}
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="glass-panel max-w-md rounded-[1.5rem] p-4 text-left sm:rounded-[1.75rem] sm:p-5"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-100">
              Student First Campus
            </p>
            <p className="mt-3 text-sm leading-7 text-blue-50">
              Modern classrooms, trusted faculty, safe environment, and responsive parent support
              from enquiry to admission.
            </p>
            <Link to="/contact" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white">
              Schedule a visit <FaArrowRight className="text-xs" />
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
