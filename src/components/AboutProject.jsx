import React, { useEffect, useState } from 'react';
import { FaLaptopCode, FaLightbulb, FaUsers, FaTools } from 'react-icons/fa';

// Since we're not using actual framer-motion, we'll create our own animation components
const AnimatedSection = ({ children, delay = 0, className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [ref, setRef] = useState(null);

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(ref);

    return () => {
      if (ref) observer.unobserve(ref);
    };
  }, [ref, delay]);

  return (
    <div 
      ref={setRef} 
      className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${className}`}
    >
      {children}
    </div>
  );
};

const objectives = [
  {
    title: "Promote digital skills",
    description: "Empowering students with essential digital tools and techniques for the modern workplace.",
    icon: <FaLaptopCode size={28} className="text-white" />,
    color: "from-blue-600 to-blue-400"
  },
  {
    title: "Foster innovation",
    description: "Stimulating self-employment and creativity through technology and entrepreneurial thinking.",
    icon: <FaLightbulb size={28} className="text-white" />,
    color: "from-blue-500 to-blue-300"
  },
  {
    title: "Knowledge sharing",
    description: "Encouraging collaboration between students, teachers, and industry professionals.",
    icon: <FaUsers size={28} className="text-white" />,
    color: "from-blue-600 to-blue-400"
  },
  {
    title: "Solve community problems",
    description: "Using technology to address local challenges with innovative student-led solutions.",
    icon: <FaTools size={28} className="text-white" />,
    color: "from-blue-500 to-blue-300"
  }
];

const AboutProject = () => {
  return (
    <section id="AboutProject" className="bg-gradient-to-b from-white to-blue-50 py-22 px-4 sm:px-6 md:px-12 overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-16 relative">
        {/* Decorative elements */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-100 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
        
        {/* About the Project */}
        <AnimatedSection className="space-y-6 relative z-10">
          <div className="inline-block mb-2">
            <span className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-medium">About Us</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-600 relative">
            What is 
            <span className="relative inline-block ml-2">
              Innovate4DigiJob
              <span className="absolute -bottom-1 left-0 w-full h-1 bg-blue-600 rounded"></span>
            </span>?
          </h2>
          
          <div className="bg-white p-6 rounded-xl shadow-lg border border-blue-100 space-y-4">
            <p className="text-base sm:text-lg text-gray-800 leading-relaxed">
              <span className="text-blue-600 font-semibold">Innovate4DigiJob</span> is a transformative initiative launched at
              <span className="font-semibold text-blue-600"> College Baptiste Gacuba II</span>, designed to empower students
              with <span className="text-blue-600 font-semibold">digital skills</span>, <span className="text-blue-600 font-semibold">innovation capabilities</span>, and an
              <span className="text-blue-600 font-semibold"> entrepreneurial mindset</span>.
            </p>
            
            <p className="text-base sm:text-lg text-gray-800 leading-relaxed">
              By fostering a culture of <span className="italic text-blue-600">problem-solving through ICT</span>, the project
              aims to boost <span className="text-blue-600 font-semibold">employment</span> and foster
              <span className="text-blue-600 font-semibold"> digital entrepreneurship</span> among youth in
              <span className="font-semibold"> Rubavu District</span>.
            </p>
          </div>
        </AnimatedSection>

        {/* Key Objectives */}
        <AnimatedSection delay={200} className="relative z-10">
          <div className="flex items-center mb-8">
            <div className="w-10 h-1 bg-blue-600 rounded mr-4"></div>
            <h3 className="text-2xl sm:text-3xl font-semibold text-blue-600">Key Objectives</h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {objectives.map((obj, index) => (
              <AnimatedSection 
                key={index} 
                delay={300 + index * 100}
                className="group"
              >
                <div className="flex flex-col sm:flex-row items-center sm:items-start bg-white h-full shadow-lg rounded-2xl p-6 border border-gray-100 hover:shadow-xl transition duration-300 hover:border-blue-200">
                  <div className={`w-16 h-16 flex-shrink-0 bg-gradient-to-br ${obj.color} rounded-xl flex items-center justify-center mb-4 sm:mb-0 sm:mr-5 group-hover:scale-110 transition-transform duration-300`}>
                    {obj.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-blue-600 mb-2 text-center sm:text-left">{obj.title}</h4>
                    <p className="text-gray-700 text-center sm:text-left">{obj.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        {/* Additional Feature: Impact Stats */}
        {/* Call to Action */}
        <AnimatedSection delay={800} className="relative z-10">
          <div className="bg-gradient-to-r from-blue-600 to-blue-500 rounded-2xl shadow-xl p-8 sm:p-10 text-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">Ready to join our initiative?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">Be part of our mission to transform education and create digital opportunities for youth in Rwanda.</p>
            <button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition duration-300 transform hover:scale-105">Get Involved</button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default AboutProject;