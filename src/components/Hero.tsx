import React from 'react';
import { Instagram, Twitter } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section
      id="about"
      className="relative w-full h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg')",
      }}
    >
      {/* オーバーレイ */}
      <div className="absolute inset-0 bg-white/40 backdrop-blur-sm" />

      {/* コンテンツ中央配置 */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
        {/* 吹き出し */}
        <div className="relative bg-white rounded-[60%/30%] px-8 py-6 text-gray-700 max-w-lg shadow-xl">
          <p className="leading-relaxed text-[16px] sm:text-[17px]">
            つくるものを通して人と人がつながり<br />
            新しい価値が生まれ、気持ちや想いが届く。<br />
            そんなお手伝いができればと考えています。
          </p>
          {/* 吹き出しのテール */}
          <div className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 w-6 h-6 bg-white rotate-45 shadow-md" />
        </div>

        {/* 名前・肩書 */}
        <div className="mt-10">
          <h2 className="text-3xl font-bold mb-1 tracking-wider text-gray-800">森田 佳奈世</h2>
          <h3 className="text-xl uppercase tracking-widest mb-2 text-gray-600">Kanayo Morita</h3>

          <div className="flex items-center justify-center text-gray-500 mb-6">
            <span>Videographer</span>
            <span className="mx-2">/</span>
            <span>Editor</span>
          </div>

          <div className="flex justify-center space-x-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-gray-200 text-gray-700 flex items-center justify-center hover:bg-blue-400 transition-colors"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-gray-200 text-gray-700 flex items-center justify-center hover:bg-blue-400 transition-colors"
            >
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
