import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-blue-400 shadow-md">
      <div className="flex justify-between items-center p-4 max-w-7xl mx-auto">
        <div className="flex items-center space-x-2">
          <span className="text-xl font-bold text-white">Sujal Desai</span>
        </div>
        <div className="md:hidden">
          <button
            className="text-black-200 focus:outline-none"
            onClick={toggleMenu}
          >
            {isOpen ? '✖' : '☰'}
          </button>
        </div>
        <nav
          className={`${
            isOpen ? 'block' : 'hidden'
          } absolute top-16 left-0 w-full bg-blue-400 p-4 md:static md:w-auto md:flex md:space-x-6 text-white`}
        >
          <a href="#" className="block py-2 px-4 hover:text-black">Home</a>
          <a href="#" className="block py-2 px-4 hover:text-black">About</a>
          <a href="#" className="block py-2 px-4 hover:text-black">Services</a>
          <a href="#" className="block py-2 px-4 hover:text-black">Projects</a>
          <a href="#" className="block py-2 px-4 hover:text-black">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
