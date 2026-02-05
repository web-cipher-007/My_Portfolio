import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

interface ScrollToTopButtonProps {
  isVisible: boolean;
  onClick: () => void;
}

const ScrollToTopButton: React.FC<ScrollToTopButtonProps> = ({ isVisible, onClick }) => {
  return (
    <button
      onClick={onClick}
      aria-label="Scroll to top"
      className={`fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-indigo-600 text-white shadow-lg
                  flex items-center justify-center transition-all duration-300 ease-in-out
                  hover:bg-indigo-700 hover:scale-110 focus:outline-none focus:ring-2 
                  focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-900
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5 pointer-events-none'}`}
    >
      <FontAwesomeIcon icon={faArrowUp} className="h-5 w-5" />
    </button>
  );
};

export default ScrollToTopButton;