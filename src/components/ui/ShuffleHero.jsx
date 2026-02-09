import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { cn } from "../../lib/utils";

const squareData = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=500&auto=format&fit=crop",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=500&auto=format&fit=crop",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=500&auto=format&fit=crop",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=500&auto=format&fit=crop",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=500&auto=format&fit=crop",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1510531704581-5b2870972060?q=80&w=500&auto=format&fit=crop",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=500&auto=format&fit=crop",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=500&auto=format&fit=crop",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=500&auto=format&fit=crop",
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=500&auto=format&fit=crop",
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=500&auto=format&fit=crop",
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=500&auto=format&fit=crop",
  },
  {
    id: 13,
    src: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=500&auto=format&fit=crop",
  },
  {
    id: 14,
    src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=500&auto=format&fit=crop",
  },
  {
    id: 15,
    src: "https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?q=80&w=500&auto=format&fit=crop",
  },
  {
    id: 16,
    src: "https://images.unsplash.com/photo-1596495577886-d920f1fb7238?q=80&w=500&auto=format&fit=crop",
  },
];

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full rounded-md overflow-hidden bg-slate-800 border border-white/10"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());
    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
      {squares.map((sq) => sq)}
    </div>
  );
};

export const ShuffleHero = () => {
  return (
    <section className="w-full relative px-8 py-12 overflow-hidden bg-slate-900/40 backdrop-blur-sm border-y border-white/5">
      {/* Indian Flag Theme Background - intensified */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FF9933]/20 via-transparent to-[#138808]/20 pointer-events-none z-0"></div>

      {/* Decorative Blur Circles - heightened opacity */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-[#FF9933]/30 rounded-full blur-[100px] pointer-events-none mix-blend-screen"></div>
      <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-[#138808]/30 rounded-full blur-[100px] pointer-events-none mix-blend-screen"></div>

      {/* Center White Light for the Chakra effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto dark:text-white relative z-10">
        <div>
          <span className="block mb-4 text-xs md:text-sm text-orange-500 font-bold tracking-widest uppercase">
            Smart & Synchronized
          </span>
          <h3 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
            Orchestrate Your School's Rhythm
          </h3>
          <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
            Say goodbye to manual ringing and confusing schedules. Our automated
            system ensures every class, break, and assembly starts exactly on
            time, creating a seamless flow for students and staff.
          </p>
          <div className="flex gap-4">
            <button
              className={cn(
                "bg-orange-500 text-white font-bold py-3 px-6 rounded-full",
                "transition-all hover:bg-orange-600 active:scale-95 shadow-lg hover:shadow-orange-500/25",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2",
              )}
            >
              View Solutions
            </button>
            <button
              className={cn(
                "bg-transparent border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white font-medium py-3 px-6 rounded-full",
                "transition-all hover:bg-slate-100 dark:hover:bg-slate-800 active:scale-95",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2",
              )}
            >
              Request Demo
            </button>
          </div>
        </div>
        <ShuffleGrid />
      </div>
    </section>
  );
};
