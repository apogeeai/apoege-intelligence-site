import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt="AI Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>
      <div className="container mx-auto text-center relative z-10">
        <h2 className="text-5xl font-bold mb-4">Elevate Your Business with AI</h2>
        <p className="text-xl mb-8">Apogee Intelligence: Expert AI consulting to transform your operations and drive growth</p>
        <a href="#contact" className="btn btn-primary">Get Started</a>
      </div>
    </section>
  );
};

export default Hero;