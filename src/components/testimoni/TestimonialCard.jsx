import { FaQuoteRight } from "react-icons/fa";
import RichText from "../../components/RichText";

const TestimonialCard = ({ name, title, image, description, lineclamp }) => {
    const imageURL = import.meta.env.VITE_IMAGE_URL;

    return (
        <div className="bg-primary p-4 md:p-6 lg:p-8 shadow-md space-y-4 relative rounded-lg md:rounded-2xl lg:rounded-4xl">
            <div className="flex md:flex-row justify-start items-start gap-4">
                <img
                    src={`${imageURL}/testimonies/${image}`}
                    alt={name}
                    className="w-10 h-10 rounded-full"
                    loading="lazy"
                />
                <div className="space-y-2">
                    <p className="text-sm font-semibold">{name}</p>
                    <p className="text-xs text-gray-500">{title}</p>
                </div>
            </div>
            <RichText padding={'pb-2 md:pb-3'} content={description} lineclamp={lineclamp} />
            <div className="absolute bottom-0 right-0 rounded-lg p-4 xl:p-4">
                <FaQuoteRight className="text-text text-4xl md:text-4xl xl:text-4xl" />
            </div>
        </div>
    );
};

export default TestimonialCard;
