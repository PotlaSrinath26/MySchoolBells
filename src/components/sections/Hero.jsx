import React from "react";
import { Link } from "react-router-dom";

import { Button } from "../layout/BottomNav";
import { FadeIn } from "../ui/Animations";
import { useTheme } from "../../lib/ThemeContext";
import { motion } from "framer-motion";
import { BackgroundGradientAnimation } from "../ui/background-gradient-animation";
import { AuroraBackground } from "../ui/aurora-background";

export default function Hero() {
  const { theme } = useTheme();

  if (theme === "light") {
    return (
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center pt-20 bg-white overflow-hidden"
      >
        {/* Background Image - Light Mode */}
        <div
          className="absolute inset-0 z-0 opacity-30 pointer-events-none"
          style={{
            backgroundImage: "url('/Images/MySchool/MySchoolBells/light.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        {/* Gradient Overlay for better readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-transparent to-white/80 z-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
            className="relative flex flex-col gap-4 sm:gap-6 items-center justify-center"
          >
            <h1 className="text-4xl sm:text-6xl lg:text-[100px] font-black bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-rose-500 to-violet-600 mb-2 tracking-tighter leading-none">
              MY SCHOOL BELLS
            </h1>
            <p className="max-w-xl mx-auto text-sm sm:text-xl text-slate-600 mb-6 sm:mb-8 leading-relaxed font-bold tracking-tight uppercase tracking-[0.1em]">
              From the First Bell to the Last, We Manage It All.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
              <Button
                variant="primary"
                className="w-full sm:w-auto text-sm sm:text-lg px-8 sm:px-12 py-4 sm:py-6 bg-indigo-600 hover:bg-indigo-700 text-white shadow-[0_20px_50px_rgba(79,70,229,0.3)] transition-all font-black uppercase tracking-widest border-none rounded-full"
              >
                Start Free Trial
              </Button>
              <Link to="/modules" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  className="w-full sm:w-auto text-sm sm:text-lg px-8 sm:px-12 py-4 sm:py-6 border-2 border-indigo-200 text-indigo-900 hover:bg-indigo-50 backdrop-blur-sm font-black uppercase tracking-widest rounded-full transition-all"
                >
                  View Modules
                </Button>
              </Link>
            </div>

            {/* Stats for Light Mode */}
            <div className="mt-20 flex flex-wrap justify-center gap-12 text-sm font-medium">
              <div className="flex flex-col items-center gap-3">
                <div className="w-16 h-16 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 font-black italic text-2xl shadow-sm">
                  2M
                </div>
                <div className="text-center">
                  <div className="text-slate-900 text-sm font-black tracking-tight">
                    2 Million+
                  </div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">
                    Active Users
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center gap-3">
                <div className="w-16 h-16 rounded-2xl bg-rose-50 border border-rose-100 flex items-center justify-center text-rose-600 font-black italic text-2xl shadow-sm">
                  12+
                </div>
                <div className="text-center">
                  <div className="text-slate-900 text-sm font-black tracking-tight">
                    12+ Modules
                  </div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">
                    Full Coverage
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#020617] flex items-center justify-center"
    >
      <div
        className="absolute inset-0 z-0 opacity-100 pointer-events-none"
        style={{
          backgroundImage: "url('/Images/MySchool/MySchoolBells/Green.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.8)", // Keeps it dark but makes the details Pop
        }}
      ></div>
      {/* Dark Overlay for depth and readability - Lightened for better visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/70 via-transparent to-[#020617]/70 z-0"></div>
      {/* Small Education Icons Pattern - Removed as per request */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center pt-24 sm:pt-32">
        <FadeIn>
          <h1 className="text-3xl sm:text-6xl lg:text-[100px] font-bold bg-clip-text text-transparent bg-gradient-to-r from-rose-400 via-violet-400 to-indigo-400 pb-2">
            MY SCHOOL BELLS
          </h1>

          <p className="max-w-xl mx-auto text-sm sm:text-lg text-slate-300 mb-8 sm:mb-12 leading-relaxed font-light tracking-wide">
            School-Bells ERP - From the First Bell to the Last, We Manage It
            All.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
            <Button
              variant="white"
              className="haptic-btn w-full sm:w-auto text-sm sm:text-lg px-8 sm:px-12 py-4 sm:py-6 shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:shadow-[0_0_50px_rgba(244,63,94,0.6)] bg-white text-slate-900 hover:bg-rose-500 hover:text-white hover:scale-105 transition-all duration-300 font-bold uppercase tracking-widest border-none rounded-full"
            >
              Request a Free Demo
            </Button>
            <Link to="/modules" className="w-full sm:w-auto">
              <Button
                variant="outline"
                className="haptic-btn w-full sm:w-auto text-sm sm:text-lg px-8 sm:px-12 py-4 sm:py-6 border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-md font-bold uppercase tracking-widest rounded-full hover:border-white transition-all duration-300"
              >
                Explore the Platform
              </Button>
            </Link>
          </div>

          <div className="mt-20 sm:mt-32 flex flex-wrap justify-center gap-8 sm:gap-16 text-sm font-medium">
            <div className="flex flex-col items-center gap-4 group">
              <div className="w-20 h-20 rounded-[2rem] bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-rose-500/10 group-hover:border-rose-500/30 transition-all duration-500 backdrop-blur-md shadow-lg group-hover:scale-110">
                <div className="w-3 h-3 rounded-full bg-rose-500 shadow-[0_0_20px_rgba(244,63,94,1)] animate-pulse"></div>
              </div>
              <div className="text-center">
                <div className="text-white text-lg font-bold tracking-wider drop-shadow-sm group-hover:text-rose-400 transition-colors">
                  ISO 27001
                </div>
                <div className="text-[11px] text-slate-400 uppercase tracking-[0.2em] font-bold mt-1">
                  Certified Security
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center gap-4 group">
              <div className="w-20 h-20 rounded-[2rem] bg-white/5 border border-white/10 flex items-center justify-center text-white italic font-serif text-3xl font-bold group-hover:text-rose-500 transition-all duration-500 backdrop-blur-md shadow-lg group-hover:bg-white/10 group-hover:scale-110">
                2M
              </div>
              <div className="text-center">
                <div className="text-white text-lg font-bold tracking-wider drop-shadow-sm group-hover:text-rose-400 transition-colors">
                  2 Million+
                </div>
                <div className="text-[11px] text-slate-400 uppercase tracking-[0.2em] font-bold mt-1">
                  Active Users
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center gap-4 group">
              <div className="w-20 h-20 rounded-[2rem] bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-indigo-500/10 group-hover:border-indigo-500/30 transition-all duration-500 backdrop-blur-md shadow-lg group-hover:scale-110">
                <div className="flex gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-indigo-400 shadow-[0_0_10px_rgba(129,140,248,0.8)]"></div>
                  <div className="w-5 h-2 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.8)]"></div>
                </div>
              </div>
              <div className="text-center">
                <div className="text-white text-lg font-bold tracking-wider drop-shadow-sm group-hover:text-indigo-400 transition-colors">
                  12+ Modules
                </div>
                <div className="text-[11px] text-slate-400 uppercase tracking-[0.2em] font-bold mt-1">
                  Full Coverage
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
