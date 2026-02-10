import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../lib/AuthContext";
import { useTheme } from "../../lib/ThemeContext";
import {
  EyeIcon,
  EyeSlashIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";

const roles = [
  { id: "admin", label: "School Admin" },
  { id: "teacher", label: "Teacher / Staff" },
  { id: "student", label: "Student" },
  { id: "parent", label: "Parent" },
];

// Role-specific demo data (In production, this would be an API call)
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

export default function ERPLogin() {
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
        roleLabel: roles.find((r) => r.id === selectedRole)?.label,
        loginTime: new Date().toISOString(),
      });
      navigate("/erp/dashboard");
    } else {
      setError("Invalid User ID or Password for the selected role.");
    }

    setIsLoggingIn(false);
  };

  const currentRole = roles.find((r) => r.id === selectedRole);

  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center pt-20 pb-10">
      {/* Background Video */}
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

      <div className="relative z-10 w-full max-w-md mx-auto px-4">
        {/* Login Card */}
        <div
          className={`rounded-[2.5rem] overflow-hidden backdrop-blur-2xl border shadow-2xl ${
            isDark
              ? "bg-[#0a0f1e]/80 border-white/10 shadow-black/50"
              : "bg-white/80 border-white/50 shadow-slate-900/20"
          }`}
        >
          {/* Header */}
          <div
            className={`px-8 pt-10 pb-6 text-center border-b ${
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

          {/* Form Body */}
          <div className="p-8 space-y-6">
            {/* Role Selector */}
            <div className="space-y-2">
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

                {/* Dropdown */}
                {showRoleSelector && (
                  <div
                    className={`absolute top-full left-0 right-0 mt-2 rounded-2xl overflow-hidden border z-50 shadow-2xl ${
                      isDark
                        ? "bg-[#0a0f1e] border-white/10"
                        : "bg-white border-slate-200"
                    }`}
                  >
                    {roles.map((role) => (
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

            <form onSubmit={handleLogin} className="space-y-5">
              {/* User ID */}
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

              {/* Password */}
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

              {/* Error */}
              {error && (
                <div className="px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 text-xs font-bold text-center">
                  {error}
                </div>
              )}

              {/* Login Button */}
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
                <span className="relative z-10 flex items-center justify-center gap-3">
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

            {/* Forgot Password */}
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

            {/* Access Support */}
            <div
              className={`mt-8 pt-6 border-t ${isDark ? "border-white/5" : "border-slate-100"}`}
            >
              <p
                className={`text-xs text-center ${isDark ? "text-slate-500" : "text-slate-400"}`}
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

        {/* Back to Home */}
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
