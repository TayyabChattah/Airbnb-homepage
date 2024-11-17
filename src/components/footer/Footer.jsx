import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 p-8 text-center border-t border-gray-300">
      <div className="flex justify-center gap-8 mb-4">
        <a href="#" className="text-gray-800 font-medium hover:text-pink-500">Support</a>
        <a href="#" className="text-gray-800 font-medium hover:text-pink-500">Community</a>
        <a href="#" className="text-gray-800 font-medium hover:text-pink-500">Hosting</a>
        <a href="#" className="text-gray-800 font-medium hover:text-pink-500">About</a>
      </div>
      <div className="text-gray-500 text-sm">&copy; 2024 Airbnb, Inc. All rights reserved.</div>
    </footer>
  );
};

export default Footer;
