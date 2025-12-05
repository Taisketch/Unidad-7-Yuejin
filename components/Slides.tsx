
import React from 'react';
import { 
  Wind, Sprout, Shield, Sword, Heart, Droplets, Flame, 
  ArrowUpCircle, Activity, Leaf, Anchor, Ban, Brain, GitCommit,
  UtensilsCrossed, Thermometer, Layers
} from 'lucide-react';
import { SlideLayout } from './SlideLayout';
import { ReflectionBox, Quiz } from './UIComponents';

// Helper for images with consistent styling
const SlideImage = ({ src, alt, className = "" }: { src: string, alt: string, className?: string }) => (
  <div className={`overflow-hidden rounded-xl shadow-lg border border-gray-200 h-64 md:h-full min-h-[250px] relative ${className}`}>
    <img src={src} alt={alt} className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
  </div>
);

// --- 1. Title ---
export const Slide01_Title = () => (
  <SlideLayout>
    <div className="h-full flex flex-col items-center justify-center p-10 bg-gradient-to-br from-primary/10 to-white rounded-xl border-4 border-double border-primary relative overflow-hidden shadow-inner">
      <div className="absolute inset-0 z-0 opacity-20">
         <img src="https://images.unsplash.com/photo-1518531933037-9a84706c94a2?q=80&w=2560&auto=format&fit=crop" alt="Abstract Green Nature" className="w-full h-full object-cover" />
      </div>
      <div className="relative z-10 text-center">
        <h1 className="font-serif text-5xl md:text-[76px] text-primary mb-6 leading-tight drop-shadow-sm">
            Unidad 7: Jueyin
        </h1>
        <p className="text-3xl text-secondary font-medium tracking-wide mb-8">
            Viento, Madera y el Cierre Yin
        </p>
        <div className="w-24 h-2 bg-accent rounded-full mx-auto mb-6"></div>
        <p className="text-xl text-dark font-serif italic">Medicina China Clásica - Escuela Shen Ming</p>
      </div>
    </div>
  </SlideLayout>
);

// --- 2. Definition of Jueyin ---
export const Slide02_Definition = () => (
  <SlideLayout title="2. ¿Qué es Jueyin?">
    <div className="grid md:grid-cols-2 gap-8 items-center h-full">
        <div className="space-y-6 text-lg">
            <p>Jueyin es la última de las seis conformaciones. En el <em>Su Wen</em>, Qi Bo explica:</p>
            <div className="bg-white p-6 rounded-xl border-l-8 border-primary shadow-sm relative">
                <span className="text-6xl text-primary/20 absolute -top-4 -left-2">"</span>
                <p className="italic text-xl text-dark font-serif relative z-10">Los dos yin intercambian completamente.</p>
            </div>
            <p>Los "dos yin" son Taiyin y Shaoyin. Jueyin es la culminación de la oscuridad antes del amanecer.</p>
            <Quiz 
                id="q2"
                title="Reflexión Rápida"
                question="¿Qué significa que 'intercambian'?"
                options={[
                  { id: 'a', text: 'Que el Yin desaparece para siempre', isCorrect: false },
                  { id: 'b', text: 'Que el Yin llega a su fin y da paso al Yang', isCorrect: true },
                  { id: 'c', text: 'Que Taiyin se convierte en Shaoyin', isCorrect: false },
                ]}
             />
        </div>
        <SlideImage src="https://images.unsplash.com/photo-1448375240586-dfd8d395ea6c?q=80&w=2070&auto=format&fit=crop" alt="Deep Forest Light" />
    </div>
  </SlideLayout>
);

// --- 3. The Concept of "You" ---
export const Slide03_YouConfinement = () => (
  <SlideLayout title="3. 'You': Confinamiento">
    <div className="grid md:grid-cols-2 gap-8 h-full">
         <div className="flex flex-col gap-6 justify-center">
            <div className="bg-primary/5 p-8 rounded-xl text-center border border-primary/20">
                <h3 className="text-5xl font-bold text-primary mb-2">幽</h3>
                <h4 className="text-2xl font-bold text-secondary mb-4">(You)</h4>
                <p className="text-xl">Significa <strong>"Confinamiento"</strong>, oscuridad o cierre.</p>
            </div>
            <p className="text-lg">
                Jueyin es donde el Yin se "cierra" o confina. Es el <strong>Yin Corto</strong> o Yin Pausado.
            </p>
            <ReflectionBox 
                question="¿Por qué es necesario 'confinar' el Yin?"
                answer="Para concentrar la energía. Al igual que una semilla se cierra en sí misma bajo tierra antes de brotar, el Yin debe concentrarse al máximo para generar la chispa del Yang."
            />
        </div>
        <SlideImage src="https://images.unsplash.com/photo-1504333638930-c8787321eee0?q=80&w=2070&auto=format&fit=crop" alt="Cave Darkness" />
    </div>
  </SlideLayout>
);

