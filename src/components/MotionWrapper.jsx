import { motion } from "framer-motion";

const animations = {
    fadeInUp: {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    },
    fadeInDown: {
        hidden: { opacity: 0, y: -30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    },
    fadeInLeft: {
        hidden: { opacity: 0, x: -30 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
    },
    fadeInRight: {
        hidden: { opacity: 0, x: 30 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
    },
    zoomIn: {
        hidden: { scale: 0.8, opacity: 0 },
        visible: { scale: 1, opacity: 1, transition: { duration: 0.6 } },
    },
    zoomOut: {
        hidden: { scale: 1.2, opacity: 0 },
        visible: { scale: 1, opacity: 1, transition: { duration: 0.6 } },
    },
    rotate: {
        hidden: { rotate: -180, opacity: 0 },
        visible: { rotate: 0, opacity: 1, transition: { duration: 0.6 } },
    },
    slideInLeft: {
        hidden: { x: -100, opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { duration: 0.6 } },
    },
    slideInRight: {
        hidden: { x: 100, opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { duration: 0.6 } },
    },
    slideInUp: {
        hidden: { y: 100, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
    },
    slideInDown: {
        hidden: { y: -100, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
    },
    bounce: {
        hidden: { y: -20, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 120 } },
    },
    scaleUp: {
        hidden: { scale: 0.5, opacity: 0 },
        visible: { scale: 1, opacity: 1, transition: { duration: 0.6 } },
    },
    scaleDown: {
        hidden: { scale: 1.5, opacity: 0 },
        visible: { scale: 1, opacity: 1, transition: { duration: 0.6 } },
    },
};

const MotionWrapper = ({ children, type = "fadeInUp", delay = 0, duration = 0.6, once = true, amount = 0.3, className, style }) => {
    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once, amount }}
            variants={animations[type]}
            transition={{ delay, duration }}
            style={style}
            className={className}
        >
            {children}
        </motion.section>
    );
};

export default MotionWrapper;
