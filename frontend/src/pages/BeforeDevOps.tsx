import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import BlurText from "../components/BlurText";

export default function BeforeDevOps() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center py-16 px-6">
      {/* Animated heading */}
      <BlurText
        text="Before DevOps"
        delay={150}
        animateBy="words"
        direction="top"
        className="text-5xl font-extrabold mb-4 text-center drop-shadow-[0_0_12px_rgba(239,68,68,0.6)]"
      />

      <p className="text-gray-400 text-center max-w-2xl mb-12 text-2xl">
        Understanding the challenges that made DevOps necessary.
      </p>

      <div className="flex flex-col md:flex-row items-start justify-center gap-8 w-full max-w-6xl">
        {/* Left section - animated cards */}
        <div className="flex flex-col gap-6 w-full md:w-1/2">
          {[
            {
              title: "❌ Teams Worked in Silos",
              desc: "Development and Operations worked separately with different goals, leading to miscommunication and conflicts.",
            },
            {
              title: "❌ Manual Deployments",
              desc: "Releases required manual steps that took weeks or even months, with complex handoff processes.",
            },
            {
              title: "❌ Blame Games & Finger-Pointing",
              desc: "When things went wrong, teams blamed each other instead of collaborating to find solutions.",
            },
            {
              title: "❌ Slow Feedback & Late Bugs",
              desc: "Problems were discovered late in production, making fixes expensive and time-consuming.",
            },
          ].map((card, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 25px rgba(239,68,68,0.5)",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="bg-[#1a0b0b] rounded-xl p-5 border border-red-800 shadow-md cursor-pointer"
            >
              <p className="font-semibold text-lg mb-2 text-red-400">{card.title}</p>
              <p className="text-gray-300 text-base">{card.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Right section - example image */}
        <motion.div
          whileHover={{ scale: 1.03, boxShadow: "0 0 25px rgba(239,68,68,0.5)" }}
          transition={{ duration: 0.3 }}
          className="bg-gradient-to-br from-rose-950 to-red-900 p-6 rounded-xl w-full md:w-1/2 shadow-lg"
        >
          <h2 className="text-2xl font-bold text-white mt-2">Throwing Over the Wall</h2>

          <motion.img
            src="/before-devops-BXPOGZuj.jpg"
            alt="Before DevOps Wall"
            className="rounded-xl mt-4 max-w-[75%] mx-auto shadow-2xl"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />

          <ul className="text-gray-300 mt-4 space-y-3 text-lg">
            <li> <strong>Developers</strong> finished coding and threw it “over the wall”</li>
            <li> <strong>Operations</strong> struggled to deploy without involvement</li>
            <li> <strong>Problems</strong> caused delays and blame</li>
            <li> <strong>Result:</strong> Customers waited months for fixes!</li>
          </ul>
        </motion.div>
      </div>

      <button
        onClick={() => navigate("/")}
        className="mt-10 bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-full transition-all"
      >
        ← Back
      </button>
    </div>
  );
}

