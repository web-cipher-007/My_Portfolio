import React from 'react';
import ProjectCard from '../ProjectCard';
import { PROJECTS } from '../../constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

interface ProjectsProps {
  onNavigate: (path: string) => void;
}

const Projects: React.FC<ProjectsProps> = ({ onNavigate }) => {
  const featuredProjects = PROJECTS.filter(p => p.featured).slice(0, 4);

  const handleViewAll = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onNavigate('/projects');
  };

  return (
    <section id="projects" className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">My <span className="text-indigo-600 dark:text-indigo-400">Projects</span></h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mt-4 sm:mt-6 rounded-full"></div>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-400 mt-4 sm:mt-6 max-w-2xl mx-auto">
                Here are some of my featured projects. Each one represents a unique challenge and a learning opportunity.
            </p>
        </div>

        <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
            {featuredProjects.map((project, index) => (
                <ProjectCard key={index} project={project} isFeatured={true} />
            ))}
            </div>
        </div>

        <div className="text-center mt-12 sm:mt-16">
            <button
              onClick={handleViewAll}
              className="inline-flex items-center px-6 sm:px-8 py-3 border border-transparent text-base font-medium rounded-md shadow-lg text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-900 transform hover:scale-105 transition-all duration-300"
            >
              View All Projects
              <FontAwesomeIcon icon={faArrowRight} className="ml-2 sm:ml-3 -mr-1 h-4 w-4 sm:h-5 sm:w-5" />
            </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;