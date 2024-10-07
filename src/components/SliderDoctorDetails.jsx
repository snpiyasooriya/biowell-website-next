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
    <section className="py-8 md:py-16 z-10">
      <div className='w-full bg-[#D0D4FF]'>
        <div className="container mx-auto flex justify-center items-center relative">
          {/* Slider Section */}
          <div className="relative w-full max-w-full h-[400px] md:h-[500px] overflow-hidden">
            {/* Image */}
            <Image
              src={slides[currentIndex].image}
              alt={slides[currentIndex].title}
              layout="fill"
              objectFit="cover"
              className="absolute inset-0"
            />

            {/* Text and Doctor's Details overlaid on the image */}
            <div className="absolute inset-0 flex flex-col justify-between p-4 md:p-8">
              {/* Upper left text */}
              <div className="w-full md:w-2/3 text-left align-text-bottom text-blue-900">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
                  High Standards and Reliable Results
                </h2>
                <p className="text-sm md:text-base lg:text-lg mt-2 md:mt-4 leading-relaxed text-black">
                  "As a practicing physician, I have had the opportunity to prescribe
                  various products from 'Biowell' to my patients. The consistent
                  quality and effectiveness of their medications have significantly
                  improved patient outcomes in my practice. I am particularly
                  impressed with their rigorous quality control measures and
                  commitment to innovation."
                </p>
              </div>

              {/* Centered doctor's details */}
              <div className="flex flex-col justify-center items-center text-center text-white mt-4 md:mt-16">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold">
                  {slides[currentIndex].title}
                </h3>
                <p className="text-sm md:text-base lg:text-lg mt-1 md:mt-2">
                  {slides[currentIndex].description}
                </p>
              </div>

              {/* Dots at the bottom center */}
              <div className="flex justify-center space-x-2 md:space-x-4 mt-4 md:mt-12">
                {slides.map((_, index) => (
                  <span
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`cursor-pointer w-2 h-2 md:w-3 md:h-3 rounded-full transition-transform duration-300 ${
                      index === currentIndex ? 'bg-blue-600 scale-110' : 'bg-gray-400 hover:bg-gray-600'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Drdetails;
