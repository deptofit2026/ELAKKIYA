
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Publications from './components/Publications';
import ProfessionalDevelopment from './components/ProfessionalDevelopment';
import SubjectsTaught from './components/SubjectsTaught';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen text-slate-800 dark:text-slate-200 font-sans">
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Publications />
        <SubjectsTaught />
        <ProfessionalDevelopment />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
