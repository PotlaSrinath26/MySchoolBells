import React, { useState } from "react";
import { useAuth } from "../../lib/AuthContext";
import { LogIn, User, Lock, ArrowRight, ShieldCheck } from "lucide-react";

export default function Login() {
  const { login } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Simulate network delay for better UX
    setTimeout(() => {
      if (username === "visdomwaves@gmail.com" && password === "1947") {
        login({ email: username, name: "Admin User", role: "admin" });
      } else {
        setError(
          "Invalid credentials. Please check your username and password.",
        );
        setLoading(false);
      }
    }, 800);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-slate-50 dark:bg-slate-950 relative overflow-hidden font-sans">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-500/10 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-rose-500/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="w-full max-w-md p-6 relative z-10">
        <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-white/20 dark:border-slate-800 rounded-3xl shadow-2xl overflow-hidden">
          {/* Header Section */}
          <div className="relative h-32 bg-gradient-to-br from-indigo-600 to-violet-600 flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white/10 to-transparent"></div>

            <div className="relative z-10 flex flex-col items-center text-white">
              <div className="p-3 bg-white/20 backdrop-blur-md rounded-2xl mb-2 shadow-inner ring-1 ring-white/30">
                <ShieldCheck className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-2xl font-bold tracking-tight">
                Welcome Back
              </h1>
              <p className="text-indigo-100 text-sm font-medium">
                Secure Access Portal
              </p>
            </div>
          </div>

          {/* Form Section */}
          <div className="p-8 pt-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider ml-1">
                  Username
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
                  </div>
                  <input
                    type="email"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="block w-full pl-11 pr-4 py-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-300"
                    placeholder="Enter your username"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider ml-1">
                  Password
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
                  </div>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full pl-11 pr-4 py-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-300"
                    placeholder="••••••••"
                    required
                  />
                </div>
              </div>

              {error && (
                <div className="p-3 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800/30 text-red-600 dark:text-red-400 text-sm flex items-center animate-in fade-in slide-in-from-top-1 duration-300">
                  <span className="mr-2">⚠️</span> {error}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full relative flex items-center justify-center py-3.5 px-4 border border-transparent rounded-xl text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-300 shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:-translate-y-0.5"
              >
                {loading ? (
                  <span className="flex items-center">
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
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
                    Verifying...
                  </span>
                ) : (
                  <span className="flex items-center">
                    Sign In <ArrowRight className="ml-2 h-4 w-4" />
                  </span>
                )}
              </button>
            </form>
          </div>

          <div className="px-8 pb-8 text-center">
            <p className="text-xs text-slate-500 dark:text-slate-400">
              © 2026 School Bells. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
