import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/common/SectionTitle';
import { FaCheck, FaFileAlt, FaDownload } from 'react-icons/fa';

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
  { class: 'Nursery to KG', admission: 'Ã¢â€šÂ¹5,000', monthly: 'Ã¢â€šÂ¹2,500' },
  { class: '1st to 5th', admission: 'Ã¢â€šÂ¹6,000', monthly: 'Ã¢â€šÂ¹3,000' },
  { class: '6th to 8th', admission: 'Ã¢â€šÂ¹7,000', monthly: 'Ã¢â€šÂ¹3,500' },
  { class: '9th to 10th', admission: 'Ã¢â€šÂ¹8,000', monthly: 'Ã¢â€šÂ¹4,000' },
];

export default function Admission() {
  const [formData, setFormData] = useState({
    studentName: '',
    fatherName: '',
    class: '',
    mobile: '',
    address: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Application submitted successfully! We will contact you soon.');
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <div className="bg-[#1E3A8A] text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Admission</h1>
          <p className="text-blue-200">Join our family of excellence. Admissions open for 2026-27.</p>
        </div>
      </div>

      {/* Process Steps */}
      <section className="section-padding bg-white">
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
                className="w-full sm:w-48 bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl border-2 border-blue-100 text-center relative"
              >
                <div className="w-10 h-10 bg-[#1E3A8A] text-white rounded-full flex items-center justify-center font-bold mx-auto mb-3">
                  {item.step}
                </div>
                <h4 className="font-bold text-[#1E3A8A] mb-2">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.desc}</p>
                {idx < steps.length - 1 && (
                  <div className="hidden sm:block absolute top-1/2 -right-3 w-6 h-0.5 bg-[#3B82F6]" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Documents & Fee Structure */}
      <section className="section-padding bg-[#F3F4F6]">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Documents */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h3 className="text-2xl font-bold text-[#1E3A8A] mb-6 flex items-center">
                <FaFileAlt className="mr-3" /> Required Documents
              </h3>
              <div className="bg-white p-6 rounded-2xl shadow-md">
                <ul className="space-y-3">
                  {documents.map((doc, idx) => (
                    <li key={idx} className="flex items-center space-x-3 text-gray-700">
                      <FaCheck className="text-green-500" />
                      <span>{doc}</span>
                    </li>
                  ))}
                </ul>
                <button className="mt-6 w-full py-3 border-2 border-[#1E3A8A] text-[#1E3A8A] rounded-lg font-semibold hover:bg-[#1E3A8A] hover:text-white transition-colors flex items-center justify-center">
                  <FaDownload className="mr-2" /> Download Prospectus
                </button>
              </div>
            </motion.div>

            {/* Fee Structure */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h3 className="text-2xl font-bold text-[#1E3A8A] mb-6">Fee Structure</h3>
              <div className="bg-white rounded-2xl shadow-md overflow-hidden">
                <table className="w-full">
                  <thead className="bg-[#1E3A8A] text-white">
                    <tr>
                      <th className="px-4 py-3 text-left">Class</th>
                      <th className="px-4 py-3 text-left">Admission</th>
                      <th className="px-4 py-3 text-left">Monthly</th>
                    </tr>
                  </thead>
                  <tbody>
                    {fees.map((fee, idx) => (
                      <tr key={idx} className="border-b hover:bg-blue-50">
                        <td className="px-4 py-3 text-gray-800">{fee.class}</td>
                        <td className="px-4 py-3 text-[#1E3A8A] font-semibold">{fee.admission}</td>
                        <td className="px-4 py-3 text-gray-600">{fee.monthly}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Online Form */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-2xl">
          <SectionTitle title="Online Admission Form" subtitle="Fill in the details below to apply" />
          <motion.form 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="bg-[#F3F4F6] p-8 rounded-2xl shadow-md"
          >
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Student Name *</label>
                <input 
                  type="text" 
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#3B82F6] focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                  value={formData.studentName}
                  onChange={(e) => setFormData({...formData, studentName: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Father's Name *</label>
                <input 
                  type="text" 
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#3B82F6] focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                  value={formData.fatherName}
                  onChange={(e) => setFormData({...formData, fatherName: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Class Applying For *</label>
                <select 
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#3B82F6] focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                  value={formData.class}
                  onChange={(e) => setFormData({...formData, class: e.target.value})}
                >
                  <option value="">Select Class</option>
                  <option value="nursery">Nursery</option>
                  <option value="kg">KG</option>
                  {[...Array(10)].map((_, i) => (
                    <option key={i} value={i+1}>Class {i+1}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Mobile Number *</label>
                <input 
                  type="tel" 
                  required
                  pattern="[0-9]{10}"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#3B82F6] focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                  value={formData.mobile}
                  onChange={(e) => setFormData({...formData, mobile: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Address *</label>
                <textarea 
                  required
                  rows="3"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#3B82F6] focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                  value={formData.address}
                  onChange={(e) => setFormData({...formData, address: e.target.value})}
                />
              </div>
              <button type="submit" className="w-full gradient-btn text-lg py-4">
                Submit Application
              </button>
            </div>
          </motion.form>
        </div>
      </section>
    </motion.div>
  );
}
