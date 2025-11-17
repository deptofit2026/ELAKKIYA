
import React from 'react';
import Section from './Section';
import { experienceData } from '../constants';
import { ExperienceItem } from '../types';

const ExperienceCard: React.FC<{ item: ExperienceItem }> = ({ item }) => (
  <div className="mb-8 flex justify-between items-center w-full">
    <div className="order-1 w-5/12"></div>
    <div className="z-20 flex items-center order-1 bg-primary shadow-xl w-8 h-8 rounded-full">
      <h1 className="mx-auto font-semibold text-lg text-white">&nbsp;</h1>
    </div>
    <div className="order-1 bg-white dark:bg-gray-800 rounded-lg shadow-xl w-5/12 px-6 py-4">
      <h3 className="mb-2 font-bold text-slate-800 dark:text-white text-xl">{item.role}</h3>
      <p className="text-sm font-medium leading-snug tracking-wide text-secondary dark:text-slate-400 text-opacity-100">{item.company} | {item.duration}</p>
      <ul className="mt-4 list-disc list-inside text-sm text-slate-600 dark:text-slate-300 space-y-1">
        {item.description.map((desc, index) => <li key={index}>{desc}</li>)}
      </ul>
    </div>
  </div>
);

const Experience: React.FC = () => {
  return (
    <Section id="experience" title="Work Experience">
      <div className="relative wrap overflow-hidden p-2 sm:p-10 h-full">
        <div className="border-2-2 absolute border-opacity-20 border-secondary dark:border-slate-700 h-full border" style={{left: '50%'}}></div>
        {experienceData.map((item, index) => (
          <div key={index} className={`mb-8 flex justify-between ${index % 2 === 0 ? '' : 'flex-row-reverse'} items-center w-full`}>
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-primary shadow-xl w-8 h-8 rounded-full">
                <div className="mx-auto bg-white dark:bg-gray-800 h-2 w-2 rounded-full"></div>
            </div>
            <div className="order-1 bg-white dark:bg-gray-800/90 backdrop-blur-sm rounded-lg shadow-lg w-5/12 px-6 py-4 border border-slate-200 dark:border-gray-700">
              <h3 className="mb-2 font-bold text-slate-800 dark:text-white text-xl">{item.role}</h3>
              <p className="text-sm font-medium leading-snug tracking-wide text-secondary dark:text-slate-400">{item.company} | {item.duration}</p>
              <ul className="mt-4 list-disc list-inside text-sm text-slate-600 dark:text-slate-300 space-y-1">
                {item.description.map((desc, i) => <li key={i}>{desc}</li>)}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Experience;
