import React from 'react';
import Image from 'next/image';
import manufacturing from '../public/img/manufacturing_service_icon.svg';
import trading from '../public/img/trading_service_icon.svg';
import research from '../public/img/rnd_icon.svg';

const KeyServices = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto text-center px-4">
        {/* Title */}
        <h2 className="text-[20px] leading-[50px] text-[#0053CC] font-extrabold md:text-4xl md:text-navcolor mb-7">
          <span className='font-montserrat'>Key Service</span>
        </h2>

        {/* Grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px] sm:text-[20px] -mx-5 sm:mx-0">
          
          {/* Service 1 */}
          <div className="bg-[#D0D4FF] p-4 sm:p-6 rounded-lg shadow-md flex flex-col sm:flex-col items-start sm:items-center h-auto w-full max-w-[288px] mx-auto">
            {/* Flex row for image and h3 */}
            <div className="flex items-center sm:flex-col sm:items-center mb-2">
              {/* Image */}
              <div className="mr-3">
                <Image 
                  src={manufacturing} 
                  alt="Manufacturing" 
                  width={64} 
                  height={50} 
                  className="w-[52px] h-[50px] sm:w-[64px] sm:h-[50px]" 
                />
              </div>
              {/* Heading */}
              <h3 className="text-[16px] sm:text-[20px] font-bold text-[#0053CC] sm:text-keyservice text-left sm:text-center mb-0">
                Manufacturing Services
              </h3>
            </div>
            {/* Paragraph */}
            <p className="text-sm sm:text-base text-left sm:text-center sm:w-full sm:leading-[1.75] text-keyserviceletters">
              We provide comprehensive contract manufacturing services, from formulation to final product. Our facilities ensure the highest quality standards.
            </p>
          </div>

          {/* Service 2 */}
          <div className="bg-[#D0D4FF] p-4 sm:p-6 rounded-lg shadow-md flex flex-col sm:flex-col items-start sm:items-center h-auto w-full max-w-[288px] mx-auto">
            {/* Flex row for image and h3 */}
            <div className="flex items-center sm:flex-col sm:items-center mb-2">
              {/* Image */}
              <div className="mr-3">
                <Image 
                  src={trading} 
                  alt="Trading" 
                  width={64} 
                  height={50} 
                  className="w-[52px] h-[50px] sm:w-[64px] sm:h-[50px]" 
                />
              </div>
              {/* Heading */}
              <h3 className="text-[16px] sm:text-[20px] font-bold text-[#0053CC] sm:text-keyservice text-left sm:text-center mb-0">
                Trading Services
              </h3>
            </div>
            {/* Paragraph */}
            <p className="text-sm sm:text-base text-left sm:text-center sm:w-full sm:leading-[1.75] text-keyserviceletters">
              We provide comprehensive trading services, ensuring the delivery of high-quality products globally. We maintain excellence across all levels of service.
            </p>
          </div>

          {/* Service 3 */}
          <div className="bg-[#D0D4FF] p-4 sm:p-6 rounded-lg shadow-md flex flex-col sm:flex-col items-start sm:items-center h-auto w-full max-w-[288px] mx-auto">
            {/* Flex row for image and h3 */}
            <div className="flex items-center sm:flex-col sm:items-center mb-2">
              {/* Image */}
              <div className="mr-3">
                <Image 
                  src={research} 
                  alt="Research" 
                  width={64} 
                  height={50} 
                  className="w-[52px] h-[50px] sm:w-[64px] sm:h-[50px]" 
                />
              </div>
              {/* Heading */}
              <h3 className="text-[16px] sm:text-[20px] font-bold text-[#0053CC] sm:text-keyservice text-left sm:text-center mb-0">
                Research and Development
              </h3>
            </div>
            {/* Paragraph */}
            <p className="text-sm sm:text-base text-left sm:text-center sm:w-full sm:leading-[1.75] text-keyserviceletters">
              Our R&D team is at the forefront of pharmaceutical innovation, developing new treatments and improving formulations to meet evolving healthcare needs.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default KeyServices;
