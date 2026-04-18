import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaLocationDot,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa6";

const clickSound = new Audio("/sounds/click.mp3");
const successSound = new Audio("/sounds/success.mp3");

const Contact = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus("sending");

    try {
      const formData = new FormData(e.target);

      const response = await fetch("https://formspree.io/f/xaqaeezl", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        try {
          clickSound.play();
          successSound.play();
        } catch (err) {}

        setStatus("success");
        e.target.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="py-28 bg-black text-white relative overflow-hidden"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <div className="absolute w-[500px] h-[500px] bg-cyan-500/20 blur-[160px] top-10 left-10 rounded-full"></div>
        <div className="absolute w-[500px] h-[500px] bg-purple-500/20 blur-[160px] bottom-10 right-10 rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl text-center mb-4"
        >
          Contact <span className="text-cyan-400">Me</span>
        </motion.h2>

        <p className="text-gray-400 text-center mb-16">
          Let’s build something amazing 🚀
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* LEFT SIDE */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-cyan-400" />
              <p>subhajit620.saha@gmail.com</p>
            </div>

            <div className="flex items-center gap-3">
              <FaPhone className="text-cyan-400" />
              <p>+91 81014 21053</p>
            </div>

            <div className="flex items-center gap-3">
              <FaLocationDot className="text-cyan-400" />
              <p>Nadia, India</p>
            </div>

            {/* SOCIAL LINKS UPDATED */}
            <div className="flex gap-6 text-2xl pt-4">
              <a
                href="https://www.linkedin.com/in/subhajitsaha12345?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="cursor-pointer hover:text-cyan-400 hover:scale-110 transition" />
              </a>

              <a
                href="https://github.com/Subhajit620"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="cursor-pointer hover:text-cyan-400 hover:scale-110 transition" />
              </a>
            </div>
          </div>

          {/* FORM */}
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-5 p-8 rounded-2xl bg-white/5 border border-cyan-500/20"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full p-3 bg-black/40 border border-cyan-500/20 rounded"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full p-3 bg-black/40 border border-cyan-500/20 rounded"
            />

            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              required
              className="w-full p-3 bg-black/40 border border-cyan-500/20 rounded"
            />

            <button
              type="submit"
              className="w-full py-3 bg-cyan-500 text-black font-semibold rounded hover:bg-cyan-400"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>

            {/* SUCCESS MESSAGE */}
            <AnimatePresence>
              {status === "success" && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-cyan-400 text-center"
                >
                  ✔ Message sent successfully!
                </motion.p>
              )}
            </AnimatePresence>

            {/* ERROR MESSAGE */}
            {status === "error" && (
              <p className="text-red-400 text-center">
                ❌ Failed to send message. Try again.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;