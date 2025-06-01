import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenuToggle = () => setMenuOpen((prev) => !prev);
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 shadow-md' : 'bg-white/80'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center">
        <h1 className="text-xl font-bold tracking-widest text-slate-900">
          <a href="#">KANAYO MORITA</a>
        </h1>

        {/* ハンバーガー：モバイル時右寄せ */}
        <button
          className="md:hidden ml-auto text-slate-800 focus:outline-none"
          onClick={handleMenuToggle}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        <nav className="hidden md:block ml-auto">
          <ul className="flex space-x-8 text-slate-800 font-medium">
            <li><a href="#about" className="hover:text-blue-500">ABOUT</a></li>
            <li><a href="#portfolio" className="hover:text-blue-500">PORTFOLIO</a></li>
            <li><a href="#works" className="hover:text-blue-500">WORKS</a></li>
            <li><a href="#contact" className="hover:text-blue-500">CONTACT</a></li>
          </ul>
        </nav>
      </div>

      {/* モバイルメニュー */}
      <div
        className={`md:hidden bg-white transition-all duration-300 ease-in-out overflow-hidden ${
          menuOpen ? 'max-h-60' : 'max-h-0'
        }`}
      >
        <div className="flex flex-col px-6 py-4 space-y-4 text-slate-800 font-medium">
          <a href="#about" onClick={handleLinkClick} className="hover:text-blue-500">ABOUT</a>
          <a href="#portfolio" onClick={handleLinkClick} className="hover:text-blue-500">PORTFOLIO</a>
          <a href="#works" onClick={handleLinkClick} className="hover:text-blue-500">WORKS</a>
          <a href="#contact" onClick={handleLinkClick} className="hover:text-blue-500">CONTACT</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
