import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../lib/AuthContext";
import { useTheme } from "../../lib/ThemeContext";
import {
  ArrowRightOnRectangleIcon,
  UserCircleIcon,
  AcademicCapIcon,
  ClockIcon,
  CalendarDaysIcon,
  ChartBarIcon,
  BellAlertIcon,
  BookOpenIcon,
  CurrencyRupeeIcon,
  EyeIcon,
  EyeSlashIcon,
  UserPlusIcon,
  ChevronLeftIcon,
  UserIcon,
  UsersIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/solid";

// --- DASHBOARD DATA ---
const roleModules = {
  admin: [
    {
      title: "Student Management",
      desc: "Admissions, Records & Profiles",
      icon: AcademicCapIcon,
      color: "indigo",
    },
    {
      title: "User Registration",
      desc: "Create Staff & Student Accounts",
      icon: UserCircleIcon,
      color: "violet",
    },
    {
      title: "Fee & Finance",
      desc: "Payments, Invoices & Reports",
      icon: CurrencyRupeeIcon,
      color: "emerald",
    },
    {
      title: "Staff Management",
      desc: "Teachers, Staff & Payroll",
      icon: UserCircleIcon,
      color: "violet",
    },
    {
      title: "Analytics Dashboard",
      desc: "Institutional Performance",
      icon: ChartBarIcon,
      color: "rose",
    },
    {
      title: "Announcements",
      desc: "Notices & Communications",
      icon: BellAlertIcon,
      color: "amber",
    },
    {
      title: "Timetable",
      desc: "Schedule Management",
      icon: CalendarDaysIcon,
      color: "cyan",
    },
  ],
  teacher: [
    {
      title: "My Classes",
      desc: "View & Manage Classes",
      icon: BookOpenIcon,
      color: "indigo",
    },
    {
      title: "Attendance",
      desc: "Mark & Track Attendance",
      icon: ClockIcon,
      color: "emerald",
    },
    {
      title: "Exam & Results",
      desc: "Grades & Assessments",
      icon: ChartBarIcon,
      color: "violet",
    },
    {
      title: "Timetable",
      desc: "My Schedule",
      icon: CalendarDaysIcon,
      color: "rose",
    },
    {
      title: "Announcements",
      desc: "Notices & Circulars",
      icon: BellAlertIcon,
      color: "amber",
    },
    {
      title: "Leave Management",
      desc: "Apply & Track Leaves",
      icon: CalendarDaysIcon,
      color: "cyan",
    },
  ],
  student: [
    {
      title: "My Profile",
      desc: "Personal & Academic Info",
      icon: UserCircleIcon,
      color: "indigo",
    },
    {
      title: "Attendance",
      desc: "View My Attendance",
      icon: ClockIcon,
      color: "emerald",
    },
    {
      title: "Results",
      desc: "Exam Scores & Reports",
      icon: ChartBarIcon,
      color: "violet",
    },
    {
      title: "Timetable",
      desc: "Class Schedule",
      icon: CalendarDaysIcon,
      color: "rose",
    },
    {
      title: "Fee Details",
      desc: "Payment Status & History",
      icon: CurrencyRupeeIcon,
      color: "amber",
    },
    {
      title: "Homework",
      desc: "Assignments & Diary",
      icon: BookOpenIcon,
      color: "cyan",
    },
  ],
  parent: [
    {
      title: "Child's Profile",
      desc: "Academic & Personal Info",
      icon: UserCircleIcon,
      color: "indigo",
    },
    {
      title: "Attendance",
      desc: "Track Child's Attendance",
      icon: ClockIcon,
      color: "emerald",
    },
    {
      title: "Results",
      desc: "View Exam Performance",
      icon: ChartBarIcon,
      color: "violet",
    },
    {
      title: "Fee Payments",
      desc: "Pay Fees Online",
      icon: CurrencyRupeeIcon,
      color: "rose",
    },
    {
      title: "Notifications",
      desc: "School Updates & Alerts",
      icon: BellAlertIcon,
      color: "amber",
    },
    {
      title: "Transport",
      desc: "Bus Tracking & Routes",
      icon: CalendarDaysIcon,
      color: "cyan",
    },
  ],
};

const colorMap = {
  indigo: {
    bg: "bg-indigo-500/10",
    border: "border-indigo-500/20",
    text: "text-indigo-500",
    hover: "hover:border-indigo-500/40",
  },
  emerald: {
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    text: "text-emerald-500",
    hover: "hover:border-emerald-500/40",
  },
  violet: {
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
    text: "text-violet-500",
    hover: "hover:border-violet-500/40",
  },
  rose: {
    bg: "bg-rose-500/10",
    border: "border-rose-500/20",
    text: "text-rose-500",
    hover: "hover:border-rose-500/40",
  },
  amber: {
    bg: "bg-amber-500/10",
    border: "border-amber-500/20",
    text: "text-amber-500",
    hover: "hover:border-amber-500/40",
  },
  cyan: {
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
    text: "text-cyan-500",
    hover: "hover:border-cyan-500/40",
  },
};

// --- LOGIN DATA ---
const LOGIN_ROLES = [
  { id: "admin", label: "School Admin" },
  { id: "teacher", label: "Teacher / Staff" },
  { id: "student", label: "Student" },
  { id: "parent", label: "Parent" },
];

const VALID_LOGINS = {
  admin: { id: "VisdomWaves", password: "admin123", name: "Dr. Rajesh Kumar" },
  teacher: {
    id: "VisdomWaves",
    password: "teacher123",
    name: "Ms. Priya Sharma",
  },
  student: { id: "VisdomWaves", password: "student123", name: "Srinath Potla" },
  parent: { id: "VisdomWaves", password: "parent123", name: "Srinath Potla" },
};

// --- REGISTRATION DATA ---
const REG_ROLES = [
  { id: "student", label: "Student", icon: AcademicCapIcon, color: "indigo" },
  { id: "teacher", label: "Staff / Teacher", icon: UserIcon, color: "violet" },
  { id: "parent", label: "Parent", icon: UsersIcon, color: "emerald" },
];

// --- COMPONENTS ---

export function ERPLogin() {
  const { login } = useAuth();
  const { theme } = useTheme();
  const navigate = useNavigate();
  const isDark = theme === "dark";

  const [selectedRole, setSelectedRole] = useState("student");
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [showRoleSelector, setShowRoleSelector] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    if (!userId.trim()) {
      setError("Please enter your User ID");
      return;
    }
    if (!password.trim()) {
      setError("Please enter your Password");
      return;
    }

    setIsLoggingIn(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Authenticate (using our valid logins list for now)
    const validUser = VALID_LOGINS[selectedRole];
    if (userId === validUser.id && password === validUser.password) {
      login({
        id: userId,
        name: validUser.name,
        role: selectedRole,
        roleLabel: LOGIN_ROLES.find((r) => r.id === selectedRole)?.label,
        loginTime: new Date().toISOString(),
      });
      navigate("/erp/dashboard");
    } else {
      setError("Invalid User ID or Password for the selected role.");
    }

    setIsLoggingIn(false);
  };

  const currentRole = LOGIN_ROLES.find((r) => r.id === selectedRole);

  return (
    <section className="relative min-h-screen overflow-y-auto flex items-center justify-center pt-24 pb-12 transition-all duration-500">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="/Images/MySchool/MySchoolBells/Back.mp4"
            type="video/mp4"
          />
        </video>
        <div
          className={`absolute inset-0 ${
            isDark ? "bg-black/70" : "bg-black/30"
          }`}
        ></div>
        <div
          className={`absolute inset-0 ${
            isDark
              ? "bg-gradient-to-b from-[#020617]/90 via-transparent to-[#020617]/95"
              : "bg-gradient-to-b from-white/40 via-transparent to-white/50"
          }`}
        ></div>
      </div>

      <div className="relative z-10 w-full max-w-md mx-auto px-4 text-center">
        <div
          className={`rounded-[1.5rem] sm:rounded-[2.5rem] overflow-hidden backdrop-blur-2xl border shadow-2xl transition-all duration-300 ${
            isDark
              ? "bg-[#0a0f1e]/80 border-white/10 shadow-black/50"
              : "bg-white/80 border-white/50 shadow-slate-900/20"
          }`}
        >
          <div
            className={`px-6 sm:px-8 pt-8 sm:pt-10 pb-6 text-center border-b ${
              isDark ? "border-white/5" : "border-slate-100"
            }`}
          >
            <div className="flex justify-center mb-5">
              <div className="w-20 h-20 rounded-3xl overflow-hidden ring-2 ring-indigo-500/30 shadow-xl shadow-indigo-500/20">
                <img
                  src="/Images/MySchool/MySchoolBells/Logo.webp"
                  alt="My School Bells"
                  className="w-full h-full object-contain p-2"
                />
              </div>
            </div>
            <h1
              className={`text-2xl font-black tracking-tight ${
                isDark ? "text-white" : "text-slate-900"
              }`}
            >
              MY SCHOOL BELLS
            </h1>
            <p className="text-[10px] font-bold text-orange-500 uppercase tracking-[0.3em] mt-1">
              ERP Login Portal
            </p>
          </div>

          <div className="p-6 sm:p-8 space-y-6">
            <div className="space-y-2 text-left">
              <label
                className={`text-[11px] font-black uppercase tracking-widest ${
                  isDark ? "text-slate-400" : "text-slate-500"
                }`}
              >
                Login As
              </label>
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setShowRoleSelector(!showRoleSelector)}
                  className={`w-full px-5 py-4 rounded-2xl text-left flex items-center justify-between border transition-all duration-300 ${
                    isDark
                      ? "bg-white/5 border-white/10 text-white hover:border-indigo-500/50"
                      : "bg-slate-50 border-slate-200 text-slate-900 hover:border-indigo-400"
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <span className="text-2xl">{currentRole?.icon}</span>
                    <span className="font-bold text-sm">
                      {currentRole?.label}
                    </span>
                  </span>
                  <svg
                    className={`w-4 h-4 transition-transform ${
                      showRoleSelector ? "rotate-180" : ""
                    } ${isDark ? "text-slate-400" : "text-slate-500"}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {showRoleSelector && (
                  <div
                    className={`absolute top-full left-0 right-0 mt-2 rounded-2xl overflow-hidden border z-50 shadow-2xl ${
                      isDark
                        ? "bg-[#0a0f1e] border-white/10"
                        : "bg-white border-slate-200"
                    }`}
                  >
                    {LOGIN_ROLES.map((role) => (
                      <button
                        key={role.id}
                        type="button"
                        onClick={() => {
                          setSelectedRole(role.id);
                          setShowRoleSelector(false);
                          setUserId("");
                          setPassword("");
                          setError("");
                        }}
                        className={`w-full px-5 py-4 flex items-center gap-3 text-left transition-all ${
                          selectedRole === role.id
                            ? isDark
                              ? "bg-indigo-500/20 text-indigo-300"
                              : "bg-indigo-50 text-indigo-700"
                            : isDark
                              ? "text-slate-300 hover:bg-white/5"
                              : "text-slate-700 hover:bg-slate-50"
                        }`}
                      >
                        <span className="text-xl">{role.icon}</span>
                        <span className="font-bold text-sm">{role.label}</span>
                        {selectedRole === role.id && (
                          <svg
                            className="w-4 h-4 ml-auto text-indigo-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <form onSubmit={handleLogin} className="space-y-5 text-left">
              <div className="space-y-2">
                <label
                  className={`text-[11px] font-black uppercase tracking-widest ${
                    isDark ? "text-slate-400" : "text-slate-500"
                  }`}
                >
                  User ID / Registration No.
                </label>
                <input
                  type="text"
                  value={userId}
                  onChange={(e) => {
                    setUserId(e.target.value);
                    setError("");
                  }}
                  placeholder={`Enter your ${currentRole?.label} ID`}
                  className={`w-full px-5 py-4 rounded-2xl border text-sm font-semibold transition-all duration-300 outline-none ${
                    isDark
                      ? "bg-white/5 border-white/10 text-white placeholder-slate-500 focus:border-indigo-500/50 focus:bg-white/10"
                      : "bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400 focus:border-indigo-400 focus:bg-white"
                  }`}
                />
              </div>

              <div className="space-y-2">
                <label
                  className={`text-[11px] font-black uppercase tracking-widest ${
                    isDark ? "text-slate-400" : "text-slate-500"
                  }`}
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      setError("");
                    }}
                    placeholder="Enter your password"
                    className={`w-full px-5 py-4 pr-14 rounded-2xl border text-sm font-semibold transition-all duration-300 outline-none ${
                      isDark
                        ? "bg-white/5 border-white/10 text-white placeholder-slate-500 focus:border-indigo-500/50 focus:bg-white/10"
                        : "bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400 focus:border-indigo-400 focus:bg-white"
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className={`absolute right-4 top-1/2 -translate-y-1/2 p-1 rounded-lg transition-colors ${
                      isDark
                        ? "text-slate-400 hover:text-white"
                        : "text-slate-400 hover:text-slate-700"
                    }`}
                  >
                    {showPassword ? (
                      <EyeSlashIcon className="w-5 h-5" />
                    ) : (
                      <EyeIcon className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              {error && (
                <div className="px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 text-xs font-bold text-center">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={isLoggingIn}
                className={`w-full py-4 rounded-2xl font-black uppercase tracking-widest text-sm transition-all duration-500 relative overflow-hidden group ${
                  isLoggingIn
                    ? "opacity-70 cursor-not-allowed"
                    : "hover:scale-[1.02] hover:shadow-xl"
                } bg-gradient-to-r from-indigo-600 via-violet-600 to-rose-500 text-white shadow-lg shadow-indigo-500/25`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-rose-500 via-violet-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <span className="relative z-10 flex items-center justify-center gap-3 font-black">
                  {isLoggingIn ? (
                    <>
                      <svg
                        className="animate-spin w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Authenticating...
                    </>
                  ) : (
                    "Log In"
                  )}
                </span>
              </button>
            </form>

            <div className="text-center">
              <button
                className={`text-xs font-bold transition-colors ${
                  isDark
                    ? "text-indigo-400 hover:text-indigo-300"
                    : "text-indigo-600 hover:text-indigo-800"
                }`}
              >
                Forgot your password?
              </button>
            </div>

            <div
              className={`mt-8 pt-6 border-t ${
                isDark ? "border-white/5" : "border-slate-100"
              }`}
            >
              <p
                className={`text-xs text-center ${
                  isDark ? "text-slate-500" : "text-slate-400"
                }`}
              >
                Need access to the ERP?{" "}
                <button
                  type="button"
                  className="font-bold text-indigo-500 hover:text-indigo-400 underline transition-colors"
                >
                  Contact School Administration
                </button>
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-6">
          <button
            onClick={() => navigate("/")}
            className={`text-sm font-bold transition-colors ${
              isDark
                ? "text-slate-400 hover:text-white"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            ← Back to Home
          </button>
        </div>
      </div>
    </section>
  );
}

export function ERPDashboard() {
  const { user, logout } = useAuth();
  const { theme } = useTheme();
  const navigate = useNavigate();
  const isDark = theme === "dark";

  if (!user) {
    navigate("/erp/login");
    return null;
  }

  const modules = roleModules[user.role] || roleModules.student;
  const loginTime = new Date(user.loginTime);
  const formattedTime = loginTime.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
  });
  const formattedDate = loginTime.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  const handleLogout = () => {
    logout();
    navigate("/erp/login");
  };

  return (
    <section
      className={`min-h-screen pt-28 pb-16 px-4 sm:px-6 lg:px-8 ${
        isDark ? "bg-[#020617]" : "bg-slate-50"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div
          className={`rounded-[1.5rem] sm:rounded-[2.5rem] p-6 sm:p-10 mb-8 border backdrop-blur-xl relative overflow-hidden transition-all duration-300 ${
            isDark
              ? "bg-[#0a0f1e]/80 border-white/10"
              : "bg-white border-slate-200 shadow-lg"
          }`}
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-rose-500/10 rounded-full blur-[80px] pointer-events-none"></div>

          <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 via-violet-500 to-rose-500 p-[2px] shadow-xl">
                <div
                  className={`w-full h-full rounded-2xl flex items-center justify-center text-2xl font-black ${
                    isDark
                      ? "bg-[#0a0f1e] text-white"
                      : "bg-white text-slate-900"
                  }`}
                >
                  {user.name?.charAt(0)}
                </div>
              </div>
              <div>
                <h1
                  className={`text-2xl sm:text-3xl font-black tracking-tight ${
                    isDark ? "text-white" : "text-slate-900"
                  }`}
                >
                  Welcome, {user.name}!
                </h1>
                <div className="flex flex-wrap items-center gap-3 mt-2">
                  <span
                    className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${
                      isDark
                        ? "bg-indigo-500/20 text-indigo-400 border border-indigo-500/20"
                        : "bg-indigo-50 text-indigo-600 border border-indigo-200"
                    }`}
                  >
                    {user.roleLabel}
                  </span>
                  <span
                    className={`text-xs font-semibold ${
                      isDark ? "text-slate-500" : "text-slate-400"
                    }`}
                  >
                    ID: {user.id}
                  </span>
                  <span
                    className={`text-xs font-semibold ${
                      isDark ? "text-slate-500" : "text-slate-400"
                    }`}
                  >
                    • Logged in {formattedDate} at {formattedTime}
                  </span>
                </div>
              </div>
            </div>

            <button
              onClick={handleLogout}
              className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-bold text-sm transition-all duration-300 hover:scale-105 border ${
                isDark
                  ? "bg-red-500/10 text-red-400 border-red-500/20 hover:bg-red-500/20"
                  : "bg-red-50 text-red-600 border-red-200 hover:bg-red-100"
              }`}
            >
              <ArrowRightOnRectangleIcon className="w-5 h-5" />
              Logout
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Academic Year", value: "2025-26", color: "indigo" },
            { label: "Term", value: "Term II", color: "violet" },
            {
              label: "Today",
              value: new Date().toLocaleDateString("en-IN", {
                day: "numeric",
                month: "short",
              }),
              color: "rose",
            },
            { label: "Status", value: "Active", color: "emerald" },
          ].map((stat, i) => (
            <div
              key={i}
              className={`p-5 rounded-2xl border text-center transition-all duration-300 hover:scale-105 ${
                isDark
                  ? "bg-[#0a0f1e]/80 border-white/5"
                  : "bg-white border-slate-200 shadow-sm"
              }`}
            >
              <p
                className={`text-[10px] font-black uppercase tracking-widest mb-2 ${
                  isDark ? "text-slate-500" : "text-slate-400"
                }`}
              >
                {stat.label}
              </p>
              <p
                className={`text-xl font-black ${
                  isDark ? "text-white" : "text-slate-900"
                }`}
              >
                {stat.value}
              </p>
            </div>
          ))}
        </div>

        <div className="mb-6">
          <h2
            className={`text-lg font-black uppercase tracking-widest mb-6 ${
              isDark ? "text-slate-400" : "text-slate-500"
            }`}
          >
            Quick Access
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {modules.map((mod, i) => {
              const colors = colorMap[mod.color];
              return (
                <button
                  key={i}
                  onClick={() => {
                    if (mod.title === "User Registration") {
                      navigate("/erp/admin/user-registration");
                    }
                  }}
                  className={`p-6 rounded-2xl border text-left transition-all duration-300 hover:scale-[1.02] hover:shadow-lg group cursor-pointer ${
                    isDark
                      ? `bg-[#0a0f1e]/80 border-white/5 ${colors.hover}`
                      : `bg-white border-slate-200 shadow-sm ${colors.hover}`
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-12 h-12 rounded-xl ${colors.bg} ${colors.border} border flex items-center justify-center group-hover:scale-110 transition-transform`}
                    >
                      <mod.icon className={`w-6 h-6 ${colors.text}`} />
                    </div>
                    <div>
                      <h3
                        className={`font-bold text-sm ${
                          isDark ? "text-white" : "text-slate-900"
                        }`}
                      >
                        {mod.title}
                      </h3>
                      <p
                        className={`text-xs mt-0.5 ${
                          isDark ? "text-slate-500" : "text-slate-400"
                        }`}
                      >
                        {mod.desc}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        <div
          className={`rounded-[2.5rem] p-8 border ${
            isDark
              ? "bg-[#0a0f1e]/80 border-white/5"
              : "bg-white border-slate-200 shadow-sm"
          }`}
        >
          <h2
            className={`text-lg font-black uppercase tracking-widest mb-6 ${
              isDark ? "text-slate-400" : "text-slate-500"
            }`}
          >
            Recent Activity
          </h2>
          <div className="space-y-3">
            {[
              {
                text: "Fee payment received - ₹25,000",
                time: "2 hours ago",
                type: "success",
              },
              {
                text: "Attendance marked for today",
                time: "4 hours ago",
                type: "info",
              },
              {
                text: "New circular: Annual Day preparations",
                time: "Yesterday",
                type: "notice",
              },
              {
                text: "Mid-term results published",
                time: "2 days ago",
                type: "info",
              },
            ].map((activity, i) => (
              <div
                key={i}
                className={`flex items-center justify-between px-5 py-4 rounded-xl border transition-colors ${
                  isDark
                    ? "border-white/5 hover:bg-white/5"
                    : "border-slate-100 hover:bg-slate-50"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-2 h-2 rounded-full ${
                      activity.type === "success"
                        ? "bg-emerald-500"
                        : activity.type === "notice"
                          ? "bg-amber-500"
                          : "bg-indigo-500"
                    }`}
                  ></div>
                  <span
                    className={`text-sm font-semibold ${
                      isDark ? "text-slate-300" : "text-slate-700"
                    }`}
                  >
                    {activity.text}
                  </span>
                </div>
                <span
                  className={`text-xs font-bold ${
                    isDark ? "text-slate-600" : "text-slate-400"
                  }`}
                >
                  {activity.time}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function UserRegistration() {
  const { theme } = useTheme();
  const { user } = useAuth();
  const navigate = useNavigate();
  const isDark = theme === "dark";

  const [selectedRole, setSelectedRole] = useState("student");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    userId: "",
    password: "",
    confirmPassword: "",
    grade: "",
    department: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!user || user.role !== "admin") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-500 font-bold">Unauthorized Access</p>
      </div>
    );
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSuccess(true);

    setTimeout(() => {
      setIsSuccess(false);
      setFormData({
        fullName: "",
        email: "",
        userId: "",
        password: "",
        confirmPassword: "",
        grade: "",
        department: "",
      });
    }, 3000);
  };

  return (
    <section
      className={`min-h-screen pt-28 pb-16 px-4 ${
        isDark ? "bg-[#020617]" : "bg-slate-50"
      }`}
    >
      <div className="max-w-3xl mx-auto">
        <button
          onClick={() => navigate("/erp/dashboard")}
          className={`flex items-center gap-2 mb-8 font-bold text-sm transition-colors ${
            isDark
              ? "text-slate-400 hover:text-white"
              : "text-slate-500 hover:text-slate-900"
          }`}
        >
          <ChevronLeftIcon className="w-4 h-4" />
          Back to Dashboard
        </button>

        <div
          className={`rounded-[1.5rem] sm:rounded-[2.5rem] overflow-hidden border backdrop-blur-2xl shadow-2xl transition-all duration-300 ${
            isDark
              ? "bg-[#0a0f1e]/80 border-white/10"
              : "bg-white border-slate-200"
          }`}
        >
          <div
            className={`p-6 sm:p-10 border-b ${
              isDark ? "border-white/5" : "border-slate-100"
            }`}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 border border-indigo-500/20 flex items-center justify-center text-indigo-500">
                <UserPlusIcon className="w-6 h-6" />
              </div>
              <h1
                className={`text-2xl font-black ${
                  isDark ? "text-white" : "text-slate-900"
                }`}
              >
                Register New User
              </h1>
            </div>
            <p
              className={`text-sm ${
                isDark ? "text-slate-400" : "text-slate-500"
              }`}
            >
              Assign roles and create credentials for new members of the
              institution.
            </p>
          </div>

          {isSuccess ? (
            <div className="p-20 text-center animate-in fade-in zoom-in duration-500">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-emerald-500/20 text-emerald-500 mb-6">
                <CheckCircleIcon className="w-12 h-12" />
              </div>
              <h2
                className={`text-2xl font-black mb-2 ${
                  isDark ? "text-white" : "text-slate-900"
                }`}
              >
                User Registered Successfully!
              </h2>
              <p className={`text-slate-500 mb-8`}>
                The login credentials have been generated and the account is now
                active.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="p-6 sm:p-10 space-y-8">
              <div className="space-y-4">
                <label
                  className={`text-[10px] uppercase tracking-[0.3em] font-black ${
                    isDark ? "text-slate-500" : "text-slate-400"
                  }`}
                >
                  1. Select Account Type
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {REG_ROLES.map((role) => {
                    const Icon = role.icon;
                    const isActive = selectedRole === role.id;
                    return (
                      <button
                        key={role.id}
                        type="button"
                        onClick={() => setSelectedRole(role.id)}
                        className={`p-4 rounded-2xl border flex items-center gap-3 transition-all duration-300 ${
                          isActive
                            ? "bg-indigo-600 border-indigo-600 text-white shadow-lg shadow-indigo-600/20"
                            : isDark
                              ? "bg-white/5 border-white/10 text-slate-400 hover:border-white/20"
                              : "bg-slate-50 border-slate-200 text-slate-600 hover:border-slate-300"
                        }`}
                      >
                        <Icon
                          className={`w-5 h-5 ${isActive ? "text-white" : ""}`}
                        />
                        <span className="font-bold text-sm">{role.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="space-y-6">
                <label
                  className={`text-[10px] uppercase tracking-[0.3em] font-black ${
                    isDark ? "text-slate-500" : "text-slate-400"
                  }`}
                >
                  2. Personal & Login Details
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold px-1">Full Name</label>
                    <input
                      required
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="Enter full name"
                      className={`w-full px-5 py-3 rounded-xl border text-sm outline-none transition-all ${
                        isDark
                          ? "bg-white/5 border-white/10 text-white focus:border-indigo-500"
                          : "bg-slate-50 border-slate-200 focus:border-indigo-500"
                      }`}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold px-1">
                      Email Address
                    </label>
                    <input
                      required
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="email@school.com"
                      className={`w-full px-5 py-3 rounded-xl border text-sm outline-none transition-all ${
                        isDark
                          ? "bg-white/5 border-white/10 text-white focus:border-indigo-500"
                          : "bg-slate-50 border-slate-200 focus:border-indigo-500"
                      }`}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold px-1">
                      User ID / Reg No.
                    </label>
                    <input
                      required
                      type="text"
                      name="userId"
                      value={formData.userId}
                      onChange={handleInputChange}
                      placeholder="e.g. STU1002"
                      className={`w-full px-5 py-3 rounded-xl border text-sm outline-none transition-all ${
                        isDark
                          ? "bg-white/5 border-white/10 text-white focus:border-indigo-500"
                          : "bg-slate-50 border-slate-200 focus:border-indigo-500"
                      }`}
                    />
                  </div>

                  {selectedRole === "student" && (
                    <div className="space-y-2">
                      <label className="text-xs font-bold px-1">
                        Grade / Class
                      </label>
                      <input
                        required
                        type="text"
                        name="grade"
                        value={formData.grade}
                        onChange={handleInputChange}
                        placeholder="e.g. 10th - A"
                        className={`w-full px-5 py-3 rounded-xl border text-sm outline-none transition-all ${
                          isDark
                            ? "bg-white/5 border-white/10 text-white focus:border-indigo-500"
                            : "bg-slate-50 border-slate-200 focus:border-indigo-500"
                        }`}
                      />
                    </div>
                  )}

                  {selectedRole === "teacher" && (
                    <div className="space-y-2">
                      <label className="text-xs font-bold px-1">
                        Department
                      </label>
                      <input
                        required
                        type="text"
                        name="department"
                        value={formData.department}
                        onChange={handleInputChange}
                        placeholder="e.g. Mathematics"
                        className={`w-full px-5 py-3 rounded-xl border text-sm outline-none transition-all ${
                          isDark
                            ? "bg-white/5 border-white/10 text-white focus:border-indigo-500"
                            : "bg-slate-50 border-slate-200 focus:border-indigo-500"
                        }`}
                      />
                    </div>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold px-1">Password</label>
                    <input
                      required
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      placeholder="••••••••"
                      className={`w-full px-5 py-3 rounded-xl border text-sm outline-none transition-all ${
                        isDark
                          ? "bg-white/5 border-white/10 text-white focus:border-indigo-500"
                          : "bg-slate-50 border-slate-200 focus:border-indigo-500"
                      }`}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold px-1">
                      Confirm Password
                    </label>
                    <input
                      required
                      type="password"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      placeholder="••••••••"
                      className={`w-full px-5 py-3 rounded-xl border text-sm outline-none transition-all ${
                        isDark
                          ? "bg-white/5 border-white/10 text-white focus:border-indigo-500"
                          : "bg-slate-50 border-slate-200 focus:border-indigo-500"
                      }`}
                    />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 rounded-2xl font-black uppercase tracking-widest text-sm transition-all duration-500 shadow-xl shadow-indigo-500/20 bg-indigo-600 text-white hover:bg-indigo-700 disabled:opacity-50 flex items-center justify-center gap-3`}
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Registering...
                  </>
                ) : (
                  <>
                    <UserPlusIcon className="w-5 h-5" />
                    Complete Registration
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