// --- 4. The Concept of "Jue" ---
export const Slide04_JueReversion = () => (
  <SlideLayout title="4. 'Jue': Reversión">
    <div className="grid md:grid-cols-2 gap-8 items-center h-full">
        <SlideImage src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2074&auto=format&fit=crop" alt="Mountain Peak Cliff" />
        <div>
            <h3 className="text-3xl font-bold text-dark mb-4 flex items-center gap-3">
                <Activity className="w-8 h-8 text-accent"/> Etimología (厥)
            </h3>
            <p className="text-lg mb-4">
                Sugiere un "peñasco" o espacio vacío en una montaña. Un lugar de retiro absoluto desde donde se inicia el retorno.
            </p>
            <p className="text-lg bg-amber-50 p-6 rounded-lg border border-amber-200 shadow-sm mb-6">
                <strong>Reversión:</strong> Cuando se alcanza el extremo, se revierte a lo opuesto.
            </p>
            <Quiz 
                id="q4"
                title="Mecánica de Jueyin"
                question="Si el Yin llega a su ápice en Jueyin, ¿qué sucede obligatoriamente después?"
                options={[
                { id: 'a', text: 'El Yin se estanca', isCorrect: false },
                { id: 'b', text: 'Se revierte hacia el Yang', isCorrect: true },
                { id: 'c', text: 'El cuerpo muere', isCorrect: false },
                ]}
            />
        </div>
    </div>
  </SlideLayout>
);

// --- 5. Yin and Yang Interaction ---
export const Slide05_YinYangRoot = () => (
  <SlideLayout title="5. Semilla del Yang">
    <div className="grid md:grid-cols-2 gap-8 h-full items-center">
        <div className="flex flex-col gap-6">
            <p className="text-2xl font-serif italic text-primary/80 leading-relaxed">
                "Jueyin es un cierre para dentro, pero contiene la semilla para una vuelta en dirección al Yang."
            </p>
            <div className="flex gap-4 items-center bg-gray-50 p-4 rounded-lg">
                <Layers className="w-10 h-10 text-dark" />
                <p>Oscuridad máxima = Potencial máximo.</p>
            </div>
            <ReflectionBox 
                question="¿Qué analogía natural explica esto?"
                answer="El momento justo antes del amanecer (hora del Hígado 1-3 AM). Es la oscuridad más profunda, pero es precisamente ahí donde el sol empieza su ascenso invisible."
            />
        </div>
        <SlideImage src="https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?q=80&w=2070&auto=format&fit=crop" alt="Sprout growing" />
    </div>
  </SlideLayout>
);

// --- 6. Wind Definition ---
export const Slide06_WindMessenger = () => (
  <SlideLayout title="6. El Viento: Mensajero">
    <div className="grid md:grid-cols-2 gap-8 items-center h-full">
        <div className="bg-sky-50 p-8 rounded-xl border border-sky-200 h-full flex flex-col justify-center">
            <Wind className="w-16 h-16 text-sky-600 mb-6" />
            <h3 className="text-3xl font-bold text-sky-800 mb-4">Enviado del Cielo y la Tierra</h3>
            <p className="text-xl leading-relaxed">
                El Viento es el "embajador". Cualquier cambio en el Qi del Cielo se refleja primero en el Viento. Es el movimiento que conecta lo de arriba con lo de abajo.
            </p>
            <div className="mt-8">
                <Quiz 
                    id="q6"
                    title="Dirección del Viento"
                    question="Aunque hay 8 vientos, ¿cuál es la dirección original asociada a la Madera?"
                    options={[
                    { id: 'a', text: 'Norte', isCorrect: false },
                    { id: 'b', text: 'Oeste', isCorrect: false },
                    { id: 'c', text: 'Este', isCorrect: true },
                    ]}
                />
            </div>
        </div>
        <SlideImage src="https://images.unsplash.com/photo-1465146633011-14f8e0781093?q=80&w=2070&auto=format&fit=crop" alt="Grass blowing in wind" />
    </div>
  </SlideLayout>
);

