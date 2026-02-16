import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, Volume2, Globe, Music, BookOpen } from "lucide-react";

const AssemblyManagement = () => {
  const [activeTab, setActiveTab] = useState("hindi");
  const [activeContent, setActiveContent] = useState("anthem"); // 'anthem' | 'pledge'
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current
          .play()
          .catch((e) => console.error("Playback failed:", e));
      }
    }
  };

  const lineTimes = [
    { start: 0, end: 6 }, // Janaganamana...
    { start: 6, end: 11 }, // Bharata bhagya...
    { start: 11, end: 14.5 }, // Punjab Sindhu...
    { start: 14.5, end: 17.5 }, // Dravida Utkala...
    { start: 17.5, end: 21.5 }, // Vindhya Himachal...
    { start: 21.5, end: 24.5 }, // Uchchala Jaladhi...
    { start: 24.5, end: 27.5 }, // Tava Shubha Name...
    { start: 27.5, end: 30.5 }, // Tava Shubha Ashish...
    { start: 30.5, end: 35.5 }, // Gahe Tava Jaya...
    { start: 35.5, end: 41 }, // Jana Gana Mangala...
    { start: 41, end: 44 }, // Bharata Bhagya...
    { start: 44, end: 47 }, // Jaya He...
    { start: 47, end: 53 }, // Jaya Jaya...
  ];

  const anthemData = {
    hindi: {
      title: "राष्ट्रीय गान (National Anthem)",
      script: "Devanagari",
      text: [
        "जन गण मन अधिनायक जय हे",
        "भारत भाग्य विधाता",
        "पंजाब सिंधु गुजरात मराठा",
        "द्राविड़ उत्कल बंग",
        "विंध्य हिमाचल यमुना गंगा",
        "उच्छल जलधि तरंग",
        "तव शुभ नामे जागे",
        "तव शुभ आशीष मांगे",
        "गाहे तव जय गाथा",
        "जन गण मंगलदायक जय हे",
        "भारत भाग्य विधाता",
        "जय हे, जय हे, जय हे",
        "जय जय जय जय हे",
      ],
    },
    telugu: {
      title: "జాతీయ గీతం (National Anthem)",
      script: "Telugu",
      text: [
        "జన గణ మన అధినాయక జయ హే",
        "భారత భాగ్య విధాతా",
        "పంజాబ్ సింధు గుజరాత్ మరాఠా",
        "ద్రావిడ ఉత్కళ బంగా",
        "వింధ్య హిమాచల యమునా గంగా",
        "ఉచ్చల జలధి తరంగా",
        "తవ శుభ నామే జాగే",
        "తవ శుభ ఆశీష మాగే",
        "గాహే తవ జయ గాథా",
        "జన గణ మంగళదాయక జయ హే",
        "భారత భాగ్య విధాతా",
        "జయ హే, జయ హే, జయ హే",
        "జయ జయ జయ జయ హే",
      ],
    },
    english: {
      title: "National Anthem (Translation)",
      script: "English",
      text: [
        "Thou art the ruler of the minds of all people,",
        "Dispenser of India's destiny.",
        "Thy name rouses the hearts of Punjab, Sind, Gujarat and Maratha,",
        "Of the Dravida and Orissa and Bengal;",
        "It echoes in the hills of the Vindhyas and Himalayas,",
        "Mingles in the music of the Jamuna and Ganges and is",
        "Chanted by the waves of the Indian Sea.",
        "They pray for Thy blessings and sing Thy praise.",
        "The saving of all people waits in Thy hand,",
        "Thou dispenser of India's destiny.",
        "Victory, victory, victory to Thee.",
      ],
    },
  };

  const pledgeData = {
    hindi: {
      title: "राष्ट्रीय प्रतिज्ञा (National Pledge)",
      script: "Devanagari",
      text: [
        "भारत मेरा देश है।",
        "सब देशवासी मेरे भाई-बहन हैं।",
        "मैं अपने देश से प्रेम करता हूँ।",
        "इसकी समृद्ध एवं विविध संस्कृति पर मुझे गर्व है।",
        "मैं सदा इसके सुयोग्य अधिकारी बनने का प्रयत्न करता रहूँगा।",
        "मैं अपने माता-पिता, शिक्षकों एवं गुरुजनों का सम्मान करूँगा और प्रत्येक के साथ विनीत रहूँगा।",
        "मैं अपने देश और देशवासियों के प्रति सत्यनिष्ठा की प्रतिज्ञा करता हूँ।",
        "इनके कल्याण और समृद्धि में ही मेरा सुख निहित है।",
        "जय हिन्द।",
      ],
    },
    telugu: {
      title: "జాతీయ ప్రతిజ్ఞ (National Pledge)",
      script: "Telugu",
      text: [
        "భారతదేశం నా దేశం.",
        "భారతీయులందరూ నా సహోదరులు.",
        "నేను నా దేశాన్ని ప్రేమిస్తున్నాను.",
        "సుసంపన్నమైన మరియు విభిన్నమైన నా దేశ వారసత్వంపై నాకు గర్వం ఉంది.",
        "దానికి తగినవాడిగా ఉండేందుకు నేను ఎల్లప్పుడూ కృషి చేస్తాను.",
        "నా తల్లిదండ్రులను, గురువులను మరియు పెద్దలందరినీ గౌరవిస్తాను.",
        "ప్రతివారితో మర్యాదగా ప్రవర్తిస్తాను.",
        "నా దేశం మరియు నా ప్రజల పట్ల నా భక్తిని ప్రతిజ్ఞ చేస్తున్నాను.",
        "వారి శ్రేయస్సు మరియు సుభిక్షమే నా సంతోషానికి మూలం.",
        "జై హింద్.",
      ],
    },
    english: {
      title: "National Pledge",
      script: "English",
      text: [
        "India is my country.",
        "All Indians are my brothers and sisters.",
        "I love my country.",
        "I am proud of its rich and varied heritage.",
        "I shall always strive to be worthy of it.",
        "I shall give my parents, teachers and all elders respect and treat everyone with courtesy.",
        "To my country and my people, I pledge my devotion.",
        "In their well-being and prosperity alone lies my happiness.",
        "Jai Hind.",
      ],
    },
  };

  const currentData = activeContent === "anthem" ? anthemData : pledgeData;

  const handleContentSwitch = (type) => {
    setActiveContent(type);
    setIsPlaying(false);
    setCurrentTime(0);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#020617] pt-24 pb-12 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-12 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
              Assembly{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-indigo-600">
                 Management
              </span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              A smart system that organizes and streamlines daily school assemblies with discipline, coordination, and excellence.
            </p>
          </motion.div>
        </div>

        {/* Content Type Switcher */}
        <div className="flex justify-center mb-8 relative z-10">
          <div className="inline-flex bg-white dark:bg-slate-900/50 backdrop-blur-xl p-1.5 rounded-2xl shadow-lg border border-slate-200 dark:border-white/10">
            <button
              onClick={() => handleContentSwitch("anthem")}
              className={`
                px-6 py-2.5 rounded-xl text-sm font-bold uppercase tracking-wider transition-all
                ${
                  activeContent === "anthem"
                    ? "bg-gradient-to-r from-rose-500 to-indigo-600 text-white shadow-md"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                }
              `}
            >
              National Anthem
            </button>
            <button
              onClick={() => handleContentSwitch("pledge")}
              className={`
                px-6 py-2.5 rounded-xl text-sm font-bold uppercase tracking-wider transition-all
                ${
                  activeContent === "pledge"
                    ? "bg-gradient-to-r from-rose-500 to-indigo-600 text-white shadow-md"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                }
              `}
            >
              National Pledge
            </button>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Controls & Info Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white dark:bg-slate-900/50 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-3xl p-6 shadow-xl"
            >
              {activeContent === "anthem" ? (
                <>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                      <Music className="w-6 h-6" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                        Audio Control
                      </h2>
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        Jana Gana Mana (52s)
                      </p>
                    </div>
                  </div>

                  {/* Audio Player Visuals */}
                  <div className="bg-slate-100 dark:bg-black/40 rounded-2xl p-6 mb-6 flex flex-col items-center justify-center gap-6 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-rose-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                    {/* Visualizer Lines (Animated) */}
                    <div className="flex items-end gap-1 h-12 absolute z-0 opacity-50">
                      {[...Array(8)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="w-1.5 bg-indigo-500 dark:bg-indigo-400 rounded-full"
                          animate={
                            isPlaying
                              ? {
                                  height: [16, 32, 16, 48, 24],
                                  opacity: [0.5, 1, 0.5],
                                }
                              : { height: 8, opacity: 0.3 }
                          }
                          transition={{
                            repeat: Infinity,
                            duration: 1,
                            delay: i * 0.1,
                            ease: "easeInOut",
                          }}
                        />
                      ))}
                    </div>

                    <audio
                      ref={audioRef}
                      onPlay={() => setIsPlaying(true)}
                      onPause={() => setIsPlaying(false)}
                      onEnded={() => setIsPlaying(false)}
                      onTimeUpdate={(e) => setCurrentTime(e.target.currentTime)}
                      onError={(e) => console.error("Audio playback error:", e)}
                    >
                      <source
                        src="https://upload.wikimedia.org/wikipedia/commons/9/94/Jana_Gana_Mana_instrumental.ogg"
                        type="audio/ogg"
                      />
                      <source
                        src="https://upload.wikimedia.org/wikipedia/commons/transcoded/9/94/Jana_Gana_Mana_instrumental.ogg/Jana_Gana_Mana_instrumental.ogg.mp3"
                        type="audio/mpeg"
                      />
                      Your browser does not support the audio element.
                    </audio>

                    <button
                      onClick={togglePlay}
                      className="w-16 h-16 rounded-full bg-gradient-to-r from-rose-500 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:scale-105 active:scale-95 transition-all relative z-10"
                    >
                      {isPlaying ? (
                        <Pause className="w-8 h-8 fill-current" />
                      ) : (
                        <Play className="w-8 h-8 fill-current ml-1" />
                      )}
                    </button>
                  </div>
                </>
              ) : (
                <div className="mb-6 p-6 rounded-2xl bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-500/20 text-center">
                  <div className="w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-800/50 mx-auto flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-3">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                    Daily Pledge
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    Recite with pride and honor.
                  </p>
                </div>
              )}
            </motion.div>
          </div>

          {/* Lyrics / Content Area */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className={`backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-3xl p-8 lg:p-12 shadow-xl min-h-[600px] relative overflow-hidden transition-colors duration-500
                bg-gradient-to-br from-orange-50 via-white to-green-50 dark:from-orange-950/30 dark:via-slate-900 dark:to-green-950/30
              `}
            >
              {/* Decorative Background Elements - Always show flag */}
              <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
                <img
                  src="https://i.pinimg.com/originals/10/12/31/1012315906b6ed4d36e73b3f99516289.gif"
                  className="w-full h-full object-cover opacity-90"
                  alt="Indian Flag Background"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/50 to-white/80 dark:from-slate-900/80 dark:via-slate-900/50 dark:to-slate-900/80"></div>
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6 border-b border-slate-100 dark:border-white/5 pb-6">
                  <div className="p-3 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl shadow-lg shadow-orange-500/20 text-white">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                      {currentData[activeTab]?.title}
                    </h2>
                    <p className="text-slate-500 dark:text-slate-400 text-sm">
                      Script:{" "}
                      <span className="font-medium text-slate-700 dark:text-slate-300">
                        {currentData[activeTab]?.script}
                      </span>
                    </p>
                  </div>
                </div>

                {/* Language Selection Tabs - Appears inside Main Card now */}
                <div className="flex flex-wrap gap-2 mb-8 justify-center lg:justify-start">
                  {Object.keys(currentData).map((key) => (
                    <button
                      key={key}
                      onClick={() => setActiveTab(key)}
                      className={`
                        px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2
                        ${
                          activeTab === key
                            ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/20"
                            : "bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-white/10"
                        }
                      `}
                    >
                      {key.charAt(0).toUpperCase() + key.slice(1)}
                      {activeTab === key && (
                        <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                      )}
                    </button>
                  ))}
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${activeContent}-${activeTab}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4 text-center lg:text-left"
                  >
                    {currentData[activeTab]?.text.map((line, index) => {
                      const isActive =
                        activeContent === "anthem" &&
                        currentTime >= (lineTimes[index]?.start || 0) &&
                        currentTime < (lineTimes[index]?.end || 0);

                      return (
                        <p
                          key={index}
                          className={`
                          text-lg md:text-xl lg:text-2xl leading-relaxed transition-all duration-300
                          ${
                            isActive
                              ? "text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-indigo-600 font-extrabold scale-105 drop-shadow-sm"
                              : activeTab === "english" &&
                                  activeContent === "anthem"
                                ? "font-serif italic text-slate-600 dark:text-slate-300 font-medium"
                                : "font-semibold text-slate-800 dark:text-slate-100"
                          }
                          hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors cursor-default drop-shadow-sm
                        `}
                        >
                          {line}
                        </p>
                      );
                    })}
                  </motion.div>
                </AnimatePresence>

                {activeContent === "anthem" && (
                  <div className="mt-12 pt-8 border-t border-slate-100 dark:border-white/5 flex gap-4 justify-center lg:justify-start">
                    <div
                      className="h-1 bg-gradient-to-r from-orange-400 via-white to-green-500 rounded-full transition-all duration-1000 ease-linear"
                      style={{
                        width: `${(currentTime / 52) * 100}%`,
                        minWidth: "4px",
                        maxWidth: "100%",
                      }}
                    ></div>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssemblyManagement;
