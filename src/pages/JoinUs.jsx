import React from 'react';
import { motion } from 'framer-motion';
import { FaHandshake, FaChalkboardTeacher, FaSchool, FaUserPlus } from 'react-icons/fa';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const JoinUs = () => {
  const waysToJoin = [
    {
      title: "Volunteer",
      description: "Share your expertise as a mentor or trainer",
      icon: <FaChalkboardTeacher className="text-3xl text-blue-600" />,
      cta: "Become a Volunteer",
      link: "#volunteer-form"
    },
    {
      title: "Partner With Us",
      description: "Sponsor equipment or collaborate on projects",
      icon: <FaHandshake className="text-3xl text-green-600" />,
      cta: "Explore Partnerships",
      link: "#partner-form"
    },
    {
      title: "Enroll Your School",
      description: "Bring our programs to your institution",
      icon: <FaSchool className="text-3xl text-orange-600" />,
      cta: "Request Information",
      link: "#school-form"
    },
    {
      title: "Join Our Team",
      description: "Work with us full-time or as a contractor",
      icon: <FaUserPlus className="text-3xl text-purple-600" />,
      cta: "View Openings",
      link: "#careers"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-bold mb-6"
          >
            Join the Innovate4DigiJob Movement
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-xl max-w-3xl mx-auto mb-8"
          >
            Be part of Rwanda's digital transformation by empowering youth with tech skills and opportunities
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a 
              href="#opportunities" 
              className="px-8 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Explore Opportunities
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              Contact Us
            </a>
          </motion.div>
        </div>
      </section>

      {/* Ways to Join */}
      <section id="opportunities" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-600 mb-4">How You Can Get Involved</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Whether you're an individual, organization, or educational institution, there are multiple ways to contribute
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {waysToJoin.map((way, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all"
              >
                <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mb-4 mx-auto">
                  {way.icon}
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">{way.title}</h3>
                <p className="text-gray-600 text-center mb-4">{way.description}</p>
                <a 
                  href={way.link} 
                  className="block text-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  {way.cta}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Form Section */}
      <section id="volunteer-form" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-blue-600 mb-4">Volunteer Application</h2>
            <p className="text-gray-600">
              Share your skills and experience to help empower Rwanda's youth with digital skills
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-sm"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-700 mb-2">Full Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Phone</label>
                <input 
                  type="tel" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Area of Expertise</label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  <option>Software Development</option>
                  <option>Digital Marketing</option>
                  <option>UI/UX Design</option>
                  <option>Data Science</option>
                  <option>Business Mentorship</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 mb-2">Why do you want to volunteer with us?</label>
              <textarea 
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
            </div>
            <button 
              type="submit"
              className="w-full py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Submit Application
            </button>
          </motion.form>
        </div>
      </section>

      {/* Contact Section */}
      
    </div>
  );
};

export default JoinUs;