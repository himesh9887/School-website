import { motion } from 'framer-motion';
import SectionTitle from '../components/common/SectionTitle';
import { FaCalendarAlt, FaDownload, FaFilePdf } from 'react-icons/fa';

const notices = [
  { 
    id: 1, 
    title: 'Annual Examination Schedule 2026', 
    date: '2026-02-20', 
    desc: 'Final examination timetable for classes 1st to 10th. Please check the detailed schedule.',
    important: true 
  },
  { 
    id: 2, 
    title: 'Parent-Teacher Meeting', 
    date: '2026-02-25', 
    desc: 'PTM scheduled for all classes. Timings: 9:00 AM to 1:00 PM.',
    important: false 
  },
  { 
    id: 3, 
    title: 'Summer Vacation Notice', 
    date: '2026-02-18', 
    desc: 'School will remain closed from May 15 to June 30 for summer vacation.',
    important: true 
  },
  { 
    id: 4, 
    title: 'Admission Open 2026-27', 
    date: '2026-02-15', 
    desc: 'Applications are invited for Nursery to Class 9. Limited seats available.',
    important: true 
  },
  { 
    id: 5, 
    title: 'Sports Day Celebration', 
    date: '2026-02-10', 
    desc: 'Annual Sports Day will be held on March 15. All parents are invited.',
    important: false 
  },
  { 
    id: 6, 
    title: 'Fee Payment Reminder', 
    date: '2026-02-05', 
    desc: 'Last date for quarterly fee payment is March 31, 2026.',
    important: false 
  },
];

export default function Notice() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <div className="bg-[#1E3A8A] text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Notices</h1>
          <p className="text-blue-200">Stay updated with latest announcements</p>
        </div>
      </div>

      <section className="section-padding bg-[#F3F4F6]">
        <div className="container-custom">
          <SectionTitle title="Latest Notices" />
          <div className="grid gap-6 max-w-4xl mx-auto">
            {notices.map((notice, idx) => (
              <motion.div
                key={notice.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow border-l-4 ${
                  notice.important ? 'border-red-500' : 'border-[#3B82F6]'
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-[#1E3A8A]">{notice.title}</h3>
                      {notice.important && (
                        <span className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded-full font-semibold">
                          Important
                        </span>
                      )}
                    </div>
                    <div className="flex items-center text-gray-500 text-sm mb-2">
                      <FaCalendarAlt className="mr-2" />
                      {new Date(notice.date).toLocaleDateString('en-IN', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </div>
                    <p className="text-gray-600">{notice.desc}</p>
                  </div>
                  <button className="flex items-center space-x-2 px-4 py-2 bg-blue-50 text-[#1E3A8A] rounded-lg hover:bg-[#1E3A8A] hover:text-white transition-colors">
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
