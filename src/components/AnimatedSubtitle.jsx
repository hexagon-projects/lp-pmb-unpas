import { motion } from "framer-motion";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { useState } from "react";
import Title from "./Title";

const AnimatedSubtitle = ({ text, className = "", color, sizeText, weight, justify = 'justify-center' }) => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [sectionRef, isInView] = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  if (isInView && !hasAnimated) {
    setHasAnimated(true);
  }

  const words = text?.split(" ");

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, x: 10 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { 
        duration: 1.0, 
        ease: "easeOut" 
      } 
    },
  };

  return (
    <div ref={sectionRef} className={className}>
      {hasAnimated && (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className={`flex flex-wrap ${justify}`}
        >
          {words?.map((word, index) => (
            <motion.span
              key={index}
              variants={wordVariants}
              className="inline-block mr-1 text-left"
            >
              <Title sizeText={sizeText} title={word} color={color} fontWeight={weight}/>
            </motion.span>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default AnimatedSubtitle;