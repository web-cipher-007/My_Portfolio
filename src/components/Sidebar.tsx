import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCode, faBriefcase, faGraduationCap, faNewspaper, faEnvelope, faScrewdriverWrench, faMedal } from '@fortawesome/free-solid-svg-icons';
import ThemeToggle from './ThemeToggle';
import { NAME } from '../constants';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface SidebarProps {
  isOpen: boolean;
  theme: string;
  handleThemeSwitch: () => void;
  currentPath: string;
  onNavigate: (path: string) => void;
  toggleSidebar: () => void;
}

interface NavLinkProps {
  href: string;
  icon: IconProp;
  children: React.ReactNode;
  onNavigate: (path: string) => void;
  isActive: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ href, icon, children, onNavigate, isActive }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onNavigate(href);
  };

  const baseClasses = "flex items-center w-full p-3 rounded-lg transition-all duration-300";
  const activeClasses = "bg-indigo-100 dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 font-bold";
  const inactiveClasses = "text-gray-500 dark:text-gray-400 hover:bg-gray-200/50 dark:hover:bg-gray-800/50 hover:text-gray-900 dark:hover:text-gray-100";

  return (
    <a href={href} onClick={handleClick} className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}>
      <div className="flex items-center justify-center w-8 flex-shrink-0">
        <FontAwesomeIcon icon={icon} className="h-5 w-5 transition-all duration-300" />
      </div>
      <span className="ml-3 overflow-hidden whitespace-nowrap transition-all duration-300 md:w-0 md:ml-0 md:opacity-0 group-hover:md:w-auto group-hover:md:ml-3 group-hover:md:opacity-100">
        {children}
      </span>
    </a>
  );
};

const Sidebar: React.FC<SidebarProps> = ({ isOpen, theme, handleThemeSwitch, currentPath, onNavigate, toggleSidebar }) => {
  const navItems = [
    { path: '/', label: 'Home', icon: faHome },
    { path: '/skills', label: 'Skills', icon: faScrewdriverWrench },
    { path: '/projects', label: 'Projects', icon: faCode },
    { path: '/experience', label: 'Experience', icon: faBriefcase },
    { path: '/certifications', label: 'Certifications', icon: faMedal },
    { path: '/education', label: 'Education', icon: faGraduationCap },
    { path: '/blogs', label: 'Blogs', icon: faNewspaper },
    { path: '/contact', label: 'Contact', icon: faEnvelope },
  ];

  const sidebarClasses = `
    fixed top-0 left-0 h-full bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl 
    border-r border-gray-200 dark:border-gray-800 z-40 
    flex flex-col overflow-x-hidden
    transition-all duration-300 ease-in-out group
    w-80 md:w-20 md:hover:w-80
    ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
  `;

  return (
    <aside className={sidebarClasses}>
        <button
          onClick={toggleSidebar}
          aria-label="Close navigation"
          className="absolute top-3.5 right-4 z-50 p-2 rounded-md text-gray-500 dark:text-gray-400 hover:bg-gray-200/50 dark:hover:bg-gray-800/50 md:hidden"
        >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
        </button>

        <div className="flex items-center p-4 pr-12 h-20 border-b border-gray-200 dark:border-gray-800 md:pr-4">
             <img src="/avatar.jpg" alt="Avatar" className="rounded-full w-10 h-10 transition-all duration-300 flex-shrink-0" />
             <div className="ml-3 overflow-hidden md:opacity-0 group-hover:md:opacity-100 transition-opacity duration-300 flex-1 min-w-0">
                 <div className="flex items-center gap-1.5 mb-0.5">
                   <h1 className="text-md font-bold text-gray-900 dark:text-white whitespace-nowrap">{NAME.split(' ')[0]}</h1>
                   <div className="flex items-center gap-1 px-1.5 py-0.5 border border-green-500/30 dark:border-green-400/30 rounded-full bg-green-50/50 dark:bg-green-900/10">
                     <span className="w-1.5 h-1.5 bg-green-500 rounded-full blink-dot flex-shrink-0"></span>
                     <span className="text-[10px] text-green-600 dark:text-green-400 font-medium whitespace-nowrap">Open to Work</span>
                   </div>
                 </div>
                 <h2 className="text-md font-bold text-indigo-600 dark:text-indigo-400 whitespace-nowrap">{NAME.split(' ')[1]}</h2>
             </div>
        </div>

        <nav className="flex-grow p-2">
            <ul className="space-y-2">
            {navItems.map(item => (
                <li key={item.path}>
                    <NavLink 
                        href={item.path} 
                        icon={item.icon}
                        onNavigate={onNavigate}
                        isActive={
                          (item.path === '/' && currentPath === '/') ||
                          (item.path.startsWith('/#') && currentPath === item.path) ||
                          (item.path !== '/' && !item.path.startsWith('/#') && currentPath === item.path)
                        }
                    >
                        {item.label}
                    </NavLink>
                </li>
            ))}
            </ul>
        </nav>

        <div className="p-2 border-t border-gray-200 dark:border-gray-800">
            <div className="flex w-full h-[40px] items-center px-2">
                <div className="flex items-center justify-center w-8 flex-shrink-0">
                    <ThemeToggle theme={theme} onToggle={handleThemeSwitch} />
                </div>
            </div>
        </div>
    </aside>
  );
};

export default Sidebar;