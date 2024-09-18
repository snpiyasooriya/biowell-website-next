import React from 'react';
import Image from 'next/image';
import dna from '../public/dna.png';
import pill from '../public/pill.png';

const InfoSection = () => {
  return (
    <div className="max-w-[1196px] w-full h-auto mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-10 mb-16 mt-4"> 
      {/* First Box */}
      <div className="bg-customBlue w-full h-full p-6 rounded-lg  flex flex-col justify-between">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900">Welcome</h2>
          <h3 className="text-xl md:text-2xl text-blue-600 mt-2">to Biowell Pharmaceuticals</h3>
          <p className="text-gray-700 mt-4">
            We have been committed to improving global health through the development, 
            manufacturing, and distribution of high-quality pharmaceutical products.
          </p>
        </div>
        <div className="mt-8 flex justify-center">
          <Image
            src={dna}
            alt="DNA Graphic"
            className="w-[300px] md:w-[423px] h-auto opacity-75"
          />
        </div>
      </div>

      {/* Second Box */}
      <div className="bg-customBlue w-full h-full p-6 rounded-lg  flex flex-col justify-between">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900">Our Mission</h2>
          <p className="text-gray-700 mt-4">
            Improve global health through cutting-edge research, manufacturing excellence, 
            and a commitment to quality.
          </p>
        </div>
        <div className="mt-8 flex justify-center">
          <Image
            src={pill}
            alt="Pills Graphic"
            className="w-[200px] md:w-[309px] h-auto opacity-80"
          />
        </div>
      </div>
      
    </div>
  );
};

export default InfoSection;
