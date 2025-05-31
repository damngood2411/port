import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

// Work item interface
interface WorkItem {
  id: number;
  title: string;
  artist?: string;
  type: 'MV' | 'LIVE' | 'COMMERCIAL' | 'FILM' | 'OTHER' | 'GAME';
  role: string;
  year: number;
  special?: string;
}

// Sample works data
const workItems: WorkItem[] = [
  {
    id: 1,
    title: "aaa",
    artist: "bbb",
    type: "MV",
    role: "Dir/Cam/Edit",
    year: 2023
  },
  {
    id: 2,
    title: "aaa",
    artist: "bbb",
    type: "OTHER",
    role: "Dir/Cam/Edit",
    year: 2023
  },
  {
    id: 3,
    title: "aaa",
    artist: "bbb",
    type: "MV",
    role: "Dir/Cam/Edit",
    year: 2022
  },
  {
    id: 4,
    title: "aaa",
    artist: "bbb",
    type: "MV",
    role: "Dir/Cam/Edit",
    year: 2022
  },
  {
    id: 5,
    title: "aaa",
    artist: "bbb",
    type: "MV",
    role: "DOP",
    year: 2022
  },
];

const Works: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedWorks = showAll ? workItems : workItems.slice(0, 6);

  const getBadgeColor = (type: WorkItem['type']) => {
    switch (type) {
      case 'MV':
        return 'bg-red-500';
      case 'LIVE':
        return 'bg-green-500';
      case 'COMMERCIAL':
        return 'bg-purple-500';
      case 'FILM':
        return 'bg-yellow-500';
      case 'GAME':
        return 'bg-blue-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <section id="works" className="py-20 bg-slate-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center relative">
          Works
          <span className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-16 h-1 bg-blue-500"></span>
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <ul className="space-y-4">
            {displayedWorks.map((work) => (
              <li 
                key={work.id} 
                className="bg-slate-700 rounded-md p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between"
              >
                <div className="flex items-start mb-3 sm:mb-0">
                  <span className={`${getBadgeColor(work.type)} text-xs font-bold px-2 py-1 rounded-md mr-4 min-w-[60px] text-center`}>
                    {work.type}
                  </span>
                  <div>
                    <h3 className="font-bold">
                      {work.artist && <span className="text-gray-300">{work.artist} 「</span>}
                      {work.title}
                      {work.artist && <span className="text-gray-300">」</span>}
                    </h3>
                    {work.special && (
                      <p className="text-sm text-gray-400">{work.special}</p>
                    )}
                  </div>
                </div>
                <span className="text-sm text-gray-300">{work.role}</span>
              </li>
            ))}
          </ul>
          
          {workItems.length > 6 && (
            <div className="mt-10 text-center">
              <button 
                onClick={() => setShowAll(!showAll)} 
                className="bg-slate-700 hover:bg-slate-600 text-white rounded-full px-6 py-2 flex items-center mx-auto transition-colors"
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
