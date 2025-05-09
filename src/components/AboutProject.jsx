import React, { useEffect, useState } from 'react';
import { FaLaptopCode, FaLightbulb, FaUsers, FaTools } from 'react-icons/fa';

const AnimatedSection = ({ children, delay = 0, className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [ref, setRef] = useState(null);

  useEffect(() => {
    if (!ref) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
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
      className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${className}`}
    >
      {children}
    </div>
  );
};

const objectives = [
  {
    title: "Promote Digital Skills",
    description: "Empower students with digital tools and knowledge for today's workforce.",
    icon: <FaLaptopCode size={26} className="text-white" />,
    color: "from-blue-600 to-blue-400"
  },
  {
    title: "Foster Innovation",
    description: "Encourage creativity and entrepreneurship using modern technology.",
    icon: <FaLightbulb size={26} className="text-white" />,
    color: "from-blue-500 to-blue-300"
  },
  {
    title: "Knowledge Sharing",
    description: "Facilitate collaboration between students, teachers, and professionals.",
    icon: <FaUsers size={26} className="text-white" />,
    color: "from-blue-600 to-blue-400"
  },
  {
    title: "Solve Community Problems",
    description: "Leverage technology to solve local challenges through innovation.",
    icon: <FaTools size={26} className="text-white" />,
    color: "from-blue-500 to-blue-300"
  }
];

const AboutProject = () => {
  return (
    <section id="AboutProject" className="bg-blue-50 py-24 px-4 sm:px-8 md:px-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-20 relative z-10">

        {/* About Card */}
        <AnimatedSection>
          <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl border border-blue-100 p-10 sm:p-12 text-center space-y-6">
            <span className="inline-block bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-semibold">
              About Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-700">
              What is <span className="text-blue-900">Innovate4DigiJob</span>?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              <strong className="text-blue-600">Innovate4DigiJob</strong> is an initiative by
              <strong className="text-blue-600"> College Baptiste Gacuba II</strong> that empowers youth with
              <strong className="text-blue-600"> digital skills</strong>, fosters
              <strong className="text-blue-600"> innovation</strong>, and builds an
              <strong className="text-blue-600"> entrepreneurial mindset</strong>.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              It promotes <span className="italic text-blue-600">problem-solving through ICT</span> to boost
              <strong className="text-blue-600"> employment</strong> and drive
              <strong className="text-blue-600"> digital entrepreneurship</strong> across
              <strong className="text-blue-600"> Rubavu District</strong>.
            </p>
          </div>
        </AnimatedSection>

        {/* Objective Cards */}
        <AnimatedSection delay={300}>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-blue-700">Key Objectives</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {objectives.map((obj, index) => (
              <AnimatedSection key={index} delay={400 + index * 150}>
                <div className="bg-white rounded-2xl border border-gray-100 shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl hover:border-blue-200 transition">
                  <div className={`w-14 h-14 mb-4 bg-gradient-to-br ${obj.color} rounded-xl flex items-center justify-center`}>
                    {obj.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-blue-700 mb-2">{obj.title}</h4>
                  <p className="text-gray-600 text-sm">{obj.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        {/* CTA Card */}
        <AnimatedSection delay={1000}>
          <div className="bg-gradient-to-r from-blue-600 to-blue-500 rounded-2xl p-10 text-center shadow-lg">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">Ready to join our initiative?</h3>
            <p className="text-blue-100 max-w-2xl mx-auto mb-6">
              Be part of our mission to transform education and empower the next generation with digital potential.
            </p>
            <button className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-blue-50 transition hover:scale-105">
              Get Involved
            </button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default AboutProject;
