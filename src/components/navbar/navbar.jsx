import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow-md">
      <div className="flex items-center space-x-8">
        <img src="/logo/long-logo.png" alt="Logo" className="w-24" />
        <div className="flex space-x-4">
          <a href="#" className="text-gray-800 font-medium hover:text-pink-500">Home</a>
          <a href="#" className="text-gray-800 font-medium hover:text-pink-500">Experiences</a>
          <a href="#" className="text-gray-800 font-medium hover:text-pink-500">Online Experiences</a>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <button className="text-gray-800 font-medium">Login</button>
        <button className="text-gray-800 font-medium">Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;
