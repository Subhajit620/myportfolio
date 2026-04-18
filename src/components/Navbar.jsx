import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaBars, FaXmark } from "react-icons/fa6";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  // MENU ITEMS
  const menuItems = [
    "Home",
    "About",
    "Education",
    "Skills",
    "Experience",
    "Projects",
    "Contact",
  ];

  return (
    <motion.nav
      className="fixed w-full z-50 bg-black/80 backdrop-blur-sm py-4 px-8 shadow-lg"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex justify-between items-center">

        {/* LOGO */}
        <a
          href="#home"
          className="text-3xl font-bold text-white flex items-center gap-2"
        >
          Subhajit
          <span className="text-purple-400">Saha</span>
          <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
        </a>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex space-x-10 items-center">
          {menuItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative text-white/80 hover:text-purple-400 transition group"
            >
              {item}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-500 transition-all group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* MOBILE MENU ICON */}
        <div className="md:hidden text-white text-2xl">
          {showMenu ? (
            <FaXmark onClick={() => setShowMenu(false)} />
          ) : (
            <FaBars onClick={() => setShowMenu(true)} />
          )}
        </div>
      </div>

      {/* MOBILE MENU */}
      {showMenu && (
        <div className="md:hidden mt-4 bg-black/90 h-screen flex flex-col items-center justify-center space-y-6 text-white">
          {menuItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setShowMenu(false)}
              className="text-lg hover:text-purple-400 transition"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;