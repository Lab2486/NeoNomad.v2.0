import "./ItemList.css";

import { useEffect, useState } from "react";
import axios from "axios";
import Tarjeta from "../Tarjeta/Tarjeta";

function ItemList() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("https://nomad-api-drtc.onrender.com/product")
      .then((res) => setProducts(res.data));
  }, []);
  console.log(products.rows);

  return (
    <div className="itemListWrapper">
      <div className="itemList">
        {products.rows.map((productos) => (
          <Tarjeta key={productos.id} {...productos} />
        ))}
      </div>
    </div>
  );
}

export default ItemList;
