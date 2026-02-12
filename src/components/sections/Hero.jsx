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
        className="relative min-h-screen flex items-center justify-center pt-20 bg-[#fdfcfb] overflow-hidden"
      >
        {/* Decorative Color Shades - Light Mode */}
        <div className="absolute top-[-10%] left-[-5%] w-[50%] h-[50%] bg-indigo-200/30 rounded-full blur-[100px] z-0"></div>
        <div className="absolute top-[0%] right-[-5%] w-[40%] h-[50%] bg-rose-200/30 rounded-full blur-[100px] z-0"></div>
        <div className="absolute bottom-[-10%] left-[10%] w-[50%] h-[40%] bg-cyan-200/30 rounded-full blur-[100px] z-0"></div>
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
      {/* Geometric Pattern Background */}
      <div
        className="absolute inset-0 opacity-[0.03] z-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>
      {/* Decorative Color Shades - Decent & Lite */}
      <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-indigo-500/15 rounded-full blur-[120px] z-0"></div>
      <div className="absolute top-[0%] right-[-10%] w-[50%] h-[60%] bg-sky-500/15 rounded-full blur-[120px] z-0"></div>
      <div className="absolute bottom-[-20%] left-[20%] w-[60%] h-[50%] bg-cyan-500/15 rounded-full blur-[120px] z-0"></div>
      {/* Small Education Icons Pattern - "Small Design" */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Top Left - Book */}
        <div className="absolute top-[18%] left-[8%] opacity-20 animate-float hidden sm:block">
          <svg
            width="72"
            height="72"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
          </svg>
        </div>
        {/* Top Right - Graduation Cap */}
        <div className="absolute top-[15%] right-[10%] opacity-20 animate-float delay-700 hidden sm:block">
          <svg
            width="72"
            height="72"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
            <path d="M6 12v5c3 3 9 3 12 0v-5" />
          </svg>
        </div>
        {/* Bottom Left - Atom */}
        <div className="absolute bottom-[20%] left-[12%] opacity-20 animate-float delay-1500 hidden sm:block">
          <svg
            width="72"
            height="72"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="3" />
            <path
              d="M7 19.3c-2.4-.4-4-2.5-3.5-4.9s2.5-4 4.9-3.5 4 2.5 3.5 4.9c-.4 2.4-2.5 4-4.9 3.5z"
              transform="rotate(-45 12 12)"
            />
            <path
              d="M7 19.3c-2.4-.4-4-2.5-3.5-4.9s2.5-4 4.9-3.5 4 2.5 3.5 4.9c-.4 2.4-2.5 4-4.9 3.5z"
              transform="rotate(45 12 12)"
            />
          </svg>
        </div>

        {/* Bottom Right - Lightbulb */}
        <div className="absolute bottom-[25%] right-[12%] opacity-20 animate-float delay-2000 hidden sm:block">
          <svg
            width="72"
            height="72"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 18h6" />
            <path d="M10 22h4" />
            <path d="M15.09 14c.18-.9.27-1.48.27-1.48a6 6 0 0 0-11.72 0S3.73 13.1 3.91 14a3.4 3.4 0 0 0 3.09 2.6V18a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1.4c1.55-.26 2.76-1.47 3.09-2.6z" />
          </svg>
        </div>

        {/* Mid Left - Pencil */}
        <div className="absolute top-[45%] left-[5%] opacity-15 animate-float delay-1000 hidden sm:block">
          <svg
            width="72"
            height="72"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
          </svg>
        </div>

        {/* Mid Right - Globe */}
        <div className="absolute top-[50%] right-[5%] opacity-15 animate-float delay-3000 hidden sm:block">
          <svg
            width="72"
            height="72"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="2" y1="12" x2="22" y2="12" />
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          </svg>
        </div>
      </div>

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
