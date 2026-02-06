import React from 'react';
import { SKILLS_DATA } from '../../constants';

interface SkillItem {
    name: string;
    icon: React.ReactNode;
}

interface SkillCategory {
    title: string;
    icon: React.ReactNode;
    skills: SkillItem[];
}

const SkillCard: React.FC<SkillCategory> = ({ title, icon, skills }) => (
    <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 sm:p-5 lg:p-6 border border-gray-200/50 dark:border-gray-800/50 shadow-lg hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full">
        <div className="flex items-center mb-3 sm:mb-4 pb-3 border-b border-gray-200/50 dark:border-gray-800/50">
            <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center">
                {icon}
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white ml-3 sm:ml-4">{title}</h3>
        </div>
        <div className="flex-grow flex flex-col space-y-2 sm:space-y-2.5">
            {skills.map(skill => (
                <div key={skill.name} className="flex items-center p-2 rounded-lg hover:bg-gray-100/50 dark:hover:bg-gray-900/50 transition-all duration-200 transform hover:translate-x-1">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center flex-shrink-0">
                        {skill.icon}
                    </div>
                    <span className="ml-3 text-sm sm:text-base font-semibold text-gray-700 dark:text-gray-300">{skill.name}</span>
                </div>
            ))}
        </div>
    </div>
);


const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">Core <span className="text-indigo-600 dark:text-indigo-400">Skills</span></h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mt-4 sm:mt-6 rounded-full"></div>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mt-4 sm:mt-6 max-w-2xl mx-auto">
                Technologies and tools I use to build innovative solutions.
            </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {SKILLS_DATA.map((category) => (
            <SkillCard 
              key={category.title}
              title={category.title}
              icon={category.icon}
              skills={category.skills}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;