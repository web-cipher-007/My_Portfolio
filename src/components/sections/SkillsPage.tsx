import React from 'react';
import { SKILLS_DATA } from '../../constants';

const SkillsPage: React.FC = () => {
  return (
    <section id="skills-page" className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
            Technical <span className="text-indigo-600 dark:text-indigo-400">Skillset</span>
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mt-4 sm:mt-6 rounded-full"></div>
          <p className="mt-6 sm:mt-8 text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto px-4">
            A detailed look at the technologies, tools, and methodologies I use to build, secure, and innovate.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 max-w-6xl mx-auto">
          {SKILLS_DATA.map((category) => (
            <div key={category.title} className="bg-white/30 dark:bg-black/30 backdrop-blur-xl p-5 sm:p-6 md:p-8 rounded-2xl border border-gray-200/50 dark:border-gray-800/50 shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
              <div className="flex items-center mb-5 sm:mb-6 pb-3 sm:pb-4 border-b border-gray-200/50 dark:border-gray-800/50">
                <div className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center">
                  {category.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white ml-3 sm:ml-4">{category.title}</h3>
              </div>
              <div className="grid grid-cols-1 gap-y-4 sm:gap-y-5">
                {category.skills.map(skill => (
                  <div key={skill.name} className="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-lg hover:bg-gray-100/50 dark:hover:bg-gray-800/50 transition-colors duration-200">
                    <div className="mt-1 flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
                      {skill.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-base sm:text-lg text-gray-800 dark:text-gray-200">{skill.name}</h4>
                      <p className="text-gray-600 dark:text-gray-400 mt-1 text-xs sm:text-sm leading-relaxed">{skill.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsPage;