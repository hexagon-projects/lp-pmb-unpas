import { Calendar } from "lucide-react";
import { motion } from "framer-motion";
import MotionWrapper from "../MotionWrapper";
import Text from "../Text";
import Title from "../Title";
import Button from "../Button";
import { useNavigate } from "react-router-dom";

const PendaftaranSection = ({ image, title, subtitle, jalurPendaftaran, buttonText }) => {
    const navigate = useNavigate()

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString("id-ID", {
            day: "numeric",
            month: "long",
            year: "numeric",
        });
    };

    const handleClick = (link) => {
        window.open(link, "_blank");
    };

    const handleClickJalur = () => {
        navigate('/jalur')
    }

    return (
        <MotionWrapper type="scaleUp" delay={0.2} className="w-full flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6 lg:gap-10 p-4 md:px-10 lg:px-12">
            <div className="w-full md:w-1/2">
                <img loading="lazy" src={image} alt="Section" className="w-full h-full object-cover rounded-lg md:rounded-2xl lg:rounded-4xl" />
            </div>
            <div className="w-full lg:w-[70%] space-y-3 md:space-y-4 flex flex-col items-center md:items-start">
                <div className="text-center md:text-left">
                    <Text text={title} color="text-red-500" />
                    <Title title={subtitle} />
                </div>
                {jalurPendaftaran.map((jalur, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        className="w-full p-4 md:p-6 border flex gap-2 rounded-lg md:rounded-2xl lg:rounded-4xl cursor-pointer"
                    >
                        <Calendar size={30} />
                        <div className="space-y-2">
                            <Title sizeMobile="text-sm md:text-base lg:text-lg" title={jalur.name} />
                            <div>
                                <Text text={`Jadwal Pendaftaran: ${formatDate(jalur.start_date)}`} />
                                <Text text={`Pendaftaran ditutup: ${formatDate(jalur.end_date)}`} />
                            </div>
                            <Button text={'Daftar Sekarang'} bgColor="bg-secondary" hoverColor={''} onClick={()=>(handleClick(jalur.link))}/>
                        </div>
                    </motion.div>
                ))}
                <Button bgColor="bg-green-700" hoverColor={"bg-green-800"} textColor={'text-white'} text={buttonText} onClick={()=>handleClickJalur()}/>
            </div>
        </MotionWrapper>
    );
};

export default PendaftaranSection;
