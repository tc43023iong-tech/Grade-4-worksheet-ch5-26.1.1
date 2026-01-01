import React from 'react';
import { VerbRow } from '../types';
import { Wand2, CheckCircle2 } from 'lucide-react';

interface Props {
  data: VerbRow[];
  onComplete: () => void;
}

const VerbTable: React.FC<Props> = ({ data, onComplete }) => {
  const headers = ['Base Form (原形)', 'Past Tense (過去式)', 'Past Participle (過去分詞)', 'Present Participle (現在分詞)'];

  return (
    <div className="w-full max-w-5xl mx-auto space-y-4 pb-8">
      {/* Introduction Card */}
      <div className="bg-white p-4 rounded-[1.5rem] shadow-lg border-b-[6px] border-pink-200 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300"></div>
        <h2 className="text-2xl md:text-3xl font-black text-gray-700 mb-1 flex items-center justify-center gap-2">
          <Wand2 className="text-pink-400 w-6 h-6 md:w-8 md:h-8" /> Verb Magic Table
        </h2>
        <p className="text-gray-500 font-bold text-lg">Read and remember the magic words! 讀一讀並記住這些魔法字！</p>
      </div>

      {/* The Table Grid */}
      <div className="bg-white rounded-[2rem] shadow-xl border-[4px] border-white overflow-hidden ring-4 ring-pink-100">
        {/* Header Row */}
        <div className="grid grid-cols-4 bg-pink-50 border-b-2 border-pink-100">
          {headers.map((h, i) => (
            <div key={i} className="p-3 text-center font-black text-pink-500 text-xs md:text-sm uppercase tracking-wider leading-tight">
              {h}
            </div>
          ))}
        </div>
        
        {/* Rows */}
        <div className="divide-y divide-gray-50">
          {data.map((row, idx) => (
            <div key={row.id} className={`grid grid-cols-4 items-stretch group hover:bg-pink-50/30 transition-colors ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}>
              
              <div className="p-2 md:p-3 flex items-center justify-center">
                 <div className="bg-white border border-gray-200 px-1 md:px-2 py-2 rounded-xl font-black text-gray-700 shadow-sm w-full text-center text-base md:text-lg leading-none">
                   {row.base}
                 </div>
              </div>

              <div className="p-2 md:p-3 flex items-center justify-center">
                 <div className="bg-pink-100 border border-pink-200 px-1 md:px-2 py-2 rounded-xl font-bold text-pink-700 shadow-sm w-full text-center text-base md:text-lg leading-none">
                   {row.past}
                 </div>
              </div>

              <div className="p-2 md:p-3 flex items-center justify-center">
                 <div className="bg-purple-100 border border-purple-200 px-1 md:px-2 py-2 rounded-xl font-bold text-purple-700 shadow-sm w-full text-center text-base md:text-lg leading-none">
                   {row.pastParticiple}
                 </div>
              </div>

              <div className="p-2 md:p-3 flex items-center justify-center">
                 <div className="bg-blue-100 border border-blue-200 px-1 md:px-2 py-2 rounded-xl font-bold text-blue-700 shadow-sm w-full text-center text-base md:text-lg leading-none">
                   {row.presentParticiple}
                 </div>
              </div>

            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center pt-4 pb-8">
        <button
          onClick={onComplete}
          className="bg-gradient-to-b from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 text-white font-black py-3 px-10 rounded-full shadow-xl border-b-[4px] border-green-700 active:border-b-0 active:translate-y-1 transition-all text-xl flex items-center gap-3 animate-bounce"
        >
          <CheckCircle2 className="w-8 h-8" />
          I've Learned It! 我學會了！
        </button>
      </div>
    </div>
  );
};

export default VerbTable;