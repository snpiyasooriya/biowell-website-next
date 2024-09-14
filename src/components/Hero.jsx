"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import her1 from '../public/hero1.jpg'; // Correct image import

const HeroSlider = () => {
  //  images and text for each slide
  const slides = [
    {
      image: her1,
      title: "Translating grndbreaking science into tomorrow's cures",
      buttonText: 'Learn More',
    },
    {
      image: her1, 
      title: "Translating grndbreaking science into tomorrow's cures",
      buttonText: 'Learn More',
    },
    {
      image: her1,
      title: "Translating grndbreaking science into tomorrow's cures",
      buttonText: 'Learn More',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

 
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000); 

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className=" bg-white">
      <div className="container mx-auto flex justify-center items-center relative">
        {/* Slider Section */}
        <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[460px] overflow-hidden rounded-lg">
          <div className="w-full h-full">
            <Image
              src={slides[currentIndex].image}
              alt={slides[currentIndex].title}
              layout="fill"
              objectFit="cover"
              className="rounded-lg transition-opacity duration-1000 ease-in-out"
            />
          </div>

          {/* Text overlay */}
          <div className="absolute top-0 right-0 bg-gradient-to-l from-white/90 to-transparent p-6 md:p-8 w-2/3 md:w-1/2 h-full flex flex-col justify-center">
            <h2 className="text-2xl md:text-4xl font-semibold text-gray-800">
              {slides[currentIndex].title}
            </h2>
            <button className="mt-6 bg-blue-600 text-white py-2 px-4 md:px-6 rounded-lg w-[200px]  h-[50px]">
              {slides[currentIndex].buttonText}
            </button>
          </div>
        </div>
      </div>

      {/* Dots */}
      <div className="mt-4 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`cursor-pointer w-3 h-3 rounded-full ${
              index === currentIndex ? 'bg-blue-600' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
