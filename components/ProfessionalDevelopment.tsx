
import React from 'react';
import Section from './Section';
import { professionalDevelopmentData } from '../constants';

const ProfessionalDevelopment: React.FC = () => {
  return (
    <Section id="development" title="FDP / STTP / Workshop Attended">
      <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-800/90 rounded-lg shadow-md border border-slate-200 dark:border-gray-700">
        <ul className="space-y-3">
          {professionalDevelopmentData.map((item, index) => (
            <li key={index} className="flex items-start">
              <svg className="h-5 w-5 mr-3 text-green-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zM12 10a2 2 0 11-4 0 2 2 0 014 0z" clipRule="evenodd"></path></svg>
              <span className="text-slate-600 dark:text-slate-300">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default ProfessionalDevelopment;
