
import React from 'react';
import { personalInfo } from '../constants';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-slate-100 dark:bg-gray-800 border-t border-slate-200 dark:border-gray-700">
      <div className="container mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center text-sm text-slate-500 dark:text-slate-400">
        <p>&copy; {currentYear} {personalInfo.name.split(',')[0]}. All Rights Reserved.</p>
        <p className="mt-1">Designed with a modern touch to showcase professional achievements.</p>
      </div>
    </footer>
  );
};

export default Footer;
