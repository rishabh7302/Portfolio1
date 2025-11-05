import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import myLogo from "../assets/fox.png";

const links = [
  { name: "Home", href: "#home" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
  { name: "Skills", href: "#skills" },
  { name: "Resume", href: "#resume" },
];

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo + Name */}
        <a href="#home" className="flex items-center gap-3">
          <img src={myLogo} alt="Logo" className="w-10 h-10 rounded-full" />
          <span className="text-white text-xl font-semibold">PORTFOLIO</span>
        </a>

        {/* Hamburger */}
        <button
          onClick={toggleMenu}
          className="lg:hidden text-white focus:outline-none"
        >
          <motion.div
            initial={false}
            animate={menuOpen ? "open" : "closed"}
            className="flex flex-col gap-1"
          >
            <motion.span
              variants={{
                closed: { rotate: 0, y: 0 },
                open: { rotate: 45, y: 6 },
              }}
              className="w-6 h-0.5 bg-white rounded"
            />
            <motion.span
              variants={{
                closed: { opacity: 1 },
                open: { opacity: 0 },
              }}
              className="w-6 h-0.5 bg-white rounded"
            />
            <motion.span
              variants={{
                closed: { rotate: 0, y: 0 },
                open: { rotate: -45, y: -6 },
              }}
              className="w-6 h-0.5 bg-white rounded"
            />
          </motion.div>
        </button>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex gap-6">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white hover:text-teal-400 transition"
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-black/90 px-4 py-4 flex flex-col gap-4"
          >
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={closeMenu}
                className="text-white text-lg hover:text-teal-400 transition"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default NavBar;
