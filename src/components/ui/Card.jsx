import React from "react";

export function Card({ children, className = "", hover = true }) {
  return (
    <div
      className={`bg-white dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-white/5 shadow-sm overflow-hidden transition-colors duration-500 ${hover ? "transition-all duration-300 hover:shadow-xl hover:-translate-y-1" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
