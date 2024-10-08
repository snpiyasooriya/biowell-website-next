"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import doctordetails from '../public/doctordetails.png';
import doctordetailsMobile from '../public/doctordetailsmobile.png';

const Drdetails = () => {
  const slides = [
    {
      image: doctordetails,
      imageMobile: doctordetailsMobile,
      title: 'Dr. Emill Johnson',
      description: 'MD, Independent Physician and Medical Consultant',
    },
    {
      image: doctordetails,
      imageMobile: doctordetailsMobile,
      title: 'Dr. Sarah Bennett',
      description: 'Cardiologist, Specialist in Heart Care and Wellness',
    },
    {
      image: doctordetails,
      imageMobile: doctordetailsMobile,
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
      <div className='w-full   md:bg-[#D0D4FF]'>
        <div className="container mx-auto flex justify-center items-center relative">
          {/* Slider Section */}
          <div className="relative w-full max-w-full h-[435px] md:h-[500px] overflow-hidden m-4 md:m-0">
            {/* Image - Use different images for mobile and desktop */}
            <div className="absolute inset-0 bg-[#0053CC] md:hidden">
              <Image
                src={slides[currentIndex].imageMobile}
                alt={slides[currentIndex].title}
                layout="fill"
                objectFit="cover"
                sizes="(max-width: 320px) 100vw, 320px"
              />
            </div>
            <Image
              src={slides[currentIndex].image}
              alt={slides[currentIndex].title}
              layout="fill"
              objectFit="cover"
              sizes="(max-width: 768px) 100vw, 768px"
              className="absolute inset-0 hidden md:block" // Show only on desktop
            />

            {/* Text and Doctor's Details overlaid on the image */}
            <div className="absolute inset-0 flex flex-col justify-between p-4 md:p-8">
              {/* Upper text - centered and at the bottom on mobile, left-aligned on larger screens */}
              <div className="w-full md:w-2/3 text-center md:text-left md:align-text-bottom text-white md:text-blue-900 flex flex-col justify-end md:justify-start h-full md:h-auto ">
                <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-0">
                  High Standards and Reliable Results
                </h2>
                <p className="text-xs md:text-base lg:text-lg mt-2 md:mt-4 leading-relaxed md:text-black">
                  "As a practicing physician, I have had the opportunity to prescribe
                  various products from 'Biowell' to my patients. The consistent
                  quality and effectiveness of their medications have significantly
                  improved patient outcomes in my practice. I am particularly
                  impressed with their rigorous quality control measures and
                  commitment to innovation."
                </p>
              </div>

              {/* Centered doctor's details */}
              <div className="flex flex-col justify-center items-center text-center text-white mt-0 md:mt-16 ">
                <h3 className="text-lg md:text-2xl lg:text-3xl font-semibold">
                  {slides[currentIndex].title}
                </h3>
                <p className="text-xs md:text-base lg:text-lg mt-1 md:mt-2 ">
                  {slides[currentIndex].description}
                </p>
              </div>

              {/* Dots at the bottom center */}
              <div className="flex justify-center space-x-2 md:space-x-4 mt-2 md:mt-12">
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
