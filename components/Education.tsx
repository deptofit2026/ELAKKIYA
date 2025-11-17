
import React from 'react';
import Section from './Section';
import { educationData } from '../constants';

const EducationIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary dark:text-sky-400" viewBox="0 0 20 20" fill="currentColor">
      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L9 9.61V14a1 1 0 102 0V9.61l6.394-2.69a1 1 0 000-1.84l-7-3zM10 8L3 5l7-3 7 3-7 3z" />
      <path d="M3 9a1 1 0 01.606.219l5.787 4.283a1 1 0 001.214 0l5.787-4.283A1 1 0 0117 9V7.16a1 1 0 112 0v1.84a3 3 0 01-1.818 2.75l-7 3a1 1 0 01-.364 0l-7-3A3 3 0 011 9V7.16a1 1 0 112 0V9z" />
    </svg>
);

const Education: React.FC = () => {
  return (
    <Section id="education" title="Academic Credentials">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
        {educationData.map((item, index) => (
          <div key={index} className="flex items-start space-x-4 p-6 bg-white dark:bg-gray-800/90 rounded-lg shadow-md border border-slate-200 dark:border-gray-700">
            <div className="flex-shrink-0">
                <EducationIcon />
            </div>
            <div>
              <h3 className="font-bold text-lg text-slate-800 dark:text-white">{item.degree}</h3>
              <p className="text-secondary dark:text-slate-400">{item.institution}</p>
              <p className="text-sm text-slate-500 dark:text-slate-500">{item.period}</p>
              <p className="mt-1 text-sm font-semibold text-primary dark:text-sky-400">Score: {item.score}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Education;
