import { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { motion, AnimatePresence } from "framer-motion";
import Title from "../../components/Title";
import Text from "../../components/Text";
import RichText from "../../components/RichText";

const ReasonSection = ({ data }) => {
    const [openDropdown, setOpenDropdown] = useState(null);

    const toggleDropdown = (id) => {
        setOpenDropdown(openDropdown === id ? null : id);
    };

    return (
        <div className={'w-full flex flex-col justify-center items-center text-center p-4 md:pt-10 lg:pt-12 md:px-10 lg:px-12 space-y-4 md:space-y-8 lg:space-y-10'}>
            <div className="md:w-[80%] xl:w-[65%]">
                <Title title="Alasan Mengapa Calon Mahasiswa Harus Memilih Universitas Pasundan (UNPAS)" />
            </div>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {data.map((item) => (
                    <div key={item.id} className="w-full">
                        <div
                            className={`bg-[#F0F0F0] border border-white w-full flex flex-col justify-between items-start shadow-black/5 shadow-xl drop-shadow-[0px_20px_40px_rgba(254, 242, 81, 0.5)] rounded-xl md:rounded-2xl overflow-hidden cursor-pointer ${openDropdown === item.id ? "rounded-b-none" : ""
                                }`}
                            onClick={() => toggleDropdown(item.id)}
                        >
                            <div className="w-full flex justify-between items-center px-4 py-6 lg:h-[10vh] xl:h-[10vh]">
                                <div className="w-[90%]">
                                    <Text sizeText="text-xs md:text-sm lg:text-sm" weight={'font-semibold'} text={item.title} leading={'text-left'} />
                                </div>
                                <BiChevronDown
                                    size={26}
                                    className={`transition-transform duration-300 text-text ${openDropdown === item.id ? "rotate-0" : "-rotate-90"
                                        }`}
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
                                        <div className="p-4 pt-0 w-full text-left space-y-2">
                                            <RichText sizeText="text-xs md:text-sm lg:text-sm" content={item.description} />
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ReasonSection;