import { motion } from 'framer-motion';
import SectionTitle from '../components/common/SectionTitle';
import teachers from '../data/teachersData';
import PageHeader from '../components/common/PageHeader';

export default function Faculty() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <PageHeader
        title="Our Faculty"
        subtitle="Experienced and dedicated educators committed to academic excellence."
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle title="Meet Our Teachers" subtitle="Qualified professionals nurturing future leaders" />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {teachers.map((teacher, idx) => (
              <motion.div
                key={teacher.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={teacher.image}
                    alt={teacher.name}
                    className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-[#123063]">{teacher.name}</h3>
                  <p className="mb-2 text-sm font-medium text-[#2e63be]">{teacher.subject}</p>
                  <div className="space-y-1 text-sm text-slate-600">
                    <p>{teacher.qualification}</p>
                    <p className="text-slate-500">{teacher.experience} experience</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
