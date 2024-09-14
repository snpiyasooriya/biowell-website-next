import React from 'react';
import Image from 'next/image';
import group from '../public/Group.svg'

const AboutSection = () => {
  return (
    <section className="relative h-[500px] max-w-full gap-16 mt-16 bg-blue-50">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={group}
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="z-0"
        />
      </div>

      {/* Overlaying Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 sm:px-8 gap-8 ">
        {/* Logo */}
        <h1 className="text-4xl sm:text-6xl font-bold text-balck mb-4 sm:mb-8">
          LOGO
        </h1>

        {/* Description */}
        <p className="text-sm sm:text-lg md:text-xl text-black mb-6 sm:mb-8 max-w-3xl">
          Founded in [Year], Biowell pharmaceutical (Pvt) Ltd. has grown from a small startup to a global leader in pharmaceutical manufacturing and trading. Our journey is marked by innovation, quality, and dedication to improving lives.
        </p>

        {/* Learn Button */}
        <a
          href="#"
          className="bg-blue-800 text-black text-sm sm:text-lg px-4 py-2 sm:px-6 sm:py-3 rounded-full hover:bg-blue-200 transition duration-300"
        >
          Learn More
        </a>
      </div>
    </section>
  );
};

export default AboutSection;
