import React from 'react';
import Image from 'next/image';
import group from '../public/img/mesh.svg'
import logo1 from '../public/img/logo.svg'

const AboutSection = () => {
  return (
    <section className="relative  w-full mt-10 sm:mt-16 bg-transparent md:bg-[#ADC4FF]" aria-label="About Biowell Pharmaceutical">
      {/* Background Image - Hidden on mobile */}
      <div className="absolute inset-0 hidden md:block">
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
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center mx-auto max-w-[288px] max-h-[201px]">
        {/* Logo */}
          <Image
            src={logo1}
            alt="Biowell Pharmaceutical Logo"
            className="w-[200px] h-[74px] sm:w-[340px] sm:h-[126px]"
            width={340}
            height={126}
          />

        {/* Description */}
        <div className='font-medium pt-5'>
          <p className="text-[12px] md:text-[20px] text-[#808080] leading-[18px]">
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