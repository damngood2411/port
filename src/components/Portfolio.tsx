import React from 'react';

interface PortfolioItem {
  id: number;
  title: string;
  imageUrl: string;
  category: string;
  videoUrl?: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "HiTREX Interview",
    imageUrl: "https://img.youtube.com/vi/cMIE5r8WYgs/maxresdefault.jpg",
    category: "Interview",
    videoUrl: "https://youtu.be/cMIE5r8WYgs"
  },
  {
    id: 2,
    title: "狂音文奏楽「文豪メランコリー」PV",
    imageUrl: "https://img.youtube.com/vi/GVsFmb-nsqs/maxresdefault.jpg",
    category: "PV",
    videoUrl: "https://youtu.be/GVsFmb-nsqs"
  },
  {
    id: 3,
    title: "狂音文奏楽「文豪メランコリーRe.」PV",
    imageUrl: "https://img.youtube.com/vi/KCdq4Oc1Etk/maxresdefault.jpg",
    category: "PV",
    videoUrl: "https://youtu.be/KCdq4Oc1Etk"
  },
  {
    id: 4,
    title: "狂音文奏楽「文豪メランコリーRe.」本編予告",
    imageUrl: "https://img.youtube.com/vi/IigZEvv6fDQ/maxresdefault.jpg",
    category: "CM",
    videoUrl: "https://youtu.be/IigZEvv6fDQ"
  },
  {
    id: 5,
    title: "shoe shine",
    imageUrl: "https://img.youtube.com/vi/YhQSXRaEab4/maxresdefault.jpg",
    category: "PV",
    videoUrl: "https://youtu.be/YhQSXRaEab4"
  },
  {
    id: 6,
    title: "Forgot something",
    imageUrl: "https://img.youtube.com/vi/az_GeBchIoU/maxresdefault.jpg",
    category: "PV",
    videoUrl: "https://youtu.be/az_GeBchIoU"
  },
];

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-20 bg-sky-100 text-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10">
        <h2 className="text-3xl font-bold text-center mb-12">Portfolio</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-xl cursor-pointer transition-transform duration-300 hover:scale-[1.02] shadow-md bg-white"
            >
              <div className="aspect-video overflow-hidden rounded-t-xl">
                {item.videoUrl ? (
                  <a href={item.videoUrl} target="_blank" rel="noopener noreferrer">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </a>
                ) : (
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                )}
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <span className="text-sm text-blue-200">{item.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
