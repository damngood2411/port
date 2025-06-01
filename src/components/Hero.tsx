import React from 'react';
import { Instagram, Youtube } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section
      id="about"
      className="relative w-full h-screen overflow-hidden"
    >
      {/* 背景画像（ぼかし付き） */}
      <div
        className="absolute inset-0 bg-cover bg-center blur-sm scale-105"
        style={{
          backgroundImage: "url('/IMG_0420.JPG')",
        }}
      />
      {/* 黒のオーバーレイ */}
      <div className="absolute inset-0 bg-black/40 z-0" />

      {/* コンテンツ */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
        <h2 className="text-4xl font-extrabold text-white drop-shadow mb-2">
          森田 佳奈世
        </h2>
        <h3 className="text-xl uppercase text-gray-200 tracking-wider drop-shadow mb-4">
          Kanayo Morita
        </h3>
        <div className="text-lg text-white font-semibold tracking-wide mb-8 drop-shadow">
          Director / Cameraman / Editor
        </div>
        <div className="flex space-x-6">
          <a
            href="https://www.instagram.com/kanayo_naka"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 rounded-full bg-white/90 text-gray-700 flex items-center justify-center hover:bg-pink-500 transition-colors"
          >
            <Instagram size={28} />
          </a>
          <a
            href="https://youtube.com/@kanayomorita926"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 rounded-full bg-white/90 text-gray-700 flex items-center justify-center hover:bg-red-500 transition-colors"
          >
            <Youtube size={28} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