// --- 7. Wood Characteristics ---
export const Slide07_WoodBending = () => (
  <SlideLayout title="7. Madera: Doblar y Enderezar">
    <div className="grid md:grid-cols-2 gap-8 items-center h-full">
        <SlideImage src="https://images.unsplash.com/photo-1518063319789-7217e6706b04?q=80&w=1974&auto=format&fit=crop" alt="Green Bamboo Forest" />
        <div className="flex flex-col gap-6">
            <div className="bg-green-50 p-8 rounded-xl border-l-8 border-green-600 shadow-md">
                <h3 className="text-2xl font-bold text-green-800 mb-2">"Qu Zhi" (Doblar y Enderezar)</h3>
                <p className="text-xl">
                    Es la flexibilidad. En el cuerpo, esto se manifiesta en los <strong>Tendones</strong>.
                </p>
            </div>
            <p className="text-lg text-gray-700">La madera que no se dobla, se rompe. La salud de Jueyin es la capacidad de adaptarse.</p>
            <ReflectionBox 
                question="¿Qué pasaría con los tendones si no hubiera Madera/Viento?"
                answer="No habría movimiento. Los tendones estarían rígidos o flácidos sin capacidad de contracción (doblar) y extensión (enderezar). El Viento anima el movimiento."
            />
        </div>
    </div>
  </SlideLayout>
);

// --- 8. Sustainability (Wood vs Water) ---
export const Slide08_Sustainability = () => (
  <SlideLayout title="8. Madera y Sostenibilidad">
    <div className="grid md:grid-cols-2 gap-8 items-center h-full">
        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
            <div className="flex gap-4 mb-6">
                <Sprout className="w-10 h-10 text-green-600"/>
                <h3 className="text-2xl font-bold text-dark">Recurso Renovable</h3>
            </div>
            <p className="text-lg mb-6 leading-relaxed">
                La Madera (biomasa) es renovable: produce Fuego y vuelve a crecer. 
                El Agua (petróleo/fósil) produce Fuego pero se agota. La medicina china busca un cuerpo sostenible.
            </p>
            <Quiz 
                id="q8"
                title="Energía Corporal"
                question="¿Qué representa usar 'Madera' en lugar de 'Agua' para nuestra energía diaria?"
                options={[
                { id: 'a', text: 'Usar estimulantes (café) para gastar el Riñón', isCorrect: false },
                { id: 'b', text: 'Usar el metabolismo diario (comida/aire) sin agotar la Esencia', isCorrect: true },
                ]}
            />
        </div>
        <SlideImage src="https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=2070&auto=format&fit=crop" alt="Deep Green Forest" />
    </div>
  </SlideLayout>
);

// --- 9. Elements Sequence ---
export const Slide09_ElementsSequence = () => (
  <SlideLayout title="9. Secuencia de Elementos">
    <div className="flex flex-col items-center justify-center space-y-8 h-full">
        <div className="flex flex-wrap justify-center gap-6 text-xl font-bold">
            <div className="flex flex-col items-center p-4 bg-blue-50 rounded-lg border border-blue-200">
                <Droplets className="w-8 h-8 text-blue-500 mb-2"/>
                <span>Agua (1)</span>
                <span className="text-sm font-normal text-gray-500">Origen</span>
            </div>
            <div className="flex items-center text-gray-300">➔</div>
            <div className="flex flex-col items-center p-4 bg-red-50 rounded-lg border border-red-200">
                <Flame className="w-8 h-8 text-red-500 mb-2"/>
                <span>Fuego (2)</span>
                <span className="text-sm font-normal text-gray-500">Espíritu</span>
            </div>
            <div className="flex items-center text-gray-300">➔</div>
            <div className="flex flex-col items-center p-4 bg-green-50 rounded-lg border border-green-200">
                <Leaf className="w-8 h-8 text-green-500 mb-2"/>
                <span>Madera (3)</span>
                <span className="text-sm font-normal text-gray-500">Vida</span>
            </div>
        </div>
        <SlideImage src="https://images.unsplash.com/photo-1470058869958-2a77ade41c02?q=80&w=2070&auto=format&fit=crop" alt="Nature cycle ecosystem" className="h-48 w-full max-w-2xl md:h-64" />
        <ReflectionBox 
            question="¿Por qué el Agua es el 1 y la Madera el 3?"
            answer="El Agua es el origen absoluto (la vida viene del mar). El Fuego (2) es la consciencia/espíritu que habita. La Madera (3) es la manifestación de la vida biológica que une a ambos."
        />
    </div>
  </SlideLayout>
);

// --- 10. Liver General ---
export const Slide10_LiverGeneral = () => (
  <SlideLayout title="10. El General (Hígado)">
    <div className="grid md:grid-cols-2 gap-8 h-full items-center">
        <div className="flex flex-col justify-center">
            <h3 className="text-4xl font-bold text-primary mb-4 flex gap-3 items-center">
                <Sword className="w-10 h-10"/> El Estratega
            </h3>
            <p className="text-xl mb-6 text-gray-700 leading-relaxed">
                "La planificación y la estrategia emanan de él." El Hígado no pelea directamente, organiza las defensas y mantiene el orden interno.
            </p>
            <Quiz 
                id="q10"
                title="Función Militar"
                question="¿Qué rol cumple el 'General' en tiempos de paz?"
                options={[
                  { id: 'a', text: 'Atacar a los órganos', isCorrect: false },
                  { id: 'b', text: 'Mantener el orden y prevenir el caos (Caos = Enfermedad)', isCorrect: true },
                ]}
            />
        </div>
        <SlideImage src="https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=2070&auto=format&fit=crop" alt="Majestic Tree standing strong" />
    </div>
  </SlideLayout>
);

