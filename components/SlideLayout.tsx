import React from 'react';

interface SlideLayoutProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export const SlideLayout: React.FC<SlideLayoutProps> = ({ title, children, className = "" }) => {
  return (
    <div className="w-full h-full flex flex-col relative z-10">
      {title && (
        <div className="mb-8 border-b-2 border-[#d4c5b0] pb-4">
          <h2 className="text-4xl md:text-[44px] font-bold text-primary leading-tight">
            {title}
          </h2>
        </div>
      )}
      <div className={`flex-1 overflow-y-auto no-scrollbar ${className}`}>
        {children}
      </div>
    </div>
  );
};
