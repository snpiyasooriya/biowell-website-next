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
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); 
  }, [slides.length]);

  return (
    <section className="py-16">
      <div className="container mx-auto flex justify-center items-center relative">
        {/* Slider Section */}
        <div className="flex flex-col items-center text-center p-6 w-full max-w-[1440px] h-auto">
          {/* Image Container */}
          <div className="w-full h-auto overflow-hidden bg-blue-200">
            <Image
              src={slides[currentIndex].image}
              alt={slides[currentIndex].title}
              layout="responsive"  // Ensure image is responsive
              width={1440}  // Set image's natural width
              height={500}  // Set image's natural height
              className="object-cover rounded-lg shadow-md transition-opacity duration-1000 ease-in-out"
            />
          </div>

          {/* Text Content */}
          <div className="mt-4">
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-blue-800">
              {slides[currentIndex].title}
            </h3>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 mt-2">
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
