import { useState } from "react";
import "./Item.css";

function Item(props) {
  const { nombre, imagenFrente, imagenAtras, id, precio } = props;
  const [imagenActual, setImagenActual] = useState(imagenAtras);
  const [mostrandoImagenFrente, setMostrandoImagenfrente] = useState(true);
  const cambiarImagen = () => {
    if (mostrandoImagenFrente) {
      setImagenActual(imagenFrente);
      setMostrandoImagenfrente(false);
      console.log("EL MOUSE entro");
    } else {
      setImagenActual(imagenAtras);
      setMostrandoImagenfrente(true);
      console.log("EL MOUSE salio");
    }
  };
  return (
    <div className="itemContainer" key={id}>
      <div className="itemWrapper">
        {/* <div className="imagenContainer"></div> */}
        <div className="imagenContainer">
          <img
            className="imagen"
            src={imagenActual}
            alt="imagen"
            onMouseEnter={cambiarImagen}
            onMouseLeave={cambiarImagen}
          />
        </div>

        <div className="itemInfo">
          <h4>{nombre}</h4>
          <p>{precio}</p>
        </div>
      </div>
    </div>
  );
}

export default Item;
