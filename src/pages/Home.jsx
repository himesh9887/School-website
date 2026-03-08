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
  FaPlayCircle,
  FaBus,
  FaShieldAlt,
  FaMedal,
  FaChartLine,
  FaClock,
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

const programs = [
  { title: 'Foundational Years', desc: 'Play-based learning and strong literacy-numeracy foundations for early classes.' },
  { title: 'Future Skills Track', desc: 'Coding exposure, communication practice, project work, and digital confidence.' },
  { title: 'Activity Clubs', desc: 'Debate, arts, music, sports, and leadership routines that build personality.' },
];

const testimonials = [
  { name: 'Priya Sharma', role: 'Parent', text: 'Teachers are supportive and the school atmosphere is very positive for learning.' },
  { name: 'Rajesh Kumar', role: 'Parent', text: 'The quality of education and discipline has improved my child\'s confidence a lot.' },
  { name: 'Anita Patel', role: 'Parent', text: 'Balanced focus on studies and activities. My daughter enjoys coming to school.' },
];

const stats = [
  { number: 500, suffix: '+', label: 'Students' },
  { number: 20, suffix: '+', label: 'Qualified Teachers' },
  { number: 10, suffix: '+', label: 'Years of Trust' },
  { number: 100, suffix: '%', label: 'Board Success' },
];

