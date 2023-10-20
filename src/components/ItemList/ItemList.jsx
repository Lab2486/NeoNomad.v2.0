import "./ItemList.css";
import Item from "../Item/Item";
import { ropa } from "../../data/ropa";
import { useEffect, useState } from "react";
import axios from "axios";

function ItemList() {
  const Productos = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
      axios
        .get("https://nomad-api-drtc.onrender.com/product")
        .then((res) => setProducts(res.data));
    }, []);
    console.log(products.rows);
  };
  Productos();
  return (
    <div className="itemList">
      {/* {ropa.map((objeto) => (
        <Item key={objeto.id} {...objeto} />
      ))} */}
    </div>
  );
}

export default ItemList;
