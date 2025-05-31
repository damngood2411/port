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
      <div className="absolute inset-0 flex items-end justify-start px-10 pb-10 z-10">
        <div className="text-left">
          {/* 名前・肩書き */}
          <h2 className="text-5xl font-extrabold tracking-wide text-white drop-shadow-md mb-2">
            森田 佳奈世
          </h2>
          <h3 className="text-2xl tracking-widest text-gray-200 uppercase drop-shadow mb-4">
            Kanayo Morita
          </h3>

          <div className="flex items-center text-white text-lg tracking-wide mb-6 drop-shadow">
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
              className="w-12 h-12 rounded-full bg-white/90 text-gray-700 flex items-center justify-center hover:bg-pink-500 transition-colors"
            >
              <Instagram size={24} />
            </a>
            <a
              href="https://youtube.com/@kanayomorita926"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-white/90 text-gray-700 flex items-center justify-center hover:bg-red-500 transition-colors"
            >
              <Youtube size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
