import React, { useState } from "react";

function ImageCarousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  return (
    <div>
      <button onClick={prevImage}>Anterior</button>
      <img src={images[currentIndex]} alt="Imagen actual" />
      <button onClick={nextImage}>Siguiente</button>
    </div>
  );
}

export default ImageCarousel;
