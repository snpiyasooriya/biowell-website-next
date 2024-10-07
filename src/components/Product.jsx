"use client"
import { useState } from 'react';
import Image from 'next/image';
import product1 from '../public/product1.png';
import leftArrow from '../public/left.png';
import rightArrow from '../public/right.png';

const Product = () => {
  const slides = [
    {
      title: 'Climmdruff - Anti dandruff Shampoo',
      description: 'Effective treatment for dandruff and itchy scalp. Gently cleanses while nourishing the hair. Suitable for all hair types. Available in 200ml bottles.',
      image: product1,
    },
    {
    title: 'Climmdruff - Anti dandruff Shampoo',
    description: 'Effective treatment for dandruff and itchy scalp. Gently cleanses while nourishing the hair. Suitable for all hair types. Available in 200ml bottles.',
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
    <section className="bg-[#A4ADFF] py-8">
      <div className="max-w-screen-md mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-navcolor">OUR PORTFOLIO</h2>
          <p className="text-base text-keyserviceletters mt-3">
            Explore our high-quality medicines. Each product is crafted with care, adhering to the highest standards.
          </p>
        </div>

        <div className="relative flex flex-col items-center justify-center">
          <div className="flex items-center justify-center w-full">
            <button
              onClick={prevSlide}
              className="text-[#6772AB] hover:text-[#232662] transition-colors"
              aria-label="Previous slide"
            >
              <Image src={leftArrow} alt="Previous" width={40} height={40} />
            </button>

            <div className="flex flex-col items-center max-w-full px-4">
              <Image
                src={slides[currentIndex].image}
                alt={slides[currentIndex].title}
                width={250}
                height={357}
                className="object-contain mb-6"
              />
              <h3 className="text-2xl font-bold text-[#232662] text-center mb-2">{slides[currentIndex].title}</h3>
              <p className="text-black text-center text-base max-w-sm">{slides[currentIndex].description}</p>
            </div>

            <button
              onClick={nextSlide}
              className="text-[#6772AB] hover:text-[#232662] transition-colors"
              aria-label="Next slide"
            >
              <Image src={rightArrow} alt="Next" width={40} height={40} />
            </button>
          </div>

          <div className="flex space-x-3 mt-6">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-[#232662]' : 'bg-[#6772AB]'} transition-colors`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
