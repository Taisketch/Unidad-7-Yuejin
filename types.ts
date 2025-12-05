import { ReactNode } from 'react';

export interface SlideProps {
  isActive: boolean;
}

export interface QuizOption {
  id: string;
  text: string;
  isCorrect: boolean;
}

export interface ReflectionProps {
  question: string;
  answer: string;
}
