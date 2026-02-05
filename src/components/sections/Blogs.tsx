import React from 'react';
import { BLOGS } from '../../constants';
import BlogCard from '../BlogCard';

const Blogs: React.FC = () => {
  return (
    <section id="blogs" className="py-20 lg:py-32 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
            My <span className="text-indigo-600 dark:text-indigo-400">Articles</span>
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mt-6 rounded-full"></div>
          <p className="mt-8 text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            I enjoy writing about my experiences and sharing knowledge with the community. Here are some of my recent articles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {BLOGS.map((blog, index) => (
            <BlogCard key={index} blog={blog} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;