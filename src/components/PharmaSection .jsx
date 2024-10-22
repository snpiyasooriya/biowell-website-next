import React from 'react';
import Image from 'next/image';
import bootomimg from '../public/img/production.jpg';

const PharmaSection = () => {
  return (
    <div className="relative w-full max-w-[288px]  mx-auto mb-16 sm:max-w-[1196px] h-[380px] md:h-[350px] rounded-md px-4 sm:px-15">
      {/* Background image */}
      <Image
        src={bootomimg}
        alt="Pharmaceutical background"
        className="absolute inset-0 w-full h-full rounded-md object-cover"
      />

      {/* Overlay to darken the background image */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Overlay content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pt-8  z-10 px-4 sm:px-15">
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

        </div>
      </div>
    </div>
  );
};

export default PharmaSection;
