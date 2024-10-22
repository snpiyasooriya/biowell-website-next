import React from 'react';
import Image from 'next/image';
import dna from '../public/img/dna.png';
import pill from '../public/img/opened_capsule.png';

const InfoSection = () => {
  return (
    <div className="max-w-[320px] md:max-w-[1196px] w-full mx-auto p-2 md:p-6 flex flex-col md:grid md:grid-cols-2 gap-2 md:gap-5 mb-8 md:mb-16 mt-4 md:mt-4">
      {/* First Box */}
      <div className="bg-white md:bg-[#B4BBFF] w-[288px] h-auto md:w-full md:h-full p-3 md:p-6 rounded-lg flex flex-col justify-between">
        <div className="text-center md:text-left">
        <h2 className="text-[18px] md:text-[40px] font-normal md:font-bold text-[#050B7F] leading-[1.5] md:leading-[1.2]">
            Welcome
          </h2>
          <h3 className="text-[18px] md:text-[30px] font-bold text-[#050B7F] mt-1 md:mt-2 leading-[1.5] md:leading-[1.2]">
            to Biowell Pharmaceuticals
          </h3>
          <p className="text-black mt-2 md:mt-4 text-[11px] md:text-[20px] font-medium md:font-normal">
            We have been committed to improving global health through the development, 
            manufacturing, and distribution of high-quality pharmaceutical products.
          </p>
        </div>
        <div className="mt-2 md:mt-4 hidden md:flex justify-center">
          <Image
            src={dna}
            alt="DNA Graphic"
            className="w-[300px] md:w-[423px] h-auto opacity-75"
          />
        </div>
      </div>

      {/* Separator Line (visible only on mobile) */}
      <div className="w-full h-[5px] bg-[#0070C7] my-2 md:hidden"></div>

      {/* Second Box */}
      <div className="bg-white md:bg-[#B4BBFF] w-[288px] h-auto md:w-full md:h-full p-3 md:p-6 rounded-lg flex flex-col justify-between">
        <div className="text-center md:text-left">
          <h2 className="text-[18px] md:text-3xl font-bold text-[#050B7F]">Our Mission</h2>
          <p className="text-black mt-2 md:mt-4 text-[11px] md:text-[20px] font-medium md:font-normal">
            Improve global health through cutting-edge research, manufacturing excellence, 
            and a commitment to quality.
          </p>
        </div>
        <div className="mt-2 md:mt-4 hidden md:flex justify-center">
          <Image
            src={pill}
            alt="Pills Graphic"
            className="w-[200px] md:w-[309px] h-auto opacity-80"
          />
        </div>
      </div>
      <div className="w-full h-[5px] bg-[#0070C7] my-2 md:hidden"></div>
    </div>
  );
};

export default InfoSection;