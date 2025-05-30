import React from 'react';
import { Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Location</h3>
            <p className="text-gray-400">JAPAN</p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <h3 className="text-lg font-semibold mb-2">Accounts</h3>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-6 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Kubota Takaomi
          </p>
          
          <a 
            href="#" 
            className="text-sm text-gray-400 hover:text-white transition-colors"
          >
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;