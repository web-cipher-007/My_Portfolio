import React, { useMemo, useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faDownload } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import Typewriter from '../Typewriter';
import {
  INTRO,
  ROLES,
  RESUME_URL,
  NAME,
  GITHUB_PROFILE_URL,
  LINKEDIN_PROFILE_URL,
  X_PROFILE_URL,
  EMAIL,
  CORE_HERO_ICONS,
  RANDOMIZABLE_HERO_ICONS
} from '../../constants';

const shuffleArray = (array: any[]) => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

const SocialLink: React.FC<{ href: string; icon: IconProp; label: string; }> = ({ href, icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="w-12 h-12 flex items-center justify-center bg-gray-100 dark:bg-gray-800/50 rounded-full text-gray-600 dark:text-gray-300 hover:bg-indigo-600 hover:text-white transition-all duration-300 transform hover:scale-110 hover:shadow-lg shadow-md hover:rotate-6 active:scale-95"
  >
    <FontAwesomeIcon icon={icon} className="text-xl" />
  </a>
);

const Hero: React.FC = () => {
    
    const iconsToDisplay = useMemo(() => {
        const shuffledRandomIcons = shuffleArray(RANDOMIZABLE_HERO_ICONS);
        const selectedRandomIcons = shuffledRandomIcons.slice(0, 2);
        const allIcons = [...CORE_HERO_ICONS, ...selectedRandomIcons];
        return shuffleArray(allIcons);
    }, []);

    const [iconPositions, setIconPositions] = useState<any[]>([]);

    useEffect(() => {
        const calculatePositions = () => {
            if (typeof window === 'undefined') {
                return [];
            }

            const isLargeScreen = window.innerWidth >= 1024;
            const radius = isLargeScreen ? 225 : 190;
            const containerSize = isLargeScreen ? 384 : 320;
            const center = containerSize / 2;
            const numIcons = 6;
            const angleStep = (2 * Math.PI) / numIcons;

            return Array.from({ length: numIcons }).map((_, i) => {
                const sectorStart = i * angleStep;
                const randomAngle = sectorStart + (Math.random() - 0.5) * angleStep * 0.7;
                
                const x = center + radius * Math.cos(randomAngle);
                const y = center + radius * Math.sin(randomAngle);

                return {
                    left: `${(x / containerSize) * 100}%`,
                    top: `${(y / containerSize) * 100}%`,
                };
            });
        };

        const handleResize = () => {
            setIconPositions(calculatePositions());
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center lg:text-left overflow-hidden py-16 lg:py-0">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-12 lg:gap-x-8 items-center">
          <div className="animate-fade-in-up lg:order-1">
            <p className="text-2xl md:text-3xl font-medium text-gray-600 dark:text-gray-400 mb-2">Hi, I'm</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white mb-4">
              <span className="text-indigo-600 dark:text-indigo-400">{NAME}</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 h-10">
              I am <Typewriter roles={ROLES} />
            </h2>
            <p className="max-w-xl mx-auto lg:mx-0 text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-8">
              {INTRO}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
              <a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md shadow-lg text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-900 transform hover:scale-105 transition-all duration-300"
              >
                Download My Resume
                <FontAwesomeIcon icon={faDownload} className="ml-3 -mr-1 h-5 w-5" />
              </a>
            </div>
             <div className="flex justify-center lg:justify-start items-center space-x-4 mt-10">
                <SocialLink href={GITHUB_PROFILE_URL} icon={faGithub} label="GitHub" />
                <SocialLink href={LINKEDIN_PROFILE_URL} icon={faLinkedinIn} label="LinkedIn" />
                <SocialLink href={X_PROFILE_URL} icon={faXTwitter} label="X (Twitter)" />
                <SocialLink href={`mailto:${EMAIL}`} icon={faEnvelope} label="Email" />
            </div>
          </div>
          
          <div className="hidden lg:flex justify-center items-center lg:order-2">
             <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                <img
                    src="/avatar.jpg"
                    alt="Profile"
                    className="relative w-full h-full object-cover rounded-full shadow-2xl border-4 border-white dark:border-gray-800/50"
                />
                {iconPositions.length > 0 && iconsToDisplay.map((icon, index) => {
                    const animationClass = index % 2 === 0 ? 'animate-float' : 'animate-float-slower';
                    return (
                        <div
                            key={icon.id}
                            className={`hidden lg:flex absolute w-14 h-14 bg-white/70 dark:bg-gray-800/70 backdrop-blur-md rounded-full items-center justify-center shadow-lg ${animationClass}`}
                            style={{
                                top: iconPositions[index]?.top,
                                left: iconPositions[index]?.left,
                                transform: 'translate(-50%, -50%)',
                                animationDelay: `${index * 0.5}s`,
                            }}
                        >
                            {icon.component}
                        </div>
                    );
                })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;