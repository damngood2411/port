import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-900/95 shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold tracking-widest">
          <a href="#" className="hover:text-blue-400 transition-colors">
            KANAYO MORITA
          </a>
        </h1>
        
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li>
              <a 
                href="#about" 
                className="tracking-wide hover:text-blue-400 transition-colors"
              >
                ABOUT
              </a>
            </li>
            <li>
              <a 
                href="#portfolio" 
                className="tracking-wide hover:text-blue-400 transition-colors"
              >
                PORTFOLIO
              </a>
            </li>
            <li>
              <a 
                href="#works" 
                className="tracking-wide hover:text-blue-400 transition-colors"
              >
                WORKS
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                className="tracking-wide hover:text-blue-400 transition-colors"
              >
                CONTACT
              </a>
            </li>
          </ul>
        </nav>
        
        <button className="md:hidden text-white">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            className="w-6 h-6"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M4 6h16M4 12h16M4 18h16" 
            />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
