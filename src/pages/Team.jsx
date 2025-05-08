import React from 'react';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';

const teamMembers = [
  {
    name: "Jean Claude Tuyizere",
    role: "Project Lead",
    description:
      "With over 10 years of experience in software development and ICT training, Jean Claude brings leadership, creativity, and commitment to youth empowerment. He’s also the Managing Director of CR.ARICENT Technology.",
    image: "https://media.licdn.com/dms/image/v2/D4D35AQEtzZzP4b_pmg/profile-framedphoto-shrink_800_800/B4DZZd1RySG4Ak-/0/1745330970070?e=1747342800&v=beta&t=wrKDcrdYu6h1chDNV0gOVid4m4Oburr_6GkN38JAq9g",
    email: "jsongclaude@gmail.com",
    linkedin: "https://www.linkedin.com/in/jean-c-09804214b/"
  }
];

const developers = [
  {
    name: "IRAFASHA Fabrice",
    role: "Web Developer",
    description:
      "Fabrice is a passionate web developer with a knack for creating user-friendly applications. He’s dedicated to making technology accessible to all.",
    image: "https://scontent.fkgl4-1.fna.fbcdn.net/v/t39.30808-6/473755721_1326293005219578_10654410461577753_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=jx6GPc_6r7sQ7kNvwF291bP&_nc_oc=AdkmercqG8EXKstJEql6ZNK6CFRSXZTR8TDPqsJioZu4GEYQeQdDYiXV0xrLcSxU5QU&_nc_zt=23&_nc_ht=scontent.fkgl4-1.fna&_nc_gid=38wGLrM94qGlLQ0-t1Z8aQ&oh=00_AfJs4TT6X544LTV5t7bHMnaXFEWx421pVw6DemAKcDz0Jg&oe=6822E282",
    email: "irafashafabrice250@gmail.com",
    linkedin: "https://www.linkedin.com/in/irafasha-fabrice-4729b6363/"
  },
  {
    name: "ISHIMWE Prince",
    role: "Web Designer",
    description:
      "Prince is a creative web designer with a passion for aesthetics and user experience. He believes in the power of design to transform ideas into reality.",
    image: "https://scontent.fkgl4-1.fna.fbcdn.net/v/t39.30808-6/489928610_122135113598701722_3593409516722580159_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=lutYsP6FrxMQ7kNvwFCAqK6&_nc_oc=AdkLIaTVDzsvAJLVCiEJvmSGBamTM_gC4HfDJT136xybfo1a_juHtQWv9CMlQDc3HEY&_nc_zt=23&_nc_ht=scontent.fkgl4-1.fna&_nc_gid=_e2Ys3k6ELrdHBADmUdZTA&oh=00_AfITI5LMSJmoOv6P05bPHXp8fQtCZmewXvPkvcqFQbhljg&oe=6822E4E6",
    email: "pishimwe475@gmail.com",
    linkedin: "#"
  }
];

const TeamCard = ({ member }) => (
  <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 shadow-md hover:shadow-xl transition">
    <img
      src={member.image}
      alt={member.name}
      className="w-24 h-24 mx-auto rounded-full object-cover shadow-md mb-4"
    />
    <h3 className="text-xl font-semibold text-blue-600">{member.name}</h3>
    <p className="text-sm text-gray-500 mb-1">{member.role}</p>
    <p className="text-gray-700 text-sm mb-4">{member.description}</p>
    <div className="flex justify-center space-x-4">
      <a href={`mailto:${member.email}`} className="text-blue-600 hover:text-blue-800">
        <FaEnvelope />
      </a>
      <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
        <FaLinkedin />
      </a>
    </div>
  </div>
);

const Team = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-600 mb-4">Our Leadership</h2>
        <p className="text-gray-700 text-lg mb-12">
          Meet the passionate individual leading the Innovate4DigiJob project.
        </p>
        <div className="flex justify-center mb-16">
          <TeamCard member={teamMembers[0]} />
        </div>

        <h3 className="text-3xl font-semibold text-blue-600 mb-6">Our Developers</h3>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {developers.map((dev, idx) => (
            <TeamCard key={idx} member={dev} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
