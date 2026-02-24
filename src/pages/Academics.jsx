import { motion } from 'framer-motion';
import SectionTitle from '../components/common/SectionTitle';
import { FaCheck } from 'react-icons/fa';

const classes = [
  { level: 'Pre-Primary', grades: 'Nursery to KG', age: '3-5 years', description: 'Play-way method focusing on motor skills and basic concepts' },
  { level: 'Primary', grades: '1st to 5th', age: '6-10 years', description: 'Foundation building in all subjects with activity-based learning' },
  { level: 'Middle School', grades: '6th to 8th', age: '11-13 years', description: 'Subject specialization begins with practical approach' },
  { level: 'Secondary', grades: '9th to 10th', age: '14-15 years', description: 'Board preparation with intensive coaching and tests' },
];

const subjects = [
  { class: '1st-5th', subjects: 'English, Hindi, Math, EVS, Computer, Art, Music' },
  { class: '6th-8th', subjects: 'English, Hindi, Math, Science, Social Science, Computer, Sanskrit' },
  { class: '9th-10th', subjects: 'English, Hindi/Math, Science, Social Science, IT/Additional Subject' },
];

export default function Academics() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <div className="bg-[#1E3A8A] text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Academics</h1>
          <p className="text-blue-200">Comprehensive curriculum designed for holistic development</p>
        </div>
      </div>

      {/* Classes Offered */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle title="Classes Offered" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {classes.map((cls, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl border border-blue-100 hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-bold text-[#1E3A8A] mb-2">{cls.level}</h3>
                <p className="text-[#3B82F6] font-semibold mb-2">{cls.grades}</p>
                <p className="text-sm text-gray-500 mb-3">Age: {cls.age}</p>
                <p className="text-gray-600 text-sm">{cls.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="section-padding bg-[#F3F4F6]">
        <div className="container-custom">
          <SectionTitle title="Curriculum Details" />
          <div className="bg-white rounded-2xl shadow-md overflow-hidden">
            <table className="w-full">
              <thead className="bg-[#1E3A8A] text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Class</th>
                  <th className="px-6 py-4 text-left">Subjects Offered</th>
                </tr>
              </thead>
              <tbody>
                {subjects.map((row, idx) => (
                  <tr key={idx} className="border-b hover:bg-blue-50">
                    <td className="px-6 py-4 font-semibold text-[#1E3A8A]">{row.class}</td>
                    <td className="px-6 py-4 text-gray-600">{row.subjects}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Teaching Method */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle title="Teaching Methodology" />
          <div className="grid md:grid-cols-2 gap-8">
            {[
              'Interactive Smart Classes',
              'Experiential Learning',
              'Regular Assessments',
              'Project-Based Learning',
              'Group Discussions',
              'Practical Lab Sessions',
            ].map((method, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-center space-x-4 p-4 bg-blue-50 rounded-xl"
              >
                <div className="w-10 h-10 bg-[#1E3A8A] rounded-full flex items-center justify-center flex-shrink-0">
                  <FaCheck className="text-white" />
                </div>
                <span className="font-medium text-gray-800">{method}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Examination Pattern */}
      <section className="section-padding bg-[#F3F4F6]">
        <div className="container-custom">
          <SectionTitle title="Examination Pattern" />
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Unit Tests', desc: 'Monthly assessments to track progress' },
              { title: 'Half-Yearly', desc: 'Comprehensive mid-term examination' },
              { title: 'Annual Exams', desc: 'Final board pattern examination' },
            ].map((exam, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-md text-center"
              >
                <h4 className="text-xl font-bold text-[#1E3A8A] mb-2">{exam.title}</h4>
                <p className="text-gray-600">{exam.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
