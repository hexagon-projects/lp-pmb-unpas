import Text from "./Text";

const PrestasiCard = ({ title, image, name }) => {
    const imageURL = import.meta.env.VITE_IMAGE_URL;

    return (
        <div className="relative w-full">
            <div className="w-full lg:h-[30vh] flex justify-center md:justify-between items-stretch gap-[16px] bg-white p-4 rounded-xl md:rounded-2xl lg:rounded-4xl shadow-black/5 shadow-xl drop-shadow-[0px_20px_40px_rgba(254, 242, 81, 0.5)] 
                transition-transform duration-500 ease-in-out hover:scale-102">
                <div className={`w-[40%] h-[16vh] md:h-[20vh] lg:h-full md:w-[40%] lg:w-[40%] flex items-center`}>
                    <img src={`${imageURL}/prestasis/${image}`} alt={title} 
                        className="w-full h-full object-cover rounded-lg md:rounded-xl lg:rounded-3xl" />
                </div>
                <div className={`w-[60%] md:w-[60%] lg:w-[60%] flex flex-col justify-center space-y-3 md:space-y-4`}>
                    <Text text={name} weight={'font-medium'} />
                    <Text lineClamp={'line-clamp-3 md:line-clamp-none'} text={title} weight={'font-bold'} />
                    <div className="px-4 py-2 bg-text/80 w-fit rounded-lg transition-colors duration-500 cursor-pointer">
                        <Text text={'Internasional'} weight={'font-bold'} color="text-black"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrestasiCard;
