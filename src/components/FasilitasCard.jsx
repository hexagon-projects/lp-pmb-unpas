const FasilitasCard = ({ image, title }) => {
  const imageURL = import.meta.env.VITE_IMAGE_URL;

  return (
    <div className="relative w-full h-96 rounded-lg overflow-hidden group">
      <img
        src={`${imageURL}/facilities/${image}`}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />

      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/80 to-transparent"></div>

      <h3 className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm md:text-base lg:text-lg font-semibold text-center">
        {title}
      </h3>
    </div>
  );
};

export default FasilitasCard;
