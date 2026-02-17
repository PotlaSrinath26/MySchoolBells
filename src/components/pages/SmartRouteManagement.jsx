import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bus,
  MapPin,
  Clock,
  Phone,
  User,
  ShieldCheck,
  Search,
  Navigation,
  Info,
  Calendar,
  ChevronRight,
  TrendingUp,
  Activity,
} from "lucide-react";

// Mock Data for Routes
const routesData = [
  {
    id: "R-101",
    name: "North City Express",
    busNumber: "TS-09-UB-1234",
    driverId: 1,
    stops: [
      { name: "Center", time: "07:30 AM" },
      { name: "Market Street", time: "07:45 AM" },
      { name: "City Library", time: "08:00 AM" },
      { name: "School Campus", time: "08:20 AM" },
    ],
    status: "On Time",
    capacity: "85%",
  },
  {
    id: "R-102",
    name: "Green Valley Shuttle",
    busNumber: "TS-09-UB-5678",
    driverId: 2,
    stops: [
      { name: "Green Valley Apts", time: "07:20 AM" },
      { name: "Tech Park Junction", time: "07:40 AM" },
      { name: "School Campus", time: "08:15 AM" },
    ],
    status: "Delayed (5m)",
    capacity: "92%",
  },
  {
    id: "R-103",
    name: "Lakeside Route",
    busNumber: "TS-09-UB-9012",
    driverId: 3,
    stops: [
      { name: "Lake View", time: "07:15 AM" },
      { name: "Hilltop Colony", time: "07:35 AM" },
      { name: "School Campus", time: "08:10 AM" },
    ],
    status: "On Time",
    capacity: "78%",
  },
];

// Mock Data for Drivers
const driversData = [
  {
    id: 1,
    name: "Ramesh Gupta",
    experience: "12 Years",
    contact: "+91 98765 43210",
    emergency: "+91 99887 76655",
    rating: 4.9,
    image: "RG",
    color: "from-blue-400 to-indigo-600",
  },
  {
    id: 2,
    name: "Suresh Reddy",
    experience: "8 Years",
    contact: "+91 98765 12345",
    emergency: "+91 99887 11223",
    rating: 4.7,
    image: "SR",
    color: "from-emerald-400 to-teal-600",
  },
  {
    id: 3,
    name: "Venkatesh K",
    experience: "15 Years",
    contact: "+91 98765 67890",
    emergency: "+91 99887 33445",
    rating: 5.0,
    image: "VK",
    color: "from-amber-400 to-orange-600",
  },
];

const SmartRouteManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRoute, setSelectedRoute] = useState(null);

  const filteredRoutes = routesData.filter(
    (route) =>
      route.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      route.busNumber.toLowerCase().includes(searchTerm.toLowerCase()),
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
              Smart
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-500">
                Route
              </span>{" "}
              Management
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Our Smart Route Management system provides a clear and structured
              view of all transport routes. Parents can easily access bus
              numbers, route names, pickup and drop points, and exact timing in
              one organized space.
            </p>
          </motion.div>

          {/* Stats / Benefits */}
          <div className="grid md:grid-cols-3 gap-6 mt-12 max-w-5xl mx-auto">
            {[
              {
                icon: Navigation,
                title: "Transparent Tracking",
                desc: "Real-time route visibility.",
              },
              {
                icon: ShieldCheck,
                title: "Safety First",
                desc: "Qualified staff & emergency protocols.",
              },
              {
                icon: TrendingUp,
                title: "Optimized Scheduling",
                desc: "Efficient sequence & timing.",
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
                <div className="w-12 h-12 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-4 mx-auto">
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

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-12 gap-8 lg:mt-24">
          {/* Sidebar / Filters */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white dark:bg-slate-900/50 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-3xl p-6 shadow-xl sticky top-24">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                <Activity className="w-5 h-5 text-emerald-500" />
                Transport Status
              </h3>

              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 dark:text-blue-400">
                      <Bus className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                        Active Buses
                      </p>
                      <p className="text-lg font-bold text-slate-900 dark:text-white">
                        12/12
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/20 px-2 py-1 rounded-full">
                    100%
                  </span>
                </div>
                <div className="bg-emerald-50 dark:bg-emerald-900/10 border border-emerald-100 dark:border-emerald-500/20 rounded-2xl p-4">
                  <h4 className="text-sm font-bold text-emerald-800 dark:text-emerald-300 mb-2 flex items-center gap-2">
                    <Info className="w-4 h-4" /> Emergency Helpline
                  </h4>
                  <p className="text-2xl font-black text-emerald-600 dark:text-emerald-400">
                    +91 987654321
                  </p>
                  <p className="text-xs text-emerald-600/70 dark:text-emerald-400/70 mt-1">
                    Available 24/7 for transport queries.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Routes List */}
          <div className="lg:col-span-8">
            <div className="bg-white dark:bg-slate-900/50 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-3xl p-6 lg:p-8 shadow-xl min-h-[600px]">
              <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                    Active Routes
                  </h2>
                  <p className="text-slate-500 dark:text-slate-400 text-sm">
                    Select a route to view details
                  </p>
                </div>
                <div className="relative w-full md:w-64">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search route or bus..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border-none ring-1 ring-slate-200 dark:ring-slate-700 focus:ring-2 focus:ring-emerald-500 text-slate-900 dark:text-white placeholder:text-slate-400"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <AnimatePresence>
                  {filteredRoutes.map((route) => {
                    const driver = driversData.find(
                      (d) => d.id === route.driverId,
                    );
                    return (
                      <motion.div
                        key={route.id}
                        layout
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        onClick={() =>
                          setSelectedRoute(
                            route.id === selectedRoute ? null : route.id,
                          )
                        }
                        className={`
                                        group cursor-pointer rounded-2xl p-4 border transition-all duration-300 overflow-hidden
                                        ${
                                          selectedRoute === route.id
                                            ? "bg-slate-50 dark:bg-slate-800/60 border-emerald-500/30 ring-1 ring-emerald-500/20"
                                            : "bg-white dark:bg-slate-800/40 border-slate-100 dark:border-slate-700 hover:border-emerald-200 dark:hover:border-emerald-800"
                                        }
                                    `}
                      >
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400 font-bold text-sm">
                              {route.id.split("-")[1]}
                            </div>
                            <div>
                              <h4 className="font-bold text-slate-900 dark:text-white text-lg">
                                {route.name}
                              </h4>
                              <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                                <Bus className="w-3 h-3" />
                                <span>{route.busNumber}</span>
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center gap-4">
                            <div
                              className={`px-3 py-1 rounded-full text-xs font-semibold
                                                ${
                                                  route.status === "On Time"
                                                    ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                                                    : "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400"
                                                }
                                            `}
                            >
                              {route.status}
                            </div>
                            <div
                              className={`
                                                w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 bg-slate-100 dark:bg-slate-700
                                                ${selectedRoute === route.id ? "rotate-90 bg-emerald-500 text-white" : "text-slate-400"}
                                            `}
                            >
                              <ChevronRight className="w-4 h-4" />
                            </div>
                          </div>
                        </div>

                        {/* Expanded Details */}
                        <AnimatePresence>
                          {selectedRoute === route.id && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                            >
                              <div className="mt-6 pt-6 border-t border-slate-200 dark:border-white/10 grid md:grid-cols-2 gap-8">
                                {/* Route Timeline */}
                                <div>
                                  <h5 className="text-sm font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                                    <MapPin className="w-4 h-4 text-emerald-500" />{" "}
                                    Route Stops
                                  </h5>
                                  <div className="relative pl-4 border-l-2 border-slate-100 dark:border-slate-700 space-y-6">
                                    {route.stops.map((stop, i) => (
                                      <div key={i} className="relative">
                                        <div className="absolute -left-[21px] top-1 w-3 h-3 rounded-full bg-emerald-500 border-2 border-white dark:border-slate-900"></div>
                                        <p className="text-sm font-bold text-slate-900 dark:text-white">
                                          {stop.name}
                                        </p>
                                        <p className="text-xs text-slate-500 dark:text-slate-400">
                                          {stop.time}
                                        </p>
                                      </div>
                                    ))}
                                  </div>
                                </div>

                                {/* Driver Info */}
                                <div>
                                  <h5 className="text-sm font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                                    <User className="w-4 h-4 text-emerald-500" />{" "}
                                    Driver & Staff
                                  </h5>
                                  <div className="bg-slate-50 dark:bg-black/20 rounded-xl p-4 border border-slate-100 dark:border-white/5">
                                    <div className="flex items-center gap-4 mb-4">
                                      <div
                                        className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold bg-gradient-to-br ${driver?.color}`}
                                      >
                                        {driver?.image}
                                      </div>
                                      <div>
                                        <p className="font-bold text-slate-900 dark:text-white">
                                          {driver?.name}
                                        </p>
                                        <p className="text-xs text-slate-500 dark:text-slate-400">
                                          {driver?.experience} Exp.
                                        </p>
                                      </div>
                                    </div>
                                    <div className="space-y-2 text-sm">
                                      <div className="flex items-center justify-between p-2 rounded-lg bg-white dark:bg-white/5">
                                        <span className="text-slate-500 dark:text-slate-400 flex items-center gap-2">
                                          <Phone className="w-3 h-3" /> Contact
                                        </span>
                                        <span className="font-medium text-slate-900 dark:text-white select-all">
                                          {driver?.contact}
                                        </span>
                                      </div>
                                      <div className="flex items-center justify-between p-2 rounded-lg bg-rose-50 dark:bg-rose-900/10 border border-rose-100 dark:border-rose-900/20">
                                        <span className="text-rose-600 dark:text-rose-400 flex items-center gap-2 text-xs font-bold">
                                          <ShieldCheck className="w-3 h-3" />{" "}
                                          Emergency
                                        </span>
                                        <span className="font-bold text-rose-700 dark:text-rose-300 select-all">
                                          {driver?.emergency}
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmartRouteManagement;
