import React, { useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

interface StackedCardsProps {
  cards: { id: number; content: React.ReactNode }[];
}

const StackedCards: React.FC<StackedCardsProps> = ({ cards }) => {
  const [hovered, setHovered] = useState<number | null>(null);

  // Create shared motion values
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [15, -15]);
  const rotateY = useTransform(x, [-100, 100], [-15, 15]);

  return (
    <div
      className="relative w-[400px] h-[250px] mx-auto perspective-1000"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        x.set(e.clientX - rect.left - rect.width / 2);
        y.set(e.clientY - rect.top - rect.height / 2);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      {cards.map((card, index) => (
        <motion.div
          key={card.id}
          className="absolute w-full h-full rounded-2xl shadow-lg overflow-hidden cursor-pointer"
          style={{
            zIndex: cards.length - index,
            rotateX,
            rotateY,
            translateZ: (cards.length - index) * -20,
          }}
          initial={{ scale: 0.95, opacity: 0.8 }}
          animate={{
            scale: hovered === index ? 1.05 : 1,
            opacity: hovered === index ? 1 : 0.8,
            y: hovered === index ? -10 : 0,
          }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          onMouseEnter={() => setHovered(index)}
          onMouseLeave={() => setHovered(null)}
        >
          {card.content}
        </motion.div>
      ))}
    </div>
  );
};

export default StackedCards;
