import React from "react";
import { Link } from "react-router-dom";
import { Section } from "../ui/Section";
import { modules } from "../../data/modules";
import { FadeIn } from "../ui/Animations";
import { Button } from "../layout/BottomNav";

import { GlowingEffect } from "../ui/glowing-effect";

export default function SchoolItems() {
  const schoolItems = modules.filter((m) => m.category === "services");

  return (
    <Section
      id="school-items"
      className="bg-transparent dark:bg-[#020617] py-32 relative overflow-hidden transition-colors duration-500"
    >
      {/* Background Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-rose-500/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <FadeIn>
              <h2 className="text-4xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight leading-tight transition-colors">
                Essential{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-violet-600 dark:from-rose-400 dark:to-violet-400">
                  School Items
                </span>
              </h2>
              <p className="text-lg text-slate-800 dark:text-slate-400 font-medium transition-colors">
                Digital and physical products that integrate perfectly with your
                institution's daily workflow.
              </p>
            </FadeIn>
          </div>
          <FadeIn delay={0.2}>
            <Link to="/modules">
              <Button
                variant="outline"
                className="border-indigo-100 dark:border-white/10 text-indigo-900 dark:text-white hover:bg-slate-100 dark:hover:bg-white/5 uppercase tracking-widest text-xs font-bold px-8 transition-all"
              >
                View All Modules
              </Button>
            </Link>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {schoolItems.slice(0, 6).map((item, idx) => (
            <FadeIn key={item.id} delay={idx * 0.1}>
              <Link to={item.path} className="group block h-full">
                <div className="relative h-full rounded-[2.5rem] transition-all duration-500">
                  <GlowingEffect
                    spread={120}
                    glow={true}
                    disabled={false}
                    proximity={150}
                    inactiveZone={0.01}
                    borderWidth={4}
                  />
                  <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden border border-indigo-100 dark:border-white/10 bg-indigo-50/50 dark:bg-white/5 backdrop-blur-sm transition-all duration-500 hover:border-rose-500/30 group-hover:-translate-y-2 shadow-2xl z-10 h-full">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover opacity-60 dark:opacity-60 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 dark:from-[#020617] dark:via-[#020617]/40 to-transparent transition-colors duration-500"></div>
                    <div className="absolute inset-0 p-8 flex flex-col justify-end">
                      <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-4 shadow-xl group-hover:bg-rose-500 group-hover:text-white transition-all duration-300">
                        <item.icon className="w-6 h-6 text-indigo-600 group-hover:text-white transition-colors" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-rose-400 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm text-slate-300 dark:text-slate-400 font-light line-clamp-2 transition-colors">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </Section>
  );
}
