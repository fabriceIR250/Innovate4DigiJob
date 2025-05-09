import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaEnvelope, FaGithub } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const teamMembers = [
  {
    name: "Jean Claude Tuyizere",
    role: "Project Lead",
    description: "With over 10 years of experience in software development and ICT training, Jean Claude brings leadership, creativity, and commitment to youth empowerment. He's also the Managing Director of CR.ARICENT Technology.",
    image: "https://media.licdn.com/dms/image/v2/D4D35AQEtzZzP4b_pmg/profile-framedphoto-shrink_800_800/B4DZZd1RySG4Ak-/0/1745330970070?e=1747342800&v=beta&t=wrKDcrdYu6h1chDNV0gOVid4m4Oburr_6GkN38JAq9g",
    email: "jsongclaude@gmail.com",
    linkedin: "https://www.linkedin.com/in/jean-c-09804214b/",
    github: "#"
  }
];

const developers = [
  {
    name: "IRAFASHA Fabrice",
    role: "Web Developer",
    description: "Fabrice is a passionate web developer with a knack for creating user-friendly applications. He's dedicated to making technology accessible to all.",
    image: "https://scontent.fkgl4-1.fna.fbcdn.net/v/t39.30808-6/473755721_1326293005219578_10654410461577753_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=jx6GPc_6r7sQ7kNvwF291bP&_nc_oc=AdkmercqG8EXKstJEql6ZNK6CFRSXZTR8TDPqsJioZu4GEYQeQdDYiXV0xrLcSxU5QU&_nc_zt=23&_nc_ht=scontent.fkgl4-1.fna&_nc_gid=38wGLrM94qGlLQ0-t1Z8aQ&oh=00_AfJs4TT6X544LTV5t7bHMnaXFEWx421pVw6DemAKcDz0Jg&oe=6822E282",
    email: "irafashafabrice250@gmail.com",
    linkedin: "https://www.linkedin.com/in/irafasha-fabrice-4729b6363/",
    github: "#"
  },
  {
    name: "ISHIMWE Prince",
    role: "Web Designer",
    description: "Prince is a creative web designer with a passion for aesthetics and user experience. He believes in the power of design to transform ideas into reality.",
    image: "https://scontent.fkgl4-1.fna.fbcdn.net/v/t39.30808-6/489928610_122135113598701722_3593409516722580159_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=lutYsP6FrxMQ7kNvwFCAqK6&_nc_oc=AdkLIaTVDzsvAJLVCiEJvmSGBamTM_gC4HfDJT136xybfo1a_juHtQWv9CMlQDc3HEY&_nc_zt=23&_nc_ht=scontent.fkgl4-1.fna&_nc_gid=_e2Ys3k6ELrdHBADmUdZTA&oh=00_AfITI5LMSJmoOv6P05bPHXp8fQtCZmewXvPkvcqFQbhljg&oe=6822E4E6",
    email: "pishimwe475@gmail.com",
    linkedin: "#",
    github: "#"
  }
];

const TeamCard = ({ member, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1, duration: 0.5 }}
    viewport={{ once: true }}
    whileHover={{ y: -5 }}
    className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
  >
    <div className="flex flex-col items-center">
      <img
        src={member.image}
        alt={member.name}
        className="w-32 h-32 rounded-full object-cover border-4 border-blue-100 shadow-md mb-4"
      />
      <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
      <p className="text-blue-600 font-medium mb-2">{member.role}</p>
      <p className="text-gray-600 text-center mb-4">{member.description}</p>
      
      <div className="flex space-x-4">
        <a 
          href={`mailto:${member.email}`} 
          className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 hover:bg-blue-100 transition-colors"
          aria-label={`Email ${member.name}`}
        >
          <FaEnvelope className="text-lg" />
        </a>
        <a 
          href={member.linkedin} 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 hover:bg-blue-100 transition-colors"
          aria-label={`${member.name}'s LinkedIn`}
        >
          <FaLinkedin className="text-lg" />
        </a>
        <a 
          href={member.github} 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 hover:bg-blue-100 transition-colors"
          aria-label={`${member.name}'s GitHub`}
        >
          <FaGithub className="text-lg" />
        </a>
      </div>
    </div>
  </motion.div>
);

const Team = () => {
  
  const navigate = useNavigate();
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl sm:text-4xl font-bold text-blue-600 mb-4"
          >
            Our Leadership
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            Meet the passionate individuals driving the Innovate4DigiJob initiative
          </motion.p>
        </motion.div>

        <div className="flex justify-center mb-20">
          <TeamCard member={teamMembers[0]} index={0} />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-2xl sm:text-3xl font-semibold text-blue-600 mb-4"
          >
            Our Development Team
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-gray-600 max-w-3xl mx-auto"
          >
            The talented individuals building the digital future
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {developers.map((dev, idx) => (
            <TeamCard key={idx} member={dev} index={idx + 1} />
          ))}
          {/* Empty card for potential future team members */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
            className="bg-white border-2 border-dashed border-gray-300 rounded-xl p-6 flex flex-col items-center justify-center min-h-[300px] hover:border-blue-400 transition-colors"
          >
            <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center mb-4">
              <span className="text-4xl text-gray-400">+</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-500 mb-2">Join Our Team</h3>
            <p className="text-gray-400 text-center mb-4">We're always looking for talented individuals</p>
            <button className="px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors" onClick={() => navigate('/joinUs')}>
              Join Us
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Team;