// --- 11. Ba Ji ---
export const Slide11_LiverBaJi = () => (
  <SlideLayout title="11. Ba Ji (Resistencia)">
    <div className="grid md:grid-cols-2 gap-8 items-center h-full">
        <SlideImage src="https://images.unsplash.com/photo-1500673922987-e212871fec22?q=80&w=2070&auto=format&fit=crop" alt="Roots gripping rock" />
        <div className="bg-white p-8 rounded-xl border border-primary/20 shadow-lg">
            <div className="flex items-center gap-4 mb-4">
                <Anchor className="w-8 h-8 text-accent" />
                <h3 className="text-2xl font-bold text-dark">Ba Ji (罷極)</h3>
            </div>
            <p className="text-xl mb-6 text-gray-600">
                "Raíz del cansancio extremo" o "Raíz de la resistencia". Es la capacidad de soportar la fatiga.
            </p>
            <ReflectionBox 
                question="¿Cómo se relaciona esto con la fatiga crónica?"
                answer="Si el Hígado (la resistencia) está débil, la persona no puede tolerar el esfuerzo. No es solo falta de energía (Qi), es falta de 'resistencia' o capacidad de sostener el esfuerzo."
            />
        </div>
    </div>
</SlideLayout>
);

// --- 12. Pericardium Intro ---
export const Slide12_PericardiumIntro = () => (
  <SlideLayout title="12. El Pericardio">
    <div className="grid md:grid-cols-2 gap-8 items-center h-full">
        <div className="flex flex-col items-start gap-6">
            <div className="flex items-center gap-4">
                <Shield className="w-12 h-12 text-secondary" />
                <h2 className="text-4xl font-bold text-secondary">El Protector</h2>
            </div>
            <p className="text-lg">El Pericardio envuelve al Corazón, protegiéndolo de ataques externos y emociones intensas.</p>
            <Quiz 
                id="q12"
                title="Jerarquía"
                question="¿Por qué necesitamos un Pericardio?"
                options={[
                { id: 'a', text: 'Porque el Corazón (Emperador) no debe ser atacado directamente', isCorrect: true },
                { id: 'b', text: 'Para bombear sangre extra', isCorrect: false },
                { id: 'c', text: 'Para enfriar el Pulmón', isCorrect: false },
                ]}
            />
        </div>
        <SlideImage src="https://images.unsplash.com/photo-1543351611-58f69d7c1781?q=80&w=1974&auto=format&fit=crop" alt="Tree Bark Protection" />
    </div>
  </SlideLayout>
);

// --- 13. Pericardium Ambassador ---
export const Slide13_PericardiumAmbassador = () => (
  <SlideLayout title="13. El Embajador">
    <div className="grid md:grid-cols-2 gap-8 items-center h-full">
        <SlideImage src="https://images.unsplash.com/photo-1520699697851-3dc68aa3a474?q=80&w=2832&auto=format&fit=crop" alt="River Flow Message" />
        <div>
            <h3 className="text-2xl font-bold text-dark mb-4">Chen Shi (Oficial)</h3>
            <p className="text-lg mb-6">
                El Pericardio es el oficial que transmite las órdenes del Emperador hacia afuera y le trae alegría hacia adentro.
            </p>
            <ReflectionBox 
                question="¿Qué sucede emocionalmente si el Pericardio se bloquea?"
                answer="La comunicación se corta. El Emperador (Corazón) queda aislado, llevando a la depresión, falta de alegría y desconexión emocional."
            />
        </div>
    </div>
  </SlideLayout>
);

// --- 14. Deep Blood ---
export const Slide14_DeepBlood = () => (
  <SlideLayout title="14. Sangre Profunda">
    <div className="grid md:grid-cols-2 gap-8 items-center h-full">
        <div className="flex flex-col gap-6">
            <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                <h3 className="text-xl font-bold text-red-800 mb-2">Jueyin vs Taiyang</h3>
                <p className="text-lg">
                    Taiyang gobierna la sangre superficial (piel). Jueyin gobierna la sangre <strong>profunda</strong> (hígado, útero, grandes vasos).
                </p>
            </div>
            <Quiz 
                id="q14"
                title="Patología de Sangre"
                question="¿Qué síntoma sanguíneo es típico de Jueyin?"
                options={[
                { id: 'a', text: 'Sangrado nasal (epistaxis)', isCorrect: false },
                { id: 'b', text: 'Masas abdominales o problemas menstruales profundos', isCorrect: true },
                ]}
            />
        </div>
        <SlideImage src="https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?q=80&w=2072&auto=format&fit=crop" alt="Red Abstract Fluid" />
    </div>
</SlideLayout>
);

