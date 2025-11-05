// components/PlatformStats.jsx
import React from "react";
import { SiLeetcode, SiCodeforces, SiHackerrank } from "react-icons/si";
import CountUpAnimated from "./CountUpAnimated";
import { motion } from "framer-motion";

const platforms = [
  {
    name: "LeetCode",
    icon: SiLeetcode,
    stats: [
      { label: "Problems Solved", value: 450 },
      { label: "Contest Rating", value: 1800 },
    ],
  },
  {
    name: "Codeforces",
    icon: SiCodeforces,
    stats: [
      { label: "Problems Solved", value: 420 },
      { label: "Rating", value: 1900 },
    ],
  },
  {
    name: "HackerRank",
    icon: SiHackerrank,
    stats: [
      { label: "Problems Solved", value: 500 },
      { label: "Badges", value: 15 },
    ],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const PlatformStats = () => {
  return (
    <section className="py-16 px-6 bg-gradient-to-r from-black via-purple-950 to-black text-white">
      <h2 className="text-4xl font-bold mb-12 text-center">Platform Stats</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10">
        {platforms.map(({ name, icon: Icon, stats }) => (
          <motion.div
            key={name}
            className="bg-gray-800 rounded-xl p-8 shadow-lg flex flex-col items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            variants={cardVariants}
          >
            <Icon size={64} className="mb-4 text-pink-400" aria-label={name} />
            <h3 className="text-2xl font-semibold mb-6">{name}</h3>
            <div className="space-y-4 w-full">
              {stats.map(({ label, value }) => (
                <div key={label} className="flex justify-between text-lg font-medium">
                  <span>{label}</span>
                  <CountUpAnimated end={value} />
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PlatformStats;
