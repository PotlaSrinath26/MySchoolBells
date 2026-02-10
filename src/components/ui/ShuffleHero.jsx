import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { cn } from "../../lib/utils";

const squareData = [
  {
    id: 1,
    src: "https://i.pinimg.com/736x/ab/9a/6f/ab9a6f5aca7ee4b8a9295d988dcfa8ec.jpg",
  },
  {
    id: 2,
    src: "https://i.pinimg.com/1200x/0a/23/d8/0a23d8d2a2127949bc73d6ac97d690fc.jpg",
  },
  {
    id: 3,
    src: "https://i.pinimg.com/736x/38/a1/ca/38a1cad9ae4dc582f0d491e19826aee1.jpg",
  },
  {
    id: 4,
    src: "https://i.pinimg.com/736x/b6/81/e5/b681e59857c32b045d4222afd06a2886.jpg",
  },
  {
    id: 5,
    src: "https://i.pinimg.com/1200x/54/d1/f1/54d1f153037e28aa467fe04166166459.jpg",
  },
  {
    id: 6,
    src: "https://i.pinimg.com/736x/41/01/4c/41014c4b7e70a9cd7e7ac6000cf870d9.jpg",
  },
  {
    id: 7,
    src: "https://i.pinimg.com/1200x/b0/c9/32/b0c932f82dc644c2590bb2f89162f363.jpg",
  },
  {
    id: 8,
    src: "https://i.pinimg.com/736x/36/66/eb/3666eba986cabef1dfc976b4d8d3bc9c.jpg",
  },
  {
    id: 9,
    src: "https://i.pinimg.com/736x/8a/24/7b/8a247b63fbfeffaf105821fc1388a87b.jpg",
  },
  {
    id: 10,
    src: "https://i.pinimg.com/736x/2b/33/08/2b3308e145e088167f2633865f694a6b.jpg",
  },
  {
    id: 11,
    src: "https://i.pinimg.com/736x/53/ac/93/53ac93600a99cee6760a7610173367f4.jpg",
  },
  {
    id: 12,
    src: "https://i.pinimg.com/736x/68/ca/5c/68ca5c88bc164f2fc79aa3eab3871849.jpg",
  },
  {
    id: 13,
    src: "https://i.pinimg.com/736x/58/02/78/580278b4feb17dc409569c6db27fb643.jpg",
  },
  {
    id: 14,
    src: "https://i.pinimg.com/736x/16/4c/f7/164cf7da7a066d6b879c7b80aa509044.jpg",
  },
  {
    id: 15,
    src: "https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?q=80&w=500&auto=format&fit=crop",
  },
  {
    id: 16,
    src: "https://i.pinimg.com/1200x/d1/78/b6/d178b6679c6dc29bd61d4ec0a4a9cc94.jpg",
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
