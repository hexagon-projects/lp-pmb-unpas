const FasilitasCard = ({ image, title }) => {
  const imageURL = import.meta.env.VITE_IMAGE_URL;

  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <div className="relative w-full h-96 rounded-lg overflow-hidden group">
      <img
        src={`${imageURL}/facilities/${image}`}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
=======
    <div className="relative w-full h-52 md:h-64 lg:h-[60vh] rounded-lg md:rounded-2xl lg:rounded-4xl overflow-hidden group">
=======
    <div className="relative w-full h-[446px] md:h-64 lg:h-[60vh] rounded-lg md:rounded-2xl lg:rounded-4xl overflow-hidden group">
>>>>>>> 8bbe4dc (First Commit)
      <img
        src={`${imageURL}/facilities/${image}`}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
<<<<<<< HEAD
>>>>>>> 1d241ff (ADD: transition close modal, loading fakultas; FIX: navbar;)
=======
>>>>>>> 8bbe4dc (First Commit)
      />

      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/80 to-transparent"></div>

<<<<<<< HEAD
<<<<<<< HEAD
      <h3 className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm md:text-base lg:text-lg font-semibold text-center">
=======
      <h3 className="absolute bottom-4 left-4 text-white text-sm md:text-base lg:text-lg font-semibold text-left">
>>>>>>> 1d241ff (ADD: transition close modal, loading fakultas; FIX: navbar;)
=======
      <h3 className="absolute bottom-4 left-4 text-white text-sm md:text-base lg:text-lg font-semibold text-left">
>>>>>>> 8bbe4dc (First Commit)
        {title}
      </h3>
    </div>
  );
};

export default FasilitasCard;
