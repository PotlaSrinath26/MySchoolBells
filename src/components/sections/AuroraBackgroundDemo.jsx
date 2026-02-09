import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "../ui/aurora-background";
import { Button } from "../ui/Button";
import { Link } from "react-router-dom";

export function AuroraBackgroundDemo() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="text-3xl md:text-7xl font-bold dark:text-white text-slate-900 text-center">
          Experience the Aurora Effect
        </div>
        <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 text-neutral-700 py-4 text-center">
          Beautiful animated gradients that bring your pages to life
        </div>
        <div className="flex gap-4 mt-4">
          <Link to="/">
            <Button className="bg-slate-900 dark:bg-white rounded-full w-fit text-white dark:text-black px-6 py-3 font-semibold hover:scale-105 transition-transform">
              Back to Home
            </Button>
          </Link>
          <Link to="/modules">
            <Button className="bg-transparent border-2 border-slate-900 dark:border-white rounded-full w-fit text-slate-900 dark:text-white px-6 py-3 font-semibold hover:bg-slate-900/10 dark:hover:bg-white/10 transition-colors">
              View Modules
            </Button>
          </Link>
        </div>
      </motion.div>
    </AuroraBackground>
  );
}
