import "./ItemDetailContainer.css";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
function ItemDetailContainer() {
  const [product, setProduct] = useState([]);
  const id = useParams().id;
  useEffect(() => {
    axios
      .get(`https://nomad-api-drtc.onrender.com/product/${id}`)
      .then((res) => setProduct(res.data));
  }, []);
  console.log(product);

  return (
    <div className="itemDetailContainer">
      <ItemDetail {...product} />
    </div>
  );
}

export default ItemDetailContainer;
