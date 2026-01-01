import React, { useState } from 'react';
import { SECTIONS } from './data';
import QuizGame from './components/QuizGame';
import VerbTable from './components/VerbTable';
import { Header, LevelCard } from './components/GameUI';

export default function App() {
  const [activeSectionId, setActiveSectionId] = useState<string | null>(null);
  const [completedSections, setCompletedSections] = useState<string[]>([]);

  const activeSection = SECTIONS.find(s => s.id === activeSectionId);

  const handleSectionComplete = () => {
    if (activeSectionId && !completedSections.includes(activeSectionId)) {
      setCompletedSections(prev => [...prev, activeSectionId]);
    }
    setActiveSectionId(null);
  };

  // Main Menu View
  if (!activeSection) {
    const progress = (completedSections.length / SECTIONS.length) * 100;
    
    return (
      <div className="min-h-screen bg-[#fff9f0] p-4 font-comic relative overflow-hidden">
        {/* Cute Background Pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'radial-gradient(#FFB7B2 2px, transparent 2px)',
          backgroundSize: '30px 30px'
        }}></div>

        {/* Floating blobs */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-bounce delay-700"></div>
        <div className="absolute top-40 right-20 w-40 h-40 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-bounce delay-100"></div>
        <div className="absolute bottom-20 left-1/3 w-48 h-48 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-bounce delay-1000"></div>

        <div className="max-w-5xl mx-auto relative z-10">
          <header className="text-center mb-6 pt-4">
            <div className="inline-block bg-white px-6 py-2 rounded-full text-base font-bold text-gray-500 shadow-sm mb-3 border-2 border-gray-100 transform rotate-[-2deg]">
              Grade 4 English • 小四英文 📚
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-gray-800 mb-3 tracking-tight drop-shadow-sm leading-none">
              English Fun <span className="text-white bg-gradient-to-r from-pink-400 to-purple-400 px-4 rounded-[1.5rem] transform inline-block rotate-3 shadow-lg py-1">Quest</span>
            </h1>
            <p className="text-xl text-gray-500 font-bold tracking-wide">Let's Play & Learn! 一起來玩遊戲學英文！ 🚀</p>
            
            <div className="mt-6 bg-white rounded-full h-8 w-80 mx-auto border-4 border-gray-100 shadow-inner overflow-hidden relative group">
              <div 
                className="h-full bg-gradient-to-r from-green-300 to-green-400 transition-all duration-1000 group-hover:brightness-110"
                style={{ width: `${progress}%` }}
              />
              <span className="absolute inset-0 flex items-center justify-center text-xs font-black text-gray-500 uppercase tracking-widest">
                 Level Progress
              </span>
            </div>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pb-10 px-2">
            {SECTIONS.map((section) => (
              <LevelCard
                key={section.id}
                id={section.id}
                title={section.title}
                titleCn={section.titleCn}
                theme={section.theme}
                completed={completedSections.includes(section.id)}
                onClick={() => setActiveSectionId(section.id)}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Active Game View
  return (
    <div className={`min-h-screen transition-colors duration-700 ${
      activeSection.theme === 'pink' ? 'bg-[#fff0f5]' :
      activeSection.theme === 'blue' ? 'bg-[#f0f9ff]' :
      activeSection.theme === 'yellow' ? 'bg-[#fffbea]' :
      activeSection.theme === 'green' ? 'bg-[#f0fdf4]' : 'bg-[#faf5ff]'
    }`}>
      
      <Header 
        title={`${activeSection.id}. ${activeSection.title}`}
        titleCn={activeSection.titleCn}
        onBack={() => setActiveSectionId(null)}
      />

      <main className="container mx-auto p-2 md:p-4 pb-12">
        {activeSection.type === 'verb-table' ? (
          <VerbTable 
            data={activeSection.content}
            onComplete={handleSectionComplete}
          />
        ) : (
          <QuizGame 
            questions={activeSection.content} 
            theme={activeSection.theme}
            onComplete={handleSectionComplete}
            onBack={() => setActiveSectionId(null)}
          />
        )}
      </main>
    </div>
  );
}