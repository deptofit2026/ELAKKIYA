
import React from 'react';
import Section from './Section';
import { personalInfo } from '../constants';

const About: React.FC = () => {
  return (
    <Section id="about" title="About Me">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
          {personalInfo.about}
        </p>
      </div>
    </Section>
  );
};

export default About;
