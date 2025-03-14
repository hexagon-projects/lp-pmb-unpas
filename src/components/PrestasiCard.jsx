import RichText from "./RichText";

const PrestasiCard = ({ title, image, text }) => {
    const imageURL = import.meta.env.VITE_IMAGE_URL;

    return (
        <div className="relative w-full ">
            <div className="w-full h-80">
                <img src={`${imageURL}/prestasis/${image}`} alt={title} className="w-full h-full object-cover rounded-lg" />
            </div>
            <div className="absolute -right-10 -bottom-10 w-76 bg-white shadow-md rounded-lg p-4">
                <RichText content={text}/>
            </div>
        </div>
    );
};

export default PrestasiCard;
