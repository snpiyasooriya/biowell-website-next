"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import doctordetails from '../public/doctordetails.png'; // Correct image import

const Drdetails = () => {
  // Array containing images 
  const slides = [
    {
      image: doctordetails,
      title: 'Dr. Emill Johnson',
      description: 'MD, Independent Physician and Medical Consultant',
    },
    {
      image: doctordetails, 
      title: 'Dr. Sarah Bennett',
      description: 'Cardiologist, Specialist in Heart Care and Wellness',
    },
    {
      image: doctordetails, 
      title: 'Dr. Michael Adams',
      description: 'MD, Neurologist and Research Scientist',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically switch images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {z
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); 
  }, [slides.length]);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto flex justify-center items-center relative">
        {/* Slider Section */}
        <div className="flex flex-col items-center text-center p-6  w-full max-w-[1440px] h-auto">
          {/* Image Container */}
          <div className="w-[1196px] h-[460px] overflow-hidden">
            <Image
              src={slides[currentIndex].image}
              alt={slides[currentIndex].title}
              width={1440}  // Set the exact width
              height={500}  // Set the exact height
              className="object-cover rounded-lg shadow-md transition-opacity duration-1000 ease-in-out"
            />
          </div>

          {/* Text Content */}
          <div className="mt-4">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-800">
              {slides[currentIndex].title}
            </h3>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 mt-2">
              {slides[currentIndex].description}
            </p>
          </div>
        </div>
      </div>

      {/* Dots to indicate the current image */}
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

export default Drdetails;
