import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaUserGraduate, FaChalkboardTeacher, FaUsers } from 'react-icons/fa';

const Impact = () => {
  const stats = [
    {
      value: "100+",
      label: "students trained",
      description: "Empowered with essential digital tools",
      icon: <FaUserGraduate className="text-blue-500 text-3xl" />,
      bgColor: "bg-blue-50"
    },
    {
      value: "10+",
      label: "projects launched",
      description: "Innovations solving real problems",
      icon: <FaChalkboardTeacher className="text-green-500 text-3xl" />,
      bgColor: "bg-green-50"
    },
    {
      value: "3",
      label: "community issues addressed",
      description: "Tech solutions applied locally",
      icon: <FaUsers className="text-orange-500 text-3xl" />,
      bgColor: "bg-orange-50"
    }
  ];

  const testimonials = [
    {
      quote: "This program has opened my eyes to how I can solve problems with technology. I feel empowered and confident!",
      author: "Student Participant",
      role: "Bootcamp Graduate",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80"
    },
    {
      quote: "Innovate4DigiJob is not just a project—it's a movement toward a digital future for our community.",
      author: "Jean d'Amour",
      role: "Community Leader",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Impact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <motion.h2 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-3xl sm:text-4xl font-bold text-blue-600 mb-4"
            >
              Real Change, Real Impact
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-gray-600 max-w-3xl mx-auto"
            >
              Here's what we've achieved through Innovate4DigiJob
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.4, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className={`${stat.bgColor} p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300`}
              >
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-sm mb-4 mx-auto">
                  {stat.icon}
                </div>
                <h3 className="text-4xl font-bold text-center text-gray-800 mb-2">
                  {stat.value}
                </h3>
                <p className="text-lg font-semibold text-center text-blue-600 mb-2">
                  {stat.label}
                </p>
                <p className="text-gray-600 text-center">
                  {stat.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="text-center mb-12">
            <motion.h3
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-3xl font-semibold text-blue-600 mb-4"
            >
              What People Say
            </motion.h3>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-gray-600 max-w-2xl mx-auto"
            >
              Hear from those who have experienced Innovate4DigiJob firsthand
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 + 0.4, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 relative"
              >
                <FaQuoteLeft className="text-gray-200 text-5xl absolute top-4 left-4" />
                <p className="text-gray-700 text-lg relative z-10 pl-8 mb-6">
                  {testimonial.quote}
                </p>
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <p className="font-semibold text-blue-600">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Impact;