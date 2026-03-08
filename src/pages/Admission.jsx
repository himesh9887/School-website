import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/common/SectionTitle';
import { FaCheck, FaFileAlt, FaDownload } from 'react-icons/fa';
import PageHeader from '../components/common/PageHeader';

const steps = [
  { step: 1, title: 'Inquiry', desc: 'Visit school or call for initial inquiry' },
  { step: 2, title: 'Form Submission', desc: 'Fill and submit admission form with documents' },
  { step: 3, title: 'Entrance Test', desc: 'Assessment test for appropriate class level' },
  { step: 4, title: 'Interview', desc: 'Interaction with parents and student' },
  { step: 5, title: 'Admission', desc: 'Fee payment and confirmation' },
];

const documents = [
  'Birth Certificate',
  'Previous School TC',
  'Report Card',
  'Aadhar Card',
  'Passport Size Photos (4)',
  'Address Proof',
];

const fees = [
  { class: 'Nursery to KG', admission: 'Rs 5,000', monthly: 'Rs 2,500' },
  { class: '1st to 5th', admission: 'Rs 6,000', monthly: 'Rs 3,000' },
  { class: '6th to 8th', admission: 'Rs 7,000', monthly: 'Rs 3,500' },
  { class: '9th to 10th', admission: 'Rs 8,000', monthly: 'Rs 4,000' },
];

export default function Admission() {
  const [formData, setFormData] = useState({
    studentName: '',
    fatherName: '',
    class: '',
    mobile: '',
    address: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Application submitted successfully. We will contact you soon.');
    setFormData({ studentName: '', fatherName: '', class: '', mobile: '', address: '' });
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <PageHeader
        title="Admission"
        subtitle="Join our learning community. Admissions are open for session 2026-27."
      />

      <section className="section-padding">
        <div className="container-custom">
          <SectionTitle title="Admission Process" />
          <div className="flex flex-wrap justify-center gap-4">
            {steps.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="surface-card relative w-full p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:w-48"
              >
                <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#123063] font-bold text-white">
                  {item.step}
                </div>
                <h4 className="mb-2 font-bold text-[#123063]">{item.title}</h4>
                <p className="text-sm text-slate-600">{item.desc}</p>
                {idx < steps.length - 1 && (
                  <div className="absolute top-1/2 -right-3 hidden h-0.5 w-6 bg-[#2e63be] sm:block" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell section-padding soft-grid bg-[#eef5ff]">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-2">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h3 className="mb-6 flex items-center text-2xl font-bold text-[#123063]">
                <FaFileAlt className="mr-3" /> Required Documents
              </h3>
              <div className="surface-card p-6">
                <ul className="space-y-3">
                  {documents.map((doc, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-slate-700">
                      <FaCheck className="text-green-500" />
                      <span>{doc}</span>
                    </li>
                  ))}
                </ul>
                <button className="secondary-btn mt-6 flex w-full justify-center gap-2 rounded-2xl border-2 border-[#123063] py-3">
                  <FaDownload /> Download Prospectus
                </button>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h3 className="mb-6 text-2xl font-bold text-[#123063]">Fee Structure</h3>
              <div className="surface-card overflow-x-auto">
                <table className="w-full min-w-[420px]">
                  <thead className="bg-[#123063] text-white">
                    <tr>
                      <th className="px-4 py-3 text-left">Class</th>
                      <th className="px-4 py-3 text-left">Admission</th>
                      <th className="px-4 py-3 text-left">Monthly</th>
                    </tr>
                  </thead>
                  <tbody>
                    {fees.map((fee, idx) => (
                      <tr key={idx} className="border-b transition-colors hover:bg-blue-50">
                        <td className="px-4 py-3 text-slate-800">{fee.class}</td>
                        <td className="px-4 py-3 font-semibold text-[#123063]">{fee.admission}</td>
                        <td className="px-4 py-3 text-slate-600">{fee.monthly}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom max-w-2xl">
          <SectionTitle title="Online Admission Form" subtitle="Fill in the details below to apply" />
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="surface-card p-6 md:p-8"
          >
            <div className="space-y-4">
              <div>
                <label className="mb-2 block font-medium text-slate-700">Student Name *</label>
                <input
                  type="text"
                  required
                  className="field"
                  value={formData.studentName}
                  onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                />
              </div>
              <div>
                <label className="mb-2 block font-medium text-slate-700">Father&apos;s Name *</label>
                <input
                  type="text"
                  required
                  className="field"
                  value={formData.fatherName}
                  onChange={(e) => setFormData({ ...formData, fatherName: e.target.value })}
                />
              </div>
              <div>
                <label className="mb-2 block font-medium text-slate-700">Class Applying For *</label>
                <select
                  required
                  className="field"
                  value={formData.class}
                  onChange={(e) => setFormData({ ...formData, class: e.target.value })}
                >
                  <option value="">Select Class</option>
                  <option value="nursery">Nursery</option>
                  <option value="kg">KG</option>
                  {[...Array(10)].map((_, i) => (
                    <option key={i} value={i + 1}>
                      Class {i + 1}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="mb-2 block font-medium text-slate-700">Mobile Number *</label>
                <input
                  type="tel"
                  required
                  pattern="[0-9]{10}"
                  className="field"
                  value={formData.mobile}
                  onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                />
              </div>
              <div>
                <label className="mb-2 block font-medium text-slate-700">Address *</label>
                <textarea
                  required
                  rows="3"
                  className="field"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                />
              </div>
              <button type="submit" className="gradient-btn w-full py-4 text-lg">
                Submit Application
              </button>
            </div>
          </motion.form>
        </div>
      </section>
    </motion.div>
  );
}
