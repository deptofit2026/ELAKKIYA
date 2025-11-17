
import React from 'react';
import { personalInfo } from '../constants';

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
  </svg>
);

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
  </svg>
);

const LocationIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
    </svg>
);

const Hero: React.FC = () => {
  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center justify-center py-20 text-center">
      <div className="max-w-4xl">
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          {personalInfo.name}
        </h1>
        <p className="mt-4 text-xl sm:text-2xl text-secondary dark:text-slate-400">
          {personalInfo.title}
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 text-slate-600 dark:text-slate-300">
          <a href={`mailto:${personalInfo.email}`} className="flex items-center hover:text-primary dark:hover:text-sky-400 transition-colors">
            <MailIcon />
            <span>{personalInfo.email}</span>
          </a>
          <a href={`tel:${personalInfo.phone}`} className="flex items-center hover:text-primary dark:hover:text-sky-400 transition-colors">
            <PhoneIcon />
            <span>{personalInfo.phone}</span>
          </a>
           <div className="flex items-center">
            <LocationIcon />
            <span>{personalInfo.location}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
