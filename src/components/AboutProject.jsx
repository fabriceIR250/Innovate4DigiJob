import React from "react";

const AboutProject = () => {
  return (
    <section className="bg-white py-10 px-6">
      {/* About the Project */}
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-600 mb-4">
          What is Innovate4DigiJob?
        </h2>
        <p className="text-gray-800 mb-6">
          <span className="font-semibold text-blue-600">Innovate4DigiJob</span> is a transformative
          initiative launched at{" "}
          <span className="font-semibold text-blue-600">
            College Baptiste Gacuba II
          </span>, designed to empower students with{" "}
          <span className="font-semibold text-blue-600">digital skills</span>,{" "}
          <span className="font-semibold text-blue-600">
            innovation capabilities
          </span>, and{" "}
          <span className="font-semibold text-blue-600">
            entrepreneurial mindsets
          </span>. By fostering a culture of{" "}
          <span className="italic text-blue-600">problem-solving through ICT</span>,
          the project aims to enhance{" "}
          <span className="text-blue-600">employment opportunities</span> and
          promote <span className="text-blue-600">digital entrepreneurship</span> among youth in{" "}
          <span className="font-semibold">Rubavu District</span>.
        </p>

        <h3 className="text-2xl font-semibold text-blue-600 mb-2">
          Key Objectives:
        </h3>
        <ul className="list-disc list-inside text-gray-800 space-y-1">
          <li>Promote digital skills among students.</li>
          <li>Stimulate self-employment through innovation.</li>
          <li>Facilitate knowledge sharing between students and teachers.</li>
          <li>Solve community problems using local talent and technology.</li>
        </ul>
      </div>

      {/* Our Activities */}
      <div className="max-w-4xl mx-auto mt-12">
        <h2 className="text-3xl font-bold text-blue-600 mb-4">What We Do</h2>
        <ul className="list-disc list-inside text-gray-800 space-y-1">
          <li>
            <span className="font-semibold text-blue-600">
              Digital Skills Bootcamps:
            </span>{" "}
            Training students in{" "}
            <span className="text-blue-600">coding</span>,{" "}
            <span className="text-blue-600">design</span>, and{" "}
            <span className="text-blue-600">digital marketing</span>.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default AboutProject;
