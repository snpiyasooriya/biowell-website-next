'use client'
import { useState } from 'react';
import Image from 'next/image';
import product1 from '../public/product1.png';
import leftArrow from '../public/leftarrow.svg';
import rightArrow from '../public/rightarrow.svg';

const Product = () => {
  const slides = [
    {
      titlePart1: 'Climmdruff',
      titlePart2: 'Anti dandruff Shampoo',
      description: 'Effective treatment for dandruff and itchy scalp.',
      description2: 'Gently cleanses while nourishing the hair. Suitable for all hair types. Available in 200ml bottles.',
      image: product1,
    },
    {
      titlePart1: 'Climmdruff',
      titlePart2: 'Anti dandruff Shampoo',
      description: 'Effective treatment for dandruff and itchy scalp.',
      description2: 'Gently cleanses while nourishing the hair. Suitable for all hair types. Available in 200ml bottles.',
      image: product1,
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section className="bg-[#A4ADFF] py-6">
      <div className="max-w-[320px] sm:max-w-screen-md mx-auto px-4">
        <div className="text-center">
          <h2 className="text-[20px] font-bold text-navcolor leading-[25px] sm:text-[40px] sm:leading-[50px] lg:text-[40px] lg:leading-[50px]">
            WHAT WE PRODUCE
          </h2>
          <p className="text-[14px] leading-[20px] sm:text-[20px] sm:leading-[30px] mt-2 sm:mt-3 lg:text-[20px] lg:leading-[30px]">
            Explore the high-quality medicines we manufacture for our valued clients.
            Each product is crafted with care, adhering to the highest standards of safety and efficacy.
          </p>
        </div>

        <div className="relative flex items-center justify-center mt-6">
          <div className="flex flex-col items-center max-w-full px-4">
            <div className="relative">
              <Image
                src={slides[currentIndex].image}
                alt={`${slides[currentIndex].titlePart1} ${slides[currentIndex].titlePart2}`}
                width={319}
                height={473}
                className="object-contain"
              />
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 text-[#6772AB] hover:text-[#232662] transition-colors sm:hidden"
                aria-label="Previous slide"
              >
                <Image src={leftArrow} alt="Previous" width={25} height={24} />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 text-white hover:text-[#232662] transition-colors sm:hidden"

                aria-label="Next slide"
              >
                <Image src={rightArrow} alt="Next" width={25} height={24} />
              </button>
            </div>
            <h3 className="text-[16px] sm:text-[20px] font-bold text-[#232662] text-center mt-4 sm:mt-2">
              <span className="block">{slides[currentIndex].titlePart1}</span>
              <span className="block">{slides[currentIndex].titlePart2}</span>
            </h3>
            <p className="text-black text-center text-[12px] leading-[18px] sm:text-base mt-1">{slides[currentIndex].description}</p>
            <p className="text-black text-center text-[12px] leading-[18px] sm:text-base mt-1">{slides[currentIndex].description2}</p>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-0 z-10 text-[#6772AB] hover:text-[#232662] transition-colors hidden sm:block"
            aria-label="Previous slide"
          >
            <Image src={leftArrow} alt="Previous" width={40} height={40} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 z-10 text-white hover:text-[#232662] transition-colors hidden sm:block"
            aria-label="Next slide"
          >
            <Image src={rightArrow} alt="Next" width={40} height={40} className="text-white" />
          </button>
        </div>

        <div className="flex justify-center space-x-2 mt-4">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-2.5 h-2.5 rounded-full ${index === currentIndex ? 'bg-[#232662]' : 'bg-[#6772AB]'} transition-colors`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Product;
