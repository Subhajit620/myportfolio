import React from "react";
import { FaLinkedin, FaGithub, FaHeart } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="relative bg-black text-gray-400 py-10 border-t border-cyan-500/20 overflow-hidden">

      {/* 🌌 BACKGROUND GLOW */}
      <div className="absolute inset-0">
        <div className="absolute w-[300px] h-[300px] bg-cyan-500/20 blur-[120px] bottom-0 left-10 rounded-full animate-pulse"></div>
        <div className="absolute w-[300px] h-[300px] bg-purple-500/20 blur-[120px] top-0 right-10 rounded-full animate-pulse"></div>
      </div>

      {/* GRID EFFECT */}
      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(0,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="max-w-6xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">

        {/* LEFT */}
        <p className="text-sm text-center md:text-left text-gray-400">
          © {new Date().getFullYear()}{" "}
          <span className="text-cyan-400">Subhajit Saha</span>. All rights reserved.
        </p>

        {/* CENTER */}
        <p className="text-sm flex items-center gap-2 text-gray-300">
          Made with <FaHeart className="text-pink-500 animate-pulse" /> using
          <span className="text-cyan-400">React</span>
        </p>

        {/* RIGHT SOCIAL */}
        <div className="flex gap-6 text-2xl">

          <a
            href="https://www.linkedin.com/in/subhajitsaha12345?utm_source=share_via&utm_content=profile&utm_medium=member_android"
            target="_blank"
            className="text-cyan-400 hover:scale-125 hover:text-blue-400 transition"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/Subhajit620"
            target="_blank"
            className="text-gray-300 hover:scale-125 hover:text-white transition"
          >
            <FaGithub />
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;