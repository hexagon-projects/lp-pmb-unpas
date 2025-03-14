import { FaHome } from "react-icons/fa";
import ArticleTitle from "../ArticleTitle";
import RichText from "../RichText";

const HighlightCard = ({title, text}) => {
    return (
        <div className="group flex flex-col justify-start items-start text-start rounded-lg md:rounded-2xl lg:rounded-4xl p-4 md:p-6 cursor-pointer bg-white shadow-md space-y-3 md:space-y-4 hover:bg-blue-500 transition">
            <div className="bg-blue-500 p-2 rounded-full transition group-hover:bg-white">
                <FaHome size={30} className="text-white transition group-hover:text-blue-500" />
            </div>

            <div className="space-y-3 md:space-y-4">
                <ArticleTitle color="text-gray-900 transition group-hover:text-white" title={title} />
                <RichText lineclamp={'md:line-clamp-4'} sizeText="text-xs md:text-sm transition group-hover:text-white" content={text}/>
            </div>
        </div>
    );
};

export default HighlightCard;
