import React from 'react';
import { Instagram, Twitter } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section 
      id="about" 
      className="relative pt-32 pb-20 bg-white"
    >
      <div className="container mx-auto px-4 flex flex-col items-center text-center">
        <div className="mb-6 relative">
          <div className="w-40 h-40 rounded-full overflow-hidden border-2 border-gray-300">
            <img 
              src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg" 
              alt="Kanayo Morita" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        <h2 className="text-3xl font-bold mb-1 tracking-wider text-gray-800">森田 佳奈世</h2>
        <h3 className="text-xl uppercase tracking-widest mb-2 text-gray-600">Kanayo Morita</h3>
        
        <div className="flex items-center justify-center text-gray-500 mb-6">
          <span>Videographer</span>
          <span className="mx-2">/</span>
          <span>Editor</span>
        </div>
        
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
