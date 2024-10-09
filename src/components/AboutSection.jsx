import React from 'react';
import Image from 'next/image';
import group from '../public/Group.svg'
import logo1 from '../public/logo.svg'

const AboutSection = () => {
  return (
    <section className="relative min-h-[300px] sm:min-h-[500px] w-full mt-8 sm:mt-16 bg-transparent sm:bg-[#ADC4FF]" aria-label="About Biowell Pharmaceutical">
      {/* Background Image - Hidden on mobile */}
      <div className="absolute inset-0 hidden sm:block">
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
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 sm:px-8 py-10 sm:py-16 space-y-8 sm:space-y-8">
        {/* Logo */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-black">
          <Image 
            src={logo1} 
            alt="Biowell Pharmaceutical Logo" 
            className="w-[200px] h-[74px] sm:w-[340px] sm:h-[126px]"
            width={340}
            height={126}
          />
        </h1>

        {/* Description */}
        <div className='font-semibold opacity-80'>
          <p className="text-[12px] sm:text-[16px] md:text-[20px] text-[#333333] max-w-3xl">
            Founded in [Year], Biowell pharmaceutical (Pvt) Ltd. has grown from a small startup to a global leader in pharmaceutical manufacturing and trading. Our journey is marked by innovation, quality, and dedication to improving lives.
          </p>
        </div>

        {/* Learn Button - Hidden on mobile, visible on larger screens */}
        <a
          href="#"
          className="hidden sm:flex bg-navcolor text-white font-bold text-sm md:text-lg px-4 py-2 md:px-6 md:py-3 rounded-full hover:bg-white hover:text-navcolor transition duration-300 w-[200px] h-[50px] items-center justify-center"
        >
          Learn More
        </a>
      </div>
    </section>
  );
};

export default AboutSection;