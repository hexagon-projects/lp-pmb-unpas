import { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { motion, AnimatePresence } from "framer-motion";
import MotionWrapper from "../MotionWrapper";
import Title from "../Title";
import Text from "../Text";
import RichText from "../RichText";

const ReasonSection = ({ data }) => {
    const [openDropdown, setOpenDropdown] = useState(null);

    const toggleDropdown = (id) => {
        setOpenDropdown(openDropdown === id ? null : id);
    };

    return (
        <MotionWrapper type="scaleUp" delay={0.2} className={'w-full flex flex-col justify-center items-center text-center p-4 md:px-10 lg:px-12 space-y-2 md:space-y-4'}>
            <div className="md:w-1/2">
                <Title title="Alasan Kuat Mengapa Calon Mahasiswa Harus Memilih Universitas Pasundan (UNPAS)" />
            </div>
            <div className="w-full space-y-2 md:space-y-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {data.map((item) => (
                    <div key={item.id} className="w-full">
                        <div
                            className="w-full flex justify-between items-center shadow-md rounded-lg p-4 cursor-pointer"
                            onClick={() => toggleDropdown(item.id)}
                        >
                            <Text weight={'font-semibold'} text={item.title} />
                            <BiChevronDown
                                size={20}
                                className={`transition-transform duration-300 ${openDropdown === item.id ? "rotate-180" : ""}`}
                            />
                        </div>

                        <AnimatePresence>
                            {openDropdown === item.id && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="w-full overflow-hidden"
                                >
                                    <div className="p-4 rounded-b-md shadow-md w-full text-left space-y-2">
                                        <RichText content={item.description} />
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </MotionWrapper>
    );
};

export default ReasonSection;
