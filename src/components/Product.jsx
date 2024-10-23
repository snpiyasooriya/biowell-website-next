'use client'
import { useState } from 'react';
import Image from 'next/image';
import product1 from '../public/img/products/anti_dandruff_climidruff.png';
import CrystalGlow from '../public/img/products/crystal_glow.png';
import SebioGel from '../public/img/products/sebio_gel.png';
import RetinaGlow from '../public/img/products/retin_glow.png';
import Acnepro from '../public/img/products/acnepro.png';
import Regrow from '../public/img/products/regrow.png';
import Biotin from '../public/img/products/biotin.png';
import leftArrow from '../public/img/left_button.svg';
import rightArrow from '../public/img/right_button.svg';

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
      titlePart1: 'Vitaceuticals Biotin Hair Shampoo',
      titlePart2: 'For thicker, fuller & helthier looking hair.',
      description: 'Vitaceuticals Biotin hair shampoo promotes hair growth and delivers essential moisture to the hair providing nourishing hydration to each strand down to root.',
      description2: 'Suitable for all hair types.',
      image: Biotin,
    },
    {
      titlePart1: 'Crystal Glow',
      titlePart2: 'Advanced Skin Repair Serum',
      description: 'Scientifically designed pigment-lightening serum that enhances skin tone and reduces melanin. Contains brightening actives that work synergistically to reduce dark spots and pigmentation effectively.',
      description2: 'Includes Tranexamic Acid (5%), Niacinamide (4%), and Glycolic Acid (3%). For external use only. Apply 3-5 drops to clean and toned skin twice daily. Use sunscreen in combination. Avoid eye contact and discontinue use if irritation occurs.',
      image: CrystalGlow,
    },
    {
      titlePart1: 'Acnepro ',
      titlePart2: 'Gel Cleanser',
      description: 'Specially created to cleans the skin & prevent blemishes. Acnepro gel kills acne bacteria and reduce the iritation.',
      description2: 'Triple action with D-Panthenol, salicylic acid & tea tree oil.',
      image: Acnepro,
    },
    {
      titlePart1: 'Regrow',
      titlePart2: 'Canadian Formula Energizing Hair Lotion',
      description: 'Effective control of hair loss with targeted action on DiHydro Testosterone, which is responsible for obstructing hair follicle pores.',
      description2: 'Contains a triple-action complex of Capigen®, Saw Palmetto, Pumpkin Seeds, and Nettle. Suitable for men, women, and all hair types. Sulfate and paraben-free.',
      image: Regrow,
    },
    {
      titlePart1: 'Retin Glow',
      titlePart2: 'Advanced Skin Repair Serum',
      description: 'An acne and anti-wrinkle serum with 0.5% retinol to reduce wrinkles, pores, and scars while improving skin texture and hydration.',
      description2: 'Contains 0.5% Retinol, 1% Hyaluronic Acid, Aloe Vera, Glycerin, Vitamin E, and pH balancers; free from fragrance, sulfates, and parabens; suitable for all skin types.',
      image: RetinaGlow,
    },
    {
      titlePart1: 'Sebiogel',
      titlePart2: 'Cleansing Gel',
      description: 'Anti-Acne Care: Provides clearer skin, comfort and calming.',
      description2: 'With Natural Green Tea Extract. Purifying cleansing gel for acne-prone skin. Exclusive complex Triple Action. Intensive care. ',
      image: SebioGel,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section id="products" className="bg-[#A4ADFF] py-6">
      <div className="max-w-[320px] sm:max-w-screen-md mx-auto px-4">
        <div className="text-center">
          <h2 className="text-[20px] font-bold text-navcolor leading-[25px] sm:text-[40px] sm:leading-[50px] lg:text-[40px] lg:leading-[50px]">
            WHAT WE PRODUCE
          </h2>
          <p className="text-[14px] md:text-[#414141] leading-[20px] sm:text-[20px] sm:leading-[30px] mt-2 sm:mt-3 lg:text-[20px] lg:leading-[30px]">
            Discover our premium range of cosmetic products, meticulously crafted for our esteemed clients.
            We take pride in manufacturing high-quality cosmetics that meet the most rigorous standards of safety and effectiveness.
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
