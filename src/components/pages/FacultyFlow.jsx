import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Users,
  Clock,
  ShieldCheck,
  Zap,
  BarChart3,
  Search,
  CheckCircle2,
  AlertCircle,
  MoreVertical,
  Calendar,
  BookOpen,
} from "lucide-react";

// Mock Data for Teachers
const teachersData = [
  {
    id: 1,
    name: "Rajesh Kumar",
    subject: "Telugu",
    status: "Available",
    workload: "Low",
    avatar: "RK",
  },
  {
    id: 2,
    name: "Sita Sharma",
    subject: "Hindi",
    status: "In Class",
    workload: "Medium",
    avatar: "SS",
  },
  {
    id: 3,
    name: "John Smith",
    subject: "English",
    status: "Available",
    workload: "High",
    avatar: "JS",
  },
  {
    id: 4,
    name: "Srinivasa Rao",
    subject: "Maths",
    status: "In Class",
    workload: "High",
    avatar: "SR",
  },
  {
    id: 5,
    name: "Dr. KV Rao",
    subject: "Physics",
    status: "Absent",
    workload: "None",
    avatar: "KV",
  },
  {
    id: 6,
    name: "Anita Desai",
    subject: "Chemistry",
    status: "Available",
    workload: "Medium",
    avatar: "AD",
  },
  {
    id: 7,
    name: "Priya Menon",
    subject: "Biology",
    status: "In Class",
    workload: "Low",
    avatar: "PM",
  },
  {
    id: 8,
    name: "Vikram Singh",
    subject: "Social",
    status: "Available",
    workload: "Medium",
    avatar: "VS",
  },
];

