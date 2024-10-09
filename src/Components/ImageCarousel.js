import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/ImageCarousel.css";

function ImageCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        <div>
          <img
            src="https://via.placeholder.com/1200x400.png?text=Slide+1"
            alt="Slide 1"
          />
        </div>
        <div>
          <img
            src="https://via.placeholder.com/1200x400.png?text=Slide+2"
            alt="Slide 2"
          />
        </div>
        <div>
          <img
            src="https://via.placeholder.com/1200x400.png?text=Slide+3"
            alt="Slide 3"
          />
        </div>
      </Slider>
    </div>
  );
}

export default ImageCarousel;
