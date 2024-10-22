"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import doctordetails from '../public/img/doctor.png';
import doctordetailsMobile from '../public/img/mobile/doctor_mobile.png';

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
    <section id="testomonials" className="py-8 md:py-16 z-10">
      <div className="w-full md:bg-[#D0D4FF]">
        <div className="container mx-auto flex justify-center items-center relative">
          {/* Slider Section */}
          <div className="relative w-full max-w-full h-[500px] md:h-[500px] overflow-hidden m-4 md:m-0 mx-auto">
            {/* Mobile Image */}
            <div className="relative inset-0 bg-[#0053CC] md:hidden flex flex-col items-center justify-start w-[288px] h-[435px] mx-auto">
              <div className="w-[288px] h-[290px] absolute">
                <Image
                  src={slides[currentIndex].imageMobile}
                  alt={slides[currentIndex].title}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="top"
                />
              </div>
               {/*Mobile Text Centered */}
              <div className="text-center text-white p-2 flex-grow flex flex-col justify-end">
                <h2 className="text-lg font-bold mb-2 leading-snug">
                  High Standards and Reliable Results
                </h2>
                <p className="text-xs leading-snug">
                  "As a practicing physician, I have had the opportunity to prescribe
                  various products from 'Biowell' to my patients. I am particularly
                  impressed with their rigorous quality control measures and commitment to innovation."
                </p>
                <h3 className="text-lg font-semibold mt-4">
                  {slides[currentIndex].title}
                </h3>
                <p className="text-xs mt-1">
                  {slides[currentIndex].description}
                </p>
              </div>
            </div>

            {/* Desktop Image */}
            <Image
              src={slides[currentIndex].image}
              alt={slides[currentIndex].title}
              layout="fill"
              objectFit="cover"
              objectPosition="top"
              className="absolute inset-0 hidden md:block"
            />

            {/* Desktop Text (Unchanged) */}
            <div className="absolute inset-0 flex flex-col justify-between p-4 md:p-8">
              <div className="w-full md:w-2/3 text-center md:text-left text-white md:text-blue-900 hidden md:flex flex-col justify-end md:justify-center  h-full md:h-auto">
                <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-0">
                  High Standards and Reliable Results
                </h2>
                <p className="text-xs md:text-base lg:text-lg mt-2 md:mt-4 leading-relaxed md:text-black">
                  &ldquo;As a practicing physician, I have had the opportunity to prescribe
                  various products from &lsquo;Biowell&rsquo; to my patients. The consistent
                  quality and effectiveness of their medications have significantly
                  improved patient outcomes in my practice. I am particularly
                  impressed with their rigorous quality control measures and
                  commitment to innovation.&rdquo;
                </p>
              </div>

              {/* Desktop Doctor's Details (Unchanged) */}
              <div className="hidden md:flex flex-col justify-center items-center text-center text-white mt-0 md:mt-16">
                <h3 className="text-lg md:text-2xl lg:text-3xl font-semibold text-navcolor">
                  {slides[currentIndex].title}
                </h3>
                <p className="text-xs md:text-base lg:text-lg mt-1 md:mt-2 text-[#656565]">
                  {slides[currentIndex].description}
                </p>
              </div>
            </div>

            {/* Dots Navigation (Moved Here) */}
            <div className="hidden md:flex justify-center space-x-2 md:space-x-4 mt-2 md:mt-12 absolute bottom-4 left-1/2 transform -translate-x-1/2">
              {slides.map((_, index) => (
                <span
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`cursor-pointer w-2 h-2 md:w-3 md:h-3 rounded-full transition-transform duration-300 ${index === currentIndex ? 'bg-blue-600 scale-110' : 'bg-gray-400 hover:bg-gray-600'
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
