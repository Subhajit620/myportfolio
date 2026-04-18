import React, { useState, useEffect } from "react"; // ✅ added useEffect
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FaGithub, FaLinkedin, FaSun, FaMoon } from "react-icons/fa";
import { assets } from "../assets/assets";

const Hero = () => {
  const [darkMode, setDarkMode] = useState(true);

  // 🎙️ AI VOICE FUNCTION (ADDED)
  const speakIntro = () => {
    const msg = new SpeechSynthesisUtterance(
      "Welcome my universe, I am Subhajit Saha"
    );

    msg.rate = 0.9;
    msg.pitch = 1.1;
    msg.volume = 1;

    const voices = window.speechSynthesis.getVoices();
    const voice = voices.find(v => v.name.includes("Google"));
    if (voice) msg.voice = voice;

    window.speechSynthesis.speak(msg);
  };

  // 🔊 AUTO PLAY (ADDED)
  useEffect(() => {
    window.speechSynthesis.getVoices();

    const playVoice = () => {
      speakIntro();

      // run only once
      window.removeEventListener("mousemove", playVoice);
      window.removeEventListener("scroll", playVoice);
      window.removeEventListener("touchstart", playVoice);
    };

    window.addEventListener("mousemove", playVoice);
    window.addEventListener("scroll", playVoice);
    window.addEventListener("touchstart", playVoice);

    return () => {
      window.removeEventListener("mousemove", playVoice);
      window.removeEventListener("scroll", playVoice);
      window.removeEventListener("touchstart", playVoice);
    };
  }, []);

  const stars = Array.from({ length: 40 });

  return (
    <section
      id="home"
      className={`relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden transition-all duration-500 ${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >

      {/* 🌌 FLOATING STARS */}
      <div className="absolute inset-0 overflow-hidden">
        {stars.map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-70"
            initial={{
              x: Math.random() * 1000,
              y: Math.random() * 800,
            }}
            animate={{
              y: [null, Math.random() * 800],
              opacity: [0.2, 1, 0.2],
            }}
            transition={{
              duration: Math.random() * 10 + 5,
              repeat: Infinity,
            }}
          />
        ))}
      </div>

      {/* 🌌 GLOW BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-3xl top-[-100px] left-[-100px] animate-pulse"></div>
        <div className="absolute w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-3xl bottom-[-120px] right-[-120px] animate-pulse"></div>
        <div className="absolute w-[300px] h-[300px] bg-purple-500/20 rounded-full blur-3xl top-1/2 left-1/3 animate-pulse"></div>
      </div>

      {/* 🌗 THEME BUTTON */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="absolute top-5 right-5 z-50 p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20"
      >
        {darkMode ? (
          <FaSun className="text-yellow-300" />
        ) : (
          <FaMoon className="text-blue-500" />
        )}
      </button>

      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between relative z-10">

        {/* LEFT SIDE */}
        <div className="md:w-1/2 mb-10 md:mb-0">

          {/* WELCOME */}
          <motion.div
            initial={{ opacity: 0, y: -30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1 }}
            className="mb-6 text-center md:text-left"
          >
            <div className="text-3xl md:text-3xl font-light bg-gradient-to-r from-pink-400 via-cyan-300 to-purple-500 bg-clip-text text-transparent animate-pulse">
              ✨ Welcome Universe ✨
            </div>
          </motion.div>

          {/* NAME */}
          <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
            <div className="text-slate-400 text-2xl md:text-3xl mb-2">
              Hi, I'm
            </div>

            <motion.div
              className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 bg-clip-text text-transparent font-extrabold"
              whileHover={{ scale: 1.05 }}
            >
              <div>Subhajit</div>
              <div>Saha</div>
              <div className="text-lg md:text-2xl font-medium text-slate-400 mt-2">
                MCA Student
              </div>
            </motion.div>
          </h1>

          {/* TYPEWRITER */}
          <h2 className="text-2xl md:text-4xl font-semibold mb-6 text-cyan-300">
            <Typewriter
              words={[
                "Aspiring DevOps Engineer",
                "AWS Enthusiastic",
                "Software Engineer",
                "Problem Solver",
              ]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h2>

          {/* DESCRIPTION */}
          <p className="text-slate-400 mb-8 leading-relaxed text-lg">
            Passionate MCA student focused on Java, Data Structures, and Cloud technologies.
            I love building scalable web applications using React, AWS, Docker, and Kubernetes.
          </p>

          {/* BUTTONS */}
          <div className="flex space-x-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-cyan-400 text-black rounded-lg hover:scale-105 transition"
            >
              View Work
            </a>

            <a
              href="#contact"
              className="px-6 py-3 border border-cyan-300 text-cyan-300 rounded-lg hover:bg-cyan-300 hover:text-black transition"
            >
              Contact Me
            </a>
          </div>

          {/* SOCIAL */}
          <div className="flex gap-6 mt-6 text-2xl text-slate-300">
            <a href="https://github.com/subhajit620" target="_blank" rel="noopener noreferrer">
              <FaGithub className="hover:text-cyan-300 transition cursor-pointer" />
            </a>

            <a href="https://www.linkedin.com/in/subhajitsaha12345" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="hover:text-blue-400 transition cursor-pointer" />
            </a>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80">

            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 opacity-40 blur-2xl"></div>

            <motion.img
              src={assets.profileImg}
              alt="Profile"
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="relative rounded-2xl w-full h-full object-cover border border-white/10 shadow-xl"
            />

            <motion.div className="absolute top-2 -left-10 px-4 py-2 bg-black/30 backdrop-blur-md border border-cyan-400/40 rounded-xl text-cyan-300 text-sm">
              ⚙️ DevOps Engineer
            </motion.div>

            <motion.div className="absolute bottom-4 -right-10 px-4 py-2 bg-black/30 backdrop-blur-md border border-purple-400/40 rounded-xl text-purple-300 text-sm">
              🧠 Problem Solver
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;