const quickPoints = [
  { icon: FaChartLine, title: 'Performance Focus', desc: 'Weekly tracking, concept clarity, and result-oriented mentoring.' },
  { icon: FaClock, title: 'Structured Routines', desc: 'Timetables, parent updates, and disciplined academic flow.' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  show: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <section className="relative overflow-hidden pb-16 pt-10 text-white md:pb-24 md:pt-16">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=2000')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(251,146,60,0.14),_transparent_22%),linear-gradient(135deg,_rgba(9,20,45,1)_0%,_rgba(17,34,77,0.96)_38%,_rgba(36,80,164,0.94)_100%)]" />
        <div className="absolute left-0 right-0 top-0 h-px bg-white/20" />
        <div className="container-custom relative z-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <motion.div initial="hidden" animate="show" variants={fadeUp} transition={{ duration: 0.7 }}>
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-blue-100">
              Admissions Open 2026-27
            </span>
            <h1 className="mb-5 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl lg:text-7xl">
              A modern school website and a stronger learning identity for every child.
            </h1>
            <p className="mb-8 max-w-2xl text-base leading-8 text-blue-100 sm:text-lg">
              Excellence School blends modern teaching, trusted discipline, and personal mentoring
              so students grow confidently in academics, communication, and real-world skills.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link to="/admission" className="gradient-btn">
                Apply Now <FaArrowRight className="text-xs" />
              </Link>
              <Link to="/contact" className="secondary-btn border-white/30 bg-white/12 px-6 py-3 text-white">
                Contact School
              </Link>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                ['Smart Campus', 'Digital classrooms, library, labs, and guided activities'],
                ['Parent Connect', 'Regular updates, PTM schedule, and transparent communication'],
                ['Balanced Growth', 'Academics, sports, values, and confidence building'],
              ].map(([title, desc]) => (
                <div key={title} className="stat-chip">
                  <p className="text-sm font-semibold text-white">{title}</p>
                  <p className="mt-2 text-sm leading-6 text-blue-100">{desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {quickPoints.map((item) => (
                <div key={item.title} className="rounded-[1.4rem] border border-white/12 bg-white/8 p-4 backdrop-blur-md">
                  <item.icon className="text-xl text-orange-300" />
                  <h3 className="mt-3 text-base font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-blue-100">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-panel rounded-[2rem] p-5 sm:p-7"
          >
            <div className="overflow-hidden rounded-[1.6rem] bg-white text-slate-900 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1200"
                alt="Students in a modern classroom"
                className="h-64 w-full object-cover sm:h-72"
              />
              <div className="p-6 sm:p-7">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#2450a4]">
                      Why parents choose us
                    </p>
                    <h2 className="mt-2 text-2xl font-bold text-[#11224d]">Designed for trust and results</h2>
                  </div>
                  <span className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-4 py-2 text-sm font-semibold text-orange-600">
                    <FaPlayCircle /> Campus Tour
                  </span>
                </div>
                <div className="mt-6 grid gap-4">
                  {[
                    'Experienced faculty with friendly mentorship',
                    'Safe campus with disciplined environment',
                    'Regular parent communication and progress tracking',
                    'Balanced focus on academics and activities',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4">
                      <FaCheckCircle className="mt-0.5 text-[#2450a4]" />
                      <p className="text-sm text-slate-600">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative z-20 -mt-10 pb-8 sm:-mt-12 sm:pb-12">
        <div className="container-custom">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="surface-card bg-white/95 p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <p className="mb-1 text-3xl font-bold text-[#11224d] sm:text-4xl">
                  <Counter end={stat.number} suffix={stat.suffix} />
                </p>
                <p className="text-sm text-slate-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <motion.div
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="group overflow-hidden rounded-[2rem] shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=900"
                  alt="Students in classroom"
                  className="h-[350px] w-full object-cover transition-transform duration-700 group-hover:scale-110 sm:h-[420px]"
                />
              </div>
              <div className="surface-card absolute -bottom-6 -right-2 hidden max-w-xs p-5 sm:block">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2450a4]">Trusted Since</p>
                <p className="mt-2 text-3xl font-bold text-[#11224d]">2016</p>
                <p className="mt-1 text-sm text-slate-600">10+ years of educational excellence and parent trust.</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="eyebrow">About Our Campus</span>
              <h2 className="mb-4 mt-5 text-3xl font-bold text-[#11224d] sm:text-5xl">
                Welcome to Excellence School
              </h2>
              <p className="mb-4 leading-8 text-slate-600">
                Since 2016, we have built a student-first learning culture with strong academics,
                discipline, and future-ready skills.
              </p>
              <p className="mb-8 leading-8 text-slate-600">
                Our mission is simple: create confident learners through practical teaching,
                supportive mentoring, and a safe school environment.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  [FaBus, 'Safe Transport', 'Reliable pickup support and monitored routes'],
                  [FaShieldAlt, 'Secure Campus', 'Safety-first systems and attentive supervision'],
                  [FaMedal, 'Strong Outcomes', 'Consistent performance with concept-based learning'],
                  [FaUsers, 'Mentor Support', 'Individual attention for every learner'],
                ].map(([Icon, title, desc]) => (
                  <div key={title} className="surface-card p-4">
                    <Icon className="text-xl text-[#2450a4]" />
                    <h3 className="mt-3 font-bold text-[#11224d]">{title}</h3>
                    <p className="mt-1 text-sm leading-6 text-slate-600">{desc}</p>
                  </div>
                ))}
              </div>
              <Link to="/about" className="gradient-btn mt-8">
                Explore About Us
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-shell section-padding soft-grid bg-[#eef5ff]">
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
                className="surface-card group p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 transition-colors duration-300 group-hover:bg-[#11224d]">
                  <facility.icon className="text-2xl text-[#123063] transition-colors duration-300 group-hover:text-white" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-[#11224d]">{facility.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{facility.desc}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
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
                className="surface-card p-7 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#11224d] to-[#3970d7]">
                  <item.icon className="text-2xl text-white" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-[#11224d]">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell section-padding soft-grid bg-[#eef5ff]">
        <div className="container-custom">
          <SectionTitle
            title="Learning Programs"
            subtitle="A clear academic journey from foundational learning to board preparation and confidence building."
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {programs.map((program, idx) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="surface-card relative overflow-hidden p-7"
              >
                <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-orange-100/70 blur-2xl" />
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#2450a4]">
                  Program {idx + 1}
                </p>
                <h3 className="mt-3 text-2xl font-bold text-[#11224d]">{program.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">{program.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
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
                className="surface-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-4 flex gap-1 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <p className="mb-4 italic text-slate-600">"{testimonial.text}"</p>
                <p className="font-bold text-[#11224d]">{testimonial.name}</p>
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
            className="overflow-hidden rounded-[2rem] bg-gradient-to-r from-[#0b1530] via-[#123063] to-[#3970d7] px-6 py-12 text-center text-white sm:px-10"
          >
            <h2 className="mb-3 text-3xl font-bold sm:text-4xl">Admissions Open For 2026-27</h2>
            <p className="mx-auto mb-8 max-w-2xl text-blue-100">
              Book a campus visit and explore our classrooms, teaching team, and student support
              programs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/admission" className="rounded-full bg-white px-7 py-3 font-bold text-[#123063] transition-transform duration-300 hover:-translate-y-1">
                Start Admission
              </Link>
              <Link to="/contact" className="rounded-full border border-white/60 px-7 py-3 font-semibold text-white transition-colors duration-300 hover:bg-white hover:text-[#123063]">
                Schedule Visit
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
