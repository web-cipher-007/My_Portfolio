import React from 'react';
import { TypeAnimation } from 'react-type-animation';

interface TypewriterProps {
  roles: string[];
}

const Typewriter: React.FC<TypewriterProps> = ({ roles }) => {
  const sequence = roles.flatMap(role => [role, 2500]);

  return (
    <span style={{ display: 'inline-block' }}>
      <TypeAnimation
        sequence={sequence}
        wrapper="span"
        speed={60}
        deletionSpeed={70}
        className="text-indigo-600 dark:text-indigo-400"
        repeat={Infinity}
        cursor={false}
        preRenderFirstString={true}
        style={{ display: 'inline-block', minHeight: '1.2em' }}
        omitDeletionAnimation={false}
      />
      <span className="cursor-block text-indigo-600 dark:text-indigo-400">_</span>
    </span>
  );
};

export default Typewriter;