import React from 'react';
import { Instagram, Twitter } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section
      id="about"
      className="relative w-full h-screen bg-white flex flex-col md:flex-row items-center justify-center px-6"
    >
      {/* 吹き出し */}
      <div className="md:w-1/2 flex justify-center items-center p-6">
        <div className="relative bg-white shadow-xl rounded-[60%/30%] px-8 py-6 text-gray-700 text-base leading-relaxed max-w-md">
          <p>
            つくるものを通して人と人がつながり<br />
            新しい価値が生まれ、気持ちや想いが届く。<br />
            そんなお手伝いができればと考えています。
          </p>
          <div className="absolute right-[-20px] top-1/2 -translate-y-1/2 w-6 h-6 bg-white rotate-45 shadow-md" />
        </div>
      </div>

      {/* プロフィール画像（右側） */}
      <div className="md:w-1/2 h-[400px] md:h-full bg-cover bg-center"
        style={{ backgroundImage: "url('/IMG_0420.JPG')" }}
      >
        {/* スマホ用縦表示では少し高さを補正 */}
        <div className="h-full w-full hidden md:block" />
      </div>

      {/* 中央下に名前・職業・SNS */}
      <div className="absolute bottom-10 w-full text-center px-4 z-10">
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
    </section>
  );
};

export default Hero;
