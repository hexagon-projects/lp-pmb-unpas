import { motion } from "framer-motion";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import { useState } from "react";

const AnimatedRichSubtitle = ({ text, className = "", color, sizeText, weight, justify = 'justify-center', alignText = 'text-center', tabletAlign = 'md:text-left' }) => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [sectionRef, isInView] = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  if (isInView && !hasAnimated) {
    setHasAnimated(true);
  }

  const containerVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
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
          <h2
            className={`text-xl md:text-2xl lg:text-4xl text-gray-900 font-bold ${alignText} ${tabletAlign}`}
            style={{ color: color }}
            dangerouslySetInnerHTML={{ __html: text }}
          ></h2>
        </motion.div>
      )}
    </div>
  );
};

export default AnimatedRichSubtitle;