import React, { useState } from 'react';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white text-slate-900 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold tracking-widest">
          <a href="#">KANAYO MORITA</a>
        </h1>

        {/* Desktop nav */}
        <nav className="hidden md:flex space-x-8">
          <a href="#about" className="hover:text-blue-500 transition-colors">ABOUT</a>
          <a href="#portfolio" className="hover:text-blue-500 transition-colors">PORTFOLIO</a>
          <a href="#works" className="hover:text-blue-500 transition-colors">WORKS</a>
          <a href="#contact" className="hover:text-blue-500 transition-colors">CONTACT</a>
        </nav>

        {/* Hamburger button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden focus:outline-none"
          aria-label="Toggle Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden bg-white transition-all duration-300 ease-in-out ${
          menuOpen ? 'max-h-60' : 'max-h-0 overflow-hidden'
        }`}
      >
        <div className="flex flex-col px-6 py-4 space-y-4">
          <a href="#about" className="hover:text-blue-500">ABOUT</a>
          <a href="#portfolio" className="hover:text-blue-500">PORTFOLIO</a>
          <a href="#works" className="hover:text-blue-500">WORKS</a>
          <a href="#contact" className="hover:text-blue-500">CONTACT</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
