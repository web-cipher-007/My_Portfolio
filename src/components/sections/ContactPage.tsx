import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faXTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { EMAIL, GITHUB_PROFILE_URL, LINKEDIN_PROFILE_URL, X_PROFILE_URL, FACEBOOK_PROFILE_URL, INSTAGRAM_PROFILE_URL } from '../../constants';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface ContactLinkCardProps {
  href: string;
  icon: IconProp;
  title: string;
  subtitle: string;
}

const ContactLinkCard: React.FC<ContactLinkCardProps> = ({ href, icon, title, subtitle }) => (
    <a 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="group flex items-center p-4 sm:p-6 bg-white dark:bg-gray-800/50 rounded-xl shadow-md hover:shadow-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 transform hover:-translate-y-1"
    >
        <FontAwesomeIcon icon={icon} className="text-3xl sm:text-4xl text-gray-500 dark:text-gray-400 group-hover:text-indigo-500 transition-colors duration-200 flex-shrink-0" />
        <div className="ml-4 sm:ml-5 min-w-0 flex-1">
            <h4 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-gray-200">{title}</h4>
            <p className="text-indigo-600 dark:text-indigo-400 font-mono text-xs sm:text-sm break-all overflow-hidden">{subtitle}</p>
        </div>
  </a>
);

const contactItems = [
    { title: 'Email', subtitle: EMAIL, href: `mailto:${EMAIL}`, icon: faEnvelope },
    { title: 'GitHub', subtitle: 'web-cipher-007', href: GITHUB_PROFILE_URL, icon: faGithub },
    { title: 'LinkedIn', subtitle: 'sandeshpoudel007', href: LINKEDIN_PROFILE_URL, icon: faLinkedin },
    { title: 'X (Twitter)', subtitle: '@_Sandesh_007', href: X_PROFILE_URL, icon: faXTwitter },
    { title: 'Instagram', subtitle: 'sandesh_poudel007', href: INSTAGRAM_PROFILE_URL, icon: faInstagram},
    { title: 'Facebook', subtitle: 'SandeshPoudel007', href: FACEBOOK_PROFILE_URL, icon: faFacebook }
];

const ContactPage: React.FC = () => {
  return (
    <section id="contact-page" className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
            Get In <span className="text-indigo-600 dark:text-indigo-400">Touch</span>
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mt-4 sm:mt-6 rounded-full"></div>
          <p className="mt-6 sm:mt-8 text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto px-4">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of an amazing team. Let's connect!
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {contactItems.map(item => (
            <ContactLinkCard 
                key={item.title}
                href={item.href}
                icon={item.icon}
                title={item.title}
                subtitle={item.subtitle}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default ContactPage;