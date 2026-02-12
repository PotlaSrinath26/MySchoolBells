import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { cn } from "../../lib/utils";

const squareData = [
  {
    id: 1,
    src: "/Images/MySchool/MySchoolBells/Homework.webp",
  },
  {
    id: 2,
     src: "/Images/MySchool/MySchoolBells/Games.webp",
  },
  {
    id: 3,
    src: "/Images/MySchool/MySchoolBells/home.webp",
  },
  {
    id: 4,
    src: "/Images/MySchool/MySchoolBells/SmartLibary.webp",
  },
  {
    id: 5,
   src: "/Images/MySchool/MySchoolBells/Parent&StudentPortal.webp",
  },
  {
    id: 6,
    src: "/Images/MySchool/MySchoolBells/Hostel.webp",
  },
  {
    id: 7,
    src: "/Images/MySchool/MySchoolBells/lessonplanning.webp",
  },
  {
    id: 8,
    src: "/Images/MySchool/MySchoolBells/HelpDesk.webp",
  },
  {
    id: 9,
    src: "/Images/MySchool/MySchoolBells/transportation.webp",
  },
  {
    id: 10,
    src: "/Images/MySchool/MySchoolBells/MySchoolBell.webp",
  },
  {
    id: 11,
    src: "/Images/MySchool/MySchoolBells/MySchoolBellINR.webp",
  },
  {
    id: 12,
    src: "/Images/MySchool/MySchoolBells/StudentData.webp",
  },
  {
    id: 13,
    src: "/Images/MySchool/MySchoolBells/Edu.webp",
  },
  {
    id: 14,
    src: "/Images/MySchool/MySchoolBells/documentapprovalsystem.webp",
  },
  {
    id: 15,
    src: "/Images/MySchool/MySchoolBells/Inventory&Asset.webp",
  },
  {
    id: 16,
    src: "/Images/MySchool/MySchoolBells/DigitalMaketing.webp",
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
    <section className="w-full relative px-8 py-12 overflow-hidden bg-white/40 dark:bg-slate-900/40 backdrop-blur-sm border-y border-slate-200 dark:border-white/5 transition-colors">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto dark:text-white relative z-10">
        <div>
          <span className="block mb-4 text-xs md:text-sm text-orange-500 font-bold tracking-widest uppercase">
            Connecting Education, Building Futures
          </span>
          <h3 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
            From Morning Bell to Home Bell
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
