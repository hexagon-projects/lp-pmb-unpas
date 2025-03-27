import { useState, useCallback, memo, useMemo } from "react";
import { BiChevronDown } from "react-icons/bi";
import { motion, AnimatePresence } from "framer-motion";
import Title from "../../components/Title";
import Text from "../../components/Text";
import RichText from "../../components/RichText";

const ReasonSection = ({ data = [] }) => {
    const [openDropdown, setOpenDropdown] = useState(null);

    const toggleDropdown = useCallback((id) => {
        setOpenDropdown(prev => prev === id ? null : id);
    }, []);

    const dropdownItems = useMemo(() => (
        data.map((item) => (
            <div key={item.id} className="w-full">
                <div className={`bg-[#F0F0F0] border border-white w-full flex flex-col justify-between items-start shadow-md rounded-xl md:rounded-2xl overflow-hidden cursor-pointer ${openDropdown === item.id ? "rounded-b-none" : "" }`}>
                    <button
                        className="w-full flex justify-between items-center px-4 py-4 md:py-5 text-left"
                        onClick={() => toggleDropdown(item.id)}
                        aria-expanded={openDropdown === item.id}
                    >
                        <div className="w-[90%]">
                            <Text
                                sizeText="text-xs md:text-sm lg:text-sm"
                                weight="font-semibold"
                                text={item.title}
                                leading="text-left"
                            />
                        </div>
                        <BiChevronDown
                            size={24}
                            className={`transition-transform duration-200 text-text ${openDropdown === item.id ? "rotate-0" : "-rotate-90"
                                }`}
                        />
                    </button>

                    <AnimatePresence>
                        {openDropdown === item.id && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.2 }}
                                className="w-full overflow-hidden"
                            >
                                <div className="p-4 pt-0 w-full text-left space-y-2">
                                    <RichText
                                        sizeText="text-xs md:text-sm lg:text-sm"
                                        content={item.description}
                                    />
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>

        ))
    ), [data, openDropdown, toggleDropdown]);

    return (
        <div className="w-full flex flex-col justify-center items-center text-center p-4 md:pt-8 lg:pt-10 md:px-8 lg:px-10 space-y-4 md:space-y-6 lg:space-y-8">
            <div className="md:w-[80%] xl:w-[65%]">
                <Title title="Alasan Memilih Universitas Pasundan (UNPAS)" />
            </div>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
                {dropdownItems}
            </div>
        </div>
    );
};

export default memo(ReasonSection);
