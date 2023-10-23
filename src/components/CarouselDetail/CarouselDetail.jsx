import React, { useState } from "react";
import "./CarouselDetail.css";

function CarouselDetail({ image }) {
  const [imagenActual, setImagen] = useState(0);
  const cantidad = image?.length;
  if (!Array.isArray(image) || cantidad === 0) return;

  const siguienteImagen = () => {
    setImagen(imagenActual === cantidad - 1 ? 0 : imagenActual + 1);
  };
  const anteriorImagen = () => {
    setImagen(imagenActual === 0 ? cantidad - 1 : imagenActual - 1);
  };
  return (
    <div className="carouselDetCont">
      <div className="carouselDetTitle">
        <h2>Latest Releases</h2>
      </div>
      <div className="carouselDet">
        <button className="btn" onClick={anteriorImagen}>
          ←
        </button>
        {imagenes.map((imagen, index) => {
          return (
            <div onClick={anteriorImagen}>
              {imagenActual === index && (
                <img
                  key={index}
                  src={imagen}
                  alt="imagen"
                  className="carouselDetImagen"
                />
              )}
            </div>
          );
        })}
        <button className="btnCarousel" onClick={siguienteImagen}>
          →
        </button>
      </div>
    </div>
  );
}

export default CarouselDetail;
