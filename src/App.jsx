import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import Challenges from "./components/sections/Challenges";
import Modules from "./components/sections/Modules";
import WhyChoose from "./components/sections/WhyChoose";
import SchoolItems from "./components/sections/SchoolItems";
import About from "./components/sections/About";
import ModuleDetail from "./components/pages/ModuleDetail";
import { useTheme } from "./lib/ThemeContext";
import { BackgroundGradientAnimation } from "./components/ui/background-gradient-animation";
import NeonFlowSection from "./components/sections/NeonFlowSection";
import Dashboards from "./components/sections/Dashboards";
import { GlowingEffectDemo } from "./components/sections/GlowingEffectDemo";
import { ThemeProvider } from "./lib/ThemeContext";
import FloatingAssistant from "./components/FloatingAssistant";
import { AuroraBackgroundDemo } from "./components/sections/AuroraBackgroundDemo";
import { ShuffleHero } from "./components/ui/ShuffleHero";
import Testimonials from "./components/sections/Testimonials";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function HomePage() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <>
      <Hero />
      <NeonFlowSection />
      <ShuffleHero />
      <About />
      <Dashboards />
      <Challenges />
      <SchoolItems />
      <Testimonials />
      <WhyChoose />
    </>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

function AppContent() {
  return (
    <Router>
      <div className="min-h-screen bg-transparent dark:bg-[#020617] transition-colors duration-500 font-sans text-slate-900 dark:text-slate-100 selection:bg-rose-500/30 selection:text-rose-200">
        <ScrollToTop />
        <Navbar />

        {/* Global Background Animation for Light Theme */}
        <AppBackground />

        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/modules" element={<Modules />} />
            <Route path="/modules/:id" element={<ModuleDetail />} />
            <Route path="/glowing-demo" element={<GlowingEffectDemo />} />
            <Route path="/aurora-demo" element={<AuroraBackgroundDemo />} />
          </Routes>
        </main>

        <FloatingAssistant />
        <Footer />
      </div>
    </Router>
  );
}

function AppBackground() {
  const { theme } = useTheme();

  if (theme !== "light") return null;

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <div
        className="
          [--white-gradient:repeating-linear-gradient(100deg,var(--white)_0%,var(--white)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--white)_16%)]
          [--aurora:repeating-linear-gradient(100deg,var(--blue-500)_10%,var(--indigo-300)_15%,var(--blue-300)_20%,var(--violet-200)_25%,var(--blue-400)_30%)]
          [background-image:var(--white-gradient),var(--aurora)]
          [background-size:300%,_200%]
          [background-position:50%_50%,50%_50%]
          filter blur-[10px] invert
          after:content-[''] after:absolute after:inset-0 after:[background-image:var(--white-gradient),var(--aurora)]
          after:[background-size:200%,_100%] 
          after:animate-aurora after:[background-attachment:fixed] after:mix-blend-difference
          absolute -inset-[10px] opacity-50 will-change-transform
          [mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)]
        "
      ></div>
    </div>
  );
}
