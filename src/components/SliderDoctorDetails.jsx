"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import doctordetails from '../public/doctordetails.png'; 

const Drdetails = () => {
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000); 

    return () => clearInterval(interval); 
  }, [slides.length]);

  return (
    <section className="py-16 ">
      <div className="container mx-auto flex justify-center items-center relative bg-blue-300">
        {/* Slider Section */}
        <div className="flex flex-col items-center text-center p-6 w-full max-w-[1440px] h-auto relative ">
          {/* Image Container */}
          <div className="relative w-full h-500 overflow-hidden  rounded-lg shadow-md bg-blue-200">
            <Image
              src={slides[currentIndex].image}
              alt={slides[currentIndex].title}
              layout="responsive"  
              width={1440} 
              height={500}  
              className="object-cover rounded-lg shadow-md transition-opacity duration-1000 ease-in-out"
            />

            {/* Title and Description overlaid on the image */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black bg-opacity-50 p-4">
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                {slides[currentIndex].title}
              </h3>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white mt-2">
                {slides[currentIndex].description}
              </p>
            </div>

            {/* Dots overlaid on the image */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
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
        </div>
      </div>
    </section>
  );
};

export default Drdetails;
