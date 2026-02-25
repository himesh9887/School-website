import { motion } from 'framer-motion';
import SectionTitle from '../components/common/SectionTitle';
import { FaCheck } from 'react-icons/fa';
import PageHeader from '../components/common/PageHeader';

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
      <PageHeader
        title="Academics"
        subtitle="Comprehensive curriculum designed for conceptual learning and holistic development."
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle title="Classes Offered" />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {classes.map((cls, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <h3 className="mb-2 text-xl font-bold text-[#123063]">{cls.level}</h3>
                <p className="mb-2 font-semibold text-[#2e63be]">{cls.grades}</p>
                <p className="mb-3 text-sm text-slate-500">Age: {cls.age}</p>
                <p className="text-sm text-slate-600">{cls.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding soft-grid bg-[#F3F4F6]">
        <div className="container-custom">
          <SectionTitle title="Curriculum Details" />
          <div className="overflow-x-auto rounded-2xl bg-white shadow-md">
            <table className="w-full min-w-[560px]">
              <thead className="bg-[#123063] text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Class</th>
                  <th className="px-6 py-4 text-left">Subjects Offered</th>
                </tr>
              </thead>
              <tbody>
                {subjects.map((row, idx) => (
                  <tr key={idx} className="border-b transition-colors hover:bg-blue-50">
                    <td className="px-6 py-4 font-semibold text-[#123063]">{row.class}</td>
                    <td className="px-6 py-4 text-slate-600">{row.subjects}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle title="Teaching Methodology" />
          <div className="grid gap-5 md:grid-cols-2">
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
                transition={{ delay: idx * 0.08 }}
                className="flex items-center gap-4 rounded-xl bg-blue-50 p-4 transition-all duration-300 hover:bg-blue-100"
              >
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#123063]">
                  <FaCheck className="text-white" />
                </div>
                <span className="font-medium text-slate-800">{method}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding soft-grid bg-[#F3F4F6]">
        <div className="container-custom">
          <SectionTitle title="Examination Pattern" />
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { title: 'Unit Tests', desc: 'Monthly assessments to track progress' },
              { title: 'Half-Yearly', desc: 'Comprehensive mid-term examination' },
              { title: 'Annual Exams', desc: 'Final board pattern examination' },
            ].map((exam, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="rounded-2xl border border-slate-200 bg-white p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <h4 className="mb-2 text-xl font-bold text-[#123063]">{exam.title}</h4>
                <p className="text-slate-600">{exam.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
