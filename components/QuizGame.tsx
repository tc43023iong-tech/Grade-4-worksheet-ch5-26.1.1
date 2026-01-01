import React, { useState } from 'react';
import { QuizQuestion } from '../types';
import { CheckCircle, XCircle, Check, Star, Sparkles } from 'lucide-react';

interface Props {
  questions: QuizQuestion[];
  theme: string;
  onComplete: () => void;
  onBack: () => void;
}

const QuizGame: React.FC<Props> = ({ questions, theme, onComplete }) => {
  // Use a record to track answers for each question ID
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [completedIds, setCompletedIds] = useState<number[]>([]);

  // Calculate progress
  const answeredCount = Object.keys(answers).length;
  const isAllDone = answeredCount === questions.length;

  // Theme configuration
  const themeStyles: Record<string, { bg: string, border: string, text: string, accent: string, shadow: string, mascot: string }> = {
    pink: { bg: 'bg-pink-50', border: 'border-pink-200', text: 'text-pink-600', accent: 'bg-pink-400', shadow: 'shadow-pink-200', mascot: '🐰' },
    blue: { bg: 'bg-sky-50', border: 'border-sky-200', text: 'text-sky-600', accent: 'bg-sky-400', shadow: 'shadow-sky-200', mascot: '🐳' },
    yellow: { bg: 'bg-amber-50', border: 'border-amber-200', text: 'text-amber-600', accent: 'bg-amber-400', shadow: 'shadow-amber-200', mascot: '🦁' },
    green: { bg: 'bg-emerald-50', border: 'border-emerald-200', text: 'text-emerald-600', accent: 'bg-emerald-400', shadow: 'shadow-emerald-200', mascot: '🐸' },
    purple: { bg: 'bg-purple-50', border: 'border-purple-200', text: 'text-purple-600', accent: 'bg-purple-400', shadow: 'shadow-purple-200', mascot: '🦄' },
  };

  const currentTheme = themeStyles[theme] || themeStyles.pink;

  const handleOptionSelect = (qId: number, option: string) => {
    // If already answered correctly, don't allow changing
    if (completedIds.includes(qId)) return;

    setAnswers(prev => ({ ...prev, [qId]: option }));
    
    // Find the correct answer for this question
    const question = questions.find(q => q.id === qId);
    if (question && option === question.answer) {
      // Mark as completed/correct effectively locking it
      if (!completedIds.includes(qId)) {
        setCompletedIds(prev => [...prev, qId]);
      }
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-4 pb-8 relative">
      {/* Background Mascot */}
      <div className="fixed top-24 right-4 md:right-10 text-8xl opacity-10 pointer-events-none select-none animate-wiggle">
        {currentTheme.mascot}
      </div>

      {/* Progress Bar */}
      <div className="sticky top-16 z-10 px-3 py-2 bg-white/95 backdrop-blur-md rounded-xl shadow-sm border border-gray-100 flex items-center justify-between mb-4 mx-2">
        <div className="flex items-center gap-2 font-bold text-gray-500 text-lg">
          <Star className={`w-5 h-5 ${isAllDone ? 'text-yellow-400 fill-yellow-400 animate-spin-slow' : 'text-gray-300'}`} />
          <span>{answeredCount} / {questions.length}</span>
        </div>
        <div className="flex-1 mx-4 h-4 bg-gray-100 rounded-full overflow-hidden border border-gray-200">
           <div 
             className={`h-full transition-all duration-700 ease-out rounded-full ${currentTheme.accent}`}
             style={{ width: `${(answeredCount / questions.length) * 100}%` }}
           />
        </div>
        {isAllDone && <span className="text-xl animate-bounce">🎉</span>}
      </div>

      <div className="grid gap-4 px-1">
        {questions.map((q, idx) => {
          const userAnswer = answers[q.id];
          const isAnswered = !!userAnswer;
          const isCorrect = userAnswer === q.answer;
          const isWrong = isAnswered && !isCorrect;

          return (
            <div 
              key={q.id}
              className={`
                relative bg-white rounded-[2rem] transition-all duration-500 overflow-hidden
                ${isCorrect ? 'border-b-2 border-green-200 shadow-none bg-green-50/50' : `border-b-[6px] border-gray-200 ${currentTheme.shadow} hover:-translate-y-1 hover:shadow-lg`}
                ${isWrong ? 'animate-shake border-red-200 bg-red-50' : ''}
              `}
            >
              {/* Question Header - Compact padding when correct */}
              <div className={`relative transition-all duration-500 ease-in-out ${isCorrect ? 'p-4 md:p-5' : 'p-5 md:p-6'}`}>
                
                {/* Flex items center when correct for tighter layout */}
                <div className={`flex gap-3 transition-all duration-500 ease-in-out ${isCorrect ? 'items-center' : 'items-start'}`}>
                  
                  {/* Number Circle - Slightly larger now for better readability */}
                  <div className={`
                    flex-shrink-0 rounded-full flex items-center justify-center font-black shadow-inner transition-all duration-500
                    ${isCorrect ? 'bg-green-400 text-white w-10 h-10 text-lg' : 'bg-gray-100 text-gray-400 w-10 h-10 md:w-12 md:h-12 text-lg md:text-xl'}
                  `}>
                    {idx + 1}
                  </div>

                  <div className="flex-1">
                    {/* Text size increased back to xl/2xl for readability even when compact */}
                    <h3 className={`font-bold leading-snug tracking-tight transition-all duration-500 ${isCorrect ? 'text-green-800 text-xl md:text-2xl mb-0' : 'text-gray-800 text-xl md:text-2xl mb-1'}`}>
                      {q.question.split('_____').map((part, i, arr) => (
                        <React.Fragment key={i}>
                          {part}
                          {i < arr.length - 1 && (
                            <span className={`inline-block rounded-lg border-b-[2px] text-center font-bold transition-all duration-500
                              ${isCorrect ? 'px-2 mx-1 text-green-700 bg-transparent border-green-400/50 min-w-min' : 'px-3 py-0.5 mx-1 min-w-[80px] bg-gray-100 border-gray-200 text-transparent'}
                            `}>
                              {isCorrect ? q.answer : '?'}
                            </span>
                          )}
                        </React.Fragment>
                      ))}
                    </h3>
                    
                    {/* Chinese Translation (Disappears when correct) */}
                    <div className={`transition-all duration-500 ease-in-out ${isCorrect ? 'opacity-0 max-h-0 overflow-hidden' : 'opacity-100 max-h-24'}`}>
                      <p className="text-base md:text-lg font-bold leading-tight text-gray-400">
                        {q.questionCn}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Options Area */}
                <div className={`
                  mt-4 grid grid-cols-1 md:grid-cols-3 gap-2 transition-all duration-500 ease-in-out
                  ${isCorrect ? 'opacity-0 h-0 overflow-hidden mt-0' : 'opacity-100 h-auto'}
                `}>
                  {q.options.map((option) => {
                    const isSelected = userAnswer === option;
                    let btnStyle = `
                      py-2 px-4 rounded-xl border-[2px] font-bold text-lg leading-tight transition-all duration-200
                      hover:scale-[1.01] active:scale-95 text-center shadow-sm relative overflow-hidden
                    `;
                    
                    if (isSelected && option !== q.answer) {
                        // Wrong selection
                        btnStyle += " bg-red-100 border-red-400 text-red-500";
                    } else {
                        // Default state
                        btnStyle += ` bg-white border-gray-100 text-gray-600 hover:border-${themeStyles[theme].accent.split('-')[1]}-300 hover:bg-${themeStyles[theme].accent.split('-')[1]}-50`;
                    }

                    return (
                      <button
                        key={option}
                        onClick={() => handleOptionSelect(q.id, option)}
                        disabled={isCorrect} // Disable if question is already correct
                        className={btnStyle}
                      >
                         {option}
                         {isSelected && option !== q.answer && (
                           <XCircle className="absolute right-3 top-1/2 -translate-y-1/2 text-red-400 w-5 h-5" />
                         )}
                      </button>
                    );
                  })}
                </div>
                
                {/* Decorative Emoji inside card */}
                 <div className="absolute top-2 right-2 text-4xl opacity-10 rotate-12 pointer-events-none">
                    {currentTheme.mascot}
                 </div>
              </div>
            </div>
          );
        })}
      </div>

      {isAllDone && (
        <div className="text-center py-8 animate-pop">
           <h2 className="text-4xl font-black text-gray-800 mb-2 tracking-tight">Wonderful! 🎉</h2>
           <p className="text-gray-500 font-bold text-xl mb-6">全部都答對了！</p>
           <button 
             onClick={onComplete}
             className={`px-10 py-4 rounded-full text-2xl font-black text-white shadow-xl ${currentTheme.accent} hover:opacity-90 transform hover:scale-105 transition-all active:scale-95`}
           >
             Finish Level 完成關卡
           </button>
        </div>
      )}

      <style>{`
        @keyframes shake {
          10%, 90% { transform: translate3d(-1px, 0, 0); }
          20%, 80% { transform: translate3d(2px, 0, 0); }
          30%, 50%, 70% { transform: translate3d(-4px, 0, 0); }
          40%, 60% { transform: translate3d(4px, 0, 0); }
        }
        .animate-shake {
          animation: shake 0.4s cubic-bezier(.36,.07,.19,.97) both;
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slideUp {
          animation: slideUp 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default QuizGame;