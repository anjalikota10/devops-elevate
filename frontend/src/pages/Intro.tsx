import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import BlurText from "../components/BlurText";

export default function DevOpsIntro() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center py-16 px-6">
      {/* Centered Animated Title */}
      <BlurText
        text="From Waterfalls to Velocity: The DevOps Story"
        delay={100}
        animateBy="words"
        direction="top"
        className="text-5xl font-extrabold mb-12 text-center drop-shadow-[0_0_15px_rgba(59,130,246,0.6)]"
      />

      {/* Centered Image */}
      <motion.img
        src="/freepik-flat-gradient-devops-infinity-loop-diagram-202511070549553Whf.png"  // :point_left: replace with your actual image filename in public/
        alt="From Waterfalls to Velocity"
        className="rounded-2xl shadow-2xl max-w-full w-[75%] md:w-[60%] lg:w-[50%] aspect-[4/3] object-cover"
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.4 }}
      />

      {/* Next Button */}
      <motion.button
        onClick={() => navigate("/whatisdevops")}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
        className="mt-12 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg"
      >
        Next ➜
      </motion.button>
    </div>
  );
}
