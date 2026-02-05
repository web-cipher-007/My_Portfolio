import React from 'react';
import type { Blog } from '../types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

interface BlogCardProps {
  blog: Blog;
}

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  return (
    <a 
      href={blog.linkUrl} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="block p-6 bg-white/60 dark:bg-gray-800/50 backdrop-blur-lg rounded-xl shadow-md hover:shadow-xl border border-gray-200/50 dark:border-gray-800/50 group transition-all duration-300 hover:border-indigo-500/40 hover:-translate-y-1"
    >
      <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-2">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
          {blog.title}
        </h3>
        <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mt-1 sm:mt-0 whitespace-nowrap sm:ml-4">{blog.date}</p>
      </div>
      <p className="text-gray-600 dark:text-gray-400 mt-2 mb-4 text-sm leading-relaxed">
        {blog.description}
      </p>
      <div className="flex items-center text-sm font-semibold text-indigo-600 dark:text-indigo-400">
        Read Article
        <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="ml-2 h-3 w-3 transform group-hover:translate-x-1 transition-transform duration-300" />
      </div>
    </a>
  );
};

export default BlogCard;