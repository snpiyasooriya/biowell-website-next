import React from 'react';
import Image from 'next/image';
import logo from '../public/img/logo_white.svg';

const Footer = () => {
  return (
    <footer className="bg-[#3E3E3E] md:bg-[#050b7f] text-white py-12 mt-16">
      <div className="container mx-auto px-6">
        {/* Mobile view (320px) */}
        <div className="md:hidden flex flex-col items-center bg-[#3E3E3E]">
          <Image src={logo} alt="Logo" className="w-36 h-auto mb-8" />
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">Sitemap</h3>
            <ul className="space-y-2 text-white">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Offerings</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Perspectives</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Desktop view */}
        <div className="hidden md:grid md:grid-cols-4 gap-8 text-left">
          {/* Logo and connection section */}
          <div className="flex flex-col items-start">
            <Image src={logo} alt="Logo" className="w-36 h-auto mb-4" />
            <h2 className="text-2xl font-semibold">Stay Connected</h2>
            <p className="text-white mt-4 mb-6 text-base">
              For further inquiries or detailed  <br />information,
              our team is available <br /> to assist you. 
              Reach out via <br />our provided contact details.
            </p>
          </div>

          {/* Sitemap section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Sitemap</h3>
            <ul className="space-y-2 text-white">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Offerings</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Perspectives</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Legal section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-white">
              <li><a href="#" className="hover:text-white transition-colors">Legal Policies</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policies</a></li>
            </ul>
          </div>

          {/* Contact information */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <p className="text-white mb-4">Biowell,</p>
            <p className="text-white mb-4">
              XXXXXXXXXXX,<br />
              XXXXXXXXXXXXXXXXXXX,<br />
              Sri Lanka.
            </p>
            <p className="text-white mb-2">Tel: +94 710 000 000</p>
            <p className="text-white mb-2">Email: contact@biowell.com</p>
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="hidden md:block mt-8 border-t border-white pt-4 text-center text-white text-sm">
        © 2024 Biowell. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
