import React from 'react';
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
          <h2 className="text-4xl font-bold text-blue-600">Real Change, Real Impact</h2>
          <p className="text-lg text-gray-700">Here's what we've achieved through Innovate4DigiJob.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center"
            >
              <img
                src="https://media.mktg.workday.com/is/image/workday/img-group-of-employees-training-1?fmt=png-alpha&wid=1000"
                alt="Group of students in training"
                loading="lazy"
                className="w-full h-40 object-cover rounded-xl mb-4"
              />
              <h4 className="text-xl font-semibold text-blue-600">100+ students trained</h4>
              <p className="text-gray-600">Empowered with essential digital tools.</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center"
            >
              <img
                src="https://assets.entrepreneur.com/content/3x2/2000/1646925976-Ent-ProjectMGMT.jpeg"
                alt="Project team working"
                loading="lazy"
                className="w-full h-40 object-cover rounded-xl mb-4"
              />
              <h4 className="text-xl font-semibold text-blue-600">10+ projects launched</h4>
              <p className="text-gray-600">Innovations led by students to solve real problems.</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center"
            >
              <img
                src="https://idsb.tmgrup.com.tr/2014/09/07/HaberDetay/1410101376458.jpg"
                alt="Community engagement scene"
                loading="lazy"
                className="w-full h-40 object-cover rounded-xl mb-4"
              />
              <h4 className="text-xl font-semibold text-blue-600">3 issues addressed</h4>
              <p className="text-gray-600">Tech solutions applied to real community challenges.</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Testimonials Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h3 className="text-3xl font-semibold text-blue-600">What People Say</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white p-6 rounded-2xl shadow-md border border-gray-100"
            >
              <p className="italic text-gray-700">
                "This program has opened my eyes to how I can solve problems with technology. I feel empowered and confident!"
              </p>
              <div className="flex items-center mt-4">
                <img
                  src="https://library.ascd.org/m/18941d1e7c006e13/webimage-0321_41-46_iStock-879747038_CSI.jpg"
                  alt="Portrait of student participant"
                  loading="lazy"
                  className="w-15 h-15 rounded-full mr-3 object-cover"
                />
                <span className="text-sm font-semibold text-blue-600">— Student Participant</span>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white p-6 rounded-2xl shadow-md border border-gray-100"
            >
              <p className="italic text-gray-700">
                "Innovate4DigiJob is not just a project—it's a movement toward a digital future for our community."
              </p>
              <div className="flex items-center mt-4">
                <img
                  src="https://media.istockphoto.com/id/2185791629/photo/diverse-business-colleagues-shaking-hands-in-a-modern-office.jpg?s=612x612&w=0&k=20&c=eYfZfzK0TG2LuW7nW9UtbztrefGjFtzh7pcwgK2kezI="
                  alt="Portrait of community leader"
                  loading="lazy"
                  className="w-15 h-15 rounded-full mr-3 object-cover"
                />
                <span className="text-sm font-semibold text-blue-600">— Community Leader</span>
              </div>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Impact;
