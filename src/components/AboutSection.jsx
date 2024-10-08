import React from 'react';
import Image from 'next/image';
import group from '../public/Group.svg'
import logo1 from '../public/logo.svg'

const AboutSection = () => {
  return (
    <section className="relative min-h-[300px] sm:min-h-[500px] w-full gap-4 sm:gap-16 mt-8 sm:mt-16 bg-[#ADC4FF]" aria-label="About Biowell Pharmaceutical">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div className="relative w-full h-full">
          <Image
            src={group}
            alt="Biowell Pharmaceutical company background"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className="z-0"
            priority
          />
        </div>
      </div>

      {/* Overlaying Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 sm:px-8 py-6 sm:py-16 gap-3 sm:gap-8">
        {/* Logo */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-black mb-2 sm:mb-4 md:mb-8">
          <Image src={logo1} alt="Biowell Pharmaceutical Logo" className="w-32 h-auto sm:w-50 sm:h-50" width={288} height={201} />
        </h1>

        {/* Description */}
        <div className='font-semibold opacity-80 space-y-3 sm:space-y-[30px]'>
        <p className="text-[12px] sm:text-[16px] md:text-[20px] text-[#333333] mb-3 sm:mb-6 md:mb-8 max-w-3xl">
          Founded in [Year], Biowell pharmaceutical (Pvt) Ltd. has grown from a small startup to a global leader in pharmaceutical manufacturing and trading. Our journey is marked by innovation, quality, and dedication to improving lives.
        </p>
        </div>

        {/* Learn Button - Visible on all screen sizes */}
        <a
          href="#"
          className="flex bg-navcolor text-white font-bold text-xs sm:text-sm md:text-lg px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 rounded-full hover:bg-white hover:text-navcolor transition duration-300 w-[120px] sm:w-[200px] h-[36px] sm:h-[50px] items-center justify-center"
        >
          Learn More
        </a>
      </div>
    </section>
  );
};

export default AboutSection;
