
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
      
      {/* Background Graphic */}
      <div className="absolute right-0 top-0 h-full w-1/2 pointer-events-none">
        <div className="absolute right-0 bottom-0 w-full h-full bg-gradient-to-br from-ncompass-green/20 to-ncompass-green/5 opacity-70"></div>
        <div className="absolute right-0 top-0 w-4/5 h-4/5">
          <div className="absolute inset-0 transform -translate-y-1/4 translate-x-1/4">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <path 
                fill="#8DCB2C" 
                d="M100,20 a80,80 0 1,0 0,160 a80,80 0 1,0 0,-160 z" 
                opacity="0.3" 
              />
              <path 
                fill="#8DCB2C" 
                d="M100,40 a60,60 0 1,0 0,120 a60,60 0 1,0 0,-120 z"
                opacity="0.5" 
              />
              <path 
                fill="#8DCB2C" 
                d="M100,60 a40,40 0 1,0 0,80 a40,40 0 1,0 0,-80 z" 
                opacity="0.8" 
              />
              <path 
                fill="#8DCB2C" 
                d="M85,100 L150,100 M100,60 L100,140 M75,60 L125,140 M125,60 L75,140" 
                stroke="#8DCB2C" 
                strokeWidth="6" 
                opacity="0.6" 
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
