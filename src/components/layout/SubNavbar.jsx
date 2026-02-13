import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, LayoutGrid } from "lucide-react";
import { cn } from "../../lib/utils";
import { useTheme } from "../../lib/ThemeContext";

const SubNavbar = ({
  productName = "My School Bells",
  items = [
    { label: "Our Vision", id: "about" },
    { label: "Transforming Schools", id: "impact" },
    { label: "All Modules", id: "school-items" },
    { label: "Advantages", id: "why-choose" },
  ],
  cta = { text: "ERP Login", link: "/ERPLogin" },
  activeIdOverride = null,
}) => {
  const { theme } = useTheme();
  const [activeId, setActiveId] = useState(items[0]?.id);
  const location = useLocation();

  const isDark = theme === "dark";

  // Debug log to check if component mounts
  useEffect(() => {
    console.log("SubNavbar mounted, theme:", theme);
  }, [theme]);

  // Handle scroll for active section highlighting
  useEffect(() => {
    const handleScroll = () => {
      const offset = 150;
      let current = null;

      for (const item of items) {
        const section = document.getElementById(item.id);
        if (section) {
          // Check if we have scrolled past the start of this section (minus offset)
          // We iterate in order, so the last matching section will be set as current
          const top = section.offsetTop - offset;
          if (window.scrollY >= top) {
            current = item.id;
          }
        }
      }

      // Fallback to the first item if we are at the very top
      if (!current && items.length > 0) {
        current = items[0].id;
      }

      if (current) setActiveId(current);
    };

    // Trigger once on mount to set initial state
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [items]);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const yOffset = -150;
      const y =
        section.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setActiveId(id);
  };

  return (
    <>
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={cn(
          "sticky top-[64px] sm:top-[80px] z-[800] transition-all duration-300 border-b py-3 shadow-lg backdrop-blur-md", // Increased py-2 to py-3
          isDark
            ? "bg-[#020617]/80 border-white/10 text-white"
            : "bg-white/90 border-slate-200 text-slate-900",
        )}
      >
        <div className="max-w-[1440px] mx-auto px-4 lg:px-8 flex items-center justify-between gap-4">
          {/* Left: Product Name (Static) */}
          <div className="flex items-center gap-2 font-black uppercase tracking-widest text-sm sm:text-base shrink-0">
            <LayoutGrid
              size={20}
              className={isDark ? "text-slate-400" : "text-slate-500"}
            />
            <span className="hidden sm:inline-block">{productName}</span>
          </div>

          {/* Center: Navigation Links */}
          <div className="hidden md:flex items-center justify-center">
            <div
              className={cn(
                "flex items-center gap-1 p-1.5 rounded-full border",
                isDark
                  ? "bg-white/5 border-white/5"
                  : "bg-slate-100 border-slate-200",
              )}
            >
              {items.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={cn(
                    "px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wide transition-all duration-300 relative",
                    activeId === item.id
                      ? isDark
                        ? "text-black bg-white shadow-sm"
                        : "text-white bg-indigo-600 shadow-sm"
                      : isDark
                        ? "text-slate-400 hover:text-white hover:bg-white/10"
                        : "text-slate-500 hover:text-indigo-900 hover:bg-white",
                  )}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Right: CTA */}
          <div className="flex items-center gap-4">
            <Link
              to={cta.link}
              className={cn(
                "flex items-center gap-2 px-6 py-2.5 text-sm md:text-base font-bold rounded-full transition-all group whitespace-nowrap shadow-lg",
                isDark
                  ? "bg-gradient-to-r from-rose-500 to-indigo-600 text-white hover:shadow-indigo-500/25"
                  : "bg-indigo-600 hover:bg-indigo-700 text-white shadow-indigo-500/20",
              )}
            >
              {cta.text}
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>
        </div>
        {/* Mobile Horizontal Scroll Menu */}
        <div
          className={cn(
            "md:hidden w-full overflow-x-auto scrollbar-hide border-t mt-2",
            isDark ? "border-white/5" : "border-slate-200",
          )}
        >
          <div className="flex items-center gap-4 px-4 py-3 w-max mx-auto">
            {items.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  "text-xs font-bold uppercase tracking-wider transition-colors whitespace-nowrap pb-1 border-b-2",
                  activeId === item.id
                    ? isDark
                      ? "text-white border-white"
                      : "text-indigo-600 border-indigo-600"
                    : isDark
                      ? "text-slate-500 border-transparent hover:text-slate-300"
                      : "text-slate-400 border-transparent hover:text-slate-600",
                )}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default SubNavbar;
