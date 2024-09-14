'use client';
import React, { useState } from 'react';
import { FcBusinessContact } from 'react-icons/fc';
import { FiMenu, FiX } from 'react-icons/fi'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="text-white font-bold text-2xl">
          LOGO
        </div>

        {/*  Menu Icon for Mobile */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white">
            {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>

        {/* Nav Links for larger screens (Hidden on mobile) */}
        <ul className="hidden md:flex space-x-8 text-white">
          <li>
            <a href="#science" className="hover:text-blue-200">
              Science
            </a>
          </li>
          <li>
            <a href="#products" className="hover:text-blue-200">
              Products
            </a>
          </li>
          <li>
            <a href="#stories" className="hover:text-blue-200">
              Stories
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-blue-200">
              About
            </a>
          </li>
        </ul>

        {/* Contact Us with Icon */}
        <li className="hidden md:flex items-center text-white">
          <FcBusinessContact className="mr-2" size={24} />
          <a href="#contact" className="hover:text-blue-200">
            Contact Us
          </a>
        </li>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <ul className="space-y-4 text-white text-center bg-blue-700 py-4">
            <li>
              <a href="#science" className="block hover:text-blue-200">
                Science
              </a>
            </li>
            <li>
              <a href="#products" className="block hover:text-blue-200">
                Products
              </a>
            </li>
            <li>
              <a href="#stories" className="block hover:text-blue-200">
                Stories
              </a>
            </li>
            <li>
              <a href="#about" className="block hover:text-blue-200">
                About
              </a>
            </li>
            <li className="flex justify-center items-center">
              <FcBusinessContact className="mr-2" size={24} />
              <a href="#contact" className="hover:text-blue-200">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
