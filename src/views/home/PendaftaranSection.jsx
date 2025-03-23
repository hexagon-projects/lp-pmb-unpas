import { Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Text from "../../components/Text";
import Title from "../../components/Title";
import Button from "../../components/Button";
import SelengkapnyaButton from "../../components/SelengkapnyaButton";

const PendaftaranSection = ({ image, title, subtitle, jalurPendaftaran }) => {
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
        <div className="w-full flex justify-center items-center">
            <div className="w-full md:w-[90%] lg:w-[90%] xl:w-[80%] flex flex-col gap-4 md:gap-6 lg:gap-10 p-4 md:px-10 lg:px-12">
                <div className="text-left space-y-2">
                    <Text text={title} color="text-text" weight={'font-bold'} />
                    <Title sizeMobile='text-2xl md:text-4xl lg:text-7xl' title={subtitle}/>
                </div>
                <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-4 md:gap-6 lg:gap-10">
                    <div className="w-full h-56 md:h-64 md:flex-1 md:w-full lg:w-[40%] lg:h-96 intro_container">
                        <img loading="lazy" src={image} alt="Section" className="w-full h-full object-cover rounded-lg md:rounded-2xl lg:rounded-4xl intro_img" />
                    </div>
                    <div className="w-full lg:w-[60%] space-y-3 md:space-y-4 flex flex-col items-start md:items-start">
                        {jalurPendaftaran.map((jalur, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className="bg-transparent w-full p-4 md:px-8 border border-black/20 flex gap-4 rounded-lg md:rounded-2xl lg:rounded-4xl cursor-pointer items-center"
                            >
                                <div className="p-3 rounded-full shadow-lg shadow-text/20 shadow-[0px_20px_40px_rgba(254, 242, 81, 0.7)]">
                                    <Calendar className="w-6 h-6 md:w-8 md:h-8 text-text" />
                                </div>
                                <div className="w-full space-y-2 flex flex-row justify-between items-center gap-4">
                                    <div>
                                        <Title sizeMobile="text-sm md:text-base lg:text-base" title={jalur.name} fontWeight="font-semibold"/>
                                        <div>
                                            <Text sizeMobile="text-xs md:text-xs" text={`Jadwal Pendaftaran: ${formatDate(jalur.start_date)}`} />
                                            <Text sizeMobile="text-xs md:text-xs" text={`Pendaftaran ditutup: ${formatDate(jalur.end_date)}`} />
                                        </div>
                                    </div>
                                    <Button rounded={'rounded-lg md:rounded-2xl lg:rounded-2xl'} hoverBgColor={'hover:border-3 hover:border-white/50'} text={'Daftar Sekarang'} bgColor="bg-primary" hoverColor={''} onClick={() => (handleClick(jalur.link))} paddingMobile="p-2" paddingTablet="md:px-2 md:py-2 lg:px-4 lg:py-4" />
                                </div>
                            </motion.div>
                        ))}
                        <SelengkapnyaButton onClick={handleClickJalur}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PendaftaranSection;
