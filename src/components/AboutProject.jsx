import React from 'react';
import { FaLaptopCode, FaLightbulb, FaUsers, FaTools } from 'react-icons/fa';
import { motion } from 'framer-motion';

const objectives = [
  {
    title: "Promote digital skills",
    description: "Empowering students with essential digital tools and techniques.",
    icon: <FaLaptopCode size={28} className="text-white" />
  },
  {
    title: "Foster innovation",
    description: "Stimulating self-employment and creativity through technology.",
    icon: (
      <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-600 rounded-full flex items-center justify-center animate-pulse">
        <FaLightbulb size={28} className="text-white" />
      </div>
    )
  },
  {
    title: "Knowledge sharing",
    description: "Encouraging collaboration between students and teachers.",
    icon: <FaUsers size={28} className="text-white" />
  },
  {
    title: "Solve community problems",
    description: "Using tech to address local issues with student-led solutions.",
    icon: <FaTools size={28} className="text-white" />
  }
];


const AboutProject = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto space-y-16">

        {/* About the Project */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h2 className="text-4xl font-bold text-blue-600">What is Innovate4DigiJob?</h2>
          <p className="text-lg text-gray-800">
            <span className="text-blue-600 font-semibold">Innovate4DigiJob</span> is a transformative initiative launched at
            <span className="font-semibold text-blue-600"> College Baptiste Gacuba II</span>, designed to empower students
            with <span className="text-blue-600 font-semibold">digital skills</span>, <span className="text-blue-600 font-semibold">innovation capabilities</span>, and an
            <span className="text-blue-600 font-semibold"> entrepreneurial mindset</span>.
          </p>
          <p className="text-lg text-gray-800">
            By fostering a culture of <span className="italic text-blue-600">problem-solving through ICT</span>, the project
            aims to boost <span className="text-blue-600 font-semibold">employment</span> and foster
            <span className="text-blue-600 font-semibold"> digital entrepreneurship</span> among youth in
            <span className="font-semibold"> Rubavu District</span>.
          </p>
        </motion.div>

        {/* Key Objectives */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-semibold text-blue-600 mb-6">Key Objectives</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {objectives.map((obj, index) => (
              <motion.div
                key={index}
                className="flex items-start bg-white shadow-lg rounded-2xl p-6 border border-gray-100 hover:shadow-xl transition"
                whileHover={{ scale: 1.03 }}
              >
                <div className="w-14 h-14 flex-shrink-0 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                  {obj.icon}
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-blue-600 mb-1">{obj.title}</h4>
                  <p className="text-gray-700 text-sm">{obj.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

       
      </div>
    </section>
  );
};

export default AboutProject;
