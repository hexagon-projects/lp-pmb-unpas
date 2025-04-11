import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import JalurCard from "./JalurCard";
import { TfiAnnouncement } from "react-icons/tfi";

const JalurItem = ({ item, index, onClick }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
        >
            <JalurCard
                icon={<TfiAnnouncement size={30} className="text-white" />}
                title={item.name}
                text={item.content}
                link={item.link}
                startDate={item.start_date}
                endDate={item.end_date}
                onClick={(e) => onClick(e, item)}
            />
        </motion.div>
    );
};

export default JalurItem;
