import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  CalendarIcon,
  AcademicCapIcon,
  SparklesIcon,
  SunIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

const ACADEMIC_EVENTS = [
  // June
  {
    date: "18",
    month: 5,
    year: 2026,
    title: "Back to School",
    type: "Operational",
    category: "operational",
  },
  // July
  {
    date: "15",
    month: 6,
    year: 2026,
    title: "Unit Test - I",
    type: "Exam",
    category: "exam",
  },
  {
    date: "25",
    month: 6,
    year: 2026,
    title: "Parent Orientation",
    type: "P.T.M",
    category: "meeting",
  },
  // August
  {
    date: "15",
    month: 7,
    year: 2026,
    title: "Independence Day",
    type: "Institutional",
    category: "Celebrations",
  },
  {
    date: "28",
    month: 7,
    year: 2026,
    title: "Monthly Assessment",
    type: "Exam",
    category: "exam",
  },
  // September
  {
    date: "05",
    month: 8,
    year: 2026,
    title: "Teachers' Day Honor",
    type: "Cultural",
    category: "Celebrations",
  },
  {
    date: "14",
    month: 8,
    year: 2026,
    title: "Ganesh Chaturthi",
    type: "holiday",
    category: "holiday",
  },
  {
    date: "21",
    month: 8,
    year: 2026,
    title: "Mid-Term Examinations",
    type: "Exam",
    category: "exam",
  },
  // October
  {
    date: "02",
    month: 9,
    year: 2026,
    title: "Dussehra",
    type: "Holiday",
    category: "holiday",
  },

  {
    date: "15",
    month: 9,
    year: 2026,
    title: "Grand Cultural Fest",
    type: "Function",
    category: "Celebrations",
  },
  // November
  {
    date: "14",
    month: 10,
    year: 2026,
    title: "Children's Day Pulse",
    type: "Cultural",
    category: "Celebrations",
  },
  {
    date: "20",
    month: 10,
    year: 2026,
    title: "Unit Test - II",
    type: "Exam",
    category: "exam",
  },
  {
    date: "28",
    month: 10,
    year: 2026,
    title: "Parent Advisory Council",
    type: "P.T.M",
    category: "meeting",
  },
  // December
  {
    date: "25",
    month: 11,
    year: 2026,
    title: "Christmas",
    type: "Holiday",
    category: "holiday",
  },
  // January
  {
    date: "05",
    month: 0,
    year: 2027,
    title: "Semester II Launch",
    type: "Operational",
    category: "operational",
  },
  {
    date: "14",
    month: 0,
    year: 2027,
    title: "Makar Sankranti",
    type: "Holiday",
    category: "holiday",
  },
  {
    date: "26",
    month: 0,
    year: 2027,
    title: "Republic Day Ceremonial",
    type: "Institutional",
    category: "Celebrations",
  },
  // February
  {
    date: "10",
    month: 1,
    year: 2027,
    title: "Pre-Board Briefing",
    type: "P.T.M",
    category: "meeting",
  },
  {
    date: "15",
    month: 1,
    year: 2027,
    title: "Pre-Finals",
    type: "Exam",
    category: "exam",
  },
  // March
  {
    date: "10",
    month: 2,
    year: 2027,
    title: "Holi",
    type: "Holiday",
    category: "holiday",
  },
  // April
  {
    date: "05",
    month: 3,
    year: 2027,
    title: "Final Exams",
    type: "Exam",
    category: "exam",
  },
  {
    date: "17",
    month: 3,
    year: 2027,
    title: "Legacy Graduation",
    type: "Milestone",
    category: "Celebrations",
  },
];

const CATEGORIES = {
  exam: { icon: AcademicCapIcon, color: "bg-rose-500", label: "Examinations" },
  holiday: { icon: SunIcon, color: "bg-emerald-500", label: "Holidays" },
  meeting: {
    icon: UserGroupIcon,
    color: "bg-amber-500",
    label: "Parents Meeting",
  },
  Celebrations: {
    icon: SparklesIcon,
    color: "bg-indigo-500",
    label: "Celebrations",
  },
  operational: {
    icon: CalendarIcon,
    color: "bg-slate-500",
    label: "Operational",
  },
};

