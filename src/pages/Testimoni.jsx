import UserLayout from "./layouts/UserLayout";
import Section1 from "../assets/gedung.jpeg";
import Text from "../components/Text";
import Title from "../components/Title";
import { useEffect, useState } from "react";
import TestimoniService from "../fetching/testimoni";
import Pagination from "../components/Pagination";
import TestimonialCard from "../components/testimoni/TestimonialCard";
import AnimatedTitle from "../components/AnimatedTitle";
import CTASection from "../components/CTASection";
import { FaQuoteRight, FaExternalLinkAlt, FaPlay } from "react-icons/fa";
import RichText from "../components/RichText";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Testimoni = () => {
    const [testimonial, setTestimonial] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedTestimonial, setSelectedTestimonial] = useState(null);
    const itemsPerPage = 9;
    const imageURL = import.meta.env.VITE_IMAGE_URL;

    const fetchTestimoni = async () => {
        try {
            const response = await TestimoniService.getAllTestimoni();
            setTestimonial(response);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchTestimoni();
    }, []);

    const totalPages = Math.ceil(testimonial.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const displayedTestimonials = testimonial.slice(startIndex, endIndex);

    const handleCardClick = (testimonial) => {
        setSelectedTestimonial(testimonial);
    };

    const closePopup = () => {
        setSelectedTestimonial(null);
    };

    const TestimonialPopup = ({ testimonial, onClose }) => {
        const [isVideoOpen, setIsVideoOpen] = useState(false);

        const toggleVideoModal = () => {
            if (testimonial.yt_link) setIsVideoOpen(prev => !prev);
        };
        return (
            <>
                <motion.div
                    className="w-full h-screen fixed inset-0 z-50 flex items-center justify-center bg-black/50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                >
                    <motion.div
                        className="relative bg-primary rounded-xl md:rounded-2xl lg:rounded-3xl max-w-2xl w-full max-h-[90vh] p-6 md:p-8 space-y-4 m-4 md:m-0"
                        onClick={(e) => e.stopPropagation()}
                        initial={{ scale: 0.9 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0.9 }}
                        transition={{ duration: 0.2 }}
                    >
                        <button
                            className="absolute -top-3 -right-3 bg-red-500 text-white p-2 rounded-full z-10 cursor-pointer"
                            onClick={onClose}
                            aria-label="Close popup"
                        >
                            <X size={20} />
                        </button>

                        <div className="flex items-start gap-4">
                            <img
                                src={`${imageURL}/testimonies/${testimonial.image}`}
                                alt={testimonial.name}
                                className="w-10 h-10 rounded-full object-cover"
                                loading="lazy"
                                width={40}
                                height={40}
                            />
                            <div className="space-y-1">
                                <p className="text-sm font-semibold">{testimonial.name}</p>
                                <p className={`text-xs text-gray-500`}>{testimonial.title}</p>
                            </div>
                        </div>

                        <div className="max-h-[50vh] overflow-y-auto">
                            <RichText
                                padding="pb-2 md:pb-2 lg:pb-4"
                                content={testimonial.description}
                            />
                        </div>

                        <div className="flex justify-between items-center">
                            {testimonial.yt_link && (
                                <button
                                    className={`flex gap-2 items-center px-4 py-2 rounded-lg text-sm transition-colors bg-footer text-white hover:bg-footer/90 cursor-pointer`}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        toggleVideoModal();
                                    }}
                                    aria-label="Play testimonial video"
                                >
                                    Play <FaPlay size={12} />
                                </button>
                            )}
                            <div className="p-2">
                                <FaQuoteRight className="text-text text-2xl md:text-3xl" />
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Video Popup */}
                {isVideoOpen && (
                    <motion.div
                        className="h-screen fixed inset-0 flex items-center bg-black/60 justify-center z-[60]"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        onClick={toggleVideoModal}
                    >
                        <motion.div
                            className="relative w-[90%] md:w-[80%] lg:w-[60%] aspect-video border-2 border-white rounded-xl md:rounded-2xl lg:rounded-3xl"
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.9 }}
                            transition={{ duration: 0.2 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                className="absolute -top-3 -right-3 bg-red-500 text-white p-1 rounded-full z-10 hover:bg-red-600 transition-colors cursor-pointer"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    toggleVideoModal();
                                }}
                                aria-label="Close video"
                            >
                                <X size={24} />
                            </button>
                            <iframe
                                width="100%"
                                height="100%"
                                src={`https://www.youtube-nocookie.com/embed/${(testimonial.yt_link)}?autoplay=1`}
                                title={`${testimonial.name}'s Testimonial`}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="rounded-xl md:rounded-2xl lg:rounded-3xl"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </>
        );
    };

    return (
        <UserLayout
            bgLayoutColor="bg-[#F3F4F4]" bgColor={'bg-[#F3F3F3]'}
            position={"fixed"}
            margin={""}
            titleColor={"text-black"}
            paddingDekstop={"md:py-3 md:px-3 lg:py-6 lg:px-6"}
            paddingTop={'lg:pt-30'}
            type={'fadeInUp'} duration={0.5}
        >
            <div className="relative p-5 md:px-10 lg:px-15 space-y-12 md:space-y-16 lg:space-y-[66px]">
                <div className="w-full h-50 md:h-60 lg:h-[60vh]">
                    <img src={Section1} alt="" className="w-full h-full object-cover rounded-lg md:rounded-2xl lg:rounded-4xl" />
                </div>
                <div className="flex flex-col justify-center items-center text-center space-y-[16px]">
                    <div className="w-fit p-2 rounded-full border-2 border-black/20">
                        <Text sizeText="text-base md:text-lg lg:text-xl" text={'Testimoni'} color="text-text" weight={'font-medium'} />
                    </div>
                    <AnimatedTitle text={'Kata Mereka Tentang Unpas'} />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
                    {displayedTestimonials.map((item) => (
                        <div
                            key={item.id}
                            onClick={() => handleCardClick(item)}
                            className="cursor-pointer"
                        >
                            <TestimonialCard
                                name={item.name}
                                title={item.title}
                                image={item.image}
                                description={item.description}
                                yt={item.yt_link}
                                imageURL={imageURL}
                            />
                        </div>
                    ))}
                </div>

                <AnimatePresence>
                    {selectedTestimonial && (
                        <TestimonialPopup
                            testimonial={selectedTestimonial}
                            onClose={closePopup}
                        />
                    )}
                </AnimatePresence>

                <Pagination
                    totalPages={totalPages}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />

                <CTASection />
            </div>
        </UserLayout>
    );
};

export default Testimoni;