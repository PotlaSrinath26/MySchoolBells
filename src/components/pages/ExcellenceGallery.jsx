import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Trophy,
  Medal,
  Star,
  Award,
  Crown,
  Sparkles,
  GraduationCap,
  Quote,
  Zap,
} from "lucide-react";
import { useTheme } from "../../lib/ThemeContext";

// Mock Data for Achievements
const achievements = [
  {
    id: 1,
    category: "Academic",
    title: "State Topper 2024",
    studentName: "Aditya",
    grade: "Grade 10",
    description: "Secured 99.8% in State Board Examinations.",
    image:
      "https://i.pinimg.com/736x/80/a6/49/80a64977e4a4749d8ce504e54f186f0e.jpg",
    badge: "Gold Medalist",
    color: "from-yellow-400 to-orange-500",
    icon: Trophy,
  },
  {
    id: 2,
    category: "Sports",
    title: " State Chess Champion",
    studentName: "Ravindra",
    grade: "Grade 11",
    description: "Won State Chess Championship with outstanding strategic performance.",
    image:
      "https://i.pinimg.com/736x/e9/c5/1a/e9c51a0a6819c3b0032b44c46fd199b0.jpg",
    badge: "Champion",
    color: "from-blue-400 to-cyan-500",
    icon: Medal,
  },
  {
    id: 3,
    category: "Innovation",
    title: "Robotics Expo Winner",
    studentName: "Team Srinath",
    grade: "Grade 9",
    description: "Built an AI-powered waste management system.",
    image:
      "https://i.pinimg.com/1200x/a2/24/3d/a2243dd29d425a3eac7f3c81e30b979a.jpg",
    badge: "Innovator",
    color: "from-purple-400 to-pink-500",
    icon: Zap,
  },
  {
    id: 4,
    category: "Faculty",
    title: "Best Teacher Award",
    studentName: "Mr.Puneeth",
    grade: "Science Dept",
    description: "Recognized for innovative teaching methods.",
    image:
      "https://i.pinimg.com/1200x/d8/8a/b8/d88ab83ac8abbbd5e8d1957e2b072111.jpg",
    badge: "Excellence",
    color: "from-emerald-400 to-teal-500",
    icon: Star,
  },
];

const ExcellenceGallery = () => {
  const { theme } = useTheme();
  const [selectedId, setSelectedId] = useState(null);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#020617] pt-24 pb-12 transition-colors duration-500 font-sans overflow-hidden relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 text-xs font-bold uppercase tracking-wider mb-4 border border-amber-200 dark:border-amber-500/20">
              <Crown className="w-3 h-3" /> Hall of Fame
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">
              Excellence
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
                Gallery
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Our Excellence Gallery is our live digital showcase celebrating
              the achievements of our students and staff. Every milestone is
              instantly displayed with pride and clarity.
            </p>
          </motion.div>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((item) => (
            <motion.div
              key={item.id}
              layoutId={`card-container-${item.id}`}
              onClick={() => setSelectedId(item.id)}
              className="group cursor-pointer relative bg-white dark:bg-slate-900/50 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Image Section */}
              <motion.div
                layoutId={`card-image-${item.id}`}
                className="h-64 overflow-hidden relative"
              >
                <img
                  src={item.image}
                  alt={item.studentName}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute top-4 right-4">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-br ${item.color} text-white shadow-lg`}
                  >
                    <item.icon className="w-5 h-5" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-white bg-gradient-to-r ${item.color} mb-2 shadow-sm`}
                  >
                    {item.category}
                  </span>
                  <h3 className="text-xl font-bold text-white leading-tight">
                    {item.title}
                  </h3>
                </div>
              </motion.div>

              {/* Content Section */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-sm font-bold text-slate-900 dark:text-white">
                      {item.studentName}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {item.grade}
                    </p>
                  </div>
                  <Award className="w-5 h-5 text-amber-500" />
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Expanded View Modal */}
        <AnimatePresence>
          {selectedId && (
            <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4 sm:p-8">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedId(null)}
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              />
              <motion.div
                layoutId={`card-container-${selectedId}`}
                className="w-full max-w-4xl bg-white dark:bg-[#0F1623] rounded-[2rem] overflow-hidden shadow-2xl relative z-10 border border-white/10"
              >
                {(() => {
                  const item = achievements.find((i) => i.id === selectedId);
                  return (
                    <div className="grid md:grid-cols-2 h-full md:h-[500px]">
                      {/* Left: Image */}
                      <motion.div
                        layoutId={`card-image-${item.id}`}
                        className="relative h-64 md:h-full overflow-hidden"
                      >
                        <img
                          src={item.image}
                          alt={item.studentName}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/80 via-transparent to-transparent" />

                        <div className="absolute top-6 left-6 z-20">
                          <h2 className="text-3xl md:text-5xl font-black text-white mb-2 leading-none">
                            {item.badge}
                          </h2>
                          <div className="h-1 w-20 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full"></div>
                        </div>
                      </motion.div>

                      {/* Right: Details */}
                      <div className="p-8 md:p-12 flex flex-col justify-center relative">
                        <button
                          onClick={() => setSelectedId(null)}
                          className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 transition-colors"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-x w-5 h-5 text-slate-500 dark:text-slate-400"
                          >
                            <path d="M18 6 6 18" />
                            <path d="m6 6 12 12" />
                          </svg>
                        </button>

                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                        >
                          <div
                            className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6 text-white bg-gradient-to-r ${item.color}`}
                          >
                            <item.icon className="w-3 h-3" /> {item.category}
                          </div>

                          <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
                            {item.title}
                          </h3>
                          <div className="flex items-center gap-3 mb-8">
                            <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                              {/* Avatar placeholder */}
                              <img
                                src={`https://ui-avatars.com/api/?name=${item.studentName}&background=random`}
                                alt={item.studentName}
                              />
                            </div>
                            <div>
                              <p className="text-sm font-bold text-slate-900 dark:text-white">
                                {item.studentName}
                              </p>
                              <p className="text-xs text-slate-500 dark:text-slate-400">
                                {item.grade}
                              </p>
                            </div>
                          </div>

                          <div className="relative pl-6 border-l-4 border-amber-500/30">
                            <Quote className="absolute -top-2 -left-3 w-6 h-6 text-amber-500 fill-amber-500" />
                            <p className="text-lg italic text-slate-600 dark:text-slate-300">
                              "{item.description} This achievement marks a
                              significant milestone in our journey of
                              excellence."
                            </p>
                          </div>

                          <div className="mt-10 flex gap-4">
                            <button className="flex-1 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold py-3 px-6 rounded-xl hover:scale-105 transition-transform shadow-lg">
                              Congratulate
                            </button>
                            <button className="flex-1 border border-slate-200 dark:border-white/10 font-bold py-3 px-6 rounded-xl hover:bg-slate-50 dark:hover:bg-white/5 transition-colors text-slate-900 dark:text-white">
                              Share
                            </button>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  );
                })()}
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ExcellenceGallery;
