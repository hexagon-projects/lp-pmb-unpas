<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import Title from "../Title";

const TeknikBox = ({ image, title }) => {
  return (
    <div className="flex justify-center items-center bg-white rounded-lg md:rounded-2xl lg:rounded-4xl gap-4 shadow-md p-4 cursor-pointer transition-transform transform hover:scale-105 hover:shadow-lg">
      <img
        src={image}
        alt=""
        className="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 rounded-lg md:rounded-2xl lg:rounded-4xl"
        loading="lazy"
      />
      <div>
        <h2 className="text-sm md:text-base lg:text-base font-semibold">{title}</h2>
      </div>
=======
=======
>>>>>>> 8bbe4dc (First Commit)
=======
>>>>>>> origin/Budi
import { useNavigate } from "react-router-dom";

const TeknikBox = ({ image, title, slug }) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/program-studi/${slug}`)
  }

  return (
    <div className="w-full lg:w-full flex justify-start items-center bg-white rounded-lg md:rounded-2xl gap-4 shadow-lg drop-shadow-[0px_20px_40px_rgba(254, 242, 81, 0.5)] p-4 cursor-pointer transition-transform transform hover:scale-105 hover:shadow-lg" onClick={() => handleClick()}>
        <img
          src={image}
          alt={title}
          className="w-12 h-12 md:w-12 md:h-12 lg:w-16 lg:h-16 rounded-lg md:rounded-2xl object-cover"
          loading="lazy"
        />
        <div className="overflow-auto">
          <h2 className="text-sm md:text-base lg:text-base font-semibold">{title}</h2>
        </div>
      {/* <div className="lg:max-w-4xl flex items-center gap-4 md:gap-6 lg:gap-8">
      </div> */}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 1d241ff (ADD: transition close modal, loading fakultas; FIX: navbar;)
=======
>>>>>>> 8bbe4dc (First Commit)
=======
>>>>>>> origin/Budi
    </div>
  );
};

export default TeknikBox;
