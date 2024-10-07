"use client";
import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi'; 
import Image from 'next/image';
import whtspplogo from '../public/whatsapp.png';
import logo from '../public/logo1.svg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#050B7F] p-4 relative z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="text-white font-bold text-2xl">
          <Image src={logo} alt="Logo" width={150} height={100} />
        </div>

        {/* Menu Icon for Mobile */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>

        {/* Nav Links for larger screens (Hidden on mobile) */}
        <ul className="hidden md:flex space-x-8 text-white text-[20px]">
          <li><a href="#science" className="hover:text-blue-300">Science</a></li>
          <li><a href="#products" className="hover:text-blue-300">Products</a></li>
          <li><a href="#stories" className="hover:text-blue-300">Stories</a></li>
          <li><a href="#about" className="hover:text-blue-300">About</a></li>
        </ul>

        {/* Contact Us with Icon */}
        <div className="hidden md:flex items-center text-[#75FF83]">
          <Image 
            src={whtspplogo} 
            alt="WhatsApp Logo" 
            className="mr-2"
            width={24} 
            height={24} 
          />
          <a href="/contact" className="hover:text-blue-300 text-[20px]">Contact Us</a>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="block md:hidden w-full bg-[#050B7F] transition-all duration-300 ease-in-out z-50 ">
          <ul className="flex flex-col items-center space-y-4 text-white text-center py-6">
            <li><a href="#science" className="block text-lg hover:text-blue-300">Science</a></li>
            <li><a href="#products" className="block text-lg hover:text-blue-300">Products</a></li>
            <li><a href="#stories" className="block text-lg hover:text-blue-300">Stories</a></li>
            <li><a href="#about" className="block text-lg hover:text-blue-300">About</a></li>
            <li className="flex justify-center items-center">
              <Image src={whtspplogo} alt="WhatsApp Logo" className="mr-2" width={24} height={24} />
              <a href="/contact" className="text-[#75FF83] hover:text-blue-300 text-lg py-2">Contact Us</a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
