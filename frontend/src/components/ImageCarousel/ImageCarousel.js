import React, { useState } from "react";
import PropTypes from "prop-types";
import "./ImageCarousel.css";

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="image-carousel">
      <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} className="carousel-image" />
      <button onClick={prevImage} className="carousel-button prev">
        &#10094;
      </button>
      <button onClick={nextImage} className="carousel-button next">
        &#10095;
      </button>
    </div>
  );
};

ImageCarousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ImageCarousel;