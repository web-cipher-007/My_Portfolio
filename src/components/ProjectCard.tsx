import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import type { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  isFeatured?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, isFeatured = false }) => {
  const cardPadding = isFeatured ? 'p-3 sm:p-4' : 'p-4 sm:p-5 lg:p-6';
  const imageHeight = isFeatured ? 'h-36 sm:h-40' : 'h-40 sm:h-48';
  const titleSize = isFeatured ? 'text-base sm:text-lg' : 'text-lg sm:text-xl';
  const descriptionHeight = isFeatured ? 'h-14 sm:h-16' : 'h-24 sm:h-28';
  const categoryPadding = isFeatured ? 'px-2 py-0.5 sm:px-2.5 sm:py-1' : 'px-2.5 py-1 sm:px-3';
  const categoryTextSize = isFeatured ? 'text-xs' : 'text-xs sm:text-sm';

  return (
    <div className="bg-white dark:bg-gray-800/50 rounded-xl shadow-lg overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-1">
      <div className="relative overflow-hidden">
        <img className={`w-full ${imageHeight} object-cover transition-transform duration-500 group-hover:scale-110`} src={project.image} alt={project.title} />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center space-x-4">
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-100 p-2 sm:p-3 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-indigo-500" aria-label="GitHub Link">
            <FontAwesomeIcon icon={faGithub} className="h-5 w-5 sm:h-6 sm:w-6" />
          </a>
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-200 p-2 sm:p-3 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-indigo-500" aria-label="Live Demo Link">
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="h-5 w-5 sm:h-6 sm:w-6" />
            </a>
          )}
        </div>
      </div>
      <div className={cardPadding}>
        <h3 className={`${titleSize} font-bold text-gray-900 dark:text-white mb-2 truncate`}>{project.title}</h3>
        <p className={`text-gray-600 dark:text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4 ${descriptionHeight} overflow-hidden leading-relaxed`}>{project.description}</p>
        <div className="flex flex-wrap gap-2">
            <span className={`${categoryPadding} ${categoryTextSize} bg-indigo-100 text-indigo-800 dark:bg-indigo-900/50 dark:text-indigo-300 font-bold rounded-full uppercase tracking-wider`}>
              {project.category}
            </span>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;