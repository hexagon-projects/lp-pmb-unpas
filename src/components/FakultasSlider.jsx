import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Slider {...settings}>
        <div>
          <img
            src="https://via.placeholder.com/1200x500/FF5733/FFFFFF?text=Slide+1"
            alt="Slide 1"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
        <div>
          <img
            src="https://via.placeholder.com/1200x500/33FF57/FFFFFF?text=Slide+2"
            alt="Slide 2"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
        <div>
          <img
            src="https://via.placeholder.com/1200x500/3357FF/FFFFFF?text=Slide+3"
            alt="Slide 3"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </Slider>
    </div>
  );
};

export default Home;
