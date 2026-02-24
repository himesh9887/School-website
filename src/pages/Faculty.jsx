import { motion } from 'framer-motion';
import SectionTitle from '../components/common/SectionTitle';

const teachers = [
  { name: 'Mrs. Priya Sharma', subject: 'Principal', qualification: 'M.Ed, Ph.D', experience: '15 years', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300' },
  { name: 'Mr. Rajesh Kumar', subject: 'Mathematics', qualification: 'M.Sc, B.Ed', experience: '12 years', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300' },
  { name: 'Mrs. Anjali Gupta', subject: 'English', qualification: 'MA, B.Ed', experience: '10 years', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300' },
  { name: 'Mr. Amit Singh', subject: 'Science', qualification: 'M.Sc, B.Ed', experience: '8 years', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300' },
  { name: 'Mrs. Sunita Patel', subject: 'Hindi', qualification: 'MA, B.Ed', experience: '11 years', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300' },
  { name: 'Mr. Vikram Rao', subject: 'Social Science', qualification: 'MA, B.Ed', experience: '9 years', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300' },
  { name: 'Mrs. Deepika Shah', subject: 'Computer', qualification: 'MCA, B.Ed', experience: '7 years', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300' },
  { name: 'Mr. Suresh Verma', subject: 'Physical Education', qualification: 'B.P.Ed', experience: '10 years', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300' },
];

export default function Faculty() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <div className="bg-[#1E3A8A] text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Faculty</h1>
          <p className="text-blue-200">Experienced and dedicated educators committed to excellence</p>
        </div>
      </div>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle title="Meet Our Teachers" subtitle="Qualified professionals nurturing future leaders" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teachers.map((teacher, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={teacher.image} 
                    alt={teacher.name} 
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-[#1E3A8A]">{teacher.name}</h3>
                  <p className="text-[#3B82F6] font-medium text-sm mb-2">{teacher.subject}</p>
                  <div className="text-sm text-gray-600 space-y-1">
                    <p>{teacher.qualification}</p>
                    <p className="text-gray-500">{teacher.experience} experience</p>
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
