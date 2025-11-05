// components/ThemeSwitcher.jsx
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BsSun, BsMoon } from "react-icons/bs";

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setTheme(prefersDark ? "dark" : "light");
      document.documentElement.classList.toggle("dark", prefersDark);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  };

  return (
    <section className="py-16 px-6 bg-gradient-to-r from-black via-purple-950 to-black text-white flex flex-col items-center">
      <h2 className="text-4xl font-bold mb-8">Theme Switcher</h2>
      <motion.button
        onClick={toggleTheme}
        className="bg-white dark:bg-gray-800 text-indigo-700 dark:text-pink-400 rounded-full p-4 shadow-lg focus:outline-none flex items-center justify-center"
        whileTap={{ scale: 0.9 }}
        aria-label="Toggle theme"
      >
        <AnimatePresence exitBeforeEnter initial={false}>
          {theme === "light" ? (
            <motion.div
              key="sun"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.3 }}
            >
              <BsSun size={32} />
            </motion.div>
          ) : (
            <motion.div
              key="moon"
              initial={{ opacity: 0, rotate: 90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: -90 }}
              transition={{ duration: 0.3 }}
            >
              <BsMoon size={32} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
      <p className="mt-4 text-indigo-200 max-w-md text-center">
        Toggle between light and dark themes with smooth animated transitions.
      </p>
    </section>
  );
};

export default ThemeSwitcher;
