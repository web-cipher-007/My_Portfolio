import React from 'react';
import { SKILLS_DATA } from '../../constants';

const SkillsPage: React.FC = () => {
  return (
    <section id="skills-page" className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
            Technical <span className="text-indigo-600 dark:text-indigo-400">Skillset</span>
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mt-6 rounded-full"></div>
          <p className="mt-8 text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A detailed look at the technologies, tools, and methodologies I use to build, secure, and innovate.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {SKILLS_DATA.map((category) => (
            <div key={category.title} className="bg-white/30 dark:bg-black/30 backdrop-blur-xl p-6 md:p-8 rounded-2xl border border-gray-200/50 dark:border-gray-800/50 shadow-lg transition-all duration-300">
              <div className="flex items-center mb-6 pb-4 border-b border-gray-200/50 dark:border-gray-800/50">
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white ml-4">{category.title}</h3>
              </div>
              <div className="grid grid-cols-1 gap-y-6">
                {category.skills.map(skill => (
                  <div key={skill.name} className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-100/50 dark:hover:bg-gray-800/50 transition-colors duration-200">
                    <div className="mt-1 flex-shrink-0 w-12 h-12 flex items-center justify-center">
                      {skill.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-gray-800 dark:text-gray-200">{skill.name}</h4>
                      <p className="text-gray-600 dark:text-gray-400 mt-1 text-sm">{skill.description}</p>
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