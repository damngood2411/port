import React from 'react';

interface PortfolioItem {
  id: number;
  title: string;
  imageUrl: string;
  category: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Summer Memories",
    imageUrl: "https://images.pexels.com/photos/1209774/pexels-photo-1209774.jpeg",
    category: "MV"
  },
  {
    id: 2,
    title: "35",
    imageUrl: "https://images.pexels.com/photos/4566492/pexels-photo-4566492.jpeg",
    category: "MV"
  },
  {
    id: 3,
    title: "WHITE",
    imageUrl: "https://images.pexels.com/photos/6177645/pexels-photo-6177645.jpeg",
    category: "MV"
  },
  {
    id: 4,
    title: "CHEWING GUM",
    imageUrl: "https://images.pexels.com/photos/3250360/pexels-photo-3250360.jpeg",
    category: "MV"
  },
  {
    id: 5,
    title: "Tokyo Skyline",
    imageUrl: "https://images.pexels.com/photos/2614818/pexels-photo-2614818.jpeg",
    category: "COMMERCIAL"
  },
  {
    id: 6,
    title: "Recording Session",
    imageUrl: "https://images.pexels.com/photos/6326399/pexels-photo-6326399.jpeg",
    category: "MV"
  },
  {
    id: 7,
    title: "Bridge View",
    imageUrl: "https://images.pexels.com/photos/2531237/pexels-photo-2531237.jpeg",
    category: "FILM"
  },
  {
    id: 8,
    title: "Morning Light",
    imageUrl: "https://images.pexels.com/photos/5473177/pexels-photo-5473177.jpeg",
    category: "COMMERCIAL"
  },
  {
    id: 9,
    title: "Night Session",
    imageUrl: "https://images.pexels.com/photos/3783471/pexels-photo-3783471.jpeg",
    category: "LIVE"
  },
  {
    id: 10,
    title: "Studio Time",
    imageUrl: "https://images.pexels.com/photos/4988132/pexels-photo-4988132.jpeg",
    category: "MV"
  },
  {
    id: 11,
    title: "Concert",
    imageUrl: "https://images.pexels.com/photos/2263436/pexels-photo-2263436.jpeg",
    category: "LIVE"
  },
  {
    id: 12,
    title: "Science",
    imageUrl: "https://images.pexels.com/photos/3735709/pexels-photo-3735709.jpeg",
    category: "COMMERCIAL"
  },
];

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-20 bg-sky-50 text-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10">
        <h2 className="text-3xl font-bold text-center mb-12">Portfolio</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {portfolioItems.map((item) => (
            <PortfolioCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

const PortfolioCard: React.FC<{ item: PortfolioItem }> = ({ item }) => {
  return (
    <div className="group relative overflow-hidden rounded-xl cursor-pointer transition-transform duration-300 hover:scale-[1.02] shadow-md bg-white">
      <div className="aspect-video overflow-hidden rounded-t-xl">
        <img 
          src={item.imageUrl} 
          alt={item.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
        <h3 className="text-lg font-semibold text-white">{item.title}</h3>
        <span className="text-sm text-blue-200">{item.category}</span>
      </div>
    </div>
  );
};

export default Portfolio;
