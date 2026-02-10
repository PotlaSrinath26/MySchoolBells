import React from "react";
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
} from "@heroicons/react/24/solid";

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

export default function ERPDashboard() {
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
        {/* Welcome Header */}
        <div
          className={`rounded-[2.5rem] p-8 sm:p-10 mb-8 border backdrop-blur-xl relative overflow-hidden ${
            isDark
              ? "bg-[#0a0f1e]/80 border-white/10"
              : "bg-white border-slate-200 shadow-lg"
          }`}
        >
          {/* Decorative blurs */}
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

        {/* Quick Stats */}
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

        {/* Module Grid */}
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

        {/* Recent Activity */}
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
