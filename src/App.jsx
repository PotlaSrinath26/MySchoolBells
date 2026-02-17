import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import SubNavbar from "./components/layout/SubNavbar";
import BottomNav from "./components/layout/BottomNav";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import Challenges from "./components/sections/Challenges";
import Modules from "./components/sections/Modules";
import WhyChoose from "./components/sections/WhyChoose";
import SchoolItems from "./components/sections/SchoolItems";
import About from "./components/sections/About";
import ModuleDetail from "./components/pages/ModuleDetail";
import {
  ERPLogin,
  ERPDashboard,
  UserRegistration,
} from "./components/pages/ERPPortal";
import { useTheme } from "./lib/ThemeContext";
import NeonFlowSection from "./components/sections/NeonFlowSection";
import Dashboards from "./components/sections/Dashboards";
import { ThemeProvider } from "./lib/ThemeContext";
import { AuthProvider } from "./lib/AuthContext";
import FloatingAssistant from "./components/FloatingAssistant";
import { ShuffleHero } from "./components/ui/ShuffleHero";
import Testimonials from "./components/sections/Testimonials";
import AcademicCalendar from "./components/sections/AcademicCalendar";
import AssemblyManagement from "./components/pages/AssemblyManagement";

import FacultyFlow from "./components/pages/FacultyFlow";
import SmartRouteManagement from "./components/pages/SmartRouteManagement";
import ExcellenceGallery from "./components/pages/ExcellenceGallery";

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
      <SubNavbar />
      <ShuffleHero />
      <About />
      <Dashboards />
      <AcademicCalendar />
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
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </ThemeProvider>
  );
}

function AppContent() {
  return (
    <Router>
      <div className="min-h-screen bg-transparent dark:bg-[#020617] transition-colors duration-500 font-sans text-slate-900 dark:text-slate-100 selection:bg-rose-500/30 selection:text-rose-200 pb-32 xl:pb-0">
        <ScrollToTop />
        <Navbar />

        {/* Global Background Animation for Light Theme */}
        <AppBackground />

        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/modules" element={<Modules />} />
            <Route path="/modules/:id" element={<ModuleDetail />} />
            <Route path="/erp/login" element={<ERPLogin />} />
            <Route path="/erp/dashboard" element={<ERPDashboard />} />
            <Route
              path="/erp/admin/user-registration"
              element={<UserRegistration />}
            />
            <Route path="/faculty-flow" element={<FacultyFlow />} />
            <Route path="/smart-routes" element={<SmartRouteManagement />} />
            <Route
              path="/assembly-management"
              element={<AssemblyManagement />}
            />
            <Route path="/excellence-gallery" element={<ExcellenceGallery />} />
          </Routes>
        </main>

        <FloatingAssistant />
        <BottomNav />
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
          opacity-[0.4] will-change-transform
          after:content-[''] after:absolute after:inset-0 after:[background-image:var(--white-gradient),var(--aurora)]
          after:[background-size:200%,_100%] 
          after:animate-aurora after:[background-attachment:fixed]
          absolute -inset-[10px]
          [mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,transparent_70%)]
        "
      ></div>
    </div>
  );
}
