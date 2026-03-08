import { motion } from 'framer-motion';
import SectionTitle from '../components/common/SectionTitle';
import { FaQuoteLeft } from 'react-icons/fa';
import PageHeader from '../components/common/PageHeader';

const management = [
  { name: 'Dr. Rajesh Kumar', role: 'Chairman', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300' },
  { name: 'Mrs. Priya Sharma', role: 'Principal', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300' },
  { name: 'Mr. Amit Patel', role: 'Vice Principal', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300' },
  { name: 'Mrs. Sunita Gupta', role: 'Administrator', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300' },
];

export default function About() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <PageHeader
        title="About Us"
        subtitle="Learn about our journey, values, and long-term commitment to quality education."
      />

      <section className="section-padding">
        <div className="container-custom">
          <SectionTitle
            title="Our Story"
            subtitle="A school built to combine discipline, care, modern teaching, and long-term student growth."
          />
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="surface-card p-8 md:p-10">
              <p className="mb-6 text-lg leading-8 text-slate-600">
                Excellence School was established in 2016 with a vision to provide quality education that goes beyond textbooks.
                Starting with just 50 students and 5 teachers, we have grown into one of the most prestigious institutions in the region.
              </p>
              <p className="text-lg leading-8 text-slate-600">
                Over the years, we have consistently achieved 100% board results and have been recognized for our innovative teaching methods
                and holistic approach to education. Our alumni are now successful professionals across various fields, making us proud of our legacy.
              </p>
            </div>
            <div className="grid gap-5">
              {[
                ['500+', 'Students on campus'],
                ['20+', 'Qualified educators'],
                ['100%', 'Board success focus'],
              ].map(([value, label]) => (
                <div key={label} className="surface-card p-6">
                  <p className="text-4xl font-bold text-[#11224d]">{value}</p>
                  <p className="mt-2 text-sm uppercase tracking-[0.2em] text-[#2450a4]">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell section-padding soft-grid bg-[#eef5ff]">
        <div className="container-custom">
          <div className="grid gap-8 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="surface-card p-8"
            >
              <h3 className="mb-4 text-2xl font-bold text-[#11224d]">Our Vision</h3>
              <p className="leading-8 text-slate-600">
                To be a leading educational institution that nurtures young minds to become responsible global citizens,
                equipped with knowledge, skills, and values to excel in an ever-changing world.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="surface-card p-8"
            >
              <h3 className="mb-4 text-2xl font-bold text-[#11224d]">Our Mission</h3>
              <p className="leading-8 text-slate-600">
                To provide a stimulating learning environment that encourages academic excellence, fosters creativity,
                promotes physical fitness, and instills moral values through dedicated teaching and modern facilities.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600"
                alt="Principal"
                className="w-full rounded-[2rem] shadow-xl"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <FaQuoteLeft className="mb-4 text-4xl text-[#3B82F6]" />
              <h3 className="mb-4 text-3xl font-bold text-[#11224d]">Principal&apos;s Message</h3>
              <p className="mb-4 leading-8 text-slate-600">
                Welcome to Excellence School! As the Principal, I am honored to lead an institution that has been transforming lives through education for over a decade.
              </p>
              <p className="mb-4 leading-8 text-slate-600">
                We believe that every child is unique and has unlimited potential. Our dedicated faculty works tirelessly to identify and nurture this potential,
                ensuring that each student receives personalized attention and guidance.
              </p>
              <p className="mb-6 leading-8 text-slate-600">
                We do not just prepare students for exams; we prepare them for life. Join us in this journey of discovery and excellence.
              </p>
              <p className="font-bold text-[#11224d]">- Mrs. Priya Sharma</p>
              <p className="text-sm text-slate-500">Principal, Excellence School</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-shell section-padding soft-grid bg-[#eef5ff]">
        <div className="container-custom">
          <SectionTitle title="Management Team" subtitle="Meet our dedicated leadership team" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {management.map((member, idx) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="surface-card overflow-hidden transition-shadow hover:shadow-xl"
              >
                <img src={member.image} alt={member.name} className="h-64 w-full object-cover" />
                <div className="p-4 text-center">
                  <h4 className="font-bold text-[#11224d]">{member.name}</h4>
                  <p className="text-sm text-slate-500">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
