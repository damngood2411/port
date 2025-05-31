import React from 'react';
import { Instagram, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4 text-center">
        {/* 中央配置の情報セクション */}
        <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-20 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-2">Location</h3>
            <p className="text-gray-400">JAPAN</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Accounts</h3>
            <div className="flex justify-center space-x-4">
              <a
                href="https://www.instagram.com/kanayo_naka"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://youtube.com/@kanayomorita926"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* コピーライト（中央揃え） */}
        <div className="pt-6 border-t border-slate-800">
          <p className="text-sm text-gray-400 mt-4">
            Copyright © Kanayo Morita
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
