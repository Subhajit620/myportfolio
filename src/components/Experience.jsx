import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBriefcase, FaEye, FaTimes } from "react-icons/fa";

const experienceData = [
  {
    title: "Web Development Intern",
    company: "Leveraged Growth",
    duration: "45 Days (Offline Internship)",
    desc: "Worked on frontend development using HTML, CSS, JavaScript and React. Built responsive UI components and improved design skills through real projects.",
    cert: "/certificates/leveraged-growth.jpeg",
  },
  {
    title: "Web Development Intern",
    company: "IEEE",
    duration: "30 Days (Online Internship)",
    desc: "Learned web development fundamentals, GitHub workflow, and project-based development. Strengthened problem-solving and coding practices.",
    cert: "/certificates/ieee.jpeg",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, x: -80, scale: 0.9 },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Experience = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section
      id="experience"
      className="relative py-28 bg-black text-white overflow-hidden"
    >
      {/* 🌌 CYBERPUNK BACKGROUND GLOW */}
      <div className="absolute inset-0">
        <div className="absolute w-96 h-96 bg-purple-500/20 blur-[140px] top-20 left-10 rounded-full animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-pink-500/20 blur-[140px] bottom-20 right-10 rounded-full animate-pulse"></div>
        <div className="absolute w-72 h-72 bg-cyan-500/20 blur-[120px] top-1/2 left-1/3 rounded-full animate-pulse"></div>
      </div>

      {/* GRID EFFECT */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(0,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.08)_1px,transparent_1px)] bg-[size:60px_60px]"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-medium tracking-wider">
            My <span className="text-cyan-400">Experience</span>
          </h2>

          <p className="text-gray-400 mt-3">
            Internships & Practical Learning Journey
          </p>
        </motion.div>

        {/* TIMELINE */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          className="relative border-l-2 border-cyan-500/40 ml-4 space-y-14"
        >
          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              variants={item}
              className="relative pl-10"
            >
              {/* DOT */}
              <motion.div
                whileHover={{ scale: 1.2, rotate: 10 }}
                className="absolute -left-[18px] top-2 w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center shadow-[0_0_20px_cyan]"
              >
                <FaBriefcase />
              </motion.div>

              {/* CARD */}
              <motion.div
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0px 0px 35px rgba(34, 211, 238, 0.25)",
                }}
                className="
                  p-6 rounded-2xl
                  bg-white/5 backdrop-blur-2xl
                  border border-cyan-500/20
                  transition
                "
              >
                <h3 className="text-xl font-semibold text-cyan-300">
                  {exp.title}
                </h3>

                <p className="text-gray-300 mt-1">{exp.company}</p>

                <span className="text-sm text-gray-400">
                  {exp.duration}
                </span>

                <p className="text-gray-300 mt-3 leading-relaxed">
                  {exp.desc}
                </p>

                {/* BUTTON */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCert(exp.cert)}
                  className="
                    mt-4 flex items-center gap-2 px-4 py-2
                    bg-cyan-500 text-black
                    rounded-lg font-medium
                    hover:bg-cyan-400 transition
                  "
                >
                  <FaEye />
                  View Certificate
                </motion.button>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.6, opacity: 0 }}
              className="relative bg-white p-4 rounded-xl max-w-3xl w-full flex justify-center"
            >
              {/* CLOSE */}
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-3 right-3 text-black text-xl"
              >
                <FaTimes />
              </button>

              {/* IMAGE */}
              <img
                src={selectedCert}
                alt="Certificate"
                className="max-h-[80vh] w-auto object-contain rounded-lg"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Experience;