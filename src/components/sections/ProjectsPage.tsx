import React, { useState, useMemo } from 'react';
import ProjectCard from '../ProjectCard';
import { PROJECTS } from '../../constants';

const categories = ['All', 'Apps', 'Web', 'CyberSecurity'];

const ProjectsPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') {
      return PROJECTS;
    }
    return PROJECTS.filter(p => p.category === activeFilter);
  }, [activeFilter]);

  return (
    <section id="projects-page" className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
            My <span className="text-indigo-600 dark:text-indigo-400">Projects</span>
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mt-4 sm:mt-6 rounded-full"></div>
          <p className="mt-6 sm:mt-8 text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto px-4">
            Welcome to my project portfolio. Feel free to filter by category to explore the full range of my work.
          </p>
        </div>

        <div className="flex justify-center flex-wrap gap-3 sm:gap-4 mb-10 sm:mb-12 px-2">
            {categories.map(category => (
                <button
                    key={category}
                    onClick={() => setActiveFilter(category)}
                    className={`px-4 sm:px-6 py-2 rounded-full text-sm sm:text-base font-semibold transition-all duration-300 transform focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 ${
                        activeFilter === category
                            ? 'bg-indigo-600 text-white shadow-lg scale-105'
                            : 'bg-white/50 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 hover:bg-indigo-100 dark:hover:bg-gray-700 hover:scale-105'
                    }`}
                >
                    {category}
                </button>
            ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 max-w-5xl mx-auto">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;