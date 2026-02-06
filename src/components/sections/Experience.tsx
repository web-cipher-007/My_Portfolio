import React from 'react';

const experienceHistory = [
  {
    role: 'Penetration Tester Intern',
    company: 'Cyber Alert Nepal',
    companyUrl: 'https://cyberalertnepal.com/',
    location: 'Remote',
    duration: 'Feb 2026 - Present',
    logoUrl: '/images/experience/cyberalertnepal.png',
    tasks: [
      'Conducting vulnerability assessments and penetration testing on web applications and network infrastructure.',
      'Identifying security weaknesses and providing detailed reports with remediation recommendations.',
      'Collaborating with the security team to enhance overall cybersecurity posture.',
      'Learning advanced penetration testing techniques and staying updated with the latest security threats.',
    ]
  },

  {
    role: 'Cyber Security Intern',
    company: 'Prodigy InfoTech',
    companyUrl: 'https://prodigyinfotech.dev/verify?cin=PIT/JAN24/6894',
    location: 'Virtual',
    duration: 'Jan 2024 - Apr 2024',
    logoUrl: '/images/experience/prodigy.png',
    tasks: [
      'Developed a Python tool for encrypting messages using the Caesar cipher.',
      'Created an image encryption/decryption program.',
      'Built a script to assess password strength based on various criteria.',
      'Engineered a keylogger for monitoring keystrokes (for educational purposes).',
      'Developed a packet sniffer for real-time network traffic analysis.',
    ]
  }
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 lg:py-32">
       <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
            Work <span className="text-indigo-600 dark:text-indigo-400">Experience</span>
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mt-6 rounded-full"></div>
          <p className="mt-8 text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Hands-on experience applying technical skills to real-world challenges.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative border-l-2 border-indigo-200 dark:border-gray-700 ml-6 sm:ml-10">
             <div className="absolute w-3 h-3 bg-indigo-500 rounded-full mt-1.5 -left-[7px] border-2 border-white dark:border-gray-950/50"></div>
            {experienceHistory.map((job, index) => (
              <div key={index} className="mb-16 ml-14 sm:ml-20 transform transition-all duration-300 hover:scale-[1.02]">
                <a href={job.companyUrl} target="_blank" rel="noopener noreferrer" className="absolute -top-8 sm:-top-10 -left-8 sm:-left-10 w-16 h-16 sm:w-20 sm:h-20 bg-white dark:bg-gray-800 p-2 rounded-full border-4 border-white dark:border-gray-950/50 flex items-center justify-center hover:ring-4 hover:ring-indigo-500/50 transition-all z-10">
                   <img src={job.logoUrl} alt={`${job.company} logo`} className="w-full h-full object-contain rounded-full" />
                </a>
                <div className="bg-white/60 dark:bg-gray-800/50 backdrop-blur-lg p-4 pl-6 sm:p-5 lg:p-6 rounded-xl shadow-lg border border-gray-200/50 dark:border-gray-800/50 hover:border-indigo-500/30 transition-colors max-w-full sm:max-w-2xl lg:max-w-3xl">
                  <div className="flex flex-col sm:flex-row justify-between sm:items-start gap-2 mb-2">
                     <div className="flex-grow">
                        <h3 className="text-base sm:text-lg font-bold text-indigo-600 dark:text-indigo-400 leading-tight">{job.role}</h3>
                        <a href={job.companyUrl} target="_blank" rel="noopener noreferrer" className="text-sm sm:text-base font-semibold text-gray-700 dark:text-gray-300 mt-0.5 hover:underline hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors inline-block">{job.company} ({job.location})</a>
                    </div>
                    <span className="bg-indigo-100 text-indigo-800 dark:bg-indigo-900/50 dark:text-indigo-300 text-xs font-semibold px-2.5 py-1 rounded-full whitespace-nowrap self-start">{job.duration}</span>
                  </div>
                  <div className="mt-2.5 max-h-44 sm:max-h-48 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-indigo-300 dark:scrollbar-thumb-indigo-700 scrollbar-track-transparent hover:scrollbar-thumb-indigo-400 dark:hover:scrollbar-thumb-indigo-600">
                    <ul className="list-none text-gray-600 dark:text-gray-400 space-y-1.5 sm:space-y-2 text-xs sm:text-sm leading-relaxed">
                      {job.tasks.map((task, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-indigo-500 dark:text-indigo-400 mr-2 mt-1 flex-shrink-0">▹</span>
                            <span className="flex-1">{task}</span>
                          </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
