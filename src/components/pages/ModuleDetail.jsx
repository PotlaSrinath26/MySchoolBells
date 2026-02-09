import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { modules, moduleDetails } from "../../data/modules";
import { FadeIn, ScaleIn } from "../ui/Animations";
import { ArrowLeftIcon, CheckCircleIcon } from "@heroicons/react/24/outline";
import { Button } from "../ui/Button";
import NeuralBackground from "../ui/flow-field-background";
import { useTheme } from "../../lib/ThemeContext";
import { GlowingEffect } from "../ui/glowing-effect";

export default function ModuleDetail() {
  const { theme } = useTheme();
  const { id } = useParams();
  const detail = moduleDetails[id];
  const baseModule = modules.find((m) => m.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!detail || !baseModule) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-transparent dark:bg-[#020617] text-slate-900 dark:text-white transition-colors duration-500">
        <NeuralBackground
          className="absolute inset-0 z-0 opacity-50 transition-opacity"
          speed={0.5}
        />
        <div className="text-center relative z-10">
          <h2 className="text-3xl font-bold mb-6">Module Not Found</h2>
          <Link to="/">
            <Button variant="primary" className="border-none">
              Return Home
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const Icon = baseModule.icon;

  return (
    <div className="min-h-screen bg-transparent dark:bg-[#020617] text-slate-600 dark:text-slate-300 relative overflow-hidden transition-colors duration-500">
      {/* Neural Background - Full Page fixed */}
      {theme === "dark" && (
        <div className="fixed inset-0 z-0 opacity-40 pointer-events-none transition-opacity">
          <NeuralBackground color="#818cf8" trailOpacity={0.1} speed={0.7} />
        </div>
      )}

      {/* Hero & Detailed Content Section - Based on img2 */}
      <section className="relative pt-40 pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn>
            <Link
              to="/modules"
              className="inline-flex items-center text-slate-400 dark:text-slate-500 hover:text-indigo-600 dark:hover:text-indigo-400 mb-12 transition-all group font-bold text-[10px] uppercase tracking-widest"
            >
              <ArrowLeftIcon className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Operating System
            </Link>
          </FadeIn>

          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* Left Column: Intelligence & Documentation */}
            <FadeIn delay={0.1}>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-500/10 flex items-center justify-center border border-indigo-100 dark:border-indigo-500/20 shadow-sm">
                  <Icon className="w-7 h-7 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tighter transition-colors">
                  {detail.title}
                </h1>
              </div>

              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-12 font-medium transition-colors">
                {detail.description}
              </p>

              {/* Key Features Box - Styled as per img2 */}
              <div className="bg-slate-50/50 dark:bg-white/[0.02] border border-slate-200/50 dark:border-white/5 rounded-[2.5rem] p-10 mb-16 relative overflow-hidden shadow-sm">
                <h3 className="text-sm font-black text-slate-400 dark:text-slate-500 mb-8 tracking-[0.2em] uppercase flex items-center gap-3">
                  <span className="w-8 h-px bg-indigo-500/30"></span>
                  Key Capabilities
                </h3>
                <div className="grid sm:grid-cols-2 gap-x-10 gap-y-6">
                  {detail.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3 group">
                      <div className="mt-1 shrink-0">
                        <CheckCircleIcon className="w-5 h-5 text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform" />
                      </div>
                      <span className="text-slate-900 dark:text-slate-200 font-bold text-[13px] leading-tight transition-colors">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Institutional Benefits - Styled as per img2 */}
              <div>
                <h3 className="text-sm font-black text-slate-400 dark:text-slate-500 mb-8 tracking-[0.2em] uppercase flex items-center gap-3">
                  <span className="w-8 h-px bg-indigo-500/30"></span>
                  Institutional Benefits
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {detail.benefits.map((benefit, idx) => (
                    <div
                      key={idx}
                      className="p-5 px-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-white/5 shadow-sm hover:shadow-xl hover:border-indigo-500/20 transition-all group flex items-center gap-4"
                    >
                      <div className="w-2.5 h-2.5 rounded-full bg-indigo-600 dark:bg-indigo-400 shrink-0 group-hover:scale-125 transition-transform shadow-[0_0_10px_rgba(79,70,229,0.4)]"></div>
                      <span className="text-slate-900 dark:text-slate-200 font-bold text-[13px] transition-colors">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Right Column: High-Fidelity Visualization */}
            <ScaleIn delay={0.3} className="lg:sticky lg:top-40">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-tr from-indigo-500 to-rose-500 rounded-[4rem] blur-3xl opacity-10 group-hover:opacity-20 transition-opacity"></div>

                <div className="relative rounded-[3rem] overflow-hidden border border-slate-200 dark:border-white/10 aspect-[4/3] bg-white dark:bg-slate-900 shadow-2xl transition-all duration-700 group-hover:scale-[1.02] group-hover:shadow-indigo-500/10">
                  <img
                    src={baseModule.image}
                    alt={detail.title}
                    className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity"></div>
                </div>

                {/* Floating Status Badge */}
                <div className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-800 p-6 rounded-[2rem] shadow-2xl border border-slate-100 dark:border-white/5 flex items-center gap-5 animate-float backdrop-blur-xl">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-600 flex items-center justify-center shadow-lg shadow-indigo-600/20">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="pr-4">
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500">
                      System Core
                    </p>
                    <p className="text-sm font-black text-slate-900 dark:text-white leading-none mt-1 transition-colors">
                      {detail.title}
                    </p>
                  </div>
                </div>
              </div>
            </ScaleIn>
          </div>
        </div>
      </section>

      {/* Explore Other Modules */}
      <section className="py-32 relative z-10 border-t border-slate-200 dark:border-white/5 bg-transparent dark:bg-white/[0.02] transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight transition-colors">
                Explore{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-rose-500 dark:from-indigo-400 dark:to-rose-400">
                  Other Modules
                </span>
              </h2>
              <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-bold text-[10px] uppercase tracking-[0.4em] transition-colors">
                Discover more powerful tools in the school OS ecosystem
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {modules
              .filter((m) => m.id !== id)
              .slice(0, 4)
              .map((m, idx) => (
                <FadeIn key={m.id} delay={idx * 0.1}>
                  <Link to={m.path} className="block group h-full">
                    <div className="relative h-full transition-all duration-500 rounded-[2.5rem]">
                      <GlowingEffect
                        spread={80}
                        glow={true}
                        disabled={false}
                        proximity={120}
                        inactiveZone={0.01}
                        borderWidth={2}
                      />
                      <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 dark:border-white/5 h-full relative overflow-hidden group-hover:-translate-y-2 flex flex-col z-10">
                        {/* Image Header */}
                        <div className="relative aspect-video m-3 mb-0 overflow-hidden rounded-[1.5rem]">
                          <img
                            src={m.image}
                            alt={m.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
                        </div>

                        <div className="p-6 pt-5 flex-grow flex flex-col">
                          <h3 className="text-lg font-bold text-indigo-600 dark:text-indigo-400 mb-2 group-hover:text-rose-600 transition-colors tracking-tight">
                            {m.title}
                          </h3>
                          <p className="text-xs text-slate-600 dark:text-slate-400 mb-4 line-clamp-2">
                            {m.description}
                          </p>
                          <div className="mt-auto">
                            <span className="text-[9px] font-black text-slate-400 group-hover:text-indigo-600 uppercase tracking-widest transition-colors">
                              Explore &rarr;
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </FadeIn>
              ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-40 relative z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-rose-500/[0.03] to-indigo-500/[0.03] transition-colors"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-10 tracking-tight leading-tight transition-colors">
              Ready to automate your <br />
              <span className="text-indigo-600 dark:text-indigo-400">
                {detail.title}?
              </span>
            </h2>
            <div className="flex flex-wrap justify-center gap-6">
              <Button
                variant={theme === "dark" ? "white" : "primary"}
                className="px-10 py-5 text-sm uppercase tracking-widest font-bold border-none transition-all"
              >
                Request Implementation Demo
              </Button>
              <Link to="/#modules">
                <Button
                  variant="outline"
                  className="px-10 py-5 text-sm uppercase tracking-widest font-bold border-slate-200 dark:border-white/20 text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-all font-bold"
                >
                  Explore Ecosystem
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
