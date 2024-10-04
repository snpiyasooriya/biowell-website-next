"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import heroImage1 from '../public/heroo.png'; // Update with your actual image paths
import heroImage2 from '../public/heroo.png';
import heroImage3 from '../public/heroo.png';

const HeroSlider = () => {
  const slides = [
    {
      image: heroImage1,
      title: "Translating groundbreaking science into tomorrow's cures",
    },
    {
      image: heroImage2,
      title: "Advancing medical research for a healthier future",
    },
    {
      image: heroImage3,
      title: "Innovative solutions for life-changing treatments",
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
    <section className="relative bg-[#1D2068] text-white">
      <div className="w-full">
        <div className="relative w-full h-[800px] overflow-hidden">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <Image
                src={slide.image}
                alt={slide.title}
                layout="fill"
                objectFit="cover"
                className="opacity-70"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-[#1D2068] opacity-50"></div>
              <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-16 max-w-7xl mx-auto">
                <h1 className="text-3xl md:text-5xl font-bold mb-4 max-w-2xl">
                  {slide.title}
                </h1>
                <a 
                  href="#learn-more" 
                  className="text-white border border-white py-2 px-6 rounded-md font-semibold text-lg inline-block w-max hover:bg-white hover:text-[#1D2068] transition-colors duration-300"
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
        
        {/* Slider dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
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