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
    imageUrl: "/HiTREX.png",
    category: "Interview",
    videoUrl: "https://youtu.be/cMIE5r8WYgs"
  },
  {
    id: 2,
    title: "狂音文奏楽「文豪メランコリー」PV",
    imageUrl: "/文豪メランコリーpv.png",
    category: "PV",
    videoUrl: "https://youtu.be/GVsFmb-nsqs"
  },
  {
    id: 3,
    title: "狂音文奏楽「文豪メランコリーRe.」PV",
    imageUrl: "/文豪メランコリーRe PV.png",
    category: "PV",
    videoUrl: "https://youtu.be/KCdq4Oc1Etk"
  },
  {
    id: 4,
    title: "狂音文奏楽「文豪メランコリーRe.」本編予告",
    imageUrl: "/文豪メランコリー予告.png",
    category: "CM",
    videoUrl: "https://youtu.be/IigZEvv6fDQ"
  },
  {
    id: 5,
    title: "shoe shine",
    imageUrl: "/Shoeshine.png",
    category: "PV",
    videoUrl: "https://youtu.be/YhQSXRaEab4"
  },
  {
    id: 6,
    title: "Forgot something",
    imageUrl: "/forgot something.png",
    category: "PV",
    videoUrl: "https://youtu.be/az_GeBchIoU"
  }
];

const Portfolio: React.FC = () => {
  return (
    <section
      id="portfolio"
      className="relative min-h-screen py-20 text-gray-900 overflow-hidden"
    >
      {/* 背景画像 */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <img
          src="/shooting-scene.JPG"
          alt="Background"
          className="w-full h-full object-cover scale-125 filter grayscale brightness-50 blur-sm"
        />
      </div>

      {/* 白い丸い枠でコンテンツを囲む */}
      <div className="relative z-10 flex justify-center px-4">
        <div className="bg-white/10 backdrop-blur-md rounded-3xl shadow-xl p-8 w-full max-w-7xl">
          <div className="container mx-auto px-4 sm:px-6 lg:px-10">
            <h2 className="text-3xl font-bold text-white drop-shadow-lg text-center mb-12">
              Portfolio
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {portfolioItems.map((item) => {
                const Card = (
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

                return item.videoUrl ? (
                  <a
                    key={item.id}
                    href={item.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    {Card}
                  </a>
                ) : (
                  <div key={item.id}>{Card}</div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

