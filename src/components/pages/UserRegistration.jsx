import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../lib/ThemeContext";
import { useAuth } from "../../lib/AuthContext";
import {
  UserPlusIcon,
  ChevronLeftIcon,
  UserIcon,
  AcademicCapIcon,
  UsersIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/solid";

const roles = [
  { id: "student", label: "Student", icon: AcademicCapIcon, color: "indigo" },
  { id: "teacher", label: "Staff / Teacher", icon: UserIcon, color: "violet" },
  { id: "parent", label: "Parent", icon: UsersIcon, color: "emerald" },
];

export default function UserRegistration() {
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

  // Security check: Only admins can access this page
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
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSuccess(true);

    // Reset after 3 seconds
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
      className={`min-h-screen pt-28 pb-16 px-4 ${isDark ? "bg-[#020617]" : "bg-slate-50"}`}
    >
      <div className="max-w-3xl mx-auto">
        {/* Back Button */}
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
          className={`rounded-[2.5rem] overflow-hidden border backdrop-blur-2xl shadow-2xl ${
            isDark
              ? "bg-[#0a0f1e]/80 border-white/10"
              : "bg-white border-slate-200"
          }`}
        >
          {/* Form Header */}
          <div
            className={`p-8 sm:p-10 border-b ${isDark ? "border-white/5" : "border-slate-100"}`}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 border border-indigo-500/20 flex items-center justify-center text-indigo-500">
                <UserPlusIcon className="w-6 h-6" />
              </div>
              <h1
                className={`text-2xl font-black ${isDark ? "text-white" : "text-slate-900"}`}
              >
                Register New User
              </h1>
            </div>
            <p
              className={`text-sm ${isDark ? "text-slate-400" : "text-slate-500"}`}
            >
              Assign roles and create credentials for new members of the
              institution.
            </p>
          </div>

          {/* Success Message */}
          {isSuccess ? (
            <div className="p-20 text-center animate-in fade-in zoom-in duration-500">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-emerald-500/20 text-emerald-500 mb-6">
                <CheckCircleIcon className="w-12 h-12" />
              </div>
              <h2
                className={`text-2xl font-black mb-2 ${isDark ? "text-white" : "text-slate-900"}`}
              >
                User Registered Successfully!
              </h2>
              <p className={`text-slate-500 mb-8`}>
                The login credentials have been generated and the account is now
                active.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="p-8 sm:p-10 space-y-8">
              {/* Role Selection */}
              <div className="space-y-4">
                <label
                  className={`text-[10px] uppercase tracking-[0.3em] font-black ${isDark ? "text-slate-500" : "text-slate-400"}`}
                >
                  1. Select Account Type
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {roles.map((role) => {
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

              {/* Input Fields */}
              <div className="space-y-6">
                <label
                  className={`text-[10px] uppercase tracking-[0.3em] font-black ${isDark ? "text-slate-500" : "text-slate-400"}`}
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

              {/* Submit Button */}
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
