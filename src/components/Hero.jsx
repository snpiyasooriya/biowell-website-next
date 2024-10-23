"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import heroImage1 from '../public/img/hero.png';
import heroImage2 from '../public/img/hero.png';
import heroImage3 from '../public/img/hero.png';
import heroImage1Mobile from '../public/img/mobile/hero_mobile.png';
import heroImage2Mobile from '../public/img/mobile/hero_mobile.png';
import heroImage3Mobile from '../public/img/mobile/hero_mobile.png';

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
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
      <section id="hero" className="relative text-white pt-[82px]">
        <div className="w-full">
          <div className="relative w-full h-[353px] sm:h-[500px] md:h-[600px] lg:h-[800px] overflow-hidden bg-[#383C8D]">
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 flex justify-center md:justify-end ${
                        index === currentSlide ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                  <Image
                      src={slide.imageMobile}
                      alt={`Hero image ${index + 1} - mobile`}
                      layout="fill"
                      objectFit="cover"
                      className="opacity-100 md:hidden bg-[#1D2068]"
                      priority={index === 0}
                      sizes="(max-width: 768px) 320px, 100vw"
                  />
                  <Image
                      src={slide.image}
                      alt={`Hero image ${index + 1} - desktop`}
                      layout="fill"
                      objectFit="cover"
                      className="hidden md:block"
                      priority={index === 0}
                      objectPosition="right"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, (max-width: 1440px) 70vw, 100vw"
                  />

                  <div className="absolute inset-0 bg-[#1D2068] opacity-0"></div>
                  <div className="absolute inset-0 flex flex-col justify-end md:justify-center px-4 md:px-16 max-w-7xl mx-auto md:pb-0">
                    <h1 className="text-2xl font-bold mb-4 max-w-2xl transition-colors duration-300 p-2 text-left md:hidden">
                      <span className="block text-[18px] font-medium leading-[28px] text-center mb-2">{slide.title}</span>
                      <span className="block text-[18px] font-medium leading-[28px] text-center mb-2">{slide.title2}</span>
                      <span className="block text-[25px] leading-[30px] text-center">{slide.title3}</span>
                    </h1>

                    <h1 className={`hidden md:block text-2xl md:text-4xl lg:text-5xl md:leading-[1.2] font-clash_display font-semibold mb-4 max-w-2xl transition-colors duration-300 p-2 text-left`}>
                      {slide.title} {slide.title2} {slide.title3}
                    </h1>

                    <Link
                        href="#learn-more"
                        className="md:hidden block mx-auto text-white border border-white rounded-md font-medium text-[18px] px-6 py-2 hover:bg-white hover:text-[#1D2068] text-center mb-8 font-clash_display"
                    >
                      Learn More
                    </Link>

                    <Link
                        href="#learn-more"
                        className={`hidden md:inline-block text-white border border-white rounded-md font-semibold text-[30px] w-[264px] h-[66px] hover:bg-white hover:text-[#1D2068] text-center leading-[58px] font-clash_display`}
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
            ))}
          </div>

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