// --- 15. The Hun ---
export const Slide15_TheHun = () => (
  <SlideLayout title="15. El Hun (Alma Etérea)">
    <div className="grid md:grid-cols-2 gap-8 items-center h-full">
        <SlideImage src="https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&w=2069&auto=format&fit=crop" alt="Foggy Forest Dream" />
        <div className="flex flex-col justify-center">
            <h3 className="text-3xl font-bold text-primary mb-4 flex gap-3 items-center">
                <Brain className="w-8 h-8"/> Visión y Sueños
            </h3>
            <p className="text-lg mb-6">
                El Hun es el aspecto psíquico del Hígado. Permite planificar, soñar y tener el coraje de ejecutar.
            </p>
            <ReflectionBox 
                question="¿Cuál es la diferencia entre el coraje del Hígado y la imprudencia?"
                answer="El coraje del Hígado (Hun) está basado en una estrategia clara y visión (Shenming). La imprudencia es acción sin visión (Vesícula Biliar desequilibrada o Hígado en exceso)."
            />
        </div>
    </div>
</SlideLayout>
);

// --- 16. SHL Intro ---
export const Slide16_SHL_Intro = () => (
  <SlideLayout title="16. Jueyin en el Shan Han Lun">
    <div className="grid md:grid-cols-2 gap-8 items-center h-full">
        <div className="text-left space-y-6">
            <GitCommit className="w-12 h-12 text-accent mb-2" />
            <h2 className="text-3xl font-bold text-dark">El Caos de la Mezcla</h2>
            <p className="text-lg">
                Jueyin es la etapa más compleja porque representa la ruptura de la armonía. No es solo frío o calor, es la separación de ambos.
            </p>
            <Quiz 
                id="q16"
                title="Naturaleza de la Enfermedad"
                question="¿Por qué es tan difícil tratar Jueyin?"
                options={[
                { id: 'a', text: 'Porque es solo frío', isCorrect: false },
                { id: 'b', text: 'Porque mezcla frío y calor simultáneamente', isCorrect: true },
                { id: 'c', text: 'Porque es muy superficial', isCorrect: false },
                ]}
            />
        </div>
        <SlideImage src="https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?q=80&w=1974&auto=format&fit=crop" alt="Stormy Weather Swirl" />
    </div>
</SlideLayout>
);

// --- 17. Line 326 Text ---
export const Slide17_Line326 = () => (
  <SlideLayout title="17. Línea 326: El Texto Maestro">
    <div className="grid md:grid-cols-2 gap-8 items-center h-full">
        <SlideImage src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=2000&auto=format&fit=crop" alt="Books and Paper" />
        <div className="flex flex-col gap-6">
            <div className="bg-paper p-8 rounded-xl border-2 border-primary shadow-lg">
                <p className="text-xl font-serif italic leading-loose text-dark">
                    "Sed insaciable, Qi sube al corazón, dolor y calor en el corazón, hambre sin deseo de comer, vómito de lombrices..."
                </p>
            </div>
            <ReflectionBox 
                question="¿Qué órgano está caliente y cuál está frío según este texto?"
                answer="El Corazón/Estómago superior tiene Calor (sed, dolor). Los Intestinos/Hígado inferior tienen Frío (lombrices, diarrea si se purga)."
            />
        </div>
    </div>
</SlideLayout>
);

// --- 18. Thirst ---
export const Slide18_Thirst = () => (
  <SlideLayout title="18. Sed Insaciable (Xiao Ke)">
    <div className="grid md:grid-cols-2 gap-8 items-center h-full">
        <div>
            <div className="flex items-center gap-3 mb-4">
                <Droplets className="w-8 h-8 text-blue-500" />
                <h3 className="text-2xl font-bold text-dark">Sed Jueyin</h3>
            </div>
            <p className="text-lg mb-6">
                Se bebe y no se sacia. El Viento (Madera) agota los fluidos de la Tierra rápidamente, como un viento seco sobre un campo húmedo.
            </p>
            <Quiz 
                id="q18"
                title="Diferenciación"
                question="¿En qué se diferencia de la sed de Yangming?"
                options={[
                { id: 'a', text: 'En Yangming la sed se calma al beber, en Jueyin no', isCorrect: true },
                { id: 'b', text: 'En Yangming no hay sed', isCorrect: false },
                ]}
            />
        </div>
        <SlideImage src="https://images.unsplash.com/photo-1504198458649-3128b932f49e?q=80&w=1976&auto=format&fit=crop" alt="Cracked Earth" />
    </div>
</SlideLayout>
);