const FacultyFlow = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTeacher, setSelectedTeacher] = useState(null);

  const filteredTeachers = teachersData.filter(
    (teacher) =>
      teacher.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      teacher.subject.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#020617] pt-24 pb-12 transition-colors duration-500 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="mb-16 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
              Faculty
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600 dark:from-violet-400 dark:to-indigo-400">
                Flow
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
              FacultyFlow is a premium continuity intelligence system that
              autonomously orchestrates seamless academic operations by
              instantly deploying the most optimal and equitable faculty
              replacement.
            </p>
          </motion.div>

          {/* Key Benefits Grid */}
          <div className="grid md:grid-cols-3 gap-6 mt-12 max-w-5xl mx-auto">
            {[
              {
                icon: Clock,
                title: "No Rushed Calls",
                desc: "Automated instant replacement findings.",
              },
              {
                icon: ShieldCheck,
                title: "No Classroom Gaps",
                desc: "Seamless academic flow protected in real-time.",
              },
              {
                icon: BarChart3,
                title: "Fair Workload",
                desc: "Optimized distribution to prevent staff burnout.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-slate-900/50 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="w-12 h-12 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-4 mx-auto">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Dashboard / Teacher List Section */}
        <div className="grid lg:grid-cols-12 gap-8 lg:mt-24">
          {/* Sidebar / Stats */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white dark:bg-slate-900/50 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-3xl p-6 shadow-xl">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-indigo-500" />
                Today's Overview
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center text-green-600 dark:text-green-400">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                        Present
                      </p>
                      <p className="text-lg font-bold text-slate-900 dark:text-white">
                        42
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/20 px-2 py-1 rounded-full">
                    92%
                  </span>
                </div>

                <div className="flex justify-between items-center p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-rose-100 dark:bg-rose-900/20 flex items-center justify-center text-rose-600 dark:text-rose-400">
                      <AlertCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                        Absent
                      </p>
                      <p className="text-lg font-bold text-slate-900 dark:text-white">
                        3
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-rose-600 dark:text-rose-400 bg-rose-100 dark:bg-rose-900/20 px-2 py-1 rounded-full">
                    Automated
                  </span>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800">
                <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-4">
                  Quick Actions
                </h4>
                <button className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-medium transition-colors shadow-lg shadow-indigo-500/20 mb-3">
                  Manual Adjustment
                </button>
                <button className="w-full py-3 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-xl font-medium transition-colors">
                  View Reports
                </button>
              </div>
            </div>
          </div>

          {/* Main List */}
          <div className="lg:col-span-8">
            <div className="bg-white dark:bg-slate-900/50 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-3xl p-6 lg:p-8 shadow-xl min-h-[600px]">
              <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                    Faculty Roster
                  </h2>
                  <p className="text-slate-500 dark:text-slate-400 text-sm">
                    Real-time status monitoring
                  </p>
                </div>
                <div className="relative w-full md:w-64">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search faculty..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border-none ring-1 ring-slate-200 dark:ring-slate-700 focus:ring-2 focus:ring-indigo-500 text-slate-900 dark:text-white placeholder:text-slate-400"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <AnimatePresence>
                  {filteredTeachers.map((teacher) => (
                    <motion.div
                      key={teacher.id}
                      layout
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      whileHover={{ scale: 1.01 }}
                      onClick={() =>
                        setSelectedTeacher(
                          teacher.id === selectedTeacher ? null : teacher.id,
                        )
                      }
                      className={`
                                        group cursor-pointer rounded-2xl p-4 border transition-all duration-300
                                        ${
                                          teacher.status === "Absent"
                                            ? "bg-rose-50/50 dark:bg-rose-900/10 border-rose-100 dark:border-rose-900/30"
                                            : "bg-white dark:bg-slate-800/40 border-slate-100 dark:border-slate-700 hover:border-indigo-200 dark:hover:border-indigo-800"
                                        }
                                    `}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div
                            className={`
                                                w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm
                                                ${teacher.status === "Absent" ? "bg-rose-100 text-rose-600" : "bg-indigo-100 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400"}
                                            `}
                          >
                            {teacher.avatar}
                          </div>
                          <div>
                            <h4 className="font-bold text-slate-900 dark:text-white">
                              {teacher.name}
                            </h4>
                            <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                              <BookOpen className="w-3 h-3" />
                              <span>{teacher.subject} Department</span>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-4">
                          <div
                            className={`px-3 py-1 rounded-full text-xs font-semibold
                                                ${
                                                  teacher.status === "Available"
                                                    ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                                                    : teacher.status ===
                                                        "Absent"
                                                      ? "bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400"
                                                      : "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400"
                                                }
                                            `}
                          >
                            {teacher.status}
                          </div>
                          <MoreVertical className="w-5 h-5 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      </div>

                      {/* Expanded Details */}
                      <AnimatePresence>
                        {selectedTeacher === teacher.id && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="pt-4 mt-4 border-t border-slate-100 dark:border-white/5 grid grid-cols-2 gap-4">
                              <div>
                                <p className="text-xs text-slate-500 uppercase font-semibold mb-1">
                                  Workload
                                </p>
                                <div className="flex items-center gap-2">
                                  <div className="flex-1 h-2 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                                    <div
                                      className={`h-full rounded-full ${teacher.workload === "High" ? "bg-rose-500" : teacher.workload === "Medium" ? "bg-amber-500" : "bg-green-500"}`}
                                      style={{
                                        width:
                                          teacher.workload === "High"
                                            ? "80%"
                                            : teacher.workload === "Medium"
                                              ? "50%"
                                              : "20%",
                                      }}
                                    />
                                  </div>
                                  <span className="text-xs font-medium text-slate-700 dark:text-slate-300">
                                    {teacher.workload}
                                  </span>
                                </div>
                              </div>
                              <div>
                                <p className="text-xs text-slate-500 uppercase font-semibold mb-1">
                                  Next Class
                                </p>
                                <div className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                                  <Clock className="w-4 h-4 text-indigo-500" />
                                  <span>10:30 AM - Class X-B</span>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacultyFlow;
