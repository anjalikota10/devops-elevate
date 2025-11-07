import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import BlurText from "../components/BlurText";

export default function WhatIsDevOps() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center py-16 px-6">
      {/* Animated heading (BlurText) */}
      <BlurText
        text="What is DevOps?"
        delay={150}
        animateBy="words"
        direction="top"
        className="text-5xl font-extrabold mb-4 text-center drop-shadow-[0_0_12px_rgba(59,130,246,0.6)]"
      />

      <p className="text-gray-400 text-center max-w-3xl mb-12 text-2xl">
        A culture and set of practices that brings development and operations together.
      </p>

      <div className="flex flex-col md:flex-row items-start justify-center gap-8 w-full max-w-6xl">
        {/* Left section - cards */}
        <div className="flex flex-col gap-6 w-full md:w-1/2">
          {[
            {
              title: "⚙ Collaboration Between Teams",
              desc: "DevOps brings Development and Operations teams together, breaking down silos to work as one unified team towards common goals.",
            },
            {
              title: "⚙ Automation of Processes",
              desc: "Automates repetitive tasks like testing, building, and deploying software, reducing human error and speeding up delivery.",
            },
            {
              title: "⚙ Continuous Integration & Deployment",
              desc: "Code changes are automatically tested and deployed multiple times a day, ensuring faster releases and quick feedback.",
            },
            {
              title: "⚙ Faster Delivery with Quality",
              desc: "Delivers features and fixes to users quickly while maintaining high quality and reliability through automated testing.",
            },
          ].map((card, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 25px rgba(59,130,246,0.5)",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="bg-[#0b1736] rounded-xl p-5 border border-gray-800 shadow-md cursor-pointer"
            >
              <p className="font-semibold text-lg mb-2 text-blue-400">{card.title}</p>
              <p className="text-gray-300 text-base">{card.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Right section - example card with image */}
        <motion.div
          whileHover={{ scale: 1.03, boxShadow: "0 0 25px rgba(59,130,246,0.5)" }}
          transition={{ duration: 0.3 }}
          className="bg-gradient-to-br from-indigo-950 to-purple-900 p-6 rounded-xl w-full md:w-1/2 shadow-lg"
        >
          <h2 className="text-2xl font-bold text-white mt-2">The Restaurant Kitchen</h2>

          <motion.img
            src="/collaboration-B4BjJF_y.jpg"
            alt="DevOps Kitchen"
            className="rounded-xl mt-4 max-w-[75%] mx-auto shadow-2xl"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />

          <ul className="text-gray-300 mt-4 space-y-3 text-lg">
            <li> <strong>Chefs (Developers)</strong> create new dishes and recipes</li>
            <li> <strong>Waiters (Operations)</strong> serve customers efficiently</li>
            <li> <strong>Automation</strong> connects kitchen and dining area</li>
            <li> <strong>Result:</strong> Faster delivery, better quality, fewer mistakes</li>
          </ul>
        </motion.div>
      </div>

      <button
        onClick={() => navigate("/before-devops")}
        className="mt-10 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full transition-all"
      >
        Next ➜
      </button>
    </div>
  );
}

