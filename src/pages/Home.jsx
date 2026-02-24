import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaBook, FaDesktop, FaRunning, FaUsers, FaAward, FaChalkboardTeacher, FaStar } from 'react-icons/fa';
import SectionTitle from '../components/common/SectionTitle';
import Counter from '../components/common/Counter';

const facilities = [
  { icon: FaChalkboardTeacher, title: 'Smart Classes', desc: 'Digital learning with interactive boards' },
  { icon: FaDesktop, title: 'Computer Lab', desc: 'Modern computers with internet facility' },
  { icon: FaBook, title: 'Library', desc: '5000+ books and digital resources' },
  { icon: FaRunning, title: 'Sports Ground', desc: 'Spacious ground for all sports activities' },
];

const whyChooseUs = [
  { icon: FaUsers, title: 'Individual Attention', desc: 'Small class sizes for personalized learning' },
  { icon: FaAward, title: 'Academic Excellence', desc: 'Consistent 100% board results' },
  { icon: FaStar, title: 'Holistic Development', desc: 'Focus on academics, sports & arts' },
];

const testimonials = [
  { name: 'Priya Sharma', role: 'Parent', text: 'Best school in the city. My child has shown tremendous improvement in academics and confidence.' },
  { name: 'Rajesh Kumar', role: 'Parent', text: 'Excellent faculty and modern facilities. Highly recommended for quality education.' },
  { name: 'Anita Patel', role: 'Parent', text: 'The school focuses on overall development. My daughter loves going to school every day.' },
];

export default function Home() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1920')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="container-custom relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl text-white"
          >
            <span className="inline-block bg-[#3B82F6] text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
              Admissions Open 2026-27
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Shaping Future Leaders Through Quality Education
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-200">
              Excellence School provides a nurturing environment where every child discovers their potential and achieves academic excellence.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/admission" className="gradient-btn inline-block">Apply Now</Link>
              <Link to="/contact" className="bg-white text-[#1E3A8A] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 inline-block">
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                <img 
                  src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800" 
                  alt="School Building" 
                  className="w-full h-[400px] object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-[#1E3A8A] text-white p-6 rounded-xl shadow-xl hidden md:block">
                <p className="text-3xl font-bold">10+</p>
                <p className="text-sm">Years of Excellence</p>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A8A] mb-4">Welcome to Excellence School</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Founded in 2016, Excellence School has been a beacon of quality education in the region. We believe in nurturing young minds through a blend of traditional values and modern teaching methodologies.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our state-of-the-art campus, experienced faculty, and comprehensive curriculum ensure that every student receives the best education possible. We focus not just on academic excellence but also on character building and extracurricular development.
              </p>
              <Link to="/about" className="gradient-btn inline-block">Read More About Us</Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="section-padding bg-[#F3F4F6]">
        <div className="container-custom">
          <SectionTitle 
            title="Our Facilities" 
            subtitle="World-class infrastructure designed to provide the best learning environment for our students"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilities.map((facility, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#1E3A8A] transition-colors">
                  <facility.icon className="text-2xl text-[#1E3A8A] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-[#1E3A8A] mb-2">{facility.title}</h3>
                <p className="text-gray-600 text-sm">{facility.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle 
            title="Why Choose Us" 
            subtitle="Discover what makes Excellence School the preferred choice for quality education"
          />
          <div className="grid md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-white border border-blue-100 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#1E3A8A] to-[#3B82F6] rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="text-2xl text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#1E3A8A] mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="section-padding bg-[#1E3A8A] text-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: 500, suffix: '+', label: 'Students' },
              { number: 20, suffix: '+', label: 'Teachers' },
              { number: 10, suffix: '+', label: 'Years Experience' },
              { number: 100, suffix: '%', label: 'Results' },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center"
              >
                <p className="text-4xl md:text-5xl font-bold mb-2 text-[#60A5FA]">
                  <Counter end={stat.number} suffix={stat.suffix} />
                </p>
                <p className="text-blue-200">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-[#F3F4F6]">
        <div className="container-custom">
          <SectionTitle title="What Parents Say" subtitle="Testimonials from our school community" />
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-md"
              >
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => <FaStar key={i} />)}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-bold text-[#1E3A8A]">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle title="Campus Gallery" subtitle="Glimpses of our vibrant school life" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-xl group cursor-pointer"
              >
                <img 
                  src={`https://images.unsplash.com/photo-${item === 1 ? '1503676260728-1c00da094a0b' : item === 2 ? '1497633762265-9d179a990aa6' : item === 3 ? '1524178232363-1fb2b075b655' : '1427504744581-f367f707a811'}?w=400`} 
                  alt={`Gallery ${item}`}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/gallery" className="gradient-btn inline-block">View All Photos</Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6]">
        <div className="container-custom text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Admissions Open for 2026-27</h2>
            <p className="text-xl mb-8 text-blue-100">Limited seats available. Enroll your child today for a brighter tomorrow.</p>
            <Link to="/admission" className="bg-white text-[#1E3A8A] px-8 py-4 rounded-lg font-bold text-lg hover:scale-105 transition-transform inline-block">
              Apply Now
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
