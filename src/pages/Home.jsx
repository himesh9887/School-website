import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FaBook,
  FaDesktop,
  FaRunning,
  FaUsers,
  FaAward,
  FaChalkboardTeacher,
  FaStar,
  FaArrowRight,
  FaCheckCircle,
} from 'react-icons/fa';
import SectionTitle from '../components/common/SectionTitle';
import Counter from '../components/common/Counter';

const facilities = [
  { icon: FaChalkboardTeacher, title: 'Smart Classrooms', desc: 'Interactive digital boards and visual-first learning environment.' },
  { icon: FaDesktop, title: 'Computer Lab', desc: 'Updated systems with guided coding and practical sessions.' },
  { icon: FaBook, title: 'Modern Library', desc: 'Academic and story collections with quiet reading zones.' },
  { icon: FaRunning, title: 'Sports Arena', desc: 'Daily sports activities for fitness and team building.' },
];

const highlights = [
  { icon: FaUsers, title: 'Individual Attention', desc: 'Small batches help teachers focus on every child.' },
  { icon: FaAward, title: 'Excellent Results', desc: 'Strong board outcomes with concept-based preparation.' },
  { icon: FaStar, title: 'Overall Growth', desc: 'Academics, confidence, communication and leadership.' },
];

const testimonials = [
  { name: 'Priya Sharma', role: 'Parent', text: 'Teachers are supportive and the school atmosphere is very positive for learning.' },
  { name: 'Rajesh Kumar', role: 'Parent', text: 'The quality of education and discipline has improved my child’s confidence a lot.' },
  { name: 'Anita Patel', role: 'Parent', text: 'Balanced focus on studies and activities. My daughter enjoys coming to school.' },
];

const stats = [
  { number: 500, suffix: '+', label: 'Students' },
  { number: 20, suffix: '+', label: 'Qualified Teachers' },
  { number: 10, suffix: '+', label: 'Years of Trust' },
  { number: 100, suffix: '%', label: 'Board Success' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  show: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <section className="relative overflow-hidden bg-[#0f244a] pt-16 pb-12 text-white md:pt-20 md:pb-14">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=2000')] bg-cover bg-center opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b1d3d]/95 via-[#123063]/85 to-[#1f4ea3]/80" />
        <div className="container-custom relative z-10 grid gap-8 lg:grid-cols-2 lg:items-center">
          <motion.div initial="hidden" animate="show" variants={fadeUp} transition={{ duration: 0.7 }}>
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200/30 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-blue-100">
              Admissions Open 2026-27
            </span>
            <h1 className="mb-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              A Better Learning Experience For Every Child
            </h1>
            <p className="mb-6 max-w-xl text-base text-blue-100 sm:text-lg">
              Excellence School blends modern teaching, strong values, and personal attention so
              students grow confidently in academics and life.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link to="/admission" className="gradient-btn">
                Apply Now <FaArrowRight className="text-xs" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-xl border border-white/50 px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-white hover:text-[#123063]"
              >
                Contact School
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="rounded-2xl border border-white/25 bg-white/10 p-5 backdrop-blur-sm sm:p-7"
          >
            <p className="mb-5 text-lg font-semibold text-blue-100">Why Parents Trust Us</p>
            <div className="space-y-4">
              {[
                'Experienced faculty with friendly mentorship',
                'Safe campus with disciplined environment',
                'Regular parent communication and progress tracking',
                'Balanced focus on academics and activities',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-xl bg-white/10 p-3">
                  <FaCheckCircle className="mt-0.5 text-blue-200" />
                  <p className="text-sm text-blue-50">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative z-20 mt-6 pb-8 sm:mt-8 sm:pb-10">
        <div className="container-custom">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="rounded-2xl border border-blue-100 bg-white p-5 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <p className="mb-1 text-3xl font-bold text-[#123063] sm:text-4xl">
                  <Counter end={stat.number} suffix={stat.suffix} />
                </p>
                <p className="text-sm text-slate-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="group overflow-hidden rounded-2xl shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=900"
                  alt="Students in classroom"
                  className="h-[350px] w-full object-cover transition-transform duration-700 group-hover:scale-110 sm:h-[420px]"
                />
              </div>
              <div className="absolute -bottom-5 -right-2 hidden rounded-xl bg-[#123063] px-5 py-4 text-white shadow-lg sm:block">
                <p className="text-2xl font-bold">10+ Years</p>
                <p className="text-xs text-blue-100">of educational excellence</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-4 text-3xl font-bold text-[#123063] sm:text-4xl">
                Welcome to Excellence School
              </h2>
              <p className="mb-4 leading-relaxed text-slate-600">
                Since 2016, we have built a student-first learning culture with strong academics,
                discipline, and future-ready skills.
              </p>
              <p className="mb-6 leading-relaxed text-slate-600">
                Our mission is simple: create confident learners through practical teaching,
                supportive mentoring, and a safe school environment.
              </p>
              <Link to="/about" className="gradient-btn">
                Explore About Us
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#f2f7ff]">
        <div className="container-custom">
          <SectionTitle
            title="Our Facilities"
            subtitle="Modern infrastructure designed for better learning, creativity, and confidence."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {facilities.map((facility, idx) => (
              <motion.article
                key={facility.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="group rounded-2xl border border-blue-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100 transition-colors duration-300 group-hover:bg-[#123063]">
                  <facility.icon className="text-2xl text-[#123063] transition-colors duration-300 group-hover:text-white" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-[#123063]">{facility.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{facility.desc}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            title="Why Choose Us"
            subtitle="We focus on academic quality and complete personality development."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {highlights.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="rounded-2xl border border-slate-200 bg-gradient-to-b from-white to-blue-50 p-7 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#123063] to-[#2e63be]">
                  <item.icon className="text-2xl text-white" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-[#123063]">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#f2f7ff]">
        <div className="container-custom">
          <SectionTitle title="What Parents Say" subtitle="Feedback from our trusted school community" />
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-4 flex gap-1 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <p className="mb-4 italic text-slate-600">"{testimonial.text}"</p>
                <p className="font-bold text-[#123063]">{testimonial.name}</p>
                <p className="text-sm text-slate-500">{testimonial.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-3xl bg-gradient-to-r from-[#10244a] via-[#123063] to-[#2e63be] px-6 py-12 text-center text-white sm:px-10"
          >
            <h2 className="mb-3 text-3xl font-bold sm:text-4xl">Admissions Open For 2026-27</h2>
            <p className="mx-auto mb-8 max-w-2xl text-blue-100">
              Book a campus visit and explore our classrooms, teaching team, and student support
              programs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/admission" className="rounded-xl bg-white px-7 py-3 font-bold text-[#123063] transition-transform duration-300 hover:-translate-y-1">
                Start Admission
              </Link>
              <Link to="/contact" className="rounded-xl border border-white/60 px-7 py-3 font-semibold text-white transition-colors duration-300 hover:bg-white hover:text-[#123063]">
                Schedule Visit
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
