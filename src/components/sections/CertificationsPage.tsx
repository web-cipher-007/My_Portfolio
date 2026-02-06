import React, { useState } from 'react';
import { CERTIFICATIONS } from '../../constants';
import type { Certification } from '../../types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faSearchPlus, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

// Sub-component for individual certification cards
const CertificationCard: React.FC<{ cert: Certification; onImageClick: (image: string) => void; }> = ({ cert, onImageClick }) => {
  const handleVerifyClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };
  
  return (
    <div 
      className="bg-white dark:bg-gray-800/50 rounded-xl shadow-lg overflow-hidden group transition-shadow transition-transform duration-300 hover:shadow-2xl hover:-translate-y-1.5 cursor-pointer [will-change:transform,box-shadow]"
      onClick={() => onImageClick(cert.image)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        // Only trigger modal if the event target is the card itself, not a link inside it
        if ((e.key === 'Enter' || e.key === ' ') && e.currentTarget === e.target) {
          onImageClick(cert.image);
        }
      }}
      aria-label={`View certificate: ${cert.title}`}
    >
      <div className="relative">
        <img 
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105 [will-change:transform]" 
          src={cert.image} 
          alt={cert.title}
          onError={(e) => { e.currentTarget.src = 'https://via.placeholder.com/400x250?text=Certificate'; }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-colors duration-300 flex items-center justify-center">
          <div className="p-3 bg-white/20 backdrop-blur-md rounded-full text-white opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-opacity transition-transform duration-300 [will-change:transform,opacity]">
            <FontAwesomeIcon icon={faSearchPlus} className="h-6 w-6" />
          </div>
        </div>
      </div>
      <div className="p-4 sm:p-5 flex flex-col justify-between" style={{ minHeight: '160px' }}>
        <div>
          <h3 className="text-sm sm:text-base font-bold text-gray-900 dark:text-white mb-2 leading-snug line-clamp-2">
            {cert.title}
          </h3>
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-medium">{cert.issuer}</p>
          <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">{cert.date}</p>
        </div>
        {cert.verifyUrl && (
          <a
            href={cert.verifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleVerifyClick}
            className="inline-flex items-center text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors duration-200 group/link mt-4 self-start"
            aria-label={`Verify credential for ${cert.title}`}
          >
            Verify Credential
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="ml-2 h-3.5 w-3.5 transform group-hover/link:translate-x-1 transition-transform duration-300" />
          </a>
        )}
      </div>
    </div>
  );
};

const CertificationsPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = (image: string) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <section id="certifications-page" className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
              My <span className="text-indigo-600 dark:text-indigo-400">Certifications</span>
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mt-4 sm:mt-6 rounded-full"></div>
            <p className="mt-6 sm:mt-8 text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto px-4">
              A showcase of my professional development and qualifications in cybersecurity and software development.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {CERTIFICATIONS.map((cert) => (
              <CertificationCard key={cert.title + cert.date} cert={cert} onImageClick={openModal} />
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-label="Certificate Image Viewer"
        >
          <button 
            className="absolute top-4 right-4 text-white text-3xl hover:text-gray-300 transition-colors"
            onClick={closeModal}
            aria-label="Close image viewer"
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
          <div className="relative max-w-4xl max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
            <img 
              src={selectedImage} 
              alt="Selected certificate" 
              className="w-full h-full object-contain rounded-lg" 
              onError={(e) => { e.currentTarget.src = 'https://via.placeholder.com/800x600?text=Image+Not+Found'; }}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default CertificationsPage;
