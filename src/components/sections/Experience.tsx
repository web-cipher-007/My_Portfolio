import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faTrophy, faTimes } from '@fortawesome/free-solid-svg-icons';

const professionalJobs = [
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
    companyUrl: 'https://prodigyinfotech.dev/',
    location: 'Virtual',
    duration: 'Jan 2024 - Apr 2024',
    logoUrl: '/images/experience/prodigy.png',
    verifyUrl: 'https://prodigyinfotech.dev/verify?cin=PIT/JAN24/6894',
    tasks: [
      'Developed a Python tool for encrypting messages using the Caesar cipher.',
      'Created an image encryption/decryption program.',
      'Built a script to assess password strength based on various criteria.',
      'Engineered a keylogger for monitoring keystrokes (for educational purposes).',
      'Developed a packet sniffer for real-time network traffic analysis.',
    ]
  }
];

const eventOrganizations = [
  {
    role: 'Lead Developer & Vice-Coordinator',
    title: 'CTF Event Organisation',
    company: 'Taranga: The Wave of Technology',
    companyUrl: 'https://taranga.ioepc.edu.np/events',
    location: 'IOE - Purwanchal Campus',
    duration: '8 Jan 2026',
    logoUrl: '/images/experience/taranga.webp',
    certificates: [
      { label: 'Executive', path: '/images/certs/exec-taranga.jpeg' },
      { label: 'Vice-Coordinator', path: '/images/certs/vice-c-taranga.jpeg' }
    ],
    tasks: [
      'Sole developer responsible for building the entire CTF platform using the open-source CTFd framework.',
      'Designed and created 20+ CTF challenges across multiple categories and difficulty levels.',
      'Led end-to-end execution and coordination of the 10-hour CTF competition event.',
      'Coordinated with the organizing team as Vice-Coordinator to ensure smooth event delivery and participant engagement.'
    ]
  }
];

interface JobCardProps {
  job: (typeof professionalJobs)[0] | (typeof eventOrganizations)[0];
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  const [selectedCert, setSelectedCert] = useState<string | null>(null);

  const closeCertModal = () => {
    setSelectedCert(null);
  };

