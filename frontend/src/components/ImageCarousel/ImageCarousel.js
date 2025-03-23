import React, { useState } from "react";
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
      <button onClick={prevImage}>Anterior</button>
      <img src={images[currentIndex]} alt={`Imagen ${currentIndex + 1}`} />
      <button onClick={nextImage}>Siguiente</button>
    </div>
  );
};

export default ImageCarousel;