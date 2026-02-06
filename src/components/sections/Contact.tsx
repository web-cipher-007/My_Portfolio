import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { EMAIL } from '../../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-8 sm:mb-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">Get In <span className="text-indigo-600 dark:text-indigo-400">Touch</span></h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mt-4 sm:mt-6 rounded-full"></div>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-400 mt-4 sm:mt-6 max-w-2xl mx-auto px-4">
              I'm currently open to new opportunities and collaborations. Feel free to reach out if you have a project in mind or just want to connect!
            </p>
        </div>
        <a
          href={`mailto:${EMAIL}`}
          className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 border border-transparent text-base sm:text-lg font-medium rounded-md shadow-lg text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-900 transform hover:scale-105 transition-all duration-300"
        >
            <FontAwesomeIcon icon={faPaperPlane} className="h-4 w-4 sm:h-5 sm:w-5 mr-2 sm:mr-3" />
          Say Hello
        </a>
      </div>
    </section>
  );
};

export default Contact;