import React, { useEffect } from 'react';
import { FaCode, FaFlask, FaUsers, FaTrophy } from 'react-icons/fa';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const activities = [
  {
    title: "Digital Skills Bootcamps",
    description: "Training students in coding, design, and digital marketing.",
    icon: <FaCode size={24} className="text-white" />,
    image: "https://digital-skills-jobs.europa.eu/sites/default/files/inline-images/Digital_skills_bootcamps.jpeg"
  },
  {
    title: "Innovator's Lab",
    description: "A physical and virtual space for students to prototype tech-based solutions.",
    icon: <FaFlask size={24} className="text-white" />,
    image: "https://d-lab.mit.edu/sites/default/files/2025-02/K4SLI-How-local-innovators-1.jpg"
  },
  {
    title: "Mentorship Sessions",
    description: "Connecting students with experienced IT professionals.",
    icon: <FaUsers size={24} className="text-white" />,
    image: "https://www.qooper.io/hubfs/Blog%20images/TYPESOFMENTOR%C4%B0NGIMAGE.webp"
  },
  {
    title: "School Innovation Contests",
    description: "Showcasing the best ideas that solve real community problems.",
    icon: <FaTrophy size={24} className="text-white" />,
    image: "https://lateenz.com/wp-content/uploads/2023/01/Top-Science-Competitions-for-High-School-Students-9-1024x731.jpg"
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const Activities = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          transition={{ delay: 0.2 }}
          className="text-3xl sm:text-4xl font-bold text-center text-blue-600 mb-12"
        >
          What We Do
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              animate={controls}
              custom={index}
              transition={{ delay: index * 0.1 + 0.3 }}
              whileHover={{ y: -5 }}
              className="group relative bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={activity.image} 
                  alt={activity.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              
              <div className="p-6 flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-md group-hover:bg-blue-700 transition-colors duration-300">
                  {activity.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300 mb-2">
                    {activity.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {activity.description}
                  </p>
                </div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activities;