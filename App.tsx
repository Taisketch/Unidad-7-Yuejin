
import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { 
  Slide01_Title, Slide02_Definition, Slide03_YouConfinement, Slide04_JueReversion, Slide05_YinYangRoot,
  Slide06_WindMessenger, Slide07_WoodBending, Slide08_Sustainability, Slide09_ElementsSequence, Slide10_LiverGeneral,
  Slide11_LiverBaJi, Slide12_PericardiumIntro, Slide13_PericardiumAmbassador, Slide14_DeepBlood, Slide15_TheHun,
  Slide16_SHL_Intro, Slide17_Line326, Slide18_Thirst, Slide19_WindEarth, Slide20_QiRising,
  Slide21_HungerParadox, Slide22_Worms, Slide23_Purgation, Slide24_UpperLower, Slide25_JueNi,
  Slide26_Depth, Slide27_WumeiConcept, Slide28_Laozi, Slide29_WumeiIngredients, Slide30_Treatment
} from './components/Slides';

const slides = [
  Slide01_Title, Slide02_Definition, Slide03_YouConfinement, Slide04_JueReversion, Slide05_YinYangRoot,
  Slide06_WindMessenger, Slide07_WoodBending, Slide08_Sustainability, Slide09_ElementsSequence, Slide10_LiverGeneral,
  Slide11_LiverBaJi, Slide12_PericardiumIntro, Slide13_PericardiumAmbassador, Slide14_DeepBlood, Slide15_TheHun,
  Slide16_SHL_Intro, Slide17_Line326, Slide18_Thirst, Slide19_WindEarth, Slide20_QiRising,
  Slide21_HungerParadox, Slide22_Worms, Slide23_Purgation, Slide24_UpperLower, Slide25_JueNi,
  Slide26_Depth, Slide27_WumeiConcept, Slide28_Laozi, Slide29_WumeiIngredients, Slide30_Treatment
];

const App: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToNext = () => {
    if (currentSlide < slides.length - 1 && !isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide(curr => curr + 1);
        setIsTransitioning(false);
      }, 200);
    }
  };

  const goToPrev = () => {
    if (currentSlide > 0 && !isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide(curr => curr - 1);
        setIsTransitioning(false);
      }, 200);
    }
  };

  const CurrentSlideComponent = slides[currentSlide];

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') goToNext();
      if (e.key === 'ArrowLeft') goToPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  });

  return (
    <div className="min-h-screen bg-bgmain text-dark font-sans py-8 px-4 md:px-0 flex flex-col items-center justify-center overflow-hidden">
      
      {/* Decorative Background - Green tint for Jueyin */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-[radial-gradient(circle,rgba(21,128,61,0.15)_0%,rgba(255,255,255,0)_70%)] pointer-events-none z-0"></div>

      {/* Slide Container */}
      <div className="relative z-10 w-full max-w-[1280px] h-[800px] bg-paper rounded-[20px] border border-[#cfdbd5] shadow-2xl overflow-hidden flex flex-col">
        
        {/* Content Wrapper with fade transition */}
        <div className={`flex-1 p-8 md:p-[60px] transition-opacity duration-200 ease-in-out ${isTransitioning ? 'opacity-50' : 'opacity-100'} overflow-hidden`}>
           <CurrentSlideComponent />
        </div>

        {/* Navigation Bar */}
        <div className="bg-white border-t border-[#cfdbd5] p-4 flex items-center justify-between">
          <div className="text-sm font-medium text-gray-500">
            Slide {currentSlide + 1} / {slides.length}
          </div>

          <div className="flex gap-4">
            <button 
              onClick={goToPrev}
              disabled={currentSlide === 0}
              className={`p-3 rounded-full flex items-center justify-center transition-all ${currentSlide === 0 ? 'text-gray-300 cursor-not-allowed' : 'bg-secondary text-white hover:bg-opacity-90 shadow-md active:scale-95'}`}
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={goToNext}
              disabled={currentSlide === slides.length - 1}
              className={`p-3 rounded-full flex items-center justify-center transition-all ${currentSlide === slides.length - 1 ? 'text-gray-300 cursor-not-allowed' : 'bg-primary text-white hover:bg-opacity-90 shadow-md active:scale-95'}`}
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>

      <div className="mt-6 text-gray-500 text-sm">
        Use arrow keys or buttons to navigate
      </div>
    </div>
  );
};

export default App;
