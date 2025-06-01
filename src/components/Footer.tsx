import React from 'react';
import { Instagram, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white/80 backdrop-blur text-slate-800 pt-12 pb-6">
      <div className="container mx-auto px-4 text-center">
        {/* Location & Accounts */}
        <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-40 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-2">Location</h3>
            <p className="text-gray-600">JAPAN</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Accounts</h3>
            <div className="flex justify-center space-x-4">
              <a
                href="https://www.instagram.com/kanayo_naka"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-slate-400 flex items-center justify-center hover:bg-slate-200 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://youtube.com/@kanayomorita926"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-slate-400 flex items-center justify-center hover:bg-slate-200 transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-slate-300">
          <p className="text-sm text-gray-500 mt-4">
            &copy; {new Date().getFullYear()} Kanayo Morita
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
