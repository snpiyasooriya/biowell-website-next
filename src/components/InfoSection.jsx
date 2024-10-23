import React from 'react';
import Image from 'next/image';
import dna from '../public/img/dna.png';
import pill from '../public/img/opened_capsule.png';

const InfoSection = () => {
  return (
      <div className="max-w-[320px] sm:max-w-[600px] md:max-w-[1196px] w-full mx-auto flex flex-col md:grid md:grid-cols-2 gap-2 md:gap-5 md:mt-5 md:mb-16 px-4 sm:px-6 lg:px-8">
        {/* First Box */}
        <div className="bg-white md:bg-[#B4BBFF] w-full max-w-[288px] sm:max-w-none mx-auto h-auto md:h-full pt-4 md:p-6 rounded-lg flex flex-col justify-between transform transition-transform hover:scale-[1.02] duration-300">
          <div className="text-center md:text-left">
            <h2 className="text-[20px] sm:text-[30px] md:text-[40px] md:font-bold text-[#050B7F] md:leading-[1.2]">
              <span className="md:hidden">Welcome to</span>
              <span className="hidden md:block">Welcome</span>
            </h2>
            <h3 className="text-[20px] sm:text-[25px] md:text-[30px] font-bold text-[#050B7F] md:opacity-50 leading-6 md:leading-[50px] whitespace-normal  lg:whitespace-nowrap">
              <span className="md:hidden">Bio well Pharmaceuticals</span>
              <span className="hidden md:block">to Bio well Pharmaceuticals</span>
            </h3>
            <p className="text-black mt-2 md:mt-4 text-[12px] sm:text-[16px] md:text-[20px] opacity-65 font-medium leading-4 sm:leading-6 md:leading-[30px] max-w-prose">
              We have been committed to improving global health through the development,
              manufacturing, and distribution of high-quality pharmaceutical products.
            </p>
          </div>
          <div className="mt-2 md:mt-4 hidden md:flex justify-center">
            <Image
                src={dna}
                alt="DNA Graphic"
                className="w-[300px] md:w-[423px] h-auto opacity-75 transition-opacity hover:opacity-100"
                priority
            />
          </div>
        </div>

        {/* Separator Line (visible only on mobile) */}
        <div className="w-full h-[5px] bg-[#0070C7] mt-[15px] md:hidden"></div>

        {/* Second Box */}
        <div className="bg-white mx-auto md:bg-[#B4BBFF] w-full max-w-[288px] sm:max-w-none h-auto pt-9 md:w-full md:h-full md:p-6 rounded-lg flex flex-col justify-between transform transition-transform hover:scale-[1.02] duration-300">
          <div className="text-center md:text-left">
            <h2 className="text-[20px] sm:text-[30px] md:text-[40px] font-bold text-[#050B7F]">Our Mission</h2>
            <p className="text-black mt-3.5 md:mt-4 text-[12px] sm:text-[16px] md:text-[20px] font-medium opacity-65 leading-[18px] sm:leading-6 md:leading-[30px] max-w-prose">
              Improve global health through cutting-edge research, manufacturing excellence,
              and a commitment to quality.
            </p>
          </div>
          <div className="mt-2 md:mt-4 hidden md:flex justify-center">
            <Image
                src={pill}
                alt="Pills Graphic"
                className="w-[200px] md:w-[309px] h-auto opacity-80 transition-opacity hover:opacity-100"
                priority
            />
          </div>
        </div>
        <div className="w-full h-[5px] bg-[#0070C7] mt-[15px] md:hidden"></div>
      </div>
  );
};

export default InfoSection;
