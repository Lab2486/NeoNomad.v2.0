import React, { useState, useEffect } from "react";
import images from "../../data/carouselImgs";
import "./Carousel.css";

const Carousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((currentImageIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [currentImageIndex, images.length]);

  console.log(images.length);
  return (
    <div className="carousel">
      <img
        className="carrouselImg"
        src={images[currentImageIndex]}
        alt="carousel"
      />
    </div>
  );
};

export default Carousel;
