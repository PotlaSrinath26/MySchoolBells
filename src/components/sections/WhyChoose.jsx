import React from "react";
import { Section } from "../ui/Section";
import { Button } from "../ui/Button";
import { useTheme } from "../../lib/ThemeContext";
import { FadeIn } from "../ui/Animations";

export default function WhyChoose() {
  const { theme } = useTheme();
  const reasons = [
    {
      title: "Full-Cycle Management",
      desc: "From lead generation and digital admissions to alumni networks and detailed financial reporting.",
      color: "indigo",
    },
    {
      title: "Unmatched Reliability",
      desc: "Enterprise-grade architecture with 99.9% uptime and military-grade security protocols.",
      color: "rose",
    },
    {
      title: "Intelligent Automation",
      desc: "AI-driven predictive insights and automated task scheduling to handle repetitive admin work.",
      color: "violet",
    },
    {
      title: "Unified Ecosystem",
      desc: "A single source of truth bridging parents, teachers, and management in real-time.",
      color: "emerald",
    },
    {
      title: "Global Compliance",
      desc: "Fully aligned with regional educational boards and global data protection standards.",
      color: "amber",
    },
  ];

  return (
    <Section
      id="why-choose"
      className="bg-transparent dark:bg-[#020617] py-32 relative overflow-hidden transition-colors duration-500">
      {/* Dynamic Animated Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-rose-500/10 blur-[150px] rounded-full animate-blob"></div>
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-indigo-600/10 blur-[120px] rounded-full animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet-600/5 blur-[180px] rounded-full animate-blob animation-delay-4000"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-slate-50 via-slate-50/90 to-transparent dark:from-[#020617] dark:via-[#020617]/90 dark:to-transparent transition-colors duration-500"></div>
      </div>
      <div className="grid lg:grid-cols-2 gap-24 relative z-10 items-start">
        <div>
          <FadeIn>
            <h2 className="text-4xl lg:text-5xl font-bold mb-12 tracking-tight text-slate-900 dark:text-white transition-colors leading-tight">
              Designed for the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-indigo-600 dark:from-rose-400 dark:to-indigo-400 transition-all">
                Modern Institution.
              </span>
            </h2>
            <div className="space-y-12">
              {reasons.map((reason, i) => (
                <div key={i} className="group relative pl-16">
                  <div className="absolute left-0 top-0 w-12 h-12 rounded-2xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center font-bold text-lg text-slate-900 dark:text-white group-hover:bg-rose-600 group-hover:border-rose-500 group-hover:text-white transition-all duration-500 shadow-sm">
                    {i + 1}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors">
                    {reason.title}
                  </h3>
                  <p className="text-slate-800 dark:text-slate-400 leading-relaxed font-medium text-sm transition-colors">
                    {reason.desc}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
        <div className="relative group lg:sticky lg:top-32">
          <div className="absolute -inset-1 bg-gradient-to-r from-rose-500 to-indigo-500 rounded-[2.5rem] blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
          <div className="relative bg-white/70 dark:bg-indigo-950/40 backdrop-blur-2xl p-10 lg:p-14 rounded-[2.5rem] border border-slate-200 dark:border-white/10 shadow-2xl transition-colors">
            <h3 className="text-2xl font-bold mb-4 text-center text-slate-900 dark:text-white transition-colors">
              Elevate Your Operations
            </h3>
            <p className="text-slate-800 dark:text-slate-400 mb-10 text-center text-sm font-medium transition-colors">
              Schedule a personalized walkthrough with our specialists.
            </p>
            <form className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-900 dark:text-slate-500 uppercase tracking-widest ml-1 transition-colors">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl p-4 text-slate-900 dark:text-white focus:ring-2 focus:ring-rose-500/50 outline-none transition-all text-sm"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-900 dark:text-slate-500 uppercase tracking-widest ml-1 transition-colors">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl p-4 text-slate-900 dark:text-white focus:ring-2 focus:ring-rose-500/50 outline-none transition-all text-sm"
                    placeholder="+91 1234567890"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold text-slate-900 dark:text-slate-500 uppercase tracking-widest ml-1 transition-colors">
                  Institution Name
                </label>
                <input
                  type="text"
                  className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl p-4 text-slate-900 dark:text-white focus:ring-2 focus:ring-rose-500/50 outline-none transition-all text-sm"
                  placeholder="e.g. Saint Peter's Academy"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-slate-900 dark:text-slate-500 uppercase tracking-widest ml-1 transition-colors">
                  Inquiry Email
                </label>
                <input
                  type="email"
                  className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl p-4 text-slate-900 dark:text-white focus:ring-2 focus:ring-rose-500/50 outline-none transition-all text-sm"
                  placeholder="admin@school.com"
                />
              </div>
              <Button
                variant={theme === "dark" ? "white" : "primary"}
                className="w-full py-5 rounded-2xl font-bold uppercase tracking-widest text-xs shadow-xl transition-all border-none group relative overflow-hidden"
              >
                <span className="relative z-10">Book Implementation Demo</span>
                <div className="absolute inset-0 bg-gradient-to-r from-rose-500 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </Button>
            </form>
            <div className="mt-12 pt-8 border-t border-slate-200 dark:border-white/5 flex items-center justify-around gap-4 transition-colors">
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-600">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <span className="text-[9px] text-slate-900 dark:text-slate-500 font-black uppercase tracking-widest">
                  Free Consult
                </span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-2xl bg-rose-500/10 flex items-center justify-center text-rose-600">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <span className="text-[9px] text-slate-900 dark:text-slate-500 font-black uppercase tracking-widest">
                  Full Setup
                </span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-600">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <span className="text-[9px] text-slate-900 dark:text-slate-500 font-black uppercase tracking-widest">
                  Enterprise Security
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
