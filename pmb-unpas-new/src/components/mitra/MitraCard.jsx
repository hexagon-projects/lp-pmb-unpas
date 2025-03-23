import RichText from "../RichText";
import Text from "../Text";

const MitraCard = ({ title, image, widthImg = 'w-1/2 md:w-[40%]', widthText = 'w-1/2 md:w-[60%]', onClick, description, linkWeb }) => {
    const imageURL = import.meta.env.VITE_IMAGE_URL;

    return (
        <div className="relative w-full h-full cursor-pointer" onClick={onClick}>
            <div className="w-full h-full flex justify-center place-items-stretch gap-4 bg-white p-4 rounded-xl md:rounded-2xl lg:rounded-4xl shadow-black/5 shadow-xl drop-shadow-[0px_20px_40px_rgba(254, 242, 81, 0.5)] 
                transition-transform duration-500 ease-in-out hover:scale-105 hover:shadow-lg">
                <div className={`${widthImg} flex items-center`}>
                    <img src={`${imageURL}/partners/${image}`} alt={title} 
                        className="w-full h-full object-contain rounded-xl md:rounded-2xl lg:rounded-4xl" />
                </div>
                <div className={`${widthText} flex flex-col justify-center gap-4 min-h-[150px]`}>
                    <div onClick={() => window.location.href = linkWeb}>
                    <Text lineClamp={'line-clamp-3 md:line-clamp-none'} text={title} weight={'font-bold'} />
                    </div>
                    <RichText content={description}/>
                    <div className="px-4 py-2 bg-primary/70 text-black w-fit rounded-lg transition-colors duration-500 hover:bg-primary/90">
                        <Text text={'Selengkapnya'} weight={'font-bold'} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MitraCard;