  return (
    <>
      <div className="bg-white/60 dark:bg-gray-800/50 backdrop-blur-lg rounded-xl shadow-lg border border-gray-200/50 dark:border-gray-800/50 hover:border-indigo-500/30 transition-all duration-300 hover:shadow-xl p-4 sm:p-6 h-full flex flex-col">
        <div className="flex gap-3 sm:gap-4 mb-4 sm:mb-5 pb-4 sm:pb-5 border-b border-gray-200/50 dark:border-gray-700/50">
          <a
            href={job.companyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 p-2 rounded-full flex items-center justify-center hover:ring-2 hover:ring-indigo-500/50 transition-all overflow-hidden"
          >
            <img
              src={job.logoUrl}
              alt={`${job.company} logo`}
              className="w-full h-full object-contain rounded-full"
            />
          </a>

          <div className="flex-grow min-w-0">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 sm:gap-2 mb-1">
              <h3 className="text-sm sm:text-base font-bold text-indigo-600 dark:text-indigo-400 leading-snug line-clamp-2 flex-grow">
                {job.role}
              </h3>
              <span className="inline-block bg-indigo-100 text-indigo-800 dark:bg-indigo-900/50 dark:text-indigo-300 text-xs font-semibold px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full whitespace-nowrap flex-shrink-0">
                {job.duration}
              </span>
            </div>
            <a
              href={job.companyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors line-clamp-1"
            >
              {job.company}
            </a>
            <p className="text-xs text-gray-500 dark:text-gray-500 mt-0.5 line-clamp-1">
              {job.location}
            </p>
          </div>
        </div>

        {/* Tasks */}
        <ul className="list-none text-gray-600 dark:text-gray-400 space-y-2 sm:space-y-2.5 text-xs sm:text-sm flex-grow">
          {job.tasks.map((task, i) => (
            <li key={i} className="flex gap-2 sm:gap-3">
              <span className="text-indigo-500 dark:text-indigo-400 flex-shrink-0 font-bold mt-0.5 sm:mt-0.5">▹</span>
              <span className="line-clamp-3">{task}</span>
            </li>
          ))}
        </ul>

        {/* Certificate Badges */}
        {(job as any).certificates && (
          <div className="mt-4 pt-4 border-t border-gray-200/50 dark:border-gray-700/50">
            <button
              onClick={() => setSelectedCert('all')}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-100 to-amber-100 dark:from-yellow-900/30 dark:to-amber-900/30 text-yellow-800 dark:text-yellow-300 text-sm font-semibold rounded-lg hover:shadow-md transition-all hover:scale-105 cursor-pointer"
            >
              <span>🏆</span>
              <span>View Certs</span>
            </button>
          </div>
        )}

        {(job as any).verifyUrl && (
          <div className="mt-4 pt-4 border-t border-gray-200/50 dark:border-gray-700/50">
            <a
              href={(job as any).verifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30 text-blue-800 dark:text-blue-300 text-sm font-semibold rounded-lg hover:shadow-md transition-all hover:scale-105"
            >
              <span>✓</span>
              <span>Verify Creds</span>
            </a>
          </div>
        )}
      </div>

      {/* Certificate Modal */}
      {selectedCert && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-auto"
          onClick={closeCertModal}
          role="dialog"
          aria-modal="true"
          aria-label="Certificate Viewer"
        >
          <button
            className="absolute top-4 right-4 text-white text-3xl hover:text-gray-300 transition-colors z-50"
            onClick={closeCertModal}
            aria-label="Close certificate viewer"
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>

          {selectedCert === 'all' ? (
            <div className="relative w-full max-w-6xl my-auto" onClick={(e) => e.stopPropagation()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {(job as any).certificates.map((cert: any, i: number) => (
                  <div key={i} className="text-center">
                    <p className="text-white font-semibold mb-3">{cert.label}</p>
                    <img
                      src={cert.path}
                      alt={cert.label}
                      className="w-full h-auto object-contain rounded-lg"
                      onError={(e) => {
                        e.currentTarget.src = 'https://placehold.net/default.png';
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="relative w-full max-w-2xl my-auto" onClick={(e) => e.stopPropagation()}>
              <img
                src={selectedCert}
                alt="Certificate"
                className="w-full h-auto object-contain rounded-lg"
                onError={(e) => {
                  e.currentTarget.src = 'https://placehold.net/default.png';
                }}
              />
            </div>
          )}
        </div>
      )}
    </>
  );
};

interface TimelineSectionProps {
  title: string;
  subtitle: string;
  icon: typeof faBriefcase;
  jobs: typeof professionalJobs;
  gradientFrom: string;
  gradientTo: string;
  lineColor: string;
  dotColor: string;
}

const TimelineSection: React.FC<TimelineSectionProps> = ({
  title,
  subtitle,
  icon,
  jobs,
  gradientFrom,
  gradientTo,
  lineColor,
  dotColor,
}) => {
  return (
    <div>
      <div className="flex items-center gap-3 mb-8">
        <div className={`w-10 h-10 bg-gradient-to-br ${gradientFrom} ${gradientTo} rounded-lg flex items-center justify-center`}>
          <FontAwesomeIcon icon={icon} className="text-white text-lg" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
            {title}
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {subtitle}
          </p>
        </div>
      </div>

      {/* Vertical Stepper - Desktop */}
      <div className="relative hidden sm:block">
        <div className="space-y-6">
          {jobs.map((job, index) => (
            <div key={index} className="flex gap-6">
              {/* Step Container */}
              <div className="flex flex-col items-center flex-shrink-0">
                {/* Step Number */}
                <div className={`w-10 h-10 rounded-full ${dotColor} flex items-center justify-center font-bold text-white text-sm border-3 border-white dark:border-gray-950 relative z-10`}>
                  {index + 1}
                </div>
                {/* Connector Line to Next */}
                {index < jobs.length - 1 && (
                  <div className={`w-0.5 h-full bg-gradient-to-b ${lineColor} mt-0`}></div>
                )}
              </div>
              {/* Card Content */}
              <div className="flex-grow pt-1">
                <JobCard job={job} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile - No stepper */}
      <div className="sm:hidden space-y-6">
        {jobs.map((job, index) => (
          <div key={index} className="flex gap-3">
            <div className={`w-8 h-8 rounded-full ${dotColor} flex items-center justify-center font-bold text-white text-xs flex-shrink-0 border-2 border-white dark:border-gray-950`}>
              {index + 1}
            </div>
            <JobCard job={job} />
          </div>
        ))}
      </div>
    </div>
  );
};

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
            Work <span className="text-indigo-600 dark:text-indigo-400">Experience</span>
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mt-6 rounded-full"></div>
          <p className="mt-8 text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Hands-on experience applying technical skills to real-world challenges.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-10">
            {/* Professional Experience Column */}
            <TimelineSection
              title="Professional"
              subtitle="Internships & Roles"
              icon={faBriefcase}
              jobs={professionalJobs}
              gradientFrom="from-indigo-600"
              gradientTo="to-indigo-700"
              lineColor="from-indigo-300 to-indigo-200 dark:from-indigo-700 dark:to-indigo-800"
              dotColor="bg-indigo-600"
            />

            {/* Event Organization Column */}
            <TimelineSection
              title="Event"
              subtitle="Organization & Leadership"
              icon={faTrophy}
              jobs={eventOrganizations}
              gradientFrom="from-purple-600"
              gradientTo="to-pink-600"
              lineColor="from-purple-300 to-purple-200 dark:from-purple-700 dark:to-purple-800"
              dotColor="bg-purple-600"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
