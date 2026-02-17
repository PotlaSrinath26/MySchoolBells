import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Section } from "../ui/Section";
import { modules, categories } from "../../data/modules";
import { FadeIn } from "../ui/Animations";

import { ArrowLeftIcon } from "@heroicons/react/24/outline";

import { GlowingEffect } from "../ui/glowing-effect";
import NeuralBackground from "../ui/flow-field-background";

import { useTheme } from "../../lib/ThemeContext";

export default function Modules() {
  const { theme } = useTheme();
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredModules = modules.filter(
    (m) => activeCategory === "all" || m.category === activeCategory,
  );

  return (
    <Section
      id="modules"
      className="bg-transparent dark:bg-[#020617] pt-48 pb-32 relative overflow-hidden min-h-screen transition-colors duration-500"
    >
      {/* Neural Background - Full Page fixed */}
      {theme === "dark" && (
        <div className="fixed inset-0 z-0 opacity-40 pointer-events-none transition-opacity">
          <NeuralBackground color="#ec4899" trailOpacity={0.12} speed={0.8} />
        </div>
      )}

      <div className="text-center mb-16 relative z-10">
        <FadeIn>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-left">
            <Link
              to="/"
              className="inline-flex items-center text-slate-500 dark:text-slate-400 hover:text-rose-600 dark:hover:text-rose-400 mb-8 transition-all group font-bold uppercase tracking-widest text-[10px]"
            >
              <ArrowLeftIcon className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Link>
          </div>
          <h2 className="text-4xl lg:text-6xl font-black text-slate-900 dark:text-white mb-6 tracking-tighter transition-colors uppercase">
            Powerful{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-violet-500 to-indigo-600 dark:from-rose-400 dark:via-violet-400 dark:to-indigo-400">
              Modules
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-400 font-bold mb-12 transition-colors uppercase tracking-[0.2em] text-[10px]">
            The most comprehensive school operating system, organized for
            impact.
          </p>

          {/* Category Filter */}
          <div className="flex flex-nowrap sm:flex-wrap items-center sm:justify-center gap-3 mb-16 sm:mb-24 max-w-4xl mx-auto px-4 overflow-x-auto no-scrollbar pb-4 sm:pb-0">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex-shrink-0 px-6 sm:px-8 py-3 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-500 border-2 ${
                  activeCategory === cat.id
                    ? "bg-indigo-600 border-indigo-600 text-white shadow-xl shadow-indigo-500/20 translate-y-[-2px]"
                    : "bg-white/50 dark:bg-white/5 border-slate-100 dark:border-white/10 text-slate-500 dark:text-slate-400 hover:border-rose-500/30 hover:text-rose-600"
                } backdrop-blur-xl shadow-sm`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </FadeIn>
      </div>
      <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative z-10 px-4 transition-all duration-500 overflow-x-auto snap-x snap-mandatory pb-8 md:pb-0 scrollbar-hide">
        {filteredModules.map((module, idx) => (
          <FadeIn
            key={module.id}
            delay={idx * 0.05}
            className="h-full min-w-[85vw] md:min-w-0 snap-center shrink-0"
          >
            <Link to={module.path} className="block h-full group">
              <div className="relative h-full transition-all duration-500 rounded-[2.5rem]">
                <GlowingEffect
                  spread={80}
                  glow={true}
                  disabled={false}
                  proximity={120}
                  inactiveZone={0.01}
                  borderWidth={2}
                />
                <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 dark:border-white/5 h-full relative overflow-hidden group-hover:-translate-y-2 flex flex-col z-10 transition-colors">
                  {/* Image Header */}
                  <div className="relative aspect-[4/3] m-4 mb-0 overflow-hidden rounded-[2rem]">
                    <img
                      src={module.image}
                      alt={module.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
                  </div>

                  <div className="p-8 pt-6 flex-grow flex flex-col">
                    <h3 className="text-xl font-bold text-indigo-600 dark:text-indigo-400 mb-3 group-hover:text-rose-600 transition-colors tracking-tight">
                      {module.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-8 text-[11px] leading-relaxed font-bold line-clamp-2">
                      {module.description}
                    </p>
                    <div className="mt-auto">
                      <span className="text-[9px] font-black text-slate-400 group-hover:text-indigo-600 uppercase tracking-[0.2em] transition-colors flex items-center gap-2">
                        Explore
                        <span className="w-1.5 h-px bg-slate-200 dark:bg-white/10 group-hover:bg-indigo-600 group-hover:w-4 transition-all"></span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