// --- 19. Wind vs Earth ---
export const Slide19_WindEarth = () => (
  <SlideLayout title="19. Viento vs. Tierra">
    <div className="grid md:grid-cols-2 gap-8 items-center h-full">
        <SlideImage src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2074&auto=format&fit=crop" alt="Windy Mountains" />
        <div className="flex flex-col gap-6">
            <div className="p-6 bg-green-100 rounded-lg text-center shadow-inner">
                <Wind className="w-10 h-10 text-green-700 mx-auto mb-2"/>
                <h4 className="font-bold text-green-800 text-xl mb-2">Viento (Madera)</h4>
                <p>Es seco y dispersante.</p>
            </div>
            <ReflectionBox 
                question="¿Qué sucede cuando el Viento ataca el Estómago?"
                answer="El Estómago necesita humedad. El Viento lo seca rápidamente, consumiendo los fluidos y generando esa 'sed insaciable' que no es por calor de fuego, sino por consumo de viento."
            />
        </div>
    </div>
</SlideLayout>
);

// --- 20. Qi Rising ---
export const Slide20_QiRising = () => (
  <SlideLayout title="20. Colisión con el Corazón">
    <div className="grid md:grid-cols-2 gap-8 items-center h-full">
        <div>
            <h3 className="text-2xl font-bold text-red-700 mb-4 flex gap-2 items-center">
                <ArrowUpCircle className="w-8 h-8"/> Dolor y Calor
            </h3>
            <p className="text-lg mb-6">"El Qi sube y golpea el corazón". Es una sensación de quemazón y dolor opresivo en el pecho.</p>
            <Quiz 
                id="q20"
                title="Síntoma Moderno"
                question="¿A qué patología occidental se asemeja este 'golpe'?"
                options={[
                { id: 'a', text: 'Gastritis o Angina de pecho', isCorrect: true },
                { id: 'b', text: 'Dolor lumbar', isCorrect: false },
                ]}
            />
        </div>
        <SlideImage src="https://images.unsplash.com/photo-1485182708500-e8f1f318ba72?q=80&w=2070&auto=format&fit=crop" alt="Erupting force or Volcano" />
    </div>
</SlideLayout>
);

// --- 21. Hunger Paradox ---
export const Slide21_HungerParadox = () => (
  <SlideLayout title="21. Hambre sin deseo de comer">
    <div className="grid md:grid-cols-2 gap-8 items-center h-full">
        <SlideImage src="https://images.unsplash.com/photo-1594322436404-5a0526db4d13?q=80&w=2029&auto=format&fit=crop" alt="Dry cracked earth contrast" />
        <div className="text-center md:text-left">
            <div className="flex items-center gap-4 mb-4 justify-center md:justify-start">
                <UtensilsCrossed className="w-12 h-12 text-gray-400" />
                <h3 className="text-3xl font-bold text-dark">La Paradoja</h3>
            </div>
            <p className="text-lg mb-6">El cuerpo pide comida (hambre) pero la mente la rechaza (no deseo).</p>
            <ReflectionBox 
                question="¿Por qué alguien tendría hambre pero no querría comer?"
                answer="El Hambre viene del Calor en el Estómago (digiere rápido). El 'No deseo' viene del Frío en los Intestinos/Hígado (rechazo a la ingesta). Es el conflicto Frío/Calor."
            />
        </div>
    </div>
</SlideLayout>
);

// --- 22. Worms ---
export const Slide22_Worms = () => (
  <SlideLayout title="22. Vómito de Lombrices">
    <div className="grid md:grid-cols-2 gap-8 items-center h-full">
        <div>
            <h3 className="text-2xl font-bold text-accent mb-4">El Bioindicador</h3>
            <p className="text-lg mb-6">
                Las lombrices son criaturas sensibles. Huyen del frío de abajo hacia el calor de arriba (Estómago/Esófago), irritando el diafragma y provocando vómito.
            </p>
            <Quiz 
                id="q22"
                title="Diagnóstico"
                question="¿Qué nos confirma el vómito de lombrices?"
                options={[
                { id: 'a', text: 'Que el paciente comió mal', isCorrect: false },
                { id: 'b', text: 'Que existe un Frío severo en el Jiao Inferior', isCorrect: true },
                ]}
            />
        </div>
        <SlideImage src="https://images.unsplash.com/photo-1473187983305-f615310e7daa?q=80&w=2070&auto=format&fit=crop" alt="Twisted Roots Earth" />
    </div>
</SlideLayout>
);

