import UserLayout from "./layouts/UserLayout";
import Section1 from "../assets/gedung.jpeg";
import Text from "../components/Text";
import Title from "../components/Title";
import { useEffect, useState } from "react";
import TestimoniService from "../fetching/testimoni";
import Pagination from "../components/Pagination";
import TestimonialCard from "../components/testimoni/TestimonialCard";
import AnimatedTitle from "../components/AnimatedTitle";

const Testimoni = () => {
    const [testimonial, setTestimonial] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
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

    return (
        <UserLayout
            bgLayoutColor="bg-[#F3F3F3]" bgColor={'bg-[#F3F3F3]'}
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
                        <TestimonialCard
                            key={item.id}
                            name={item.name}
                            title={item.title}
                            image={item.image}
                            description={item.description}
                            yt={item.yt_link}
                            imageURL={imageURL}
                        />
                    ))}
                </div>

                <Pagination
                    totalPages={totalPages}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
            </div>
        </UserLayout>
    );
};

export default Testimoni;
