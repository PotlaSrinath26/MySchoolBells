import React from "react";
import { Section } from "../ui/Section";
import { Card } from "../ui/Card";
import { challenges } from "../../data/modules";
import { FadeIn } from "../ui/Animations";
import StateLogosCarousel from "./StateLogosCarousel";
import { GlowingEffect } from "../ui/glowing-effect";

export default function Challenges() {
  return (
    <Section
      id="impact"
      className="bg-transparent dark:bg-[#020617] relative overflow-hidden py-32 transition-colors duration-500"
    >
      {/* Animated Radiant Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40 dark:opacity-100">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-600/20 blur-[120px] rounded-full animate-blob"></div>
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-rose-500/10 blur-[150px] rounded-full animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet-600/5 blur-[180px] rounded-full animate-blob animation-delay-4000"></div>
      </div>

      <div className="text-center mb-16 relative z-10">
        <FadeIn>
          {/* <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-indigo-50 dark:bg-white/5 border border-indigo-100 dark:border-white/10 text-rose-600 dark:text-rose-400 text-[10px] font-bold tracking-[0.3em] uppercase">
            Operational Excellence
          </div> */}
          <h2 className="text-4xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight leading-tight transition-colors duration-500">
            Transforming{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-violet-500 to-indigo-600 dark:from-rose-400 dark:via-violet-400 dark:to-indigo-400">
              School Operations
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-slate-900 dark:text-slate-400 font-bold mb-12 transition-colors duration-500">
            Move away from manual inefficiencies to a streamlined, digital-first
            ecosystem.
          </p>
        </FadeIn>
      </div>

      <FadeIn delay={0.2} className="relative z-10">
        <StateLogosCarousel />
      </FadeIn>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {challenges.map((item, index) => (
          <FadeIn key={index} delay={index * 0.1}>
            <div className="relative h-full transition-all duration-500 rounded-[2.5rem]">
              <GlowingEffect
                spread={120}
                glow={true}
                disabled={false}
                proximity={150}
                inactiveZone={0.01}
                borderWidth={4}
              />
              <Card className="bg-white dark:bg-slate-900 p-12 rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_40px_80px_-16px_rgba(244,63,94,0.25)] transition-all duration-500 border-none h-full flex flex-col group relative z-10 transition-colors">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-indigo-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-700 dark:text-slate-400 mb-10 text-sm leading-relaxed font-medium flex-grow transition-colors">
                  {item.description}
                </p>

                <div className="flex items-center text-sm font-bold mt-auto pt-8 border-t border-slate-100 dark:border-white/5 uppercase tracking-widest transition-colors">
                  {/* <span className="bg-rose-50 dark:bg-rose-500/10 text-rose-600 dark:text-rose-400 py-1.5 px-3 rounded-lg text-[10px] mr-3 transition-colors">
                    Solution
                  </span> */}
                  <span className="text-slate-950 dark:text-white text-xs transition-colors">
                    {item.solution}
                  </span>
                </div>
              </Card>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
