import "./Tarjeta.css";
import { Link } from "react-router-dom";

function Tarjeta({ name, price, id, image }) {
  return (
    <Link className="tarjetaWrapper" key={id} id={id} to={`/product/${id}`}>
      <div className="imgWrapper">
        <img className="tarjetaImg" src={image} alt="" />
      </div>
      <p className="tarjetaInfo">{name}</p>
      <p className="tarjetaInfo">{price}</p>
    </Link>
  );
}

export default Tarjeta;
