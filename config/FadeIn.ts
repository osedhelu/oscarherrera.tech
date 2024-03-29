import type { Variants } from "framer-motion";
type Direction = "up" | "down" | "left" | "right";

export const fadeIn = (direction: Direction, delay: unknown): Variants => {
  return {
    hidden: {
      y: direction === "up" ? 80 : direction === "down" ? -80 : 0,
      opacity: 0,
      x: direction === "left" ? 80 : direction === "right" ? -80 : 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        delay: delay as number,
        duration: 1.2,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};
