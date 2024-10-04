import React from 'react';
import Image from 'next/image';
import logofooter from '../public/logo.svg';

const Footer = () => {
  return (
    <footer className="bg-[#050B7F] text-white py-12 mt-16">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
        {/* Logo and Connection Section */}
        <div className="flex flex-col items-center md:items-start">
          <Image src={logofooter} alt="Logo" className="w-36 h-auto mb-4" />
          <h2 className="text-lg font-semibold">Stay Connected</h2>
          <p className="text-white mt-4 mb-6">
            Reach out to us for inquiries or further information.
          </p>
        </div>

        {/* Sitemap Section */}
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

        {/* Legal Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Legal</h3>
          <ul className="space-y-2 text-white">
            <li><a href="#" className="hover:text-white transition-colors">Legal Policies</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Privacy Policies</a></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact</h3>
          <p className="text-white mb-4">Biowell,</p>
          <p className="text-white mb-4">
            xxxxxxxxxxx,<br />
            xxxxxxxxxxxxxxxxxxx,<br />
            Sri Lanka.
          </p>
          <p className="text-white mb-2">Tel: +94 710 000 000</p>
          <p className="text-white mb-2">Email: Contact@biowell.com</p>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="mt-8 border-t border-white pt-4 text-center text-white text-sm">
        © 2024 Biowell. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
