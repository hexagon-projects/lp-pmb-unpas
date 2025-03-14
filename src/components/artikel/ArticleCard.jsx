import { useNavigate } from "react-router-dom";
import RichText from "../RichText";

const ArticleCard = ({ data }) => {
    const navigate = useNavigate()
    const imageURL = import.meta.env.VITE_IMAGE_URL;

    const handleClick = (slug) => {
        navigate(`/artikel/${slug}`)
    }

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {data.map((item) => (
                <div key={item.id} className="cursor-pointer flex flex-col justify-between p-4 md:p-0 bg-white rounded-lg md:rounded-2xl lg:rounded-4xl shadow-md space-y-3" onClick={() => (handleClick(item.slug))}>
                    <div className="space-y-3">
                        <img src={`${imageURL}/posts/${item.image}`} alt={item.title} className="w-full h-30 md:h-40 lg:h-52 object-cover rounded-t-lg md:rounded-t-2xl lg:rounded-t-4xl" />
                        <div className="bg-white p-0 md:p-4 lg:p-8 md:rounded-b-md space-y-3">
                            <h3 className="font-semibold text-xs md:text-sm lg:text-base">{item.title}</h3>
                            <RichText lineclamp={'line-clamp-2'} sizeText="text-xs md:text-sm" content={item.description} />
                        </div>
                    </div>
                    <div className="md:p-4 lg:p-8 mt-2 flex justify-between items-center">
                        <p className="text-black font-bold uppercase text-xs md:text-sm lg:text-base cursor-pointer">Read More</p>
                        <p className="text-gray-700 font-semibold text-xs md:text-sm lg:text-base">{item.date}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ArticleCard;