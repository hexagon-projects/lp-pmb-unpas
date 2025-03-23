import Text from "./Text";

const PrestasiCard = ({ title, image, widthImg = 'w-1/2 md:w-[40%]', widthText = 'w-1/2 md:w-[60%]' }) => {
    const imageURL = import.meta.env.VITE_IMAGE_URL;

    return (
        <div className="relative w-full">
            <div className="w-full lg:h-[32vh] flex justify-center items-stretch gap-[16px] bg-white p-4 rounded-lg md:rounded-2xl lg:rounded-4xl shadow-lg drop-shadow-[0px_20px_40px_rgba(254, 242, 81, 0.5)] 
                transition-transform duration-500 ease-in-out hover:scale-102 hover:shadow-lg">
                <div className={`${widthImg} flex items-center`}>
                    <img src={`${imageURL}/prestasis/${image}`} alt={title} 
                        className="w-full h-full object-cover rounded-lg md:rounded-2xl lg:rounded-4xl" />
                </div>
                <div className={`${widthText} flex flex-col justify-center space-y-3 md:space-y-4`}>
                    <Text text={'20 Januari 2025'} weight={'font-medium'} />
                    <Text lineClamp={'line-clamp-3 md:line-clamp-none'} text={title} weight={'font-bold'} />
                    <div className="px-4 py-2 bg-footer/80 w-fit rounded-lg transition-colors duration-500 cursor-pointer">
                        <Text text={'Internasional'} weight={'font-bold'} color="text-white"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrestasiCard;
