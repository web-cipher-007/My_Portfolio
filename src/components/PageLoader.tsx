import React, { useState, useEffect } from 'react';

interface PageLoaderProps {
  isNavigating: boolean;
}

const PageLoader: React.FC<PageLoaderProps> = ({ isNavigating }) => {
  const [width, setWidth] = useState('0%');
  const [opacity, setOpacity] = useState('1');

  useEffect(() => {
    if (isNavigating) {
      setWidth('90%');
      setOpacity('1');
    } else {
      setWidth('100%');
      const fadeTimer = setTimeout(() => {
        setOpacity('0');
        const resetTimer = setTimeout(() => setWidth('0%'), 300);
        return () => clearTimeout(resetTimer);
      }, 300);
      return () => clearTimeout(fadeTimer);
    }
  }, [isNavigating]);

  return (
    <div
      className="fixed top-0 left-0 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 z-[9999]"
      style={{
        width,
        opacity,
        transition: 'width 300ms ease-out, opacity 300ms ease-in',
        transitionDuration: width === '0%' ? '0s' : '300ms',
      }}
    />
  );
};

export default PageLoader;