import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "../layout/BottomNav";
import { useTheme } from "../../lib/ThemeContext";
import { useAuth } from "../../lib/AuthContext";
import { SunIcon, MoonIcon, UserCircleIcon } from "@heroicons/react/24/solid";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { user } = useAuth();
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/#home", type: "anchor" },
    { name: "About", href: "/#about", type: "anchor" },
    { name: "Features", href: "/#features", type: "anchor" },
    { name: "Why Choose Us", href: "/#why-choose", type: "anchor" },
    { name: "Modules", href: "/modules", type: "link" },
  ];
  const isHomePage = pathname === "/";
  const getHref = (href) => {
    if (href.startsWith("/#") && !isHomePage) {
      return href;
    }
    return href;
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-500 ${
        scrolled
          ? "bg-white/95 dark:bg-[#020617]/95 backdrop-blur-xl py-5 shadow-lg shadow-indigo-900/5"
          : "bg-transparent py-8"
      }`}
    >
      <div className="max-w-full mx-auto px-4 sm:px-12 lg:px-16 flex items-center justify-between gap-2 sm:gap-6">
        {/* Logo Section */}
        <Link to="/" className="group flex items-center gap-2 shrink-0">
          {/* <div className="relative w-14 h-14 rounded-3xl flex items-center justify-center  font-serif italic text-3xl group-hover:rotate-12 transition-transform duration-500 shadow-xl shadow-indigo-900/10 overflow-hidden ring-1 ring-slate-100 dark:ring-white/10"> */}
          <img
            src="/Images/MySchool/MySchoolBells/Logo.webp"
            alt="myschool"
            className="w-12 h-12 object-contain p-1"
          />
          <div className="absolute inset-0  blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          {/* </div> */}
          <div className="flex flex-col">
            <span
              className={`text-2xl font-black tracking-tighter leading-none transition-colors duration-500 ${
                theme === "dark" ? "text-white" : "text-indigo-950"
              }`}
            >
              MY SCHOOL BELLS
            </span>
            <span className="text-[8px] font-bold text-orange-500 uppercase tracking-[0.3em] leading-tight transition-colors duration-500">
              BELL-BELL MANAGE IT ALL
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden xl:flex items-center gap-1">
          {navLinks.map((link) =>
            link.type === "link" ? (
              <Link
                key={link.name}
                to={link.href}
                className={`px-6 py-3 text-[11px] font-black rounded-xl transition-all duration-300 uppercase tracking-[0.2em] relative group/link ${
                  theme === "dark"
                    ? "text-slate-400 hover:text-white"
                    : "text-slate-700 hover:text-indigo-950"
                }`}
              >
                {link.name}
                <span className="absolute bottom-2 left-6 right-6 h-0.5 bg-rose-500 transform scale-x-0 group-hover/link:scale-x-100 transition-transform duration-300"></span>
              </Link>
            ) : (
              <a
                key={link.name}
                href={getHref(link.href)}
                className={`px-6 py-3 text-[11px] font-black rounded-xl transition-all duration-300 uppercase tracking-[0.2em] relative group/link ${
                  theme === "dark"
                    ? "text-slate-400 hover:text-white"
                    : "text-slate-700 hover:text-indigo-950"
                }`}
              >
                {link.name}
                <span className="absolute bottom-2 left-6 right-6 h-0.5 bg-rose-500 transform scale-x-0 group-hover/link:scale-x-100 transition-transform duration-300"></span>
              </a>
            ),
          )}
        </div>

        {/* Actions Section */}
        <div className="flex items-center gap-2 sm:gap-6 shrink-0">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className={`p-2 sm:p-3 rounded-xl sm:rounded-2xl transition-all duration-500 border group relative overflow-hidden haptic-btn ${
              theme === "dark"
                ? "bg-white/5 text-yellow-400 hover:bg-white/10 border-white/5 shadow-[0_0_20px_rgba(250,204,21,0.2)]"
                : "bg-white text-indigo-600 hover:bg-slate-50 border-slate-200 shadow-[0_10px_30px_rgba(79,70,229,0.1)]"
            }`}
          >
            {theme === "dark" ? (
              <SunIcon className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:rotate-90 duration-700 relative z-10" />
            ) : (
              <MoonIcon className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:-rotate-12 duration-700 relative z-10" />
            )}
            <div
              className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                theme === "dark" ? "bg-yellow-400/10" : "bg-indigo-500/5"
              }`}
            ></div>
          </button>

          <Link
            to={user ? "/erp/dashboard" : "/erp/login"}
            className="hidden sm:block"
          >
            <Button
              variant={theme === "dark" ? "white" : "primary"}
              className="haptic-btn py-2.5 sm:py-3.5 px-4 sm:px-10 shadow-2xl transition-all text-[9px] sm:text-[11px] font-black uppercase tracking-[0.1em] sm:tracking-[0.2em] border-none group relative overflow-hidden ring-1 ring-white/10"
            >
              <span className="relative z-10">
                {user ? "Dashboard" : "ERP Login"}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-rose-500 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
