import { motion } from "framer-motion";
import Text from "./Text";

const FakultasCardMobile = ({ faculty, index = 0, isVisible = true }) => {
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.97,
      transition: {
        type: "tween",
        duration: 0.3
      }
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "tween",
        duration: 0.4,
        delay: index * 0.08,
        ease: "easeOut"
      }
    }
  };

  const programVariants = {
    hidden: {
      opacity: 0,
      y: 15,
      scale: 0.98
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "tween",
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      className="rounded-xl bg-[#F3F4F4] border-2 border-[#FAFAFA80] p-2 shadow-black/5 shadow-xl drop-shadow-[0px_20px_40px_rgba(254, 242, 81, 0.5)] mb-4"
    >
      <div className="text-gray-900 space-y-2" onClick={() => window.location.href = `/fakultas/${faculty.slug}`}>
        <Text
          sizeMobile="text-sm"
          weight="font-semibold"
          text={faculty.name}
        />
        <motion.div
          className="flex flex-wrap gap-1"
          variants={cardVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {faculty?.programs?.map((program, idx) => (
            <motion.span
              key={`${program.slug}-${idx}`}
              variants={programVariants}
              className="text-[10px] md:text-sm bg-[#F0F0F0] border-2 border-[#FAFAFA80] rounded-lg px-2 py-2 hover:bg-primary cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              onClick={() => window.location.href = `/program-studi/${program.slug}`}
            >
              {program.name}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default FakultasCardMobile;