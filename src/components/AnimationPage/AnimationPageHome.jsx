import { motion } from "framer-motion";
import { Children } from "react";

const animations = {
  initial: { opacity: 0, y: -500 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -100 },
};

const AnimatedPageHome = ({ children }) => {
  return (
    <motion.div
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  );
};

export default AnimatedPageHome;