import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const platformLinks = [
    { name: "Home Dashboard", href: "/" },
    { name: "Powerful Modules", href: "/modules" },
    { name: "System Features", href: "/#features" },
    { name: "Personalised Dashboards", href: "/#dashboards" },
    { name: "Key Challenges", href: "/#impact" },
    { name: "Why Choose Us", href: "/#why-us" },
  ];

  const ecosystemLinks = [
    { name: "Student Modules", href: "/modules" },
    { name: "Parent Modules", href: "/modules" },
    { name: "School Management", href: "/modules" },
    { name: "Inventory & Assets", href: "/#school-items" },
    { name: "Implementation Demo", href: "/modules" },
  ];

  return (
    <footer className="bg-slate-50 dark:bg-indigo-950 text-slate-600 dark:text-slate-400 py-24 border-t border-slate-200 dark:border-white/5 relative overflow-hidden transition-colors duration-500">
      {/* Decorative background glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-rose-500/5 blur-[120px] rounded-full pointer-events-none transition-colors"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-violet-500/5 blur-[120px] rounded-full pointer-events-none transition-colors"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 lg:gap-8 mb-20">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-indigo-950 font-serif italic text-2xl shadow-xl shadow-indigo-900/10">
                <img
                  src="/Images/MySchool/MySchoolBells/Logo.webp"
                  alt="myschool"
                />
              </div>
              <span className="text-xl font-bold text-slate-900 dark:text-white tracking-widest uppercase transition-colors">
                MY SCHOOL BELLS
              </span>
            </div>
            <p className="text-base leading-relaxed mb-10 text-slate-600 dark:text-slate-400 max-w-xs font-light transition-colors">
              MySchoolBells brings all school activities onto a single, secure,
              and easy-to-use digital platform.
            </p>
          </div>
          <div>
            <h4 className="text-slate-900 dark:text-white font-bold mb-8 text-[10px] uppercase tracking-[0.2em] border-l-2 border-rose-500 pl-4 transition-colors">
              Navigation
            </h4>
            <ul className="space-y-4">
              {platformLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-600 dark:text-slate-400 hover:text-rose-600 dark:hover:text-rose-400 hover:translate-x-1 transition-all inline-block font-medium"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 dark:text-white font-bold mb-8 text-[10px] uppercase tracking-[0.2em] border-l-2 border-violet-500 pl-4 transition-colors">
              Ecosystem
            </h4>
            <ul className="space-y-4">
              {ecosystemLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-600 dark:text-slate-400 hover:text-rose-600 dark:hover:text-rose-400 hover:translate-x-1 transition-all inline-block font-medium"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 dark:text-white font-bold mb-8 text-[10px] uppercase tracking-[0.2em] border-l-2 border-indigo-400 pl-4 transition-colors">
              Global Support
            </h4>
            <ul className="space-y-6 text-sm">
              <li className="flex flex-col gap-1">
                <span className="text-[10px] text-slate-500 dark:text-slate-500 uppercase tracking-widest font-bold transition-colors">
                  Connect with us
                </span>
                <span className="text-slate-900 dark:text-white font-medium hover:text-rose-600 dark:hover:text-rose-400 transition-colors cursor-pointer">
                  support@myschoolbells.com
                </span>
              </li>
              <li className="flex flex-col gap-1">
                <span className="text-[10px] text-slate-500 dark:text-slate-500 uppercase tracking-widest font-bold transition-colors">
                  Contact Number
                </span>
                <span className="text-slate-900 dark:text-white font-medium transition-colors">
                  +91-1234567890
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-200 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 transition-colors">
          <div className="text-[10px] font-bold text-slate-500 dark:text-slate-600 uppercase tracking-[0.3em] transition-colors">
            &copy; {currentYear} MY SCHOOL BELLS ERP &bull; DEFINING EDUCATIONAL
            EXCELLENCE
          </div>
          <div className="flex gap-8 text-[10px] font-bold text-slate-500 dark:text-slate-600 uppercase tracking-widest">
            <a
              href="#"
              className="hover:text-indigo-600 dark:hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-indigo-600 dark:hover:text-white transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="hover:text-indigo-600 dark:hover:text-white transition-colors"
            >
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
