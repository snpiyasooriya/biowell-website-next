import React from 'react';
import Image from 'next/image';
import group from '../public/img/mesh.svg'
import logo1 from '../public/img/logo.svg'

const AboutSection = () => {
    return (
        <section
            className="relative w-full mt-10 sm:mt-16 bg-transparent md:bg-custom-radial min-h-[400px] md:h-[500px] lg:h-[600px] flex flex-col items-center justify-center"
            aria-label="About Biowell Pharmaceutical"
        >
            <div className="relative md:absolute z-10 flex flex-col items-center justify-center h-full text-center px-4 sm:px-6 lg:px-8 max-w-[288px] sm:max-w-[500px] md:max-w-[710px]">
                <Image
                    src={logo1}
                    alt="Biowell Pharmaceutical Logo"
                    className="w-[200px] h-[74px] sm:w-[280px] sm:h-[104px] md:w-[340px] md:h-[126px] transition-all duration-300"
                    width={340}
                    height={126}
                    priority
                />

                <div className='font-medium pt-5 sm:pt-8'>
                    <p className="text-[12px] sm:text-[16px] md:text-[20px] text-[#808080] leading-[18px] sm:leading-[24px] md:leading-[30px] max-w-prose">
                        Founded in [Year], Biowell pharmaceutical (Pvt) Ltd. has grown from a small startup to a global
                        leader in pharmaceutical manufacturing and trading. Our journey is marked by innovation, quality,
                        and dedication to improving lives.
                    </p>
                </div>

                <a
                    href="#"
                    className="hidden sm:flex bg-navcolor text-white font-bold text-sm md:text-lg px-4 py-2 md:px-6 md:py-3 rounded-[5px] mt-8 md:mt-10 hover:bg-white hover:text-navcolor transition-all duration-300 w-[180px] sm:w-[200px] h-[45px] sm:h-[50px] items-center justify-center"
                >
                    Learn More
                </a>
            </div>

            <div className="absolute inset-0 hidden md:flex flex-col items-center justify-center overflow-hidden">
                <Image
                    src={group}
                    alt="Biowell Pharmaceutical company background"
                    width={1188}
                    height={500}
                    className="z-0 w-full h-full object-cover"
                    priority
                />
            </div>
        </section>
    );
};

export default AboutSection;
