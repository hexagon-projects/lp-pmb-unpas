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
    </div>
  );
};

export default TeknikBox;
