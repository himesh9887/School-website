import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';
import PageHeader from '../components/common/PageHeader';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent successfully.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <PageHeader
        title="Contact Us"
        subtitle="Get in touch for admissions, academics, and general school support."
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-2">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h3 className="mb-8 text-2xl font-bold text-[#123063]">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4 rounded-xl bg-blue-50 p-4 transition-colors hover:bg-blue-100">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-[#123063]">
                    <FaMapMarkerAlt className="text-xl text-white" />
                  </div>
                  <div>
                    <h4 className="mb-1 font-bold text-slate-800">Address</h4>
                    <p className="text-slate-600">123 Education Street, Knowledge City, State - 123456</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-xl bg-blue-50 p-4 transition-colors hover:bg-blue-100">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-[#123063]">
                    <FaPhone className="text-xl text-white" />
                  </div>
                  <div>
                    <h4 className="mb-1 font-bold text-slate-800">Phone</h4>
                    <p className="text-slate-600">+91 98765 43210<br />+91 98765 43211</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-xl bg-blue-50 p-4 transition-colors hover:bg-blue-100">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-[#123063]">
                    <FaEnvelope className="text-xl text-white" />
                  </div>
                  <div>
                    <h4 className="mb-1 font-bold text-slate-800">Email</h4>
                    <p className="text-slate-600">info@excellenceschool.edu<br />admission@excellenceschool.edu</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-xl bg-blue-50 p-4 transition-colors hover:bg-blue-100">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-[#123063]">
                    <FaClock className="text-xl text-white" />
                  </div>
                  <div>
                    <h4 className="mb-1 font-bold text-slate-800">School Hours</h4>
                    <p className="text-slate-600">Mon - Fri: 8:00 AM - 3:00 PM<br />Sat: 8:00 AM - 12:00 PM</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h3 className="mb-8 text-2xl font-bold text-[#123063]">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="rounded-2xl bg-[#F3F4F6] p-8 shadow-md">
                <div className="space-y-4">
                  <div>
                    <label className="mb-2 block font-medium text-slate-700">Your Name</label>
                    <input
                      type="text"
                      required
                      className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition-all focus:border-[#2e63be] focus:ring-2 focus:ring-blue-200"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="mb-2 block font-medium text-slate-700">Email Address</label>
                    <input
                      type="email"
                      required
                      className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition-all focus:border-[#2e63be] focus:ring-2 focus:ring-blue-200"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="mb-2 block font-medium text-slate-700">Message</label>
                    <textarea
                      required
                      rows="4"
                      className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition-all focus:border-[#2e63be] focus:ring-2 focus:ring-blue-200"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>
                  <button type="submit" className="gradient-btn w-full">
                    Send Message
                  </button>
                </div>
              </form>
            </motion.div>
          </div>

          <div className="mt-16 overflow-hidden rounded-2xl shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.1234567890123!2d77.12345678901234!3d28.123456789012345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDA3JzI0LjQiTiA3N8KwMDcnMjQuNCJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
              width="100%"
              height="380"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              className="w-full"
            />
          </div>
        </div>
      </section>
    </motion.div>
  );
}
