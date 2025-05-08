import React from 'react';
import { FaLaptopCode, FaLightbulb, FaUsers, FaTools } from 'react-icons/fa';
import { motion } from 'framer-motion';


const Impact = () => {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto space-y-16">

        {/* Impact Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-4xl font-bold text-green-600">Real Change, Real Impact</h2>
          <p className="text-lg text-gray-700">Here's what we've achieved through Innovate4DigiJob.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center"
            >
              <img src='https://facilitationfirst.com/wp-content/uploads/2023/06/What-is-a-Training-Facilitator.jpeg' alt="Training" className="w-full h-40 object-cover rounded-xl mb-4" />
              <h4 className="text-xl font-semibold text-blue-600">100+ students trained</h4>
              <p className="text-gray-600">Empowered with essential digital tools.</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center"
            >
              <img src='' alt="Projects" className="w-full h-40 object-cover rounded-xl mb-4" />
              <h4 className="text-xl font-semibold text-blue-600">10+ projects launched</h4>
              <p className="text-gray-600">Innovations led by students to solve real problems.</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center"
            >
              <img src='' alt="Community" className="w-full h-40 object-cover rounded-xl mb-4" />
              <h4 className="text-xl font-semibold text-blue-600">3 issues addressed</h4>
              <p className="text-gray-600">Tech solutions applied to real community challenges.</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h3 className="text-3xl font-semibold text-green-600">What People Say</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white p-6 rounded-2xl shadow-md border border-gray-100"
            >
              <p className="italic text-gray-700">"This program has opened my eyes to how I can solve problems with technology. I feel empowered and confident!"</p>
              <span className="block mt-4 text-sm font-semibold text-blue-600">— Student Participant</span>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white p-6 rounded-2xl shadow-md border border-gray-100"
            >
              <p className="italic text-gray-700">"Innovate4DigiJob is not just a project—it's a movement toward a digital future for our community."</p>
              <span className="block mt-4 text-sm font-semibold text-green-600">— Community Leader</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Impact;
