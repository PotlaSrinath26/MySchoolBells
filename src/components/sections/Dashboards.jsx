import React, { useState } from "react";
import { Section } from "../ui/Section";
import { kpis } from "../../data/modules";
import { Card } from "../ui/Card";
import { FadeIn } from "../ui/Animations";

export default function Dashboards() {
  const [activeTab, setActiveTab] = useState("management");

  const tabs = [
    { id: "management", label: "Management" },
    { id: "academic", label: "Teachers" },
    { id: "parent", label: "Parents" },
  ];

  const currentKpis = kpis[activeTab];

  return (
    <Section
      id="intelligence"
      className="bg-transparent dark:bg-[#020617] py-10 lg:py-24 relative overflow-hidden transition-colors duration-500"
    >
      {/* Hyper-Aesthetic Background Layers */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-indigo-500/10 dark:bg-indigo-500/5 blur-[120px] rounded-full animate-blob"></div>
        <div className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-rose-500/10 dark:bg-rose-500/5 blur-[120px] rounded-full animate-blob animation-delay-2000"></div>
      </div>

      <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10 max-w-7xl mx-auto px-6">
        <div className="space-y-12 py-8">
          <div>
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full">
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black text-slate-900 dark:text-white mb-6 sm:mb-8 tracking-tighter leading-tight lg:leading-[0.9] transition-colors">
                Strategic
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-indigo-600 to-emerald-500 animate-gradient-x">
                  Foresight.
                </span>
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-lg font-medium transition-colors">
                Transcend basic reporting with high-fidelity analytics. Our
                unified operating system architecturally synthesizes fragmented
                data points into clear, decisive growth trajectories.
              </p>
            </FadeIn>
          </div>

          {/* Precision Tab Console */}
          <div className="flex p-1 bg-slate-100 dark:bg-white/5 rounded-2xl sm:rounded-[1.5rem] border border-slate-200 dark:border-white/10 backdrop-blur-2xl shadow-inner overflow-x-auto no-scrollbar">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative flex-1 px-4 sm:px-8 py-2 sm:py-3 rounded-xl sm:rounded-2xl text-[10px] sm:text-[11px] font-black uppercase tracking-widest transition-all duration-500 whitespace-nowrap ${
                  activeTab === tab.id
                    ? "bg-white dark:bg-slate-800 text-indigo-600 dark:text-white shadow-lg sm:shadow-2xl sm:scale-[1.05]"
                    : "text-slate-500 dark:text-slate-500 hover:text-slate-900 dark:hover:text-slate-300"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Dynamic KPI Feed */}
          <div className="grid gap-3 max-w-md pb-4">
            {currentKpis &&
              currentKpis.map((kpi, idx) => (
                <FadeIn key={`${activeTab}-${idx}`} delay={idx * 0.05}>
                  <div className="flex items-center justify-between p-5 bg-white/50 dark:bg-slate-900/40 border border-slate-200/50 dark:border-white/5 rounded-2xl hover:border-indigo-500/30 transition-all duration-500 group cursor-default shadow-sm hover:shadow-xl dark:shadow-none">
                    <div className="flex items-center gap-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-500/20 group-hover:bg-indigo-500 transition-colors shadow-[0_0_10px_rgba(99,102,241,0.5)]"></div>
                      <span className="text-slate-900 dark:text-slate-300 font-bold group-hover:text-indigo-600 dark:group-hover:text-white text-sm">
                        {kpi.label}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xl font-black text-indigo-950 dark:text-white tabular-nums">
                        {kpi.value}
                      </span>
                      <div className="w-6 h-6 rounded-lg bg-emerald-500/10 text-emerald-500 flex items-center justify-center text-[10px] font-black">
                        +
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
          </div>
        </div>

        {/* The "Command Center" Visualizer */}
        <div className="relative group perspective-1000">
          <FadeIn
            key={activeTab}
            delay={0.2}
            className="relative z-10 transition-transform duration-700 group-hover:rotate-y-2 group-hover:rotate-x-1"
          >
            {/* Multi-Layered Neon Aura */}
            <div className="absolute -inset-10 bg-gradient-to-tr from-indigo-500/20 via-violet-500/10 to-rose-500/20 rounded-[3rem] blur-[80px] opacity-40 group-hover:opacity-60 transition-opacity"></div>

            {/* The Glass OS Frame */}
            <div className="relative w-full h-auto min-h-[400px] lg:aspect-[4/3] bg-white/90 dark:bg-[#070b14]/90 backdrop-blur-[40px] rounded-[2rem] sm:rounded-[3rem] border border-white/60 dark:border-white/10 shadow-[0_60px_100px_-30px_rgba(0,0,0,0.4)] overflow-visible lg:overflow-hidden flex flex-col ring-1 ring-black/5 dark:ring-white/5">
              {/* Luxury Toolbar */}
              <div className="px-6 sm:px-10 py-4 sm:py-6 border-b border-slate-200/50 dark:border-white/5 flex items-center justify-between bg-white/50 dark:bg-white/5">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="flex gap-1.5 sm:gap-2">
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-rose-500/40 border border-rose-500/20 shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)]"></div>
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-amber-500/40 border border-amber-500/20 shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)]"></div>
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-emerald-500/40 border border-emerald-500/20 shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)]"></div>
                  </div>
                  <div className="h-4 w-px bg-slate-200 dark:bg-white/10 mx-1 sm:mx-2"></div>
                  <span className="text-[9px] sm:text-[11px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] sm:tracking-[0.4em] truncate">
                    Intelligence OS v4.0
                  </span>
                </div>
              </div>
              {/* Persona Contexts */}
              <div className="flex-grow p-4 sm:p-10 overflow-visible lg:overflow-hidden relative">
                {activeTab === "management" && (
                  <div className="h-full flex flex-col gap-10">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
                      <div className="p-6 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] bg-slate-50 dark:bg-white/5 border border-slate-200/50 dark:border-white/10 shadow-sm relative overflow-hidden group/card transition-all">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-emerald-500/10 to-transparent blur-2xl"></div>
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-3">
                          Fiscal Velocity
                        </p>
                        <div className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white">
                          $4.92M
                        </div>
                        <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 rounded-full">
                          <span className="text-[10px] font-black text-emerald-600 dark:text-emerald-400">
                            ↑ 22.4%
                          </span>
                        </div>
                      </div>
                      <div className="p-6 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] bg-slate-50 dark:bg-white/5 border border-slate-200/50 dark:border-white/10 shadow-sm">
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-3">
                          Core Efficiency
                        </p>
                        <div className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white">
                          99.8%
                        </div>
                        <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 bg-indigo-500/10 rounded-full">
                          <span className="text-[10px] font-black text-indigo-600 dark:text-indigo-400">
                            Optimal
                          </span>
                        </div>
                      </div>
                    </div>
                    {/* Visualizer Wave */}
                    <div className="flex-grow bg-slate-100 dark:bg-black/20 rounded-[2.5rem] p-8 flex flex-col relative overflow-hidden ring-1 ring-slate-200 dark:ring-white/5">
                      <div className="flex items-center justify-between mb-8">
                        <p className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.3em]">
                          Institutional Throughput
                        </p>
                        <div className="flex gap-1.5 opacity-50">
                          {[...Array(4)].map((_, i) => (
                            <div
                              key={i}
                              className="w-1 h-3 bg-indigo-500 rounded-full"
                            ></div>
                          ))}
                        </div>
                      </div>
                      <div className="flex-grow flex items-end gap-3 h-full">
                        {[40, 70, 50, 90, 60, 100, 75, 95, 55, 80, 110, 70].map(
                          (h, i) => (
                            <div
                              key={i}
                              className="flex-grow bg-indigo-500/10 rounded-full h-full relative overflow-hidden"
                            >
                              <div
                                className="absolute bottom-0 w-full bg-gradient-to-t from-indigo-600 to-violet-500 rounded-full transition-all duration-1000 shadow-[0_0_15px_rgba(99,102,241,0.3)]"
                                style={{ height: `${h}%` }}
                              ></div>
                            </div>
                          ),
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "academic" && (
                  <div className="h-full flex flex-col gap-8">
                    <div className="flex justify-between items-end mb-4">
                      <div className="space-y-1">
                        <p className="text-[10px] font-black text-indigo-500 uppercase tracking-[0.3em]">
                          Curriculum Intelligence
                        </p>
                        <h4 className="text-3xl font-black text-slate-900 dark:text-white">
                          Senior Secondary Analytics
                        </h4>
                      </div>
                      <div className="w-16 h-16 rounded-[1.5rem] bg-gradient-to-br from-indigo-500 via-violet-600 to-rose-500 p-[1px] shadow-2xl">
                        <div className="w-full h-full bg-slate-100 dark:bg-[#070b14] rounded-[1.5rem] flex items-center justify-center text-indigo-600 dark:text-white text-xl font-black">
                          A+
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4 mt-4">
                      {[
                        { name: "Mathematics", p: 96, c: "indigo" },
                        { name: "Physics", p: 88, c: "indigo" },
                        { name: "Chemistry", p: 92, c: "indigo" },
                      ].map((s, i) => (
                        <div key={i} className="space-y-2">
                          <div className="flex justify-between items-center px-1">
                            <span className="text-[10px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest">
                              {s.name}
                            </span>
                            <span
                              className={`text-sm font-black text-${s.c}-600 dark:text-${s.c}-400`}
                            >
                              {s.p}%
                            </span>
                          </div>
                          <div className="h-3 bg-slate-100 dark:bg-white/5 rounded-full overflow-hidden p-[2px]">
                            <div
                              className={`h-full bg-${s.c}-500 rounded-full shadow-[0_0_10px] shadow-${s.c}-500/50 transition-all duration-1000`}
                              style={{ width: `${s.p}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                    {/* SVG Analytics Wave */}
                    <div className="mt-8 flex-grow flex flex-col justify-end">
                      <svg
                        viewBox="0 0 200 40"
                        className="w-full h-16 drop-shadow-[0_0_10px_rgba(99,102,241,0.3)]"
                      >
                        <path
                          d="M0,38 C20,38 40,5 100,5 C160,5 180,38 200,38"
                          fill="none"
                          stroke="#6366f1"
                          strokeWidth="4"
                          strokeLinecap="round"
                        />
                        <circle
                          cx="100"
                          cy="5"
                          r="4"
                          fill="#6366f1"
                          className="animate-ping"
                        />
                      </svg>
                      <p className="text-center text-[9px] font-black text-slate-400 uppercase tracking-[0.5em] mt-4">
                        Institutional Benchmark: Global Rank Top 1%
                      </p>
                    </div>
                  </div>
                )}

                {activeTab === "parent" && (
                  <div className="h-full flex flex-col gap-2">
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-rose-500 via-indigo-500 to-emerald-500 p-[2px] animate-spin-slow">
                          <div className="w-full h-full rounded-full bg-slate-100 dark:bg-[#070b14]"></div>
                        </div>
                        <div className="absolute inset-[4px] rounded-full bg-white dark:bg-[#070b14] flex items-center justify-center text-indigo-600 dark:text-white text-3xl font-black border border-slate-200 dark:border-white/10 ring-4 ring-indigo-500/10 dark:ring-indigo-500/20 shadow-2xl">
                          S
                        </div>
                        <div className="absolute -bottom-2 -right-2 bg-emerald-500 text-white p-2 rounded-xl shadow-xl border border-white/20">
                          <svg
                            className="w-4 h-4"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                          </svg>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-4xl font-black text-slate-900 dark:text-white leading-none mb-2 tracking-tighter">
                          Srinath
                        </h4>
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-rose-500/10 border border-rose-500/20 rounded-full">
                          <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
                          <span className="text-[8px] font-black text-rose-500 uppercase tracking-widest">
                            Academic Excellence Tier 1
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-grow">
                      <div className="bg-slate-50 dark:bg-white/5 rounded-[2.5rem] p-10 flex flex-col items-center justify-center border border-slate-200/50 dark:border-white/5 relative overflow-hidden group/radar shadow-inner">
                        <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/[0.02] to-transparent"></div>
                        <div className="relative w-40 h-40 flex items-center justify-center">
                          <div className="absolute inset-0 border border-slate-200 dark:border-white/10 rounded-full opacity-30 scale-100 animate-pulse"></div>
                          <div className="absolute inset-8 border border-slate-200 dark:border-white/10 rounded-full opacity-20 scale-100"></div>
                          <svg
                            viewBox="-50 -50 100 100"
                            className="w-full h-full rotate-[-18deg] drop-shadow-[0_0_15px_rgba(99,102,241,0.4)]"
                          >
                            <polygon
                              points="0,-45 40,-15 30,40 -30,40 -40,-15"
                              fill="rgba(99,102,241,0.2)"
                              stroke="#6366f1"
                              strokeWidth="2.5"
                            />
                            <circle cx="0" cy="-45" r="2" fill="#6366f1" />
                            <circle cx="40" cy="-15" r="2" fill="#6366f1" />
                            <circle cx="30" cy="40" r="2" fill="#6366f1" />
                            <circle cx="-30" cy="40" r="2" fill="#6366f1" />
                            <circle cx="-40" cy="-15" r="2" fill="#6366f1" />
                          </svg>
                        </div>
                        <p className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.4em] mt-8">
                          Cognitive Spectrum
                        </p>
                      </div>
                      <div className="space-y-1 pt-2">
                        {[
                          {
                            e: "Mathematics",
                            r: "Score: 98/100",
                            t: "2m",
                            g: "bg-emerald-500",
                          },
                          {
                            e: "Institutional Attendance",
                            r: "Status: 100%",
                            t: "1h",
                            g: "bg-indigo-500",
                          },
                        ].map((item, idx) => (
                          <div
                            key={idx}
                            className="p-3 rounded-2xl bg-white dark:bg-white/5 border border-slate-200/50 dark:border-white/10 flex items-center justify-between hover:scale-[1.02] transition-all duration-300 shadow-sm hover:shadow-md"
                          >
                            <div className="flex gap-4 items-center">
                              <div
                                className={`w-1 h-8 rounded-full ${item.g} opacity-40 group-hover:opacity-100`}
                              ></div>
                              <div className="space-y-1">
                                <div className="text-[11px] font-black text-slate-900 dark:text-white uppercase tracking-widest">
                                  {item.e}
                                </div>
                                <div className="text-[9px] font-bold text-slate-400">
                                  {item.t} ago • Verified
                                </div>
                              </div>
                            </div>
                            <div className="text-[11px] font-black text-indigo-600 dark:text-indigo-400">
                              {item.r}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Ultra-luxury Glare */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-white/5 pointer-events-none opacity-50"></div>
              <div className="absolute -top-[100%] -left-[100%] w-[300%] h-[300%] bg-white/20 rotate-[35deg] pointer-events-none opacity-[0.03]"></div>
            </div>
          </FadeIn>
        </div>
      </div>
    </Section>
  );
}
