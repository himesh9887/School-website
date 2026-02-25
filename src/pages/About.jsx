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

      {/* History */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle title="Our History" />
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Excellence School was established in 2016 with a vision to provide quality education that goes beyond textbooks. 
              Starting with just 50 students and 5 teachers, we have grown into one of the most prestigious institutions in the region.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Over the years, we have consistently achieved 100% board results and have been recognized for our innovative teaching methods 
              and holistic approach to education. Our alumni are now successful professionals across various fields, making us proud of our legacy.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding soft-grid bg-[#F3F4F6]">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-md"
            >
              <h3 className="text-2xl font-bold text-[#1E3A8A] mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be a leading educational institution that nurtures young minds to become responsible global citizens, 
                equipped with knowledge, skills, and values to excel in an ever-changing world.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-md"
            >
              <h3 className="text-2xl font-bold text-[#1E3A8A] mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To provide a stimulating learning environment that encourages academic excellence, fosters creativity, 
                promotes physical fitness, and instills moral values through dedicated teaching and modern facilities.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Principal Message */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600" 
                alt="Principal" 
                className="rounded-2xl shadow-xl w-full"
              />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <FaQuoteLeft className="text-4xl text-[#3B82F6] mb-4" />
              <h3 className="text-2xl font-bold text-[#1E3A8A] mb-4">Principal's Message</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Welcome to Excellence School! As the Principal, I am honored to lead an institution that has been transforming lives through education for over a decade.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                We believe that every child is unique and has unlimited potential. Our dedicated faculty works tirelessly to identify and nurture this potential, 
                ensuring that each student receives personalized attention and guidance.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                We don't just prepare students for exams; we prepare them for life. Join us in this journey of discovery and excellence.
              </p>
              <p className="font-bold text-[#1E3A8A]">- Mrs. Priya Sharma</p>
              <p className="text-sm text-gray-500">Principal, Excellence School</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Management Team */}
      <section className="section-padding soft-grid bg-[#F3F4F6]">
        <div className="container-custom">
          <SectionTitle title="Management Team" subtitle="Meet our dedicated leadership team" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {management.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <img src={member.image} alt={member.name} className="w-full h-64 object-cover" />
                <div className="p-4 text-center">
                  <h4 className="font-bold text-[#1E3A8A]">{member.name}</h4>
                  <p className="text-gray-500 text-sm">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
