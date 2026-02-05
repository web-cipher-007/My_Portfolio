

import React from 'react';
import type { Skill } from '../types';

interface SkillCardProps {
  skill: Skill;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  return (
    <div className="flex items-center space-x-4 p-4 bg-gray-100 dark:bg-gray-800/50 rounded-lg shadow-sm hover:shadow-lg hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 transform hover:-translate-y-1">
      <div className="text-indigo-500 dark:text-indigo-400">
        {skill.icon}
      </div>
      <span className="font-semibold text-gray-700 dark:text-gray-300">{skill.name}</span>
    </div>
  );
};

export default SkillCard;