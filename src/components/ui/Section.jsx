import React from "react";

export function Section({ children, className = "", id = "" }) {
  return (
    <section id={id} className={`py-20 relative overflow-hidden ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {children}
      </div>
    </section>
  );
}
