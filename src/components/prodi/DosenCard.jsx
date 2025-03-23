import { ArrowUpRight } from "lucide-react"
import { motion } from "framer-motion"
import Text from "../Text";
import ArticleTitle from "../ArticleTitle";
const imageURL = import.meta.env.VITE_IMAGE_URL;

const DosenCard = ({ name, title, image }) => {
    return (
        <div className="relative">
<<<<<<< HEAD
            <div className="w-full h-72 md:h-96 bg-cover dosen-card" style={{ backgroundImage: `url(${imageURL}/ourteams/${image})` }}>
=======
            <div className="w-full h-72 md:h-96 lg:h-[70vh] bg-cover bg-center bg-no-repeat dosen-card" style={{ backgroundImage: `url(${imageURL}/ourteams/${image})` }}>
>>>>>>> 1d241ff (ADD: transition close modal, loading fakultas; FIX: navbar;)
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/70 to-transparent"></div>

                <div className="w-[80%] p-4 md:p-6 h-full flex flex-col items-start justify-end gap-2 relative z-10">
                    <ArticleTitle color="text-white" title={title} />
                    <Text color="text-white" text={name} />
                </div>
            </div>

            <motion.div
                className="absolute bottom-1 right-0 z-50 rounded-xl bg-white"
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 200 }}
            >
                <ArrowUpRight className="w-8 md:w-11 h-8 md:h-11 bg-blue-500 text-white p-1 rounded-xl" />
            </motion.div>
        </div>
    );
};


export default DosenCard
