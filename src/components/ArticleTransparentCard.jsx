import { useNavigate } from "react-router-dom";
import ArticleTitle from "./ArticleTitle";

const ArticleTransparentCard = ({ image, title, slug }) => {
    const imageURL = import.meta.env.VITE_IMAGE_URL;
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/artikel/${slug}`);
    };

    return (
        <div
            className="cursor-pointer h-full w-full flex flex-col justify-end p-4 rounded-lg bg-cover bg-center relative min-h-[200px] md:min-h-[250px] lg:min-h-[300px] 
                transition-transform transform hover:scale-105 hover:brightness-110 duration-300 ease-in-out"
            style={{ backgroundImage: `url(${imageURL}/posts/${image})` }}
            onClick={handleClick}
        >
            <div className="absolute inset-0 bg-black/40 rounded-lg transition-opacity hover:bg-black/50"></div>

            <div className="relative z-10 text-white">
                <ArticleTitle color="text-white break-words" title={title} />
            </div>
        </div>
    );
};

export default ArticleTransparentCard;
