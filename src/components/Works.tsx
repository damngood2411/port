import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface WorkItem {
  id: number;
  title: string;
  role: string;
  year: number;
  special?: string;
}

const workItems: WorkItem[] = [
  {
    id: 1,
    title: "ミュージカル『青春-AOHARU-鉄道』",
    role: "Interview Edit",
    year: 2024
  },
  {
    id: 2,
    title: "大手ライブコマース",
    role: "Cam",
    year: 2024
  },
  {
    id: 3,
    title: "大手アイドルグループMV・LIVE",
    role: "BtsCam",
    year: 2024
  },
  {
    id: 4,
    title: "アイスホッケーライブ配信",
    role: "Cam",
    year: 2022
  },
  {
    id: 5,
    title: "RYUCHELL「Never say Never again」MV",
    role: "Dir",
    year: 2022,
    special: "https://prtimes.jp/main/html/rd/p/000000001.000115066.html"
  }
];

const Works: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedWorks = showAll ? workItems : workItems.slice(0, 6);

  return (
    <section id="works" className="py-20 bg-blue-100 text-slate-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center relative">
          Works
          <span className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-16 h-1 bg-blue-400"></span>
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <ul className="space-y-4">
            {displayedWorks.map((work) => (
              <li 
                key={work.id}
                className="bg-white rounded-lg shadow-md p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between"
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                  <h3 className="font-semibold text-gray-800">{work.title}</h3>
                  {work.special && (
                    <a
                      href={work.special}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-blue-500 underline break-all"
                    >
                      Link
                    </a>
                  )}
                </div>
                <span className="text-sm text-gray-600">
                  {work.id === 2 || work.id === 3 ? `${work.year}〜` : work.year}
                </span>
                <span className="text-sm text-gray-600">{work.role}</span>
              </li>
            ))}
          </ul>

          {workItems.length > 6 && (
            <div className="mt-10 text-center">
              <button 
                onClick={() => setShowAll(!showAll)} 
                className="bg-blue-100 hover:bg-blue-200 text-blue-700 font-medium rounded-full px-6 py-2 flex items-center mx-auto transition-colors"
              >
                {showAll ? 'Show Less' : 'もっと見る'}
                <ChevronDown className={`ml-2 transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`} size={16} />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Works;
