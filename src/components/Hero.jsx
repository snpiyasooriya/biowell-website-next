"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import heroImage1 from '../public/heroo.png'; // Update with your actual image paths
import heroImage2 from '../public/heroo.png';
import heroImage3 from '../public/heroo.png';
import heroImage1Mobile from '../public/heromobile.png'; // Update with your actual mobile image paths
import heroImage2Mobile from '../public/heromobile.png';
import heroImage3Mobile from '../public/heromobile.png';

const HeroSlider = () => {
  const slides = [
    {
      image: heroImage1,
      imageMobile: heroImage1Mobile,
      title: "Translating ",
      title2: "groundbreaking science ",
      title3: "into Tomorrow's Cures",
    },
    {
      image: heroImage2,
      imageMobile: heroImage2Mobile,
      title: "Translating groundbreaking",
      title2: "science into",
      title3: "Tomorrow's Cures",
    },
    {
      image: heroImage3,
      imageMobile: heroImage3Mobile,
      title: "Translating groundbreaking",
      title2: "science into",
      title3: "Tomorrow's Cures",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative text-white">
      <div className="w-full">
        <div className="relative w-full h-[353px] md:h-[800px] overflow-hidden">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {/* Use mobile image for smaller screens */}
              <Image
                src={slide.imageMobile}
                
                layout="fill"
                objectFit="cover"
                className="opacity-70 md:hidden bg-[#0053CC]"
                priority={index === 0}
                sizes="(max-width: 768px) 320px, 100vw"
              />
              {/* Use desktop image for larger screens */}
              <Image
                src={slide.image}
                
                layout="fill"
                objectFit="cover"
                className=" hidden md:block bg-[#1D2068]"
                priority={index === 0}
                sizes="(max-width: 768px) 320px, 100vw"
              />

              <div className="absolute inset-0 bg-[#1D2068] opacity-50"></div>
              <div className="absolute inset-0 flex flex-col justify-end md:justify-center px-4 md:px-16 max-w-7xl mx-auto pb-8 md:pb-0">
               {/* Mobile: display each title part in separate lines */}
                <h1 className="text-2xl font-bold mb-4 max-w-2xl transition-colors duration-300 p-2 text-left md:hidden">
                  <span className="block text-[18px] font-medium leading-[22px] text-center">{slide.title}</span>  
                  <span className="block text-[18px] font-medium leading-[22px] text-center">{slide.title2}</span>
                  <span className="block text-[25px] leading-[20px] text-center">{slide.title3}</span>
                </h1>

                {/* Desktop: display the whole title in a single line */}
                <h1 className="hidden md:block text-2xl md:text-5xl font-bold mb-4 max-w-2xl transition-colors duration-300 p-2 text-left clash-display">
                  {slide.title} {slide.title2} {slide.title3}
                </h1>


                <Link 
                  href="#learn-more" 
                  className="hidden md:inline-block text-white border border-white py-2 px-4 rounded-md font-semibold text-[30px] w-[264px] h-[66px] hover:bg-white hover:text-[#1D2068] transition-colors duration-300 text-center leading-[58px]"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Slider dots - hidden on mobile */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 hidden md:flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                index === currentSlide ? 'bg-white' : 'bg-gray-400 hover:bg-gray-300'
              }`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
