import React from 'react';

const Experience = () => {
  const experiences = [
    { year: "2021", title: "Intern at Company A", description: "Worked on developing..." },
    { year: "2022", title: "Intern at Company B", description: "Focused on improving..." },
    // Add more experiences here
  ];

  return (
    <div id="experience" className="p-8 bg-gray-50 dark:bg-gray-800">
      <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">Experience</h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="relative pl-10">
            <div className="absolute left-0 top-0 h-full w-1 bg-gray-300 dark:bg-gray-600"></div>
            <div className="absolute left-0 h-4 w-4 bg-gray-600 dark:bg-gray-300 rounded-full"></div>
            <div className="ml-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{exp.year}</h3>
              <h4 className="text-lg text-gray-900 dark:text-gray-100">{exp.title}</h4>
              <p className="text-gray-900 dark:text-gray-100">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
