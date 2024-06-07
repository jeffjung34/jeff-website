import React from 'react';

const projects = [
  { title: "Project A", description: "Description of project A..." },
  { title: "Project B", description: "Description of project B..." },
  // Add more projects here
];

const Projects = () => {
  return (
    <div id="projects" className="p-8 bg-white dark:bg-gray-900">
      <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="p-6 border rounded-lg shadow-md hover:shadow-lg transition-shadow bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100">
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
