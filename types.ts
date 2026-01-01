export type QuestionType = 'verb-table' | 'quiz';

export interface QuizQuestion {
  id: number;
  question: string;       // Main English text
  questionCn?: string;    // Sub Chinese text
  options: string[];      // Multiple choice options
  answer: string;         // Correct answer
  hint?: string;          // Optional hint
}

export interface VerbRow {
  id: number;
  base: string;
  past: string;
  pastParticiple: string;
  presentParticiple: string;
}

export interface BlankQuestion {
  id: number;
  preText: string;
  postText: string;
  answer: string | string[];
  hint?: string;
}

export interface TranslationQuestion {
  id: number;
  sourceText: string;
  answer: string;
}

export type SegmentType = 'text' | 'input' | 'break';

export interface SentenceSegment {
  type: SegmentType;
  content?: string;
  width?: string;
  answer?: string | string[];
}

export interface MultiInputQuestion {
  id: number;
  contextIcon: string;
  instruction: string;
  segments: SentenceSegment[];
}

export interface SectionData {
  id: string;
  title: string;
  titleCn: string;
  description: string;
  type: QuestionType;
  content: any; // Flexible content based on type
  theme: 'pink' | 'blue' | 'yellow' | 'green' | 'purple';
}