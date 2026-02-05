import React from 'react';

const educationHistory = [
  {
    degree: 'Bachelor of Engineering in Computer Engineering',
    institution: 'TU, IOE - Purwanchal Campus',
    url: 'https://www.ioepc.edu.np/',
    duration: 'May 2023 (ongoing)',
    description: "Presently, I'm an aspiring Computer Engineering undergrad at the prestigious Purwanchal Campus.",
    logoUrl: '/images/education/tribhuvan-university.png',
  },
  {
    degree: 'High School Diploma 10+2 Science',
    institution: 'Sainik Awasiya Mahavidyalaya Bhaktapur',
    url: 'https://bsamv.edu.np/',
    duration: '2020 ➔ 2022',
    description: 'I have successfully completed the 12th-grade SLC examination administered by NEB, at the prestigious Sainik Awasiya Mahavidyalaya Bhaktapur.',
    logoUrl: '/images/education/sainik-mahavidyalaya.png',
  },
  {
    degree: 'Middle School Diploma',
    institution: 'Gorkha United Public School',
    url: 'https://gorkhaschool.com/',
    duration: '2016 ➔ 2020',
    description: 'With resolute determination and unwavering diligence, I have triumphantly completed the 10th-grade SEE examination, conducted by NEB, at the esteemed Gorkha United Public School.',
    logoUrl: '/images/education/gorkha-school.png',
  }
];

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 lg:py-32 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
            My <span className="text-indigo-600 dark:text-indigo-400">Education</span>
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mt-6 rounded-full"></div>
          <p className="mt-8 text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            My academic journey has laid the groundwork for my technical expertise and problem-solving skills.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative border-l-2 border-indigo-200 dark:border-gray-700 ml-6 sm:ml-10">
            <div className="absolute w-3 h-3 bg-indigo-500 rounded-full mt-1.5 -left-[7px] border-2 border-white dark:border-gray-900"></div>
            {educationHistory.map((item, index) => (
              <div key={index} className="mb-16 ml-14 sm:ml-20 transform transition-all duration-300 hover:scale-[1.02]">
                <a href={item.url} target="_blank" rel="noopener noreferrer" className="absolute -top-8 sm:-top-10 -left-8 sm:-left-10 w-16 h-16 sm:w-20 sm:h-20 bg-white dark:bg-gray-800 p-2 rounded-full border-4 border-white dark:border-gray-900 flex items-center justify-center z-10 hover:ring-4 hover:ring-indigo-500/50 transition-all">
                  <img src={item.logoUrl} alt={`${item.institution} logo`} className="w-full h-full object-contain rounded-full" />
                </a>
                <div className="bg-white/60 dark:bg-gray-800/50 backdrop-blur-lg p-8 rounded-xl shadow-lg border border-gray-200/50 dark:border-gray-800/50 hover:border-indigo-500/30 transition-colors">
                  <div className="flex flex-col sm:flex-row justify-between sm:items-start mb-2">
                    <h3 className="text-xl font-bold text-indigo-600 dark:text-indigo-400 flex-1 pr-4">{item.degree}</h3>
                    <span className="bg-indigo-100 text-indigo-800 dark:bg-indigo-900/50 dark:text-indigo-300 text-sm font-semibold px-3 py-1 rounded-full whitespace-nowrap mt-2 sm:mt-0">{item.duration}</span>
                  </div>
                  <a href={item.url} target="_blank" rel="noopener noreferrer" className="inline-block">
                    <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mt-1 mb-3 hover:underline">{item.institution}</h4>
                  </a>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
