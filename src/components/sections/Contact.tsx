import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { EMAIL } from '../../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 lg:py-32 bg-gray-100 dark:bg-gray-950/50">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold">Get In Touch</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mt-4 rounded-full"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400 mt-6 max-w-2xl mx-auto">
              I'm currently open to new opportunities and collaborations. Feel free to reach out if you have a project in mind or just want to connect!
            </p>
        </div>
        <a
          href={`mailto:${EMAIL}`}
          className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-md shadow-lg text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-900 transform hover:scale-105 transition-all duration-300"
        >
            <FontAwesomeIcon icon={faPaperPlane} className="h-5 w-5 mr-3" />
          Say Hello
        </a>
      </div>
    </section>
  );
};

export default Contact;