// --- 23. Purgation Ban ---
export const Slide23_Purgation = () => (
  <SlideLayout title="23. Prohibición de Purgar">
    <div className="grid md:grid-cols-2 gap-8 items-center h-full">
        <SlideImage src="https://images.unsplash.com/photo-1518133835878-5a93cc3f89e5?q=80&w=1974&auto=format&fit=crop" alt="Rock Barrier" />
        <div className="flex flex-col items-center justify-center text-center gap-6">
            <Ban className="w-20 h-20 text-red-600" />
            <h3 className="text-3xl font-bold text-red-800">¡NO PURGAR!</h3>
            <ReflectionBox 
                question="¿Por qué no podemos purgar si hay síntomas de calor (sed, hambre)?"
                answer="Porque ese calor es falso o superficial. La base es el FRÍO por deficiencia. Si purgas, dañas el Yang del Bazo y provocas una diarrea incesante que puede ser fatal."
            />
        </div>
    </div>
</SlideLayout>
);

// --- 24. Upper Heat / Lower Cold ---
export const Slide24_UpperLower = () => (
  <SlideLayout title="24. Mapa Térmico">
    <div className="grid md:grid-cols-2 gap-8 items-center h-full">
        <div className="relative flex flex-col justify-center gap-6 h-full">
            <div className="bg-red-100 p-6 rounded-lg text-center border-red-500 border-2 shadow-sm">
                <Flame className="inline text-red-500 w-8 h-8 mb-2 block mx-auto"/> 
                <span className="font-bold text-red-800 text-xl">Calor Arriba</span>
                <p className="text-sm">(Corazón/Estómago)</p>
            </div>
            <div className="w-1 h-12 bg-gray-300 mx-auto"></div>
            <div className="bg-blue-100 p-6 rounded-lg text-center border-blue-500 border-2 shadow-sm">
                <Thermometer className="inline text-blue-500 w-8 h-8 mb-2 block mx-auto"/> 
                <span className="font-bold text-blue-800 text-xl">Frío Abajo</span>
                <p className="text-sm">(Hígado/Intestinos)</p>
            </div>
        </div>
        <div>
            <Quiz 
                id="q24"
                title="Ubicación"
                question="¿Dónde está el bloqueo?"
                options={[
                { id: 'a', text: 'En el Jiao Medio (la mezcla no ocurre)', isCorrect: true },
                { id: 'b', text: 'En la piel', isCorrect: false },
                ]}
            />
        </div>
        <div className="hidden md:block absolute inset-0 -z-10 opacity-10">
            <img src="https://images.unsplash.com/photo-1618123069712-9c6f96489a36?q=80&w=2000" className="w-full h-full object-cover" alt="Fire Ice Abstract" />
        </div>
    </div>
</SlideLayout>
);

// --- 25. Jue Ni ---
export const Slide25_JueNi = () => (
  <SlideLayout title="25. Jue Ni (Flujo Inverso)">
    <div className="grid md:grid-cols-2 gap-8 items-center h-full">
        <SlideImage src="https://images.unsplash.com/photo-1483664852095-d6cc6870702d?q=80&w=2070&auto=format&fit=crop" alt="Ice Frost" />
        <div className="flex flex-col gap-6">
            <p className="text-lg">
                Jue Ni es la separación de Yin y Yang. El Yang no llega a las extremidades, retrocediendo hacia el centro.
            </p>
            <Quiz 
                id="q25"
                title="Signo Cardinal"
                question="¿Cuál es el signo físico de Jue Ni?"
                options={[
                { id: 'a', text: 'Fiebre alta', isCorrect: false },
                { id: 'b', text: 'Manos y pies fríos', isCorrect: true },
                ]}
            />
        </div>
    </div>
</SlideLayout>
);

// --- 26. Depth of Cold ---
export const Slide26_Depth = () => (
  <SlideLayout title="26. Profundidad del Frío">
    <div className="grid md:grid-cols-2 gap-8 items-center h-full">
        <div className="space-y-6">
            <h3 className="text-2xl font-bold text-dark">Pronóstico</h3>
            <p className="text-lg">
                La gravedad se mide por la extensión del frío. Si pasa de los codos y rodillas, la vida corre peligro.
            </p>
            <ReflectionBox 
                question="¿Qué indica si el frío llega al tronco?"
                answer="Indica que el Yang Qi está devastado y replegado en los órganos vitales como último recurso para sobrevivir. Es un estado de choque inminente."
            />
        </div>
        <SlideImage src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=80&w=2070&auto=format&fit=crop" alt="Deep Blue Water" />
    </div>
</SlideLayout>
);

