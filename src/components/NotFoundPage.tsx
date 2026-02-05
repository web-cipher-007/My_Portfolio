import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

interface NotFoundPageProps {
  onNavigate: (path: string) => void;
}

const NotFoundPage: React.FC<NotFoundPageProps> = ({ onNavigate }) => {
  const handleGoHome = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onNavigate('/');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 py-16">
        <div className="relative">
            <h1 className="relative text-8xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500 z-10">
              404
            </h1>
            <div className="absolute -top-4 -left-8 text-indigo-200/20 dark:text-indigo-500/10 text-[12rem] font-black z-0 transform -rotate-12">
                <FontAwesomeIcon icon={faExclamationTriangle} />
            </div>
        </div>

        <h2 className="mt-8 text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
          Oops! Page Not Found
        </h2>
        
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
          The page you’re looking for seems to have gone on an adventure. Let's get you back on track.
        </p>
        
        <div className="mt-10">
          <a
            href="/"
            onClick={handleGoHome}
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-full shadow-lg text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-900 transform hover:scale-105 transition-all duration-300"
          >
            <FontAwesomeIcon icon={faHouse} className="mr-3 -ml-1 h-5 w-5" />
            Go Back Home
          </a>
        </div>
    </div>
  );
};

export default NotFoundPage;