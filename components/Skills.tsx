
import React from 'react';
import Section from './Section';
import { skillsData } from '../constants';

const Skills: React.FC = () => {
  return (
    <Section id="skills" title="Technical Profile">
      <div className="max-w-4xl mx-auto">
        {skillsData.map((category, index) => (
          <div key={index} className="mb-8 p-6 bg-white dark:bg-gray-800/90 rounded-lg shadow-md border border-slate-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-6">{category.title}</h3>
            <div className="space-y-5">
              {category.skills.map((skill, i) => (
                <div key={i}>
                  <div className="flex justify-between mb-1">
                    <span className="text-base font-medium text-slate-700 dark:text-slate-300">{skill.name}</span>
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{skill.proficiency}%</span>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div className="bg-primary dark:bg-sky-400 h-2.5 rounded-full" style={{ width: `${skill.proficiency}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
