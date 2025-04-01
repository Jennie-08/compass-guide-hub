
import React from 'react';
import SearchBar from './SearchBar';

const Hero = () => {
  return (
    <section className="relative bg-gray-100 text-gray-800 py-16 md:py-24 overflow-hidden">
      <div className="kb-container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-ncompass-blue">How Can We Help?</h1>
          <p className="text-xl mb-8 text-gray-600">
            Find tutorials, guides, and answers to all your dashboard questions.
          </p>
          <SearchBar size="large" className="max-w-2xl mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
