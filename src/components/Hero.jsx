"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import her1 from '../public/img/heronew.png'; // Correct image import

const HeroSlider = () => {
  // Images and text for each slide
  const slides = [
    {
      image: her1,
      title: {
        t1: "Translating",
        t2: "groundbreaking science ",
        t3: "to life science"
      },
      buttonText: 'Learn More',
    },
    {
      image: her1, 
      title: {
        t1: "Translating",
        t2: "groundbreaking science ",
        t3: "to life science"
      },
      buttonText: 'Learn More',
    },
    {
      image: her1,
      title: {
        t1: "Translating",
        t2: "groundbreaking science ",
        t3: "to life science"
      },
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
    <section className="bg-blue-200 relative">
      <div className="container mx-auto flex justify-center items-center relative">
        {/* Slider Section */}
        <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[460px] overflow-hidden rounded-lg leading-10 bg-blue-200">
          <div className="w-full h-full relative">
            <Image
              src={slides[currentIndex].image}
              alt={slides[currentIndex].title.t1}
              layout="fill"
              objectFit="cover"
              className="rounded-lg  duration-1000 ease-in-out"
            />
            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
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
          </div>

          {/* Text and Button overlay */}
          <div className="absolute top-0 right-0 p-6 md:p-8 w-2/3 md:w-1/2 h-full flex flex-col justify-center items-end text-right">
            {/* Text */}
            <h2 className="text-2xl md:text-4xl font-semibold text-black ">
              {slides[currentIndex].title.t1} <br />
              {slides[currentIndex].title.t2}<br />
              {slides[currentIndex].title.t3}
            </h2>
            {/* Button aligned with text */}
            <button className="mt-6 bg-blue-600 text-white py-2 px-4 md:px-6 rounded-lg w-[200px] h-[50px]  ">
              {slides[currentIndex].buttonText}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
