import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      className="section-padding"
    >
      <div className="container-custom py-20 text-center">
        <p className="text-7xl font-extrabold text-[#123063]">404</p>
        <h1 className="mt-3 text-3xl font-bold text-slate-800">Page Not Found</h1>
        <p className="mx-auto mt-3 max-w-lg text-slate-600">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link to="/" className="gradient-btn mt-8">
          Back to Home
        </Link>
      </div>
    </motion.section>
  );
}
