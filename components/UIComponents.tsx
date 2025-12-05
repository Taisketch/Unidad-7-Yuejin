import React, { useState } from 'react';
import { HelpCircle, ChevronDown, CheckCircle, XCircle, Eye, AlertTriangle, Sun, Moon, Info } from 'lucide-react';
import { QuizOption } from '../types';

// --- Reflection Box ---
interface ReflectionBoxProps {
  question: string;
  answer: React.ReactNode;
}

export const ReflectionBox: React.FC<ReflectionBoxProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className={`mt-8 bg-white border-2 border-[#eaddcf] border-l-8 border-l-primary rounded-lg shadow-sm overflow-hidden cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:shadow-md ${isOpen ? 'border-t-[#eaddcf]' : ''}`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="p-6 bg-[#fdf2f2] flex justify-between items-center text-primary font-bold text-lg md:text-xl">
        <div className="flex items-center gap-3">
          <HelpCircle className="w-6 h-6 flex-shrink-0" />
          <span>{question}</span>
        </div>
        <ChevronDown className={`w-6 h-6 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </div>
      <div 
        className={`px-8 bg-white text-dark text-lg italic leading-relaxed transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-[500px] py-6 opacity-100' : 'max-h-0 py-0 opacity-0'}`}
      >
        {answer}
      </div>
    </div>
  );
};

// --- Quiz Component ---
interface QuizProps {
  title: string;
  question: string;
  options: QuizOption[];
  id: string;
}

export const Quiz: React.FC<QuizProps> = ({ title, question, options }) => {
  const [selected, setSelected] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSelect = (id: string) => {
    if (submitted) return;
    setSelected(id);
    setSubmitted(true);
  };

  const getFeedback = () => {
    if (!selected) return null;
    const option = options.find(o => o.id === selected);
    if (option?.isCorrect) {
      return (
        <div className="mt-6 p-4 rounded-lg bg-green-100 text-green-800 font-bold flex items-center gap-2 animate-fade-in">
          <CheckCircle className="w-5 h-5" />
          ¡Correcto! Excelente comprensión.
        </div>
      );
    }
    return (
      <div className="mt-6 p-4 rounded-lg bg-red-100 text-red-800 font-bold flex items-center gap-2 animate-fade-in">
        <XCircle className="w-5 h-5" />
        Incorrecto. Inténtalo de nuevo.
      </div>
    );
  };

  return (
    <div className="bg-white p-8 rounded-xl border border-[#e0dcd4] w-full shadow-sm">
      <h3 className="flex items-center gap-2 text-xl font-bold text-primary mb-2">
        <HelpCircle className="w-6 h-6" /> {title}
      </h3>
      <p className="text-xl text-dark mb-6">{question}</p>
      <div className="flex flex-col md:flex-row gap-4">
        {options.map((opt) => {
          let btnClass = "flex-1 p-5 border-2 rounded-lg text-lg font-medium transition-colors ";
          if (submitted) {
             if (opt.id === selected) {
                btnClass += opt.isCorrect ? "bg-green-100 border-green-600 text-green-800" : "bg-red-100 border-red-600 text-red-800";
             } else if (opt.isCorrect) {
                btnClass += "bg-green-50 border-green-300 text-green-800 opacity-70";
             } else {
                btnClass += "bg-[#f9f5eb] border-[#d4c5b0] opacity-50";
             }
          } else {
             btnClass += "bg-[#f9f5eb] border-[#d4c5b0] hover:bg-[#eaddcf] hover:border-primary cursor-pointer";
          }

          return (
            <button 
              key={opt.id}
              className={btnClass}
              onClick={() => handleSelect(opt.id)}
              disabled={submitted}
            >
              {opt.text}
            </button>
          );
        })}
      </div>
      {getFeedback()}
      {submitted && !options.find(o => o.id === selected)?.isCorrect && (
        <button 
          onClick={() => { setSubmitted(false); setSelected(null); }}
          className="mt-4 text-sm text-gray-500 underline hover:text-primary"
        >
          Intentar de nuevo
        </button>
      )}
    </div>
  );
};

// --- Reveal Card ---
interface RevealCardProps {
  title: string;
  contentTitle: string;
  content: React.ReactNode;
}

export const RevealCard: React.FC<RevealCardProps> = ({ title, contentTitle, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div 
      className="bg-white p-10 text-center cursor-pointer border border-[#dcd6cc] rounded-xl shadow-sm hover:shadow-md transition-all"
      onClick={() => setIsActive(!isActive)}
    >
      <Eye className="w-12 h-12 text-primary mx-auto mb-5" />
      <h3 className="text-2xl font-bold text-dark mb-4">{title}</h3>
      
      <div className={`text-left mt-6 pt-6 border-t border-dashed border-gray-300 transition-all duration-500 ${isActive ? 'block opacity-100' : 'hidden opacity-0'}`}>
        <h4 className="text-secondary text-xl font-bold mb-2">{contentTitle}</h4>
        <div className="text-lg text-dark">{content}</div>
      </div>
    </div>
  );
};
