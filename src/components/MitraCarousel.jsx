import React from "react";

const MitraCarousel = ({ datas }) => {
    const imageURL = import.meta.env.VITE_IMAGE_URL;

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    const repeatedData = [...datas, ...datas];

    return (
        <div className="w-full overflow-hidden relative">
            <div className="flex items-center space-x-8 md:space-x-14 lg:space-x-20 animate-marquee">
=======
=======
>>>>>>> 8bbe4dc (First Commit)
=======
>>>>>>> origin/Budi
    const repeatedData = Array.from({ length: 10 }).flatMap(() => datas);

    return (
        <div className="w-full overflow-hidden relative">
            <div className="flex animate-marquee">
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 1d241ff (ADD: transition close modal, loading fakultas; FIX: navbar;)
=======
>>>>>>> 8bbe4dc (First Commit)
=======
>>>>>>> origin/Budi
                {repeatedData.map((data, index) => (
                    <img
                        key={index}
                        src={`${imageURL}/partners/${data.image}`}
                        alt={data.name}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                        className="w-24 h-24 object-contain"
=======
                        className="w-24 h-24 md:w-36 md:h-36 lg:w-56 lg:h-56 object-contain mx-4"
>>>>>>> 1d241ff (ADD: transition close modal, loading fakultas; FIX: navbar;)
=======
                        className="w-24 h-24 md:w-36 md:h-36 lg:w-56 lg:h-56 object-contain mx-4"
>>>>>>> 8bbe4dc (First Commit)
=======
                        className="w-24 h-24 md:w-36 md:h-36 lg:w-56 lg:h-56 object-contain mx-4"
>>>>>>> origin/Budi
                    />
                ))}
            </div>
        </div>
    );
};

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
export default MitraCarousel;
=======
export default MitraCarousel;
>>>>>>> 1d241ff (ADD: transition close modal, loading fakultas; FIX: navbar;)
=======
export default MitraCarousel;
>>>>>>> 8bbe4dc (First Commit)
=======
export default MitraCarousel;
>>>>>>> origin/Budi
