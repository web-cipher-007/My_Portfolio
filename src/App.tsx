import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Hero from './components/sections/Hero';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import Education from './components/sections/Education';
import Experience from './components/sections/Experience';
import Blogs from './components/sections/Blogs';
import Footer from './components/Footer';
import SkillsPage from './components/sections/SkillsPage';
import ContactPage from './components/sections/ContactPage';
import NotFoundPage from './components/NotFoundPage';
import ProjectsPage from './components/sections/ProjectsPage';
import PageLoader from './components/PageLoader';
import ScrollToTopButton from './components/ScrollToTopButton';
import CertificationsPage from './components/sections/CertificationsPage';

const App: React.FC = () => {
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem('theme');
    return storedTheme || 'dark';
  });
  
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isNavigating, setIsNavigating] = useState(true);
  const [isContentVisible, setIsContentVisible] = useState(false);
  const [isScrollButtonVisible, setIsScrollButtonVisible] = useState(false);

  const getInitialPath = () => {
    const { pathname, hash } = window.location;
    if (pathname === '/' && hash) {
      return `/${hash}`;
    }
    return pathname;
  };

  const [path, setPath] = useState(window.location.pathname);
  const [activePath, setActivePath] = useState(getInitialPath);
  const [scrollToHash, setScrollToHash] = useState('');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsContentVisible(true);
      setIsNavigating(false);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setIsScrollButtonVisible(true);
      } else {
        setIsScrollButtonVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const onPopState = () => {
      setPath(window.location.pathname);
      setActivePath(getInitialPath());
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  useEffect(() => {
    if (path === '/') {
        if (scrollToHash) {
            setTimeout(() => {
                document.getElementById(scrollToHash)?.scrollIntoView({ behavior: 'smooth' });
                setScrollToHash('');
            }, 100);
        }
    }
  }, [path, scrollToHash]);

  useEffect(() => {
      setIsContentVisible(true);
      // We can also tell the loader to finish its animation now.
      if (isNavigating) {
          setIsNavigating(false);
      }
  }, [path]);


  const handleThemeSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(prev => !prev);
  };
  
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  }

  const handleNavigate = (targetPath: string) => {
    const currentPathWithHash = window.location.pathname + window.location.hash;
    const targetPathWithHash = targetPath.startsWith('/#') ? `/${targetPath.substring(1)}` : targetPath;

    if (currentPathWithHash === targetPathWithHash && path === window.location.pathname) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      if (window.innerWidth < 768) closeSidebar();
      return;
    }
    
    setActivePath(targetPath);

    const isHomepageSection = targetPath.startsWith('/#');

    const isNewPageNavigation = 
      (isHomepageSection && path !== '/') || 
      (!isHomepageSection && path !== targetPath);

    if (isNewPageNavigation) {
      setIsContentVisible(false); // Start fading out current content
      setIsNavigating(true);      // Start the loader bar animation

      // Wait for the fade-out transition to complete before changing the page
      setTimeout(() => {
        if (isHomepageSection) {
          const hash = targetPath.substring(2);
          window.history.pushState({}, '', '/');
          setPath('/'); 
          setScrollToHash(hash);
        } else {
          window.history.pushState({}, '', targetPath);
          setPath(targetPath);
          window.scrollTo(0, 0);
        }
      }, 300); // This duration should match the opacity transition duration
    } else {
      // Handle same-page hash scrolling without a loader
      if (isHomepageSection) {
        const hash = targetPath.substring(2);
        document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' });
      } else {
         window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }

    if (window.innerWidth < 768) {
      closeSidebar();
    }
  };


  const renderPage = () => {
    switch (path) {
      case '/':
        return (
          <>
            <Hero />
            <Skills />
            <Projects onNavigate={handleNavigate} />
            <Contact />
          </>
        );
      case '/experience':
        return <Experience />;
      case '/certifications':
        return <CertificationsPage />;
      case '/education':
        return <Education />;
      case '/blogs':
        return <Blogs />;
      case '/skills':
        return <SkillsPage />;
      case '/projects':
        return <ProjectsPage />;
      case '/contact':
        return <ContactPage />;
      default:
        return <NotFoundPage onNavigate={handleNavigate} />;
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <PageLoader isNavigating={isNavigating} />
      <div className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 font-sans transition-colors duration-300">
        {/* Backdrop overlay for mobile */}
        {isSidebarOpen && (
            <div
                className="fixed inset-0 bg-black/60 z-30 md:hidden"
                onClick={closeSidebar}
                aria-hidden="true"
            />
        )}

        <button 
          className={`fixed top-4 left-4 z-50 p-2 rounded-md bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm text-gray-800 dark:text-gray-200 md:hidden transition-opacity duration-300 ${isSidebarOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
          onClick={toggleSidebar}
          aria-label="Open navigation"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>

        <Sidebar 
          isOpen={isSidebarOpen}
          theme={theme} 
          handleThemeSwitch={handleThemeSwitch}
          currentPath={activePath}
          onNavigate={handleNavigate}
          toggleSidebar={toggleSidebar}
        />
        <div className="min-h-screen flex flex-col justify-between transition-all duration-300 ease-in-out md:pl-20">
          <main className={`flex-1 transition-opacity duration-300 ease-in-out ${isContentVisible ? 'opacity-100' : 'opacity-0'}`}>
            {renderPage()}
          </main>
          <Footer />
        </div>
        <ScrollToTopButton isVisible={isScrollButtonVisible} onClick={scrollToTop} />
      </div>
    </>
  );
};

export default App;
