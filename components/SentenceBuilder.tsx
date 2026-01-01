import React, { useState } from 'react';
import { MultiInputQuestion, SentenceSegment } from '../types';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface Props {
  questions: MultiInputQuestion[];
  onComplete: () => void;
}

const SentenceBuilder: React.FC<Props> = ({ questions, onComplete }) => {
  // Store inputs as { questionId: { segmentIndex: value } }
  const [inputs, setInputs] = useState<Record<number, Record<number, string>>>({});
  const [submittedIds, setSubmittedIds] = useState<number[]>([]);

  const normalize = (s: string) => s.trim().toLowerCase().replace(/[.,!]/g, '');

  const handleInput = (qId: number, segIdx: number, val: string) => {
    setInputs(prev => ({
      ...prev,
      [qId]: {
        ...(prev[qId] || {}),
        [segIdx]: val
      }
    }));
    // Remove from submitted if editing
    if (submittedIds.includes(qId)) {
      setSubmittedIds(prev => prev.filter(id => id !== qId));
    }
  };

  const checkQuestion = (q: MultiInputQuestion) => {
    const qInputs = inputs[q.id] || {};
    const isCorrect = q.segments.every((seg, idx) => {
      if (seg.type !== 'input') return true;
      const userVal = normalize(qInputs[idx] || '');
      const validAnswers = Array.isArray(seg.answer) ? seg.answer.map(normalize) : [normalize(seg.answer || '')];
      return validAnswers.includes(userVal);
    });

    if (isCorrect) {
      setSubmittedIds(prev => [...prev, q.id]);
      if (submittedIds.length + 1 === questions.length) {
        setTimeout(onComplete, 1500);
      }
    } else {
      // Shake effect logic could go here, for now just UI color change via state
      setSubmittedIds(prev => prev.filter(id => id !== q.id)); // Ensure not marked complete
      alert("Something isn't quite right in this sentence. Check your spelling!"); 
    }
  };

  return (
    <div className="max-w-4xl mx-auto grid gap-8">
      {questions.map((q) => {
        const isDone = submittedIds.includes(q.id);
        
        return (
          <div key={q.id} className={`p-6 rounded-3xl transition-all duration-500 border-4 ${isDone ? 'bg-green-100 border-green-300' : 'bg-white border-purple-100 shadow-xl'}`}>
            <div className="flex items-center gap-3 mb-4 border-b-2 border-dashed border-gray-200 pb-3">
              <span className="text-4xl">{q.contextIcon}</span>
              <span className="font-bold text-gray-500 text-sm md:text-base bg-gray-100 px-3 py-1 rounded-full">{q.instruction}</span>
              {isDone && <CheckCircle2 className="ml-auto text-green-500 w-8 h-8 pop" />}
            </div>

            <div className="flex flex-wrap items-center gap-y-3 gap-x-1 text-lg md:text-xl font-medium text-gray-700 leading-loose">
              {q.segments.map((seg, idx) => {
                if (seg.type === 'break') {
                  return <div key={idx} className="basis-full h-2"></div>;
                }
                
                if (seg.type === 'text') {
                  return <span key={idx} className="mx-1">{seg.content}</span>;
                }

                const userVal = inputs[q.id]?.[idx] || '';
                
                return (
                  <input
                    key={idx}
                    type="text"
                    disabled={isDone}
                    value={userVal}
                    onChange={(e) => handleInput(q.id, idx, e.target.value)}
                    className={`
                      mx-1 px-1 py-1 text-center border-b-4 outline-none rounded bg-gray-50 transition-colors
                      ${seg.width || 'w-24'}
                      ${isDone ? 'border-green-400 text-green-700 bg-transparent font-bold' : 'border-purple-300 focus:border-purple-500 focus:bg-purple-50'}
                    `}
                  />
                );
              })}
            </div>

            {!isDone && (
              <div className="mt-4 flex justify-end">
                <button
                  onClick={() => checkQuestion(q)}
                  className="flex items-center gap-2 bg-purple-500 hover:bg-purple-600 text-white px-5 py-2 rounded-full font-bold shadow-md active:scale-95 transition-transform"
                >
                  Check <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default SentenceBuilder;
