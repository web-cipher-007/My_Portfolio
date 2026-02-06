import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { GITHUB_PROFILE_URL, LINKEDIN_PROFILE_URL } from '../constants';

const SocialIcon: React.FC<{ href: string; icon: any; label: string }> = ({ href, icon, label }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="text-gray-500 dark:text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors duration-200">
        <FontAwesomeIcon icon={icon} className="h-5 w-5" />
    </a>
);

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-gray-200 dark:bg-gray-950">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col items-center space-y-4 border-t border-gray-300 dark:border-gray-800 pt-6">
          <div className="text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Designed & Built by Sandesh Poudel
            </p>
          </div>
          <div className="flex space-x-6">
            <SocialIcon href={LINKEDIN_PROFILE_URL} icon={faLinkedinIn} label="LinkedIn" />
            <SocialIcon href={GITHUB_PROFILE_URL} icon={faGithub} label="GitHub" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;