// --- 27. Wumei Concept ---
export const Slide27_WumeiConcept = () => (
  <SlideLayout title="27. Wumei Wan: El Concepto">
    <div className="grid md:grid-cols-2 gap-8 items-center h-full">
        <SlideImage src="https://images.unsplash.com/photo-1587393855524-087f83d95bc9?q=80&w=1974&auto=format&fit=crop" alt="Dark Plums Berries" />
        <div>
            <h3 className="text-3xl font-bold text-primary mb-4">Wumei (Ciruela Negra)</h3>
            <p className="text-lg mb-6">Es la hierba emperador. Su sabor es ácido y astringente.</p>
            <Quiz 
                id="q27"
                title="Estrategia Ácida"
                question="¿Por qué usamos sabor ácido en un síndrome de bloqueo?"
                options={[
                { id: 'a', text: 'Para vomitar', isCorrect: false },
                { id: 'b', text: 'Para generar fluidos y calmar a las lombrices', isCorrect: true },
                ]}
            />
        </div>
    </div>
</SlideLayout>
);

// --- 28. Laozi Philosophy ---
export const Slide28_Laozi = () => (
  <SlideLayout title="28. Filosofía: Laozi">
    <div className="grid md:grid-cols-2 gap-8 items-center h-full">
        <div className="bg-paper p-8 rounded-xl border-l-8 border-secondary shadow-md">
            <p className="text-2xl font-serif italic text-dark mb-6 leading-relaxed">
                "Aquello que está a punto de elevarse y liberarse debe haber estado restringido."
            </p>
            <p className="text-sm text-right text-gray-500">- Laozi</p>
        </div>
        <div className="space-y-6">
             <SlideImage src="https://images.unsplash.com/photo-1591588582259-e675bd2e6088?q=80&w=2069&auto=format&fit=crop" alt="Zen Balanced Stone" className="h-48 md:h-64" />
            <ReflectionBox 
                question="¿Cómo aplica esto Wumei Wan?"
                answer="Usa la restricción (ácido) para acumular potencial, permitiendo que el Yang renazca con fuerza después, como un resorte que se comprime antes de saltar."
            />
        </div>
    </div>
</SlideLayout>
);

// --- 29. Wumei Ingredients ---
export const Slide29_WumeiIngredients = () => (
  <SlideLayout title="29. Ingredientes de Wumei Wan">
    <div className="grid md:grid-cols-2 gap-8 items-center h-full">
        <div className="space-y-6">
            <h3 className="text-2xl font-bold text-dark">Fórmula Compleja</h3>
            <div className="grid grid-cols-1 gap-4 text-center">
                <div className="bg-red-50 p-3 rounded shadow-sm border border-red-100 flex items-center justify-between px-6">
                    <span className="font-bold text-red-600">Picantes</span> <span>(Fuzi, Ganjiang)</span>
                </div>
                <div className="bg-blue-50 p-3 rounded shadow-sm border border-blue-100 flex items-center justify-between px-6">
                    <span className="font-bold text-blue-600">Amargos</span> <span>(Huanglian)</span>
                </div>
                <div className="bg-green-50 p-3 rounded shadow-sm border border-green-100 flex items-center justify-between px-6">
                    <span className="font-bold text-green-600">Ácidos</span> <span>(Wumei)</span>
                </div>
            </div>
            <Quiz 
                id="q29"
                title="Mezcla"
                question="¿Qué logra esta combinación?"
                options={[
                { id: 'a', text: 'Solo calienta', isCorrect: false },
                { id: 'b', text: 'Ataca el frío, limpia el calor y calma el viento simultáneamente', isCorrect: true },
                ]}
            />
        </div>
        <SlideImage src="https://images.unsplash.com/photo-1629196914375-f7e48f477b6d?q=80&w=2070&auto=format&fit=crop" alt="Herbs and Spices" />
    </div>
</SlideLayout>
);

// --- 30. Final Strategy ---
export const Slide30_Treatment = () => (
  <SlideLayout title="30. Estrategia Final">
    <div className="grid md:grid-cols-2 gap-8 items-center h-full">
        <SlideImage src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=2070&auto=format&fit=crop" alt="Nature Balance Stone" />
        <div className="flex flex-col items-center justify-center text-center gap-6">
            <Brain className="w-16 h-16 text-primary" />
            <h3 className="text-3xl font-bold">Armonizar el Caos</h3>
            <p className="text-xl">
                En Jueyin, no buscamos tonificar o dispersar simplemente. Buscamos <strong>reconectar</strong> el eje Yin-Yang que se ha roto.
            </p>
            <Quiz 
                id="q30"
                title="Resumen"
                question="¿Cuál es la clave del éxito en Jueyin?"
                options={[
                { id: 'a', text: 'Usar dosis altas de antibióticos', isCorrect: false },
                { id: 'b', text: 'Reconocer la complejidad y usar fórmulas complejas (calor+frío+ácido)', isCorrect: true },
                ]}
            />
        </div>
    </div>
  </SlideLayout>
);
