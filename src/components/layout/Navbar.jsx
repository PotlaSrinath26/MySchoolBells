import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "../layout/BottomNav";
import { useTheme } from "../../lib/ThemeContext";
import { useAuth } from "../../lib/AuthContext";
import { SunIcon, MoonIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import {
  ChevronDown,
  Users,
  MapPin,
  Mic2,
  Sparkles,
  Box,
  CircuitBoard,
} from "lucide-react";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { user } = useAuth();
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/#home", type: "anchor" },
    {
      name: "Features",
      type: "dropdown",
      items: [
        {
          name: "Faculty Flow",
          href: "/faculty-flow",
          icon: Users,
          desc: "Staff continuity system",
        },
        {
          name: "Smart Routes",
          href: "/smart-routes",
          icon: MapPin,
          desc: "Transport management",
        },
        {
          name: "Assembly Manager",
          href: "/assembly-management",
          icon: Mic2,
          desc: "Morning routines",
        },
        {
          name: "Excellence Gallery",
          href: "/excellence-gallery",
          icon: Sparkles,
          desc: "Live digital showcase",
        },
        {
          name: "ERP Modules",
          href: "/modules",
          icon: Box,
          desc: "Full suite tools",
        },
      ],
    },
    { name: "Why Choose Us", href: "/#why-choose", type: "anchor" },
    { name: "About", href: "/#about", type: "anchor" },
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
          ? "bg-white/95 dark:bg-[#020617]/95 backdrop-blur-xl py-3 shadow-lg shadow-indigo-900/5"
          : "bg-transparent py-6"
      }`}
    >
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between">
        {/* Logo Section */}
        <Link to="/" className="group flex items-center gap-2 shrink-0">
          <img
            src="/Images/MySchool/MySchoolBells/Logo.webp"
            alt="myschool"
            className="w-10 h-10 object-contain p-0.5"
          />
          <div className="flex flex-col">
            <span
              className={`text-xl font-black tracking-tight leading-none transition-colors duration-500 ${
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
        <div className="hidden lg:flex items-center gap-1 bg-white/50 dark:bg-white/5 rounded-full px-2 py-1.5 border border-white/20 backdrop-blur-md shadow-sm">
          {navLinks.map((link) => (
            <div
              key={link.name}
              className="relative group"
              onMouseEnter={() => setActiveDropdown(link.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              {link.type === "dropdown" ? (
                <button
                  className={`px-5 py-2.5 text-sm font-bold rounded-full transition-all duration-300 flex items-center gap-1.5 ${
                    theme === "dark"
                      ? "text-slate-300 hover:text-white hover:bg-white/10"
                      : "text-slate-600 hover:text-indigo-950 hover:bg-white/80"
                  }`}
                >
                  {link.name}
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-300 ${activeDropdown === link.name ? "rotate-180" : ""}`}
                  />
                </button>
              ) : link.type === "link" ? (
                <Link
                  to={link.href}
                  className={`px-5 py-2.5 text-sm font-bold rounded-full transition-all duration-300 block ${
                    theme === "dark"
                      ? "text-slate-300 hover:text-white hover:bg-white/10"
                      : "text-slate-600 hover:text-indigo-950 hover:bg-white/80"
                  }`}
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  href={getHref(link.href)}
                  className={`px-5 py-2.5 text-sm font-bold rounded-full transition-all duration-300 block ${
                    theme === "dark"
                      ? "text-slate-300 hover:text-white hover:bg-white/10"
                      : "text-slate-600 hover:text-indigo-950 hover:bg-white/80"
                  }`}
                >
                  {link.name}
                </a>
              )}

              {/* Dropdown Menu */}
              {link.type === "dropdown" && (
                <div
                  className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 w-64 transition-all duration-300 origin-top
                            ${activeDropdown === link.name ? "opacity-100 scale-100 visible" : "opacity-0 scale-95 invisible pointer-events-none"}
                        `}
                >
                  <div className="bg-white dark:bg-[#0F1623] rounded-2xl p-2 shadow-xl border border-slate-100 dark:border-white/10 overflow-hidden ring-1 ring-black/5">
                    {link.items.map((item, i) => (
                      <Link
                        key={i}
                        to={item.href}
                        className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-white/5 transition-colors group/item"
                      >
                        <div className="w-8 h-8 rounded-lg bg-indigo-50 dark:bg-indigo-900/20 flex items-center justify-center text-indigo-600 dark:text-indigo-400 group-hover/item:bg-indigo-600 group-hover/item:text-white transition-colors">
                          <item.icon className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-slate-900 dark:text-white">
                            {item.name}
                          </div>
                          <div className="text-[10px] font-medium text-slate-500 dark:text-slate-400">
                            {item.desc}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Actions Section */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={toggleTheme}
            className={`p-2.5 rounded-full transition-all duration-300 ${
              theme === "dark"
                ? "bg-white/5 text-yellow-400 hover:bg-white/10"
                : "bg-slate-100 text-indigo-600 hover:bg-slate-200"
            }`}
          >
            {theme === "dark" ? (
              <SunIcon className="w-5 h-5" />
            ) : (
              <MoonIcon className="w-5 h-5" />
            )}
          </button>

          <Link
            to={user ? "/erp/dashboard" : "/erp/login"}
            className="hidden sm:block"
          >
            <Button
              variant={theme === "dark" ? "white" : "primary"}
              className="py-2.5 px-6 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg shadow-indigo-500/20 border-none"
            >
              {user ? "Dashboard" : "ERP Login"}
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
