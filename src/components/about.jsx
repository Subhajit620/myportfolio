import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="relative py-24 text-white overflow-hidden bg-black"
    >
      {/* 🌌 CYBERPUNK BACKGROUND GLOW */}
      <div className="absolute inset-0">
        <div className="absolute w-[500px] h-[500px] bg-cyan-500/20 blur-[120px] top-10 left-10 rounded-full"></div>
        <div className="absolute w-[400px] h-[400px] bg-purple-500/20 blur-[120px] bottom-10 right-10 rounded-full"></div>
        <div className="absolute w-[300px] h-[300px] bg-pink-500/20 blur-[120px] top-1/2 left-1/3 rounded-full"></div>
      </div>

      {/* FLOATING GRID EFFECT */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20"></div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="container mx-auto px-6 relative z-10"
      >
        {/* HEADING */}
        <h2 className="text-4xl md:text-5xl font-medium text-center mb-4">
          About <span className="text-cyan-400">Me</span>
        </h2>

        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-14">
          Passionate MCA student focused on building strong software development and problem-solving skills.
        </p>

        {/* 3D GLASS CARD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          className="max-w-6xl mx-auto"
        >
          <div className="relative p-10 md:p-12 rounded-2xl 
                          bg-white/5 backdrop-blur-2xl 
                          border border-cyan-400/20
                          shadow-[0_0_40px_rgba(0,255,255,0.15)]
                          hover:shadow-[0_0_70px_rgba(0,255,255,0.25)]
                          transition-all duration-500">

            {/* NEON TITLE */}
            <h3 className="text-2xl md:text-3xl font-medium mb-5 text-cyan-300">
              My journey, skills, and career aspirations
            </h3>

            {/* TAG */}
            <p className="inline-block bg-cyan-500/10 text-cyan-300 px-4 py-1 rounded-full text-sm mb-6 border border-cyan-400/20">
              Software Engineer • Full Stack Developer • Problem Solver
            </p>

            {/* DESCRIPTION (OLD CONTENT SAME) */}
            <p className="text-gray-300 leading-relaxed text-lg mb-6">
              I am currently pursuing a Master of Computer Applications (MCA) with a strong interest in software development and system design.
              My goal is to become a skilled Software Engineer in a reputed organization where I can contribute to real-world impactful projects.
            </p>

            <p className="text-gray-300 leading-relaxed text-lg mb-6">
              I have a strong foundation in HTML, CSS, and JavaScript for frontend development.
              I am also learning and working with DevOps & Cloud technologies such as Docker, Kubernetes, CI/CD pipelines, GitHub, Terraform, AWS, and Linux.
              In programming, I have good knowledge of Java and basic Python, along with MySQL for database management.
              Additionally, I have a strong understanding of Data Structures and Algorithms in C, which helps me improve my problem-solving skills.
            </p>

            <p className="text-gray-300 leading-relaxed text-lg mb-6">
              I am passionate about building real-world projects and continuously improving my technical skills.
              I enjoy exploring how scalable systems are designed and deployed in modern software development environments.
            </p>

            <p className="text-gray-300 leading-relaxed text-lg">
              My long-term goal is to grow as a full-stack developer and contribute to innovative, user-focused software solutions in a top organization.
            </p>

            {/* 3D CYBER GLOW BORDER EFFECT */}
            <div className="absolute inset-0 rounded-2xl border border-cyan-500/10 pointer-events-none"></div>

          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;