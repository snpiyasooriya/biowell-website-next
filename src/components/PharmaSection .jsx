// components/PharmaSection.js
import React from 'react';

const PharmaSection = () => {
  return (
    <div className="relative w-full max-w-[1196px] h-[530px] mx-auto mb-16"> {/* Use w-full and max-w for responsiveness */}
      {/* Background image */}
      <img
        src="/" 
        alt="Pharmaceutical background"
        className="absolute inset-0 w-full h-full object-cover opacity-70"
      />

      {/* Overlay to darken the background image */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Overlay content */}
      <div className="absolute inset-0 flex items-center justify-center z-10 px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white max-w-lg">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            YOUR PARTNER IN <br /> HEALTH AND INNOVATION
          </h1>
          <p className="text-sm sm:text-base md:text-lg mb-8">
            If you have any pharmaceutical needs or inquiries, please do not 
            hesitate to contact us. Our team is ready to assist you and 
            provide the best solutions for your business.
          </p>
          <a
            href="#"
            className="bg-green-500 text-white py-2 px-6 rounded-md hover:bg-green-600 transition duration-300 ease-in-out"
          >
            Get a quote
          </a>
        </div>
      </div>
    </div>
  );
};

export default PharmaSection;
