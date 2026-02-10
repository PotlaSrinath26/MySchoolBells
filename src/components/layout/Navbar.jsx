import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "../ui/Button";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useTheme } from "../../lib/ThemeContext";
import { useAuth } from "../../lib/AuthContext";
import { SunIcon, MoonIcon, UserCircleIcon } from "@heroicons/react/24/solid";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { user } = useAuth();
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
        scrolled
          ? "bg-white/95 dark:bg-[#020617]/95 backdrop-blur-xl border-b border-slate-200 dark:border-white/10 py-5 shadow-lg shadow-indigo-900/5"
          : "bg-transparent py-8"
      }`}
    >
      <div className="max-w-full mx-auto px-6 sm:px-12 lg:px-16 flex items-center justify-between gap-6">
        {/* Logo Section */}
        <Link to="/" className="group flex items-center gap-4 shrink-0">
          <div className="relative w-14 h-14 rounded-3xl flex items-center justify-center text-indigo-950 font-serif italic text-3xl group-hover:rotate-12 transition-transform duration-500 shadow-xl shadow-indigo-900/10 overflow-hidden ring-1 ring-slate-100 dark:ring-white/10">
            <img
              src="/Images/MySchool/MySchoolBells/Logo.webp"
              alt="myschool"
              className="w-12 h-12 object-contain p-1"
            />
            <div className="absolute inset-0 bg-rose-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
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
        <div className="flex items-center gap-6 shrink-0">
          <div className="hidden md:flex h-6 w-px bg-slate-200 dark:bg-white/10 mx-2"></div>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className={`p-3 rounded-2xl transition-all duration-500 border group ${
              theme === "dark"
                ? "bg-white/5 text-yellow-400 hover:bg-white/10 border-white/5"
                : "bg-slate-100 text-indigo-600 hover:bg-slate-200 border-slate-200 shadow-sm"
            }`}
          >
            {theme === "dark" ? (
              <SunIcon className="w-5 h-5 transition-transform group-hover:rotate-90 duration-700" />
            ) : (
              <MoonIcon className="w-5 h-5 transition-transform group-hover:-rotate-12 duration-700" />
            )}
          </button>

          <Link to={user ? "/erp/dashboard" : "/erp/login"}>
            <Button
              variant={theme === "dark" ? "white" : "primary"}
              className="py-3.5 px-10 shadow-2xl transition-all text-[11px] font-black uppercase tracking-[0.2em] border-none group relative overflow-hidden ring-1 ring-white/10"
            >
              <span className="relative z-10">
                {user ? "Dashboard" : "ERP Login"}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-rose-500 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </Button>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-3 rounded-2xl bg-slate-100 dark:bg-white/5 text-slate-900 dark:text-white transition-all transform hover:scale-105 active:scale-95 shadow-sm border border-slate-200 dark:border-white/10"
          >
            {mobileMenuOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-0 left-0 w-full h-screen bg-white/95 dark:bg-[#020617]/95 backdrop-blur-2xl z-[90] xl:hidden flex flex-col p-8 pt-32 animate-in slide-in-from-right duration-500">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) =>
              link.type === "link" ? (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`text-3xl font-black p-6 rounded-[2.5rem] transition-all uppercase tracking-[0.1em] border-b border-slate-100 dark:border-white/5 ${
                    theme === "dark"
                      ? "text-slate-500 hover:text-white hover:bg-white/5"
                      : "text-slate-400 hover:text-indigo-950 hover:bg-indigo-50"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={getHref(link.href)}
                  className={`text-3xl font-black p-6 rounded-[2.5rem] transition-all uppercase tracking-[0.1em] border-b border-slate-100 dark:border-white/5 ${
                    theme === "dark"
                      ? "text-slate-500 hover:text-white hover:bg-white/5"
                      : "text-slate-400 hover:text-indigo-950 hover:bg-indigo-50"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ),
            )}
            <div className="mt-12 px-6">
              <Link
                to={user ? "/erp/dashboard" : "/erp/login"}
                onClick={() => setMobileMenuOpen(false)}
              >
                <Button
                  variant={theme === "dark" ? "white" : "primary"}
                  className="w-full py-7 rounded-[2.5rem] font-black uppercase tracking-widest text-lg border-none shadow-2xl"
                >
                  {user ? "Go to Dashboard" : "ERP Login Portal"}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
