"use client"
import { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import product1 from '../public/product1.png';

const Product = () => {
  // Define the slides (you can replace these with actual data)
  const slides = [
    {
      title: 'Climmdruff - Anti dandruff Shampoo',
      description: 'Effective treatment for dandruff and itchy scalp. Gently cleanses while nourishing the hair. Suitable for all hair types. Available in 200ml bottles.',
      image: product1,
    },
    {
      title: 'Another Product',
      description: 'Description for another product goes here.',
      image: '/path-to-another-image.png',
    },
    {
        title: 'Another Product',
        description: 'Description for another product goes here.',
        image: '/path-to-another-image.png',
      },
      {
        title: 'Another Product',
        description: 'Description for another product goes here.',
        image: '/path-to-another-image.png',
      },
      {
        title: 'Another Product',
        description: 'Description for another product goes here.',
        image: '/path-to-another-image.png',
      },
      {
        title: 'Another Product',
        description: 'Description for another product goes here.',
        image: '/path-to-another-image.png',
      },
    // Add more slides as needed
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section className="bg-[#A4ADFF] py-12">
      <div className="max-w-screen-lg mx-auto h-[800px] flex flex-col">
        {/* Title and Description */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-blue-900">OUR PORTFOLIO</h2>
          <p className="text-lg text-gray-600 mt-2">
            Explore the high-quality medicines we manufacture for our valued clients. Each product is crafted with care, adhering to the highest standards of safety and efficacy.
          </p>
        </div>

        {/* Slider Content */}
        <div className="relative flex-grow flex items-center justify-center">
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="absolute left-4 text-gray-700 hover:text-gray-900"
          >
            <ChevronLeftIcon className="w-[59px] h-[103px]" />
          </button>

          {/* Slide */}
          <div className="flex flex-col items-center">
            <Image
              src={slides[currentIndex].image}
              alt={slides[currentIndex].title}
              width={330}
              height={473}
              className="object-contain mb-4"
            />
            <h3 className="text-[28px] font-bold text-[#232662]">{slides[currentIndex].title}</h3>
            <p className="text-gray-600 mt-2 text-center max-w-md">{slides[currentIndex].description}</p>
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="absolute right-4 text-gray-700 hover:text-gray-900"
          >
            <ChevronRightIcon className="w-[59px] h-[103px]" />
          </button>

          {/* Dot Indicators */}
          <div className="absolute bottom-4 flex space-x-2">
            {slides.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-gray-800' : 'bg-gray-400'}`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
