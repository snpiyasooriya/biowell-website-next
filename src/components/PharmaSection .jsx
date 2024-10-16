import React from 'react';
import Image from 'next/image';
import bootomimg from '../public/img/production.jpg';

const PharmaSection = () => {
  return (
    <div className="relative w-full max-w-[288px] h-[380px] mx-auto mb-16 mt-4 sm:max-w-[1196px] sm:h-[530px] rounded-md px-4 sm:px-15"> 
      {/* Background image */}
      <Image
        src={bootomimg}
        alt="Pharmaceutical background"
        className="absolute inset-0 w-full h-full rounded-md object-cover"
      />

      {/* Overlay to darken the background image */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Overlay content */}
      <div className="absolute inset-0 flex flex-col items-center justify-start pt-8 sm:items-center sm:justify-center z-10 px-4 sm:px-15">
        <div className="text-center text-white max-w-2xl">
          <h1 className="text-sm sm:text-sm md:text-4xl lg:text-5xl font-bold leading-[18px] md:text-[15px]">
            YOUR PARTNER IN 
          </h1>
          <h1 className="text-[25px] leading-[25px] lg:text-5xl sm:text-base font-extrabold text-[#2DC283] sm:text-white md:text-white">
            HEALTH & INNOVATION
          </h1>

          <p className="text-[12px] leading-[18px] sm:text-sm sm:leading-5 md:text-lg md:leading-7 mb-6 sm:mb-8">
            If you have any pharmaceutical needs or inquiries, please do not 
            hesitate to contact us. Our team is ready to assist you and 
            provide the best solutions for your business.
          </p>
          <a
            href="#"
            className="inline-flex justify-center items-center w-[234px] h-[43px] bg-[#2DC283] text-black font-semibold text-[20px] leading-[25px] sm:text-white sm:font-bold sm:text-base sm:leading-normal sm:w-auto sm:h-auto sm:py-3 sm:px-6 rounded-md hover:bg-white hover:text-[#2DC283] transition duration-300"
          >
            Get a quote
          </a> 
        </div>
      </div>
    </div>
  );
};

export default PharmaSection;
