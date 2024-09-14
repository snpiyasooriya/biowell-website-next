import React from 'react';

const Footer = () => {
  return (
    <footer className="relative overflow-hidden w-full bg-gradient-to-l from-blue-700 to-blue-900 text-white py-12 mt-16">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
        {/* Logo and Connection Section */}
        <div className="flex flex-col items-center md:items-start">
          <h1 className="text-4xl font-bold mb-4">LOGO</h1>
          <h2 className="text-2xl font-semibold">Stay Connected</h2>
          <p className="text-gray-200 mt-4 mb-8">
            For further inquiries or detailed information, our team is available to assist you.
            Reach out via our provided contact details.
          </p>
        </div>

        {/* Sitemap Section */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-2xl font-semibold mb-4">Sitemap</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-200 hover:text-white">Home</a></li>
            <li><a href="#" className="text-gray-200 hover:text-white">About</a></li>
            <li><a href="#" className="text-gray-200 hover:text-white">Offerings</a></li>
            <li><a href="#" className="text-gray-200 hover:text-white">Perspectives</a></li>
            <li><a href="#" className="text-gray-200 hover:text-white">Portfolio</a></li>
            <li><a href="#" className="text-gray-200 hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Legal Section */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-2xl font-semibold mb-4">Legal</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-200 hover:text-white">Legal Policies</a></li>
            <li><a href="#" className="text-gray-200 hover:text-white">Terms of Service</a></li>
            <li><a href="#" className="text-gray-200 hover:text-white">Privacy Policies</a></li>
          </ul>
        </div>

        {/* Stay Connected Section */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-2xl font-semibold mb-4">Stay Connected</h3>
          <p className="text-gray-200 mb-2">Biowell,</p>
          <p className="text-gray-200 mb-4">
            xxxxxxxxxxx,<br />
            xxxxxxxxxxxxxxxxxxx,<br />
            Sri Lanka.
          </p>
          <p className="text-gray-200 mb-2">Tel: +94 710 000 000</p>
          <p className="text-gray-200 mb-2">Tel: +94 710 000 000</p>
          <p className="text-gray-200">E-mail: Contact@biowell.com</p>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-gray-400 mt-5 pt-2 text-center text-gray-200 text-sm">
        © 2024 All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
