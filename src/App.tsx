import React from 'react';
import { BackgroundSlider } from './components/ui/BackgroundSlider';
import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Publications from './components/Publications';
import NanoBuilderGame from './components/game/NanoBuilderGame';

function App() {
  return (
    <div className="min-h-screen">
      <BackgroundSlider />
      <Header />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Publications />
        <NanoBuilderGame />
      </main>
    </div>
  );
}

export default App;