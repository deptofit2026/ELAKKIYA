
import React from 'react';
import Section from './Section';
import { subjectsTaughtData } from '../constants';

const SubjectsTaught: React.FC = () => {
  return (
    <Section id="subjects" title="Subjects Handled">
      <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-800/90 rounded-lg shadow-md border border-slate-200 dark:border-gray-700">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {subjectsTaughtData.map((subject, index) => (
            <div key={index} className="flex items-center">
                <svg className="h-4 w-4 mr-2 text-primary dark:text-sky-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                <span className="text-slate-600 dark:text-slate-300">{subject}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default SubjectsTaught;
