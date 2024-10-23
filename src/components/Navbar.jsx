"use client";
import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import Image from 'next/image';
import whtspplogo from '../public/img/whatsapplogo.svg';
import logo from '../public/img/logo_white.svg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    const section = document.querySelector(sectionId);
    if (section) {
      const offset = 82;
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  return (
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 
      ${scrolled ? 'bg-[#050B7F]/95 backdrop-blur-sm shadow-lg' : 'bg-[#050B7F]'}
      ${isOpen ? 'h-auto' : 'h-[82px]'}`}>

        <div className="container mx-auto px-4 sm:px-6 lg:px-[122px] py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex-shrink-0 cursor-pointer" onClick={(e) => handleNavClick(e, '#hero')}>
              <Image
                  src={logo}
                  alt="Logo"
                  width={150}
                  height={100}
                  className="w-[120px] sm:w-[150px]"
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-16">
              <ul className="flex space-x-12 text-white text-lg font-semibold">
                <li><a href="#hero" onClick={(e) => handleNavClick(e, '#hero')}
                       className="hover:text-blue-300 transition-colors">Home</a></li>
                <li><a href="#products" onClick={(e) => handleNavClick(e, '#products')}
                       className="hover:text-blue-300 transition-colors">Products</a></li>
                <li><a href="#testomonials" onClick={(e) => handleNavClick(e, '#testomonials')}
                       className="hover:text-blue-300 transition-colors">Stories</a></li>
                <li><a href="#about" onClick={(e) => handleNavClick(e, '#about')}
                       className="hover:text-blue-300 transition-colors">About</a></li>
              </ul>

              <div className="flex items-center text-[#75FF83] font-bold">
                <Image src={whtspplogo} alt="WhatsApp Logo" width={24} height={24} className="mr-2"/>
                <a href="#contact-us" onClick={(e) => handleNavClick(e, '#contact-us')} className="hover:text-blue-300 transition-colors">Contact Us</a>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
                onClick={toggleMenu}
                className="lg:hidden text-white p-2 rounded-md hover:bg-[#1a1f8f] transition-colors"
                aria-label="Toggle menu"
            >
              {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
            </button>
          </div>

          {/* Mobile Menu */}
          <div className={`lg:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
            <ul className="flex flex-col space-y-4 pt-4 pb-6 text-white">
              <li><a href="#hero" onClick={(e) => handleNavClick(e, '#hero')}
                     className="block py-2 text-center hover:bg-[#1a1f8f] transition-colors">Home</a></li>
              <li><a href="#products" onClick={(e) => handleNavClick(e, '#products')}
                     className="block py-2 text-center hover:bg-[#1a1f8f] transition-colors">Products</a></li>
              <li><a href="#testomonials" onClick={(e) => handleNavClick(e, '#testomonials')}
                     className="block py-2 text-center hover:bg-[#1a1f8f] transition-colors">Stories</a></li>
              <li><a href="#about" onClick={(e) => handleNavClick(e, '#about')}
                     className="block py-2 text-center hover:bg-[#1a1f8f] transition-colors">About</a></li>
              <li className="flex justify-center items-center py-2">
                <Image src={whtspplogo} alt="WhatsApp Logo" width={24} height={24} className="mr-2"/>
                <a href="#contact-us" onClick={(e) => handleNavClick(e, '#contact-us')} className="text-[#75FF83] hover:text-blue-300 transition-colors">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  );
};

export default Navbar;
