
import React from 'react';
import Section from './Section';
import { publicationsData } from '../constants';

const DocumentIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary dark:text-sky-400 mr-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
);

const Publications: React.FC = () => {
  return (
    <Section id="publications" title="Papers Published">
      <div className="max-w-4xl mx-auto space-y-6">
        {publicationsData.map((pub, index) => (
          <div key={index} className="p-6 bg-white dark:bg-gray-800/90 rounded-lg shadow-md flex items-start border border-slate-200 dark:border-gray-700">
            <DocumentIcon />
            <div>
                <h3 className="font-semibold text-lg text-slate-800 dark:text-white">{pub.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">{pub.authors}</p>
                <p className="text-sm text-slate-500 dark:text-slate-500 mt-2 italic">{pub.journal}, {pub.year}</p>
                {pub.doi && (
                    <a href={`https://doi.org/${pub.doi}`} target="_blank" rel="noopener noreferrer" className="text-sm text-primary dark:text-sky-400 hover:underline mt-1 inline-block">
                    DOI: {pub.doi}
                    </a>
                )}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Publications;
