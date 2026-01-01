import React from 'react';
import { Trophy, ChevronLeft, Home } from 'lucide-react';

export const Header: React.FC<{ 
  title: string; 
  titleCn: string; 
  onBack: () => void 
}> = ({ title, titleCn, onBack }) => (
  <div className="p-2 pt-2 sticky top-0 z-20">
    <div className="max-w-4xl mx-auto flex items-center justify-between">
      <button 
        onClick={onBack} 
        className="bg-white p-2 rounded-xl shadow-md border-b-2 border-gray-200 text-gray-500 hover:bg-gray-50 hover:scale-105 transition-all active:scale-95 active:border-b-0 active:translate-y-1"
      >
        <Home className="w-6 h-6" />
      </button>
      
      <div className="text-center bg-white/90 backdrop-blur-md px-6 py-2 rounded-2xl shadow-sm border border-white/50">
        <h1 className="text-xl font-black text-gray-800 leading-none mb-0.5">{title}</h1>
        <p className="text-sm text-gray-500 font-bold tracking-wider leading-none">{titleCn}</p>
      </div>

      <div className="w-12"></div> {/* Spacer to center title */}
    </div>
  </div>
);

export const LevelCard: React.FC<{ 
  id: string; 
  title: string; 
  titleCn: string;
  theme: string;
  completed: boolean; 
  onClick: () => void 
}> = ({ id, title, titleCn, theme, completed, onClick }) => {
  const bgColors: Record<string, string> = {
    pink: 'bg-pink-50 border-pink-100 hover:border-pink-300',
    blue: 'bg-sky-50 border-sky-100 hover:border-sky-300',
    yellow: 'bg-yellow-50 border-yellow-100 hover:border-yellow-300',
    green: 'bg-green-50 border-green-100 hover:border-green-300',
    purple: 'bg-purple-50 border-purple-100 hover:border-purple-300',
  };

  const textColors: Record<string, string> = {
    pink: 'text-pink-500',
    blue: 'text-sky-500',
    yellow: 'text-yellow-500',
    green: 'text-green-500',
    purple: 'text-purple-500',
  };

  return (
    <button
      onClick={onClick}
      className={`
        relative w-full p-5 rounded-[2rem] text-left transition-all duration-300 transform
        border-[4px] hover:-translate-y-1 hover:shadow-xl active:translate-y-0 active:shadow-sm
        ${bgColors[theme] || 'bg-white border-gray-100'}
        ${completed ? 'opacity-80' : 'opacity-100'}
      `}
    >
      <div className="flex justify-between items-start">
        <div>
          <span className={`text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full bg-white shadow-sm ${textColors[theme]}`}>
            Level {id}
          </span>
          <h3 className="text-2xl font-black text-gray-800 mt-2 leading-none tracking-tight">{title}</h3>
          <p className="text-base text-gray-500 font-bold mt-1 leading-tight">{titleCn}</p>
        </div>
        <div className={`
          p-3 rounded-full bg-white shadow-sm transform rotate-12
          ${completed ? 'text-yellow-400' : 'text-gray-200'}
        `}>
          <Trophy className="w-8 h-8 fill-current" />
        </div>
      </div>
    </button>
  );
};