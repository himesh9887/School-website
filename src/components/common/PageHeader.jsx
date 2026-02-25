import { motion } from 'framer-motion';

export default function PageHeader({ title, subtitle }) {
  return (
    <div className="page-hero py-20">
      <div className="container-custom relative z-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-4 text-4xl font-bold md:text-5xl"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mx-auto max-w-2xl text-blue-100"
        >
          {subtitle}
        </motion.p>
      </div>
    </div>
  );
}
