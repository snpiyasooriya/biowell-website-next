import React from 'react';
import { FaPills, FaExchangeAlt, FaMicroscope } from 'react-icons/fa';

const KeyServices = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center px-4">
        {/* Add margin-bottom to the title */}
        <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-16">KEY SERVICES</h2>
        
        {/* Grid layout with 25px gap between boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[25px]">
          {/* Service 1 */}
          <div className="bg-blue-100 p-6 rounded-lg shadow-md flex flex-col items-center h-[360px] w-[284px] mx-auto">
            <FaPills className="text-5xl text-blue-600 mb-4" />
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2 text-center">Manufacturing Services</h3>
            <p className="text-gray-700 text-center">
              We provide comprehensive contract manufacturing services, from formulation to final product. Our facilities are equipped with state-of-the-art technology, ensuring the highest standards of quality.
            </p>
          </div>

          {/* Service 2 */}
          <div className="bg-blue-100 p-6 rounded-lg shadow-md flex flex-col items-center h-[360px] w-[284px] mx-auto">
            <FaExchangeAlt className="text-5xl text-blue-600 mb-4" />
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2 text-center">Trading Services</h3>
            <p className="text-gray-700 text-center">
              We provide comprehensive trading services, ensuring the delivery of high-quality products globally. We maintain excellence across all levels of service to meet client needs.
            </p>
          </div>

          {/* Service 3 */}
          <div className="bg-blue-100 p-6 rounded-lg shadow-md flex flex-col items-center h-[360px] w-[284px] mx-auto">
            <FaMicroscope className="text-5xl text-blue-600 mb-4" />
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2 text-center">Research and Development</h3>
            <p className="text-gray-700 text-center">
              Our R&D team is at the forefront of pharmaceutical innovation, developing new treatments and improving formulations to meet the evolving needs of healthcare.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyServices;
