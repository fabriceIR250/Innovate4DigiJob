import React from 'react';
import { FaCode, FaFlask, FaUsers, FaTrophy } from 'react-icons/fa';

const activities = [
  {
    title: "Digital Skills Bootcamps",
    description: "Training students in coding, design, and digital marketing.",
    icon: <FaCode size={32} className="text-white" />,
    image: "https://digital-skills-jobs.europa.eu/sites/default/files/inline-images/Digital_skills_bootcamps.jpeg"
  },
  {
    title: "Innovator’s Lab",
    description: "A physical and virtual space for students to prototype tech-based solutions.",
    icon: <FaFlask size={32} className="text-white" />,
    image: "https://d-lab.mit.edu/sites/default/files/2025-02/K4SLI-How-local-innovators-1.jpg"
  },
  {
    title: "Mentorship Sessions",
    description: "Connecting students with experienced IT professionals.",
    icon: <FaUsers size={32} className="text-white" />,
    image: "https://www.qooper.io/hubfs/Blog%20images/TYPESOFMENTOR%C4%B0NGIMAGE.webp"
  },
  {
    title: "School Innovation Contests",
    description: "Showcasing the best ideas that solve real community problems.",
    icon: <FaTrophy size={32} className="text-white" />,
    image: "https://lateenz.com/wp-content/uploads/2023/01/Top-Science-Competitions-for-High-School-Students-9-1024x731.jpg"
  }
];

const Activities = () => {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-blue-600 mb-12">What We Do</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {activities.map((activity, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden transition hover:shadow-xl">
              <img src={activity.image} alt={activity.title} className="w-full h-48 object-cover" />
              <div className="p-6 flex items-start space-x-4">
                <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center">
                  {activity.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-blue-600 mb-1">{activity.title}</h3>
                  <p className="text-gray-700 text-sm">{activity.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activities;
