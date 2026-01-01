import React, { useState } from 'react';
import { TranslationQuestion } from '../types';
import { MessageCircle } from 'lucide-react';

interface Props {
  questions: TranslationQuestion[];
  onComplete: () => void;
}

const Translation: React.FC<Props> = ({ questions, onComplete }) => {
  const [inputs, setInputs] = useState<Record<number, string>>({});
  const [isChecked, setIsChecked] = useState(false);

  // Fuzzy matching for 4th graders (ignore case, punctuation, extra spaces)
  const normalize = (s: string) => s.replace(/[.,!?;:，。！\s]/g, '').toLowerCase();

  const checkAnswers = () => {
    setIsChecked(true);
    const allCorrect = questions.every(q => 
      normalize(inputs[q.id] || '') === normalize(q.answer)
    );
    if (allCorrect) {
      setTimeout(onComplete, 1500);
    }
  };

  return (
    <div className="max-w-3xl mx-auto grid gap-6">
      {questions.map((q, idx) => {
        const userVal = inputs[q.id] || '';
        const isCorrect = isChecked && normalize(userVal) === normalize(q.answer);
        const isWrong = isChecked && !isCorrect;

        return (
          <div key={q.id} className="bg-white p-6 rounded-3xl shadow-md border-2 border-orange-100 relative overflow-hidden">
            <div className="absolute top-0 left-0 bg-orange-100 text-orange-600 px-3 py-1 rounded-br-xl font-bold text-sm">
              Question {idx + 1}
            </div>
            
            <div className="mt-4 mb-3 text-lg font-medium text-gray-700 flex gap-2 items-start">
              <MessageCircle className="w-6 h-6 text-orange-400 mt-1 flex-shrink-0" />
              {q.sourceText}
            </div>

            <textarea
              rows={2}
              value={userVal}
              onChange={(e) => {
                setInputs(prev => ({...prev, [q.id]: e.target.value}));
                setIsChecked(false);
              }}
              className={`
                w-full p-3 rounded-xl border-2 outline-none resize-none transition-all
                ${!isChecked ? 'border-gray-200 focus:border-orange-400 focus:ring-2 focus:ring-orange-100' : ''}
                ${isCorrect ? 'border-green-400 bg-green-50' : ''}
                ${isWrong ? 'border-red-400 bg-red-50' : ''}
              `}
              placeholder="Type translation here..."
            />
            
            {isChecked && !isCorrect && (
              <div className="mt-2 text-sm text-red-500 font-medium animate-pulse">
                Try again! Make sure spelling is correct.
              </div>
            )}
          </div>
        );
      })}

      <div className="flex justify-center">
        <button
          onClick={checkAnswers}
          className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-3 px-8 rounded-full shadow-lg text-lg transition transform hover:scale-105"
        >
          Translate! 🌍
        </button>
      </div>
    </div>
  );
};

export default Translation;
