import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <Header />
      <Hero />
      <Services />
      <About />
      <Contact />
    </div>
  );
}

export default App;