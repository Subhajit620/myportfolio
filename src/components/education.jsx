import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaSchool } from "react-icons/fa";
import { HiAcademicCap } from "react-icons/hi2";

const FloatingParticle = ({ i }) => {
  return (
    <motion.div
      className="absolute w-[2px] h-[2px] bg-cyan-300 rounded-full opacity-40"
      initial={{
        x: Math.random() * 1000,
        y: Math.random() * 800,
      }}
      animate={{
        y: [0, Math.random() * 600],
        opacity: [0.2, 1, 0.2],
      }}
      transition={{
        duration: 6 + Math.random() * 5,
        repeat: Infinity,
      }}
    />
  );
};

const Education = () => {
  const education = [
    {
      title: "Master of Computer Applications (MCA)",
      institute: "Kazi Nazrul University",
      year: "Pursuing",
      result: "SGPA: 9.32",
      icon: <HiAcademicCap size={18} />,
      current: true,
      desc: "Advanced system design, cloud computing, DevOps."
    },
    {
      title: "Bachelor of Computer Applications (BCA)",
      institute: "Global College of Science and Technology",
      year: "2021 - 2024",
      result: "CGPA: 8.37",
      icon: <FaGraduationCap size={16} />,
      desc: "Strong foundation in programming & databases."
    },
    {
      title: "Higher Secondary (10+2)",
      institute: "Ranabanda St. Mary’s High School",
      year: "2020 - 2021",
      result: "78%",
      icon: <FaSchool size={16} />,
      desc: "Science stream with mathematics focus."
    },
    {
      title: "Secondary (10th)",
      institute: "Ranabanda St. Mary’s High School",
      year: "2018 - 2019",
      result: "61%",
      icon: <FaSchool size={16} />,
      desc: "Built academic foundation."
    }
  ];

  return (
    <section className="relative py-32 bg-black text-white overflow-hidden">

      {/* 🌌 GAME BACKGROUND LAYERS */}
      <div className="absolute inset-0">

        {/* energy waves */}
        <div className="absolute w-[600px] h-[600px] bg-cyan-500/10 blur-3xl top-[-150px] left-[-150px] rounded-full animate-pulse" />
        <div className="absolute w-[500px] h-[500px] bg-purple-500/10 blur-3xl bottom-[-150px] right-[-150px] rounded-full animate-pulse" />

        {/* floating particles */}
        {Array.from({ length: 35 }).map((_, i) => (
          <FloatingParticle key={i} i={i} />
        ))}

        {/* scanline effect */}
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(0,255,255,0.05),transparent)] animate-pulse" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-5xl mx-auto px-6">

        {/* TITLE (GLITCH STYLE) */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="text-4xl md:text-5xl font-bold text-center mb-4 tracking-[6px]"
        >
          EDUCATION <span className="text-cyan-400">SYSTEM</span>
        </motion.h2>

        <p className="text-gray-500 text-center mb-14 tracking-widest">
          NODE // ACADEMIC MEMORY
        </p>

        {/* TIMELINE */}
        <div className="relative border-l-2 border-cyan-500/40 ml-4 space-y-14">

          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 80, rotateY: 10 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative pl-10"
            >

              {/* NODE */}
              <motion.div
                whileHover={{ scale: 1.2 }}
                className="absolute -left-[18px] top-6 w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center shadow-[0_0_25px_cyan]"
              >
                {item.icon}
              </motion.div>

              {/* CARD (GAME PANEL STYLE) */}
              <motion.div
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 0px 30px rgba(0,255,255,0.25)"
                }}
                className="relative bg-black/40 border border-cyan-500/20 backdrop-blur-xl p-6 rounded-2xl transition-all duration-300"
              >

                {/* LIVE STATUS */}
                {item.current && (
                  <div className="absolute right-5 top-5 text-xs px-3 py-1 bg-cyan-500/20 text-cyan-300 border border-cyan-400/30 rounded-full animate-pulse">
                    ACTIVE NODE
                  </div>
                )}

                {/* TITLE */}
                <h3 className="text-xl font-semibold text-cyan-300">
                  {item.title}
                </h3>

                <p className="text-gray-300 mt-1">
                  {item.institute}
                </p>

                {/* META INFO */}
                <div className="flex justify-between mt-3 text-sm text-gray-500">
                  <span>{item.year}</span>
                  <span className="text-purple-300 font-medium">
                    {item.result}
                  </span>
                </div>

                {/* DESCRIPTION */}
                <p className="text-gray-400 mt-4 text-sm leading-relaxed">
                  {item.desc}
                </p>

              </motion.div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Education;