import React from "react";
import TubesBackground from "../ui/neon-flow";

export default function NeonFlowSection() {
  return (
    <div className="w-full h-[60vh] min-h-[500px] relative overflow-hidden bg-[#020617]">
      <TubesBackground className="bg-[#020617] dark:bg-[#020617]">
        <div className="flex flex-col items-center justify-center w-full h-full gap-6 text-center px-4">
          <div className="space-y-4 pointer-events-auto cursor-default">
            <h2 className="text-4xl md:text-7xl font-bold tracking-tighter text-white drop-shadow-[0_0_20px_rgba(0,0,0,0.8)] select-none transition-colors flex flex-col gap-2">
              <span>Powered</span>
                   <span>By</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f967fb] via-[#6958d5] to-[#53bc28]">
                VisdomWaves
              </span>
            </h2>
            <p className="text-white/70 max-w-xl mx-auto text-sm md:text-lg font-light transition-colors mt-4">
              Driven by Vision
            </p>
          </div>

          <div className="absolute bottom-12 flex flex-col items-center gap-2 text-white/40 animate-pulse pointer-events-none transition-colors">
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold">
              Move cursor to interact • Click to randomize
            </span>
          </div>
        </div>
      </TubesBackground>
    </div>
  );
}
