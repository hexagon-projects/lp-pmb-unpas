import { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { motion, AnimatePresence } from "framer-motion";
import MotionWrapper from "../../components/MotionWrapper";
import Title from "../../components/Title";
import Text from "../../components/Text";
import RichText from "../../components/RichText";

const ReasonSection = ({ data }) => {
    const [openDropdown, setOpenDropdown] = useState(null);
    const imageURL = import.meta.env.VITE_IMAGE_URL;
    console.log(data)
    console.log(`${imageURL}/unggulans/${data.image}`)

    const toggleDropdown = (id) => {
        setOpenDropdown(openDropdown === id ? null : id);
    };

    return (
        <MotionWrapper className={'w-full flex flex-col justify-center items-center text-center p-4 md:px-10 lg:px-12 space-y-4 md:space-y-8 lg:space-y-10'}>
            <div className="md:w-1/2">
                <Title title="Alasan Kuat Mengapa Calon Mahasiswa Harus Memilih Universitas Pasundan (UNPAS)" />
            </div>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {data.map((item) => (
                    <div key={item.id} className="w-full">
                        <div className="bg-gray-100 border border-white w-full lg:h-[10vh] xl:h-[10vh] flex justify-between items-center text-left shadow-lg drop-shadow-[0px_20px_40px_rgba(254, 242, 81, 0.5)] rounded-lg md:rounded-2xl p-4 cursor-pointer" onClick={() => toggleDropdown(item.id)}>
                            <Text weight={'font-semibold'} text={item.title} />
                            <BiChevronDown
                                size={26}
                                className={`transition-transform duration-500 text-text ${openDropdown === item.id ? "rotate-0" : "-rotate-90"}`}
                            />
                        </div>

                        <AnimatePresence>
                            {openDropdown === item.id && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="w-full overflow-hidden bg-gray-100 border border-white mt-2 shadow-lg drop-shadow-[0px_20px_40px_rgba(254, 242, 81, 0.5)] rounded-lg md:rounded-2xl"
                                >
                                    <div className="p-4 shadow-lg drop-shadow-[0px_20px_40px_rgba(254, 242, 81, 0.5)] w-full text-left space-y-2">
                                        <RichText content={item.description} />
                                        <img src={`${imageURL}/unggulans/${item.image}`} className="w-full h-[25vh] object-cover"/>
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
