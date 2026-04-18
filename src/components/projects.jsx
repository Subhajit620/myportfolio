import React from "react";
import { motion } from "framer-motion";
import project1 from "../assets/project1.webp";
import project2 from "../assets/project2.jpg";

const projects = [
  {
    id: 1,
    title: "Smart Fleet Tracking System",
    desc: "Integrated logistics + fleet monitoring system with real-time tracking.",
    tech: "HTML, CSS, JS, PHP, DevOps",
    github: "https://github.com/Subhajit620/car-tracking-final-16.1.26",
    image: project1,
  },
  {
    id: 2,
    title: "Portfolio Website",
    desc: "Personal developer portfolio with modern UI and animations.",
    tech: "React, Tailwind CSS",
    github: "https://github.com/Subhajit620/myportfolio",
    image: project2,
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative py-28 bg-black text-white overflow-hidden"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <div className="absolute w-[600px] h-[600px] bg-cyan-500/20 blur-[160px] top-10 left-10 rounded-full animate-pulse"></div>
        <div className="absolute w-[500px] h-[500px] bg-purple-500/20 blur-[160px] bottom-10 right-10 rounded-full animate-pulse"></div>
        <div className="absolute w-[300px] h-[300px] bg-pink-500/20 blur-[140px] top-1/2 left-1/3 rounded-full animate-pulse"></div>
      </div>

      {/* GRID */}
      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(0,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl text-center mb-4"
        >
          Featured <span className="text-cyan-400">Projects</span>
        </motion.h2>

        <p className="text-gray-400 text-center mb-16">
          Cyberpunk-style interactive project showcase
        </p>

        {/* CARDS */}
        <div className="grid md:grid-cols-2 gap-12">

          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, rotateX: 20, y: 60 }}
              whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6 }}
              className="
                relative p-6 rounded-2xl
                bg-white/5 backdrop-blur-2xl
                border border-cyan-500/20
                shadow-[0_0_40px_rgba(0,255,255,0.10)]
                hover:shadow-[0_0_90px_rgba(0,255,255,0.35)]
              "
            >

              {/* IMAGE */}
              <div className="overflow-hidden rounded-lg mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover hover:scale-110 transition duration-700"
                />
              </div>

              {/* TITLE */}
              <h3 className="text-xl font-semibold text-cyan-300 mb-3">
                {project.title}
              </h3>

              {/* DESC */}
              <p className="text-gray-300 text-sm mb-4">
                {project.desc}
              </p>

              {/* TECH */}
              <p className="text-xs text-cyan-400 mb-6 tracking-wider">
                {project.tech}
              </p>

              {/* 🔥 GITHUB BUTTON ADDED */}
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="
                  inline-block text-sm px-5 py-2 rounded-lg
                  border border-cyan-400
                  text-cyan-300
                  hover:bg-cyan-400 hover:text-black
                  transition
                "
              >
                View Code
              </a>

              {/* GLOW DOT */}
              <div className="absolute top-3 right-3 w-2 h-2 bg-cyan-400 rounded-full animate-ping" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
