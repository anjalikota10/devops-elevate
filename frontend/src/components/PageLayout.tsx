import React from "react";
import BlurText from "../components/BlurText";
import { useNavigate } from "react-router-dom";

interface PageLayoutProps {
  title: string;
  description: string;
  nextPath: string;
  isLast?: boolean;
}

const PageLayout: React.FC<PageLayoutProps> = ({ title, description, nextPath, isLast = false }) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-start items-center min-h-screen bg-black text-white px-6 pt-24">
      {/* Heading */}
      <BlurText
        text={title}
        delay={150}
        animateBy="words"
        direction="top"
        className="text-7xl font-extrabold mb-8 text-center"
      />

      {/* Description */}
      <p className="text-lg max-w-2xl text-center leading-relaxed">
        {description}
      </p>

      {/* Button */}
      <button
        onClick={() => navigate(nextPath)}
        className="fixed bottom-6 right-6 bg-blue-600 text-white px-5 py-3 rounded-full shadow-lg hover:bg-blue-700 transition-all"
      >
        {isLast ? "Go to First Page ↻" : "Next ➜"}
      </button>
    </div>
  );
};

export default PageLayout;
