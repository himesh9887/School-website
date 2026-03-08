import { motion } from 'framer-motion';
import { FaCalendarAlt, FaDownload, FaFilePdf } from 'react-icons/fa';
import SectionTitle from '../components/common/SectionTitle';
import noticeData from '../data/noticeData';
import PageHeader from '../components/common/PageHeader';

export default function Notice() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <PageHeader
        title="Notices"
        subtitle="Stay updated with the latest announcements, schedules, and school circulars."
      />

      <section className="section-shell section-padding soft-grid bg-[#eef5ff]">
        <div className="container-custom">
          <SectionTitle title="Latest Notices" />
          <div className="mx-auto grid max-w-4xl gap-6">
            {noticeData.map((notice, idx) => (
              <motion.div
                key={notice.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className={`surface-card border-l-4 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                  notice.important ? 'border-red-500' : 'border-[#2e63be]'
                }`}
              >
                <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
                  <div className="flex-1">
                    <div className="mb-2 flex flex-wrap items-center gap-3">
                      <h3 className="text-xl font-bold text-[#123063]">{notice.title}</h3>
                      {notice.important && (
                        <span className="rounded-full bg-red-100 px-2 py-1 text-xs font-semibold text-red-700">
                          Important
                        </span>
                      )}
                    </div>
                    <div className="mb-2 flex items-center text-sm text-slate-500">
                      <FaCalendarAlt className="mr-2" />
                      {new Date(notice.date).toLocaleDateString('en-IN', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </div>
                    <p className="text-slate-600">{notice.desc}</p>
                  </div>
                  <button className="inline-flex items-center gap-2 rounded-lg bg-blue-50 px-4 py-2 font-medium text-[#123063] transition-all duration-300 hover:bg-[#123063] hover:text-white">
                    <FaFilePdf />
                    <span>Download</span>
                    <FaDownload className="text-xs" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
