import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Research from './components/Research/Research';
import Education from './components/Education/Education';
import TechnicalSkills from './components/TechnicalSkills/TechnicalSkills';
import Patents from './components/Patents/Patents';
import Copyrights from './components/Copyrights/Copyrights';
import Publications from './components/Publications';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Education />
        <Research />
        <TechnicalSkills />
        <Patents />
        <Copyrights />
        <Publications />
        <Contact />
      </main>
    </div>
  );
}

export default App;