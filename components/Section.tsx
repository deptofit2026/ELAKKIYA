
import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, children }) => {
  return (
    <section id={id} className="py-16 sm:py-20">
      <h2 className="text-3xl font-bold tracking-tight text-center text-slate-900 dark:text-white sm:text-4xl">
        {title}
      </h2>
      <div className="mt-12">
        {children}
      </div>
    </section>
  );
};

export default Section;