export default function AcademicCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date(2026, 5, 1)); // State in June 2026

  const daysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = (month, year) => new Date(year, month, 1).getDay();

  const prevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1),
    );
  };

  const nextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1),
    );
  };

  const monthName = currentDate.toLocaleString("default", { month: "long" });
  const year = currentDate.getFullYear();

  const getEventsForDay = (day) => {
    const d = day.toString().padStart(2, "0");
    return ACADEMIC_EVENTS.filter(
      (e) =>
        e.date === d &&
        e.month === currentDate.getMonth() &&
        e.year === currentDate.getFullYear(),
    );
  };

  return (
    <section
      className="py-16 lg:py-24 font-bold text-black dark:text-white text-center border-b border-slate-100 dark:border-white/5"
      id="calendar"
    >
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Prestige Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 gap-8">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 mb-2"
            >
              <div className="w-1 h-1 rounded-full bg-indigo-500"></div>
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500 dark:text-slate-400">
                My School Bells
              </span>
            </motion.div>
            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 dark:text-white tracking-tighter">
              Academic <span className="text-indigo-600">Calendar.</span>
            </h2>
          </div>

          <div className="flex items-center gap-4 bg-slate-50 dark:bg-white/5 p-1.5 rounded-xl border border-slate-200 dark:border-white/10">
            <button
              onClick={prevMonth}
              className="p-2 hover:bg-white dark:hover:bg-white/10 rounded-lg transition-all"
            >
              <ChevronLeftIcon className="w-4 h-4 text-slate-600 dark:text-slate-300" />
            </button>
            <div className="flex flex-col items-center min-w-[120px]">
              <span className="text-xs font-black uppercase tracking-widest text-slate-900 dark:text-white">
                {monthName}
              </span>
              <span className="text-[8px] font-black text-indigo-600 dark:text-indigo-500 uppercase">
                {year} Session
              </span>
            </div>
            <button
              onClick={nextMonth}
              className="p-2 hover:bg-white dark:hover:bg-white/10 rounded-xl transition-all"
            >
              <ChevronRightIcon className="w-4 h-4 text-slate-600 dark:text-slate-300" />
            </button>
          </div>
        </div>
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Calendar Grid - Prestige Elite Tier */}
          <div className="lg:col-span-9 bg-slate-50 dark:bg-white/[0.09] rounded-[2rem] p-1 border border-slate-200 dark:border-white/10 overflow-hidden shadow-xl">
            <div className="grid grid-cols-7 bg-white dark:bg-[#020617] rounded-[1.9rem] overflow-hidden">
              {/* Day Headers */}
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                <div
                  key={day}
                  className="py-3 text-center border-b border-slate-100 dark:border-white/5"
                >
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 dark:text-slate-400">
                    {day}
                  </span>
                </div>
              ))}

              {/* Empty slots for first day */}
              {Array.from({
                length: firstDayOfMonth(currentDate.getMonth(), year),
              }).map((_, i) => (
                <div
                  key={`empty-${i}`}
                  className="h-20 lg:h-24 border-b border-r border-slate-50 dark:border-white/[0.02] last:border-r-0"
                ></div>
              ))}

              {/* Day Cells */}
              {Array.from({
                length: daysInMonth(currentDate.getMonth(), year),
              }).map((_, i) => {
                const dayNum = i + 1;
                const events = getEventsForDay(dayNum);

                return (
                  <motion.div
                    key={dayNum}
                    whileHover={{ zIndex: 10, scale: 1.02 }}
                    className="h-20 lg:h-24 p-2 border-b border-r border-slate-50 dark:border-white/[0.02] group transition-all hover:bg-slate-50 dark:hover:bg-white/5 relative"
                  >
                    <span
                      className={`text-[10px] font-black transition-colors ${events.length > 0 ? "text-indigo-600" : "text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white"}`}
                    >
                      {dayNum}
                    </span>

                    <div className="mt-1 space-y-1">
                      {events.map((event, eIdx) => (
                        <motion.div
                          key={eIdx}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className={`px-1.5 py-0.5 rounded-md text-[8px] font-black uppercase leading-tight text-white ${CATEGORIES[event.category].color} shadow-lg shadow-${event.category}-500/20 truncate group/event`}
                        >
                          {event.title}
                          <div className="absolute top-0 left-0 right-0 h-full w-full bg-white opacity-0 group-hover/event:opacity-10 pointer-events-none rounded-lg"></div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Sidebar Legend & Briefing */}
          <div className="lg:col-span-3 space-y-4">
            <div className="p-6 rounded-[2rem] bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10">
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-6">
                Event Legend
              </h4>
              <div className="space-y-3">
                {Object.entries(CATEGORIES).map(([key, value]) => (
                  <div key={key} className="flex items-center gap-3">
                    <div
                      className={`p-1.5 rounded-lg ${value.color} text-white`}
                    >
                      <value.icon className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-[9px] font-black uppercase tracking-widest text-slate-600 dark:text-slate-300">
                      {value.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-[2rem] bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 overflow-hidden relative group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/5 blur-2xl rounded-full -mr-12 -mt-12 transition-all group-hover:bg-indigo-500/10"></div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-6">
                Session Window
              </h4>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="flex flex-col">
                    <span className="text-2xl font-black text-slate-900 dark:text-white leading-none">
                      June 18
                    </span>
                    <span className="text-[9px] font-black uppercase tracking-widest text-indigo-500 mt-1">
                      Back to School
                    </span>
                  </div>
                </div>

                <div className="w-10 h-px bg-slate-200 dark:bg-white/10"></div>

                <div className="flex items-center gap-4">
                  <div className="flex flex-col">
                    <span className="text-2xl font-black text-slate-900 dark:text-white leading-none">
                      April 17
                    </span>
                    <span className="text-[9px] font-black uppercase tracking-widest text-rose-500 mt-1">
                      End of Session
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
