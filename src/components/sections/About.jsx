import React from "react";
import { Section } from "../ui/Section";
import { FadeIn, ScaleIn } from "../ui/Animations";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

export default function About() {
  const points = [
    "Admission to Alumni journey",
    "Comprehensive Student data Management",
    "Digital Academic Performance",
    "Automated Record Management",
    "Streamlined Student Progress",
  ];

  return (
    <Section
      id="about"
      className="bg-transparent dark:bg-[#020617] py-10 relative overflow-hidden transition-colors duration-500"
    >
      {/* Background Decorative Blur */}
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-indigo-500/5 blur-[150px] rounded-full pointer-events-none -translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Content */}
          <FadeIn>
            <h2 className="text-4xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-8 tracking-tight leading-tight transition-colors">
              Step-By-Step{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-indigo-600 dark:from-rose-400 dark:to-indigo-400">
                Get the Success.
              </span>
            </h2>
            <div className="space-y-6 text-lg text-slate-800 dark:text-slate-300 font-medium leading-relaxed mb-10">
              <p>
                My School Bells is a comprehensive School ERP platform designed
                to simplify and streamline every aspect of school management
                from student admissions to academic performance, communication,
                and daily operations.
              </p>
              <p>
                Built for schools, institutions, teachers, parents, and
                students. MySchoolBells brings all school activities onto a
                single, secure, and easy-to-use digital platform.
              </p>
            </div>
            <div className="flex flex-col gap-4 mb-10">
              {points.map((point, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircleIcon className="w-5 h-5 text-rose-500 flex-shrink-0" />
                  <span className="text-sm text-slate-950 dark:text-slate-300 font-bold">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </FadeIn>
          {/* Right Image */}
          <ScaleIn delay={0.2} className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-tr from-rose-500/20 to-indigo-500/20 rounded-[3rem] blur-2xl opacity-50 group-hover:opacity-80 transition-opacity"></div>
            <div className="relative rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
              <img
                src="https://www.eurokidsindia.com/blog/wp-content/uploads/2023/10/improve-academic-performance.jpg"
                alt="School Management"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/60 via-transparent to-transparent"></div>
            </div>
          </ScaleIn>
        </div>
      </div>
    </Section>
  );
}
