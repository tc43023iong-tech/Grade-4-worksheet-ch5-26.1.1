import React, { useState } from 'react';
import { BlankQuestion } from '../types';
import { Star } from 'lucide-react';

interface Props {
  wordBank: string[];
  questions: BlankQuestion[];
  onComplete: () => void;
}

const VocabBank: React.FC<Props> = ({ wordBank, questions, onComplete }) => {
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [selectedWord, setSelectedWord] = useState<string | null>(null);
  const [isChecked, setIsChecked] = useState(false);

  // Helper to normalize strings for comparison
  const normalize = (s: string) => s.replace(/\s+/g, '').toLowerCase();

  const handleBlankClick = (questionId: number) => {
    if (selectedWord) {
      setAnswers(prev => ({ ...prev, [questionId]: selectedWord }));
      setSelectedWord(null);
      setIsChecked(false); // Reset check state so they can keep editing
    } else {
       // If clicking an already filled blank without a selected word, clear it
       setAnswers(prev => {
         const newAns = {...prev};
         delete newAns[questionId];
         return newAns;
       });
    }
  };

  const checkAnswers = () => {
    setIsChecked(true);
    const allCorrect = questions.every(q => 
      normalize(answers[q.id] || '') === normalize(Array.isArray(q.answer) ? q.answer[0] : q.answer)
    );
    if (allCorrect) {
      setTimeout(onComplete, 1500);
    }
  };

  // Determine if a word from the bank is used
  const isWordUsed = (word: string) => {
    return Object.values(answers).some(val => val === word);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Word Bank */}
      <div className="bg-indigo-100 p-6 rounded-3xl border-4 border-indigo-200 shadow-inner flex flex-wrap gap-3 justify-center sticky top-2 z-10">
        {wordBank.map((word) => {
          const used = isWordUsed(word);
          const isSelected = selectedWord === word;
          return (
            <button
              key={word}
              onClick={() => !used && setSelectedWord(word === selectedWord ? null : word)}
              disabled={used}
              className={`
                px-4 py-2 rounded-full font-bold text-lg transition-all transform
                ${used ? 'bg-gray-300 text-gray-500 scale-95 opacity-50 cursor-not-allowed' : 'hover:scale-110 active:scale-95'}
                ${isSelected ? 'bg-yellow-400 text-white shadow-lg ring-4 ring-yellow-200 scale-110' : 'bg-white text-indigo-600 shadow-sm'}
              `}
            >
              {word}
            </button>
          );
        })}
      </div>

      <div className="text-center text-gray-500 text-sm mb-4">
        👆 Click a word above, then click a blank line below! 👇
      </div>

      {/* Questions */}
      <div className="space-y-4 bg-white p-6 rounded-3xl shadow-lg">
        {questions.map((q, idx) => {
          const userAnswer = answers[q.id];
          const isCorrect = isChecked && normalize(userAnswer || '') === normalize(Array.isArray(q.answer) ? q.answer[0] : q.answer);
          const isWrong = isChecked && userAnswer && !isCorrect;

          return (
            <div key={q.id} className="flex flex-wrap items-center gap-2 text-lg md:text-xl p-3 hover:bg-indigo-50 rounded-xl transition-colors">
              <span className="font-bold text-indigo-300 w-8">{idx + 1}.</span>
              <span>{q.preText}</span>
              
              <button
                onClick={() => handleBlankClick(q.id)}
                className={`
                  min-w-[150px] px-3 py-1 border-b-4 font-bold text-center transition-all rounded
                  ${!userAnswer ? 'border-gray-300 bg-gray-50 hover:bg-yellow-50 text-gray-400' : ''}
                  ${userAnswer && !isChecked ? 'border-indigo-400 bg-indigo-50 text-indigo-700' : ''}
                  ${isCorrect ? 'border-green-500 bg-green-100 text-green-700' : ''}
                  ${isWrong ? 'border-red-500 bg-red-100 text-red-700' : ''}
                `}
              >
                {userAnswer || (selectedWord ? 'Click to fill' : '________')}
              </button>

              <span>{q.postText}</span>
              {isCorrect && <Star className="w-6 h-6 text-yellow-400 fill-current animate-spin-slow" />}
            </div>
          );
        })}
      </div>

      <div className="flex justify-center pt-4">
        <button
          onClick={checkAnswers}
          className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 px-10 rounded-full shadow-xl text-xl transition transform hover:scale-105"
        >
          Check Work 📝
        </button>
      </div>
    </div>
  );
};

export default VocabBank;
