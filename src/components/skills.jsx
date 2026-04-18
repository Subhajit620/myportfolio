import React from "react";
import { motion } from "framer-motion";

import {
  FaJava, FaHtml5, FaCss3Alt, FaCode
} from "react-icons/fa";
import {
  SiC, SiPython, SiJavascript, SiReact, SiMysql
} from "react-icons/si";

const skills = [
  {
    title: "DevOps & Cloud",
    items: [
      { name: "Docker", level: 72, icon: <FaCode /> },
      { name: "Kubernetes", level: 70, icon: <FaCode /> },
      { name: "CI/CD", level: 75, icon: <FaCode /> },
      { name: "Terraform", level: 73, icon: <FaCode /> },
      { name: "AWS", level: 78, icon: <FaCode /> },
      { name: "Linux", level: 80, icon: <FaCode /> },
    ],
  },
  {
    title: "Programming Languages",
    items: [
      { name: "C", level: 85, icon: <SiC /> },
      { name: "Python", level: 88, icon: <SiPython /> },
      { name: "Java", level: 82, icon: <FaJava /> },
      { name: "DSA", level: 86, icon: <FaCode /> },
    ],
  },
  {
    title: "Web Development",
    items: [
      { name: "HTML", level: 92, icon: <FaHtml5 /> },
      { name: "CSS", level: 90, icon: <FaCss3Alt /> },
      { name: "JavaScript", level: 88, icon: <SiJavascript /> },
      { name: "React.js", level: 85, icon: <SiReact /> },
    ],
  },
  {
    title: "Database",
    items: [
      { name: "MySQL", level: 78, icon: <SiMysql /> }
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative py-28 bg-black text-white overflow-hidden"
    >
      {/* CYBERPUNK GLOW BACKGROUND */}
      <div className="absolute inset-0">
        <div className="absolute w-[500px] h-[500px] bg-cyan-500/20 blur-[140px] top-10 left-10 rounded-full animate-pulse"></div>
        <div className="absolute w-[500px] h-[500px] bg-purple-500/20 blur-[140px] bottom-10 right-10 rounded-full animate-pulse"></div>
        <div className="absolute w-[300px] h-[300px] bg-pink-500/20 blur-[120px] top-1/2 left-1/3 rounded-full animate-pulse"></div>
      </div>

      {/* GRID */}
      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(0,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.06)_1px,transparent_1px)] bg-[size:55px_55px]"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-medium tracking-wider">
            My <span className="text-cyan-400">Skills</span>
          </h2>

          <p className="text-gray-400 mt-3">
            Technologies and tools I work with.
          </p>
        </motion.div>

        {/* SKILLS */}
        <div className="space-y-14">
          {skills.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -80 : 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="
                relative p-8 rounded-2xl
                bg-white/5 backdrop-blur-2xl
                border border-cyan-400/20
                shadow-[0_0_40px_rgba(0,255,255,0.08)]
                hover:shadow-[0_0_80px_rgba(0,255,255,0.25)]
                transition-all duration-500
              "
            >
              <h3 className="text-2xl font-medium text-cyan-300 mb-8 border-l-4 border-cyan-400 pl-4">
                {cat.title}
              </h3>

              <div className="grid md:grid-cols-2 gap-6">
                {cat.items.map((s, j) => (
                  <div
                    key={j}
                    className="p-4 rounded-xl bg-black/40 border border-cyan-500/20 hover:scale-[1.03] transition"
                  >
                    <div className="flex items-center gap-3 text-cyan-300 text-xl">
                      {s.icon}
                      <span className="text-white text-base">{s.name}</span>
                    </div>

                    <div className="w-full h-2 bg-gray-800 mt-3 rounded overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${s.level}%` }}
                        transition={{ duration: 1 }}
                        className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500"
                      />
                    </div>

                    <p className="text-right text-sm text-cyan-300 mt-1">
                      {s.level}%
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;