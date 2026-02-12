import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  HomeIcon,
  AcademicCapIcon,
  Squares2X2Icon,
  UserIcon,
  AdjustmentsHorizontalIcon,
} from "@heroicons/react/24/outline";
import {
  HomeIcon as HomeIconSolid,
  AcademicCapIcon as AcademicCapIconSolid,
  Squares2X2Icon as Squares2X2IconSolid,
  UserIcon as UserSolid,
  AdjustmentsHorizontalIcon as AdjustmentsSolid,
} from "@heroicons/react/24/solid";
import { useAuth } from "../../lib/AuthContext";
import { useTheme } from "../../lib/ThemeContext";
import { AnimatedShinyText } from "../ui/animated-shiny-text";

export function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}) {
  const baseStyle =
    "inline-flex items-center justify-center px-6 py-3 border text-base font-medium rounded-md transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 overflow-hidden relative group";

  const variants = {
    primary:
      "border-transparent text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-rose-600 dark:hover:bg-rose-700 shadow-lg hover:shadow-xl focus:ring-indigo-500",
    secondary:
      "border-transparent text-indigo-900 bg-indigo-50 hover:bg-indigo-100 dark:text-rose-100 dark:bg-rose-950/30 dark:hover:bg-rose-950/50 shadow-sm focus:ring-indigo-500",
    outline:
      "border-indigo-600 text-indigo-600 bg-transparent hover:bg-indigo-50 dark:border-rose-400 dark:text-rose-400 dark:hover:bg-rose-950/20 focus:ring-indigo-500",
    white:
      "border-transparent text-slate-900 bg-white hover:bg-slate-50 dark:bg-white dark:text-indigo-950 shadow-md focus:ring-white",
  };

  return (
    <button
      className={`${baseStyle} ${variants[variant]} ${className}`}
      {...props}
    >
      <AnimatedShinyText className="text-current dark:via-white/50 via-white/50">
        {children}
      </AnimatedShinyText>
    </button>
  );
}

export default function BottomNav() {
  const { pathname } = useLocation();
  const { user } = useAuth();
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const navItems = [
    {
      name: "Home",
      path: "/",
      icon: HomeIcon,
      activeIcon: HomeIconSolid,
    },
    {
      name: "Modules",
      path: "/modules",
      icon: Squares2X2Icon,
      activeIcon: Squares2X2IconSolid,
    },
    {
      name: "Academy",
      path: "/#about",
      icon: AcademicCapIcon,
      activeIcon: AcademicCapIconSolid,
      isAnchor: true,
    },
    {
      name: "ERP",
      path: user ? "/erp/dashboard" : "/erp/login",
      icon: AdjustmentsHorizontalIcon,
      activeIcon: AdjustmentsSolid,
    },
  ];

  return (
    <div className="xl:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-[999] w-[90%] max-w-lg">
      <div
        className={`flex items-center justify-around p-3 px-6 rounded-[2.5rem] backdrop-blur-3xl border shadow-2xl transition-colors duration-500 ${
          isDark
            ? "bg-[#0a0f1e]/80 border-white/10 shadow-black/40"
            : "bg-white/80 border-slate-200 shadow-indigo-900/10"
        }`}
      >
        {navItems.map((item) => {
          const isActive = item.isAnchor
            ? pathname === "/" &&
              window.location.hash === item.path.replace("/", "")
            : pathname === item.path;

          const Icon = isActive ? item.activeIcon : item.icon;

          return item.isAnchor ? (
            <a
              key={item.name}
              href={item.path}
              className="flex flex-col items-center gap-1 group relative py-1 active:scale-90 transition-transform duration-200"
            >
              <div
                className={`p-2 rounded-2xl transition-all duration-300 ${
                  isActive
                    ? "text-rose-500 scale-110"
                    : isDark
                      ? "text-slate-500 group-hover:text-white"
                      : "text-slate-400 group-hover:text-indigo-950"
                }`}
              >
                <Icon className="w-6 h-6" />
              </div>
              <span
                className={`text-[9px] font-black uppercase tracking-widest transition-colors ${
                  isActive
                    ? "text-rose-500"
                    : isDark
                      ? "text-slate-600 group-hover:text-slate-300"
                      : "text-slate-500 group-hover:text-indigo-950"
                }`}
              >
                {item.name}
              </span>
              {isActive && (
                <div className="absolute -bottom-1 w-1 h-1 rounded-full bg-rose-500"></div>
              )}
            </a>
          ) : (
            <Link
              key={item.name}
              to={item.path}
              className="flex flex-col items-center gap-1 group relative py-1 active:scale-90 transition-transform duration-200"
            >
              <div
                className={`p-2 rounded-2xl transition-all duration-300 ${
                  isActive
                    ? "text-rose-500 scale-110"
                    : isDark
                      ? "text-slate-500 group-hover:text-white"
                      : "text-slate-400 group-hover:text-indigo-950"
                }`}
              >
                <Icon className="w-6 h-6" />
              </div>
              <span
                className={`text-[9px] font-black uppercase tracking-widest transition-colors ${
                  isActive
                    ? "text-rose-500"
                    : isDark
                      ? "text-slate-600 group-hover:text-slate-300"
                      : "text-slate-500 group-hover:text-indigo-950"
                }`}
              >
                {item.name}
              </span>
              {isActive && (
                <div className="absolute -bottom-1 w-1 h-1 rounded-full bg-rose-500"></div>
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
