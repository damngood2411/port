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
      {/* 背景ブラーオーバーレイ */}
      <div className="absolute inset-0 bg-white/30 backdrop-blur-sm" />

      {/* 吹き出し & 情報 */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
        {/* SVG吹き出し */}
        <svg
          viewBox="0 0 400 200"
          className="w-[320px] h-auto mb-8 drop-shadow-xl"
        >
          <path
            d="M20,50 Q10,100 20,150 Q200,220 380,150 Q390,100 380,50 Q200,10 20,50 Z"
            fill="#ffffff"
          />
          <foreignObject x="30" y="40" width="340" height="120">
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              className="text-gray-700 text-[15px] leading-relaxed p-2 text-center"
            >
              <p>
                つくるものを通して人と人がつながり<br />
                新しい価値が生まれ、気持ちや想いが届く。<br />
                そんなお手伝いができればと考えています。
              </p>
            </div>
          </foreignObject>
        </svg>

        {/* 名前・肩書 */}
        <h2 className="text-3xl font-bold mb-1 tracking-wider text-gray-800">
          森田 佳奈世
        </h2>
        <h3 className="text-xl uppercase tracking-widest mb-2 text-gray-600">
          Kanayo Morita
        </h3>

        <div className="flex items-center justify-center text-gray-500 mb-6">
          <span>Videographer</span>
          <span className="mx-2">/</span>
          <span>Editor</span>
        </div>

        {/* SNSリンク */}
        <div className="flex space-x-4">
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
    </section>
  );
};

export default Hero;
