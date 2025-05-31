import React from 'react';
import { Instagram, Youtube } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section
      id="about"
      className="relative w-full h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/IMG_0420.JPG')",
      }}
    >
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center bg-black/30">
        {/* 名前・肩書き */}
        <h2 className="text-3xl font-bold mb-1 tracking-wider text-white drop-shadow">森田 佳奈世</h2>
        <h3 className="text-xl uppercase tracking-widest mb-2 text-gray-200 drop-shadow">Kanayo Morita</h3>

        <div className="flex items-center justify-center text-gray-200 mb-6 drop-shadow">
          <span>Director</span>
          <span className="mx-2">/</span>
          <span>Cameraman</span>
          <span className="mx-2">/</span>
          <span>Editor</span>
        </div>

        {/* SNSリンク */}
        <div className="flex space-x-4">
          <a
            href="https://www.instagram.com/kanayo_naka"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-white/80 text-gray-700 flex items-center justify-center hover:bg-pink-500 transition-colors"
          >
            <Instagram size={20} />
          </a>
          <a
            href="https://youtube.com/@kanayomorita"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-white/80 text-gray-700 flex items-center justify-center hover:bg-red-500 transition-colors"
          >
            <Youtube size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
