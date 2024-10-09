import React from 'react';
import Image from 'next/image';
import manufacturing from '../public/manufacturing.svg';
import trading from '../public/trading.svg';
import resarch from '../public/Resarch.svg';

const KeyServices = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto text-center px-4">
        {/* Add margin-bottom to the title */}
        <h2 className="text-[20px] md:text-4xl text-[#0053CC] md:text-navcolor mb-7">
  <span className='leading-[50px] font-semibold'>Key Service</span>
</h2>

        
        {/* Grid layout with 50px gap between boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[50px] sm:text-[20px] -mx-5 sm:mx-0">
          
          {/* Service 1 */}
          <div className="bg-[#D0D4FF] p-6 rounded-lg shadow-md flex flex-col items-center h-[208px] w-[288px] mx-auto sm:h-[360px] sm:w-[284px]">
            <div className="flex items-center mb-2 w-full">
              <Image src={manufacturing} alt="Manufacturing" width={64} height={50} className="mr-2" />
              <h3 className="text-[20px] font-bold text-keyservice">Manufacturing Services</h3>
            </div>
            <p className="text-sm sm:text-base text-keyserviceletters text-left">
              We provide comprehensive contract manufacturing services, from formulation to final product. Our facilities ensure the highest quality standards.
            </p>
          </div>

          {/* Service 2 */}
          <div className="bg-[#D0D4FF] p-6 rounded-lg shadow-md flex flex-col items-center h-[208px] w-[288px] mx-auto sm:h-[360px] sm:w-[284px]">
            <div className="flex items-center mb-2 w-full">
              <Image src={trading} alt="Trading" width={64} height={50} className="mr-2" />
              <h3 className="text-[20px] font-bold text-keyservice">Trading Services</h3>
            </div>
            <p className="text-sm sm:text-base text-keyserviceletters text-left">
              We provide comprehensive trading services, ensuring the delivery of high-quality products globally. We maintain excellence across all levels of service.
            </p>
          </div>

          {/* Service 3 */}
          <div className="bg-[#D0D4FF] p-6 rounded-lg shadow-md flex flex-col items-center h-[208px] w-[288px] mx-auto sm:h-[360px] sm:w-[284px]">
            <div className="flex items-center mb-2 w-full">
              <Image src={resarch} alt="Research" width={64} height={50} className="mr-2" />
              <h3 className="text-[20px] font-bold text-keyservice">Research and Development</h3>
            </div>
            <p className="text-sm sm:text-base text-keyserviceletters text-left">
              Our R&D team is at the forefront of pharmaceutical innovation, developing new treatments and improving formulations to meet evolving healthcare needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyServices;
