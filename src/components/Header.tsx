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
        isScrolled ? 'bg-white shadow-md' : 'bg-white/90'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold tracking-widest text-gray-800">
          <a href="#" className="hover:text-blue-400 transition-colors">
            KANAYO MORITA
          </a>
        </h1>

        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {['about', 'portfolio', 'works', 'contact'].map((item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  className="tracking-wide text-gray-600 hover:text-blue-500 transition-colors"
                >
                  {item.toUpperCase()}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button className="md:hidden text-gray-700">
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
