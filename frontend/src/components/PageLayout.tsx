import { motion } from "framer-motion";
import BlurText from "./BlurText";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface PageLayoutProps {
  title: string;
  text: string;
  nextPath?: string;
}

export default function PageLayout({ title, text, nextPath }: PageLayoutProps) {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white text-center px-8">
      <div className="max-w-2xl -mt-24">
        <BlurText
          text={title}
          delay={150}
          animateBy="words"
          direction="top"
          className="text-4xl font-bold mb-4"
        />
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-lg text-gray-300 leading-relaxed"
        >
          {text}
        </motion.p>
      </div>

      {nextPath && (
        <button
          onClick={() => navigate(nextPath)}
          className="mt-12 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full flex items-center gap-2 shadow-lg transition"
        >
          Next <ArrowRight className="h-4 w-4" />
        </button>
      )}
    </div>
  );
}
